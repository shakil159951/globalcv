import React, { useState } from 'react';
import {
  Printer,
  BookOpen,
  Mail,
  CheckSquare,
  MessageSquare,
  Award,
  Download,
  FileText,
  Menu,
  X,
  FileDown,
  PenTool,
  ShieldCheck,
} from 'lucide-react';

interface HeaderProps {
  onPrint: () => void;
  onOpenGuide: () => void;
  onOpenEmail: () => void;
  onOpenChecklist: () => void;
  onOpenInterview: () => void;
  onOpenScorecard: () => void;
  onDownloadTxt: () => void;
  onDownloadJson: () => void;
  activeDoc: 'cv' | 'coverLetter';
  setActiveDoc: (doc: 'cv' | 'coverLetter') => void;
  onOpenSignature?: () => void;
  onOpenBOESL?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onPrint,
  onOpenGuide,
  onOpenEmail,
  onOpenChecklist,
  onOpenInterview,
  onOpenScorecard,
  onDownloadTxt,
  onDownloadJson,
  activeDoc,
  setActiveDoc,
  onOpenSignature,
  onOpenBOESL,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadDropdownOpen, setDownloadDropdownOpen] = useState(false);

  return (
    <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-40 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Brand Wordmark & Candidate Name */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#0e417a] flex items-center justify-center text-white font-black text-sm tracking-tight shadow-xs">
            CV
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900">
                Global CV & Visa Suite
              </span>
              <button
                onClick={onOpenScorecard}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300 hover:bg-emerald-200 transition-colors"
                title="১০ এ ১০ পূর্ণাঙ্গ কোয়ালিটি মূল্যায়ন দেখুন"
              >
                <Award className="w-3 h-3 text-emerald-700" />
                <span>১০/১০ রেটিং</span>
              </button>
            </div>
            <p className="text-[10px] text-slate-500 hidden sm:block">
              প্রার্থী: মো. শাকিল হোসেন • বাংলাদেশ, ইউরোপ ও মিডল ইস্ট
            </p>
          </div>
        </div>

        {/* Center Nav: Documents & Preparation Tools */}
        <nav className="hidden lg:flex items-center gap-4 text-xs font-semibold text-slate-600">
          {/* Doc Switchers */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setActiveDoc('cv')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeDoc === 'cv'
                  ? 'bg-white text-[#0e417a] font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Curriculum Vitae (CV)
            </button>
            <button
              onClick={() => setActiveDoc('coverLetter')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeDoc === 'coverLetter'
                  ? 'bg-white text-[#0e417a] font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cover Letter
            </button>
          </div>

          {/* Action Modals */}
          <button
            onClick={onOpenChecklist}
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#0e417a] transition-colors py-1.5 px-2 rounded hover:bg-slate-50"
          >
            <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>ডকুমেন্টস চেকলিস্ট</span>
          </button>

          <button
            onClick={onOpenInterview}
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#0e417a] transition-colors py-1.5 px-2 rounded hover:bg-slate-50"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>ইন্টারভিউ প্রস্তুতি</span>
          </button>

          <button
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#0e417a] transition-colors py-1.5 px-2 rounded hover:bg-slate-50"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>ভিসা গাইড</span>
          </button>

          <button
            onClick={onOpenEmail}
            className="flex items-center gap-1.5 text-slate-700 hover:text-[#0e417a] transition-colors py-1.5 px-2 rounded hover:bg-slate-50"
          >
            <Mail className="w-3.5 h-3.5 text-purple-600" />
            <span>ইমেইল পিচ</span>
          </button>

          {onOpenBOESL && (
            <button
              onClick={onOpenBOESL}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors font-bold text-xs"
            >
              <span className="text-sm">🇲🇾</span>
              <span>BOESL মালয়েশিয়া (DHL)</span>
            </button>
          )}

          {onOpenSignature && (
            <button
              onClick={onOpenSignature}
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#0e417a] transition-colors py-1.5 px-2 rounded hover:bg-slate-50"
              title="স্বাক্ষর আপলোড বা ড্র করুন"
            >
              <PenTool className="w-3.5 h-3.5 text-blue-700" />
              <span>স্বাক্ষর</span>
            </button>
          )}
        </nav>

        {/* Action Buttons: Print, Download & Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {onOpenSignature && (
            <button
              onClick={onOpenSignature}
              className="px-2.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs"
              title="স্বাক্ষর আপলোড বা পরিবর্তন করুন"
            >
              <PenTool className="w-3.5 h-3.5 text-[#0e417a]" />
              <span className="hidden md:inline">স্বাক্ষর</span>
            </button>
          )}

          {/* Download Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDownloadDropdownOpen(!downloadDropdownOpen)}
              className="px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
              title="ডাউনলোড অপশন"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Export</span>
            </button>

            {downloadDropdownOpen && (
              <div
                className="absolute right-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-1.5 z-50 text-xs text-slate-700 animate-in fade-in"
                onMouseLeave={() => setDownloadDropdownOpen(false)}
              >
                <button
                  onClick={() => {
                    setDownloadDropdownOpen(false);
                    onPrint();
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-blue-50 text-slate-800 flex items-center gap-2"
                >
                  <Printer className="w-3.5 h-3.5 text-blue-700" />
                  <span>PDF আকারে সেভ করুন</span>
                </button>
                <button
                  onClick={() => {
                    setDownloadDropdownOpen(false);
                    onDownloadTxt();
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-blue-50 text-slate-800 flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Plain Text (ATS) ডাউনলোড</span>
                </button>
                <button
                  onClick={() => {
                    setDownloadDropdownOpen(false);
                    onDownloadJson();
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-blue-50 text-slate-800 flex items-center gap-2"
                >
                  <FileDown className="w-3.5 h-3.5 text-purple-700" />
                  <span>JSON ব্যাকআপ ডাউনলোড</span>
                </button>
              </div>
            )}
          </div>

          {/* Primary Print / Save PDF Button */}
          <button
            onClick={onPrint}
            className="px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-[#0e417a] hover:bg-[#0c3563] rounded-lg transition-colors shadow-xs flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-50 border-t border-slate-200 px-4 py-3 space-y-2 text-xs font-semibold animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-200">
            <button
              onClick={() => {
                setActiveDoc('cv');
                setMobileMenuOpen(false);
              }}
              className={`p-2 rounded-lg text-center ${
                activeDoc === 'cv' ? 'bg-[#0e417a] text-white' : 'bg-white border text-slate-700'
              }`}
            >
              Curriculum Vitae
            </button>
            <button
              onClick={() => {
                setActiveDoc('coverLetter');
                setMobileMenuOpen(false);
              }}
              className={`p-2 rounded-lg text-center ${
                activeDoc === 'coverLetter' ? 'bg-[#0e417a] text-white' : 'bg-white border text-slate-700'
              }`}
            >
              Cover Letter
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {onOpenBOESL && (
              <button
                onClick={() => {
                  onOpenBOESL();
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 bg-emerald-100 border border-emerald-300 rounded-lg text-emerald-950 font-bold flex items-center gap-2 col-span-2"
              >
                <span>🇲🇾</span>
                <span>BOESL মালয়েশিয়া (DHL সার্কুলার)</span>
              </button>
            )}

            {onOpenSignature && (
              <button
                onClick={() => {
                  onOpenSignature();
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 font-semibold flex items-center gap-2 col-span-2"
              >
                <PenTool className="w-4 h-4 text-blue-700" />
                <span>স্বাক্ষর আপলোড বা পরিবর্তন (Signature)</span>
              </button>
            )}

            <button
              onClick={() => {
                onOpenScorecard();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-emerald-700" />
              <span>১০/১০ কোয়ালিটি রেটিং</span>
            </button>

            <button
              onClick={() => {
                onOpenChecklist();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 flex items-center gap-2"
            >
              <CheckSquare className="w-4 h-4 text-emerald-600" />
              <span>ডকুমেন্টস চেকলিস্ট</span>
            </button>

            <button
              onClick={() => {
                onOpenInterview();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-amber-600" />
              <span>ইন্টারভিউ প্রস্তুতি</span>
            </button>

            <button
              onClick={() => {
                onOpenGuide();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>ভিসা ও জব গাইড</span>
            </button>

            <button
              onClick={() => {
                onOpenEmail();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-800 flex items-center gap-2 col-span-2"
            >
              <Mail className="w-4 h-4 text-purple-600" />
              <span>এইচআর ইমেইল পিচ কপি</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
