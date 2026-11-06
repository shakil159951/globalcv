import React, { useState } from 'react';
import { CandidateProfile } from '../types';
import { Mail, Phone, MapPin, Globe, Calendar, User, ShieldCheck, FileCheck, Award, Car, PenTool } from 'lucide-react';
import { SignatureModal } from './SignatureModal';

interface EuropassCVProps {
  profile: CandidateProfile;
  onUpdateSignature?: (url: string) => void;
}

export const EuropassCV: React.FC<EuropassCVProps> = ({ profile, onUpdateSignature }) => {
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  const { personalInfo, summary, experiences, education, trainings, skills, languages, drivingMobility, additionalCertifications } = profile;

  return (
    <div className="bg-white text-slate-800 a4-paper-sheet mx-auto border border-slate-300/80 print:border-none print-sheet font-sans text-[13px] leading-relaxed">
      {/* Official Europass Top Header Strip (Can be toggled in Editor Drawer) */}
      {personalInfo.showEuropassBanner !== false && (
        <div className="bg-[#0e417a] text-white px-8 py-3.5 print:px-0 print:py-2 flex items-center justify-between">
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

      <div className="p-6 sm:p-8 print:p-0 space-y-4 sm:space-y-5 print:space-y-3.5">
        {/* Personal Details Header */}
        <div className="flex flex-row items-start justify-between gap-4 sm:gap-6 pb-4 sm:pb-5 border-b border-slate-200 print:flex-row print:items-start">
          <div className="flex-1 space-y-2.5">
            <div>
              {personalInfo.showEuropassBanner === false && (
                <div className="text-[11px] font-bold text-[#0e417a] uppercase tracking-wider mb-1">
                  Europass Curriculum Vitae
                </div>
              )}
              <h1 className="text-xl sm:text-2xl font-bold text-[#0e417a] tracking-tight">
                {personalInfo.firstName} {personalInfo.lastName}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-slate-700 mt-0.5">
                {personalInfo.targetJobTitle}
              </p>
              {personalInfo.showVisaStatus && (
                <div className="inline-flex items-center gap-1.5 mt-1.5 bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-medium px-2.5 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  <span>{personalInfo.visaStatus}</span>
                </div>
              )}
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-x-4 gap-y-1 text-slate-600 text-xs">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span>{personalInfo.address}, {personalInfo.city}-{personalInfo.postalCode}, {personalInfo.country}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span className="tabular-nums font-medium text-slate-800">{personalInfo.phone}</span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">WhatsApp</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span className="text-slate-800">{personalInfo.email}</span>
              </div>
              {personalInfo.website && (
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                  <span>{personalInfo.website}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span>Date of birth: <strong className="text-slate-800 font-semibold">{personalInfo.dateOfBirth}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#0e417a] shrink-0" />
                <span>Nationality: <strong className="text-slate-800 font-semibold">{personalInfo.nationality}</strong> · Gender: {personalInfo.gender}</span>
              </div>
            </div>
          </div>

          {/* Photo Box */}
          {personalInfo.showPhoto && personalInfo.photoUrl && (
            <div className="shrink-0 self-start">
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.firstName}
                className="w-24 h-32 sm:w-28 sm:h-36 print:w-24 print:h-32 object-cover rounded border-2 border-slate-300 shadow-sm"
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
        <div className="space-y-3.5">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
              Work Experience
            </h2>
          </div>

          <div className="space-y-3.5">
            {experiences.map((exp) => (
              <div key={exp.id} className="avoid-break grid grid-cols-12 gap-2.5 print:grid-cols-12">
                <div className="col-span-3 text-xs font-semibold text-slate-600">
                  <span className="text-[#0e417a] font-bold block">{exp.startDate} – {exp.endDate}</span>
                  <p className="text-[11px] font-normal text-slate-500 mt-0.5">{exp.location}</p>
                </div>

                <div className="col-span-9 space-y-1">
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
        <div className="space-y-3.5">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
              Education and Training
            </h2>
          </div>

          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="avoid-break grid grid-cols-12 gap-2.5 print:grid-cols-12">
                <div className="col-span-3 text-xs font-semibold text-slate-600">
                  <span className="text-[#0e417a] font-bold block">{edu.year}</span>
                  <p className="text-[11px] font-normal text-slate-500 mt-0.5">{edu.location}</p>
                </div>

                <div className="col-span-9 space-y-0.5">
                  <h3 className="font-bold text-slate-900 text-[13px]">{edu.degree}</h3>
                  <p className="text-xs text-slate-700 font-medium">{edu.institution} · <span className="text-[#0e417a] font-semibold">{edu.grade}</span></p>
                  {edu.details && (
                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">{edu.details}</p>
                  )}
                </div>
              </div>
            ))}

            {trainings.map((trn) => (
              <div key={trn.id} className="avoid-break grid grid-cols-12 gap-2.5 print:grid-cols-12">
                <div className="col-span-3 text-xs font-semibold text-slate-600">
                  <span className="text-[#0e417a] font-bold block">{trn.year}</span>
                  <p className="text-[11px] font-normal text-slate-500 mt-0.5">Professional Course</p>
                </div>
                <div className="col-span-9 space-y-0.5">
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
        <div className="avoid-break space-y-2.5">
          <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
              Job-Related, Operational & Digital Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-2.5 text-xs">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-50 p-2.5 rounded border border-slate-200 space-y-1">
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

        {/* Section: Driving Licence & Additional Information (Conditional) */}
        {((Boolean(personalInfo.drivingLicense) && drivingMobility && drivingMobility.length > 0) || (additionalCertifications && additionalCertifications.length > 0)) && (
          <div className="avoid-break space-y-2.5 pt-1">
            <div className="flex items-center gap-2 pb-1 border-b-2 border-[#0e417a]">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#0e417a]">
                Legal Status & Relocation Preparedness
              </h2>
            </div>

            <div className={Boolean(personalInfo.drivingLicense) && drivingMobility && drivingMobility.length > 0 ? "grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-3 text-xs" : "grid grid-cols-1 gap-3 text-xs"}>
              {Boolean(personalInfo.drivingLicense) && drivingMobility && drivingMobility.length > 0 && (
                <div className="space-y-1.5 bg-slate-50 p-2.5 rounded border border-slate-200">
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
              )}

              {additionalCertifications && additionalCertifications.length > 0 && (
                <div className="space-y-1.5 bg-slate-50 p-2.5 rounded border border-slate-200">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <FileCheck className="w-3.5 h-3.5 text-[#0e417a]" />
                    <span>Visa & Relocation Readiness</span>
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
              )}
            </div>
          </div>
        )}

        {/* Europass Declaration & Signature (displayed when showDeclaration is true or signature is present) */}
        {(personalInfo.showDeclaration || (personalInfo.signatureUrl && personalInfo.showSignature !== false)) && (
          <div className="avoid-break pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <div>
              <p>I hereby certify that the information provided in this Europass Curriculum Vitae is true, complete, and authentic.</p>
              <p className="font-semibold text-slate-700 mt-0.5">Candidate: {personalInfo.firstName} {personalInfo.lastName} · Dhaka, Bangladesh</p>
            </div>
            {personalInfo.signatureUrl && personalInfo.showSignature !== false && (
              <div className="flex flex-col items-center sm:items-end shrink-0 group">
                <img
                  src={personalInfo.signatureUrl}
                  alt="Signature"
                  className="h-10 max-w-[130px] object-contain filter contrast-125"
                />
                <span className="text-[9px] text-slate-400">Digital Signature on File</span>
                {onUpdateSignature && (
                  <button
                    type="button"
                    onClick={() => setIsSignModalOpen(true)}
                    className="no-print opacity-0 group-hover:opacity-100 text-[10px] text-blue-700 hover:underline transition-opacity"
                  >
                    পরিবর্তন
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Signature Modal */}
      {onUpdateSignature && (
        <SignatureModal
          isOpen={isSignModalOpen}
          onClose={() => setIsSignModalOpen(false)}
          currentSignature={personalInfo.signatureUrl || ''}
          candidateName={`${personalInfo.firstName} ${personalInfo.lastName}`}
          onSave={(dataUrl) => onUpdateSignature(dataUrl)}
        />
      )}
    </div>
  );
};
