import React, { useRef } from 'react';
import { CandidateProfile, WorkExperience, EducationItem, SkillCategory } from '../types';
import { User, Briefcase, GraduationCap, Wrench, Languages, Car, Shield, Image, Plus, Trash2, RotateCcw } from 'lucide-react';

interface EditorDrawerProps {
  profile: CandidateProfile;
  onChange: (updated: CandidateProfile) => void;
  onResetSector: () => void;
}

export const EditorDrawer: React.FC<EditorDrawerProps> = ({ profile, onChange, onResetSector }) => {
  const [activeTab, setActiveTab] = React.useState<'personal' | 'experience' | 'education' | 'skills' | 'visa'>('personal');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updatePersonal = (field: keyof CandidateProfile['personalInfo'], value: any) => {
    onChange({
      ...profile,
      personalInfo: {
        ...profile.personalInfo,
        [field]: value,
      },
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        updatePersonal('photoUrl', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleExperienceChange = (index: number, field: keyof WorkExperience, value: any) => {
    const newExp = [...profile.experiences];
    newExp[index] = { ...newExp[index], [field]: value };
    onChange({ ...profile, experiences: newExp });
  };

  const handleBulletPointChange = (expIndex: number, bulletIndex: number, val: string) => {
    const newExp = [...profile.experiences];
    const newBullets = [...newExp[expIndex].bulletPoints];
    newBullets[bulletIndex] = val;
    newExp[expIndex] = { ...newExp[expIndex], bulletPoints: newBullets };
    onChange({ ...profile, experiences: newExp });
  };

  const addBulletPoint = (expIndex: number) => {
    const newExp = [...profile.experiences];
    newExp[expIndex].bulletPoints.push('New operational task or responsibility');
    onChange({ ...profile, experiences: newExp });
  };

  const removeBulletPoint = (expIndex: number, bulletIndex: number) => {
    const newExp = [...profile.experiences];
    newExp[expIndex].bulletPoints.splice(bulletIndex, 1);
    onChange({ ...profile, experiences: newExp });
  };

  const addExperience = () => {
    const newExp: WorkExperience = {
      id: `exp-${Date.now()}`,
      role: 'Operations Assistant',
      company: 'European Employer / Organization',
      location: 'City, Country',
      startDate: '2023',
      endDate: 'Present',
      isCurrent: true,
      bulletPoints: ['Demonstrated high punctuality, safety compliance, and team collaboration.'],
    };
    onChange({ ...profile, experiences: [newExp, ...profile.experiences] });
  };

  const removeExperience = (index: number) => {
    const newExp = profile.experiences.filter((_, idx) => idx !== index);
    onChange({ ...profile, experiences: newExp });
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Sub-nav tabs for Editor */}
      <div className="flex border-b border-slate-200 overflow-x-auto text-xs font-semibold bg-slate-50 p-1.5 gap-1 shrink-0">
        <button
          onClick={() => setActiveTab('personal')}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'personal' ? 'bg-white text-[#0e417a] shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Personal & Photo</span>
        </button>

        <button
          onClick={() => setActiveTab('experience')}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'experience' ? 'bg-white text-[#0e417a] shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>Experience</span>
        </button>

        <button
          onClick={() => setActiveTab('education')}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'education' ? 'bg-white text-[#0e417a] shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Education</span>
        </button>

        <button
          onClick={() => setActiveTab('skills')}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'skills' ? 'bg-white text-[#0e417a] shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>Skills & Languages</span>
        </button>

        <button
          onClick={() => setActiveTab('visa')}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            activeTab === 'visa' ? 'bg-white text-[#0e417a] shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Visa & Mobility</span>
        </button>
      </div>

      {/* Editor Content Area */}
      <div className="p-4 overflow-y-auto space-y-4 text-xs flex-1">
        {/* Reset / Status bar */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-[11px] text-slate-500">
          <span>Editing profile for <strong>{profile.personalInfo.targetJobTitle}</strong></span>
          <button
            onClick={onResetSector}
            className="flex items-center gap-1 text-slate-600 hover:text-rose-600 transition-colors"
            title="Reset text to default for this sector"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Sector Template</span>
          </button>
        </div>

        {/* Tab: Personal & Photo */}
        {activeTab === 'personal' && (
          <div className="space-y-3.5">
            {/* Photo Section */}
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {profile.personalInfo.photoUrl ? (
                  <img
                    src={profile.personalInfo.photoUrl}
                    alt="Uploaded"
                    className="w-14 h-16 object-cover rounded border border-slate-300 shadow-xs"
                  />
                ) : (
                  <div className="w-14 h-16 rounded border border-dashed border-slate-300 bg-white flex flex-col items-center justify-center text-slate-400">
                    <Image className="w-5 h-5 mb-0.5" />
                    <span className="text-[9px]">No Photo</span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-slate-800">Europass Passport Photo</p>
                  <p className="text-[11px] text-slate-500">Standard 35×45mm formal photo (optional)</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-2.5 py-1.5 bg-white border border-slate-300 rounded text-slate-700 hover:bg-slate-100 font-medium text-[11px]"
                >
                  Upload Photo
                </button>
                {profile.personalInfo.photoUrl && (
                  <button
                    onClick={() => updatePersonal('photoUrl', '')}
                    className="px-2 py-1.5 text-rose-600 hover:bg-rose-50 rounded text-[11px]"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-2 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <p className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">সিভি ডিসপ্লে অপশন (Display Toggles)</p>
              
              <div className="flex items-center justify-between">
                <label htmlFor="showPhoto" className="text-slate-700 font-medium cursor-pointer">
                  সিভিতে ছবি দেখান (Show Passport Photo)
                </label>
                <div className="flex items-center gap-2">
                  {profile.personalInfo.photoUrl !== '/shakil_profile.jpg' && (
                    <button
                      type="button"
                      onClick={() => updatePersonal('photoUrl', '/shakil_profile.jpg')}
                      className="text-[11px] text-blue-600 hover:underline"
                    >
                      মূল ছবি
                    </button>
                  )}
                  <input
                    type="checkbox"
                    id="showPhoto"
                    checked={profile.personalInfo.showPhoto}
                    onChange={(e) => updatePersonal('showPhoto', e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1.5 border-t border-slate-200/80">
                <div>
                  <label htmlFor="showVisaStatus" className="text-slate-700 font-medium cursor-pointer block">
                    ওয়ার্ক পারমিট / স্পন্সরশিপ স্ট্যাটাস ব্যাজ
                  </label>
                  <span className="text-[10px] text-slate-500">ইউরোপ/মিডল ইস্টের রিক্রুটারদের জন্য (ঐচ্ছিক)</span>
                </div>
                <input
                  type="checkbox"
                  id="showVisaStatus"
                  checked={!!profile.personalInfo.showVisaStatus}
                  onChange={(e) => updatePersonal('showVisaStatus', e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-1.5 border-t border-slate-200/80">
                <div>
                  <label htmlFor="showEuropassBanner" className="text-slate-700 font-medium cursor-pointer block">
                    ইউরোপাস টপ ব্লু ব্যানার (Top Europass Blue Bar)
                  </label>
                  <span className="text-[10px] text-slate-500">অন রাখলে অফিশিয়াল লোগো বার সহ প্রিন্ট হবে, অফ রাখলে সাধারণ মার্জিত সাদা ফরম্যাট</span>
                </div>
                <input
                  type="checkbox"
                  id="showEuropassBanner"
                  checked={profile.personalInfo.showEuropassBanner !== false}
                  onChange={(e) => updatePersonal('showEuropassBanner', e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-1.5 border-t border-slate-200/80">
                <div>
                  <label htmlFor="showDeclaration" className="text-slate-700 font-medium cursor-pointer block">
                    সিভির নিচের ডিক্লারেশন / ঘোষণা লাইন
                  </label>
                  <span className="text-[10px] text-amber-600">ইউরোপে লাগে না (BD তে প্রচলিত)</span>
                </div>
                <input
                  type="checkbox"
                  id="showDeclaration"
                  checked={!!profile.personalInfo.showDeclaration}
                  onChange={(e) => updatePersonal('showDeclaration', e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Name and Target Job */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">First Name</label>
                <input
                  type="text"
                  value={profile.personalInfo.firstName}
                  onChange={(e) => updatePersonal('firstName', e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Last Name</label>
                <input
                  type="text"
                  value={profile.personalInfo.lastName}
                  onChange={(e) => updatePersonal('lastName', e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Target Job Title</label>
              <input
                type="text"
                value={profile.personalInfo.targetJobTitle}
                onChange={(e) => updatePersonal('targetJobTitle', e.target.value)}
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500 font-medium"
              />
            </div>

            {/* Middle East & International Credentials */}
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-2">
              <span className="font-bold text-slate-700 text-[11px] block">Family & GCC Visa Details:</span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-medium text-slate-600">Father's Name</label>
                  <input
                    type="text"
                    value={profile.personalInfo.fatherName || ''}
                    onChange={(e) => updatePersonal('fatherName', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded p-1 text-xs"
                    placeholder="Md. Rezaul Islam"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600">Mother's Name</label>
                  <input
                    type="text"
                    value={profile.personalInfo.motherName || ''}
                    onChange={(e) => updatePersonal('motherName', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded p-1 text-xs"
                    placeholder="Mst. Taslima Banu"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600">Religion</label>
                  <input
                    type="text"
                    value={profile.personalInfo.religion || ''}
                    onChange={(e) => updatePersonal('religion', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded p-1 text-xs"
                    placeholder="Islam"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600">Marital Status</label>
                  <input
                    type="text"
                    value={profile.personalInfo.maritalStatus || ''}
                    onChange={(e) => updatePersonal('maritalStatus', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded p-1 text-xs"
                    placeholder="Unmarried"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-600">Blood Group</label>
                  <input
                    type="text"
                    value={profile.personalInfo.bloodGroup || ''}
                    onChange={(e) => updatePersonal('bloodGroup', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded p-1 text-xs"
                    placeholder="B+ (Ve)"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-medium text-slate-600">Permanent Address</label>
                  <input
                    type="text"
                    value={profile.personalInfo.permanentAddress || ''}
                    onChange={(e) => updatePersonal('permanentAddress', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded p-1 text-xs"
                    placeholder="Mithapur, Badalgachhi, Naogaon, Bangladesh"
                  />
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={profile.personalInfo.email}
                  onChange={(e) => updatePersonal('email', e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Phone / WhatsApp (+880)</label>
                <input
                  type="text"
                  value={profile.personalInfo.phone}
                  onChange={(e) => updatePersonal('phone', e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500 font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">Address / Street</label>
                <input
                  type="text"
                  value={profile.personalInfo.address}
                  onChange={(e) => updatePersonal('address', e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">City</label>
                <input
                  type="text"
                  value={profile.personalInfo.city}
                  onChange={(e) => updatePersonal('city', e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={profile.personalInfo.dateOfBirth}
                  onChange={(e) => updatePersonal('dateOfBirth', e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nationality</label>
                <input
                  type="text"
                  value={profile.personalInfo.nationality}
                  onChange={(e) => updatePersonal('nationality', e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Gender</label>
                <input
                  type="text"
                  value={profile.personalInfo.gender}
                  onChange={(e) => updatePersonal('gender', e.target.value)}
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Professional Profile & Summary</label>
              <textarea
                rows={4}
                value={profile.summary}
                onChange={(e) => onChange({ ...profile, summary: e.target.value })}
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500 text-xs leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* Tab: Work Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-slate-800">Employment Positions ({profile.experiences.length})</p>
              <button
                onClick={addExperience}
                className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded border border-blue-200 font-semibold flex items-center gap-1 text-[11px]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Position</span>
              </button>
            </div>

            {profile.experiences.map((exp, expIdx) => (
              <div key={exp.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-800">Position #{expIdx + 1}</span>
                  <button
                    onClick={() => removeExperience(expIdx)}
                    className="text-rose-500 hover:text-rose-700 p-1"
                    title="Delete Position"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Role / Title</label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => handleExperienceChange(expIdx, 'role', e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded p-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Company Name</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(expIdx, 'company', e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded p-1.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Location</label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => handleExperienceChange(expIdx, 'location', e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded p-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Start Date</label>
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => handleExperienceChange(expIdx, 'startDate', e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded p-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">End Date</label>
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) => handleExperienceChange(expIdx, 'endDate', e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded p-1.5"
                    />
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between items-center text-[11px] text-slate-600 font-semibold">
                    <span>Key Duties & Achievements</span>
                    <button
                      onClick={() => addBulletPoint(expIdx)}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-0.5"
                    >
                      <Plus className="w-3 h-3" /> Add bullet
                    </button>
                  </div>

                  {exp.bulletPoints.map((bp, bpIdx) => (
                    <div key={bpIdx} className="flex items-start gap-1.5">
                      <textarea
                        rows={2}
                        value={bp}
                        onChange={(e) => handleBulletPointChange(expIdx, bpIdx, e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded p-1.5 text-xs"
                      />
                      <button
                        onClick={() => removeBulletPoint(expIdx, bpIdx)}
                        className="text-slate-400 hover:text-rose-500 pt-1 shrink-0"
                        title="Delete line"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Education */}
        {activeTab === 'education' && (
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">Degrees & Qualifications</h4>
            {profile.education.map((edu, idx) => (
              <div key={edu.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <div className="font-semibold text-slate-800 text-xs">Education #{idx + 1}</div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Degree / Certificate</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => {
                      const newEdu = [...profile.education];
                      newEdu[idx].degree = e.target.value;
                      onChange({ ...profile, education: newEdu });
                    }}
                    className="w-full bg-white border border-slate-300 rounded p-1.5"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => {
                        const newEdu = [...profile.education];
                        newEdu[idx].institution = e.target.value;
                        onChange({ ...profile, education: newEdu });
                      }}
                      className="w-full bg-white border border-slate-300 rounded p-1.5"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Grade / Result</label>
                    <input
                      type="text"
                      value={edu.grade}
                      onChange={(e) => {
                        const newEdu = [...profile.education];
                        newEdu[idx].grade = e.target.value;
                        onChange({ ...profile, education: newEdu });
                      }}
                      className="w-full bg-white border border-slate-300 rounded p-1.5"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Description / Covered subjects</label>
                  <textarea
                    rows={2}
                    value={edu.details || ''}
                    onChange={(e) => {
                      const newEdu = [...profile.education];
                      newEdu[idx].details = e.target.value;
                      onChange({ ...profile, education: newEdu });
                    }}
                    className="w-full bg-white border border-slate-300 rounded p-1.5 text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Skills & Languages */}
        {activeTab === 'skills' && (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Skill Categories & Keywords</h4>
              <div className="space-y-3">
                {profile.skills.map((sg, sgIdx) => (
                  <div key={sgIdx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                    <input
                      type="text"
                      value={sg.category}
                      onChange={(e) => {
                        const newSkills = [...profile.skills];
                        newSkills[sgIdx].category = e.target.value;
                        onChange({ ...profile, skills: newSkills });
                      }}
                      className="w-full bg-white border border-slate-300 rounded p-1.5 font-bold text-slate-800"
                    />
                    <div>
                      <label className="block text-[10px] text-slate-500 mb-0.5">Items (comma separated):</label>
                      <textarea
                        rows={2}
                        value={sg.items.join(', ')}
                        onChange={(e) => {
                          const newSkills = [...profile.skills];
                          newSkills[sgIdx].items = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                          onChange({ ...profile, skills: newSkills });
                        }}
                        className="w-full bg-white border border-slate-300 rounded p-1.5 text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <h4 className="font-semibold text-slate-800 mb-1">CEFR European Languages</h4>
              <p className="text-[11px] text-slate-500 mb-2">English proficiency levels recognized by European embassies & employers</p>
              {profile.languages.map((lang, lIdx) => (
                <div key={lang.id} className="p-2.5 bg-slate-50 border border-slate-200 rounded mb-2 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <strong className="text-slate-800">{lang.name}</strong>
                    <span className="text-slate-500">{lang.isNative ? 'Native' : 'Foreign Language'}</span>
                  </div>
                  {lang.cefr && (
                    <div className="grid grid-cols-5 gap-1 text-center text-[10px] pt-1">
                      <div>
                        <span className="text-slate-500 block">Listening</span>
                        <input
                          type="text"
                          value={lang.cefr.listening}
                          onChange={(e) => {
                            const newLangs = [...profile.languages];
                            if (newLangs[lIdx].cefr) newLangs[lIdx].cefr!.listening = e.target.value as any;
                            onChange({ ...profile, languages: newLangs });
                          }}
                          className="w-full text-center bg-white border border-slate-300 rounded py-0.5 font-bold"
                        />
                      </div>
                      <div>
                        <span className="text-slate-500 block">Reading</span>
                        <input
                          type="text"
                          value={lang.cefr.reading}
                          onChange={(e) => {
                            const newLangs = [...profile.languages];
                            if (newLangs[lIdx].cefr) newLangs[lIdx].cefr!.reading = e.target.value as any;
                            onChange({ ...profile, languages: newLangs });
                          }}
                          className="w-full text-center bg-white border border-slate-300 rounded py-0.5 font-bold"
                        />
                      </div>
                      <div>
                        <span className="text-slate-500 block">Interaction</span>
                        <input
                          type="text"
                          value={lang.cefr.spokenInteraction}
                          onChange={(e) => {
                            const newLangs = [...profile.languages];
                            if (newLangs[lIdx].cefr) newLangs[lIdx].cefr!.spokenInteraction = e.target.value as any;
                            onChange({ ...profile, languages: newLangs });
                          }}
                          className="w-full text-center bg-white border border-slate-300 rounded py-0.5 font-bold"
                        />
                      </div>
                      <div>
                        <span className="text-slate-500 block">Production</span>
                        <input
                          type="text"
                          value={lang.cefr.spokenProduction}
                          onChange={(e) => {
                            const newLangs = [...profile.languages];
                            if (newLangs[lIdx].cefr) newLangs[lIdx].cefr!.spokenProduction = e.target.value as any;
                            onChange({ ...profile, languages: newLangs });
                          }}
                          className="w-full text-center bg-white border border-slate-300 rounded py-0.5 font-bold"
                        />
                      </div>
                      <div>
                        <span className="text-slate-500 block">Writing</span>
                        <input
                          type="text"
                          value={lang.cefr.writing}
                          onChange={(e) => {
                            const newLangs = [...profile.languages];
                            if (newLangs[lIdx].cefr) newLangs[lIdx].cefr!.writing = e.target.value as any;
                            onChange({ ...profile, languages: newLangs });
                          }}
                          className="w-full text-center bg-white border border-slate-300 rounded py-0.5 font-bold"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Visa & Mobility */}
        {activeTab === 'visa' && (
          <div className="space-y-3.5">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Visa & Sponsorship Statement</label>
              <input
                type="text"
                value={profile.personalInfo.visaStatus}
                onChange={(e) => updatePersonal('visaStatus', e.target.value)}
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Passport Status</label>
              <input
                type="text"
                value={profile.personalInfo.passportStatus}
                onChange={(e) => updatePersonal('passportStatus', e.target.value)}
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Driving License</label>
              <input
                type="text"
                value={profile.personalInfo.drivingLicense}
                onChange={(e) => updatePersonal('drivingLicense', e.target.value)}
                className="w-full border border-slate-300 rounded-md p-2 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Work Permit & Relocation Checklist</label>
              <div className="space-y-1.5">
                {profile.additionalCertifications.map((item, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newCerts = [...profile.additionalCertifications];
                      newCerts[idx] = e.target.value;
                      onChange({ ...profile, additionalCertifications: newCerts });
                    }}
                    className="w-full border border-slate-300 rounded p-1.5 text-xs bg-slate-50"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
