import React from 'react';
import { CandidateProfile } from '../types';
import { Mail, Phone, MapPin, Globe, Calendar, User, ShieldCheck, CheckCircle2, Award, Car } from 'lucide-react';

interface GulfExecutiveCVProps {
  profile: CandidateProfile;
}

export const GulfExecutiveCV: React.FC<GulfExecutiveCVProps> = ({ profile }) => {
  const { personalInfo, summary, experiences, education, trainings, skills, languages, drivingMobility, additionalCertifications } = profile;

  return (
    <div className="bg-white text-slate-800 a4-paper-sheet mx-auto border border-slate-300/80 print:border-none print-sheet font-sans text-[12.5px] leading-relaxed">
      {/* Top Header - Executive Gulf Navy & Gold */}
      <div className="bg-[#0f172a] print:bg-white text-white print:text-slate-900 p-7 print:p-0 print:pb-4 border-b-4 border-amber-500 print:border-b-2 print:border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 print:flex-row print:items-start">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 print:text-amber-700 bg-amber-950/60 print:bg-transparent border border-amber-500/30 print:border-amber-600 px-2 py-0.5 rounded">
                Gulf Standard Curriculum Vitae
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-[11px] text-emerald-400 print:text-emerald-700 font-medium">Employment Visa Candidate</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white print:text-slate-900 uppercase">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-amber-300 print:text-amber-800">
              {personalInfo.targetJobTitle}
            </p>

            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-300 print:text-slate-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 print:text-amber-700 shrink-0" />
                {personalInfo.city}, {personalInfo.country}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400 print:text-amber-700 shrink-0" />
                <span className="font-semibold text-white print:text-slate-900 tabular-nums">{personalInfo.phone}</span>
                <span className="text-[10px] text-emerald-400 print:text-emerald-700 bg-emerald-950/80 print:bg-transparent px-1 rounded border border-emerald-500/30 print:border-emerald-600">WhatsApp</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 print:text-amber-700 shrink-0" />
                {personalInfo.email}
              </span>
              {personalInfo.website && (
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-400 print:text-amber-700 shrink-0" />
                  {personalInfo.website}
                </span>
              )}
            </div>
          </div>

          {/* Photo Slot */}
          {personalInfo.showPhoto && personalInfo.photoUrl && (
            <div className="shrink-0 self-center sm:self-start">
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.firstName}
                className="w-24 h-32 object-cover rounded-md border-2 border-amber-400/80 print:border-slate-400 shadow-md print:shadow-none"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </div>
      </div>

      {/* Main Body */}
      <div className="p-7 print:p-0 space-y-4 print:space-y-3.5 print:pt-4">
        {/* Profile Objective */}
        <div className="avoid-break space-y-1.5">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-amber-600">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Executive Profile & Career Objective
            </h2>
          </div>
          <p className="text-slate-700 text-justify text-[12.5px] leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Gulf Mandated Personal & Travel Credentials Grid */}
        <div className="avoid-break bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f172a] border-b border-slate-200 pb-1">
            Personal & Visa Credentials (GCC Recruitment Standards)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-xs text-slate-700">
            <div>
              <span className="text-slate-500 block text-[11px]">Nationality:</span>
              <strong className="text-slate-900 font-semibold">{personalInfo.nationality}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Date of Birth:</span>
              <strong className="text-slate-900 font-semibold">{personalInfo.dateOfBirth} (Age 24)</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Marital Status:</span>
              <strong className="text-slate-900 font-semibold">{personalInfo.maritalStatus || 'Single / Unmarried'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Religion:</span>
              <strong className="text-slate-900 font-semibold">{personalInfo.religion || 'Islam'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Father's Name:</span>
              <strong className="text-slate-900 font-semibold">{personalInfo.fatherName || 'Md. Rezaul Islam'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Mother's Name:</span>
              <strong className="text-slate-900 font-semibold">{personalInfo.motherName || 'Mst. Taslima Banu'}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">International Passport:</span>
              <strong className="text-emerald-700 font-semibold">Valid & Ready (&gt;4 Yrs)</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Visa Status:</span>
              <strong className="text-amber-700 font-semibold">Ready for Employment Visa</strong>
            </div>
            {personalInfo.drivingLicense && (
              <div>
                <span className="text-slate-500 block text-[11px]">Driving License:</span>
                <strong className="text-slate-900 font-semibold">{personalInfo.drivingLicense}</strong>
              </div>
            )}
          </div>
        </div>

        {/* Work Experience */}
        <div className="avoid-break space-y-3.5">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-amber-600">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Professional Work Experience
            </h2>
          </div>

          <div className="space-y-3.5">
            {experiences.map((exp) => (
              <div key={exp.id} className="avoid-break space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-[13px]">{exp.role}</h3>
                    <p className="text-xs font-semibold text-[#0f172a]">{exp.company} <span className="font-normal text-slate-500">· {exp.location}</span></p>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded tabular-nums">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx} className="leading-snug">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Technical Training */}
        <div className="avoid-break space-y-3">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-amber-600">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Education & Technical Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {education.map((edu) => (
              <div key={edu.id} className="p-3 bg-slate-50 border border-slate-200 rounded space-y-0.5">
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                  <span className="text-[11px] font-medium text-slate-500">{edu.year}</span>
                </div>
                <p className="text-slate-600">{edu.institution}</p>
                <p className="text-[#0f172a] font-semibold text-[11.5px]">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Capabilities */}
        <div className="avoid-break space-y-3">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-amber-600">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Key Competencies & Professional Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {skills.map((sg, idx) => (
              <div key={idx} className="bg-slate-50 p-3 rounded border border-slate-200 space-y-1">
                <h4 className="font-bold text-[#0f172a] uppercase tracking-wider text-[11px]">{sg.category}</h4>
                <ul className="space-y-0.5 text-slate-700 text-[11.5px]">
                  {sg.items.map((it, itemIdx) => (
                    <li key={itemIdx} className="leading-snug">• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Readiness */}
        <div className="avoid-break grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="space-y-1.5 bg-slate-50 p-3.5 rounded border border-slate-200 text-xs">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Languages Known</h4>
            <div className="space-y-1 text-slate-700">
              <p><strong className="text-slate-900">English:</strong> Fluent Professional Working (Written & Spoken)</p>
              <p><strong className="text-slate-900">Arabic:</strong> Basic Conversational Greetings & Workplace Commands (A1)</p>
              <p><strong className="text-slate-900">Bengali:</strong> Mother Tongue / Native Speaker</p>
            </div>
          </div>

          <div className="space-y-1.5 bg-slate-50 p-3.5 rounded border border-slate-200 text-xs">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Deployment & Compliance</h4>
            <div className="space-y-1 text-slate-700">
              <p>• <strong>Medical Fitness:</strong> Ready for GAMCA / Wafid Medical Examination</p>
              <p>• <strong>Police Clearance:</strong> Clean Background Certificate Ready</p>
              <p>• <strong>Availability:</strong> Immediate Joining upon Visa Issuance</p>
            </div>
          </div>
        </div>

        {/* Formal Signature & Declaration */}
        <div className="avoid-break pt-4 border-t border-slate-200 flex justify-between items-end text-xs text-slate-600">
          <div>
            <p>I hereby declare that all the information stated above is authentic and complete to the best of my knowledge.</p>
            <p className="font-semibold text-slate-800 mt-1">Candidate: {personalInfo.firstName} {personalInfo.lastName}</p>
          </div>
          <div className="text-right">
            <div className="w-32 border-b border-slate-400 pb-1 text-[11px] text-slate-500 font-mono">
              [Signature on File]
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};
