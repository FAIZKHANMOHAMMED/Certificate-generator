import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CertificateForm } from './components/CertificateForm';
import { CertificateTemplate } from './components/CertificateTemplate';
import { CertificateData } from './types/certificate';
import JSZip from 'jszip';
import html2canvas from 'html2canvas';

function App() {
  const [processing, setProcessing] = useState(false);

  const handleGenerateCertificates = async (data: CertificateData[]) => {
    try {
      setProcessing(true);
      const zip = new JSZip();
      
      for (const certificate of data) {
        // Create a temporary container for the certificate
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.left = '-9999px';
        document.body.appendChild(container);

        // Render the certificate template
        const root = createRoot(container);
        root.render(<CertificateTemplate data={certificate} />);

        // Wait for images to load
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Convert to canvas and then to JPG
        const element = container.firstChild as HTMLElement;
        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          logging: false
        });

        // Convert canvas to blob
        const blob = await new Promise<Blob>(resolve => {
          canvas.toBlob(blob => resolve(blob!), 'image/jpeg', 0.95);
        });

        // Add to zip
        zip.file(`${certificate.name}_certificate.jpg`, blob);

        // Cleanup
        root.unmount();
        document.body.removeChild(container);
      }
      
      // Generate and download zip
      const content = await zip.generateAsync({ type: 'blob' });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'certificates.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating certificates:', error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white text-xl font-semibold">
                Certificate Generator
              </span>
            </div>
          </div>
        </div>
      </nav>
      <main className="py-10">
        <CertificateForm onSubmit={handleGenerateCertificates} processing={processing} />
      </main>
    </div>
  );
}

export default App;