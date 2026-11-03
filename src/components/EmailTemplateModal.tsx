import React from 'react';
import { X, Copy, Check, Mail } from 'lucide-react';
import { CandidateProfile } from '../types';

interface EmailTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CandidateProfile;
}

export const EmailTemplateModal: React.FC<EmailTemplateModalProps> = ({ isOpen, onClose, profile }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const isGulf = profile.region === 'middle_east';
  const isBD = profile.region === 'bangladesh';

  const emailSubject = isBD
    ? `Application for the position of ${profile.personalInfo.targetJobTitle} - Md. Shakil Hossain`
    : isGulf
    ? `Job Application: ${profile.personalInfo.targetJobTitle} - Md. Shakil Hossain (Gulf Employment Visa Candidate)`
    : `Job Application: ${profile.personalInfo.targetJobTitle} - Md. Shakil Hossain (European Work Permit Candidate)`;

  const emailBody = isBD
    ? `Dear Hiring Team / Human Resources,

I hope this email finds you well.

I am writing to express my strong interest in the ${profile.personalInfo.targetJobTitle} position currently available with your organization in Bangladesh.

I hold a 4-year Diploma in Computer Engineering (CSE) from Naogaon Polytechnic Institute (CGPA 3.78/4.00) and bring over 2 years of progressive industry experience in Dhaka. Currently, I serve as an IT & Automation Specialist at Perlov Medical Services Ltd, managing local networks, CCTV surveillance, hardware maintenance, and AI automation workflows. Previously, at Golden Harvest InfoTech Ltd, I performed large-scale data entry operations with a verified 98% accuracy score.

I am technically proficient in hardware/software troubleshooting, LAN/WAN networks, Advanced Excel, modern AI tools, and fast typing in both English and Bengali. I am dedicated, detail-oriented, and accustomed to ensuring high system stability and zero operational downtime.

I reside in Mogbazar, Dhaka, and am available for immediate appointment. Please find attached my complete Curriculum Vitae for your kind review. I would welcome the opportunity to discuss my qualifications in an interview at your convenience.

Thank you very much for your time and consideration.

Yours sincerely,

Md. Shakil Hossain
Phone / WhatsApp: ${profile.personalInfo.phone}
Email: ${profile.personalInfo.email}
Address: ${profile.personalInfo.address}, ${profile.personalInfo.city}, ${profile.personalInfo.country}
Website: ${profile.personalInfo.website}`
    : isGulf
    ? `Dear Hiring Manager / Recruitment Team,

I hope this email finds you well.

I am writing to formally submit my application for the position of ${profile.personalInfo.targetJobTitle} with your esteemed company in the Gulf region.

I am a disciplined, physically fit, and hardworking 24-year-old candidate from Bangladesh. I hold a 4-year Diploma in Computer Engineering and bring solid hands-on experience in fast-paced operational roles, equipment care, reliable team collaboration, and high-accuracy data management (98% audited score). I communicate fluently in English, have basic conversational Arabic for friendly workplace greetings, and hold a valid driving license.

I hold a valid International Passport (with over 4 years of remaining validity), a clean government police clearance certificate, and am fully prepared to undergo GAMCA / Wafid medical fitness examination immediately. I am seeking legal employer sponsorship for an Employment Visa and am available for immediate deployment upon visa issuance.

Please find attached my Curriculum Vitae and formal Application Letter for your kind review. I am available for an online interview via Zoom, Google Meet, or WhatsApp at your earliest convenience.

Thank you very much for your time and kind consideration.

Yours respectfully,

Md. Shakil Hossain
Phone / WhatsApp: ${profile.personalInfo.phone}
Email: ${profile.personalInfo.email}
Address: ${profile.personalInfo.address}, ${profile.personalInfo.city}, ${profile.personalInfo.country}
Website: ${profile.personalInfo.website}`
    : `Dear Hiring Team / Human Resources,

I hope this email finds you well.

I am writing to formally submit my application for the position of ${profile.personalInfo.targetJobTitle} with your company in Europe.

I am a disciplined and hardworking 24-year-old professional from Bangladesh. I hold a 4-year Diploma in Computer Engineering and have solid hands-on experience in fast-paced operational environments, equipment care, and reliable team execution. I possess high physical stamina, excellent punctuality, and good communicative English.

I have a valid International Passport (valid for more than 4 years), a clean police clearance certificate, and complete medical fitness ready for European visa processing. I am seeking legal employer sponsorship for a European Work Permit and National Visa D. I am prepared to relocate immediately upon approval and commit to a long-term contract.

Please find attached my Europass Curriculum Vitae and formal Cover Letter for your kind review. I am available for an online interview via Zoom, Google Meet, or WhatsApp at your convenience.

Thank you very much for your time and consideration.

Yours sincerely,

Md. Shakil Hossain
Phone / WhatsApp: ${profile.personalInfo.phone}
Email: ${profile.personalInfo.email}
Address: ${profile.personalInfo.address}, ${profile.personalInfo.city}, ${profile.personalInfo.country}
Website: ${profile.personalInfo.website}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`Subject: ${emailSubject}\n\n${emailBody}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0e417a] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-white text-base">European Employer Cold Email Template</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-700">
          <p className="text-slate-600">
            কোম্পানির ইমেইলে সরাসরি আবেদন করার জন্য নিচের রেডিমেড ফরমাল ইমেইলটি কপি করে ব্যবহার করুন। সাথে আপনার ডাউনলোড করা <strong>Europass CV PDF</strong> ফাইলটি অ্যাটাচ করবেন।
          </p>

          <div className="space-y-1">
            <span className="font-bold text-slate-800">Email Subject:</span>
            <div className="p-2 bg-slate-50 border border-slate-200 rounded font-medium text-slate-900 select-all">
              {emailSubject}
            </div>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-slate-800">Email Body:</span>
            <pre className="p-3 bg-slate-50 border border-slate-200 rounded font-sans text-slate-800 whitespace-pre-wrap text-[11.5px] leading-relaxed select-all">
              {emailBody}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex justify-between items-center">
          <span className="text-[11px] text-slate-500">Attach both CV and Cover Letter PDF</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-[#0e417a] hover:bg-[#0c3563] text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Subject & Email'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 bg-white border border-slate-300 text-slate-700 text-xs font-medium rounded-md hover:bg-slate-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
