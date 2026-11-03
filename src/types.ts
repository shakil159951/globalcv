export type RegionId = 'bangladesh' | 'europe' | 'middle_east';

export type SectorId = 'agriculture' | 'logistics' | 'hospitality' | 'factory' | 'it' | 'admin';

export type TemplateId = 'bd_corporate' | 'europass' | 'gulf_executive' | 'modern' | 'compact';

export type LanguageLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native';

export interface CEFRRating {
  listening: LanguageLevel;
  reading: LanguageLevel;
  spokenInteraction: LanguageLevel;
  spokenProduction: LanguageLevel;
  writing: LanguageLevel;
}

export interface LanguageItem {
  id: string;
  name: string;
  isNative: boolean;
  levelText?: string;
  cefr?: CEFRRating;
  comment?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  bulletPoints: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
  details?: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CandidateProfile {
  region: RegionId;
  personalInfo: {
    firstName: string;
    lastName: string;
    targetJobTitle: string;
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    dateOfBirth: string;
    gender: string;
    nationality: string;
    photoUrl: string;
    showPhoto: boolean;
    linkedIn?: string;
    website?: string;
    passportStatus: string;
    passportNumber?: string;
    visaStatus: string;
    showVisaStatus?: boolean;
    showDeclaration?: boolean;
    showEuropassBanner?: boolean;
    drivingLicense: string;
    availability: string;
    fatherName?: string;
    motherName?: string;
    maritalStatus?: string;
    religion?: string;
    permanentAddress?: string;
    bloodGroup?: string;
  };
  summary: string;
  sector: SectorId;
  experiences: WorkExperience[];
  education: EducationItem[];
  trainings: TrainingItem[];
  skills: SkillCategory[];
  languages: LanguageItem[];
  drivingMobility: string[];
  additionalCertifications: string[];
}

export interface CoverLetterData {
  senderName: string;
  senderAddress: string;
  senderPhone: string;
  senderEmail: string;
  recipientName: string;
  recipientTitle: string;
  companyName: string;
  companyAddress: string;
  companyCity: string;
  companyCountry: string;
  date: string;
  subject: string;
  salutation: string;
  openingParagraph: string;
  experienceParagraph: string;
  motivationParagraph: string;
  relocationParagraph: string;
  closingParagraph: string;
  signoff: string;
}
