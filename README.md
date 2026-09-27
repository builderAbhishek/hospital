# AIS Hospital — Complete Frontend V1

> **Advanced Care. Trusted Hands. Closer to You.**  
> A production-quality, responsive public-facing hospital website with online OPD appointment booking and future role panel prototypes.

---

## 🏥 Project Overview

AIS Hospital Frontend V1 is an Indian tertiary care private hospital website designed to deliver patient trust, clinical transparency, and seamless digital access.

- **Status**: Production-Ready Frontend V1
- **Target Location**: Siddharthnagar, Uttar Pradesh, India
- **Core Technology**: Semantic HTML5, Tailwind CSS, Vanilla JavaScript (ES6+), Lucide Icons, Google Fonts (Inter & Manrope), AOS animations.
- **Backend**: None (pure client-side V1 architecture, ready for V2 PHP/MySQL or REST API integration).

---

## 🎨 3 Visual Healthcare Themes

The website features an instant theme switching engine controlled via CSS variables:

| Theme Key | Name | Primary Hex | Description |
| :--- | :--- | :--- | :--- |
| `teal` | **Medical Teal** *(Default)* | `#0F766E` | Professional healthcare teal inspired by modern clinical facilities |
| `green` | **Indian Medical Green** | `#15803D` | Clean, reassuring natural healthcare green |
| `blue` | **Royal Medical Blue** | `#1D4ED8` | High-trust corporate and university hospital blue |

### How Theme Switching Works:
1. `data-theme="teal" | "green" | "blue"` is placed on `<html>` or `<body>`.
2. CSS variables (`--primary`, `--primary-dark`, `--primary-light`, etc.) update automatically without duplicating stylesheets.
3. Switch themes programmatically anytime:
   ```javascript
   AIS_THEME.setTheme('green'); // or 'teal' / 'blue'
   ```
4. Visitors can also toggle themes live via the theme selector pills located on the top emergency bar.
5. Chosen theme persists across sessions in `localStorage`.

---

## 📁 Project Structure

```
Hospital/
├── index.html                  # Homepage (Hero, Stats, Specialties, About, Doctors, Testimonials, Insights)
├── about.html                  # About Hospital (Story, Mission, Vision, Values, Accreditations)
├── departments.html            # 14 Specialized Clinical Departments with live search
├── doctors.html                # 50+ Consultants directory with department filtering & search
├── services.html               # Comprehensive hospital services & preventive health packages
├── facilities.html             # High-tech infrastructure, 60-bed ICU, 8 Modular OTs, Cath Lab, MRI
├── appointment.html            # 7-Step Multi-Stage OPD Appointment Booking Wizard
├── contact.html                # Contact coordinates, 24x7 Helplines, OPD Timings, Map, Inquiry form
├── faq.html                    # 7 Categorized FAQ sections with smooth accordion UI & search
├── health-library.html         # Doctor-authored health articles with modal reader & category filters
├── emergency.html              # 24x7 Emergency protocol, Golden Hour trauma care, life-saving guide
├── doctor-profile.html         # Dynamic doctor profile viewer (?id=doctor-01)
├── login.html                  # Staff & clinical login gateway (Demo V2 preview)
├── doctor-panel.html           # Doctor consultation queue & appointment dashboard (V2 Prototype)
├── nurse-panel.html            # Inpatient ward vitals charting & nursing station (V2 Prototype)
├── manager-panel.html          # Hospital operations, bed census, and web booking feed (V2 Prototype)
│
├── assets/
│   ├── css/
│   │   ├── themes.css          # CSS Variables for Teal, Green, and Blue themes
│   │   └── app.css             # Core typography, stepper, cards, toast, print slip styles
│   │
│   ├── js/
│   │   ├── config.js           # White-label configuration (Hospital name, phone, address, timings)
│   │   ├── theme.js            # Theme controller & local storage persistence
│   │   ├── data.js             # Fictional demo dataset (14 depts, 12 doctors, services, articles, FAQs)
│   │   ├── components.js       # Reusable components (Header, Emergency Bar, Footer, Cards, Toast)
│   │   ├── validation.js       # Form validation (Name, Indian 10-digit mobile, age, past dates)
│   │   ├── appointment.js      # Multi-step appointment wizard engine & ticket generator
│   │   └── app.js              # Page orchestrator, Lucide & AOS init, dynamic profile, filters
│
└── README.md
```

---

## ⚡ Multi-Step Appointment Booking System

Located at `appointment.html`, this is the primary functional workflow in V1:

1. **Step 1 — Choose Department**: Select from 14 clinical specialties.
2. **Step 2 — Choose Doctor**: Pick consultant based on qualification, experience, and fee.
3. **Step 3 — Choose Date**: Date picker constrained to valid future dates within 60 days (Sundays disabled for regular OPD).
4. **Step 4 — Choose Time Slot**: Morning, afternoon, and evening consultation slots.
5. **Step 5 — Enter Patient Details**: Full Name, Age, Gender, Mobile (Indian 10-digit format), Email, Patient Category (New vs. Existing), and Symptoms.
6. **Step 6 — Review Details**: Complete summary screen before final submission.
7. **Step 7 — Confirmed Slip**: Generates unique ID (`AIS-2026-XXXXX`), persists record in `localStorage`, and provides single-click **Print Slip** and **Download Record**.

### Deep Linking Support:
- Pre-select doctor: `appointment.html?doctorId=doctor-01`
- Pre-select department: `appointment.html?dept=cardiology`

---

## 🔌 V2 Backend Integration Handoff

In `assets/js/appointment.js`, the booking submission is structured for drop-in replacement with a REST API or PHP/MySQL endpoint:

```javascript
// ============================================================
// V2 BACKEND INTEGRATION HANDOFF NOTE:
// Replace localStorage appointment creation with:
// const response = await fetch('/api/v2/appointments', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(appointmentRecord)
// });
// const result = await response.json();
// ============================================================
```

---

## 🚀 Running the Project

Open `index.html` directly in any modern browser:
```bash
# Or start a simple local server:
npx serve .
# Or Python:
python -m http.server 3000
```
Visit `http://localhost:3000`.

---

## 🛡️ Accreditations & Standards
- NABH Standards Compliant Clinical Hierarchy
- NABL Certified Automated Diagnostic Laboratories
- Mobile-first, responsive from 320px to 4K displays
- Zero console errors and semantic accessibility focus
