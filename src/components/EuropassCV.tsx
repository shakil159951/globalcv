import React from 'react';
import { CandidateProfile } from '../types';
import { Mail, Phone, MapPin, Globe, Calendar, User, ShieldCheck, FileCheck, Award, Car } from 'lucide-react';

interface EuropassCVProps {
  profile: CandidateProfile;
}

export const EuropassCV: React.FC<EuropassCVProps> = ({ profile }) => {
  const { personalInfo, summary, experiences, education, trainings, skills, languages, drivingMobility, additionalCertifications } = profile;

  return (
    <div className="bg-white text-slate-800 shadow-xl rounded-none w-full max-w-[800px] mx-auto border border-slate-200 print-sheet font-sans text-[13px] leading-relaxed">
      {/* Official Europass Top Header Strip (Can be toggled in Editor Drawer) */}
      {personalInfo.showEuropassBanner !== false && (
        <div className="bg-[#0e417a] text-white px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-300 fill-current">
                <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.2-6.2-4.5-6.2 4.5 2.3-7.2-6.1-4.5h7.6z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>europass</span>
                <span className="text-[10px] font-medium uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white/95">Curriculum Vitae</span>
              </div>
              <p className="text-[10.5px] text-blue-100/90">Official European Standard Format</p>
            </div>
          </div>

          <div className="text-right text-[11px] text-blue-100/90 font-mono hidden sm:block">
            <span>europa.eu/europass</span>
          </div>
        </div>
      )}

      <div className="p-8 space-y-6">
        {/* Personal Details Header */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="flex-1 space-y-3">
            <div>
              {personalInfo.showEuropassBanner === false && (
                <div className="text-[11px] font-bold text-[#0e417a] uppercase tracking-wider mb-1">
                  Europass Curriculum Vitae
                </div>
              )}
              <h1 className="text-2xl font-bold text-[#0e417a] tracking-tight">
                {personalInfo.firstName} {personalInfo.lastName}
              </h1>
              <p className="text-base font-semibold text-slate-700 mt-0.5">
                {personalInfo.targetJobTitle}
              </p>
              {personalInfo.showVisaStatus && (
                <div className="inline-flex items-center gap-1.5 mt-2 bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-medium px-2.5 py-1 rounded">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>{personalInfo.visaStatus}</span>
                </div>
              )}
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-slate-600 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span>{personalInfo.address}, {personalInfo.city}-{personalInfo.postalCode}, {personalInfo.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span className="tabular-nums font-medium text-slate-800">{personalInfo.phone}</span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span className="text-slate-800">{personalInfo.email}</span>
              </div>
              {personalInfo.website && (
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                  <span>{personalInfo.website}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span>Date of birth: <strong className="text-slate-800 font-semibold">{personalInfo.dateOfBirth}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span>Nationality: <strong className="text-slate-800 font-semibold">{personalInfo.nationality}</strong> · Gender: {personalInfo.gender}</span>
              </div>
            </div>
          </div>

          {/* Photo Box */}
          {personalInfo.showPhoto && personalInfo.photoUrl && (
            <div className="shrink-0 self-center md:self-start">
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.firstName}
                className="w-28 h-36 object-cover rounded border-2 border-slate-300 shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </div>

        {/* Section: Professional Summary / Profile Objective */}
        <div className="avoid-break space-y-2">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
              Profile Summary & Objective
            </h2>
          </div>
          <p className="text-slate-700 leading-relaxed text-justify text-[12.5px]">
            {summary}
          </p>
        </div>

        {/* Section: Work Experience */}
        <div className="avoid-break space-y-4">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
              Work Experience
            </h2>
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="avoid-break grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="md:col-span-3 text-xs font-semibold text-slate-600">
                  <span className="text-[#0e417a] font-bold">{exp.startDate} – {exp.endDate}</span>
                  <p className="text-[11px] font-normal text-slate-500 mt-0.5">{exp.location}</p>
                </div>

                <div className="md:col-span-9 space-y-1.5">
                  <div>
                    <h3 className="font-bold text-slate-900 text-[13px]">{exp.role}</h3>
                    <p className="text-xs font-medium text-slate-600">{exp.company}</p>
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 text-xs">
                    {exp.bulletPoints.map((point, idx) => (
                      <li key={idx} className="leading-snug">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Education and Training */}
        <div className="avoid-break space-y-4">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
              Education and Training
            </h2>
          </div>

          <div className="space-y-3.5">
            {education.map((edu) => (
              <div key={edu.id} className="avoid-break grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="md:col-span-3 text-xs font-semibold text-slate-600">
                  <span className="text-[#0e417a] font-bold">{edu.year}</span>
                  <p className="text-[11px] font-normal text-slate-500 mt-0.5">{edu.location}</p>
                </div>

                <div className="md:col-span-9 space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-[13px]">{edu.degree}</h3>
                  <p className="text-xs text-slate-700 font-medium">{edu.institution} · <span className="text-[#0e417a] font-semibold">{edu.grade}</span></p>
                  {edu.details && (
                    <p className="text-xs text-slate-600 mt-1 leading-snug">{edu.details}</p>
                  )}
                </div>
              </div>
            ))}

            {trainings.map((trn) => (
              <div key={trn.id} className="avoid-break grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="md:col-span-3 text-xs font-semibold text-slate-600">
                  <span className="text-[#0e417a] font-bold">{trn.year}</span>
                  <p className="text-[11px] font-normal text-slate-500 mt-0.5">Professional Course</p>
                </div>
                <div className="md:col-span-9 space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-[13px]">{trn.title}</h3>
                  <p className="text-xs text-slate-700">{trn.institution}</p>
                  {trn.description && (
                    <p className="text-xs text-slate-600 leading-snug">{trn.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Mother Tongue & Language Competences (CEFR Grid) */}
        <div className="avoid-break space-y-3">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
              Language Skills (European CEFR Standard)
            </h2>
          </div>

          <div className="space-y-2">
            <div className="text-xs text-slate-700">
              <span className="font-semibold text-slate-900">Mother tongue: </span>
              <strong className="text-[#0e417a]">Bengali</strong> (Proficient / C2 Native speaker)
            </div>

            <div className="text-xs font-semibold text-slate-800">
              Other language(s): <span className="text-[#0e417a]">English</span> (CEFR Self-Assessment Table)
            </div>

            {/* CEFR Table */}
            <div className="overflow-x-auto border border-slate-300 rounded text-[11px]">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-300">
                    <th className="py-1.5 px-2 border-r border-slate-300 text-left font-bold text-slate-900">Language</th>
                    <th colSpan={2} className="py-1.5 px-2 border-r border-slate-300">Understanding</th>
                    <th colSpan={2} className="py-1.5 px-2 border-r border-slate-300">Speaking</th>
                    <th className="py-1.5 px-2">Writing</th>
                  </tr>
                  <tr className="bg-slate-50 text-[10px] text-slate-600 border-b border-slate-300">
                    <th className="py-1 px-2 border-r border-slate-300 text-left"></th>
                    <th className="py-1 px-1 border-r border-slate-300">Listening</th>
                    <th className="py-1 px-1 border-r border-slate-300">Reading</th>
                    <th className="py-1 px-1 border-r border-slate-300">Interaction</th>
                    <th className="py-1 px-1 border-r border-slate-300">Production</th>
                    <th className="py-1 px-1">Writing</th>
                  </tr>
                </thead>
                <tbody>
                  {languages.filter(l => !l.isNative).map(lang => (
                    <tr key={lang.id} className="border-b border-slate-200">
                      <td className="py-1.5 px-2 text-left font-semibold text-slate-900 border-r border-slate-300">{lang.name}</td>
                      <td className="py-1.5 px-1 border-r border-slate-300 font-bold text-[#0e417a]">{lang.cefr?.listening || 'B2'}</td>
                      <td className="py-1.5 px-1 border-r border-slate-300 font-bold text-[#0e417a]">{lang.cefr?.reading || 'B2'}</td>
                      <td className="py-1.5 px-1 border-r border-slate-300 font-bold text-[#0e417a]">{lang.cefr?.spokenInteraction || 'B1'}</td>
                      <td className="py-1.5 px-1 border-r border-slate-300 font-bold text-[#0e417a]">{lang.cefr?.spokenProduction || 'B1'}</td>
                      <td className="py-1.5 px-1 font-bold text-[#0e417a]">{lang.cefr?.writing || 'B2'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-slate-500 italic">
              Levels: A1 and A2: Basic user — B1 and B2: Independent user — C1 and C2: Proficient user (Common European Framework of Reference for Languages)
            </p>
          </div>
        </div>

        {/* Section: Job-related, Technical & Practical Skills */}
        <div className="avoid-break space-y-3">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
              Job-Related, Operational & Digital Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-50 p-3 rounded border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-[#0e417a] text-xs uppercase tracking-wider">{skillGroup.category}</h4>
                <ul className="space-y-1 text-slate-700">
                  {skillGroup.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-[#0e417a] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Driving Licence & Additional Information */}
        <div className="avoid-break space-y-3 pt-2">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
              Additional Information & Legal Readiness
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5 bg-slate-50 p-3 rounded border border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Car className="w-3.5 h-3.5 text-[#0e417a]" />
                <span>Driving Licence & Mobility</span>
              </div>
              <ul className="space-y-1 text-slate-700">
                {drivingMobility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-slate-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5 bg-slate-50 p-3 rounded border border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <FileCheck className="w-3.5 h-3.5 text-[#0e417a]" />
                <span>Visa & Travel Readiness</span>
              </div>
              <ul className="space-y-1 text-slate-700">
                {additionalCertifications.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Optional Europass Declaration (Off by default as standard European Europass CVs do not use declarations) */}
        {personalInfo.showDeclaration && (
          <div className="avoid-break pt-4 border-t border-slate-200 text-center text-[10.5px] text-slate-500">
            <p>I hereby certify that the information provided in this Europass Curriculum Vitae is true, complete, and authentic.</p>
            <p className="font-semibold text-slate-700 mt-0.5">Candidate: {personalInfo.firstName} {personalInfo.lastName} · Dhaka, Bangladesh</p>
          </div>
        )}
      </div>
    </div>
  );
};
