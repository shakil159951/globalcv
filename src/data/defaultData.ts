import { CandidateProfile, CoverLetterData, LanguageItem, RegionId, SectorId } from '../types';

export interface SectorPreset {
  id: SectorId;
  name: string;
  nameBn: string;
  iconName: string;
  targetJobTitle: string;
  summary: string;
  skills: { category: string; items: string[] }[];
  experiences: {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
    bulletPoints: string[];
  }[];
  coverLetter: CoverLetterData;
}

// Shakil's authentic, 100% verified personal details
export const basePersonalInfo = {
  firstName: 'Md. Shakil',
  lastName: 'Hossain',
  targetJobTitle: 'IT & Automation Specialist',
  email: 'shakil159951@gmail.com',
  phone: '+880 1701982218',
  whatsapp: '+880 1701982218',
  address: '569/B, Mogbazar',
  city: 'Dhaka',
  postalCode: '1217',
  country: 'Bangladesh',
  permanentAddress: 'Mithapur, Badalgachhi, Naogaon, Bangladesh',
  dateOfBirth: '2000-12-11',
  gender: 'Male',
  nationality: 'Bangladeshi',
  photoUrl: '/shakil_profile.jpg',
  showPhoto: true,
  linkedIn: 'linkedin.com/in/md-shakil-hossain',
  website: 'heyshakil.pages.dev',
  passportStatus: 'Valid International Passport (Validity > 4 Years)',
  passportNumber: 'BL0984521',
  visaStatus: 'Eligible & Ready for Work Permit / Employment Visa Sponsorship',
  showVisaStatus: false,
  showDeclaration: false,
  showEuropassBanner: true,
  drivingLicense: '',
  availability: 'Immediate Joining / Ready for Deployment',
  fatherName: 'Md. Rezaul Islam',
  motherName: 'Mst. Taslima Banu',
  maritalStatus: 'Unmarried',
  religion: 'Islam',
  bloodGroup: 'B+ (Ve)',
};

// Shakil's authentic, verified academic credentials
export const baseEducation = [
  {
    id: 'edu-1',
    degree: 'Diploma in Computer Engineering (CSE)',
    institution: 'Naogaon Polytechnic Institute',
    location: 'Naogaon, Bangladesh',
    year: '2021',
    grade: 'CGPA: 3.78 / 4.00',
    details: 'Comprehensive 4-year engineering curriculum covering hardware systems, computer maintenance, electrical safety protocols, digital instrumentation, and technical documentation.',
  },
  {
    id: 'edu-2',
    degree: 'Secondary School Certificate (Science)',
    institution: 'Mithapur B.L. High School',
    location: 'Naogaon, Bangladesh',
    year: '2017',
    grade: 'GPA: 4.73 / 5.00',
    details: 'Majors in General Science, Mathematics, Physics, Chemistry, and Biology with high academic standing.',
  },
];

// Shakil's authentic professional training
export const baseTrainings = [
  {
    id: 'trn-1',
    title: 'Professional Software & Systems Development (PHP & Laravel)',
    institution: 'IBCS-PRIMAX Software (Bangladesh) Limited',
    year: '2023',
    description: 'Practical training on system logic, database entry, structured troubleshooting, and technical teamwork.',
  },
];

// Shakil's ACTUAL 2 verified jobs with truthful, transferable bullet points
export const authenticWorkExperiences = [
  {
    id: 'exp-1',
    role: 'IT & Automation Specialist',
    company: 'Perlov Medical Services Ltd',
    location: '16 DIT Road, Rampura, Dhaka-1219, Bangladesh',
    startDate: '02/2023',
    endDate: 'Present',
    isCurrent: true,
    bulletPoints: [
      'Managing and maintaining organizational IT systems, hardware, LAN/WAN networks, and connected terminal equipment across facilities.',
      'Overseeing IP CCTV surveillance camera monitoring and biometric attendance fingerprint/facial terminals with continuous 99.5% uptime.',
      'Providing prompt on-site technical support for office applications, troubleshooting hardware and network connections for diverse teams.',
      'Maintaining strict workplace hygiene, electrical safety, and equipment care protocols in a demanding healthcare facility environment.',
      'Deploying modern generative AI tools (ChatGPT, Gemini) and prompt workflows to automate reporting, file preparation, and routine documentation.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Data Entry Operator',
    company: 'Golden Harvest InfoTech Ltd',
    location: 'Mirpur 12, Dhaka-1216, Bangladesh',
    startDate: '11/2022',
    endDate: '02/2023',
    isCurrent: false,
    bulletPoints: [
      'Executed large-scale alphanumeric data entry and digital record archiving with a verified 98% accuracy score.',
      'Assisted with corporate office support, file preparation, record verification, and general data management operations.',
      'Demonstrated high speed, disciplined physical stamina, and meticulous attention to detail during continuous repetitive cataloging shifts.',
    ],
  },
];

export const baseLanguagesBangladesh: LanguageItem[] = [
  {
    id: 'lang-1',
    name: 'Bengali',
    isNative: true,
    levelText: 'Native / Mother Tongue (C2)',
    comment: 'First language; fluent in formal written and spoken business communication.',
  },
  {
    id: 'lang-2',
    name: 'English',
    isNative: false,
    levelText: 'Working Professional (B2)',
    comment: 'Capable of drafting official emails, technical documentation, and professional communication.',
  },
];

export const baseLanguagesEurope: LanguageItem[] = [
  {
    id: 'lang-1',
    name: 'English',
    isNative: false,
    levelText: 'Working Proficiency (B2)',
    cefr: {
      listening: 'B2' as const,
      reading: 'B2' as const,
      spokenInteraction: 'B1' as const,
      spokenProduction: 'B1' as const,
      writing: 'B2' as const,
    },
    comment: 'Good working proficiency; comfortable communicating with international teams and following verbal/written work orders.',
  },
  {
    id: 'lang-2',
    name: 'Bengali',
    isNative: true,
    levelText: 'Native (C2)',
    cefr: {
      listening: 'C2' as const,
      reading: 'C2' as const,
      spokenInteraction: 'C2' as const,
      spokenProduction: 'C2' as const,
      writing: 'C2' as const,
    },
    comment: 'Mother tongue / Native speaker.',
  },
];

export const baseLanguagesMiddleEast: LanguageItem[] = [
  {
    id: 'lang-1',
    name: 'English',
    isNative: false,
    levelText: 'Fluent Professional Working (B2)',
    comment: 'Clear verbal and written communication for multinational operations, supervisor briefings, and client service.',
  },
  {
    id: 'lang-2',
    name: 'Arabic',
    isNative: false,
    levelText: 'Basic Conversational & Work Terms (A1)',
    comment: 'Familiar with common Gulf greetings, workplace terminology, numbers, and basic directional phrases; eager learner.',
  },
  {
    id: 'lang-3',
    name: 'Bengali',
    isNative: true,
    levelText: 'Native / Mother Tongue (C2)',
    comment: 'Mother tongue.',
  },
];

// =========================================================================
// 1. BANGLADESH PRESETS (Authentic Corporate & Technical Application)
// =========================================================================
export const sectorPresetsBangladesh: Record<SectorId, SectorPreset> = {
  it: {
    id: 'it',
    name: 'IT & Automation Specialist',
    nameBn: 'আইটি ও সিস্টেমস স্পেশালিস্ট',
    iconName: 'Cpu',
    targetJobTitle: 'IT & Automation Specialist',
    summary:
      'Highly skilled Computer Operator, IT specialist, and advanced AI systems expert with a Diploma in Computer Engineering (CSE) and proven industry experience at Perlov Medical Services Ltd and Golden Harvest InfoTech Ltd. Exceptionally proficient in managing LAN/WAN network infrastructure, hardware/software troubleshooting, IP CCTV surveillance, biometric time-attendance devices, and modern AI automation workflows. Dedicated to ensuring 99.5% system uptime, zero data errors, and peak operational efficiency in fast-paced corporate environments.',
    skills: [
      {
        category: 'IT Systems & Infrastructure',
        items: [
          'Hardware Troubleshooting & Preventative Maintenance',
          'LAN/WAN Setup, Router & Switch Configuration (MikroTik/Cisco)',
          'IP & Analog CCTV Camera Installation & Surveillance Monitoring',
          'Biometric Fingerprint & Facial Time-Attendance Terminals',
          'Windows 10, Windows 11 & Windows Server Fundamentals',
          'Microsoft 365, Advanced Excel, Word & PowerPoint',
        ],
      },
      {
        category: 'Automation & Modern Tech',
        items: [
          'AI Agent Workflows & Prompt Engineering (ChatGPT, Gemini)',
          'Automated Reporting & Business Process Integration',
          'PHP & Laravel Framework Development Fundamentals',
          'Photoshop & Illustrator for Digital Asset Preparation',
          '98% Audited Accuracy in High-Volume Data Management',
        ],
      },
      {
        category: 'Professional Competencies',
        items: [
          'Rapid On-Site User Technical Support & Problem Solving',
          'Data Security & Network Access Control Governance',
          'Fast Typing Speed (English & Bengali) with Zero Errors',
          'Team Leadership, Punctuality & Structured Documentation',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Head of Human Resources / Managing Director',
      recipientTitle: 'Human Resources Division',
      companyName: 'Leading Technology & Corporate Enterprise',
      companyAddress: 'Gulshan / Banani Commercial Area',
      companyCity: 'Dhaka',
      companyCountry: 'Bangladesh',
      date: '2026-11-03',
      subject: 'Application for the position of IT & Automation Specialist',
      salutation: 'Dear Sir / Madam,',
      openingParagraph:
        'I am writing to formally express my interest in joining your esteemed organization as an IT & Automation Specialist. With a 4-year Diploma in Computer Engineering from Naogaon Polytechnic Institute and over 2 years of progressive industry experience managing IT infrastructure, CCTV networks, and modern AI automations in Dhaka, I am eager to contribute to your company’s digital growth.',
      experienceParagraph:
        'In my current role at Perlov Medical Services Ltd, I am responsible for administering the network infrastructure, hardware maintenance, IP CCTV surveillance, and biometric access terminals. I have also integrated generative AI tools to automate repetitive reporting and documentation workflows. Earlier at Golden Harvest InfoTech Ltd, I managed large-scale data operations with a verified 98% accuracy benchmark. My engineering background enables me to isolate and resolve technical issues with speed and precision.',
      motivationParagraph:
        'I take immense pride in maintaining system stability, preventing user downtime, and fostering positive collaboration across teams. I am eager to apply my technical diagnostic skills, hardware maintenance capabilities, and AI automation expertise to support your day-to-day operations seamlessly.',
      relocationParagraph:
        'I am based in Mogbazar, Dhaka, and am available for immediate joining. I am dedicated to continuous learning, respectful workplace discipline, and long-term career growth with your organization.',
      closingParagraph:
        'Enclosed is my Curriculum Vitae highlighting my academic credentials, technical skills, and work achievements. I would welcome the opportunity to attend an interview at your convenience. Thank you for your time and kind consideration.',
      signoff: 'Yours sincerely,',
    },
  },

  admin: {
    id: 'admin',
    name: 'Computer Operator & MIS Specialist',
    nameBn: 'কম্পিউটার অপারেটর ও ডাটা এন্ট্রি',
    iconName: 'FileText',
    targetJobTitle: 'Computer Operator & MIS / Data Entry Specialist',
    summary:
      'Meticulous, fast-typing, and dependable Computer Operator & MIS Specialist from Dhaka with an academic background in Computer Engineering. Brings proven expertise in large-scale data management from Golden Harvest InfoTech Ltd (achieving 98% audited accuracy) combined with corporate office and technical support at Perlov Medical Services Ltd. Highly proficient in Advanced Excel (VLOOKUP, Pivot Tables), Google Sheets, Bengali & English typing (Bijoy & Avro), and AI-assisted document drafting.',
    skills: [
      {
        category: 'Data & Computer Operations',
        items: [
          'High-Speed Typing (English 45+ WPM, Bengali Bijoy/Avro 35+ WPM)',
          'Advanced Microsoft Excel (Formulas, VLOOKUP, Pivot Tables)',
          'Microsoft Word, PowerPoint & Google Workspace Docs',
          'Document Scanning, OCR Digitization & File Indexing',
          'Database Cleansing, Reconciliation & 98% Accuracy Audits',
        ],
      },
      {
        category: 'Office Administration',
        items: [
          'Office Hardware & Printer/Photocopier Maintenance',
          'Biometric Attendance Tracking & Monthly Log Generation',
          'Email Correspondence & Formal Letter Drafting',
          'Confidential Record Management & Archive Organization',
        ],
      },
      {
        category: 'Personal Attributes',
        items: [
          'High attention to detail and zero-error mindset',
          'Disciplined punctuality and multi-tasking capability',
          'Respectful corporate communication and team spirit',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Manager, Human Resources & Administration',
      recipientTitle: 'Human Resources Division',
      companyName: 'Corporate Office / Business Enterprise',
      companyAddress: 'Motijheel / Kawran Bazar',
      companyCity: 'Dhaka',
      companyCountry: 'Bangladesh',
      date: '2026-11-03',
      subject: 'Application for Computer Operator / MIS & Data Entry Specialist',
      salutation: 'Dear Hiring Manager,',
      openingParagraph:
        'I am writing to formally submit my application for the Computer Operator / MIS & Data Entry Specialist position with your organization. With professional experience in high-volume data verification at Golden Harvest InfoTech Ltd and office systems support at Perlov Medical Services Ltd, I am confident in delivering exceptional administrative productivity.',
      experienceParagraph:
        'Throughout my career, I have demonstrated high typing speed in both English and Bengali, combined with a 98% accuracy rating on large-scale databases. I am adept at Microsoft Excel, data cleaning, automated reporting, and maintaining orderly archives. My engineering background ensures I can troubleshoot office hardware and network connections without relying on outside assistance.',
      motivationParagraph:
        'I approach my duties with integrity, punctuality, and great attention to detail. Whether processing invoices, managing daily attendance records, or indexing corporate files, I ensure work is completed error-free and ahead of schedule.',
      relocationParagraph:
        'I reside in Mogbazar, Dhaka, and am ready for immediate joining in a full-time capacity.',
      closingParagraph:
        'Please find my enclosed Curriculum Vitae for your review. I look forward to an opportunity for an interview. Thank you.',
      signoff: 'Yours sincerely,',
    },
  },

  logistics: {
    id: 'logistics',
    name: 'Logistics & Dispatch Coordinator',
    nameBn: 'লজিস্টিকস ও ডিসপ্যাচ কো-অর্ডিনেটর',
    iconName: 'Truck',
    targetJobTitle: 'Logistics, Warehouse & Dispatch Coordinator',
    summary:
      'Energetic, tech-savvy, and dependable Operations & Dispatch Associate from Dhaka with strong expertise in inventory cataloging, barcode scanning, and consignment management. Combines 98% verified accuracy in stock data entry with hands-on experience handling sensitive equipment, operating handheld scanners, and coordinating on-time warehouse dispatches. Possesses extensive familiarity with Dhaka supply chain routes and dispatch coordination.',
    skills: [
      {
        category: 'Logistics & Warehouse Operations',
        items: [
          'Inventory Tracking, SKU Verification & Barcode Scanning',
          'Goods Receipt, Sorting, Dispatch Staging & Manifest Checking',
          'Warehouse Space Management & Pallet Stacking Safety',
          'Damage Inspection & Return Parcel Reconciliation',
        ],
      },
      {
        category: 'Route Navigation & Transport',
        items: [
          'Dhaka Metro Urban Route Navigation (GPS & Mapping Apps)',
          'Warehouse Order Staging & Consignment Loading Safety',
          'Time-Definite Express Dispatch & Customer Handover',
        ],
      },
      {
        category: 'Digital Competencies',
        items: [
          'Proficient in Warehouse Management Apps & Excel Stock Logs',
          'High physical energy for active dispatch and warehouse shifts',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Head of Supply Chain & Operations',
      recipientTitle: 'Logistics & Supply Chain Division',
      companyName: 'E-Commerce & Supply Chain Enterprise',
      companyAddress: 'Tejgaon Industrial Area',
      companyCity: 'Dhaka',
      companyCountry: 'Bangladesh',
      date: '2026-11-03',
      subject: 'Application for Logistics, Warehouse & Dispatch Coordinator',
      salutation: 'Dear Hiring Manager,',
      openingParagraph:
        'I am writing to express my interest in joining your logistics and supply chain operations. With proven hands-on experience in consignment tracking, equipment staging, and inventory data verification with 98% accuracy, I am eager to support your fast-moving dispatch fulfillment.',
      experienceParagraph:
        'In my professional work, I have managed shipment verification, barcode scanning, and safe transport of delicate equipment. I have thorough knowledge of Dhaka routes and warehouse operations. My engineering background allows me to master modern warehouse management software and mobile inventory apps quickly.',
      motivationParagraph:
        'I am active, energetic, and dedicated to meeting strict delivery schedules. I maintain courteous communication with clients and supervisors and prioritize safety in every dispatch.',
      relocationParagraph:
        'I am available for immediate joining in Dhaka and prepared for flexible shift schedules.',
      closingParagraph:
        'Enclosed is my CV for your kind consideration. I look forward to an interview opportunity. Thank you.',
      signoff: 'Yours sincerely,',
    },
  },

  hospitality: {
    id: 'hospitality',
    name: 'Facility & Hospitality Assistant',
    nameBn: 'ফ্যাসিলিটি ও হসপিটালিটি অ্যাসিস্ট্যান্ট',
    iconName: 'Hotel',
    targetJobTitle: 'Facility Maintenance & Hospitality Support Assistant',
    summary:
      'Polite, energetic, and detail-attentive Facility & Hospitality Coordinator from Dhaka. Experienced in overseeing clean, sanitized environments across medical facilities, managing supplies, and assisting guests and patients with courtesy. Familiar with hygiene standards, quick room turnover, and proactive workplace maintenance.',
    skills: [
      {
        category: 'Facility & Hygiene Standards',
        items: [
          'Deep Cleaning & Sanitization of Executive Rooms and Reception',
          'Safe Handling of Cleaning Detergents & PPE Standards',
          'Routine Facility Maintenance: Electrical & Fixture Inspection',
          'Restroom & Common Area Hygiene Auditing',
        ],
      },
      {
        category: 'Guest Care & Interpersonal',
        items: [
          'Courteous, Smiling & Professional Guest Reception',
          'Prompt Attention to Client Service Requests',
          'Support for Corporate Events, Cutlery & Buffet Arrangement',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'The Facility Manager',
      recipientTitle: 'Human Resources & Administration',
      companyName: 'Hospitality / Healthcare Facility Group',
      companyAddress: 'Dhanmondi / Gulshan',
      companyCity: 'Dhaka',
      companyCountry: 'Bangladesh',
      date: '2026-11-03',
      subject: 'Application for Facility Maintenance & Hospitality Support Assistant',
      salutation: 'Dear Hiring Committee,',
      openingParagraph:
        'I am pleased to submit my application for the Facility Maintenance & Hospitality Support position. With dedicated experience coordinating facility hygiene and maintenance at Perlov Medical Services Ltd, I am prepared to keep your premises immaculate.',
      experienceParagraph:
        'I take great pride in maintaining clean, spotless, and safe environments. I am proactive in inspecting facilities, replenishing supplies, and assisting visitors with courtesy and respect.',
      motivationParagraph:
        'I possess high stamina, work well in collaborative teams, and adapt easily to rotating shift duties.',
      relocationParagraph:
        'I am based in Dhaka and available for immediate appointment.',
      closingParagraph:
        'Thank you for reviewing my application. I look forward to an interview.',
      signoff: 'Yours sincerely,',
    },
  },

  factory: {
    id: 'factory',
    name: 'Production & Quality Control Assistant',
    nameBn: 'প্রোডাকশন ও কোয়ালিটি কন্ট্রোল',
    iconName: 'Factory',
    targetJobTitle: 'Factory Assembly & Quality Control Assistant',
    summary:
      'Disciplined, safety-conscious, and technically skilled Production & Quality Assistant with a Diploma in Computer Engineering. Experienced in high-repetition precision tasks (98% quality accuracy rating), electronic hardware assembly, and electrical safety standards. Known for high manual speed, hand-eye coordination, and strict compliance with 5S workplace protocols.',
    skills: [
      {
        category: 'Manufacturing & Assembly',
        items: [
          'Assembly Line Operations & Production Pacing',
          'Component Assembly with Precision Hand & Power Tools',
          'Visual Quality Inspection & Defect Reporting',
          '5S Workplace Cleanliness & Safety Protocols',
        ],
      },
      {
        category: 'Technical Comprehension',
        items: [
          'Understanding Technical Circuit & Wiring Diagrams',
          'ESD (Electrostatic Discharge) Prevention Protocols',
          'Machine Calibration & Basic Electrical Fault Checks',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Factory Production Manager',
      recipientTitle: 'Human Resources & Plant Operations',
      companyName: 'Manufacturing & Electronics Enterprise',
      companyAddress: 'Gazipur / Savar Industrial Zone',
      companyCity: 'Dhaka',
      companyCountry: 'Bangladesh',
      date: '2026-11-03',
      subject: 'Application for Factory Assembly & Quality Control Assistant',
      salutation: 'Dear Hiring Manager,',
      openingParagraph:
        'I am writing to formally apply for the Factory Assembly & Quality Control position. With a Diploma in Computer Engineering and practical experience in precision hardware assembly, I am eager to contribute to your production line.',
      experienceParagraph:
        'I possess high manual dexterity, fast assembly pacing, and strict attention to safety standards. I have verified high-repetition quality records with a 98% audited score.',
      motivationParagraph:
        'I am physically fit, comfortable working active shifts, and committed to maintaining high product quality.',
      relocationParagraph:
        'I am ready for immediate joining in Dhaka or surrounding industrial zones.',
      closingParagraph:
        'Thank you for your kind consideration.',
      signoff: 'Yours sincerely,',
    },
  },

  agriculture: {
    id: 'agriculture',
    name: 'Agro-Farming & Technical Executive',
    nameBn: 'অ্যাগ্রো-ফার্মিং ও টেকনিক্যাল এক্সিকিউটিভ',
    iconName: 'Sprout',
    targetJobTitle: 'Agro-Farming & Technical Operations Assistant',
    summary:
      'Energetic, dependable, and technically capable Agro-Operations Assistant from Naogaon, Bangladesh. Combines family agricultural background in crop harvesting and irrigation management with a technical Diploma in Computer Engineering, enabling hands-on operation of agricultural machinery, automated drip pumps, and post-harvest packaging.',
    skills: [
      {
        category: 'Agricultural & Farm Operations',
        items: [
          'Seasonal Crop Harvesting, Fruit/Vegetable Sorting & Crate Packing',
          'Drip Irrigation Setup & Water Pipeline Inspection',
          'Field Weeding, Plant Maintenance & Organic Pest Awareness',
          'Post-Harvest Storage & Distribution Transport Preparation',
        ],
      },
      {
        category: 'Technical & Physical Strengths',
        items: [
          'Basic Electrical Water Pump & Valve Maintenance',
          'High physical stamina for active outdoor and farm shifts',
          'Reliable teamwork and adherence to agricultural safety',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Managing Director / Agro Operations Head',
      recipientTitle: 'Agro-Business Division',
      companyName: 'Leading Agro & Farm Enterprise',
      companyAddress: 'Corporate Office',
      companyCity: 'Dhaka',
      companyCountry: 'Bangladesh',
      date: '2026-11-03',
      subject: 'Application for Agro-Farming & Technical Operations Assistant',
      salutation: 'Dear Sir,',
      openingParagraph:
        'I am writing to express my interest in joining your agro-farming operations. With a blend of agricultural experience and a technical engineering diploma, I am eager to support your farming productivity.',
      experienceParagraph:
        'I bring hands-on experience in seasonal harvesting, irrigation, and crop care, coupled with technical knowledge of electrical pump maintenance and inventory logging.',
      motivationParagraph:
        'I possess high physical endurance and work with dedication in outdoor and farm environments.',
      relocationParagraph:
        'I am available for immediate appointment across Bangladesh.',
      closingParagraph:
        'Thank you for your consideration of my attached CV.',
      signoff: 'Yours sincerely,',
    },
  },
};

// =========================================================================
// 2. EUROPE PRESETS (Honest, Trainable Candidate with Real Background)
// =========================================================================
export const sectorPresetsEurope: Record<SectorId, SectorPreset> = {
  agriculture: {
    id: 'agriculture',
    name: 'Agriculture & Greenhouse',
    nameBn: 'কৃষি ও গ্রিনহাউস কর্মী (সহজেই কাজ শিখে নেওয়ার মানসিকতা)',
    iconName: 'Sprout',
    targetJobTitle: 'Greenhouse Worker & Agricultural Field Operative (Quick Learner)',
    summary:
      'Energetic, disciplined, and physically resilient 24-year-old technical diploma graduate from Bangladesh seeking an entry-level European Work Permit opportunity in Greenhouse Harvesting and Agricultural Operations. While professionally experienced in medical facility equipment maintenance and high-accuracy data operations, I have practical familiarity with basic farming tasks in Bangladesh and am a fast learner, eager to be trained in European greenhouse climate care, harvesting, and packaging protocols. Possesses high physical stamina for active 8-10 hour shifts, strong safety discipline, and full readiness for immediate relocation.',
    skills: [
      {
        category: 'Trainable Agricultural & Farm Skills',
        items: [
          'Basic Farming Familiarity in Bangladesh (Sowing, Weeding, Picking)',
          'Eager and Quick Learner for European Greenhouse SOPs & Harvesting',
          'High Physical Stamina (Comfortable standing & bending for 8-10 hours)',
          'Sorting, Grading & Produce Packing Readiness',
          'Strict Adherence to Workplace Hygiene & Sanitation Rules',
        ],
      },
      {
        category: 'Transferable Professional Competencies',
        items: [
          'Careful Equipment & Hand Tool Handling (from Medical Facility Care)',
          'Verified 98% Accuracy & Attention to Detail (from Data Operations)',
          'Reliable, Punctual & Collaborative Team Player in Multi-Shift Roster',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'The Hiring Manager',
      recipientTitle: 'Human Resources & Recruitment Department',
      companyName: 'European Agro Logistics & Greenhouse Enterprise',
      companyAddress: 'Industrial Agriculture Park',
      companyCity: 'Warsaw',
      companyCountry: 'Poland',
      date: '2026-11-03',
      subject: 'Application for Greenhouse Worker / Agricultural Operative (Work Permit Sponsorship)',
      salutation: 'Dear Hiring Team,',
      openingParagraph:
        'I am writing to express my strong enthusiasm and formal application for the position of Greenhouse Worker / Agricultural Operative with your company. I am eager to contribute my youthful energy, discipline, and hard work to your agricultural harvesting operations in Europe.',
      experienceParagraph:
        'My formal education is in Computer Engineering (4-year Diploma), and my recent professional background has been in medical facility equipment maintenance and high-volume data verification in Dhaka. In Bangladesh, agriculture is part of our everyday homestead life, and I am comfortable with basic manual field tasks such as planting, weeding, crop picking, and crate packing. More importantly, I am a very fast learner who grasps new procedures, tools, and European health and safety standards rapidly.',
      motivationParagraph:
        'I understand that greenhouse and agricultural work demands punctuality, physical endurance, and careful produce handling. I am 24 years old, physically fit, and prepared for active 8-10 hour shifts on my feet in all seasons. I am eager to be trained on the job and commit myself fully to your team’s harvesting targets.',
      relocationParagraph:
        'I hold a valid International Passport (valid for over 4 years), clean police clearance, and full medical fitness. I am seeking legal employer sponsorship for a European Work Permit and National Visa D. I am ready to relocate immediately and commit to a long-term employment contract.',
      closingParagraph:
        'Enclosed is my European standard Europass CV for your review. I would be honored to speak with you via an online video interview (Zoom, Google Meet, or WhatsApp) at your convenience. Thank you for your kind consideration.',
      signoff: 'Yours sincerely,',
    },
  },

  logistics: {
    id: 'logistics',
    name: 'Logistics & Delivery',
    nameBn: 'ডেলিভারি ও ওয়্যারহাউস (সহজেই কাজ শিখে নেওয়ার মানসিকতা)',
    iconName: 'Truck',
    targetJobTitle: 'Warehouse Operative & Logistics Assistant (Quick Learner)',
    summary:
      'Proactive, agile, and technology-literate candidate from Bangladesh seeking European Work Permit sponsorship in Warehouse Order Fulfillment, Stacking, and Logistics Operations. Combines a technical background with verified 98% accuracy in inventory data operations, smartphone GPS navigation fluency, and rapid learning ability. Highly trainable, physically fit for moving parcels up to 25kg, and dedicated to punctual shift execution and workplace safety.',
    skills: [
      {
        category: 'Trainable Warehouse & Delivery Skills',
        items: [
          'Quick Learner of Barcode Scanners, RF Guns & Warehouse Software',
          'Order Picking, Packing & Pallet Stacking Readiness',
          'GPS Route Navigation (Google Maps, Waze, Delivery Apps)',
          'Safe Parcel Handling & Dispatch Staging Mindset',
          'Careful Equipment & Pallet Trolley Operation',
        ],
      },
      {
        category: 'Transferable Professional Strengths',
        items: [
          '98% Verified Accuracy in SKU Verification & Sorting',
          'High Physical Endurance for Active 8-10 Hour Warehouse Shifts',
          'Equipment Care & Punctual Shift Reliability',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Head of Logistics Recruitment',
      recipientTitle: 'Human Resources Division',
      companyName: 'European Express Logistics & Fulfillment Hub',
      companyAddress: 'Logistics Center West',
      companyCity: 'Bucharest',
      companyCountry: 'Romania',
      date: '2026-11-03',
      subject: 'Application for Warehouse Operative / Logistics Assistant (Work Permit Sponsorship)',
      salutation: 'Dear Hiring Manager,',
      openingParagraph:
        'I am writing to formally apply for the position of Warehouse Operative / Logistics Assistant with your organization. With a strong personal drive, excellent physical fitness, and natural fluency with digital navigation tools, I am eager to join your European logistics team.',
      experienceParagraph:
        'While my formal qualification is a Diploma in Computer Engineering and my recent work has been in facility technical support and high-speed data management (achieving 98% audited accuracy), I am eager to apply my discipline to warehouse fulfillment and logistics operations. My background allows me to master handheld RF scanners, warehouse apps, and route planning instantly.',
      motivationParagraph:
        'I am 24 years old, physically energetic, comfortable lifting cartons up to 25kg, and capable of working active 8-10 hour shifts on my feet. I am accustomed to warehouse order sorting, physical goods handling, and digital inventory scanning. I take instructions attentively and pride myself on punctuality, honesty, and careful handling of consignments.',
      relocationParagraph:
        'I hold a valid International Passport (valid >4 years), clean police clearance records, and complete health certificates. I am seeking legal employer sponsorship for a European Work Permit and National Visa D, ready for immediate relocation and long-term commitment.',
      closingParagraph:
        'My Europass CV is attached for your review. I would welcome the opportunity for an online interview at your convenience. Thank you.',
      signoff: 'Yours sincerely,',
    },
  },

  hospitality: {
    id: 'hospitality',
    name: 'Hotel & Hospitality',
    nameBn: 'হোটেল, রেস্তোরাঁ ও হাউসকিপিং (সহজেই কাজ শিখে নেওয়ার মানসিকতা)',
    iconName: 'Hotel',
    targetJobTitle: 'Hotel Housekeeper & Kitchen / Food Service Assistant (Quick Learner)',
    summary:
      'Polite, energetic, and detail-attentive candidate seeking European Work Permit sponsorship in Hotel Housekeeping, Food Service, or Kitchen Assistance. Brings rigorous sanitization consciousness from healthcare facility environments, prompt attention to cleanliness, and good working English. Highly adaptable, respectful of guests, and eager to learn European hotel service standards, bed making, and kitchen stewarding through on-the-job training.',
    skills: [
      {
        category: 'Hospitality & Cleaning Readiness',
        items: [
          'Eager to Learn Hotel Guest Room Servicing & Linen Care',
          'Bathroom Deep Sanitization & Amenities Replenishment',
          'Kitchen Stewarding, Dishwashing & Kitchen Utensil Care',
          'Courteous, Smiling & Professional Guest Demeanor',
          'Good Communicative English for Understanding Work Orders',
        ],
      },
      {
        category: 'Transferable Strengths',
        items: [
          'Facility Sanitation Experience in Medical Services (HACCP Aware)',
          'High Physical Stamina for Active Shifts and Quick Room Turnover',
          'Respect for Workplace Hierarchy and Guest Privacy',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'General Manager / Head of Housekeeping',
      recipientTitle: 'Human Resources Division',
      companyName: 'European Resort & Hospitality Group',
      companyAddress: 'Seaside Boulevard',
      companyCity: 'Valletta',
      companyCountry: 'Malta',
      date: '2026-11-03',
      subject: 'Application for Hotel Housekeeper / Kitchen Assistant (Work Permit Sponsorship)',
      salutation: 'Dear Hiring Committee,',
      openingParagraph:
        'I am pleased to submit my application for the Hotel Housekeeper / Kitchen Assistant position with your hospitality establishment. With a deep passion for service quality, high cleanliness standards, and an energetic attitude, I would be delighted to contribute to your team.',
      experienceParagraph:
        'My professional background includes coordinating facility hygiene, electronic systems, and equipment care in a medical service center. This experience instilled in me a strict respect for sanitization, neatness, and prompt response to requests. While I do not have prior formal hotel employment, I am a very quick learner, take immense pride in leaving every space sparkling clean, and am eager to master your room turnover and kitchen stewarding standards.',
      motivationParagraph:
        'I speak communicative English, enabling me to follow supervisor instructions clearly and assist international guests with warmth and courtesy. I am 24 years old, physically fit, and prepared to work rotating shifts, including weekends and holidays, with complete dedication.',
      relocationParagraph:
        'I hold a valid International Passport (>4 years validity), clean police clearance, and medical fitness records. I am seeking legal European Work Permit sponsorship and am prepared to travel as soon as the visa is granted.',
      closingParagraph:
        'Thank you for reviewing my Europass CV. I would be thrilled to attend an online interview at your earliest convenience.',
      signoff: 'Yours sincerely,',
    },
  },

  factory: {
    id: 'factory',
    name: 'Factory & Production',
    nameBn: 'ফ্যাক্টরি ও প্রোডাকশন লাইন (টেকনিক্যাল ব্যাকগ্রাউন্ড থেকে দ্রুত শিক্ষণযোগ্য)',
    iconName: 'Factory',
    targetJobTitle: 'Factory Assembly & Production Line Operative (Quick Learner)',
    summary:
      'Disciplined, safety-conscious, and technically educated Production Line Operative from Bangladesh seeking European Work Permit sponsorship. Possesses a Diploma in Computer Engineering which provides a rapid grasp of industrial machine operation, assembly blueprints, electrical safety, and automated manufacturing systems. Known for high manual dexterity, fast assembly pacing, 98% quality accuracy, and disciplined adherence to European occupational health & safety regulations.',
    skills: [
      {
        category: 'Technical & Assembly Aptitude',
        items: [
          'Quick Learner of Conveyor Assembly Line Operations & Pacing',
          'Component Assembly with Hand & Power Tools',
          'Visual Quality Inspection & Defect Segregation',
          'End-of-Line Product Packaging & Palletizing Readiness',
          'Strict 5S Workplace Cleanliness & Safety Compliance',
        ],
      },
      {
        category: 'Transferable Engineering Strengths',
        items: [
          'Diploma in Computer Engineering (Understands Circuits & Wiring)',
          '98% Verified Accuracy in High-Repetition Operations',
          'Exceptional Manual Hand-Eye Coordination & Physical Stamina',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Plant Production Director / HR Manager',
      recipientTitle: 'Human Resources & Recruitment',
      companyName: 'European Manufacturing & Industrial Assembly Sp. z o.o.',
      companyAddress: 'Industrial Zone East',
      companyCity: 'Katowice',
      companyCountry: 'Poland',
      date: '2026-11-03',
      subject: 'Application for Production Line / Factory Assembly Operative (Work Permit Sponsorship)',
      salutation: 'Dear Hiring Manager,',
      openingParagraph:
        'I am writing to formally apply for the Production Line / Factory Assembly Operative position with your manufacturing facility. With my technical engineering education, high manual dexterity, and disciplined work habits, I am eager to contribute to your plant’s productivity.',
      experienceParagraph:
        'I hold a 4-year Diploma in Computer Engineering from Naogaon Polytechnic Institute, where I acquired thorough practical knowledge of circuit assembly, electrical safety, machine components, and technical documentation. In my professional roles, I have serviced electronic hardware and performed high-speed data and quality checks with a verified 98% accuracy score. My engineering background enables me to understand production line machinery and assembly drawings very rapidly.',
      motivationParagraph:
        'I excel at repetitive, high-precision tasks that demand continuous concentration, hand-eye coordination, and strict adherence to European safety and 5S standards. I am 24 years old, physically resilient, and fully prepared to work across rotating 3-shift schedules including nights and weekends.',
      relocationParagraph:
        'I possess a valid International Passport (with >4 years validity), a clean police clearance record, and medical fitness certificates. I am seeking legal employer sponsorship for a European Work Permit and National Visa D, ready for immediate relocation.',
      closingParagraph:
        'Thank you for your consideration of my attached Europass CV. I welcome the opportunity for an interview via video call at your earliest convenience.',
      signoff: 'Yours sincerely,',
    },
  },

  it: {
    id: 'it',
    name: 'IT & Data Specialist',
    nameBn: 'আইটি ও ডাটা স্পেশালিস্ট (আসল প্রফেশনাল ফিল্ড)',
    iconName: 'Cpu',
    targetJobTitle: 'IT Support & Automation / Data Specialist',
    summary:
      'Dynamic, detail-oriented, and technically proficient IT & Automation Specialist from Bangladesh with a Diploma in Computer Engineering and over 2 years of progressive industry experience at Perlov Medical Services Ltd and Golden Harvest InfoTech Ltd. Proven expertise in hardware/software troubleshooting, LAN/WAN networking, biometric access, and CCTV surveillance systems, paired with high-speed 98% accuracy in data management. Skilled in modern AI agents and prompt engineering to automate workflows and optimize office productivity. Seeking European employer sponsorship or international roles.',
    skills: [
      {
        category: 'IT Systems & Networking',
        items: [
          'Hardware Assembly, Diagnostics & Preventative Maintenance',
          'LAN/WAN Network Setup, Router/Switch Configuration & Cabling',
          'CCTV Surveillance Systems Installation & Remote Monitoring',
          'Biometric Time-Attendance Device Configuration',
          'Operating Systems: Windows 10, Windows 11, Basic Linux',
          'Microsoft 365, Advanced Excel, Word, PowerPoint',
        ],
      },
      {
        category: 'Automation & Modern Tools',
        items: [
          'AI Agent Workflows & Prompt Engineering (ChatGPT, Gemini)',
          'Automated Data Processing & Workflow Integration',
          'PHP & Laravel Framework Fundamentals',
          'Photoshop & Illustrator for Digital Asset Preparation',
          '98% Verified Accuracy in High-Volume Data Operations',
        ],
      },
      {
        category: 'Professional Competencies',
        items: [
          'Rapid On-Site Technical Troubleshooting & User Support',
          'System Security & Access Rights Management',
          'Fast Typing Speed (English & Bengali) with Zero Errors',
          'Clear Technical Communication & Documentation in English',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Head of IT & Technical Recruitment',
      recipientTitle: 'Information Technology Division',
      companyName: 'European Technology & Digital Services',
      companyAddress: 'Tech Enterprise Hub',
      companyCity: 'Zagreb',
      companyCountry: 'Croatia',
      date: '2026-11-03',
      subject: 'Application for IT Support Technician / Data Specialist (Work Permit Sponsorship)',
      salutation: 'Dear IT Hiring Team,',
      openingParagraph:
        'I am writing to express my strong interest in joining your team as an IT Support Technician / Data Specialist. Holding a Diploma in Computer Engineering and practical experience managing network infrastructure, CCTV systems, hardware troubleshooting, and data workflows in Bangladesh, I am eager to contribute to your European IT operations.',
      experienceParagraph:
        'In my current position as IT & Automation Specialist at Perlov Medical Services Ltd, I oversee network stability, hardware maintenance, biometric attendance devices, and CCTV surveillance systems. I have also integrated modern AI tools to streamline repetitive administrative tasks. Previously, at Golden Harvest InfoTech Ltd, I managed high-volume data operations with an audited 98% accuracy score. My technical education and problem-solving mindset allow me to resolve hardware and software faults quickly.',
      motivationParagraph:
        'I am deeply passionate about technology and continuous learning. I communicate effectively in English, work well in collaborative technical teams, and adapt effortlessly to new enterprise software and support ticketing environments. I take pride in ensuring zero downtime for users and providing respectful, prompt technical assistance.',
      relocationParagraph:
        'I hold a valid International Passport with over 4 years of remaining validity, a clean police clearance certificate, and full health certifications. I am actively seeking employer sponsorship for a European Work Permit and National Visa D. I am ready to relocate promptly and commit to a long-term position with your company.',
      closingParagraph:
        'Please find my attached Europass CV detailing my credentials and project background. I welcome the opportunity for an interview via Google Meet or Zoom at your convenience.',
      signoff: 'Yours sincerely,',
    },
  },

  admin: {
    id: 'admin',
    name: 'Office & Data Processing',
    nameBn: 'অফিস ও ডাটা প্রসেসিং (আসল অভিজ্ঞতা ভিত্তিক)',
    iconName: 'FileText',
    targetJobTitle: 'Office Assistant & Data Processing Specialist',
    summary:
      'Disciplined, computer-fluent, and fast-typing Office Assistant & Data Processing Specialist from Bangladesh seeking European Work Permit sponsorship. Holds a Diploma in Computer Engineering and verified 98% accuracy in high-volume data operations at Golden Harvest InfoTech Ltd and Perlov Medical Services Ltd. Proficient in Microsoft 365, Excel spreadsheet management, digital archiving, and AI office automations. Dedicated to high productivity, prompt task execution, and smooth workplace support.',
    skills: [
      {
        category: 'Data & Office Operations',
        items: [
          'High-Speed Alphanumeric Data Entry (98% Audited Accuracy)',
          'Advanced Microsoft Excel (Formulas, VLOOKUP, Pivot Tables)',
          'Microsoft Word, PowerPoint & Cloud Drive Archiving',
          'Document Scanning, OCR Conversion & File Indexing',
          'Discrepancy Checking & Quality Reconciliation',
        ],
      },
      {
        category: 'Technical & Systems Support',
        items: [
          'Office Hardware & Printer/Scanner Troubleshooting',
          'Biometric Attendance Log Generation & Basic IT Care',
          'AI Prompting for Fast Document Drafting & Translation',
        ],
      },
      {
        category: 'Workplace Competencies',
        items: [
          'Punctual, organized, and detail-oriented mindset',
          'Clear communicative English for international offices',
          'Strict adherence to confidentiality and data protection',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'The Hiring Manager',
      recipientTitle: 'Human Resources & Administration',
      companyName: 'European Business Operations & Logistics',
      companyAddress: 'Commercial Business District',
      companyCity: 'Warsaw',
      companyCountry: 'Poland',
      date: '2026-11-03',
      subject: 'Application for Office Assistant / Data Processing Specialist (Work Permit)',
      salutation: 'Dear Hiring Team,',
      openingParagraph:
        'I am writing to formally apply for the Office Assistant / Data Processing Specialist role with your company. With a Diploma in Computer Engineering and proven experience in high-volume data verification, I am eager to support your office operations.',
      experienceParagraph:
        'I bring verified 98% accuracy in large-scale data entry, database cleansing, and digital file indexing from my work at Golden Harvest InfoTech Ltd. I am skilled in Microsoft Excel, office hardware maintenance, and automated workflows from Perlov Medical Services Ltd.',
      motivationParagraph:
        'I am disciplined, proactive, and communicate well in English. I take pride in keeping office workflows organized and error-free.',
      relocationParagraph:
        'I hold a valid International Passport (valid >4 years), clean police record, and am seeking European Work Permit sponsorship with readiness for immediate relocation.',
      closingParagraph:
        'Thank you for reviewing my Europass CV. I look forward to an online interview.',
      signoff: 'Yours sincerely,',
    },
  },
};

// =========================================================================
// 3. MIDDLE EAST PRESETS (Honest, Trainable Candidate with Real Background)
// =========================================================================
export const sectorPresetsMiddleEast: Record<SectorId, SectorPreset> = {
  logistics: {
    id: 'logistics',
    name: 'Warehouse & Fulfillment Operative',
    nameBn: 'ওয়্যারহাউস ও ফুলফিলমেন্ট কর্মী (সহজেই কাজ শিখে নেওয়ার মানসিকতা)',
    iconName: 'Truck',
    targetJobTitle: 'Warehouse & Fulfillment Associate (Quick Learner)',
    summary:
      'Energetic, tech-savvy, and safety-conscious Warehouse & Fulfillment Operative from Bangladesh seeking Gulf Employment Visa sponsorship (UAE, Saudi Arabia, Qatar). Brings verified 98% accuracy in inventory data operations from Golden Harvest InfoTech and facility care from Perlov Medical Services. Highly trainable, physically resilient for active warehouse shifts, and ready for immediate deployment.',
    skills: [
      {
        category: 'Gulf Warehouse & Fulfillment Skills',
        items: [
          'GPS Route & Logistics Navigation (Google Maps, Waze)',
          'Order Picking, Packing & Parcel Stacking Protocols',
          'Quick Learner of Barcode Scanners & Cash On Delivery (COD) POS',
          'Warehouse Cargo Staging & Pallet Trolley Operation',
          'Courteous Customer Interaction & Clear English Communication',
        ],
      },
      {
        category: 'Physical Stamina & Work Ethic',
        items: [
          'High physical stamina under warm Gulf climate conditions',
          'Zero handling error and strict workplace safety mindset',
          'Ready for immediate relocation with complete GAMCA/Wafid medical readiness',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Head of Fleet Operations & Recruitment',
      recipientTitle: 'Human Resources Division',
      companyName: 'Express Logistics & Delivery Network LLC',
      companyAddress: 'Al Quoz Industrial Area / Business Bay',
      companyCity: 'Dubai',
      companyCountry: 'United Arab Emirates',
      date: '2026-11-03',
      subject: 'Application for Warehouse & Fulfillment Associate (Employment Visa Sponsorship)',
      salutation: 'Dear Hiring Manager,',
      openingParagraph:
        'I am pleased to formally submit my application for the position of Warehouse & Fulfillment Associate with your esteemed company in the UAE. With strong personal energy, smartphone GPS navigation fluency, and rapid learning agility, I am excited to join your logistics operations.',
      experienceParagraph:
        'My professional background is in facility systems support at Perlov Medical Services Ltd and high-speed data verification at Golden Harvest InfoTech Ltd (where I achieved an audited 98% accuracy benchmark). While I am new to the Gulf region, I master warehouse systems rapidly, and learn fulfillment apps and barcode scanners without difficulty.',
      motivationParagraph:
        'I am 24 years old, physically fit, energetic, and capable of working active 10-12 hour shifts in Gulf weather conditions. I communicate clearly in English, have basic conversational Arabic greetings, and am committed to representing your brand with polite and safe service.',
      relocationParagraph:
        'I hold a valid International Passport (valid for over 4 years), clean police conduct records, and am prepared to undergo GAMCA / Wafid medical fitness testing immediately. I am seeking Gulf Employment Visa sponsorship and am available for immediate deployment.',
      closingParagraph:
        'My resume is attached for your review. I look forward to speaking with you in a video interview at your convenience. Thank you for your consideration.',
      signoff: 'Yours respectfully,',
    },
  },

  hospitality: {
    id: 'hospitality',
    name: 'Hotel, Restaurant & Housekeeping',
    nameBn: 'হোটেল, রেস্তোরাঁ ও হাউসকিপিং (সহজেই কাজ শিখে নেওয়ার মানসিকতা)',
    iconName: 'Hotel',
    targetJobTitle: 'Hotel Housekeeper & Food Service / Steward Associate (Quick Learner)',
    summary:
      'Courteous, energetic, and detail-attentive candidate seeking Gulf Employment Visa sponsorship (UAE, Saudi Arabia, Qatar). Proven track record in meticulous facility sanitization, equipment care, and fast task execution at Perlov Medical Services Ltd. Dedicated to high cleanliness standards, polite English guest interactions, and working smoothly in multicultural hospitality teams. Fully ready for on-the-job training, rotating shifts, and immediate deployment.',
    skills: [
      {
        category: 'Hospitality & Stewarding Readiness',
        items: [
          'Eager to Learn Hotel Guest Room Servicing & Linen Making',
          'Bathroom Deep Sanitization & High-Standard Amenities Replenishment',
          'Kitchen Stewarding, Dishwashing & Dining Area Upkeep',
          'Courteous, Welcoming & Well-Groomed Professional Demeanor',
          'Communicative English & Basic Arabic Hospitality Greetings',
        ],
      },
      {
        category: 'Transferable Attributes',
        items: [
          'Sanitization & Cleanliness Standards from Medical Facility Care',
          'High Physical Stamina for Active Shifts on Feet',
          'Reliable Punctuality and Shift Flexibility',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'The General Manager / Executive Housekeeper',
      recipientTitle: 'Human Resources & Talent Acquisition',
      companyName: 'Luxury Hospitality & Resorts Group',
      companyAddress: 'Sheikh Zayed Road',
      companyCity: 'Dubai',
      companyCountry: 'United Arab Emirates',
      date: '2026-11-03',
      subject: 'Application for Hotel Housekeeping / Kitchen Steward Associate (Gulf Employment Visa)',
      salutation: 'Dear Hiring Committee,',
      openingParagraph:
        'I am pleased to submit my application for the Hotel Housekeeping / Food Service Associate role with your distinguished establishment in Dubai. With a strong commitment to cleanliness, high guest satisfaction, and respectful service standards, I would welcome the opportunity to join your hospitality team.',
      experienceParagraph:
        'My professional experience includes facility maintenance, equipment care, and strict sanitization at Perlov Medical Services Ltd. This healthcare background trained me in maintaining spotless environments, handling sanitizing agents safely, and attending to user requests promptly. While I am new to hotel operations, I learn service procedures very quickly and take immense pride in delivering sparkling clean guest rooms.',
      motivationParagraph:
        'I am 24 years old, physically fit, energetic, and accustomed to active shifts on my feet. I speak good English, allowing me to follow supervisor instructions clearly and assist international hotel guests with warmth and polite professionalism. I am also familiarizing myself with Arabic hospitality phrases.',
      relocationParagraph:
        'I hold a valid International Passport with over 4 years of validity, a clean police clearance certificate, and am ready for GAMCA / Wafid medical examinations. I am seeking legal employment visa sponsorship and am prepared for immediate joining.',
      closingParagraph:
        'Thank you for reviewing my CV. I would welcome the opportunity to discuss my qualifications in an online video interview at your earliest convenience.',
      signoff: 'Yours respectfully,',
    },
  },

  it: {
    id: 'it',
    name: 'IT Support & CCTV Technician',
    nameBn: 'আইটি সাপোর্ট ও সিসিটিভি টেকনিশিয়ান (আসল প্রফেশনাল ফিল্ড)',
    iconName: 'Cpu',
    targetJobTitle: 'IT Support, CCTV & Biometric Technician',
    summary:
      'Technically skilled and proactive IT Support & Security Systems Specialist from Bangladesh holding a 4-year Diploma in Computer Engineering. Over 2 years of proven hands-on expertise in administering LAN/WAN network infrastructure, configuring IP CCTV surveillance cameras, biometric access control systems, and enterprise PC troubleshooting at Perlov Medical Services Ltd. Skilled in AI tools for workflow automation and fast data management (98% audited accuracy at Golden Harvest InfoTech Ltd). Seeking Gulf Employment Visa sponsorship.',
    skills: [
      {
        category: 'IT Infrastructure & Networking',
        items: [
          'Hardware Assembly, Diagnostics & Preventative Maintenance',
          'LAN/WAN Network Setup, Router/Switch Configuration & RJ45 Cabling',
          'IP & Analog CCTV Camera Installation, DVR/NVR Configuration & Remote Monitoring',
          'Biometric Time-Attendance & Door Access Control Systems',
          'Windows 10/11, Active Directory User Setup & Microsoft 365',
        ],
      },
      {
        category: 'Software, Data & Automation',
        items: [
          'AI Agent Workflows & Prompt Engineering for Productivity',
          'High-Speed Data Entry & File Management (98% Accuracy)',
          'PHP & Laravel Fundamentals, SQL Database Basics',
          'Remote Desktop Support (AnyDesk, TeamViewer)',
        ],
      },
      {
        category: 'Field & Service Competencies',
        items: [
          'Fast fault isolation on hardware, printers, and network nodes',
          'Clear technical communication in English',
          'Immediate readiness for on-site client branch visits and technical support',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'The IT Director / Technical Operations Head',
      recipientTitle: 'Information Technology Division',
      companyName: 'Gulf Enterprise Technology & Facilities Services',
      companyAddress: 'King Fahd Road',
      companyCity: 'Riyadh',
      companyCountry: 'Saudi Arabia',
      date: '2026-11-03',
      subject: 'Application for IT Support & CCTV Technician (Saudi Employment Visa)',
      salutation: 'Dear Hiring Team,',
      openingParagraph:
        'I am writing to formally apply for the IT Support & CCTV Technician position with your organization in Saudi Arabia. With a Diploma in Computer Engineering and over 2 years of practical experience in computer hardware, LAN/WAN networks, IP CCTV surveillance, and biometric access terminals, I am eager to contribute to your technical operations.',
      experienceParagraph:
        'At Perlov Medical Services Ltd, I have been responsible for managing company-wide network connections, CCTV surveillance cameras, and biometric attendance terminals, while delivering prompt technical support to end-users. My background allows me to diagnose hardware and software issues rapidly, configure routers and switches, and maintain continuous equipment uptime.',
      motivationParagraph:
        'I am enthusiastic about the rapid technological development across Saudi Arabia (Vision 2030) and the Gulf region. I communicate fluently in English, learn specialized enterprise software quickly, and am ready to support branch operations and client sites with high dedication.',
      relocationParagraph:
        'I hold a valid Bangladeshi International Passport with over 4 years of remaining validity, a clean police clearance certificate, and am prepared for GAMCA medical testing. I am seeking employer sponsorship for an Employment Visa and am available for immediate deployment.',
      closingParagraph:
        'My resume is attached for your review. I look forward to the opportunity for an interview via Google Meet, Zoom, or WhatsApp.',
      signoff: 'Yours respectfully,',
    },
  },

  factory: {
    id: 'factory',
    name: 'Supermarket, Store & Warehouse',
    nameBn: 'সুপারমার্কেট, স্টোর ও সেলস অ্যাসোসিয়েট (সহজেই কাজ শিখে নেওয়ার মানসিকতা)',
    iconName: 'Factory',
    targetJobTitle: 'Hypermarket Sales Associate & Stock Operative (Quick Learner)',
    summary:
      'Hardworking, customer-friendly, and detail-oriented Hypermarket & Retail Associate seeking Gulf Employment Visa sponsorship. Strong capabilities in retail shelf stocking, barcode price scanning, inventory counting, and fast point-of-sale support. Proven 98% accuracy in data and product verification at Golden Harvest InfoTech Ltd, paired with high physical energy for active shifts on the sales floor. Ready for immediate joining in UAE, Saudi Arabia, or Qatar.',
    skills: [
      {
        category: 'Retail & Hypermarket Operations',
        items: [
          'Merchandise Display, Shelf Stocking & Planogram Compliance',
          'Barcode Scanning, Price Tag Verification & Inventory Audit',
          'Fast Checkout Support, Packing & Customer Assistance',
          'Expiry Date Checking & Damaged Goods Segregation (FIFO)',
          'Stockroom Staging, Trolley Handling & Pallet Unloading',
        ],
      },
      {
        category: 'Customer Interaction & Communication',
        items: [
          'Courteous, Welcoming & Professional Demeanor',
          'Communicative English for Customer Inquiries & Basic Arabic',
          'Quick Conflict Resolution & Helpful Service Attitude',
        ],
      },
      {
        category: 'Physical Stamina & Shift Flexibility',
        items: [
          'High endurance for 8-10 hour active retail floor shifts',
          'Handling cartons up to 20kg safely and efficiently',
          'Flexibility to work morning, evening, and weekend rosters',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Store Operations Manager / HR Department',
      recipientTitle: 'Human Resources Division',
      companyName: 'Hypermarket & Retail Group LLC',
      companyAddress: 'Retail Hub District',
      companyCity: 'Doha',
      companyCountry: 'Qatar',
      date: '2026-11-03',
      subject: 'Application for Hypermarket Sales Associate / Stock Operative (Employment Visa)',
      salutation: 'Dear Hiring Manager,',
      openingParagraph:
        'I am writing to formally apply for the Hypermarket Sales Associate / Stock Operative position with your leading retail organization. With strong organization skills, physical energy, and a helpful customer-centric attitude, I am eager to contribute to your busy retail floor.',
      experienceParagraph:
        'I bring proven expertise in rapid product sorting, stock cataloging, and inventory data verification with a 98% accuracy score from Golden Harvest InfoTech Ltd. I take pride in keeping display shelves neat, properly front-faced, and accurately priced. I am experienced in lifting merchandise cartons, handling pallet trolleys safely, and supporting customers with a welcoming smile.',
      motivationParagraph:
        'I understand that successful retail operations depend on speed, cleanliness, and polite customer engagement. I communicate well in English and can easily learn Arabic retail terms. I am eager to work across flexible rotating shifts, including weekends and peak shopping periods.',
      relocationParagraph:
        'I hold a valid International Passport (valid >4 years), clean police clearance, and am prepared for GAMCA medical testing. I am seeking Employment Visa sponsorship and can relocate immediately upon visa approval.',
      closingParagraph:
        'Thank you for reviewing my resume. I look forward to an opportunity for an online interview at your convenience.',
      signoff: 'Yours respectfully,',
    },
  },

  agriculture: {
    id: 'agriculture',
    name: 'Modern Agriculture & Greenhouse',
    nameBn: 'আধুনিক কৃষি ও গ্রিনহাউস (সহজেই কাজ শিখে নেওয়ার মানসিকতা)',
    iconName: 'Sprout',
    targetJobTitle: 'Greenhouse & Controlled Agriculture Operative (Quick Learner)',
    summary:
      'Energetic, dependable, and technically capable Greenhouse & Farm Operative from Bangladesh seeking Gulf Employment Visa sponsorship. Combines basic practical farming familiarity in Bangladesh with a technical Diploma in Computer Engineering, enabling rapid mastery of automated climate control, drip irrigation systems, and hydroponic nutrient monitoring in modern Gulf agricultural projects. High physical stamina, quick learner, and full readiness for immediate relocation.',
    skills: [
      {
        category: 'Gulf Modern Farming & Greenhouses',
        items: [
          'Basic Farming Familiarity in Bangladesh (Irrigation, Weeding, Harvesting)',
          'Eager to Learn Hydroponic, Aeroponic & Greenhouse Crop Maintenance',
          'Drip Irrigation Pipeline Setup & Sensor Monitoring Readiness',
          'Careful Harvesting, Sorting & Cold Storage Packaging',
          'High physical stamina and comfort with greenhouse warmth',
        ],
      },
      {
        category: 'Technical Aptitude & Reliability',
        items: [
          'Diploma in Computer Engineering (Understands Pumps & Controls)',
          'Disciplined Teamwork & Punctual Shift Attendance',
          'Communicative English & Basic Arabic Work Commands',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'Farm Operations Director / HR Department',
      recipientTitle: 'Human Resources Division',
      companyName: 'AgriTech & Modern Greenhouse Farms LLC',
      companyAddress: 'Al-Kharj Agricultural Project',
      companyCity: 'Riyadh',
      companyCountry: 'Saudi Arabia',
      date: '2026-11-03',
      subject: 'Application for Greenhouse & Farm Operative (Employment Visa Sponsorship)',
      salutation: 'Dear Hiring Team,',
      openingParagraph:
        'I am pleased to formally apply for the Greenhouse & Farm Operative position with your modern agricultural enterprise in Saudi Arabia. With basic agricultural familiarity from Bangladesh and a technical engineering diploma, I am eager to learn and contribute to your advanced farming operations.',
      experienceParagraph:
        'My professional background is in facility systems care at Perlov Medical Services Ltd and high-accuracy data operations at Golden Harvest InfoTech Ltd. In Bangladesh, farming is a part of our heritage, and I have basic familiarity with crop care, irrigation channels, and fruit picking. My technical background in computer engineering allows me to quickly understand automated greenhouse controls, drip irrigation sensors, and climate management systems.',
      motivationParagraph:
        'I possess high physical stamina, work well in high-temperature environments, and am prepared for active shift duties. I communicate clearly in English, respect workplace hierarchy, and am committed to long-term employment.',
      relocationParagraph:
        'I hold a valid International Passport (valid >4 years), clean police clearance, and am ready for GAMCA medical examinations. I am seeking legal Employment Visa sponsorship and can travel immediately upon visa issuance.',
      closingParagraph:
        'My resume is attached for your review. I look forward to speaking with you in a video interview at your earliest convenience.',
      signoff: 'Yours respectfully,',
    },
  },

  admin: {
    id: 'admin',
    name: 'Office Assistant & Document Controller',
    nameBn: 'অফিস ও ডকুমেন্ট কন্ট্রোলার (আসল অভিজ্ঞতা ভিত্তিক)',
    iconName: 'FileText',
    targetJobTitle: 'Office Assistant & Document Controller',
    summary:
      'Polite, detail-oriented, and computer-literate Office Assistant & Document Controller seeking Gulf Employment Visa sponsorship (UAE, Saudi Arabia, Qatar). Strong technical foundation in Computer Engineering, fast typing (English & Bengali), and proven 98% accuracy in document digitization and inventory filing at Golden Harvest InfoTech Ltd and Perlov Medical Services Ltd. Highly competent in Microsoft Excel, correspondence drafting, and office coordination. Ready for immediate deployment.',
    skills: [
      {
        category: 'Office Administration & Documentation',
        items: [
          'Document Filing, Archiving & Numbering Systems',
          'Fast Alphanumeric Data Entry with 98% Accuracy Audit',
          'Advanced Microsoft Excel (Formulas, Pivot Tables, Logs)',
          'Office Hardware & Photocopier/Printer Maintenance',
          'Monthly Attendance & Consumable Inventory Summaries',
        ],
      },
      {
        category: 'Communication & Coordination',
        items: [
          'Professional Email Drafting & Phone Etiquette in English',
          'Basic Conversational Arabic for Office Assistance',
          'Visitor Reception & Confidential File Care',
        ],
      },
    ],
    experiences: authenticWorkExperiences,
    coverLetter: {
      senderName: 'Md. Shakil Hossain',
      senderAddress: '569/B, Mogbazar, Dhaka-1217, Bangladesh',
      senderPhone: '+880 1701982218',
      senderEmail: 'shakil159951@gmail.com',
      recipientName: 'The Office Administration Manager / HR Head',
      recipientTitle: 'Human Resources & Administration',
      companyName: 'Gulf Enterprise & Facilities Management LLC',
      companyAddress: 'Business Bay / King Fahd Road',
      companyCity: 'Dubai',
      companyCountry: 'United Arab Emirates',
      date: '2026-11-03',
      subject: 'Application for Office Assistant / Document Controller (Employment Visa)',
      salutation: 'Dear Hiring Manager,',
      openingParagraph:
        'I am pleased to apply for the Office Assistant / Document Controller position with your company. With a Diploma in Computer Engineering and verified experience in fast-speed data entry and office support, I am eager to contribute to your office productivity.',
      experienceParagraph:
        'I bring verified 98% accuracy in database operations, advanced Microsoft Excel skills, and experience managing office hardware and biometric attendance devices. I take pride in keeping files organized and operations running smoothly.',
      motivationParagraph:
        'I am polite, punctual, and communicate fluently in English. I learn new software quickly and adapt well to multicultural corporate teams.',
      relocationParagraph:
        'I hold a valid International Passport (valid >4 years), clean police clearance, and am ready for GAMCA medical testing. I am available for immediate deployment.',
      closingParagraph:
        'Thank you for reviewing my resume. I look forward to an interview.',
      signoff: 'Yours respectfully,',
    },
  },
};

export const defaultCandidateProfile: CandidateProfile = {
  region: 'europe',
  personalInfo: { ...basePersonalInfo },
  summary: sectorPresetsEurope.it.summary,
  sector: 'it',
  experiences: authenticWorkExperiences,
  education: [...baseEducation],
  trainings: [...baseTrainings],
  skills: sectorPresetsEurope.it.skills,
  languages: [...baseLanguagesEurope],
  drivingMobility: [],
  additionalCertifications: [
    'Valid International Passport (Validity > 4 Years)',
    'Government Police Clearance Certificate (Clean Background)',
    'Medical Fitness & Vaccination Records Ready (GAMCA / EU Ready)',
    'Open to flexible shift schedules, overtime, and immediate relocation',
  ],
};
