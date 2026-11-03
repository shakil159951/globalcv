import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, Globe, Send, ShieldCheck, Building2, MapPin } from 'lucide-react';

interface EuropeanGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EuropeanGuideModal: React.FC<EuropeanGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'bangladesh' | 'europe' | 'middle_east' | 'safety'>('bangladesh');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0e417a] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Globe className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">বাংলাদেশ, ইউরোপ ও মিডল ইস্ট চাকরির আবেদন গাইড</h3>
              <p className="text-xs text-blue-100">Official Visa Regulations, GAMCA Medical & Job Portals for Shakil Hossain</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-3 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('bangladesh')}
            className={`pb-2.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'bangladesh' ? 'border-[#0e417a] text-[#0e417a]' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🇧🇩 বাংলাদেশ চাকরির নির্দেশিকা</span>
          </button>
          <button
            onClick={() => setActiveTab('europe')}
            className={`pb-2.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'europe' ? 'border-[#0e417a] text-[#0e417a]' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🇪🇺 ইউরোপ কান্ট্রি গাইডলাইন</span>
          </button>
          <button
            onClick={() => setActiveTab('middle_east')}
            className={`pb-2.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'middle_east' ? 'border-[#0e417a] text-[#0e417a]' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🇸🇦 / 🇦🇪 মিডল ইস্ট (দুবাই, সৌদি, কাতার)</span>
          </button>
          <button
            onClick={() => setActiveTab('safety')}
            className={`pb-2.5 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'safety' ? 'border-[#0e417a] text-[#0e417a]' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🛡️ দালাল ও প্রতারণা সতর্কতা</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed flex-1">
          {activeTab === 'bangladesh' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 space-y-1.5 text-xs text-slate-700">
                <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-700" />
                  বাংলাদেশের কর্পোরেট ও আইটি চাকরির নিয়মাবলী
                </h4>
                <p>
                  বাংলাদেশে বিভিন্ন মাল্টিন্যাশনাল কোম্পানি, সফটওয়্যার ফার্ম, ব্যাংক ও স্বাস্থ্যসেবা প্রতিষ্ঠানে সিভিতে পারিবারিক পরিচিতি (পিতা/মাতার নাম, বৈবাহিক অবস্থা, স্থায়ী ঠিকানা ও রক্তের গ্রুপ) এবং স্পষ্ট একাডেমিক সিজিপিএ (CGPA) প্রত্যাশা করা হয়। আপনার <strong>BD Corporate CV</strong> ফরম্যাটে এগুলো যথাযথভাবে অন্তর্ভুক্ত করা আছে।
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">বাংলাদেশের শীর্ষ চাকরির পোর্টাল ও আবেদনের মাধ্যম:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Bdjobs.com:</strong> বাংলাদেশের সবচেয়ে বড় জব পোর্টাল। আপনার এই সিভির তথ্য সরাসরি Bdjobs প্রোফাইলে আপডেট করে নিতে পারেন।
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>LinkedIn Bangladesh:</strong> আইটি ও অটোমেশন বিশেষজ্ঞ পদের জন্য সরাসরি কোম্পানিগুলোর এইচআর-কে মেসেজ দিতে এটি অত্যন্ত কার্যকর।
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Skill.jobs ও Kormo:</strong> এন্ট্রি লেভেল কম্পিউটার অপারেটর, লজিস্টিকস ও ডাটা এন্ট্রি কাজের জন্য নির্ভরযোগ্য।
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>সরাসরি কর্পোরেট ইমেইল:</strong> আমাদের অ্যাপের <strong>Email Pitch</strong> ব্যবহার করে সংশ্লিষ্ট কোম্পানির ক্যারিয়ার ইমেইলে সরাসরি সিভি পাঠাতে পারেন।
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900">ইন্টারভিউ প্রস্তুতির পরামর্শ:</h4>
                <p>• পারলভ মেডিকেল সার্ভিসেস ও গোল্ডেন হার্ভেস্টে আপনার ব্যবহারিক দায়িত্ব (ল্যান/ওয়ান, সিসিটিভি, এআই ও ৯৮% নির্ভুল ডাটা এন্ট্রি) পরিষ্কারভাবে উপস্থাপন করবেন।</p>
                <p>• প্রিন্ট করা সিভির সাথে ডিপ্লোমা ও এসএসসি সনদের সত্যায়িত ফটোকপি এক সেট ফাইলে রাখবেন।</p>
              </div>
            </div>
          )}

          {activeTab === 'europe' && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-1.5 text-xs text-slate-700">
                <h4 className="font-bold text-[#0e417a] text-sm flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#0e417a]" />
                  ইউরোপিয়ান ইউনিয়নের ওয়ার্ক পারমিট নিয়ম
                </h4>
                <p>
                  ইউরোপের দেশগুলোতে (পোল্যান্ড, রোমানিয়া, ক্রোয়েশিয়া ইত্যাদি) কাজের আবেদনের জন্য <strong>Europass CV</strong> ও <strong>Motivation Letter</strong> অপরিহার্য। আপনার সিভিতে CEFR ল্যাঙ্গুয়েজ ফ্রেমওয়ার্ক (B2/C2) ও ওয়ার্ক পারমিটের জন্য প্রস্তুত থাকার ক্লজ ইউরোপীয় স্ট্যান্ডার্ড অনুযায়ী সাজানো আছে।
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">আবেদনের বিশ্বস্ত ওয়েবসাইটসমূহ:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>EURES (eures.europa.eu):</strong> ইউরোপিয়ান ইউনিয়নের অফিসিয়াল ডাটাবেজ। এখানে সরাসরি ভিসা স্পনসরশিপ যুক্ত চাকরি থাকে।
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Pracuj.pl (পোল্যান্ড):</strong> গ্রিনহাউস, ওয়্যারহাউস ও প্রোডাকশন চাকরির জন্য সেরা।
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Jobs.ro / BestJobs (রোমানিয়া):</strong> হোটেল, কনস্ট্রাকশন ও ডেলিভারি কাজের ব্যাপক চাহিদা।
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>MojPosao.hr (ক্রোয়েশিয়া):</strong> ট্যুরিজম, ডেলিভারি রাইডার ও কিচেন হেল্পার কাজ।
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <h4 className="font-bold text-slate-900">কাগজপত্র প্রস্তুত রাখার তালিকা:</h4>
                <p>• কমপক্ষে ৪ বছরের মেয়াদসহ পাসপোর্ট।</p>
                <p>• অনলাইন পুলিশ ক্লিয়ারেন্স সার্টিফিকেট (পররাষ্ট্র মন্ত্রণালয় MOFA থেকে সত্যায়িত)।</p>
                <p>• একাডেমিক মূল সার্টিফিকেট (ডিপ্লোমা ইন সিএসই ও এসএসসি) এবং ফটোকপি সত্যায়িত।</p>
              </div>
            </div>
          )}

          {activeTab === 'middle_east' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 space-y-1.5 text-xs text-slate-700">
                <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-emerald-700" />
                  মিডল ইস্ট ও গালফ (GCC) নিয়োগের নিয়মাবলী
                </h4>
                <p>
                  সংযুক্ত আরব আমিরাত (দুবাই/আবুধাবি), সৌদি আরব ও কাতারে ডেলিভারি রাইডার (Talabat, Deliveroo, Noon), হোটেল হাউসকিপিং, সুপারমার্কেট (LuLu, Carrefour) এবং আইটি/সিসিটিভি টেকনিশিয়ান পদে ব্যাপক চাহিদা রয়েছে।
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">মিডল ইস্টের শীর্ষ জব পোর্টাল:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Bayt.com & Naukrigulf:</strong> গালফ অঞ্চলের সবচেয়ে জনপ্রিয় প্রফেশনাল জব পোর্টাল।
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Dubizzle (dubizzle.com):</strong> দুবাই ও শারজাহের ডেলিভারি, হোটেল ও ড্রাইভিং কাজ।
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Qiwa & Ajeer (সৌদি আরব):</strong> সৌদি সরকারি অনুমোদিত জব ও ওয়ার্ক পারমিট প্ল্যাটফর্ম।
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <strong>Indeed Middle East (UAE & Saudi):</strong> আন্তর্জাতিক কোম্পানির সরাসরি নিয়োগ।
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg space-y-1 text-xs text-amber-900">
                <span className="font-bold">জরুরি গালফ মেডিকেল ও ম্যানপাওয়ার নিয়ম:</span>
                <p>
                  মিডল ইস্টে ভিসা প্রসেসিংয়ের জন্য <strong>GAMCA (Wafid) Medical Examination</strong> বাধ্যতামূলক। ভিসা ইস্যু হওয়ার পর বাংলাদেশ সরকারের <strong>BMET Smart Card (ম্যানপাওয়ার কার্ড)</strong> সংগ্রহ করে দেশত্যাগ করতে হয়।
                </p>
              </div>
            </div>
          )}

          {activeTab === 'safety' && (
            <div className="space-y-4">
              <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 space-y-2 text-xs text-rose-950">
                <div className="flex items-center gap-1.5 font-bold text-rose-800 text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>ভুয়া এজেন্সি ও দালালদের ফাঁদ থেকে রক্ষা পাওয়ার উপায়</span>
                </div>
                <p>
                  ১. <strong>আসল কোম্পানি কখনো ইন্টারভিউ ছাড়া চাকরি দেয় না:</strong> যেকোনো বৈধ নিয়োগকর্তা প্রথমে অনলাইন জুম (Zoom) বা গুগল মিট (Google Meet)-এ সাক্ষাৎকার নেবে।
                </p>
                <p>
                  ২. <strong>অগ্রিম টাকা দেওয়া সম্পূর্ণ নিষেধ:</strong> ভিসা বা ওয়ার্ক পারমিট কপি না দেখে কোনো ব্যক্তিকে অগ্রিম টাকা দেবেন না।
                </p>
                <p>
                  ৩. <strong>ওয়ার্ক পারমিটের সত্যতা যাচাই:</strong> রোমানিয়া বা পোল্যান্ডের ওয়ার্ক পারমিট পেলেই ঢাকাস্থ বা দিল্লিস্থ সংশ্লিষ্ট দেশের দূতাবাসের অফিসিয়াল ওয়েবসাইটে অথবা ইমেইল করে পারমিটের সত্যতা নিশ্চিত করুন।
                </p>
                <p>
                  ৪. <strong>সরাসরি কোম্পানির সাথে যোগাযোগ:</strong> আমাদের বিল্ডারের "Email Pitch" ও সিভি সরাসরি ইউরোপ বা দুবাইয়ের কোম্পানির ক্যারিয়ার ইমেইলে পাঠিয়ে আবেদন করুন।
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0e417a] hover:bg-[#0c3563] text-white text-xs font-semibold rounded-md transition-colors"
          >
            বুঝেছি, চালিয়ে যান
          </button>
        </div>
      </div>
    </div>
  );
};
