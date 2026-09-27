/**
 * AIS Hospital - Centralized Demo Data
 * Contains realistic medical data for departments, doctors, services, facilities,
 * testimonials, health library articles, packages, and FAQs.
 * Readily swappable with backend APIs in V2.
 */

const AIS_DATA = {
    // 14 Specialized Departments
    departments: [
        {
            id: "cardiology",
            name: "Cardiology & Cardiac Sciences",
            icon: "heart-pulse",
            shortDesc: "Comprehensive heart care with advanced cath lab, angiographies, bypass support, and preventive cardiac wellness.",
            fullDesc: "The Department of Cardiology at AIS Hospital offers tertiary-level cardiovascular diagnosis and interventional care. Equipped with a state-of-the-art flat-panel Digital Cath Lab, dedicated Cardiac ICU (CICU), and non-invasive testing including 3D Echocardiography, TMT, and Holter monitoring.",
            headOfDept: "Dr. Vikram Singhania",
            doctorCount: 4,
            keyTreatments: ["Coronary Angiography & Angioplasty", "Pacemaker Implantation", "Heart Failure Clinic", "Preventive Heart Checkups", "Pediatric Cardiology Screening"],
            timing: "OPD: Mon - Sat (09:00 AM - 05:00 PM)",
            emergencyAvailable: true
        },
        {
            id: "orthopedics",
            name: "Orthopedics & Joint Replacement",
            icon: "bone",
            shortDesc: "Advanced robotic-assisted knee and hip replacement, trauma reconstruction, arthroscopy, and spine care.",
            fullDesc: "Specializing in the preservation and restoration of the musculoskeletal system. Our orthopedic department features dedicated laminar airflow operation theatres, computer-navigated joint replacement, and comprehensive sports injury rehab.",
            headOfDept: "Dr. Rajeshwari Verma",
            doctorCount: 3,
            keyTreatments: ["Total Knee & Hip Replacement", "Arthroscopic Ligament Repair (ACL/PCL)", "Complex Fracture & Trauma Care", "Spine Decompression Surgery", "Osteoporosis Treatment"],
            timing: "OPD: Mon - Sat (09:30 AM - 06:00 PM)",
            emergencyAvailable: true
        },
        {
            id: "neurology",
            name: "Neurology & Neuro Surgery",
            icon: "activity",
            shortDesc: "Specialized care for acute stroke, epilepsy, migraines, Parkinson's disease, and neurosurgical emergencies.",
            fullDesc: "AIS Neuro Sciences wing provides hyper-acute stroke thrombolysis, digital EEG, EMG/NCV studies, and microsurgical skull base procedures backed by a specialized Neuro Intensive Care Unit (NICU).",
            headOfDept: "Dr. Devendra Mathur",
            doctorCount: 3,
            keyTreatments: ["Acute Stroke Thrombolysis (24×7)", "Epilepsy & Seizure Management", "Brain & Spine Tumor Surgery", "Parkinson's & Movement Disorders", "Chronic Migraine Care"],
            timing: "OPD: Mon - Sat (10:00 AM - 05:00 PM)",
            emergencyAvailable: true
        },
        {
            id: "general-medicine",
            name: "General Medicine & Diabetology",
            icon: "stethoscope",
            shortDesc: "First-line primary care, diabetes reversal guidance, lifestyle diseases, fever management, and chronic illnesses.",
            fullDesc: "Our Consultant Physicians deliver holistic medical management for acute and chronic adult ailments, systemic infections, metabolic disorders, multi-system diseases, and geriatric care.",
            headOfDept: "Dr. Aarav Sharma",
            doctorCount: 5,
            keyTreatments: ["Type 1 & Type 2 Diabetes Management", "Hypertension & Dyslipidemia", "Infectious Fevers (Dengue, Malaria, Typhoid)", "Geriatric Health Care", "Thyroid Disorders"],
            timing: "OPD: Mon - Sat (08:30 AM - 07:30 PM)",
            emergencyAvailable: true
        },
        {
            id: "general-surgery",
            name: "General & Laparoscopic Surgery",
            icon: "scissors",
            shortDesc: "Minimally invasive keyhole surgeries for gallbladder, hernia, appendix, and GI gastrointestinal conditions.",
            fullDesc: "Equipped with 4K Ultra-HD laparoscopy towers for minimal pain, faster recovery, and virtually scarless procedures. Includes round-the-clock emergency surgical readiness.",
            headOfDept: "Dr. Tariq Ahmad Khan",
            doctorCount: 3,
            keyTreatments: ["Laparoscopic Cholecystectomy (Gallbladder)", "Laparoscopic Hernia Repair", "Appendectomy", "Laser Proctology (Piles, Fistula)", "Trauma Laparotomy"],
            timing: "OPD: Mon - Sat (10:00 AM - 06:00 PM)",
            emergencyAvailable: true
        },
        {
            id: "pediatrics",
            name: "Pediatrics & Neonatology",
            icon: "baby",
            shortDesc: "Compassionate child healthcare, Level-III NICU for premature newborns, vaccinations, and growth monitoring.",
            fullDesc: "Dedicated to the physical and emotional wellbeing of infants, children, and adolescents. Equipped with high-tech neonatal ventilators, phototherapy units, and warm child-friendly wards.",
            headOfDept: "Dr. Ananya Mukherjee",
            doctorCount: 4,
            keyTreatments: ["Level-III Neonatal Intensive Care (NICU)", "Routine & Optional Immunizations", "Child Asthma & Allergy Management", "Developmental Milestones Tracking", "Pediatric Emergencies"],
            timing: "OPD: Mon - Sat (09:00 AM - 07:00 PM)",
            emergencyAvailable: true
        },
        {
            id: "gynecology",
            name: "Obstetrics & Gynecology",
            icon: "user-check",
            shortDesc: "Complete maternity suites, painless delivery, high-risk pregnancy management, PCOS, and gynecological oncology.",
            fullDesc: "Celebrating motherhood with state-of-the-art LDR (Labor-Delivery-Recovery) suites, continuous fetal monitoring, antenatal education, and advanced laparoscopic gynecological surgeries.",
            headOfDept: "Dr. Priya Patel",
            doctorCount: 4,
            keyTreatments: ["Normal & Caesarean Deliveries", "High-Risk Pregnancy Care", "Infertility Evaluation", "PCOS & Hormonal Imbalance Clinic", "Hysterectomy & Fibroid Removal"],
            timing: "OPD: Mon - Sat (09:00 AM - 06:30 PM)",
            emergencyAvailable: true
        },
        {
            id: "dermatology",
            name: "Dermatology & Cosmetology",
            icon: "sparkles",
            shortDesc: "Evidence-based clinical skincare, eczema, psoriasis, laser therapy, acne management, and hair loss solutions.",
            fullDesc: "Offering comprehensive treatment for clinical dermatological conditions along with cutting-edge aesthetic dermatology, chemical peels, and vitiligo care.",
            headOfDept: "Dr. Neha Kulkarni",
            doctorCount: 2,
            keyTreatments: ["Acne & Acne Scar Resurfacing", "Psoriasis & Eczema Management", "Platelet-Rich Plasma (PRP) for Hair Loss", "Allergy Patch Testing", "Mole & Wart Laser Removal"],
            timing: "OPD: Mon - Sat (11:00 AM - 06:00 PM)",
            emergencyAvailable: false
        },
        {
            id: "ent",
            name: "ENT & Head-Neck Surgery",
            icon: "ear",
            shortDesc: "Microscopic ear surgeries, endoscopic sinus procedures, audiometry, voice clinic, and hearing care.",
            fullDesc: "Advanced diagnostics with flexible nasopharyngoscopy, pure tone audiometry, tympanometry, and cold plasma coblation techniques for adenoids and tonsils.",
            headOfDept: "Dr. Manoj Kaushik",
            doctorCount: 2,
            keyTreatments: ["Functional Endoscopic Sinus Surgery (FESS)", "Micro-Ear Surgery (Tympanoplasty)", "Coblation Tonsillectomy", "Vertigo & Balance Clinic", "Pure Tone Audiometry"],
            timing: "OPD: Mon - Sat (10:00 AM - 05:30 PM)",
            emergencyAvailable: true
        },
        {
            id: "ophthalmology",
            name: "Ophthalmology & Eye Care",
            icon: "eye",
            shortDesc: "Micro-incision cataract surgery (MICS), glaucoma management, diabetic retinopathy screening, and refractive care.",
            fullDesc: "Comprehensive vision testing, phacoemulsification for cataract removal, laser photocoagulation, and pediatric eye screenings with computerized optical instruments.",
            headOfDept: "Dr. Sunita Rao",
            doctorCount: 2,
            keyTreatments: ["Phaco Cataract Surgery with Premium IOL", "Glaucoma Early Detection & Trabeculectomy", "Diabetic Retinopathy Screening", "Computer Vision Syndrome Care", "Refractive Vision Correction"],
            timing: "OPD: Mon - Sat (09:30 AM - 05:00 PM)",
            emergencyAvailable: false
        },
        {
            id: "emergency-medicine",
            name: "Emergency & Critical Care",
            icon: "shield-alert",
            shortDesc: "24×7 rapid response trauma center, dedicated triage, advanced cardiac life support, and ICU connectivity.",
            fullDesc: "Headed by board-certified emergency physicians with 24×7 on-call super-specialists, dedicated resuscitation bays, point-of-care ultrasound, and rapid-entry ambulance bays.",
            headOfDept: "Dr. Suresh Reddy",
            doctorCount: 6,
            keyTreatments: ["Polytrauma Management", "Acute Heart Attack Protocol (Golden Hour Care)", "Poisoning & Toxicology Care", "Severe Respiratory Distress (Ventilator Support)", "Sepsis Resuscitation"],
            timing: "24×7 Round-The-Clock Service",
            emergencyAvailable: true
        },
        {
            id: "radiology",
            name: "Radiology & Imaging Sciences",
            icon: "scan",
            shortDesc: "128-slice CT scanner, 1.5 Tesla silent MRI, color doppler, digital X-rays, and 4D ultrasound scans.",
            fullDesc: "Delivering fast, ultra-crisp diagnostic images interpreted by experienced clinical radiologists, with tele-radiology for emergency midnight consultations.",
            headOfDept: "Dr. Meenakshi Iyer",
            doctorCount: 3,
            keyTreatments: ["Whole Body 1.5T MRI", "High-Resolution 128-Slice CT", "Color Doppler & Vascular Scans", "Digital Mammography", "Image-Guided Biopsies"],
            timing: "OPD: Mon - Sat (08:00 AM - 08:00 PM) | Emergency: 24×7",
            emergencyAvailable: true
        },
        {
            id: "pathology",
            name: "Pathology & Clinical Biochemistry",
            icon: "test-tube-2",
            shortDesc: "Fully automated NABL-certified analyzers providing accurate biochemistry, hematology, and histopathology.",
            fullDesc: "Integrated clinical laboratory offering over 500 routine and specialized tests with barcoded sample tracking, automated quality controls, and online reports.",
            headOfDept: "Dr. Arvind Gupta",
            doctorCount: 2,
            keyTreatments: ["Routine & Special Blood Profiles", "Thyroid & Hormone Panels", "Histopathology & FNAC Biopsy", "Microbiology & Culture Sensitivities", "Cardiac Biomarkers (Troponin I)"],
            timing: "Sample Collection: 24×7 Round-The-Clock",
            emergencyAvailable: true
        },
        {
            id: "dental",
            name: "Dental & Maxillofacial Care",
            icon: "smile",
            shortDesc: "Painless root canal treatment (RCT), dental implants, orthodontic braces, smile design, and facial trauma repair.",
            fullDesc: "Modern ergonomic dental operatory with digital RVG X-ray, ultrasonic scaling, rotary endodontics, and specialized maxillofacial trauma surgery.",
            headOfDept: "Dr. Shalini Saxena",
            doctorCount: 2,
            keyTreatments: ["Single-Sitting Root Canal (RCT)", "Dental Implants & Crowns", "Orthodontic Aligners & Braces", "Teeth Whitening & Smile Makeover", "Maxillofacial Fracture Fixation"],
            timing: "OPD: Mon - Sat (10:00 AM - 06:00 PM)",
            emergencyAvailable: false
        }
    ],

    // 12 Expert Doctors with Realistic Profiles
    doctors: [
        {
            id: "doctor-01",
            name: "Dr. Aarav Sharma",
            gender: "Male",
            photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
            departmentId: "general-medicine",
            departmentName: "General Medicine & Diabetology",
            specialization: "Senior Consultant Physician & Diabetologist",
            qualification: "MBBS, MD (Internal Medicine), PGD (Diabetology)",
            experience: 14,
            rating: 4.9,
            reviewCount: 320,
            consultationFee: "₹600",
            languages: ["English", "Hindi", "Bhojpuri"],
            opdTimings: "Mon - Sat: 09:00 AM - 01:00 PM, 04:00 PM - 07:00 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            about: "Dr. Aarav Sharma is a revered Senior Consultant Physician with over 14 years of clinical excellence in diagnosing and managing complex adult illnesses, uncontrolled diabetes mellitus, hypertension, and tropical infectious diseases. Known for his compassionate listener approach and evidence-guided treatments.",
            expertise: [
                "Advanced Diabetes Care & Glycemic Control",
                "Hypertension & Cardiovascular Risk Assessment",
                "Management of Tropical Fevers (Dengue, Typhoid, Malaria)",
                "Geriatric & Preventive Medicine",
                "Adult Immunization & Wellness Counseling"
            ],
            education: [
                "MBBS - King George's Medical University (KGMU), Lucknow",
                "MD (General Medicine) - Institute of Medical Sciences, BHU, Varanasi",
                "Post Graduate Diploma in Diabetology - Boston University School of Medicine"
            ],
            awards: [
                "Excellence in Internal Medicine Award - UPIMA 2023",
                "Community Health Service Gold Medal 2021"
            ]
        },
        {
            id: "doctor-02",
            name: "Dr. Priya Patel",
            gender: "Female",
            photo: "https://images.unsplash.com/photo-1594824813572-88f5f4f89d38?auto=format&fit=crop&q=80&w=600",
            departmentId: "gynecology",
            departmentName: "Obstetrics & Gynecology",
            specialization: "Senior Consultant Obstetrician & Gynecologist",
            qualification: "MBBS, MS (Obstetrics & Gynecology), FMAS",
            experience: 16,
            rating: 4.9,
            reviewCount: 410,
            consultationFee: "₹700",
            languages: ["English", "Hindi", "Gujarati"],
            opdTimings: "Mon - Sat: 09:30 AM - 02:00 PM, 05:00 PM - 07:00 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            about: "Dr. Priya Patel has delivered over 4,500 healthy babies and specializes in painless deliveries, high-risk pregnancies, infertility workups, and minimally invasive laparoscopic gynecological surgeries. Her empathetic guidance puts expectant mothers at complete ease.",
            expertise: [
                "High-Risk Pregnancy & Twin Deliveries",
                "Painless Labor & Natural Birth Guidance",
                "Laparoscopic Hysterectomy & Ovarian Cystectomy",
                "Polycystic Ovarian Syndrome (PCOS) Protocols",
                "Adolescent & Menopausal Healthcare"
            ],
            education: [
                "MBBS - Lady Hardinge Medical College, New Delhi",
                "MS (Obs & Gynae) - Maulana Azad Medical College, New Delhi",
                "Fellowship in Minimal Access Surgery (FMAS) - World Laparoscopy Hospital"
            ],
            awards: [
                "Best Gynecologist of the Year - Healthcare Excellence Forum 2024",
                "FOGSI Leadership Star 2022"
            ]
        },
        {
            id: "doctor-03",
            name: "Dr. Vikram Singhania",
            gender: "Male",
            photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600",
            departmentId: "cardiology",
            departmentName: "Cardiology & Cardiac Sciences",
            specialization: "Chief Interventional Cardiologist",
            qualification: "MBBS, MD (Medicine), DM (Cardiology), FACC",
            experience: 19,
            rating: 4.9,
            reviewCount: 540,
            consultationFee: "₹900",
            languages: ["English", "Hindi"],
            opdTimings: "Mon - Fri: 10:00 AM - 03:00 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            about: "Dr. Vikram Singhania is one of Northern India's distinguished interventional cardiologists, having performed over 8,000 coronary angiographies and angioplasties. He pioneered primary PCI protocols ensuring rapid survival rates during acute myocardial infarction.",
            expertise: [
                "Primary & Complex Coronary Angioplasty (PTCA)",
                "Radial Artery Access Interventions",
                "Permanent Pacemaker & AICD Implantation",
                "Heart Failure & Cardiomyopathy Management",
                "Preventive Cardiac Risk Stratification"
            ],
            education: [
                "MBBS - All India Institute of Medical Sciences (AIIMS), New Delhi",
                "MD (Medicine) - AIIMS, New Delhi",
                "DM (Cardiology) - Post Graduate Institute of Medical Education (PGIMER), Chandigarh",
                "Fellow of American College of Cardiology (FACC)"
            ],
            awards: [
                "National Heart Hero Citation 2023",
                "Pioneer in Radial Angioplasty Award - CSI 2020"
            ]
        },
        {
            id: "doctor-04",
            name: "Dr. Rajeshwari Verma",
            gender: "Female",
            photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
            departmentId: "orthopedics",
            departmentName: "Orthopedics & Joint Replacement",
            specialization: "Senior Orthopedic & Joint Replacement Surgeon",
            qualification: "MBBS, MS (Orthopedics), M.Ch (Ortho - UK)",
            experience: 15,
            rating: 4.8,
            reviewCount: 290,
            consultationFee: "₹750",
            languages: ["English", "Hindi"],
            opdTimings: "Mon - Sat: 10:00 AM - 02:00 PM, 04:30 PM - 06:30 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            about: "A pioneer in sub-vastus minimally invasive total knee and hip replacements, Dr. Rajeshwari Verma enables elderly patients to walk pain-free within 24 hours post-surgery. She also holds specialized training in complex trauma and pelvic fracture reconstruction.",
            expertise: [
                "Robotic & Computer-Assisted Knee Replacement",
                "Total Hip Replacement (Primary & Revision)",
                "Arthroscopic Knee & Shoulder Surgeries",
                "Polytrauma & Fragility Fracture Fixation",
                "Osteoarthritis Pain Management"
            ],
            education: [
                "MBBS - Government Medical College, Nagpur",
                "MS (Orthopedics) - KEM Hospital, Mumbai",
                "M.Ch (Ortho) - University of Dundee, Scotland, United Kingdom"
            ],
            awards: [
                "Women in Surgery Leadership Honor 2024",
                "Orthopedic Surgeon of Merit - IOA 2022"
            ]
        },
        {
            id: "doctor-05",
            name: "Dr. Devendra Mathur",
            gender: "Male",
            photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
            departmentId: "neurology",
            departmentName: "Neurology & Neuro Surgery",
            specialization: "Senior Neurologist & Stroke Specialist",
            qualification: "MBBS, MD (Medicine), DM (Neurology)",
            experience: 17,
            rating: 4.9,
            reviewCount: 380,
            consultationFee: "₹850",
            languages: ["English", "Hindi"],
            opdTimings: "Mon - Fri: 11:00 AM - 04:00 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            about: "Dr. Devendra Mathur heads the Comprehensive Stroke and Neurological Sciences Unit at AIS Hospital. His clinical protocols have significantly minimized post-stroke disability across thousands of patients across Eastern UP and Bihar.",
            expertise: [
                "Hyperacute Ischemic Stroke Interventions",
                "Refractory Epilepsy & Seizure Syndromes",
                "Parkinson's Disease & Dementia Protocols",
                "Peripheral Neuropathy & Myasthenia Gravis",
                "Neuro-rehabilitation & Chronic Headaches"
            ],
            education: [
                "MBBS - Sawai Man Singh Medical College, Jaipur",
                "MD (Internal Medicine) - SMS Medical College, Jaipur",
                "DM (Neurology) - NIMHANS, Bengaluru"
            ],
            awards: [
                "NIMHANS Academic Gold Medalist",
                "Distinguished Neuro Physician - Indian Academy of Neurology"
            ]
        },
        {
            id: "doctor-06",
            name: "Dr. Ananya Mukherjee",
            gender: "Female",
            photo: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80&w=600",
            departmentId: "pediatrics",
            departmentName: "Pediatrics & Neonatology",
            specialization: "Senior Consultant Pediatrician & Neonatologist",
            qualification: "MBBS, MD (Pediatrics), Fellowship in Neonatology",
            experience: 12,
            rating: 5.0,
            reviewCount: 460,
            consultationFee: "₹600",
            languages: ["English", "Hindi", "Bengali"],
            opdTimings: "Mon - Sat: 09:30 AM - 01:30 PM, 05:00 PM - 07:30 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            about: "Known for her soothing bedside manner with young children and parents alike, Dr. Ananya Mukherjee manages both delicate pre-term infants in our Level-III NICU and common childhood infectious and allergic disorders.",
            expertise: [
                "Extreme Preterm Infant Care & Ventilation",
                "Childhood Asthma & Respiratory Allergies",
                "Pediatric Nutritional Guidance & Failure to Thrive",
                "Comprehensive Vaccination Counseling",
                "Childhood Developmental Assessments"
            ],
            education: [
                "MBBS - Medical College, Kolkata",
                "MD (Pediatrics) - Institute of Post Graduate Medical Education & Research, Kolkata",
                "Fellowship in Neonatology - Sir Ganga Ram Hospital, New Delhi"
            ],
            awards: [
                "Best Pediatrician Award - Child Health Foundation 2023",
                "Gold Medalist in Pediatric Clinical Rounds"
            ]
        },
        {
            id: "doctor-07",
            name: "Dr. Tariq Ahmad Khan",
            gender: "Male",
            photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600",
            departmentId: "general-surgery",
            departmentName: "General & Laparoscopic Surgery",
            specialization: "Senior Laparoscopic & GI Surgeon",
            qualification: "MBBS, MS (General Surgery), FMAS, FIAGES",
            experience: 18,
            rating: 4.8,
            reviewCount: 310,
            consultationFee: "₹700",
            languages: ["English", "Hindi", "Urdu"],
            opdTimings: "Mon - Sat: 10:00 AM - 03:00 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            about: "Dr. Tariq Ahmad Khan has performed over 6,500 minimally invasive procedures. His patient-first surgical philosophy ensures minimal pain, near-zero infection rates, and quick discharge protocols for gallbladder, hernia, and appendix surgeries.",
            expertise: [
                "Laparoscopic Gallbladder & Bile Duct Surgeries",
                "Laparoscopic Inguinal & Ventral Hernia Repair",
                "Laser Proctology (Piles, Anal Fissure & Fistula)",
                "Emergency Abdominal Trauma Surgeries",
                "Thyroid & Breast Tumors Resection"
            ],
            education: [
                "MBBS - Jawaharlal Nehru Medical College, AMU, Aligarh",
                "MS (Surgery) - JNMC, AMU, Aligarh",
                "Fellow of Indian Association of Gastrointestinal Endo Surgeons (FIAGES)"
            ],
            awards: [
                "Pioneer in Minimal Access Surgery Award 2022",
                "Surgical Excellence Honor - ASI Uttar Pradesh Chapter"
            ]
        },
        {
            id: "doctor-08",
            name: "Dr. Neha Kulkarni",
            gender: "Female",
            photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=600",
            departmentId: "dermatology",
            departmentName: "Dermatology & Cosmetology",
            specialization: "Consultant Dermatologist & Dermato-Surgeon",
            qualification: "MBBS, MD (Dermatology, Venereology & Leprosy)",
            experience: 11,
            rating: 4.9,
            reviewCount: 240,
            consultationFee: "₹650",
            languages: ["English", "Hindi", "Marathi"],
            opdTimings: "Mon - Sat: 11:00 AM - 02:00 PM, 04:00 PM - 06:30 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            about: "Dr. Neha Kulkarni combines clinical expertise with advanced cosmetic dermatological technologies. She emphasizes holistic skin barrier restoration, evidence-based hair treatments, and tailored protocols for pigmented Indian skin.",
            expertise: [
                "Severe Acne, Rosacea & Pigmentation Disorders",
                "Chronic Psoriasis & Atopic Eczema Care",
                "Hair Loss Diagnostics & Scalp PRP Therapy",
                "Carbon Peel & Laser Skin Rejuvenation",
                "Pediatric Dermatology"
            ],
            education: [
                "MBBS - Seth GS Medical College & KEM Hospital, Mumbai",
                "MD (Dermatology) - Topiwala National Medical College, Mumbai",
                "Certified Dermatosurgeon - IADVL Academy"
            ],
            awards: [
                "Young Dermatologist Research Award 2023",
                "Excellence in Clinical Trichology 2021"
            ]
        },
        {
            id: "doctor-09",
            name: "Dr. Suresh Reddy",
            gender: "Male",
            photo: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=600",
            departmentId: "emergency-medicine",
            departmentName: "Emergency & Critical Care",
            specialization: "Director - Emergency Medicine & Trauma",
            qualification: "MBBS, MEM (Emergency Medicine - George Washington Univ), FACEE",
            experience: 16,
            rating: 5.0,
            reviewCount: 620,
            consultationFee: "₹600",
            languages: ["English", "Hindi", "Telugu"],
            opdTimings: "Emergency Services: 24×7 Available | On-Call Lead",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            about: "Dr. Suresh Reddy leads the 24×7 Emergency & Trauma Center at AIS Hospital. Certified in Advanced Cardiac Life Support (ACLS) and Pediatric Advanced Life Support (PALS), he has overseen triage protocols for over 40,000 emergency admissions.",
            expertise: [
                "Golden Hour Polytrauma Resuscitation",
                "Cardiac Arrest & Advanced Life Support",
                "Acute Sepsis Management & Airway Control",
                "Disaster Medicine & Mass Casualty Protocols",
                "Poisoning, Envenomation & Snake Bite Protocols"
            ],
            education: [
                "MBBS - Osmania Medical College, Hyderabad",
                "Masters in Emergency Medicine - GWU, Washington D.C., USA",
                "Fellow of Academic College of Emergency Experts in India (FACEE)"
            ],
            awards: [
                "National Critical Care Lifesaver Star 2024",
                "Outstanding Humanitarian Service Medal 2020"
            ]
        },
        {
            id: "doctor-10",
            name: "Dr. Manoj Kaushik",
            gender: "Male",
            photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=600",
            departmentId: "ent",
            departmentName: "ENT & Head-Neck Surgery",
            specialization: "Consultant ENT & Skull Base Surgeon",
            qualification: "MBBS, MS (ENT), DNB (Otorhinolaryngology)",
            experience: 13,
            rating: 4.8,
            reviewCount: 215,
            consultationFee: "₹600",
            languages: ["English", "Hindi"],
            opdTimings: "Mon - Sat: 10:00 AM - 01:30 PM, 04:30 PM - 06:30 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            about: "Dr. Manoj Kaushik specializes in micro-ear surgeries for chronic ear discharge, coblation assisted painless tonsillectomy, and endoscopic sinus surgeries for chronic sinusitis and nasal polyps.",
            expertise: [
                "Microscopic Tympanoplasty & Mastoidectomy",
                "Endoscopic Sinus Surgery (FESS) with Navigation",
                "Coblation Adenoid & Tonsil Removal",
                "Vertigo Evaluation & Epley Repositioning",
                "Voice Disorders & Microlaryngeal Surgeries"
            ],
            education: [
                "MBBS - Government Medical College, Amritsar",
                "MS (ENT) - King George's Medical University, Lucknow",
                "DNB Otorhinolaryngology - National Board of Examinations"
            ],
            awards: [
                "Best Paper in Endoscopic Sinus Surgery - AOI 2022",
                "Siddharthnagar Community Health Award"
            ]
        },
        {
            id: "doctor-11",
            name: "Dr. Sunita Rao",
            gender: "Female",
            photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
            departmentId: "ophthalmology",
            departmentName: "Ophthalmology & Eye Care",
            specialization: "Senior Consultant Eye Surgeon & Cataract Specialist",
            qualification: "MBBS, MS (Ophthalmology), FICO (UK)",
            experience: 15,
            rating: 4.9,
            reviewCount: 340,
            consultationFee: "₹550",
            languages: ["English", "Hindi", "Kannada"],
            opdTimings: "Mon - Sat: 09:30 AM - 01:30 PM, 03:30 PM - 05:30 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            about: "Dr. Sunita Rao has performed more than 7,000 successful sutureless micro-incision cataract surgeries (MICS) with multifocal and toric lens implants, granting patients crystal-clear glasses-free vision.",
            expertise: [
                "Micro-Incision Phacoemulsification Cataract Surgery",
                "Premium Trifocal & Toric Intraocular Lens Implants",
                "Medical Retina & Diabetic Retinopathy Injections",
                "Glaucoma Early Filtration Surgeries",
                "Pediatric Refractive Errors & Amblyopia"
            ],
            education: [
                "MBBS - Bangalore Medical College and Research Institute",
                "MS (Ophthalmology) - Regional Institute of Ophthalmology, Chennai",
                "Fellow of International Council of Ophthalmology (FICO - London)"
            ],
            awards: [
                "Vision 2025 Ophthalmic Innovation Star",
                "State Gold Medal in Surgical Ophthalmology"
            ]
        },
        {
            id: "doctor-12",
            name: "Dr. Meenakshi Iyer",
            gender: "Female",
            photo: "https://images.unsplash.com/photo-1594824813572-88f5f4f89d38?auto=format&fit=crop&q=80&w=600",
            departmentId: "radiology",
            departmentName: "Radiology & Imaging Sciences",
            specialization: "Head - Department of Radiology & Imaging",
            qualification: "MBBS, MD (Radiodiagnosis), DNB, FRCR (London)",
            experience: 14,
            rating: 4.9,
            reviewCount: 195,
            consultationFee: "₹700",
            languages: ["English", "Hindi", "Tamil"],
            opdTimings: "Mon - Sat: 09:00 AM - 05:00 PM",
            availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            about: "Dr. Meenakshi Iyer brings world-class radiological acumen to AIS Hospital. Her sub-specialty expertise in Neuro-imaging, Musculoskeletal MRI, and ultrasound-guided interventional procedures guarantees razor-sharp accuracy for clinical diagnoses.",
            expertise: [
                "High-Resolution Neuro & Spine MRI Interpretation",
                "Multiphasic CT Abdomen & Cardiac CT",
                "Color Doppler & Peripheral Vascular Studies",
                "Ultrasound & CT-Guided Biopsies & Drainages",
                "Digital Mammography & Breast USG"
            ],
            education: [
                "MBBS - Madras Medical College, Chennai",
                "MD (Radiodiagnosis) - Christian Medical College (CMC), Vellore",
                "Fellow of the Royal College of Radiologists (FRCR), London, UK"
            ],
            awards: [
                "Distinguished Radiologist of Northern Region 2023",
                "IRIA National Diagnostic Star 2021"
            ]
        }
    ],

    // Hospital Services
    services: [
        {
            id: "emergency-247",
            title: "24×7 Emergency & Trauma Care",
            icon: "ambulance",
            badge: "Always Open 24×7",
            description: "Dedicated trauma resuscitation bays, acute stroke & heart attack pathways, emergency operation theatres, and triage team ready 24 hours a day.",
            features: ["Immediate triage within 60 seconds", "On-site cardiac & trauma resuscitation", "Point-of-Care blood testing & X-ray", "Zero waiting time in critical cases"]
        },
        {
            id: "outpatient-opd",
            title: "Outpatient Consultation (OPD)",
            icon: "user-plus",
            badge: "Mon - Sat (8 AM - 8 PM)",
            description: "Consult with top specialists across 14 medical departments with minimal wait times, digitized health prescriptions, and seamless appointment booking.",
            features: ["Air-conditioned consultation chambers", "Pre-booked slot priority", "Specialist & super-specialist consultations", "Integrated pharmacy & diagnostics"]
        },
        {
            id: "icu-critical",
            title: "Intensive Care Units (ICU / ICCU)",
            icon: "activity",
            badge: "Level-III Multi-Bed ICU",
            description: "High-dependency multi-bed critical care units with 1:1 nurse-to-patient ratio, advanced invasive ventilators, and continuous invasive hemodynamic monitoring.",
            features: ["HEPA-filtered positive pressure cubicles", "24×7 Intensivist coverage", "Intra-aortic balloon pump (IABP)", "Bedside hemodialysis & bronchoscopy"]
        },
        {
            id: "operation-theatre",
            title: "Modular Operation Theatres",
            icon: "shield-check",
            badge: "8 Modular OTs",
            description: "State-of-the-art laminar airflow OTs designed for zero surgical site infections, equipped with 4K endoscopy towers and C-arm fluoroscopy.",
            features: ["Laminar airflow with HEPA filters", "C-arm dynamic X-ray imaging", "Ultra-HD 4K laparoscopy towers", "Integrated central medical gas system"]
        },
        {
            id: "diagnostics-lab",
            title: "NABL Certified Diagnostic Lab",
            icon: "flask-conical",
            badge: "Automated Analyzers",
            description: "High-throughput robotic analyzers processing biochemistry, hematology, immunology, and microbiology with barcoded accuracy.",
            features: ["2-Hour express report turnaround", "Direct SMS & online report access", "Strict bi-level quality controls", "Home sample collection service"]
        },
        {
            id: "radiology-imaging",
            title: "Digital Radiology & MRI / CT",
            icon: "scan-line",
            badge: "1.5T MRI + 128 Slice CT",
            description: "Comprehensive diagnostic medical imaging including ultra-fast silent MRI, low-radiation 128-slice CT, 4D ultrasound, and digital mammography.",
            features: ["Ultra-low radiation dose CT protocols", "Silent scan technology MRI", "High-frequency digital radiography", "Color Doppler ultrasound suites"]
        },
        {
            id: "pharmacy-247",
            title: "24×7 In-House Pharmacy",
            icon: "pill",
            badge: "100% Genuine Medicines",
            description: "Stocking complete emergency medications, surgical consumables, vaccines, and chronic disease drugs with temperature-controlled cold chains.",
            features: ["Round-the-clock availability", "Cold chain maintained biologics & insulin", "Computerized batch verification", "Direct delivery to inpatient rooms"]
        },
        {
            id: "ambulance-fleet",
            title: "Advanced Life Support (ALS) Ambulance",
            icon: "truck",
            badge: "GPS Tracked Fleet",
            description: "Mobile ICUs equipped with transport ventilators, defibrillators, oxygen support, and certified emergency EMT paramedics.",
            features: ["Dedicated GPS emergency dispatch", "Oxygen & ventilator equipped", "Trained paramedics onboard", "Direct hotline: +91 98765 43211"]
        },
        {
            id: "health-checkups",
            title: "Comprehensive Preventive Health Packages",
            icon: "clipboard-check",
            badge: "Personalized Wellness",
            description: "Full body preventive packages tailored for young executives, cardiac patients, women, and senior citizens to catch ailments early.",
            features: ["Same-day comprehensive report", "Doctor consultation review included", "Overnight fasting arrangements", "Custom corporate health drives"]
        },
        {
            id: "physiotherapy-rehab",
            title: "Physiotherapy & Rehabilitation",
            icon: "footprints",
            badge: "Modern Rehab Wing",
            description: "Post-operative orthopedic rehab, stroke recovery, sports injury management, ergonomic therapy, and chronic pain alleviation.",
            features: ["Electrotherapy & ultrasound therapy", "Gait training & balance exercises", "Post-joint replacement mobility protocols", "Dedicated pediatric physiotherapists"]
        },
        {
            id: "dialysis-center",
            title: "Advanced Hemodialysis Center",
            icon: "droplets",
            badge: "RO Water Treated",
            description: "Comfortable dialysis chairs with ultra-pure double-pass RO water filtration, isolated stations for viral markers, and continuous monitoring.",
            features: ["Separate machines for sero-positive cases", "Fistula monitoring & care", "Experienced dialysis technicians", "Entertainment screens for comfort"]
        },
        {
            id: "mother-child",
            title: "Mother & Child Care Wing",
            icon: "heart-handshake",
            badge: "Dedicated LDR Suites",
            description: "Integrated maternal and newborn ecosystem with Level-III NICU, luxury labor rooms, lactation counseling, and pediatric emergency support.",
            features: ["Single-room Labor-Delivery-Recovery (LDR)", "Level-III Neonatal ICU right next door", "Lactation & prenatal yoga workshops", "Newborn hearing & metabolic screening"]
        }
    ],

    // Hospital Facilities
    facilities: [
        {
            title: "Ultra-Modern Multi-Bed ICU",
            tag: "Critical Care",
            description: "State-of-the-art 60-bed intensive care unit with isolated cubicles, motorized beds, and central monitoring station.",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Modular Surgical Operation Theatres",
            tag: "Surgical Excellence",
            description: "Laminar airflow HEPA filtered surgical suites equipped with 4K laparoscopic imaging towers and harmonic scalpels.",
            image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Cardiac Catheterization Lab (Cath Lab)",
            tag: "Interventional Cardiology",
            description: "Flat-panel digital cardiac cath lab for angiographies, primary angioplasties, and pacemaker implants with high fidelity imaging.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "1.5 Tesla MRI & 128-Slice CT",
            tag: "Diagnostic Imaging",
            description: "High-resolution cross-sectional whole-body scanners for rapid acute stroke, vascular, and oncological imaging.",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "NABL Certified Automated Diagnostic Lab",
            tag: "Laboratory Medicine",
            description: "Fully automated biochemistry and hematology analyzers with barcoded robotic testing pipelines for zero human error.",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Advanced Life Support (ALS) Ambulance Fleet",
            tag: "Emergency Transport",
            description: "24×7 GPS-dispatched mobile emergency ICUs equipped with transport ventilators, defibrillators, and paramedics.",
            image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "24×7 Licensed Blood Bank & Component Center",
            tag: "Blood Transfusion",
            description: "Approved facility providing packed red blood cells, fresh frozen plasma, and platelets with strict viral screening.",
            image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Executive Inpatient Suites & Private Rooms",
            tag: "Patient Comfort",
            description: "Spacious, hygienic, private suites with attendant couch, Wi-Fi, television, hygienic washrooms, and nurse-call buttons.",
            image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800"
        }
    ],

    // Preventive Health Packages
    healthPackages: [
        {
            name: "Basic Health Screening",
            price: "₹1,499",
            originalPrice: "₹2,500",
            testsCount: "35 Tests",
            popular: false,
            badge: "Essential",
            tests: [
                "Complete Blood Count (CBC) with ESR",
                "Fasting Blood Sugar (FBS)",
                "Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)",
                "Liver Function Test (LFT)",
                "Kidney Function Test (Serum Creatinine, Urea, Uric Acid)",
                "Urine Routine & Microscopic",
                "Physician Consultation"
            ]
        },
        {
            name: "Executive Comprehensive Care",
            price: "₹3,499",
            originalPrice: "₹5,500",
            testsCount: "62 Tests",
            popular: true,
            badge: "Most Popular",
            tests: [
                "All Basic Health Screening Tests",
                "Glycosylated Hemoglobin (HbA1c)",
                "Thyroid Profile (T3, T4, TSH)",
                "Digital Chest X-Ray (PA View)",
                "Resting 12-Lead Electrocardiogram (ECG)",
                "Ultrasound Abdomen & Pelvis (USG)",
                "Vitamin D3 & Vitamin B12 Levels",
                "Consultation with Senior Physician & Dietitian"
            ]
        },
        {
            name: "Senior Citizen Wellness Package",
            price: "₹4,999",
            originalPrice: "₹7,800",
            testsCount: "75 Tests",
            popular: false,
            badge: "Elderly Care",
            tests: [
                "All Executive Comprehensive Tests",
                "2D Echocardiography with Color Doppler",
                "Bone Mineral Density (DEXA Scan)",
                "Prostate Specific Antigen (PSA) for Men / CA-125 for Women",
                "Stool Occult Blood",
                "Audiometry & Vision Screening",
                "Cardiology & Orthopedic Consultations"
            ]
        }
    ],

    // Health Library Articles
    articles: [
        {
            id: "article-01",
            title: "5 Silent Signs of Heart Trouble You Should Never Ignore",
            slug: "silent-signs-heart-trouble",
            category: "Heart Health",
            readTime: "4 min read",
            date: "September 15, 2026",
            author: "Dr. Vikram Singhania",
            authorRole: "Chief Interventional Cardiologist",
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
            summary: "Not all heart episodes present as dramatic chest clutching. Learn how fatigue, breathlessness, jaw pain, and subtle indigestion could indicate an impending cardiac emergency.",
            content: `
                <p class="mb-4">Cardiovascular diseases remain the leading cause of health complications across India. However, many patients assume that a heart attack always strikes with sudden, excruciating left-chest pain. In reality, modern clinical data shows that nearly 30% of cardiac events feature subtle, easily dismissed signs.</p>
                <h4 class="text-lg font-bold text-slate-900 mt-6 mb-3">1. Unexplained Shortness of Breath</h4>
                <p class="mb-4">If climbing a single flight of stairs or doing light household chores leaves you panting when it previously caused no issue, your heart may not be pumping adequate oxygen-rich blood.</p>
                <h4 class="text-lg font-bold text-slate-900 mt-6 mb-3">2. Discomfort Radiating to the Jaw, Neck or Back</h4>
                <p class="mb-4">Cardiac pain nerves share pathways with nerves from the jaw, teeth, upper back, and neck. Unexplained aching or pressure in these areas—especially triggered by exertion—warrants prompt evaluation.</p>
                <h4 class="text-lg font-bold text-slate-900 mt-6 mb-3">3. Unusual Fatigue or Weakness</h4>
                <p class="mb-4">Particularly prevalent in women and diabetic patients, sudden profound exhaustion without any change in physical activity is a common warning sign.</p>
                <h4 class="text-lg font-bold text-slate-900 mt-6 mb-3">When to Seek Emergency Care?</h4>
                <p class="mb-4">If discomfort lasts longer than 10 minutes or is accompanied by cold sweating, dizziness, or nausea, call AIS Hospital's 24×7 emergency helpline immediately at <strong>+91 98765 43210</strong>.</p>
            `
        },
        {
            id: "article-02",
            title: "Understanding Blood Pressure: The Silent Killer Explained",
            slug: "understanding-blood-pressure",
            category: "General Health",
            readTime: "5 min read",
            date: "September 10, 2026",
            author: "Dr. Aarav Sharma",
            authorRole: "Senior Consultant Physician",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
            summary: "High blood pressure usually has zero physical symptoms until organs undergo stress. Understand systolic vs diastolic numbers and actionable steps to maintain a healthy 120/80 mmHg.",
            content: `
                <p class="mb-4">Hypertension is widely labeled the 'silent killer' because it damages arterial walls, kidneys, and eyes without any noticeable outward aches or pains for years.</p>
                <h4 class="text-lg font-bold text-slate-900 mt-6 mb-3">Demystifying the Numbers</h4>
                <p class="mb-4">A standard reading is written as two numbers (e.g., 120/80 mmHg). The upper number represents <strong>Systolic Pressure</strong>—the force with which the heart pumps blood into arteries. The bottom number represents <strong>Diastolic Pressure</strong>—the resting pressure between heartbeats.</p>
                <h4 class="text-lg font-bold text-slate-900 mt-6 mb-3">Daily Habits to Regulate BP</h4>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>Reduce daily salt intake to under 5 grams (approx 1 teaspoon).</li>
                    <li>Engage in 30 minutes of brisk walking at least 5 days a week.</li>
                    <li>Incorporate potassium-rich vegetables like spinach, bananas, and coconut water.</li>
                    <li>Practice 10 minutes of deep diaphragmatic breathing or meditation daily.</li>
                </ul>
            `
        },
        {
            id: "article-03",
            title: "Bone & Joint Care: How to Prevent Knee Damage in Your 40s & 50s",
            slug: "bone-and-joint-health",
            category: "Orthopedics",
            readTime: "4 min read",
            date: "August 28, 2026",
            author: "Dr. Rajeshwari Verma",
            authorRole: "Joint Replacement Specialist",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
            summary: "Joint cartilage begins thinning after age 40. Learn low-impact strengthening exercises, posture corrections, and nutritional guidance to maintain joint mobility.",
            content: `
                <p class="mb-4">Osteoarthritis is one of the most common causes of mobility limitation as we age. Fortunately, proactive adjustments in mid-life can protect knee cartilage and keep surgery far at bay.</p>
                <h4 class="text-lg font-bold text-slate-900 mt-6 mb-3">The Quadriceps Connection</h4>
                <p class="mb-4">Your thigh muscles (quadriceps) act as natural shock absorbers for your knee joints. Simple seated straight-leg raises performed for 5 minutes twice daily strengthen these muscles without placing any compressive load on the joint.</p>
            `
        },
        {
            id: "article-04",
            title: "Diabetes Reversal & Prevention: Evidence-Based Dietary Protocols",
            slug: "diabetes-prevention-lifestyle",
            category: "Diabetes & Endocrinology",
            readTime: "6 min read",
            date: "August 18, 2026",
            author: "Dr. Aarav Sharma",
            authorRole: "Senior Consultant Physician",
            image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800",
            summary: "Type 2 diabetes is largely a metabolic and dietary lifestyle condition. Discover how intermittent meal spacing, muscle building, and fiber intake bring HbA1c below 6.5%.",
            content: `
                <p class="mb-4">India is often dubbed the diabetes capital of the world, but recent clinical research shows that pre-diabetes and early-stage Type 2 diabetes can be put into clinical remission with focused metabolic lifestyle therapies.</p>
            `
        },
        {
            id: "article-05",
            title: "When to Visit an Emergency Department vs Scheduling an OPD Visit",
            slug: "emergency-vs-opd",
            category: "Emergency Medicine",
            readTime: "3 min read",
            date: "August 05, 2026",
            author: "Dr. Suresh Reddy",
            authorRole: "Director - Emergency Medicine",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
            summary: "Unsure whether your health issue requires the Emergency Department or can wait for regular OPD? Here is a practical, life-saving guide for families.",
            content: `
                <p class="mb-4">Knowing when an emergency room visit is critical can save a life, while recognizing routine conditions helps families avoid unnecessary distress.</p>
                <h4 class="text-lg font-bold text-slate-900 mt-6 mb-3">Red Flags Requiring Immediate Emergency:</h4>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>Sudden slurring of speech or facial droop (FAST stroke signs).</li>
                    <li>Crushing central chest tightness or breathlessness.</li>
                    <li>Uncontrolled bleeding or head injury with vomiting.</li>
                    <li>High fever in an infant under 3 months of age.</li>
                    <li>Severe allergic reaction with swelling of lips or throat.</li>
                </ul>
            `
        },
        {
            id: "article-06",
            title: "Complete Antenatal Care: Trimester-by-Trimester Guide for Expectant Mothers",
            slug: "antenatal-care-guide",
            category: "Mother & Child Care",
            readTime: "5 min read",
            date: "July 24, 2026",
            author: "Dr. Priya Patel",
            authorRole: "Senior Consultant Gynecologist",
            image: "https://images.unsplash.com/photo-1594824813572-88f5f4f89d38?auto=format&fit=crop&q=80&w=800",
            summary: "A medically grounded walkthrough of the crucial ultrasounds, blood screens, folic acid supplementation, and fetal movements every mom-to-be must know.",
            content: `
                <p class="mb-4">Every pregnancy is a unique journey. Regular antenatal visits at AIS Hospital ensure both mother and fetus are healthy, identifying any maternal complications well in advance.</p>
            `
        }
    ],

    // Patient Testimonials
    testimonials: [
        {
            name: "Shri Rameshwar Prasad Tiwari",
            location: "Bansi, Siddharthnagar",
            department: "Cardiology",
            doctor: "Dr. Vikram Singhania",
            rating: 5,
            review: "I suffered an acute heart attack at midnight. The AIS Hospital ambulance reached our village in record time. Dr. Singhania performed an emergency stent procedure through my wrist within the golden hour. Today I am back to my normal routine. I owe my life to the AIS team."
        },
        {
            name: "Smt. Sunita Devi Gupta",
            location: "Khalilabad, Sant Kabir Nagar",
            department: "Orthopedics",
            doctor: "Dr. Rajeshwari Verma",
            rating: 5,
            review: "I had severe osteoarthritis in both knees and could not walk for 3 years. Dr. Rajeshwari Verma performed robotic knee replacement with such care. I was able to stand and walk on the very next morning! The nursing staff was exceptionally courteous."
        },
        {
            name: "Mohammad Farooq Ansari",
            location: "Naugarh, Siddharthnagar",
            department: "Neurology",
            doctor: "Dr. Devendra Mathur",
            rating: 5,
            review: "My mother suffered a sudden stroke with right-side weakness. AIS Hospital’s Stroke Emergency protocol administered clot-dissolving medicine within 40 minutes of our arrival. Within 4 days, her speech and hand movement were fully restored. World-class care right in our district."
        },
        {
            name: "Pooja & Amit Jaiswal",
            location: "Basti, Uttar Pradesh",
            department: "Obstetrics & Gynecology",
            doctor: "Dr. Priya Patel",
            rating: 5,
            review: "We chose AIS Hospital for the delivery of our first child. The LDR suite felt like a home away from home. Dr. Priya Patel supported my wife through normal painless delivery with immense patience. Dr. Ananya in Pediatrics checked our baby with genuine love."
        },
        {
            name: "Dinesh Kumar Srivastava",
            location: "Itwa, Siddharthnagar",
            department: "General & Laparoscopic Surgery",
            doctor: "Dr. Tariq Ahmad Khan",
            rating: 5,
            review: "Got my laparoscopic gallbladder stone surgery done here. Admitted in the morning and discharged within 36 hours without any major pain or stitches. The billing was totally transparent with zero surprise costs. Highly recommended."
        },
        {
            name: "Kavita S. Verma",
            location: "Shohratgarh, Siddharthnagar",
            department: "General Medicine",
            doctor: "Dr. Aarav Sharma",
            rating: 5,
            review: "Dr. Aarav Sharma took the time to review all my old reports and explained my diabetes management step-by-step. Under his dietary plan, my HbA1c dropped from 9.4% to 6.2% in six months without heavy medication."
        }
    ],

    // FAQs Categorized
    faqs: [
        {
            category: "Appointments",
            question: "How do I book an OPD appointment at AIS Hospital?",
            answer: "You can book directly through our online appointment system by selecting your preferred department, doctor, and convenient time slot. Alternatively, you can call our OPD appointment desk at +91 1800 123 4567 or visit the registration counter in person."
        },
        {
            category: "Appointments",
            question: "Can I reschedule or cancel my booked appointment?",
            answer: "Yes, you can reschedule or cancel your appointment anytime up to 2 hours before the scheduled time slot by calling our helpline or presenting your Appointment ID at the reception counter."
        },
        {
            category: "Emergency",
            question: "Are emergency and ambulance services available 24 hours a day?",
            answer: "Yes. Our Emergency and Trauma Care Centre operates 24×7, 365 days a year with on-site emergency physicians, critical care nurses, surgical teams, and ALS ambulances. For emergency pickup, call +91 98765 43210 immediately."
        },
        {
            category: "Emergency",
            question: "What is the procedure when arriving at the emergency department?",
            answer: "Upon arrival, patients undergo immediate clinical triage within 60 seconds by our triage nurse to categorize urgency (Red, Yellow, Green). Critical patients receive instant medical stabilization without any paperwork delays."
        },
        {
            category: "Doctors",
            question: "Can I choose my preferred doctor for consultation or surgery?",
            answer: "Absolutely. Our doctors directory allows you to review qualifications, years of experience, patient reviews, and OPD days for all our consultants before booking."
        },
        {
            category: "Billing",
            question: "Do you accept government health schemes like Ayushman Bharat (PM-JAY)?",
            answer: "Yes, AIS Hospital is an empaneled tertiary care provider under Ayushman Bharat (PM-JAY), UP State Employee Health Scheme, and all major Private Health Insurance / TPA networks for cashless hospitalization."
        },
        {
            category: "Billing",
            question: "What payment methods are supported at the hospital?",
            answer: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), Debit and Credit Cards (Visa, MasterCard, RuPay), Net Banking, and direct insurer cashless approvals."
        },
        {
            category: "Diagnostics",
            question: "How can I collect my lab test and radiology scan reports?",
            answer: "Diagnostic reports are sent via SMS with a secure download link once authorized by our pathologist/radiologist. You can also collect physical printed reports directly from the 24×7 Central Lab counter."
        },
        {
            category: "Visitors",
            question: "What are the visiting hours for inpatient wards and ICU?",
            answer: "General Inpatient Wards: 04:30 PM to 07:00 PM daily. ICU / ICCU Visiting Hours: 11:30 AM to 12:30 PM and 05:30 PM to 06:30 PM (restricted to 1 visitor at a time to prevent infection)."
        },
        {
            category: "General",
            question: "Is ample parking and wheelchair assistance available on campus?",
            answer: "Yes, our campus features dedicated 4-wheeler and 2-wheeler parking facilities, ramp access, elevators, and 24×7 wheelchair assistance with trained hospital attendants right at the main porch."
        }
    ]
};

// Make accessible to all scripts
if (typeof window !== "undefined") {
    window.AIS_DATA = AIS_DATA;
}
