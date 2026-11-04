import React from 'react';
import { CandidateProfile } from '../types';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface CompactCVProps {
  profile: CandidateProfile;
}

export const CompactCV: React.FC<CompactCVProps> = ({ profile }) => {
  const { personalInfo, summary, experiences, education, skills, languages, drivingMobility, additionalCertifications } = profile;

  return (
    <div className="bg-white text-slate-800 shadow-xl rounded-none w-full max-w-[800px] mx-auto p-8 border border-slate-200 print-sheet font-sans text-[12px] leading-normal space-y-4">
      {/* Header */}
      <div className="text-center space-y-1.5 border-b-2 border-slate-800 pb-3">
        <h1 className="text-2xl font-black uppercase tracking-wider text-slate-900">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
          {personalInfo.targetJobTitle} • {profile.region === 'bangladesh' ? 'Professional Curriculum Vitae' : profile.region === 'middle_east' ? 'Gulf GCC Employment Candidate' : 'European Work Permit Candidate'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-600 text-[11px] pt-1">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-slate-500" />
            {personalInfo.address}, {personalInfo.city}, {personalInfo.country}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3 text-slate-500" />
            {personalInfo.phone}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3 text-slate-500" />
            {personalInfo.email}
          </span>
          {personalInfo.website && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-slate-500" />
                {personalInfo.website}
              </span>
            </>
          )}
        </div>
        <p className="text-[10.5px] text-slate-500">
          DoB: {personalInfo.dateOfBirth} | Nationality: {personalInfo.nationality} | Passport: Valid International | Relocation: Immediate
        </p>
      </div>

      {/* Summary */}
      <div className="avoid-break space-y-1">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
          Professional Profile
        </h2>
        <p className="text-slate-700 text-justify text-[11.5px] leading-relaxed">
          {summary}
        </p>
      </div>

      {/* Work Experience */}
      <div className="avoid-break space-y-2.5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
          Employment History
        </h2>

        <div className="space-y-3">
          {experiences.map((exp) => (
            <div key={exp.id} className="avoid-break space-y-0.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
                <span>{exp.role} — <span className="font-semibold text-slate-700">{exp.company}</span></span>
                <span className="text-[11px] font-normal text-slate-600">{exp.startDate} – {exp.endDate} | {exp.location}</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-slate-700 text-[11.5px]">
                {exp.bulletPoints.map((pt, idx) => (
                  <li key={idx} className="leading-snug">{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Qualifications */}
      <div className="avoid-break space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
          Education & Training
        </h2>

        <div className="space-y-1.5">
          {education.map((edu) => (
            <div key={edu.id} className="avoid-break flex justify-between items-baseline text-xs">
              <div>
                <span className="font-bold text-slate-900">{edu.degree}</span> — {edu.institution} ({edu.grade})
              </div>
              <span className="text-slate-600 text-[11px] shrink-0">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="avoid-break space-y-1.5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
          Key Skills & Capabilities
        </h2>
        <div className="space-y-1 text-[11.5px] text-slate-700">
          {skills.map((sg, idx) => (
            <p key={idx} className="leading-tight">
              <strong className="text-slate-900 font-semibold">{sg.category}:</strong> {sg.items.join(', ')}
            </p>
          ))}
        </div>
      </div>

      {/* Languages & Visa Status */}
      <div className="avoid-break grid grid-cols-2 gap-4 pt-1">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1">
            Languages (CEFR)
          </h2>
          <div className="text-[11.5px] text-slate-700 space-y-0.5">
            <p><strong className="text-slate-900">Bengali:</strong> Native proficiency (C2)</p>
            <p><strong className="text-slate-900">English:</strong> Independent User (B2) — Fluent work communication</p>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1">
            Mobility & Work Permit Status
          </h2>
          <div className="text-[11.5px] text-slate-700 space-y-0.5">
            <p><strong className="text-slate-900">Permit Status:</strong> Ready for National Visa D / Work Permit</p>
            {Boolean(personalInfo.drivingLicense) && drivingMobility?.[0] ? (
              <p><strong className="text-slate-900">Driving:</strong> {drivingMobility[0]}</p>
            ) : (
              <p><strong className="text-slate-900">Deployment:</strong> Immediate joining & flexible shift readiness</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
