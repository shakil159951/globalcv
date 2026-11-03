# Md. Shakil Hossain - Global CV & Visa Suite (Europass, Gulf & BD Corporate)

A comprehensive, production-ready Curriculum Vitae and Cover Letter builder tailored for international job applications across Europe (Europass standard), Middle East (GCC Executive standard), and Bangladesh (Corporate & IT standard).

---

## 🚀 Vercel Deployment Guide (ভার্সেল ডিপ্লয়মেন্ট নির্দেশিকা)

This project is 100% pre-configured and ready for one-click deployment on **Vercel**.

### পদ্ধতি ১: GitHub এর মাধ্যমে ডিপ্লয় (সবচেয়ে সহজ ও অটোমেটেড)

1. **গিট ইনিশিয়ালাইজ ও পুশ করুন:**
   ```bash
   git init
   git add .
   git commit -m "Initial release of Global CV & Visa Suite"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/shakil-cv-suite.git
   git push -u origin main
   ```

2. **Vercel ড্যাশবোর্ডে যান:**
   - [vercel.com](https://vercel.com)-এ লগইন করুন।
   - **"Add New..."** -> **"Project"** এ ক্লিক করুন।
   - আপনার GitHub রিপোজিটরি (`shakil-cv-suite`) সিলেক্ট করুন এবং **"Import"** চাপুন।

3. **প্রজেক্ট সেটিংস (Pre-configured via `vercel.json`):**
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **"Deploy" বাটনে ক্লিক করুন:**
   - মাত্র ১ মিনিটের মধ্যে আপনার ওয়েবসাইট লাইভ হয়ে যাবে এবং আপনি একটি ফ্রি `.vercel.app` লিংক পেয়ে যাবেন (যেমন: `shakil-cv.vercel.app`)।

---

### পদ্ধতি ২: Vercel CLI দিয়ে টার্মিনাল থেকে সরাসরি ডিপ্লয়

```bash
# ১. গ্লোবালি ভার্সেল সিএলআই ইনস্টল করুন (যদি না থাকে)
npm i -g vercel

# ২. প্রজেক্ট রুটে কমান্ড চালান
vercel

# ৩. প্রোডাকশনে ডিপ্লয় করতে:
vercel --prod
```

---

## 🛠️ বিল্ট-ইন কনফিগারেশন (`vercel.json`)

প্রজেক্টে ইতিমধ্যেই `vercel.json` কনফিগার করা আছে যাতে:
- এসপিএ রাউটিং (Single Page App rewrites) স্বয়ংক্রিয়ভাবে কাজ করে এবং কোনো পেজ রিফ্রেশে ৪MD/৪০৪ এরর না আসে।
- স্ট্যাটিক ফাইল ও সিএসএস-জেএস ফাইল দ্রুত লোডের জন্য ব্রাউজার ক্যাশিং এনাবেল করা আছে।

---

## 📦 লোকাল ডেভেলপমেন্ট ও বিল্ড পরীক্ষা

```bash
# ডিপেন্ডেন্সি ইনস্টল
npm install

# লোকাল ডেভেলপমেন্ট সার্ভার রান
npm run dev

# প্রোডাকশন বিল্ড চেক
npm run build

# বিল্ড ফাইল প্রিভিউ
npm run preview
```
