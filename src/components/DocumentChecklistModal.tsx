import React, { useState } from 'react';
import { X, CheckCircle2, Circle, AlertCircle, FileText, Printer, ExternalLink, Download } from 'lucide-react';

interface DocumentChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName: string;
}

interface ChecklistItem {
  id: string;
  category: 'primary' | 'medical' | 'attestation' | 'departure';
  title: string;
  titleBn: string;
  description: string;
  isReady: boolean;
  authority: string;
  requiredFor: string;
}

export const DocumentChecklistModal: React.FC<DocumentChecklistModalProps> = ({
  isOpen,
  onClose,
  candidateName,
}) => {
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: 'doc-passport',
      category: 'primary',
      title: 'Machine Readable / E-Passport',
      titleBn: 'আন্তর্জাতিক ই-পাসপোর্ট (মেয়াদ ৪+ বছর)',
      description: 'Minimum 2 blank pages, no damage. Valid for at least 1-4 years for long-term work visa.',
      isReady: true,
      authority: 'Department of Immigration & Passports, Bangladesh',
      requiredFor: 'Europe, Middle East, International Travel',
    },
    {
      id: 'doc-pcc',
      category: 'primary',
      title: 'Police Clearance Certificate (PCC)',
      titleBn: 'অনলাইন পুলিশ ক্লিয়ারেন্স সার্টিফিকেট',
      description: 'Obtained via pcc.police.gov.bd, signed by Police Superintendent and attested by Ministry of Foreign Affairs (MOFA).',
      isReady: true,
      authority: 'Bangladesh Police & MOFA',
      requiredFor: 'European National Visa D & Gulf Work Permits',
    },
    {
      id: 'doc-edu',
      category: 'attestation',
      title: 'Diploma & SSC Academic Certificates & Transcripts',
      titleBn: 'ডিপ্লোমা ইন কম্পিউটার ইঞ্জিনিয়ারিং ও এসএসসি মূল সনদ',
      description: 'Naogaon Polytechnic Institute & Mithapur B.L. High School certificates attested by BTEB, Education Board & MOFA.',
      isReady: true,
      authority: 'BTEB, Rajshahi Board & Ministry of Foreign Affairs',
      requiredFor: 'All Skilled & Semi-Skilled Visa Categories',
    },
    {
      id: 'doc-exp',
      category: 'primary',
      title: 'Experience & Release Letters',
      titleBn: 'চাকরির প্রত্যয়নপত্র ও রিলিজ লেটার',
      description: 'Formal experience letter on official company letterhead from Perlov Medical Services Ltd and Golden Harvest InfoTech Ltd.',
      isReady: true,
      authority: 'Perlov Medical Services Ltd & Golden Harvest InfoTech',
      requiredFor: 'Employer Verification & Embassy Review',
    },
    {
      id: 'doc-medical',
      category: 'medical',
      title: 'GAMCA (Wafid) / EU Health Clearance Certificate',
      titleBn: 'মেডিকেল ফিটনেস টেস্ট রিপোর্ট (GAMCA / সরকার অনুমোদিত)',
      description: 'Chest X-Ray, Blood screening (Hepatitis B/C, HIV, VDRL), physical fitness certificate.',
      isReady: true,
      authority: 'GAMCA Approved Diagnostic Centers / Civil Surgeon',
      requiredFor: 'Gulf GCC Countries (Saudi, UAE, Qatar) & EU Embassies',
    },
    {
      id: 'doc-photos',
      category: 'primary',
      title: 'Biometric Passport-Sized Photographs',
      titleBn: 'বায়োমেট্রিক ল্যাব প্রিন্ট ছবি (সাদা ব্যাকগ্রাউন্ড)',
      description: 'EU Standard: 35mm x 45mm, 80% face visible, white background, matte paper. GCC: 2x2 inch format.',
      isReady: true,
      authority: 'Studio Lab Print',
      requiredFor: 'Embassy Visa Submission & Work Permit Files',
    },
    {
      id: 'doc-nid',
      category: 'primary',
      title: 'National ID (NID Smart Card) & English Notary',
      titleBn: 'স্মার্ট জাতীয় পরিচয়পত্র (NID) ও নোটারি কপি',
      description: 'Original 10-digit Smart NID card with verified English translation notary if required.',
      isReady: true,
      authority: 'Election Commission of Bangladesh',
      requiredFor: 'Identity Verification & BMET Registration',
    },
    {
      id: 'doc-driving',
      category: 'primary',
      title: 'BRTA Driving License (Optional / Only for Driving Roles)',
      titleBn: 'বিআরটিএ ড্রাইভিং লাইসেন্স (প্রযোজ্য ক্ষেত্রে / ঐচ্ছিক)',
      description: 'শুধুমাত্র ড্রাইভার বা ডেলিভারি রাইডার পদের ক্ষেত্রে প্রয়োজন; সাধারণ আইটি, ফ্যাক্টরি, ফার্মিং বা অফিস জবের জন্য প্রয়োজন নেই।',
      isReady: false,
      authority: 'Bangladesh Road Transport Authority (BRTA)',
      requiredFor: 'Optional (Delivery, Courier, Transport Roles Only)',
    },
    {
      id: 'doc-bmet',
      category: 'departure',
      title: 'BMET Manpower Smart Card (Ami Probashi)',
      titleBn: 'বিএমইটি স্মার্ট ম্যানপাওয়ার কার্ড (আমি প্রবাসী)',
      description: 'Mandatory government overseas clearance certificate issued after visa issuance prior to airport immigration departure.',
      isReady: false,
      authority: 'Bureau of Manpower, Employment and Training (BMET)',
      requiredFor: 'Final Airport Clearance from Hazrat Shahjalal Int. Airport',
    },
    {
      id: 'doc-boesl-reg',
      category: 'departure',
      title: 'BOESL Online Candidate Registration Slip',
      titleBn: 'বোয়েসেল অনলাইন প্রার্থী নিবন্ধন স্লিপ (employee.oep.gov.bd)',
      description: 'অনলাইন রেজিস্ট্রেশন কপি (বিজ্ঞপ্তি নং: ৪২.০২.০০০০.০৩০.৯৯.০০০.১৯.৩০০৯,২৬/৩১২৪)। ইন্টারভিউয়ের দিন সাথে আনতে হবে।',
      isReady: true,
      authority: 'BOESL (employee.oep.gov.bd)',
      requiredFor: 'DHL Supply Chain Malaysia BOESL Interview',
    },
    {
      id: 'doc-vax',
      category: 'medical',
      title: 'WHO Approved Vaccine Certificate (Suraksha)',
      titleBn: 'কোভিড-১৯ ও স্বাস্থ্য টিকাদান সনদ',
      description: 'Verified vaccine certificate with QR code downloaded from the official Suraksha portal.',
      isReady: true,
      authority: 'DGHS, Ministry of Health, Bangladesh',
      requiredFor: 'International Travel Compliance',
    },
  ]);

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isReady: !item.isReady } : item))
    );
  };

  const readyCount = items.filter((i) => i.isReady).length;
  const percentage = Math.round((readyCount / items.length) * 100);

  const handlePrintChecklist = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0e417a] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                ভিসা ও চাকরির আবেদন ডকুমেন্টস চেকলিস্ট
              </h3>
              <p className="text-xs text-blue-100">
                Official Document Verification & Readiness Tracker for {candidateName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Readiness Score Progress Bar */}
        <div className="bg-slate-50 border-b border-slate-200 p-4">
          <div className="flex items-center justify-between gap-3 text-xs font-semibold mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-slate-800">মোট ডকুমেন্ট প্রস্তুতের হার:</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                {readyCount} / {items.length} সম্পন্ন ({percentage}%)
              </span>
            </div>
            <span className="text-slate-500 hidden sm:inline">
              {percentage >= 80 ? 'আবেদনের জন্য সম্পূর্ণ তৈরি' : 'বাকি ডকুমেন্টস প্রস্তুত করুন'}
            </span>
          </div>

          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                percentage >= 80 ? 'bg-emerald-600' : 'bg-blue-600'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Scrollable Checklist */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1 text-slate-800">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <p>
              <strong>শাকিল ভাইয়ের জন্য পরামর্শ:</strong> কোনো দেশে আবেদনের সময় এই ডকুমেন্টসগুলোর স্ক্যান কপি (ক্লিয়ার PDF ও JPEG) গুগল ড্রাইভে ফোল্ডার আকারে সাজিয়ে রাখুন। যাতে নিয়োগকর্তা চাওয়ামাত্র কয়েক সেকেন্ডের মধ্যে ইমেইলে পাঠিয়ে দেওয়া যায়।
            </p>
          </div>

          <div className="space-y-2.5">
            {items.map((item, index) => (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-start gap-3 select-none ${
                  item.isReady
                    ? 'bg-emerald-50/50 border-emerald-200 hover:bg-emerald-50'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <button
                  type="button"
                  className="mt-0.5 text-slate-400 focus:outline-hidden"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                  }}
                >
                  {item.isReady ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {index + 1}. {item.titleBn}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {item.title}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-500">
                    <span className="bg-white border border-slate-200 px-2 py-0.5 rounded font-medium">
                      প্রদানকারী: {item.authority}
                    </span>
                    <span className="bg-blue-50 text-blue-800 border border-blue-100 px-2 py-0.5 rounded font-medium">
                      প্রয়োজনীয়তা: {item.requiredFor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-slate-100 px-4 sm:px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-600">
            টিক চিহ্ন দিয়ে আপনি আপনার কাগজপত্রের বর্তমান অবস্থা ট্র্যাক করতে পারবেন।
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintChecklist}
              className="px-3.5 py-1.5 bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-md hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>প্রিন্ট চেকলিস্ট</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#0e417a] hover:bg-[#0c3563] text-white text-xs font-semibold rounded-md transition-colors"
            >
              সম্পন্ন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
