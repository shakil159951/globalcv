import React from 'react';
import { X, CheckCircle, ExternalLink, FileText, Briefcase, Award, Shield, AlertTriangle, ArrowRight, Building, CheckSquare } from 'lucide-react';
import { SectorId } from '../types';

interface BOESLMalaysiaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPreset: (sectorId: SectorId, targetTitle?: string) => void;
}

export const BOESLMalaysiaModal: React.FC<BOESLMalaysiaModalProps> = ({
  isOpen,
  onClose,
  onApplyPreset,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-[#0e417a] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-lg border border-white/20">
              🇲🇾
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500/30 text-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-400/30 uppercase tracking-wide">
                  সরকারিভাবে শূন্য অভিবাসন ব্যয়
                </span>
                <span className="text-white/60 text-xs">BOESL Circular</span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg leading-tight mt-0.5">
                DHL SUPPLY CHAIN (MALAYSIA) SDN. BHD.
              </h3>
              <p className="text-[11px] text-teal-100/90">
                বিজ্ঞপ্তি নং: ৪২.০২.০০০০.০৩০.৯৯.০০০.১৯.৩০০৯,২৬/৩১২৪
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-700">
          {/* Quick Circular Summary Box */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-900 text-xs sm:text-sm flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-700" />
                সুযোগ-সুবিধা ও নিয়োগের মূল শর্তাবলী
              </span>
              <span className="bg-emerald-700 text-white font-bold text-[11px] px-2.5 py-0.5 rounded-md">
                বেসিক: ১,৭০০ মালয়েশিয়ান রিঙ্গিত (RM) + ওভারটাইম
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
              <div className="bg-white p-2 rounded-lg border border-emerald-100">
                <span className="text-slate-500 block text-[10px]">চুক্তির মেয়াদ</span>
                <strong className="text-slate-800">৩ বছর (নবায়নযোগ্য)</strong>
              </div>
              <div className="bg-white p-2 rounded-lg border border-emerald-100">
                <span className="text-slate-500 block text-[10px]">কর্মঘণ্টা</span>
                <strong className="text-slate-800">৮ ঘণ্টা/দিন, সপ্তাহে ৬ দিন</strong>
              </div>
              <div className="bg-white p-2 rounded-lg border border-emerald-100">
                <span className="text-slate-500 block text-[10px]">বিমানভাড়া ও বাসস্থান</span>
                <strong className="text-slate-800">ফ্রি (কোম্পানি বহন করবে)</strong>
              </div>
              <div className="bg-white p-2 rounded-lg border border-emerald-100">
                <span className="text-slate-500 block text-[10px]">সার্ভিস চার্জ</span>
                <strong className="text-emerald-700 font-bold">শূন্য ব্যয় (ফ্রি)</strong>
              </div>
            </div>
          </div>

          {/* Job Positions in Circular */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#0e417a]" />
              বিজ্ঞপ্তির পদসমূহ ও শাকিলের যোগ্যতার ম্যাচিং
            </h4>

            {/* Position 1: Technical Skill Workers */}
            <div className="border border-blue-200 bg-blue-50/40 rounded-xl p-3.5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-600 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                      পদ নং ১
                    </span>
                    <h5 className="font-bold text-slate-900 text-sm">
                      টেকনিক্যাল স্কিল ওয়ার্কার্স (Technical Skill Workers)
                    </h5>
                  </div>
                  <p className="text-[11px] text-blue-900 mt-0.5">
                    লজিস্টিকস ওয়্যারহাউজ IT ইনফোস্ট্রাকচার, ক্যাবলিং, সার্ভার র‍্যাকিং, বারকোড স্ক্যানার ও সিসিটিভি মেইনটেন্যান্স
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onApplyPreset('it', 'Technical Skill Worker - DHL Supply Chain Malaysia');
                    onClose();
                  }}
                  className="px-3.5 py-1.5 bg-[#0e417a] hover:bg-[#0c3563] text-white rounded-lg font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
                >
                  <span>এই পদের জন্য সিভি লোড করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white rounded-lg p-2.5 border border-blue-100 text-[11px] space-y-1">
                <p className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <strong>শাকিলের ১০০% নিখুঁত ম্যাচ:</strong> নওগাঁ পলিটেকনিক থেকে সিএসই ডিপ্লোমা (২০২১, সিজিপিএ ৩.৭৮), পারলভ মেডিক্যালের নেটওয়ার্ক ও সিসিটিভি অভিজ্ঞতা।
                </p>
                <p className="text-slate-600">
                  • <strong>কাজের ধরণ:</strong> আধুনিক ওয়্যারহাউজে কম্পিউটার হার্ডওয়্যার, নেটওয়ার্ক ক্যাবলিং, ডাটা ট্র্যাকিং এবং এমএস এক্সেল শিট পরিচালনা।
                </p>
              </div>
            </div>

            {/* Position 2: Operations Assistant */}
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-3.5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-600 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                      পদ নং ২ (১১২ জন)
                    </span>
                    <h5 className="font-bold text-slate-900 text-sm">
                      অপারেশনস অ্যাসিস্ট্যান্ট (Operations Assistant)
                    </h5>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    ওয়্যারহাউজে মালামাল গ্রহণ, প্যাকিং, বারকোড ট্র্যাকিং ও এমএস এক্সেলে ইনভেন্টরি এন্ট্রি
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onApplyPreset('logistics', 'Operations Assistant (Warehouse) - DHL Supply Chain Malaysia');
                    onClose();
                  }}
                  className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
                >
                  <span>এই পদের জন্য সিভি লোড করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white rounded-lg p-2.5 border border-slate-200 text-[11px] space-y-1">
                <p className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <strong>শাকিলের যোগ্যতা:</strong> গোল্ডেন হার্ভেস্টের ৯৮% নির্ভুল ডাটা এন্ট্রি অভিজ্ঞতা + বেসিক ইংলিশ কমিউনিকেশন।
                </p>
              </div>
            </div>
          </div>

          {/* Mandatory Interview Checklist from Circular */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 space-y-2">
            <h5 className="font-bold text-amber-900 text-xs sm:text-sm flex items-center gap-1.5">
              <CheckSquare className="w-4 h-4 text-amber-700" />
              ইন্টারভিউ ও আবেদনের জন্য প্রয়োজনীয় কাগজপত্র (বিজ্ঞপ্তি অনুযায়ী)
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="bg-white p-2 rounded border border-amber-100 flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">1.</span>
                <span><strong>ছবি:</strong> ৪ কপি পাসপোর্ট সাইজ ল্যাব প্রিন্ট কালার ছবি (সাদা ব্যাকগ্রাউন্ড)।</span>
              </div>
              <div className="bg-white p-2 rounded border border-amber-100 flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">2.</span>
                <span><strong>সার্টিফিকেট:</strong> মূল শিক্ষাগত যোগ্যতার সনদ ও মার্কশিট (পলিটেকনিক ডিপ্লোমা ও এসএসসি)।</span>
              </div>
              <div className="bg-white p-2 rounded border border-amber-100 flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">3.</span>
                <span><strong>পাসপোর্ট ও এনআইডি:</strong> ন্যূনতম ১ বছরের মেয়াদযুক্ত মূল পাসপোর্ট এবং জাতীয় পরিচয়পত্রের রঙিন কপি।</span>
              </div>
              <div className="bg-white p-2 rounded border border-amber-100 flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">4.</span>
                <span><strong>সিভি ও কভার লেটার:</strong> স্বাক্ষরযুক্ত পূর্ণাঙ্গ জীবনবৃত্তান্ত (এই অ্যাপ থেকে প্রিন্ট করা যাবে)।</span>
              </div>
            </div>
          </div>

          {/* Online Registration Link */}
          <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] text-slate-500 block">সরকারি অনলাইন আবেদন পোর্টাল:</span>
              <a
                href="https://employee.oep.gov.bd/employee/registration"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#0e417a] hover:underline flex items-center gap-1 text-xs sm:text-sm"
              >
                <span>https://employee.oep.gov.bd/employee/registration</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <a
              href="https://employee.oep.gov.bd/employee/registration"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
            >
              <span>অনলাইনে রেজিস্ট্রেশন করুন</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
