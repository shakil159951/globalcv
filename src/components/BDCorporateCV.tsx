import React from 'react';
import { CandidateProfile } from '../types';
import { Mail, Phone, MapPin, Globe, Calendar, User, Award, CheckCircle2 } from 'lucide-react';

interface BDCorporateCVProps {
  profile: CandidateProfile;
}

export const BDCorporateCV: React.FC<BDCorporateCVProps> = ({ profile }) => {
  const { personalInfo, summary, experiences, education, trainings, skills, languages, drivingMobility } = profile;

  return (
    <div className="bg-white text-slate-900 shadow-xl rounded-none w-full max-w-[800px] mx-auto p-8 sm:p-10 border border-slate-200 print-sheet font-sans text-[12.5px] leading-relaxed space-y-5">
      {/* Top Header Block */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-5 border-b-2 border-slate-900">
        <div className="space-y-1.5 flex-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <p className="text-sm font-bold text-blue-800">
            {personalInfo.targetJobTitle}
          </p>

          <div className="pt-1.5 space-y-1 text-xs text-slate-700">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1.5 font-medium">
                <Phone className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span className="tabular-nums">{personalInfo.phone}</span>
                <span className="text-[10px] text-emerald-800 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">WhatsApp</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{personalInfo.email}</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span><strong>Present Address:</strong> {personalInfo.address}, {personalInfo.city}-{personalInfo.postalCode}, {personalInfo.country}</span>
              </span>
            </div>

            {personalInfo.website && (
              <div className="flex items-center gap-1.5 text-blue-700 font-medium">
                <Globe className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span>{personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>

        {/* Candidate Photo */}
        {personalInfo.showPhoto && personalInfo.photoUrl && (
          <div className="shrink-0 self-center sm:self-start">
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.firstName}
              className="w-24 h-32 object-cover rounded border-2 border-slate-300 shadow-xs"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>

      {/* Career Objective */}
      <div className="avoid-break space-y-1.5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-blue-900 pb-0.5">
          Career Objective
        </h2>
        <p className="text-slate-800 text-justify text-[12px] leading-relaxed">
          {summary}
        </p>
      </div>

      {/* Work Experience */}
      <div className="avoid-break space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-blue-900 pb-0.5">
          Employment History & Professional Experience
        </h2>

        <div className="space-y-3.5">
          {experiences.map((exp) => (
            <div key={exp.id} className="avoid-break space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                <div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-[13px]">{exp.role}</h3>
                  <p className="text-xs font-semibold text-blue-900">{exp.company} <span className="font-normal text-slate-600">| {exp.location}</span></p>
                </div>
                <span className="text-[11px] font-semibold text-slate-700 tabular-nums bg-slate-100 px-2 py-0.5 rounded">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>

              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700">
                {exp.bulletPoints.map((pt, idx) => (
                  <li key={idx} className="leading-snug">{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Qualifications Table */}
      <div className="avoid-break space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-blue-900 pb-0.5">
          Academic Qualifications
        </h2>

        <div className="overflow-x-auto border border-slate-300 rounded text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300 text-[11.5px]">
                <th className="py-2 px-3 border-r border-slate-300">Degree / Certificate</th>
                <th className="py-2 px-3 border-r border-slate-300">Institute / Board</th>
                <th className="py-2 px-2 border-r border-slate-300 text-center">Passing Year</th>
                <th className="py-2 px-3 text-center">Result</th>
              </tr>
            </thead>
            <tbody>
              {education.map((edu) => (
                <tr key={edu.id} className="border-b border-slate-200">
                  <td className="py-2 px-3 font-semibold text-slate-900 border-r border-slate-300">{edu.degree}</td>
                  <td className="py-2 px-3 text-slate-700 border-r border-slate-300">{edu.institution}</td>
                  <td className="py-2 px-2 text-center text-slate-700 border-r border-slate-300 tabular-nums">{edu.year}</td>
                  <td className="py-2 px-3 text-center font-bold text-blue-900">{edu.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Professional Trainings & Courses */}
      {trainings.length > 0 && (
        <div className="avoid-break space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-blue-900 pb-0.5">
            Professional Training & Courses
          </h2>
          <div className="space-y-1.5 text-xs">
            {trainings.map((trn) => (
              <div key={trn.id} className="flex justify-between items-baseline bg-slate-50 p-2.5 rounded border border-slate-200">
                <div>
                  <h4 className="font-bold text-slate-900">{trn.title}</h4>
                  <p className="text-slate-600">{trn.institution}</p>
                </div>
                <span className="font-semibold text-slate-600 tabular-nums text-[11px]">{trn.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Skills & Competencies */}
      <div className="avoid-break space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-blue-900 pb-0.5">
          Key Skills & Technical Competencies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {skills.map((sg, idx) => (
            <div key={idx} className="bg-slate-50 p-2.5 rounded border border-slate-200 space-y-1">
              <h4 className="font-bold text-blue-950 uppercase tracking-wider text-[11px]">{sg.category}</h4>
              <ul className="space-y-0.5 text-slate-700 text-[11.5px]">
                {sg.items.map((it, itemIdx) => (
                  <li key={itemIdx} className="leading-snug">• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Details Table (Mandatory in Bangladesh Corporate CVs) */}
      <div className="avoid-break space-y-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-blue-900 pb-0.5">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-800 bg-slate-50 p-3.5 rounded border border-slate-200">
          <div><span className="font-semibold text-slate-600">Father's Name:</span> {personalInfo.fatherName || 'Md. Rezaul Islam'}</div>
          <div><span className="font-semibold text-slate-600">Mother's Name:</span> {personalInfo.motherName || 'Mst. Taslima Banu'}</div>
          <div><span className="font-semibold text-slate-600">Date of Birth:</span> {personalInfo.dateOfBirth}</div>
          <div><span className="font-semibold text-slate-600">Gender:</span> {personalInfo.gender}</div>
          <div><span className="font-semibold text-slate-600">Marital Status:</span> {personalInfo.maritalStatus || 'Unmarried'}</div>
          <div><span className="font-semibold text-slate-600">Blood Group:</span> {personalInfo.bloodGroup || 'B+ (Ve)'}</div>
          <div><span className="font-semibold text-slate-600">Religion:</span> {personalInfo.religion || 'Islam'}</div>
          <div><span className="font-semibold text-slate-600">Nationality:</span> {personalInfo.nationality}</div>
          <div className="sm:col-span-2"><span className="font-semibold text-slate-600">Permanent Address:</span> {personalInfo.permanentAddress || 'Mithapur, Badalgachhi, Naogaon, Bangladesh'}</div>
          {personalInfo.drivingLicense && (
            <div className="sm:col-span-2"><span className="font-semibold text-slate-600">Driving License:</span> {personalInfo.drivingLicense}</div>
          )}
        </div>
      </div>

      {/* Languages */}
      <div className="avoid-break space-y-1.5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-blue-900 pb-0.5">
          Language Proficiency
        </h2>
        <div className="flex flex-wrap gap-4 text-xs text-slate-800">
          <p>• <strong>Bengali:</strong> Native / Mother Tongue (Fluent speaking, reading, writing)</p>
          <p>• <strong>English:</strong> Working Professional (Fluent communication & documentation)</p>
        </div>
      </div>

      {/* Declaration & Signature */}
      <div className="avoid-break pt-4 border-t border-slate-300 flex justify-between items-end text-xs text-slate-700">
        <div className="space-y-1">
          <p className="italic text-[11.5px]">"I do hereby declare that all the information furnished above is true and complete to the best of my knowledge."</p>
          <p className="font-bold text-slate-900 mt-2">{personalInfo.firstName} {personalInfo.lastName}</p>
        </div>
        <div className="text-right">
          <div className="w-36 border-b border-slate-400 pb-1 text-[11px] font-mono text-slate-500">
            [Signature on file]
          </div>
          <p className="text-[10px] text-slate-500 mt-0.5">Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};
