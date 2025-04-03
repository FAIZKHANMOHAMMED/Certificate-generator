import React from 'react';
import { CertificateData } from '../types/certificate';

interface CertificateTemplateProps {
  data: CertificateData;
}

export const CertificateTemplate: React.FC<CertificateTemplateProps> = ({ data }) => {
  return (
    <div 
      className={`relative ${data.orientation === 'portrait' ? 'w-[794px] h-[1123px]' : 'w-[1123px] h-[794px]'} bg-white p-8`} 
      id="certificate-template"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {/* Header with wave design */}
      <div className="absolute top-0 left-0 right-0 h-[180px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-white to-blue-900">
          <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.3' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="absolute top-6 left-8">
          <img 
            src="https://raw.githubusercontent.com/yourusername/certificate-generator/main/public/logo.png" 
            alt="India Drone Academy"
            className="h-16"
          />
          <p className="text-sm mt-1 text-gray-600">Drone Technology - A Career Opportunity</p>
        </div>
        <div className="absolute top-6 right-8">
          <div className="bg-white p-3 border border-gray-300 rounded-sm">
            <p className="text-sm font-semibold text-gray-600">Certificate No:</p>
            <p className="text-lg font-bold">{data.certificateNo}</p>
          </div>
        </div>
      </div>

      {/* Certificate Title */}
      <div className="absolute top-[200px] left-0 right-0 text-center">
        <h1 className="text-4xl font-bold text-[#8B7355] tracking-wide">CERTIFICATE OF COMPLETION</h1>
        <p className="text-xl mt-6 text-[#8B7355]">This is to Certify that</p>
      </div>

      {/* Name Banner */}
      <div className="absolute top-[300px] left-0 right-0 flex justify-center">
        <div className="bg-blue-500 text-white py-3 px-12 text-2xl font-bold min-w-[500px] text-center relative">
          {data.name}
          <div className="absolute -left-6 top-0 h-full w-6 overflow-hidden">
            <div className="bg-blue-600 h-full w-12 transform rotate-45 origin-right"></div>
          </div>
          <div className="absolute -right-6 top-0 h-full w-6 overflow-hidden">
            <div className="bg-blue-600 h-full w-12 transform -rotate-45 origin-left"></div>
          </div>
        </div>
      </div>

      {/* Course Description */}
      <div className="absolute top-[380px] left-0 right-0 text-center">
        <p className="text-lg leading-relaxed">
          Has successfully completed the DGCA approved Remote Pilot Training Course
          <br />
          conducted by Drone Academy Pvt Ltd.
        </p>
      </div>

      {/* Personal Details */}
      <div className="absolute top-[460px] left-[80px] right-[80px]">
        <div className="grid grid-cols-3 gap-8 text-gray-700 mb-6">
          <div>
            <p className="font-semibold mb-1">Aadhar No:</p>
            <p>{data.aadharNo}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Sex:</p>
            <p>{data.sex}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">DOB:</p>
            <p>{data.dob}</p>
          </div>
        </div>
        <div className="mb-8">
          <p className="font-semibold mb-1">Address:</p>
          <p className="text-gray-700">{data.address}</p>
        </div>
      </div>

      {/* Training Details */}
      <div className="absolute top-[580px] left-[80px] right-[80px]">
        <div className="border-t border-b border-gray-300 py-6">
          <p className="font-bold mb-4">TRAINED ON UAS HAVING UIN: {data.uin}</p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <p className="font-bold text-gray-600 mb-1">CATEGORY OF UAS</p>
              <p className="text-gray-800">ROTORCRAFT</p>
            </div>
            <div>
              <p className="font-bold text-gray-600 mb-1">SUB-CATEGORY OF UAS</p>
              <p className="text-gray-800">RPAS</p>
            </div>
            <div>
              <p className="font-bold text-gray-600 mb-1">CLASS OF UAS</p>
              <p className="text-gray-800">SMALL</p>
            </div>
            <div>
              <p className="font-bold text-gray-600 mb-1">VLOS/BVLOS</p>
              <p className="text-gray-800">VLOS ONLY</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Hours */}
      <div className="absolute top-[780px] left-[80px] right-[80px]">
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <p className="font-bold text-gray-600 mb-2">GROUND CLASSES:</p>
            <p className="text-gray-800">{data.groundClasses}</p>
          </div>
          <div>
            <p className="font-bold text-gray-600 mb-2">SIMULATION CLASSES:</p>
            <p className="text-gray-800">{data.simulationClasses}</p>
          </div>
          <div className="col-span-2">
            <p className="font-bold text-gray-600 mb-2">FLYING TRAINING:</p>
            <p className="text-gray-800">{data.flyingTraining}</p>
          </div>
        </div>
      </div>

      {/* Signatures */}
      <div className="absolute bottom-[180px] left-[80px] right-[80px] flex justify-between items-end">
        <div className="text-center w-[200px]">
          <div className="border-b border-gray-400 pb-2 mb-2">
            <img 
              src="/signatures/manager.png" 
              alt="Manager Signature" 
              className="h-16 mx-auto object-contain"
            />
          </div>
          <p className="text-gray-600 font-medium">Accountable Manager</p>
        </div>
        <div className="text-center">
          <img 
            src="https://raw.githubusercontent.com/yourusername/certificate-generator/main/public/seal.png" 
            alt="Seal" 
            className="h-28 mx-auto mb-2"
          />
        </div>
        <div className="text-center w-[200px]">
          <div className="border-b border-gray-400 pb-2 mb-2">
            <img 
              src="/signatures/trainer.png" 
              alt="Trainer Signature" 
              className="h-16 mx-auto object-contain"
            />
          </div>
          <p className="text-gray-600 font-medium">RPA Trainer</p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <p className="text-center text-gray-600 mb-8">
          <span className="font-semibold">Date of Issue:</span> {data.dateOfIssue}
        </p>
        <div className="bg-blue-800 h-20 flex items-center justify-center">
          <p className="text-white mr-8 font-medium">In Collaboration With</p>
          <div className="flex items-center space-x-8">
            <img 
              src="https://raw.githubusercontent.com/yourusername/certificate-generator/main/public/nsdc-logo.png" 
              alt="NSDC" 
              className="h-12"
            />
            <img 
              src="https://raw.githubusercontent.com/yourusername/certificate-generator/main/public/dgca-logo.png" 
              alt="DGCA" 
              className="h-12"
            />
            <img 
              src="https://raw.githubusercontent.com/yourusername/certificate-generator/main/public/assam-logo.png" 
              alt="Government of Assam" 
              className="h-12"
            />
            <img 
              src="https://raw.githubusercontent.com/yourusername/certificate-generator/main/public/asrlm-logo.png" 
              alt="ASRLM" 
              className="h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};