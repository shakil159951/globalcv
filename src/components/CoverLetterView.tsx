import React from 'react';
import { CoverLetterData } from '../types';
import { Mail, Phone, MapPin, Copy, Check, Printer, Edit3 } from 'lucide-react';

interface CoverLetterViewProps {
  data: CoverLetterData;
  onUpdate: (updated: Partial<CoverLetterData>) => void;
  onPrint: () => void;
  region?: 'bangladesh' | 'europe' | 'middle_east';
}

export const CoverLetterView: React.FC<CoverLetterViewProps> = ({ data, onUpdate, onPrint, region = 'europe' }) => {
  const [copied, setCopied] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);

  const fullText = `${data.senderName}
${data.senderAddress}
Phone: ${data.senderPhone}
Email: ${data.senderEmail}

Date: ${data.date}

To:
${data.recipientName}
${data.recipientTitle}
${data.companyName}
${data.companyAddress}
${data.companyCity}, ${data.companyCountry}

Subject: ${data.subject}

${data.salutation}

${data.openingParagraph}

${data.experienceParagraph}

${data.motivationParagraph}

${data.relocationParagraph}

${data.closingParagraph}

${data.signoff}
${data.senderName}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="space-y-4">
      {/* Action Bar */}
      <div className="no-print bg-white p-3 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md border flex items-center gap-1.5 transition-colors ${
              isEditing ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Finish Editing' : 'Customize Letter'}</span>
          </button>
          <span className="text-xs text-slate-500 hidden sm:inline">Formal Business & Motivation Letter</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md border border-slate-300 flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
          </button>

          <button
            onClick={onPrint}
            className="px-3.5 py-1.5 text-xs font-semibold bg-[#0e417a] hover:bg-[#0c3563] text-white rounded-md shadow-xs flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Editable Fields Drawer if isEditing is true */}
      {isEditing && (
        <div className="no-print bg-blue-50/70 border border-blue-200 rounded-lg p-4 space-y-3 text-xs text-slate-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="font-bold text-blue-900 text-sm">Customize Recipient & Destination Country</h4>
            <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="text-slate-500 font-medium">Quick Presets:</span>
              <button
                type="button"
                onClick={() => onUpdate({ companyCountry: 'Bangladesh', companyCity: 'Dhaka', companyAddress: 'Gulshan / Banani Commercial Area' })}
                className="px-2 py-0.5 bg-white border border-slate-300 rounded hover:bg-slate-100 font-medium text-slate-700"
              >
                🇧🇩 Dhaka (BD)
              </button>
              <button
                type="button"
                onClick={() => onUpdate({ companyCountry: 'Poland', companyCity: 'Warsaw' })}
                className="px-2 py-0.5 bg-white border border-slate-300 rounded hover:bg-slate-100 font-medium text-slate-700"
              >
                🇵🇱 Poland
              </button>
              <button
                type="button"
                onClick={() => onUpdate({ companyCountry: 'Romania', companyCity: 'Bucharest' })}
                className="px-2 py-0.5 bg-white border border-slate-300 rounded hover:bg-slate-100 font-medium text-slate-700"
              >
                🇷🇴 Romania
              </button>
              <button
                type="button"
                onClick={() => onUpdate({ companyCountry: 'Croatia', companyCity: 'Zagreb' })}
                className="px-2 py-0.5 bg-white border border-slate-300 rounded hover:bg-slate-100 font-medium text-slate-700"
              >
                🇭🇷 Croatia
              </button>
              <button
                type="button"
                onClick={() => onUpdate({ companyCountry: 'United Arab Emirates', companyCity: 'Dubai' })}
                className="px-2 py-0.5 bg-white border border-slate-300 rounded hover:bg-slate-100 font-medium text-slate-700"
              >
                🇦🇪 Dubai (UAE)
              </button>
              <button
                type="button"
                onClick={() => onUpdate({ companyCountry: 'Saudi Arabia', companyCity: 'Riyadh' })}
                className="px-2 py-0.5 bg-white border border-slate-300 rounded hover:bg-slate-100 font-medium text-slate-700"
              >
                🇸🇦 Saudi Arabia
              </button>
              <button
                type="button"
                onClick={() => onUpdate({ companyCountry: 'Qatar', companyCity: 'Doha' })}
                className="px-2 py-0.5 bg-white border border-slate-300 rounded hover:bg-slate-100 font-medium text-slate-700"
              >
                🇶🇦 Qatar
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Company Name</label>
              <input
                type="text"
                value={data.companyName}
                onChange={(e) => onUpdate({ companyName: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-blue-500"
                placeholder="e.g. AgroFarm Sp. z o.o. / Logistics LLC"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">City</label>
              <input
                type="text"
                value={data.companyCity}
                onChange={(e) => onUpdate({ companyCity: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-blue-500"
                placeholder="e.g. Warsaw, Bucharest, Dubai, Riyadh"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Country</label>
              <input
                type="text"
                value={data.companyCountry}
                onChange={(e) => onUpdate({ companyCountry: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-blue-500"
                placeholder="e.g. Poland, Romania, UAE, Saudi Arabia"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">Subject Line</label>
            <input
              type="text"
              value={data.subject}
              onChange={(e) => onUpdate({ subject: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* European & International Standard Letter Sheet */}
      <div className="bg-white text-slate-800 a4-paper-sheet mx-auto p-8 sm:p-14 print:p-0 border border-slate-300/80 print:border-none print-sheet font-sans text-[13px] leading-relaxed space-y-6 print:space-y-4">
        {/* Top Header Row: Sender Details */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-xl font-bold text-[#0e417a] print:text-slate-900">{data.senderName}</h1>
            <p className="text-xs text-slate-600 mt-0.5">{data.senderAddress}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mt-1.5">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#0e417a] print:text-slate-700" />
                {data.senderPhone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#0e417a] print:text-slate-700" />
                {data.senderEmail}
              </span>
            </div>
          </div>

          <div className="text-right text-xs text-slate-500">
            <span className="inline-block bg-slate-100 print:bg-transparent print:border print:border-slate-300 print:text-slate-700 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-700">
              {region === 'bangladesh'
                ? 'Corporate Job Applicant'
                : region === 'middle_east'
                ? 'Gulf Employment Visa Candidate'
                : 'European Work Permit Candidate'}
            </span>
            <p className="mt-1 font-medium text-slate-700 tabular-nums">Date: {data.date}</p>
          </div>
        </div>

        {/* Recipient Details */}
        <div className="space-y-0.5 text-xs text-slate-700">
          <p className="font-bold text-slate-900 text-[13px]">{data.recipientName}</p>
          <p>{data.recipientTitle}</p>
          <p className="font-semibold text-[#0e417a] print:text-slate-900">{data.companyName}</p>
          <p>{data.companyAddress}</p>
          <p className="font-medium text-slate-900">{data.companyCity}, {data.companyCountry}</p>
        </div>

        {/* Subject */}
        <div className="pt-2">
          <h2 className="font-bold text-slate-900 text-sm border-l-3 border-[#0e417a] print:border-l-2 print:border-slate-900 pl-3 py-0.5">
            Subject: {data.subject}
          </h2>
        </div>

        {/* Salutation */}
        <p className="font-semibold text-slate-800">{data.salutation}</p>

        {/* Letter Body Paragraphs */}
        <div className="space-y-3.5 text-slate-700 leading-relaxed text-justify text-[13px]">
          <p>{data.openingParagraph}</p>
          <p>{data.experienceParagraph}</p>
          <p>{data.motivationParagraph}</p>
          <p>{data.relocationParagraph}</p>
          <p>{data.closingParagraph}</p>
        </div>

        {/* Signoff */}
        <div className="pt-4 space-y-3 avoid-break">
          <p className="font-semibold text-slate-800">{data.signoff}</p>
          <div className="space-y-0.5 pt-2">
            <div className="h-10 flex items-center">
              <span className="font-serif italic text-lg text-slate-800 opacity-80 tracking-wide select-none">
                {data.senderName}
              </span>
            </div>
            <p className="font-bold text-[#0e417a] print:text-slate-900 text-sm">{data.senderName}</p>
            <p className="text-xs text-slate-500 mt-0.5">
              {region === 'bangladesh'
                ? 'Applicant · Curriculum Vitae Enclosed'
                : region === 'middle_east'
                ? 'Applicant from Bangladesh · Ready for GAMCA & Deployment'
                : 'Applicant from Bangladesh · Europass CV Enclosed'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
