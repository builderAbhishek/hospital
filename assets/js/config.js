/**
 * AIS Hospital - Centralized White-Label Configuration
 * Change values here to easily customize the entire hospital website identity.
 */
const AIS_CONFIG = {
    hospitalName: "AIS Hospital",
    shortName: "AIS",
    tagline: "Advanced Care. Trusted Hands.",
    subtagline: "Compassionate healthcare backed by experienced doctors, modern technology, and patient-first care.",
    phone: "+91 1800 123 4567",
    emergencyPhone: "+91 98765 43210",
    ambulancePhone: "+91 98765 43211",
    email: "care@aishospital.in",
    opdEmail: "appointments@aishospital.in",
    address: "Medical Enclave, Civil Lines, Siddharthnagar, Uttar Pradesh 272207, India",
    landmark: "Opposite District Sports Stadium, Near NH-28 By-pass",
    workingHours: "OPD: Mon - Sat 08:00 AM - 08:00 PM",
    emergencyHours: "24×7 Emergency & Critical Trauma Care Always Open",
    theme: "teal", // Options: 'teal' (Medical Teal), 'green' (Indian Medical Green), 'blue' (Royal Medical Blue)
    currency: "₹",
    socialLinks: {
        facebook: "https://facebook.com/aishospital",
        twitter: "https://twitter.com/aishospital",
        instagram: "https://instagram.com/aishospital",
        linkedin: "https://linkedin.com/company/aishospital",
        youtube: "https://youtube.com/aishospital"
    },
    stats: {
        yearsOfCare: "25+",
        expertDoctors: "50+",
        specialties: "20+",
        patientsServed: "1L+",
        icuBeds: "60+",
        operationTheatres: "8 Modular OTs",
        satisfactionRate: "99.2%"
    },
    certifications: [
        "NABH Accredited Tertiary Care Hospital",
        "NABL Certified Automated Diagnostic Laboratories",
        "ISO 9001:2015 Healthcare Quality Standard"
    ]
};

// Make accessible to all modules
if (typeof window !== "undefined") {
    window.AIS_CONFIG = AIS_CONFIG;
}
