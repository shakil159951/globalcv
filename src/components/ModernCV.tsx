import React from 'react';
import { CandidateProfile } from '../types';
import { Mail, Phone, MapPin, Globe, Calendar, User, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ModernCVProps {
  profile: CandidateProfile;
}

export const ModernCV: React.FC<ModernCVProps> = ({ profile }) => {
  const { personalInfo, summary, experiences, education, trainings, skills, languages, drivingMobility, additionalCertifications } = profile;

  return (
    <div className="bg-white text-slate-800 a4-paper-sheet mx-auto border border-slate-300/80 print:border-none print-sheet font-sans text-[12.5px] leading-relaxed">
      {/* Top Header Banner */}
      <div className="bg-slate-900 print:bg-white text-white print:text-slate-900 p-8 print:p-0 print:pb-4 border-b-2 print:border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 print:flex-row print:items-start">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-blue-400 print:text-blue-800">
                {profile.region === 'middle_east' ? 'Gulf Standard Professional Resume' : 'European Standard Resume'}
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-[11px] text-emerald-400 print:text-emerald-700 font-medium">Work Permit / Employment Visa Ready</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-slate-900">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <p className="text-sm sm:text-base font-medium text-slate-300 print:text-slate-700">
              {personalInfo.targetJobTitle}
            </p>

            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-300 print:text-slate-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 print:text-blue-700 shrink-0" />
                {personalInfo.city}, {personalInfo.country}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-400 print:text-blue-700 shrink-0" />
                <span className="tabular-nums font-semibold print:text-slate-900">{personalInfo.phone}</span>
                <span className="text-[10px] text-emerald-400 print:text-emerald-700 bg-emerald-950/80 print:bg-transparent px-1 rounded border border-emerald-500/30 print:border-emerald-600">WhatsApp</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400 print:text-blue-700 shrink-0" />
                {personalInfo.email}
              </span>
              {personalInfo.website && (
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-400 print:text-blue-700 shrink-0" />
                  {personalInfo.website}
                </span>
              )}
            </div>
          </div>

          {personalInfo.showPhoto && personalInfo.photoUrl && (
            <div className="shrink-0">
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.firstName}
                className="w-24 h-32 object-cover rounded border border-slate-700 print:border-slate-400 shadow"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </div>
      </div>

      {/* Two Column Layout Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 min-h-[800px] print:min-h-0">
        {/* Left Sidebar (4 cols) */}
        <div className="md:col-span-4 col-span-4 bg-slate-50/80 print:bg-white p-6 print:p-2 border-r border-slate-200 space-y-6 print:space-y-4">
          {/* Key Facts */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Personal Data
            </h3>
            <div className="space-y-1.5 text-xs text-slate-600">
              <p><strong className="text-slate-800">Date of Birth:</strong> {personalInfo.dateOfBirth}</p>
              <p><strong className="text-slate-800">Nationality:</strong> {personalInfo.nationality}</p>
              <p><strong className="text-slate-800">Gender:</strong> {personalInfo.gender}</p>
              {personalInfo.religion && <p><strong className="text-slate-800">Religion:</strong> {personalInfo.religion}</p>}
              {personalInfo.maritalStatus && <p><strong className="text-slate-800">Marital Status:</strong> {personalInfo.maritalStatus}</p>}
              <p><strong className="text-slate-800">Passport:</strong> Valid international</p>
            </div>
          </div>

          {/* Visa Status */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Work Permit Readiness
            </h3>
            <div className="space-y-2 text-xs text-slate-600">
              {additionalCertifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Languages
            </h3>
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-slate-800">
                  <span>Bengali</span>
                  <span className="text-blue-700">Native (C2)</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-1">
                  <div className="bg-blue-600 h-1.5 rounded-full w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-800">
                  <span>English</span>
                  <span className="text-blue-700">Good Working (B2)</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-1">
                  <div className="bg-blue-600 h-1.5 rounded-full w-4/5"></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">CEFR: Fluent understanding, work orders & international team interaction</p>
              </div>
            </div>
          </div>

          {/* Driving Licence */}
          {Boolean(personalInfo.drivingLicense) && drivingMobility && drivingMobility.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Driving & Mobility
              </h3>
              <div className="space-y-1.5 text-xs text-slate-600">
                {drivingMobility.map((drive, idx) => (
                  <p key={idx} className="leading-snug">• {drive}</p>
                ))}
              </div>
            </div>
          )}

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Core Competencies
            </h3>
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[11px] font-bold text-slate-800">{skillGroup.category}</span>
                <ul className="space-y-0.5 text-xs text-slate-600">
                  {skillGroup.items.map((it, itemIdx) => (
                    <li key={itemIdx} className="leading-snug">• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Main Content (8 cols) */}
        <div className="md:col-span-8 p-6 space-y-6">
          {/* Summary */}
          <div className="avoid-break space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Candidate Profile & European Intent
            </h3>
            <p className="text-slate-700 text-xs leading-relaxed text-justify">
              {summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="avoid-break space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Work Experience
            </h3>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="avoid-break space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h4 className="font-bold text-slate-900 text-[13px]">{exp.role}</h4>
                      <p className="text-xs font-medium text-blue-700">{exp.company} <span className="text-slate-500 font-normal">· {exp.location}</span></p>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 tabular-nums">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
                    {exp.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-snug">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="avoid-break space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Education & Qualifications
            </h3>

            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="avoid-break space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-slate-900 text-xs">{edu.degree}</h4>
                    <span className="text-[11px] font-medium text-slate-500">{edu.year}</span>
                  </div>
                  <p className="text-xs text-slate-600">{edu.institution} · <span className="font-semibold text-blue-700">{edu.grade}</span></p>
                  {edu.details && (
                    <p className="text-[11.5px] text-slate-500 leading-snug">{edu.details}</p>
                  )}
                </div>
              ))}

              {trainings.map((trn) => (
                <div key={trn.id} className="avoid-break space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-slate-900 text-xs">{trn.title}</h4>
                    <span className="text-[11px] font-medium text-slate-500">{trn.year}</span>
                  </div>
                  <p className="text-xs text-slate-600">{trn.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
