import React, { useState } from 'react';
import { X, HelpCircle, Volume2, Copy, Check, MessageSquare, Sparkles, BookOpen, UserCheck, Shield } from 'lucide-react';

interface InterviewPrepModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName: string;
}

interface QuestionItem {
  id: string;
  category: string;
  questionEn: string;
  questionBn: string;
  strategyBn: string;
  sampleAnswerEn: string;
  sampleAnswerBn: string;
}

export const InterviewPrepModal: React.FC<InterviewPrepModalProps> = ({
  isOpen,
  onClose,
  candidateName,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const questions: QuestionItem[] = [
    {
      id: 'q-transition',
      category: 'Strategic Background',
      questionEn: 'You have a Diploma in Computer Engineering; why are you applying for greenhouse farming, logistics, or hotel work?',
      questionBn: 'আপনি কম্পিউটার ইঞ্জিনিয়ারিংয়ে ডিপ্লোমা করেছেন; তবে কেন ইউরোপ বা দুবাইতে গ্রিনহাউস কৃষি, ডেলিভারি বা হোটেলের কাজে আবেদন করছেন?',
      strategyBn: 'কখনোই দ্বিধা প্রকাশ করবেন না। বুঝিয়ে বলুন যে কৃষি ও পরিবারিক শ্রম বাংলাদেশের জীবনের সহজাত অংশ, আর ইঞ্জিনিয়ারিং শিক্ষার কারণে আপনি যেকোনো আধুনিক যন্ত্রপাতি ও রুটিন অনেক দ্রুত শিখতে পারেন।',
      sampleAnswerEn:
        '“Sir, in Bangladesh, agricultural farming and hands-on physical activity are natural parts of our everyday life and family background. While my academic qualification is in Computer Engineering, I have immense respect for honest manual work. My technical education actually gives me an advantage: I am highly disciplined, quick to learn modern machinery and European safety procedures, comfortable using digital scanners and GPS systems, and I have high physical stamina for 8-10 hour shifts. I am looking for a dependable long-term opportunity, and I am eager to be trained on the job.”',
      sampleAnswerBn:
        '“স্যার, বাংলাদেশে কৃষিকাজ এবং কায়িক পরিশ্রম আমাদের দৈনন্দিন ও পারিবারিক জীবনের অংশ। যদিও আমার প্রাতিষ্ঠানিক পড়াশোনা কম্পিউটার ইঞ্জিনিয়ারিংয়ে, আমি সৎ শ্রমকে গভীরভাবে সম্মান করি। আমার কারিগরি শিক্ষা আমাকে অতিরিক্ত সুবিধা দেয়—আমি অত্যন্ত সুশৃঙ্খল, নতুন যন্ত্রপাতি ও ইউরোপিয়ান নিরাপত্তা নিয়মাবলী খুব দ্রুত শিখে নিতে পারি, জিপিএস ও ডিজিটাল স্ক্যানার পরিচালনায় দক্ষ এবং দীর্ঘ ৮-১০ ঘণ্টার সক্রিয় শিফটে কাজ করার চমৎকার শারীরিক শক্তি রয়েছে। আমি দীর্ঘমেয়াদে বিশ্বস্ততার সাথে কাজ করতে আগ্রহী।”',
    },
    {
      id: 'q-weather-stamina',
      category: 'Physical Stamina',
      questionEn: 'Are you physically prepared for cold European winters or continuous 8-10 hour active standing shifts?',
      questionBn: 'আপনি কি ইউরোপের প্রচণ্ড শীত কিংবা টানা ৮-১০ ঘণ্টার দাঁড়িয়ে ভারী কাজের জন্য শারীরিকভাবে প্রস্তুত?',
      strategyBn: 'নিজের বয়স (২৪ বছর), সুস্বাস্থ্য, নিয়মিত কর্মোদ্যম ও শারীরিক সহনশীলতা তুলে ধরুন।',
      sampleAnswerEn:
        '“Yes, absolutely. I am 24 years old, fully medically fit, and accustomed to active work. In my previous role at Perlov Medical Services, I was on my feet constantly managing facility equipment across floors. I follow an active, healthy lifestyle and am fully prepared to adapt to European weather with proper protective thermal gear and company-provided safety clothing.”',
      sampleAnswerBn:
        '“হ্যাঁ, অবশ্যই। আমার বয়স ২৪ বছর, আমি সম্পূর্ণ শারীরিকভাবে সুস্থ এবং সর্বদা সক্রিয়ভাবে কাজে অভ্যস্ত। পারলভ মেডিকেল সার্ভিসেসে কাজের সময় আমাকে দীর্ঘ সময় দাঁড়িয়ে ও বিভিন্ন ফ্লোরে ঘুরে সরঞ্জাম পরিচালনা করতে হতো। আমি সঠিক থার্মাল ও সেফটি পোশাক পরিধান করে যেকোনো আবহাওয়াতে নিষ্ঠার সাথে কাজ করতে সম্পূর্ণ প্রস্তুত।”',
    },
    {
      id: 'q-quick-learning',
      category: 'Trainability',
      questionEn: 'You don’t have formal experience in European agriculture/hotel operations. How will you perform?',
      questionBn: 'ইউরোপিয়ান কৃষি বা হোটেলে আপনার পূর্ববর্তী কাজের অভিজ্ঞতা নেই। আপনি কীভাবে কাজটি করবেন?',
      strategyBn: 'সততার সাথে স্বীকার করুন যে আপনি কাজটি দ্রুত শিখে নিতে পারেন (Quick Learner) এবং আপনার পূর্ববর্তী দুই চাকরিতেও আপনি দ্রুত নতুন সিস্টেম শিখে সাফল্য দেখিয়েছেন।',
      sampleAnswerEn:
        '“I am completely honest that my formal jobs in Dhaka were in IT facility operations and high-volume data verification. However, I have practical familiarity with basic farming tasks in Bangladesh, and at Golden Harvest InfoTech I achieved a 98% accuracy score by learning new cataloging workflows within days. I listen carefully to supervisors, follow written checklists strictly, and ask constructive questions. With a few days of initial company orientation, I will be working at full harvesting and sorting productivity.”',
      sampleAnswerBn:
        '“আমি অত্যন্ত সততার সাথে জানাচ্ছি যে ঢাকায় আমার প্রাতিষ্ঠানিক চাকরি ছিল টেকনিক্যাল ইকুইপমেন্ট মেইনটেন্যান্স ও ডাটা অপারেশনে। তবে বাংলাদেশে গ্রামীণ চাষাবাদ ও মাঠের কাজের সাধারণ অভিজ্ঞতা আমার রয়েছে। গোল্ডেন হার্ভেস্টে আমি মাত্র কয়েক দিনের মধ্যে নতুন সফটওয়্যার শিখে ৯৮% নির্ভুলতার সাথে কাজ সম্পন্ন করেছি। আমি সুপারভাইজারের নির্দেশনা মনোযোগ দিয়ে শুনি ও নিরাপত্তা গাইডলাইন মেনে চলি। কয়েক দিনের অন-দ্য-জব ট্রেনিংয়েই আমি কাঙ্ক্ষিত গতিতে কাজ উপহার দিতে পারব।”',
    },
    {
      id: 'q-communication',
      category: 'Languages',
      questionEn: 'How will you communicate with supervisors and international colleagues?',
      questionBn: 'বিদেশি সুপারভাইজার ও অন্যান্য দেশের সহকর্মীদের সাথে আপনি কীভাবে যোগাযোগ করবেন?',
      strategyBn: 'আপনার কার্যকর ইংরেজি দক্ষতা (B2) এবং কর্মক্ষেত্রের নির্দিষ্ট নির্দেশাবলি বোঝার সামর্থ্য তুলে ধরুন।',
      sampleAnswerEn:
        '“I have working proficiency in English (B2 level). I can easily understand work orders, read SOP manuals, follow daily shift briefings, and report operational updates clearly. I am also eager to learn basic phrases in the local language (such as Polish, Romanian, or Arabic) to build great relationships with local supervisors and colleagues.”',
      sampleAnswerBn:
        '“আমার পেশাগত ইংরেজিতে ভালো দখল রয়েছে (B2 লেভেল)। আমি যেকোনো কাজের অর্ডার বুঝতে পারি, সেফটি ম্যানুয়াল পড়তে পারি এবং দিনের কাজের আপডেট জানাতে সক্ষম। এছাড়াও স্থানীয় দেশের ভাষা (পোলিশ, রোমানিয়ান বা আরবি) এর মৌলিক শব্দগুলো দ্রুত শিখে নিয়ে সবার সাথে সৌহার্দ্যপূর্ণ সম্পর্ক বজায় রাখতে আমি আগ্রহী।”',
    },
    {
      id: 'q-commitment',
      category: 'Work Ethics',
      questionEn: 'Why should we choose you over other candidates? Will you stay for the full contract?',
      questionBn: 'আমরা অন্য প্রার্থীদের চেয়ে আপনাকে কেন নির্বাচন করব? আপনি কি পুরো চুক্তির মেয়াদে থাকবেন?',
      strategyBn: 'দায়িত্বশীলতা, শৃঙ্খলা ও দীর্ঘমেয়াদী বিশ্বস্ততার অঙ্গীকার করুন।',
      sampleAnswerEn:
        '“You can rely on my honesty, punctuality, and youthful dedication. Coming from Bangladesh, this opportunity is extremely valuable to my family and future. I have a clean legal record, high integrity, and I am committed to completing my full 2-to-3 year employment contract respectfully, following every company policy.”',
      sampleAnswerBn:
        '“আপনি আমার সততা, সময়ানুবর্তিতা এবং নিষ্ঠার ওপর পূর্ণ আস্থা রাখতে পারেন। এই কাজের সুযোগটি আমার নিজের ভবিষ্যৎ ও পরিবারের জন্য অত্যন্ত মূল্যবান। আমার কোনো আইনি বা পুলিশি জটিলতা নেই এবং আমি সম্পূর্ণ চুক্তির মেয়াদে কোম্পানির সকল নিয়ম মেনে বিশ্বস্ততার সাথে কাজ করতে প্রতিশ্রুতিবদ্ধ।”',
    },
    {
      id: 'q-intro',
      category: 'Self Introduction',
      questionEn: 'Can you please introduce yourself briefly?',
      questionBn: 'আপনার নিজের সম্পর্কে সংক্ষেপে বলুন (Tell Me About Yourself)?',
      strategyBn: 'নাম, বয়স, শিক্ষাগত ডিগ্রি, পূর্ববর্তী কাজের সততা ও বিদেশ যাওয়ার উদ্দেশ্যকে ১ মিনিটে সাজিয়ে বলুন।',
      sampleAnswerEn:
        '“My name is Md. Shakil Hossain. I am 24 years old from Bangladesh. I hold a 4-year Diploma in Computer Engineering with distinction. For the past two years, I have worked professionally in Dhaka managing IT and automation systems at Perlov Medical Services Ltd and high-volume data operations at Golden Harvest InfoTech Ltd. I am a hardworking, disciplined, and adaptable individual who learns new tasks quickly. I am physically fit and seeking a lawful work permit opportunity abroad where I can contribute my best efforts and build a stable career.”',
      sampleAnswerBn:
        '“আমার নাম মো. শাকিল হোসেন। আমার বয়স ২৪ বছর, বাসা বাংলাদেশ। আমি কম্পিউটার ইঞ্জিনিয়ারিংয়ে ৪ বছরের ডিপ্লোমা সম্পন্ন করেছি। গত দুই বছর ধরে আমি ঢাকায় পারলভ মেডিকেল সার্ভিসেস লিমিটেডে আইটি ও অটোমেশন এবং গোল্ডেন হার্ভেস্টে ডাটা অপারেশনে সফলতার সাথে কাজ করেছি। আমি কঠোর পরিশ্রমী, সুশৃঙ্খল এবং যেকোনো কাজ দ্রুত শিখে নিতে পারি। বিদেশে একটি বৈধ কাজের সুযোগে সর্বোচ্চ শ্রম দিয়ে আমি আমার ক্যারিয়ার গড়তে চাই।”',
    },
  ];

  if (!isOpen) return null;

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback
    }
  };

  const filteredQuestions =
    selectedCategory === 'all'
      ? questions
      : questions.filter((q) => q.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0e417a] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <MessageSquare className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                ভিসা ও জব ইন্টারভিউ প্রস্তুতি গাইড (Q&A Master)
              </h3>
              <p className="text-xs text-blue-100">
                Winning Interview Scripts in English & Bengali for Md. Shakil Hossain
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

        {/* Categories bar */}
        <div className="flex items-center gap-2 p-3 bg-slate-50 border-b border-slate-200 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#0e417a] text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            সবগুলো প্রশ্ন ({questions.length})
          </button>
          <button
            onClick={() => setSelectedCategory('Strategic Background')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === 'Strategic Background'
                ? 'bg-[#0e417a] text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            ইঞ্জিনিয়ারিং বনাম সাধারণ কাজ
          </button>
          <button
            onClick={() => setSelectedCategory('Trainability')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === 'Trainability'
                ? 'bg-[#0e417a] text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            কাজ শিখে নেওয়ার যোগ্যতা
          </button>
          <button
            onClick={() => setSelectedCategory('Physical Stamina')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === 'Physical Stamina'
                ? 'bg-[#0e417a] text-white'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            শারীরিক সক্ষমতা ও আবহাওয়া
          </button>
        </div>

        {/* Content body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 text-slate-800">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">ইন্টারভিউ দেওয়ার গোপন ফর্মুলা:</p>
              <p className="mt-0.5">
                দূতাবাস বা ইউরোপিয়ান নিয়োগকর্তা সবসময় <strong>আত্মবিশ্বাস ও সততা</strong> দেখতে পছন্দ করেন। ইঞ্জিনিয়ারিং পড়ার পরেও কৃষিকাজ বা ফ্যাক্টরির কাজ করতে চাওয়া কোনো দুর্বলতা নয়—বরং বুঝিয়ে বলুন যে আপনি পরিশ্রমী এবং আপনার প্রযুক্তিগত ব্যাকগ্রাউন্ডের কারণে আপনি যেকোনো মেশিন দ্রুত ও নিরাপদে পরিচালনা করতে সক্ষম।
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3"
              >
                {/* Question */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0e417a] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      প্রশ্ন #{idx + 1} • {q.category}
                    </span>
                    <button
                      onClick={() => handleCopy(q.id, q.sampleAnswerEn)}
                      className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 font-medium bg-white border border-slate-200 px-2 py-1 rounded transition-colors"
                      title="ইংরেজি উত্তর কপি করুন"
                    >
                      {copiedId === q.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">কপি হয়েছে</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>উত্তর কপি করুন</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {q.questionEn}
                  </h4>
                  <p className="text-xs text-slate-600">
                    বাংলা অর্থ: <strong className="text-slate-800">{q.questionBn}</strong>
                  </p>
                </div>

                {/* Strategy Note */}
                <div className="p-2.5 bg-blue-50/60 border border-blue-200 rounded-lg text-xs text-blue-900">
                  <span className="font-bold">কৌশল: </span>
                  {q.strategyBn}
                </div>

                {/* English Script */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                    <span>আপনার বলা উচিত (English Script to practice):</span>
                  </span>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 leading-relaxed font-sans">
                    {q.sampleAnswerEn}
                  </div>
                </div>

                {/* Bengali Meaning */}
                <div className="space-y-1 text-xs text-slate-600">
                  <span className="font-semibold text-slate-700">সহজ বাংলা অনুবাদ:</span>
                  <p className="leading-relaxed bg-slate-100/70 p-2.5 rounded border border-slate-200">
                    {q.sampleAnswerBn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-4 sm:px-6 py-3 border-t border-slate-200 flex justify-between items-center">
          <span className="text-xs text-slate-600">
            এই স্ক্রিপ্টগুলো দিনে ২-৩ বার আয়নার সামনে বা মোবাইলে রেকর্ড করে প্র্যাকটিস করুন।
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0e417a] hover:bg-[#0c3563] text-white text-xs font-semibold rounded-md transition-colors"
          >
            বুঝেছি, অনুশীলন করব
          </button>
        </div>
      </div>
    </div>
  );
};
