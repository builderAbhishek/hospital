/**
 * AIS Hospital - Main Application Orchestrator
 * Injects shared components, handles filters, initializes Lucide & AOS,
 * dynamic doctor profiles, and page interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Reusable Components
    initSharedLayout();

    // 2. Initialize Icons & Animations
    if (window.lucide) {
        window.lucide.createIcons();
    }
    if (window.AOS) {
        window.AOS.init({
            duration: 650,
            once: true,
            offset: 40,
            easing: "ease-out-cubic"
        });
    }

    // 3. Initialize Mobile Menu
    initMobileNavigation();

    // 4. Page Specific Handlers
    const pageId = document.body.getAttribute("data-page");

    if (pageId === "doctors") {
        initDoctorsDirectory();
    } else if (pageId === "doctor-profile") {
        initDoctorProfilePage();
    } else if (pageId === "departments") {
        initDepartmentsDirectory();
    } else if (pageId === "faq") {
        initFAQPage();
    } else if (pageId === "health-library") {
        initHealthLibrary();
    } else if (pageId === "contact") {
        initContactForm();
    }

    // 5. Back to Top Button
    initBackToTop();
});

// Injects Header, Emergency Bar, and Footer
function initSharedLayout() {
    const pageId = document.body.getAttribute("data-page") || "";

    const emgPlaceholder = document.getElementById("emergency-bar-placeholder");
    if (emgPlaceholder && window.AIS_COMPONENTS) {
        emgPlaceholder.outerHTML = window.AIS_COMPONENTS.renderEmergencyBar();
    }

    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder && window.AIS_COMPONENTS) {
        headerPlaceholder.outerHTML = window.AIS_COMPONENTS.renderHeader(pageId);
    }

    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder && window.AIS_COMPONENTS) {
        footerPlaceholder.outerHTML = window.AIS_COMPONENTS.renderFooter();
    }
}

// Mobile Menu Toggle
function initMobileNavigation() {
    const btn = document.getElementById("mobile-menu-btn");
    const drawer = document.getElementById("mobile-nav-drawer");

    if (btn && drawer) {
        btn.addEventListener("click", () => {
            const isHidden = drawer.classList.contains("hidden");
            if (isHidden) {
                drawer.classList.remove("hidden");
                btn.setAttribute("aria-expanded", "true");
            } else {
                drawer.classList.add("hidden");
                btn.setAttribute("aria-expanded", "false");
            }
        });
    }
}

// Doctors Page Directory Handler (Search & Filter)
function initDoctorsDirectory() {
    const grid = document.getElementById("doctors-grid");
    const deptSelect = document.getElementById("doctor-dept-filter");
    const searchInput = document.getElementById("doctor-search-input");
    const countBadge = document.getElementById("doctor-results-count");
    if (!grid) return;

    const allDoctors = (window.AIS_DATA && window.AIS_DATA.doctors) || [];
    const allDepts = (window.AIS_DATA && window.AIS_DATA.departments) || [];

    // Populate dept filter dropdown
    if (deptSelect) {
        deptSelect.innerHTML = `<option value="all">All Departments</option>` +
            allDepts.map(d => `<option value="${d.id}">${d.name}</option>`).join("");

        // Check URL parameter for initial dept
        const urlParams = new URLSearchParams(window.location.search);
        const initialDept = urlParams.get("dept");
        if (initialDept) {
            deptSelect.value = initialDept;
        }
    }

    function renderFilteredDoctors() {
        const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
        const selectedDept = (deptSelect ? deptSelect.value : "all");

        const matches = allDoctors.filter(doc => {
            const matchesDept = (selectedDept === "all" || doc.departmentId === selectedDept);
            const matchesQuery = !query ||
                doc.name.toLowerCase().includes(query) ||
                doc.specialization.toLowerCase().includes(query) ||
                doc.departmentName.toLowerCase().includes(query) ||
                doc.qualification.toLowerCase().includes(query);
            return matchesDept && matchesQuery;
        });

        if (countBadge) {
            countBadge.textContent = `Showing ${matches.length} Doctor${matches.length !== 1 ? 's' : ''}`;
        }

        if (matches.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
                    <i data-lucide="user-x" class="w-12 h-12 text-slate-400 mx-auto mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 font-heading">No doctors found</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Try adjusting your search criteria or clearing department filters.</p>
                    <button type="button" onclick="document.getElementById('doctor-search-input').value=''; document.getElementById('doctor-dept-filter').value='all'; document.getElementById('doctor-dept-filter').dispatchEvent(new Event('change'));" 
                            class="mt-4 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg">
                        Reset Filters
                    </button>
                </div>
            `;
        } else {
            grid.innerHTML = matches.map(doc => window.AIS_COMPONENTS.renderDoctorCard(doc)).join("");
        }

        if (window.lucide) window.lucide.createIcons();
    }

    if (deptSelect) deptSelect.addEventListener("change", renderFilteredDoctors);
    if (searchInput) searchInput.addEventListener("input", renderFilteredDoctors);

    // Initial render
    renderFilteredDoctors();
}

// Doctor Profile Dynamic Page Handler
function initDoctorProfilePage() {
    const profileContainer = document.getElementById("doctor-profile-container");
    if (!profileContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get("id") || "doctor-01";

    const allDoctors = (window.AIS_DATA && window.AIS_DATA.doctors) || [];
    const doc = allDoctors.find(d => d.id === doctorId) || allDoctors[0];

    if (!doc) {
        profileContainer.innerHTML = `<p class="p-8 text-center text-red-500">Doctor not found.</p>`;
        return;
    }

    // Update document title for SEO
    document.title = `${doc.name} - ${doc.specialization} | AIS Hospital`;

    profileContainer.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <!-- Breadcrumbs -->
            <nav class="flex items-center gap-2 text-xs text-slate-500 mb-6">
                <a href="index.html" class="hover:text-primary">Home</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                <a href="doctors.html" class="hover:text-primary">Doctors</a>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                <span class="text-slate-800 font-semibold">${doc.name}</span>
            </nav>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Left Column: Doctor Card & Quick Action -->
                <div class="lg:col-span-1 space-y-6">
                    <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm overflow-hidden text-center">
                        <div class="w-44 h-44 mx-auto rounded-2xl overflow-hidden shadow-md mb-5 border-2 border-slate-100">
                            <img src="${doc.photo}" alt="${doc.name}" class="w-full h-full object-cover object-top">
                        </div>
                        <span class="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-bold rounded-full mb-2 uppercase tracking-wider">
                            ${doc.departmentName}
                        </span>
                        <h1 class="text-2xl font-bold text-slate-900 font-heading">${doc.name}</h1>
                        <p class="text-xs text-slate-500 font-semibold mt-1">${doc.qualification}</p>
                        <p class="text-sm text-primary font-medium mt-1">${doc.specialization}</p>

                        <div class="mt-4 pt-4 border-t border-slate-100 flex items-center justify-around text-xs text-slate-600">
                            <div>
                                <span class="block font-bold text-slate-900 text-sm">${doc.experience}+ Yrs</span>
                                <span class="text-slate-400">Experience</span>
                            </div>
                            <div class="border-l border-slate-200 pl-4">
                                <span class="block font-bold text-amber-600 text-sm flex items-center justify-center gap-1">
                                    <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500 text-amber-500"></i> ${doc.rating}
                                </span>
                                <span class="text-slate-400">(${doc.reviewCount} Reviews)</span>
                            </div>
                            <div class="border-l border-slate-200 pl-4">
                                <span class="block font-bold text-slate-900 text-sm">${doc.consultationFee}</span>
                                <span class="text-slate-400">Consultation</span>
                            </div>
                        </div>

                        <div class="mt-6">
                            <a href="appointment.html?doctorId=${doc.id}" 
                               class="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">
                                <i data-lucide="calendar" class="w-4 h-4"></i>
                                <span>Book Appointment</span>
                            </a>
                        </div>
                    </div>

                    <!-- OPD Schedule Card -->
                    <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
                        <h4 class="text-sm font-bold text-slate-900 font-heading uppercase tracking-wider flex items-center gap-2 mb-4">
                            <i data-lucide="clock" class="w-4 h-4 text-primary"></i> OPD Consultation Schedule
                        </h4>
                        <div class="space-y-2 text-xs">
                            <div class="flex justify-between py-1.5 border-b border-slate-100">
                                <span class="text-slate-500">Consultation Days:</span>
                                <span class="font-semibold text-slate-800 text-right">${doc.availableDays.join(", ")}</span>
                            </div>
                            <div class="flex justify-between py-1.5 border-b border-slate-100">
                                <span class="text-slate-500">Timings:</span>
                                <span class="font-semibold text-slate-800 text-right">${doc.opdTimings}</span>
                            </div>
                            <div class="flex justify-between py-1.5">
                                <span class="text-slate-500">Languages Spoken:</span>
                                <span class="font-semibold text-slate-800 text-right">${doc.languages.join(", ")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Biography, Expertise, Education, Awards -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- About Section -->
                    <div class="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 font-heading mb-3">About ${doc.name}</h3>
                        <p class="text-sm text-slate-600 leading-relaxed">${doc.about}</p>
                    </div>

                    <!-- Clinical Expertise -->
                    <div class="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 font-heading mb-4 flex items-center gap-2">
                            <i data-lucide="check-circle-2" class="w-5 h-5 text-primary"></i> Areas of Clinical Expertise
                        </h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            ${doc.expertise.map(exp => `
                                <div class="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                                    <span>${exp}</span>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Education & Credentials -->
                    <div class="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 font-heading mb-4 flex items-center gap-2">
                            <i data-lucide="graduation-cap" class="w-5 h-5 text-primary"></i> Education & Fellowship
                        </h3>
                        <ul class="space-y-3">
                            ${doc.education.map(edu => `
                                <li class="flex items-start gap-3 text-xs text-slate-700">
                                    <span class="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                                    <span class="font-medium">${edu}</span>
                                </li>
                            `).join("")}
                        </ul>
                    </div>

                    <!-- Awards & Honors -->
                    <div class="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                        <h3 class="text-lg font-bold text-slate-900 font-heading mb-4 flex items-center gap-2">
                            <i data-lucide="award" class="w-5 h-5 text-amber-500"></i> Honors & Professional Recognition
                        </h3>
                        <ul class="space-y-2">
                            ${doc.awards.map(awd => `
                                <li class="flex items-center gap-2.5 text-xs text-slate-700 bg-amber-50/50 p-2.5 rounded-lg border border-amber-200/60">
                                    <i data-lucide="medal" class="w-4 h-4 text-amber-600 shrink-0"></i>
                                    <span>${awd}</span>
                                </li>
                            `).join("")}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    if (window.lucide) window.lucide.createIcons();
}

// Departments Directory Page Handler
function initDepartmentsDirectory() {
    const grid = document.getElementById("departments-grid");
    const searchInput = document.getElementById("department-search-input");
    if (!grid) return;

    const allDepts = (window.AIS_DATA && window.AIS_DATA.departments) || [];

    function render(depts) {
        if (depts.length === 0) {
            grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500">No departments match your search.</div>`;
        } else {
            grid.innerHTML = depts.map(d => window.AIS_COMPONENTS.renderDepartmentCard(d)).join("");
        }
        if (window.lucide) window.lucide.createIcons();
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            const filtered = allDepts.filter(d => 
                d.name.toLowerCase().includes(query) ||
                d.shortDesc.toLowerCase().includes(query) ||
                d.keyTreatments.some(t => t.toLowerCase().includes(query))
            );
            render(filtered);
        });
    }

    render(allDepts);
}

// FAQ Page Handler (Tabs & Accordion)
function initFAQPage() {
    const faqContainer = document.getElementById("faq-accordion-container");
    const categoryTabs = document.querySelectorAll(".faq-category-tab");
    const searchInput = document.getElementById("faq-search-input");
    if (!faqContainer) return;

    const allFaqs = (window.AIS_DATA && window.AIS_DATA.faqs) || [];
    let currentCategory = "All";

    function renderFAQs() {
        const query = (searchInput ? searchInput.value : "").trim().toLowerCase();

        const filtered = allFaqs.filter(item => {
            const matchesCat = (currentCategory === "All" || item.category === currentCategory);
            const matchesQuery = !query ||
                item.question.toLowerCase().includes(query) ||
                item.answer.toLowerCase().includes(query);
            return matchesCat && matchesQuery;
        });

        if (filtered.length === 0) {
            faqContainer.innerHTML = `<div class="text-center py-12 text-slate-500 text-sm">No answers found for your query. Please call Helpline: 1800 123 4567.</div>`;
            return;
        }

        faqContainer.innerHTML = filtered.map((faq, index) => `
            <div class="faq-item bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm transition">
                <button type="button" 
                        class="faq-header w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-800 hover:text-primary transition focus:outline-none"
                        aria-expanded="false">
                    <span class="flex items-center gap-2">
                        <span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">${faq.category}</span>
                        <span>${faq.question}</span>
                    </span>
                    <i data-lucide="chevron-down" class="faq-icon w-4 h-4 text-slate-400 shrink-0"></i>
                </button>
                <div class="faq-content px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    ${faq.answer}
                </div>
            </div>
        `).join("");

        if (window.lucide) window.lucide.createIcons();

        // Setup accordion click
        faqContainer.querySelectorAll(".faq-header").forEach(hdr => {
            hdr.addEventListener("click", () => {
                const parent = hdr.closest(".faq-item");
                const content = parent.querySelector(".faq-content");
                const isOpen = parent.classList.contains("active");

                // Close other open items
                faqContainer.querySelectorAll(".faq-item.active").forEach(activeEl => {
                    if (activeEl !== parent) {
                        activeEl.classList.remove("active");
                        activeEl.querySelector(".faq-content").style.maxHeight = null;
                        activeEl.querySelector(".faq-header").setAttribute("aria-expanded", "false");
                    }
                });

                if (isOpen) {
                    parent.classList.remove("active");
                    content.style.maxHeight = null;
                    hdr.setAttribute("aria-expanded", "false");
                } else {
                    parent.classList.add("active");
                    content.style.maxHeight = content.scrollHeight + "px";
                    hdr.setAttribute("aria-expanded", "true");
                }
            });
        });
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            categoryTabs.forEach(t => t.classList.remove("bg-primary", "text-white"));
            tab.classList.add("bg-primary", "text-white");
            currentCategory = tab.getAttribute("data-category");
            renderFAQs();
        });
    });

    if (searchInput) searchInput.addEventListener("input", renderFAQs);

    renderFAQs();
}

// Health Library Page Handler
function initHealthLibrary() {
    const grid = document.getElementById("articles-grid");
    const filterTabs = document.querySelectorAll(".library-filter-tab");
    const searchInput = document.getElementById("article-search-input");
    if (!grid) return;

    const allArticles = (window.AIS_DATA && window.AIS_DATA.articles) || [];
    let activeCategory = "All";

    function renderArticles() {
        const query = (searchInput ? searchInput.value : "").trim().toLowerCase();

        const filtered = allArticles.filter(art => {
            const matchesCat = (activeCategory === "All" || art.category === activeCategory);
            const matchesQuery = !query ||
                art.title.toLowerCase().includes(query) ||
                art.summary.toLowerCase().includes(query) ||
                art.author.toLowerCase().includes(query);
            return matchesCat && matchesQuery;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500">No health guides found matching your selection.</div>`;
        } else {
            grid.innerHTML = filtered.map(a => window.AIS_COMPONENTS.renderArticleCard(a)).join("");
        }

        if (window.lucide) window.lucide.createIcons();
    }

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("bg-primary", "text-white"));
            tab.classList.add("bg-primary", "text-white");
            activeCategory = tab.getAttribute("data-category");
            renderArticles();
        });
    });

    if (searchInput) searchInput.addEventListener("input", renderArticles);

    renderArticles();
}

// Contact Form Handler
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const v = window.AIS_VALIDATOR;

        const nameEl = document.getElementById("contact-name");
        const phoneEl = document.getElementById("contact-phone");
        const emailEl = document.getElementById("contact-email");
        const messageEl = document.getElementById("contact-message");

        const isName = v.validateName(nameEl.value, nameEl);
        const isPhone = v.validateMobile(phoneEl.value, phoneEl);
        const isEmail = v.validateEmail(emailEl.value, emailEl, false);

        if (!messageEl.value.trim()) {
            v.showError(messageEl, "Please write your inquiry message.");
            return;
        } else {
            v.clearError(messageEl);
        }

        if (isName && isPhone && isEmail) {
            window.showToast("Thank you! Your message has been sent to our care desk.", "success");
            form.reset();
        }
    });
}

// Back to Top Button
function initBackToTop() {
    let btn = document.getElementById("back-to-top-btn");
    if (!btn) {
        btn = document.createElement("button");
        btn.id = "back-to-top-btn";
        btn.setAttribute("aria-label", "Back to top");
        btn.className = "fixed bottom-6 left-6 z-40 p-3 rounded-full bg-slate-900 text-white shadow-lg opacity-0 pointer-events-none transition-all duration-300 hover:bg-primary";
        btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"></path></svg>`;
        document.body.appendChild(btn);

        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.remove("opacity-0", "pointer-events-none");
            btn.classList.add("opacity-100");
        } else {
            btn.classList.add("opacity-0", "pointer-events-none");
            btn.classList.remove("opacity-100");
        }
    });
}
