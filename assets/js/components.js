/**
 * AIS Hospital - Reusable UI Components
 * Renders consistent, accessible, and responsive components across all pages.
 */

const AIS_COMPONENTS = {
    // Top 24x7 Emergency Bar & Theme Switcher
    renderEmergencyBar() {
        const config = window.AIS_CONFIG || {};
        return `
        <div class="bg-slate-900 text-slate-100 text-xs py-2 px-4 border-b border-slate-800 transition-colors">
            <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-4 flex-wrap">
                    <span class="inline-flex items-center gap-1.5 font-semibold text-red-400">
                        <span class="w-2 h-2 rounded-full bg-red-500 animate-emergency-pulse"></span>
                        24×7 Emergency & Trauma:
                    </span>
                    <a href="tel:${config.emergencyPhone || '+919876543210'}" class="font-bold text-white hover:text-red-300 transition-colors flex items-center gap-1">
                        <i data-lucide="phone-call" class="w-3.5 h-3.5 text-red-400 inline"></i>
                        ${config.emergencyPhone || '+91 98765 43210'}
                    </a>
                    <span class="text-slate-600 hidden sm:inline">|</span>
                    <a href="tel:${config.ambulancePhone || '+919876543211'}" class="text-slate-300 hover:text-white transition-colors hidden md:flex items-center gap-1">
                        <i data-lucide="ambulance" class="w-3.5 h-3.5 text-amber-400 inline"></i>
                        Ambulance: ${config.ambulancePhone || '+91 98765 43211'}
                    </a>
                    <span class="text-slate-600 hidden lg:inline">|</span>
                    <span class="text-slate-400 hidden lg:inline flex items-center gap-1">
                        <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400 inline"></i>
                        NABH Accredited Tertiary Hospital
                    </span>
                </div>

                <div class="flex items-center gap-3 ml-auto">
                    <!-- Theme Switcher Pills -->
                    <div class="flex items-center gap-1.5 bg-slate-800/80 px-2 py-1 rounded-full border border-slate-700">
                        <span class="text-[11px] text-slate-400 font-medium pl-1 hidden sm:inline">Theme:</span>
                        <button type="button" onclick="AIS_THEME.setTheme('teal')" data-theme-val="teal" class="theme-select-btn w-4 h-4 rounded-full bg-[#0F766E] border border-white/40 title='Medical Teal'" title="Medical Teal"></button>
                        <button type="button" onclick="AIS_THEME.setTheme('green')" data-theme-val="green" class="theme-select-btn w-4 h-4 rounded-full bg-[#15803D] border border-white/40 title='Indian Medical Green'" title="Indian Medical Green"></button>
                        <button type="button" onclick="AIS_THEME.setTheme('blue')" data-theme-val="blue" class="theme-select-btn w-4 h-4 rounded-full bg-[#1D4ED8] border border-white/40 title='Royal Medical Blue'" title="Royal Medical Blue"></button>
                    </div>

                    <a href="login.html" class="text-slate-300 hover:text-white font-medium text-xs flex items-center gap-1 py-0.5 px-2 rounded bg-slate-800 hover:bg-slate-700 transition">
                        <i data-lucide="lock" class="w-3 h-3 text-slate-400"></i>
                        <span>Staff Portal</span>
                    </a>
                </div>
            </div>
        </div>
        `;
    },

    // Global Header & Navigation
    renderHeader(activePage = "") {
        const config = window.AIS_CONFIG || {};
        const navLinks = [
            { id: "home", label: "Home", href: "index.html" },
            { id: "about", label: "About", href: "about.html" },
            { id: "departments", label: "Departments", href: "departments.html" },
            { id: "doctors", label: "Doctors", href: "doctors.html" },
            { id: "services", label: "Services", href: "services.html" },
            { id: "facilities", label: "Facilities", href: "facilities.html" },
            { id: "health-library", label: "Health Library", href: "health-library.html" },
            { id: "contact", label: "Contact", href: "contact.html" }
        ];

        return `
        <header id="site-header" class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <!-- Brand Logo -->
                    <a href="index.html" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1">
                        <div class="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
                            <i data-lucide="cross" class="w-6 h-6 stroke-[2.5]"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xl font-bold tracking-tight text-slate-900 font-heading leading-tight group-hover:text-primary transition-colors">
                                ${config.hospitalName || 'AIS Hospital'}
                            </span>
                            <span class="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                                ${config.tagline || 'Advanced Care. Trusted Hands.'}
                            </span>
                        </div>
                    </a>

                    <!-- Desktop Nav Links -->
                    <nav class="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
                        ${navLinks.map(link => {
                            const isActive = activePage === link.id;
                            return `
                                <a href="${link.href}" 
                                   class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                                       isActive 
                                           ? 'text-primary bg-primary-50 font-bold' 
                                           : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                                   }">
                                    ${link.label}
                                </a>
                            `;
                        }).join("")}

                        <a href="emergency.html" 
                           class="px-3 py-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg flex items-center gap-1.5 transition-colors ${activePage === 'emergency' ? 'bg-red-50 font-bold' : ''}">
                            <i data-lucide="alert-circle" class="w-4 h-4"></i>
                            <span>Emergency</span>
                        </a>
                    </nav>

                    <!-- Desktop Action Buttons -->
                    <div class="hidden lg:flex items-center gap-3">
                        <a href="appointment.html" 
                           class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm shadow-primary/25 hover:shadow-md hover:shadow-primary/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-primary">
                            <i data-lucide="calendar" class="w-4 h-4"></i>
                            <span>Book Appointment</span>
                        </a>
                    </div>

                    <!-- Mobile Menu Hamburger Button -->
                    <div class="flex items-center gap-2 lg:hidden">
                        <a href="appointment.html" 
                           class="inline-flex items-center justify-center p-2 rounded-lg bg-primary text-white text-xs font-semibold shadow-sm">
                            <i data-lucide="calendar" class="w-4 h-4 mr-1"></i> Book
                        </a>
                        <button id="mobile-menu-btn" 
                                type="button" 
                                aria-label="Toggle Navigation Menu"
                                aria-expanded="false" 
                                class="p-2.5 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 ring-primary">
                            <i data-lucide="menu" class="w-6 h-6"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Navigation Drawer -->
            <div id="mobile-nav-drawer" class="hidden lg:hidden border-t border-slate-100 bg-white shadow-xl transition-all">
                <div class="px-4 pt-3 pb-6 space-y-1">
                    ${navLinks.map(link => {
                        const isActive = activePage === link.id;
                        return `
                            <a href="${link.href}" 
                               class="block px-3 py-2.5 rounded-lg text-base font-medium ${
                                   isActive 
                                       ? 'text-primary bg-primary-50 font-bold' 
                                       : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                               }">
                                ${link.label}
                            </a>
                        `;
                    }).join("")}

                    <a href="emergency.html" 
                       class="block px-3 py-2.5 rounded-lg text-base font-semibold text-red-600 bg-red-50 hover:bg-red-100 flex items-center gap-2">
                        <i data-lucide="alert-circle" class="w-5 h-5"></i>
                        <span>24×7 Emergency Protocol</span>
                    </a>

                    <div class="pt-4 mt-2 border-t border-slate-100 space-y-3">
                        <a href="appointment.html" 
                           class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-xl shadow-md">
                            <i data-lucide="calendar" class="w-4 h-4"></i>
                            <span>Book An Appointment</span>
                        </a>

                        <div class="flex items-center justify-between px-2 pt-2 text-xs text-slate-500">
                            <span>Emergency Helpline:</span>
                            <a href="tel:${config.emergencyPhone || '+919876543210'}" class="font-bold text-red-600">
                                ${config.emergencyPhone || '+91 98765 43210'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `;
    },

    // Global Footer
    renderFooter() {
        const config = window.AIS_CONFIG || {};
        return `
        <footer class="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    <!-- Column 1: Hospital Overview -->
                    <div class="lg:col-span-2 space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md">
                                <i data-lucide="cross" class="w-6 h-6 stroke-[2.5]"></i>
                            </div>
                            <span class="text-xl font-bold tracking-tight text-white font-heading">
                                ${config.hospitalName || 'AIS Hospital'}
                            </span>
                        </div>
                        <p class="text-sm text-slate-400 leading-relaxed max-w-sm">
                            ${config.subtagline || 'Compassionate healthcare backed by experienced doctors, modern technology, and patient-first care.'}
                        </p>
                        <div class="space-y-2 text-xs text-slate-400 pt-2">
                            <p class="flex items-start gap-2">
                                <i data-lucide="map-pin" class="w-4 h-4 text-primary shrink-0 mt-0.5"></i>
                                <span>${config.address}</span>
                            </p>
                            <p class="flex items-center gap-2">
                                <i data-lucide="phone" class="w-4 h-4 text-primary shrink-0"></i>
                                <span>OPD Helpline: ${config.phone}</span>
                            </p>
                            <p class="flex items-center gap-2">
                                <i data-lucide="mail" class="w-4 h-4 text-primary shrink-0"></i>
                                <span>${config.email}</span>
                            </p>
                        </div>

                        <!-- Accreditation Badges -->
                        <div class="pt-2 flex flex-wrap gap-2">
                            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 text-emerald-400 text-[11px] font-semibold border border-slate-700">
                                <i data-lucide="badge-check" class="w-3.5 h-3.5"></i> NABH Accredited
                            </span>
                            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 text-cyan-400 text-[11px] font-semibold border border-slate-700">
                                <i data-lucide="flask-conical" class="w-3.5 h-3.5"></i> NABL Certified Lab
                            </span>
                        </div>
                    </div>

                    <!-- Column 2: Quick Links -->
                    <div class="space-y-3">
                        <h4 class="text-white text-sm font-bold uppercase tracking-wider font-heading">Quick Links</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="about.html" class="hover:text-white transition-colors">About Hospital</a></li>
                            <li><a href="doctors.html" class="hover:text-white transition-colors">Find a Doctor</a></li>
                            <li><a href="departments.html" class="hover:text-white transition-colors">All Departments</a></li>
                            <li><a href="services.html" class="hover:text-white transition-colors">Hospital Services</a></li>
                            <li><a href="facilities.html" class="hover:text-white transition-colors">Infrastructure & OTs</a></li>
                            <li><a href="health-library.html" class="hover:text-white transition-colors">Health Library</a></li>
                            <li><a href="faq.html" class="hover:text-white transition-colors">Patient FAQs</a></li>
                        </ul>
                    </div>

                    <!-- Column 3: Clinical Specialties -->
                    <div class="space-y-3">
                        <h4 class="text-white text-sm font-bold uppercase tracking-wider font-heading">Specialties</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="departments.html#cardiology" class="hover:text-white transition-colors">Cardiology & Cath Lab</a></li>
                            <li><a href="departments.html#orthopedics" class="hover:text-white transition-colors">Orthopedics & Joint Care</a></li>
                            <li><a href="departments.html#neurology" class="hover:text-white transition-colors">Neurology & Stroke Unit</a></li>
                            <li><a href="departments.html#general-medicine" class="hover:text-white transition-colors">General Medicine & Diabetes</a></li>
                            <li><a href="departments.html#gynecology" class="hover:text-white transition-colors">Obstetrics & Gynecology</a></li>
                            <li><a href="departments.html#pediatrics" class="hover:text-white transition-colors">Pediatrics & Level-III NICU</a></li>
                            <li><a href="departments.html#general-surgery" class="hover:text-white transition-colors">Laparoscopic Surgery</a></li>
                        </ul>
                    </div>

                    <!-- Column 4: Emergency & Portals -->
                    <div class="space-y-3">
                        <h4 class="text-white text-sm font-bold uppercase tracking-wider font-heading text-red-400">Emergency 24×7</h4>
                        <div class="bg-red-950/40 border border-red-800/60 rounded-xl p-3.5 space-y-2">
                            <p class="text-xs text-red-200">
                                Immediate medical dispatch & critical care response available round-the-clock.
                            </p>
                            <a href="tel:${config.emergencyPhone || '+919876543210'}" class="inline-flex items-center gap-1.5 text-white font-bold text-sm bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg w-full justify-center transition">
                                <i data-lucide="phone-call" class="w-4 h-4"></i> Call Emergency
                            </a>
                        </div>
                        <div class="pt-2 space-y-1.5 text-xs text-slate-400">
                            <p class="font-semibold text-slate-300">Staff & Clinical Portals (V2)</p>
                            <div class="flex flex-wrap gap-2">
                                <a href="doctor-panel.html" class="hover:text-white underline">Doctor Panel</a>
                                <span>•</span>
                                <a href="nurse-panel.html" class="hover:text-white underline">Nurse Panel</a>
                                <span>•</span>
                                <a href="manager-panel.html" class="hover:text-white underline">Manager Panel</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Copyright & Legal -->
                <div class="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© ${new Date().getFullYear()} ${config.hospitalName || 'AIS Hospital'}. All rights reserved. Registered under UP Clinical Establishments Act.</p>
                    <div class="flex items-center gap-6">
                        <a href="faq.html" class="hover:text-slate-400 transition">Terms of Service</a>
                        <a href="faq.html" class="hover:text-slate-400 transition">Privacy Policy</a>
                        <a href="contact.html" class="hover:text-slate-400 transition">Sitemap & Contact</a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    },

    // Doctor Card Component
    renderDoctorCard(doctor) {
        return `
        <div class="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col card-hover" data-department="${doctor.departmentId}">
            <div class="relative h-64 bg-slate-100 overflow-hidden group">
                <img src="${doctor.photo}" 
                     alt="${doctor.name}" 
                     loading="lazy" 
                     class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-600 shadow-sm flex items-center gap-1">
                    <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500 text-amber-500"></i>
                    <span>${doctor.rating}</span>
                    <span class="text-slate-400 font-normal">(${doctor.reviewCount})</span>
                </div>
                <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-white">
                    ${doctor.experience}+ Years Experience
                </div>
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <span class="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
                        ${doctor.departmentName}
                    </span>
                    <h3 class="text-lg font-bold text-slate-900 font-heading hover:text-primary transition-colors">
                        <a href="doctor-profile.html?id=${doctor.id}">${doctor.name}</a>
                    </h3>
                    <p class="text-xs text-slate-500 font-medium mt-0.5">${doctor.qualification}</p>
                    <p class="text-xs text-slate-600 mt-2 line-clamp-2">${doctor.specialization}</p>
                </div>

                <div class="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div class="flex items-center justify-between">
                        <span class="text-slate-500 flex items-center gap-1">
                            <i data-lucide="clock" class="w-3.5 h-3.5 text-primary"></i> OPD Hours:
                        </span>
                        <span class="font-medium text-slate-800 text-right">${doctor.opdTimings.split(',')[0]}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-slate-500 flex items-center gap-1">
                            <i data-lucide="credit-card" class="w-3.5 h-3.5 text-primary"></i> Consultation:
                        </span>
                        <span class="font-bold text-slate-900">${doctor.consultationFee}</span>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-2 pt-1">
                    <a href="doctor-profile.html?id=${doctor.id}" 
                       class="inline-flex items-center justify-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 py-2.5 px-3 rounded-xl transition">
                        View Profile
                    </a>
                    <a href="appointment.html?doctorId=${doctor.id}" 
                       class="inline-flex items-center justify-center text-xs font-semibold text-white bg-primary hover:bg-primary-dark py-2.5 px-3 rounded-xl shadow-sm transition">
                        Book Now
                    </a>
                </div>
            </div>
        </div>
        `;
    },

    // Department Card Component
    renderDepartmentCard(dept) {
        return `
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm card-hover flex flex-col justify-between" id="${dept.id}">
            <div>
                <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-4">
                    <i data-lucide="${dept.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-900 font-heading mb-2">
                    ${dept.name}
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed mb-4">
                    ${dept.shortDesc}
                </p>

                <div class="space-y-1.5 mb-5">
                    <span class="text-xs font-bold text-slate-700 uppercase tracking-wider block">Key Highlights:</span>
                    <ul class="text-xs text-slate-600 space-y-1">
                        ${dept.keyTreatments.slice(0, 3).map(t => `
                            <li class="flex items-start gap-1.5">
                                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i>
                                <span>${t}</span>
                            </li>
                        `).join("")}
                    </ul>
                </div>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs font-medium text-slate-500">
                    <strong class="text-slate-800">${dept.doctorCount}</strong> Specialists
                </span>
                <a href="doctors.html?dept=${dept.id}" class="text-xs font-bold text-primary hover:text-primary-dark flex items-center gap-1 group">
                    <span>View Doctors</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"></i>
                </a>
            </div>
        </div>
        `;
    },

    // Service Card Component
    renderServiceCard(service) {
        return `
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm card-hover flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
                        <i data-lucide="${service.icon}" class="w-6 h-6"></i>
                    </div>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        ${service.badge}
                    </span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 font-heading mb-2">
                    ${service.title}
                </h3>
                <p class="text-sm text-slate-600 leading-relaxed mb-4">
                    ${service.description}
                </p>
                <ul class="text-xs text-slate-600 space-y-1.5 mb-4">
                    ${service.features.map(f => `
                        <li class="flex items-center gap-1.5">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
                            <span>${f}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>
            <div class="pt-4 border-t border-slate-100">
                <a href="appointment.html" class="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark">
                    <span>Inquire or Book</span>
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                </a>
            </div>
        </div>
        `;
    },

    // Facility Card Component
    renderFacilityCard(facility) {
        return `
        <div class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm card-hover flex flex-col">
            <div class="h-48 overflow-hidden relative group">
                <img src="${facility.image}" 
                     alt="${facility.title}" 
                     loading="lazy" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                    ${facility.tag}
                </span>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-base font-bold text-slate-900 font-heading mb-1.5">
                        ${facility.title}
                    </h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        ${facility.description}
                    </p>
                </div>
            </div>
        </div>
        `;
    },

    // Health Article Card Component
    renderArticleCard(article) {
        return `
        <article class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm card-hover flex flex-col justify-between">
            <div>
                <div class="h-48 overflow-hidden relative group">
                    <img src="${article.image}" 
                         alt="${article.title}" 
                         loading="lazy" 
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <span class="absolute top-3 left-3 bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                        ${article.category}
                    </span>
                </div>
                <div class="p-5">
                    <div class="flex items-center gap-2 text-xs text-slate-400 mb-2">
                        <span>${article.date}</span>
                        <span>•</span>
                        <span>${article.readTime}</span>
                    </div>
                    <h3 class="text-base font-bold text-slate-900 font-heading mb-2 leading-snug line-clamp-2 hover:text-primary transition-colors">
                        <a href="health-library.html#${article.slug}">${article.title}</a>
                    </h3>
                    <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        ${article.summary}
                    </p>
                </div>
            </div>

            <div class="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-100 pt-3">
                <span class="text-xs font-medium text-slate-600">By ${article.author}</span>
                <a href="health-library.html#${article.slug}" class="text-xs font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </a>
            </div>
        </article>
        `;
    }
};

// Global Toast System
function showToast(message, type = "info", duration = 4000) {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast-msg toast-${type}`;

    let iconName = "info";
    if (type === "success") iconName = "check-circle";
    if (type === "error") iconName = "alert-circle";

    toast.innerHTML = `
        <i data-lucide="${iconName}" class="w-5 h-5 shrink-0 ${type === 'success' ? 'text-emerald-600' : type === 'error' ? 'text-red-600' : 'text-primary'}"></i>
        <div class="text-xs text-slate-800 font-medium flex-1">${message}</div>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 350);
    }, duration);
}

// Make accessible
if (typeof window !== "undefined") {
    window.AIS_COMPONENTS = AIS_COMPONENTS;
    window.showToast = showToast;
}
