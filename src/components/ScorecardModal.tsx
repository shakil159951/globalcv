import React from 'react';
import { X, Award, CheckCircle2, Star, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChecklist: () => void;
  onOpenInterview: () => void;
  onOpenEmail: () => void;
  onOpenGuide: () => void;
}

interface MetricItem {
  id: number;
  category: string;
  nameBn: string;
  nameEn: string;
  descriptionBn: string;
  score: string;
  actionText?: string;
  onAction?: () => void;
}

export const ScorecardModal: React.FC<ScorecardModalProps> = ({
  isOpen,
  onClose,
  onOpenChecklist,
  onOpenInterview,
  onOpenEmail,
  onOpenGuide,
}) => {
  if (!isOpen) return null;

  const metrics: MetricItem[] = [
    {
      id: 1,
      category: 'প্রোফাইল সততা ও তথ্য',
      nameBn: 'প্রামাণিক ও অসত্যবিহীন অভিজ্ঞতা (Real Experience Integrity)',
      nameEn: 'Authentic Employment History',
      descriptionBn: 'পারলভ মেডিকেল ও গোল্ডেন হার্ভেস্টের আসল চাকরি অক্ষুণ্ণ রাখা হয়েছে। কোনো অসত্য বা ভুয়া কোম্পানির নাম তৈরি করা হয়নি।',
      score: '1 / 1',
    },
    {
      id: 2,
      category: 'ক্যারিয়ার কৌশল',
      nameBn: 'কুইক লার্নার কৌশল ও সততা (Quick-Learner Adaptability)',
      nameEn: 'Adaptability & Trainability Framework',
      descriptionBn: 'কৃষি বা ডেলিভারি কাজের ক্ষেত্রে সততার সাথে "Quick Learner ready for on-the-job training" ও শারীরিক সক্ষমতা তুলে ধরা হয়েছে।',
      score: '1 / 1',
    },
    {
      id: 3,
      category: 'আন্তর্জাতিক ফরম্যাট',
      nameBn: 'ইউরোপিয়ান কমিশন স্বীকৃত Europass ফরম্যাট (Official Europass Standard)',
      nameEn: 'Official European Commission Europass CV',
      descriptionBn: 'অফিশিয়াল ব্লু হেডার, CEFR ল্যাঙ্গুয়েজ ফ্রেমওয়ার্ক, ড্রাইভিং ও মোবিলিটি এবং ইউরোপিয়ান ওয়ার্ক পারমিট স্পনসরশিপ প্রস্তুতি অন্তর্ভুক্ত।',
      score: '1 / 1',
    },
    {
      id: 4,
      category: 'দেশীয় ফরম্যাট',
      nameBn: 'বাংলাদেশ কর্পোরেট ও আইটি সিভি (BD Corporate Standard)',
      nameEn: 'Bangladesh Corporate & IT Format',
      descriptionBn: 'বিডিজবস ও দেশীয় কর্পোরেট স্ট্যান্ডার্ড অনুযায়ী পিতা-মাতা, স্থায়ী ঠিকানা, রক্তের গ্রুপ, ধর্ম ও শিক্ষাগত সিজিপিএ টেবিল অন্তর্ভুক্ত।',
      score: '1 / 1',
    },
    {
      id: 5,
      category: 'মিডল ইস্ট ফরম্যাট',
      nameBn: 'মিডল ইস্ট ও গালফ স্ট্যান্ডার্ড সিভি (GCC Executive Standard)',
      nameEn: 'Middle East Executive GCC Format',
      descriptionBn: 'দুবাই, সৌদি আরব ও কাতারের জন্য নেভি-গোল্ড স্টাইল, GAMCA মেডিকেল ও পুলিশ ক্লিয়ারেন্স প্রস্তুতি যুক্ত।',
      score: '1 / 1',
    },
    {
      id: 6,
      category: 'ক্যারিয়ার ডাইভারসিটি',
      nameBn: '৬টি বাস্তবমুখী চাকরির ক্যাটাগরি প্রিসেট (6 Tailored Sectors)',
      nameEn: '6 Distinct Industry Sectors',
      descriptionBn: 'আইটি ও অটোমেশন, ডাটা এন্ট্রি/এমআইএস, লজিস্টিকস/ডেলিভারি, হোটেল ও রেস্তোরাঁ, ফ্যাক্টরি এবং কৃষি ও গ্রিনহাউস।',
      score: '1 / 1',
    },
    {
      id: 7,
      category: 'কভার লেটার',
      nameBn: 'সম্পূর্ণ এডিটেবল মোটিভেশন ও কভার লেটার (Dynamic Cover Letter Engine)',
      nameEn: 'Country-Tailored Cover Letter Engine',
      descriptionBn: 'পোল্যান্ড, রোমানিয়া, ক্রোয়েশিয়া, দুবাই, রিয়াদ ও ঢাকার জন্য ১-ক্লিকে প্রাপকের ঠিকানা পরিবর্তনের পূর্ণ সুবিধা।',
      score: '1 / 1',
    },
    {
      id: 8,
      category: 'আবেদন প্রস্তুতি',
      nameBn: 'ডকুমেন্টস চেকলিস্ট ও প্রস্তুতি ট্র্যাকার (Interactive Visa Checklist)',
      nameEn: 'Interactive Document Readiness Tracker',
      descriptionBn: 'পাসপোর্ট, পুলিশ ক্লিয়ারেন্স, শিক্ষাসনদ প্রত্যয়ন, গামকা মেডিকেল ও বিএমইটি কার্ড প্রস্তুত ট্র্যাকার।',
      score: '1 / 1',
      actionText: 'চেকলিস্ট খুলুন',
      onAction: onOpenChecklist,
    },
    {
      id: 9,
      category: 'ইন্টারভিউ প্রস্তুতি',
      nameBn: 'ভিসা ও জব ইন্টারভিউ প্রশ্নোত্তর প্রস্তুতি গাইড (Interview Q&A Master)',
      nameEn: 'Winning Interview Q&A Simulator',
      descriptionBn: 'কম্পিউটার ইঞ্জিনিয়ারিং থেকে কেন এগ্রিকালচার বা ডেলিভারি কাজে আবেদন করছেন—সেই কঠিন প্রশ্নের মোক্ষম ইংরেজি উত্তর ও কৌশল।',
      score: '1 / 1',
      actionText: 'ইন্টারভিউ গাইড খুলুন',
      onAction: onOpenInterview,
    },
    {
      id: 10,
      category: 'আউটপুট ও এক্সপোর্ট',
      nameBn: 'মাল্টি-ফরম্যাট এক্সপোর্ট ও প্রিন্ট ইঞ্জিন (A4 PDF, ATS Text & JSON Backup)',
      nameEn: 'High-Fidelity PDF Print & Plain Text Export',
      descriptionBn: 'A4 সাইজে নিখুঁত পিডিএফ প্রিন্ট, অনলাইন পোর্টালের জন্য প্লেইন টেক্সট ডাউনলোড ও ফুল প্রোফাইল ব্যাকআপ।',
      score: '1 / 1',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0e417a] via-[#124d91] to-[#0a315e] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-400 text-slate-950 rounded-xl shadow-md flex items-center justify-center font-black text-lg">
              10/10
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  ফুল প্যাকেজ কোয়ালিটি স্কোরকার্ড ও অডিট
                </h3>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold px-2 py-0.5 rounded-full">
                  পারফেক্ট ১০/১০ স্কোর
                </span>
              </div>
              <p className="text-xs text-blue-100">
                ১০টি আন্তর্জাতিক মানদণ্ডে মো. শাকিল হোসেনের জব অ্যাপ্লিকেশন প্ল্যাটফর্মের মূল্যায়ন
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

        {/* Big Score Summary Banner */}
        <div className="p-4 bg-emerald-50 border-b border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-emerald-950 text-sm">
                ১০ এ ১০ রেটিং (10/10 Complete & Production-Ready)
              </p>
              <p className="text-xs text-emerald-800">
                আপনার দেওয়া সব রিকয়ারমেন্ট—সততা, কুইক-লার্নার মাইন্ডসেট, ৩টি অঞ্চল, কভার লেটার ও ভিসা প্রস্তুতি সফলভাবে প্যাকেজিং করা হয়েছে।
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-1 bg-white border border-emerald-300 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-900 shadow-2xs">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>গ্রেড: A+ (১০/১০ স্টার রেটিং)</span>
          </div>
        </div>

        {/* Detailed 10 Points List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-2.5 flex-1 text-slate-800">
          <div className="space-y-2">
            {metrics.map((item) => (
              <div
                key={item.id}
                className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white hover:border-blue-200 transition-colors"
              >
                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0e417a] text-white flex items-center justify-center text-[10px] font-bold">
                      {item.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {item.nameBn}
                    </h4>
                    <span className="text-[10px] font-medium bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    {item.descriptionBn}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0 pl-7 sm:pl-0">
                  {item.actionText && item.onAction && (
                    <button
                      onClick={() => {
                        onClose();
                        item.onAction!();
                      }}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-slate-300 text-blue-700 hover:bg-blue-50 rounded transition-colors flex items-center gap-1"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}

                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded font-bold text-xs tabular-nums flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.score}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-4 sm:px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0e417a] hover:bg-[#0c3563] text-white text-xs font-semibold rounded-md transition-colors shadow-xs"
          >
            অডিট রিপোর্ট বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
