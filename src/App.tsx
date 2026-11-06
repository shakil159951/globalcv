import React, { useState } from 'react';
import { CandidateProfile, CoverLetterData, RegionId, SectorId, TemplateId } from './types';
import {
  defaultCandidateProfile,
  sectorPresetsBangladesh,
  sectorPresetsMalaysia,
  sectorPresetsEurope,
  sectorPresetsMiddleEast,
  baseLanguagesBangladesh,
  baseLanguagesMalaysia,
  baseLanguagesEurope,
  baseLanguagesMiddleEast,
} from './data/defaultData';
import { Header } from './components/Header';
import { BDCorporateCV } from './components/BDCorporateCV';
import { EuropassCV } from './components/EuropassCV';
import { GulfExecutiveCV } from './components/GulfExecutiveCV';
import { ModernCV } from './components/ModernCV';
import { CompactCV } from './components/CompactCV';
import { CoverLetterView } from './components/CoverLetterView';
import { EditorDrawer } from './components/EditorDrawer';
import { EuropeanGuideModal } from './components/EuropeanGuideModal';
import { EmailTemplateModal } from './components/EmailTemplateModal';
import { DocumentChecklistModal } from './components/DocumentChecklistModal';
import { InterviewPrepModal } from './components/InterviewPrepModal';
import { ScorecardModal } from './components/ScorecardModal';
import { BOESLMalaysiaModal } from './components/BOESLMalaysiaModal';
import { SignatureModal } from './components/SignatureModal';
import {
  Sprout,
  Truck,
  Hotel,
  Factory,
  Cpu,
  FileText,
  SlidersHorizontal,
  Printer,
  Copy,
  Check,
  Globe,
  FileCheck2,
  HelpCircle,
  Mail,
  Shield,
  RotateCcw,
  Award,
  CheckSquare,
  MessageSquare,
  Star,
  Download,
  PenTool,
} from 'lucide-react';

export default function App() {
  const [region, setRegion] = useState<RegionId>('europe');
  const [activeSector, setActiveSector] = useState<SectorId>('it');
  const [activeTemplate, setActiveTemplate] = useState<TemplateId>('europass');
  const [activeDoc, setActiveDoc] = useState<'cv' | 'coverLetter'>('cv');

  const [profile, setProfile] = useState<CandidateProfile>({
    ...defaultCandidateProfile,
    region: 'europe',
    sector: 'it',
    summary: sectorPresetsEurope.it.summary,
    experiences: sectorPresetsEurope.it.experiences,
    skills: sectorPresetsEurope.it.skills,
    personalInfo: {
      ...defaultCandidateProfile.personalInfo,
      targetJobTitle: sectorPresetsEurope.it.targetJobTitle,
    },
  });

  const [coverLettersBD, setCoverLettersBD] = useState<Record<SectorId, CoverLetterData>>({
    it: sectorPresetsBangladesh.it.coverLetter,
    admin: sectorPresetsBangladesh.admin.coverLetter,
    logistics: sectorPresetsBangladesh.logistics.coverLetter,
    hospitality: sectorPresetsBangladesh.hospitality.coverLetter,
    factory: sectorPresetsBangladesh.factory.coverLetter,
    agriculture: sectorPresetsBangladesh.agriculture.coverLetter,
  });

  const [coverLettersEurope, setCoverLettersEurope] = useState<Record<SectorId, CoverLetterData>>({
    it: sectorPresetsEurope.it.coverLetter,
    admin: sectorPresetsEurope.admin.coverLetter,
    agriculture: sectorPresetsEurope.agriculture.coverLetter,
    logistics: sectorPresetsEurope.logistics.coverLetter,
    hospitality: sectorPresetsEurope.hospitality.coverLetter,
    factory: sectorPresetsEurope.factory.coverLetter,
  });

  const [coverLettersMiddleEast, setCoverLettersMiddleEast] = useState<Record<SectorId, CoverLetterData>>({
    it: sectorPresetsMiddleEast.it.coverLetter,
    admin: sectorPresetsMiddleEast.admin.coverLetter,
    logistics: sectorPresetsMiddleEast.logistics.coverLetter,
    hospitality: sectorPresetsMiddleEast.hospitality.coverLetter,
    factory: sectorPresetsMiddleEast.factory.coverLetter,
    agriculture: sectorPresetsMiddleEast.agriculture.coverLetter,
  });

  const [coverLettersMalaysia, setCoverLettersMalaysia] = useState<Record<SectorId, CoverLetterData>>({
    it: sectorPresetsMalaysia.it.coverLetter,
    logistics: sectorPresetsMalaysia.logistics.coverLetter,
    admin: sectorPresetsMalaysia.admin.coverLetter,
    factory: sectorPresetsMalaysia.factory.coverLetter,
    hospitality: sectorPresetsMalaysia.hospitality.coverLetter,
    agriculture: sectorPresetsMalaysia.agriculture.coverLetter,
  });

  const [showEditor, setShowEditor] = useState<boolean>(true);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState<boolean>(false);
  const [isInterviewOpen, setIsInterviewOpen] = useState<boolean>(false);
  const [isScorecardOpen, setIsScorecardOpen] = useState<boolean>(false);
  const [isBOESLModalOpen, setIsBOESLModalOpen] = useState<boolean>(false);
  const [isGlobalSignModalOpen, setIsGlobalSignModalOpen] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Switch between Bangladesh, Malaysia (BOESL), Europe, and Middle East
  const handleSelectRegion = (newRegion: RegionId) => {
    setRegion(newRegion);

    let presets = sectorPresetsEurope;
    let newTemplate: TemplateId = 'europass';
    let newLanguages = baseLanguagesEurope;
    let visaText = 'Eligible & Ready for European Work Permit / National Visa D Sponsorship';

    if (newRegion === 'bangladesh') {
      presets = sectorPresetsBangladesh;
      newTemplate = 'bd_corporate';
      newLanguages = baseLanguagesBangladesh;
      visaText = 'Bangladeshi Citizen | Permanent Resident | Ready for Immediate Joining';
    } else if (newRegion === 'malaysia') {
      presets = sectorPresetsMalaysia;
      newTemplate = 'bd_corporate';
      newLanguages = baseLanguagesMalaysia;
      visaText = 'BOESL G2G Zero-Migration Candidate · Ready for DHL Supply Chain Malaysia';
    } else if (newRegion === 'middle_east') {
      presets = sectorPresetsMiddleEast;
      newTemplate = 'gulf_executive';
      newLanguages = baseLanguagesMiddleEast;
      visaText = 'Eligible & Ready for Gulf Employment Visa (GAMCA Medical & Police Clearance Ready)';
    }

    setActiveTemplate(newTemplate);

    const currentPreset = presets[activeSector] || presets.it;

    setProfile((prev) => ({
      ...prev,
      region: newRegion,
      personalInfo: {
        ...prev.personalInfo,
        targetJobTitle: currentPreset.targetJobTitle,
        visaStatus: visaText,
      },
      summary: currentPreset.summary,
      experiences: currentPreset.experiences,
      skills: currentPreset.skills,
      languages: [...newLanguages],
    }));
  };

  // Dedicated 1-Click BOESL DHL Malaysia Circular Preset Loader
  const handleApplyBOESLPreset = (sectorId: SectorId, targetTitle?: string) => {
    setRegion('malaysia');
    setActiveSector(sectorId);
    setActiveTemplate('bd_corporate');

    const preset = sectorPresetsMalaysia[sectorId] || sectorPresetsMalaysia.it;

    setProfile((prev) => ({
      ...prev,
      region: 'malaysia',
      sector: sectorId,
      personalInfo: {
        ...prev.personalInfo,
        targetJobTitle: targetTitle || preset.targetJobTitle,
        visaStatus: 'BOESL G2G Zero-Migration Candidate · Ready for DHL Supply Chain Malaysia',
        showSignature: true,
      },
      summary: preset.summary,
      experiences: preset.experiences,
      skills: preset.skills,
      languages: [...baseLanguagesMalaysia],
    }));
  };

  // Universal Signature Update (applied everywhere)
  const handleUpdateSignature = (dataUrl: string) => {
    setProfile((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        signatureUrl: dataUrl,
        showSignature: true,
      },
    }));

    if (region === 'malaysia') {
      setCoverLettersMalaysia((prev) => ({
        ...prev,
        [activeSector]: { ...prev[activeSector], signatureUrl: dataUrl },
      }));
    } else if (region === 'bangladesh') {
      setCoverLettersBD((prev) => ({
        ...prev,
        [activeSector]: { ...prev[activeSector], signatureUrl: dataUrl },
      }));
    } else if (region === 'middle_east') {
      setCoverLettersMiddleEast((prev) => ({
        ...prev,
        [activeSector]: { ...prev[activeSector], signatureUrl: dataUrl },
      }));
    } else {
      setCoverLettersEurope((prev) => ({
        ...prev,
        [activeSector]: { ...prev[activeSector], signatureUrl: dataUrl },
      }));
    }
  };

  // Switch Sector preset
  const handleSelectSector = (sectorId: SectorId) => {
    setActiveSector(sectorId);
    let presets = sectorPresetsEurope;
    if (region === 'bangladesh') presets = sectorPresetsBangladesh;
    else if (region === 'malaysia') presets = sectorPresetsMalaysia;
    else if (region === 'middle_east') presets = sectorPresetsMiddleEast;

    const preset = presets[sectorId] || presets.it;

    setProfile((prev) => ({
      ...prev,
      sector: sectorId,
      personalInfo: {
        ...prev.personalInfo,
        targetJobTitle: preset.targetJobTitle,
      },
      summary: preset.summary,
      experiences: preset.experiences,
      skills: preset.skills,
    }));
  };

  // Reset current sector to defaults
  const handleResetSector = () => {
    let presets = sectorPresetsEurope;
    if (region === 'bangladesh') presets = sectorPresetsBangladesh;
    else if (region === 'malaysia') presets = sectorPresetsMalaysia;
    else if (region === 'middle_east') presets = sectorPresetsMiddleEast;

    const preset = presets[activeSector] || presets.it;

    setProfile((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        targetJobTitle: preset.targetJobTitle,
      },
      summary: preset.summary,
      experiences: preset.experiences,
      skills: preset.skills,
    }));
  };

  const handleUpdateCoverLetter = (updated: Partial<CoverLetterData>) => {
    if (region === 'bangladesh') {
      setCoverLettersBD((prev) => ({
        ...prev,
        [activeSector]: { ...prev[activeSector], ...updated },
      }));
    } else if (region === 'malaysia') {
      setCoverLettersMalaysia((prev) => ({
        ...prev,
        [activeSector]: { ...prev[activeSector], ...updated },
      }));
    } else if (region === 'middle_east') {
      setCoverLettersMiddleEast((prev) => ({
        ...prev,
        [activeSector]: { ...prev[activeSector], ...updated },
      }));
    } else {
      setCoverLettersEurope((prev) => ({
        ...prev,
        [activeSector]: { ...prev[activeSector], ...updated },
      }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  let currentCoverLetter = coverLettersEurope[activeSector];
  if (region === 'bangladesh') currentCoverLetter = coverLettersBD[activeSector];
  else if (region === 'malaysia') currentCoverLetter = coverLettersMalaysia[activeSector];
  else if (region === 'middle_east') currentCoverLetter = coverLettersMiddleEast[activeSector];

  let currentPresets = sectorPresetsEurope;
  if (region === 'bangladesh') currentPresets = sectorPresetsBangladesh;
  else if (region === 'malaysia') currentPresets = sectorPresetsMalaysia;
  else if (region === 'middle_east') currentPresets = sectorPresetsMiddleEast;

  // Build plain text representation
  const generateCVText = () => {
    return `CURRICULUM VITAE - ${profile.personalInfo.firstName} ${profile.personalInfo.lastName}
Target Position: ${profile.personalInfo.targetJobTitle}
Target Region: ${region.toUpperCase()}
Phone: ${profile.personalInfo.phone} | WhatsApp: ${profile.personalInfo.whatsapp} | Email: ${profile.personalInfo.email}
Present Address: ${profile.personalInfo.address}, ${profile.personalInfo.city}-${profile.personalInfo.postalCode}, ${profile.personalInfo.country}
Permanent Address: ${profile.personalInfo.permanentAddress || 'Mithapur, Badalgachhi, Naogaon, Bangladesh'}
Date of Birth: ${profile.personalInfo.dateOfBirth} | Blood Group: ${profile.personalInfo.bloodGroup} | Religion: ${profile.personalInfo.religion}
Passport Status: ${profile.personalInfo.passportStatus}

CAREER OBJECTIVE:
${profile.summary}

PROFESSIONAL WORK EXPERIENCE:
${profile.experiences
  .map(
    (e) => `${e.role} at ${e.company} (${e.location}) [${e.startDate} - ${e.endDate}]
${e.bulletPoints.map((b) => `• ${b}`).join('\n')}`
  )
  .join('\n\n')}

ACADEMIC QUALIFICATIONS:
${profile.education.map((ed) => `${ed.degree} - ${ed.institution} (${ed.year}) - ${ed.grade}`).join('\n')}

PROFESSIONAL TRAINING:
${profile.trainings.map((tr) => `${tr.title} - ${tr.institution} (${tr.year})`).join('\n')}

TECHNICAL & KEY SKILLS:
${profile.skills.map((s) => `${s.category}: ${s.items.join(', ')}`).join('\n')}

LANGUAGES:
${profile.languages.map((l) => `${l.name} (${l.levelText || (l.isNative ? 'Native' : 'Fluent')})`).join('; ')}${
  profile.personalInfo.drivingLicense && profile.drivingMobility.length > 0
    ? `\n\nDRIVING & MOBILITY:\n${profile.drivingMobility.join('; ')}`
    : ''
}`;
  };

  // Copy plain text of CV for online portal forms
  const handleCopyCVText = async () => {
    const text = generateCVText();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2000);
    } catch {
      // Fallback
    }
  };

  // Download ATS plain text file
  const handleDownloadTxt = () => {
    const text = generateCVText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Md_Shakil_Hossain_CV_${region}_${activeSector}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Download full profile JSON backup
  const handleDownloadJson = () => {
    const data = {
      profile,
      coverLetter: currentCoverLetter,
      timestamp: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Md_Shakil_Hossain_CV_Backup.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-100 print:bg-white print:min-h-0 print:block flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Header */}
      <Header
        onPrint={handlePrint}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenEmail={() => setIsEmailModalOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenInterview={() => setIsInterviewOpen(true)}
        onOpenScorecard={() => setIsScorecardOpen(true)}
        onOpenSignature={() => setIsGlobalSignModalOpen(true)}
        onOpenBOESL={() => setIsBOESLModalOpen(true)}
        onDownloadTxt={handleDownloadTxt}
        onDownloadJson={handleDownloadJson}
        activeDoc={activeDoc}
        setActiveDoc={setActiveDoc}
      />

      {/* Main Workspace Controls Bar (no-print) */}
      <section className="no-print bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-3">
          {/* BOESL DHL Malaysia Circular Special 1-Click Banner */}
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-[#0e417a] text-white rounded-xl p-3.5 flex flex-col lg:flex-row lg:items-center justify-between gap-3 shadow-md border border-emerald-700/50">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-xl shrink-0 border border-white/20">
                🇲🇾
              </div>
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-emerald-500/30 text-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-400/30 uppercase tracking-wide">
                    সরকারিভাবে শূন্য অভিবাসন ব্যয় • BOESL Circular
                  </span>
                  <span className="text-[11px] text-teal-200 hidden sm:inline">
                    বেসিক ১,৭০০ RM + ওভারটাইম • বিমানভাড়া ও বাসস্থান ফ্রি
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white">
                  DHL SUPPLY CHAIN (MALAYSIA) SDN. BHD. — বিশেষ সার্কুলার সিভি
                </h3>
                <p className="text-[11px] text-teal-100/80">
                  বিজ্ঞপ্তি নং: ৪২.০২.০০০০.০৩০.৯৯.০০০.১৯.৩০০৯,২৬/৩১২৪ • পদ: টেকনিক্যাল স্কিল ওয়ার্কার্স ও অপারেশনস অ্যাসিস্ট্যান্ট (১১২ পদ)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleApplyBOESLPreset('it', 'Technical Skill Worker - DHL Supply Chain Malaysia')}
                className={`px-3 py-1.5 font-bold text-xs rounded-lg shadow-xs transition-colors flex items-center gap-1 ${
                  region === 'malaysia' && activeSector === 'it'
                    ? 'bg-emerald-300 text-emerald-950 ring-2 ring-white'
                    : 'bg-white hover:bg-emerald-50 text-emerald-950'
                }`}
              >
                <span>টেকনিক্যাল স্কিল ওয়ার্কার্স</span>
              </button>
              <button
                type="button"
                onClick={() => handleApplyBOESLPreset('logistics', 'Operations Assistant (Warehouse) - DHL Supply Chain Malaysia')}
                className={`px-3 py-1.5 font-bold text-xs rounded-lg shadow-xs transition-colors flex items-center gap-1 ${
                  region === 'malaysia' && activeSector === 'logistics'
                    ? 'bg-amber-300 text-amber-950 ring-2 ring-white'
                    : 'bg-emerald-700 hover:bg-emerald-600 text-white border border-emerald-500'
                }`}
              >
                <span>অপারেশনস অ্যাসিস্ট্যান্ট (১১২ পদ)</span>
              </button>
              <button
                type="button"
                onClick={() => setIsBOESLModalOpen(true)}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs rounded-lg transition-colors"
              >
                সার্কুলার বিবরণ
              </button>
            </div>
          </div>

          {/* Top Banner: 10/10 Quality Score Alert Banner */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-emerald-50 border border-blue-200/80 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0e417a] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
                10/10
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h2 className="text-xs sm:text-sm font-bold text-slate-900">
                    ফুল প্যাকেজিং কমপ্লিট প্ল্যাটফর্ম (১০ এ ১০ রেটিং)
                  </h2>
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.2 rounded-full">
                    A+ কোয়ালিটি
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  আসল অভিজ্ঞতা ও শিক্ষাগত যোগ্যতা সংরক্ষিত • কুইক-লার্নার মাইন্ডসেট • ৪টি আন্তর্জাতিক অঞ্চল • ডকুমেন্টস চেকলিস্ট ও ইন্টারভিউ প্রস্তুতি
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsScorecardOpen(true)}
                className="px-3 py-1.5 bg-white border border-slate-300 text-slate-800 text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5 text-[#0e417a]" />
                <span>১০/১০ অডিট রিপোর্ট দেখুন</span>
              </button>
            </div>
          </div>

          {/* Row 1: 4-Market Target Region Switcher (Bangladesh, Malaysia BOESL, Europe, Middle East) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2.5 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                টার্গেট চাকরির মার্কেট:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
                <button
                  onClick={() => handleSelectRegion('malaysia')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                    region === 'malaysia'
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-slate-700 hover:text-emerald-900 font-semibold'
                  }`}
                >
                  <span>🇲🇾 মালয়েশিয়া (BOESL - DHL)</span>
                </button>
                <button
                  onClick={() => handleSelectRegion('bangladesh')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                    region === 'bangladesh'
                      ? 'bg-white text-emerald-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>🇧🇩 বাংলাদেশ (Corporate & IT)</span>
                </button>
                <button
                  onClick={() => handleSelectRegion('europe')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                    region === 'europe'
                      ? 'bg-white text-[#0e417a] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>🇪🇺 ইউরোপ (Europass)</span>
                </button>
                <button
                  onClick={() => handleSelectRegion('middle_east')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                    region === 'middle_east'
                      ? 'bg-white text-[#0f172a] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>🇸🇦 / 🇦🇪 মিডল ইস্ট (GCC)</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowEditor(!showEditor)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border flex items-center gap-1.5 transition-colors ${
                  showEditor
                    ? 'bg-blue-50 border-blue-300 text-blue-800'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{showEditor ? 'Hide Editor' : 'Edit CV Details'}</span>
              </button>

              <button
                onClick={handleCopyCVText}
                className="px-3 py-1.5 text-xs font-medium bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg flex items-center gap-1.5 transition-colors"
                title="Copy all text to paste into Online Job Portals"
              >
                {copiedNotification ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy Plain Text</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Row 2: 6 Authentic Job Sectors (Truthful Background + Quick Learner Framework) */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                কাজের ধরন নির্বাচন করুন (আসল অভিজ্ঞতা অপরিবর্তিত রেখে দ্রুত কাজ শিখে নেওয়ার উপস্থাপনা):
              </span>
              <button
                onClick={handleResetSector}
                className="text-slate-500 hover:text-slate-800 text-[11px] flex items-center gap-1"
                title="Reset this sector to recommended default"
              >
                <RotateCcw className="w-3 h-3" />
                <span>রিসেট টেক্সট</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {/* Sector 1: IT & Automation */}
              <button
                onClick={() => handleSelectSector('it')}
                className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  activeSector === 'it'
                    ? 'bg-blue-50/80 border-[#0e417a] text-[#0e417a] ring-2 ring-[#0e417a]/10 font-bold'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded font-semibold border border-emerald-200">
                    আসল কাজ
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-xs leading-snug">আইটি ও অটোমেশন</div>
                  <div className="text-[10px] text-slate-500 font-normal">IT & Tech Support</div>
                </div>
              </button>

              {/* Sector 2: Admin & Data Entry */}
              <button
                onClick={() => handleSelectSector('admin')}
                className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  activeSector === 'admin'
                    ? 'bg-blue-50/80 border-[#0e417a] text-[#0e417a] ring-2 ring-[#0e417a]/10 font-bold'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded font-semibold border border-emerald-200">
                    আসল কাজ
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-xs leading-snug">ডাটা এন্ট্রি ও অফিস</div>
                  <div className="text-[10px] text-slate-500 font-normal">Computer Operator</div>
                </div>
              </button>

              {/* Sector 3: Logistics & Delivery */}
              <button
                onClick={() => handleSelectSector('logistics')}
                className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  activeSector === 'logistics'
                    ? 'bg-blue-50/80 border-[#0e417a] text-[#0e417a] ring-2 ring-[#0e417a]/10 font-bold'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Truck className="w-4 h-4 text-amber-600" />
                  <span className="text-[10px] text-blue-700 bg-blue-50 px-1 py-0.2 rounded font-semibold border border-blue-200">
                    Quick Learner
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-xs leading-snug">ডেলিভারি ও লজিস্টিকস</div>
                  <div className="text-[10px] text-slate-500 font-normal">Warehouse / Courier</div>
                </div>
              </button>

              {/* Sector 4: Agriculture & Farming */}
              <button
                onClick={() => handleSelectSector('agriculture')}
                className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  activeSector === 'agriculture'
                    ? 'bg-blue-50/80 border-[#0e417a] text-[#0e417a] ring-2 ring-[#0e417a]/10 font-bold'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Sprout className="w-4 h-4 text-emerald-600" />
                  <span className="text-[10px] text-blue-700 bg-blue-50 px-1 py-0.2 rounded font-semibold border border-blue-200">
                    Quick Learner
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-xs leading-snug">কৃষি ও গ্রিনহাউস</div>
                  <div className="text-[10px] text-slate-500 font-normal">Farming & Harvest</div>
                </div>
              </button>

              {/* Sector 5: Hotel & Hospitality */}
              <button
                onClick={() => handleSelectSector('hospitality')}
                className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  activeSector === 'hospitality'
                    ? 'bg-blue-50/80 border-[#0e417a] text-[#0e417a] ring-2 ring-[#0e417a]/10 font-bold'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Hotel className="w-4 h-4 text-rose-600" />
                  <span className="text-[10px] text-blue-700 bg-blue-50 px-1 py-0.2 rounded font-semibold border border-blue-200">
                    Quick Learner
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-xs leading-snug">হোটেল ও রেস্তোরাঁ</div>
                  <div className="text-[10px] text-slate-500 font-normal">Hospitality & Service</div>
                </div>
              </button>

              {/* Sector 6: Factory & Assembly */}
              <button
                onClick={() => handleSelectSector('factory')}
                className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                  activeSector === 'factory'
                    ? 'bg-blue-50/80 border-[#0e417a] text-[#0e417a] ring-2 ring-[#0e417a]/10 font-bold'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Factory className="w-4 h-4 text-purple-600" />
                  <span className="text-[10px] text-blue-700 bg-blue-50 px-1 py-0.2 rounded font-semibold border border-blue-200">
                    Quick Learner
                  </span>
                </div>
                <div className="mt-2">
                  <div className="text-xs leading-snug">ফ্যাক্টরি ও প্যাকেজিং</div>
                  <div className="text-[10px] text-slate-500 font-normal">Production Operative</div>
                </div>
              </button>
            </div>
          </div>

          {/* Row 3: Design Template Switcher (When in CV view) */}
          {activeDoc === 'cv' && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="font-semibold text-slate-500">সিভি টেমপ্লেট লেআউট:</span>
                <button
                  onClick={() => setActiveTemplate('europass')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTemplate === 'europass'
                      ? 'bg-[#0e417a] text-white font-bold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  🇪🇺 Official Europass
                </button>
                <button
                  onClick={() => setActiveTemplate('bd_corporate')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTemplate === 'bd_corporate'
                      ? 'bg-emerald-800 text-white font-bold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  🇧🇩 BD Corporate Standard
                </button>
                <button
                  onClick={() => setActiveTemplate('gulf_executive')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTemplate === 'gulf_executive'
                      ? 'bg-slate-900 text-amber-300 font-bold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  🇸🇦 GCC Executive (Gulf)
                </button>
                <button
                  onClick={() => setActiveTemplate('modern')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTemplate === 'modern'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Modern 2-Column
                </button>
                <button
                  onClick={() => setActiveTemplate('compact')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    activeTemplate === 'compact'
                      ? 'bg-slate-800 text-white font-bold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Compact 1-Page ATS
                </button>
              </div>

              <div className="text-[11px] text-slate-500 hidden sm:block">
                A4 Standard Print Format • Ready for Recruiter Review
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Document Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 print:p-0 print:m-0 print:max-w-full print:w-full">
        <div className="flex flex-col lg:flex-row items-start gap-6 print:block">
          {/* Left Column: Live Customizer Drawer */}
          {showEditor && (
            <div className="no-print w-full lg:w-96 shrink-0 lg:sticky lg:top-20">
              <EditorDrawer
                profile={profile}
                onChange={setProfile}
                onResetSector={handleResetSector}
              />
            </div>
          )}

          {/* Right Column: Live Document Sheet */}
          <div className="flex-1 w-full space-y-4 print:space-y-0 print:w-full print:p-0">
            {/* Header info badge before document */}
            <div className="no-print flex items-center justify-between text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
              <span className="flex items-center gap-1.5 font-semibold">
                <FileCheck2 className="w-4 h-4 text-emerald-600" />
                <span>
                  {activeDoc === 'cv'
                    ? `${region === 'bangladesh' ? 'Bangladeshi Corporate CV' : region === 'middle_east' ? 'Gulf GCC Standard Resume' : 'European Standard Europass'} • ${currentPresets[activeSector]?.name}`
                    : `${region === 'malaysia' ? 'BOESL Malaysia Application' : 'Cover Letter'} • ${currentPresets[activeSector]?.name}`}
                </span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsGlobalSignModalOpen(true)}
                  className="px-2.5 py-1 text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 rounded-md hover:bg-blue-100 flex items-center gap-1 transition-colors"
                  title="স্বাক্ষর আপলোড বা পরিবর্তন করুন"
                >
                  <PenTool className="w-3 h-3 text-[#0e417a]" />
                  <span>{profile.personalInfo.signatureUrl ? 'স্বাক্ষর পরিবর্তন' : 'স্বাক্ষর আপলোড'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="text-xs font-semibold text-[#0e417a] hover:underline flex items-center gap-1"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF (A4)</span>
                </button>
              </div>
            </div>

            {/* Document Render Area */}
            <div className="w-full flex justify-center overflow-x-auto pb-12 print:pb-0 print:overflow-visible print:block">
              {activeDoc === 'cv' ? (
                <>
                  {activeTemplate === 'bd_corporate' && (
                    <BDCorporateCV
                      profile={profile}
                      onUpdateSignature={handleUpdateSignature}
                    />
                  )}
                  {activeTemplate === 'europass' && (
                    <EuropassCV
                      profile={profile}
                      onUpdateSignature={handleUpdateSignature}
                    />
                  )}
                  {activeTemplate === 'gulf_executive' && (
                    <GulfExecutiveCV
                      profile={profile}
                      onUpdateSignature={handleUpdateSignature}
                    />
                  )}
                  {activeTemplate === 'modern' && (
                    <ModernCV
                      profile={profile}
                      onUpdateSignature={handleUpdateSignature}
                    />
                  )}
                  {activeTemplate === 'compact' && (
                    <CompactCV
                      profile={profile}
                      onUpdateSignature={handleUpdateSignature}
                    />
                  )}
                </>
              ) : (
                <CoverLetterView
                  data={currentCoverLetter}
                  onUpdate={handleUpdateCoverLetter}
                  onPrint={handlePrint}
                  region={region}
                  signatureUrl={profile.personalInfo.signatureUrl}
                  onUpdateSignature={handleUpdateSignature}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* BOESL DHL Malaysia Circular Modal */}
      <BOESLMalaysiaModal
        isOpen={isBOESLModalOpen}
        onClose={() => setIsBOESLModalOpen(false)}
        onApplyPreset={handleApplyBOESLPreset}
      />

      {/* Global Universal Signature Modal */}
      <SignatureModal
        isOpen={isGlobalSignModalOpen}
        onClose={() => setIsGlobalSignModalOpen(false)}
        currentSignature={profile.personalInfo.signatureUrl || ''}
        candidateName={`${profile.personalInfo.firstName} ${profile.personalInfo.lastName}`}
        onSave={handleUpdateSignature}
      />

      {/* Guidelines Modal */}
      <EuropeanGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Cold Email Pitch Modal */}
      <EmailTemplateModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        profile={profile}
      />

      {/* Documents Checklist Modal */}
      <DocumentChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        candidateName={`${profile.personalInfo.firstName} ${profile.personalInfo.lastName}`}
      />

      {/* Interview Preparation Q&A Modal */}
      <InterviewPrepModal
        isOpen={isInterviewOpen}
        onClose={() => setIsInterviewOpen(false)}
        candidateName={`${profile.personalInfo.firstName} ${profile.personalInfo.lastName}`}
      />

      {/* 17/17 Scorecard Quality Audit Modal */}
      <ScorecardModal
        isOpen={isScorecardOpen}
        onClose={() => setIsScorecardOpen(false)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenInterview={() => setIsInterviewOpen(true)}
        onOpenEmail={() => setIsEmailModalOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
      />
    </div>
  );
}
