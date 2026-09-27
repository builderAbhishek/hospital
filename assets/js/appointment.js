/**
 * AIS Hospital - Appointment Booking Engine (Frontend V1)
 * Features:
 * - 7-Step Multi-Stage Wizard with Progress Stepper
 * - Department -> Doctor -> Date -> Slot -> Patient Info -> Review -> Confirmation
 * - Pre-population via URL parameters (?doctorId=... / ?dept=...)
 * - Rich Inline Validation via AIS_VALIDATOR
 * - Simulation of persistence via localStorage
 * - Printable Appointment Ticket with Barcode simulation
 * - Ready for PHP / MySQL V2 API handoff
 */

(function () {
    // Current wizard state
    const appointmentState = {
        currentStep: 1,
        totalSteps: 7,
        data: {
            departmentId: "",
            departmentName: "",
            doctorId: "",
            doctorName: "",
            doctorSpecialization: "",
            doctorFee: "",
            date: "",
            timeSlot: "",
            patientType: "new", // 'new' | 'existing'
            patientName: "",
            age: "",
            gender: "Male",
            mobile: "",
            email: "",
            reason: ""
        }
    };

    // Available Time Slots grouped by session
    const TIME_SLOTS = {
        morning: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM"],
        afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"],
        evening: ["04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"]
    };

    // DOM Elements cache
    let stepPanels = [];
    let stepIndicators = [];

    function initAppointmentWizard() {
        const wizardContainer = document.getElementById("appointment-wizard");
        if (!wizardContainer) return;

        stepPanels = document.querySelectorAll(".wizard-step-panel");
        stepIndicators = document.querySelectorAll(".step-item");

        populateDepartmentsDropdown();
        setupEventListeners();
        handleURLPrePopulation();
        initDateConstraint();
        renderTimeSlots();
        goToStep(1);
    }

    // Populate Department Options in Step 1
    function populateDepartmentsDropdown() {
        const deptSelect = document.getElementById("dept-select");
        const deptCardsGrid = document.getElementById("dept-cards-selector");
        if (!deptSelect && !deptCardsGrid) return;

        const depts = (window.AIS_DATA && window.AIS_DATA.departments) || [];

        if (deptSelect) {
            deptSelect.innerHTML = `<option value="">-- Choose Medical Specialty --</option>` +
                depts.map(d => `<option value="${d.id}">${d.name}</option>`).join("");
        }

        if (deptCardsGrid) {
            deptCardsGrid.innerHTML = depts.map(d => `
                <div class="dept-select-card border-2 border-slate-200 hover:border-primary p-4 rounded-xl cursor-pointer transition-all bg-white flex items-center gap-3" 
                     data-dept-id="${d.id}" data-dept-name="${d.name}">
                    <div class="w-10 h-10 rounded-lg bg-primary-50 text-primary flex items-center justify-center shrink-0">
                        <i data-lucide="${d.icon}" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-sm text-slate-800 font-heading leading-tight">${d.name}</h4>
                        <span class="text-xs text-slate-500">${d.doctorCount} Doctors available</span>
                    </div>
                </div>
            `).join("");

            // Click listener on cards
            deptCardsGrid.querySelectorAll(".dept-select-card").forEach(card => {
                card.addEventListener("click", () => {
                    deptCardsGrid.querySelectorAll(".dept-select-card").forEach(c => c.classList.remove("border-primary", "bg-primary-50/40"));
                    card.classList.add("border-primary", "bg-primary-50/40");
                    const deptId = card.getAttribute("data-dept-id");
                    const deptName = card.getAttribute("data-dept-name");
                    appointmentState.data.departmentId = deptId;
                    appointmentState.data.departmentName = deptName;
                    if (deptSelect) deptSelect.value = deptId;
                    populateDoctorsForDepartment(deptId);
                });
            });
        }
    }

    // Populate Doctors for chosen Department in Step 2
    function populateDoctorsForDepartment(departmentId) {
        const doctorCardsContainer = document.getElementById("doctor-cards-selector");
        if (!doctorCardsContainer) return;

        const allDoctors = (window.AIS_DATA && window.AIS_DATA.doctors) || [];
        const filteredDoctors = departmentId 
            ? allDoctors.filter(doc => doc.departmentId === departmentId)
            : allDoctors;

        if (filteredDoctors.length === 0) {
            doctorCardsContainer.innerHTML = `
                <div class="col-span-full py-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
                    <p class="text-sm text-slate-500">No specific consultant currently listed in this category.</p>
                    <p class="text-xs text-primary font-medium mt-1">Please select General Medicine or call OPD Helpline: 1800 123 4567.</p>
                </div>
            `;
            return;
        }

        doctorCardsContainer.innerHTML = filteredDoctors.map(doc => `
            <div class="doctor-pick-card border-2 border-slate-200 hover:border-primary p-4 rounded-xl cursor-pointer transition-all bg-white flex flex-col justify-between"
                 data-doc-id="${doc.id}" 
                 data-doc-name="${doc.name}"
                 data-doc-spec="${doc.specialization}"
                 data-doc-fee="${doc.consultationFee}"
                 data-doc-dept="${doc.departmentName}">
                <div class="flex items-center gap-3 mb-3">
                    <img src="${doc.photo}" alt="${doc.name}" class="w-14 h-14 rounded-full object-cover shrink-0 border border-slate-200">
                    <div>
                        <h4 class="font-bold text-sm text-slate-900 font-heading leading-tight">${doc.name}</h4>
                        <p class="text-xs text-primary font-medium">${doc.specialization}</p>
                        <p class="text-[11px] text-slate-500">${doc.qualification}</p>
                    </div>
                </div>
                <div class="text-xs text-slate-600 border-t border-slate-100 pt-2 flex items-center justify-between">
                    <span>${doc.experience}+ Years Exp</span>
                    <span class="font-bold text-slate-800">${doc.consultationFee}</span>
                </div>
            </div>
        `).join("");

        if (window.lucide) window.lucide.createIcons();

        // Card select listeners
        doctorCardsContainer.querySelectorAll(".doctor-pick-card").forEach(card => {
            card.addEventListener("click", () => {
                doctorCardsContainer.querySelectorAll(".doctor-pick-card").forEach(c => c.classList.remove("border-primary", "bg-primary-50/40"));
                card.classList.add("border-primary", "bg-primary-50/40");
                appointmentState.data.doctorId = card.getAttribute("data-doc-id");
                appointmentState.data.doctorName = card.getAttribute("data-doc-name");
                appointmentState.data.doctorSpecialization = card.getAttribute("data-doc-spec");
                appointmentState.data.doctorFee = card.getAttribute("data-doc-fee");
                appointmentState.data.departmentName = card.getAttribute("data-doc-dept");
            });
        });
    }

    // Restrict Date picker to valid range
    function initDateConstraint() {
        const dateInput = document.getElementById("appointment-date");
        if (!dateInput) return;

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const yyyy = tomorrow.getFullYear();
        const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
        const dd = String(tomorrow.getDate()).padStart(2, "0");
        const minStr = `${yyyy}-${mm}-${dd}`;

        const maxDate = new Date();
        maxDate.setDate(today.getDate() + 60);
        const maxY = maxDate.getFullYear();
        const maxM = String(maxDate.getMonth() + 1).padStart(2, "0");
        const maxD = String(maxDate.getDate()).padStart(2, "0");
        const maxStr = `${maxY}-${maxM}-${maxD}`;

        dateInput.min = minStr;
        dateInput.max = maxStr;

        dateInput.addEventListener("change", (e) => {
            if (window.AIS_VALIDATOR.validateDate(e.target.value, e.target)) {
                appointmentState.data.date = e.target.value;
            } else {
                appointmentState.data.date = "";
            }
        });
    }

    // Render Time Slot Pills
    function renderTimeSlots() {
        const container = document.getElementById("time-slots-container");
        if (!container) return;

        let html = "";
        const sessions = [
            { key: "morning", title: "Morning Consultation", icon: "sun" },
            { key: "afternoon", title: "Afternoon Consultation", icon: "sun-dim" },
            { key: "evening", title: "Evening Consultation", icon: "moon" }
        ];

        sessions.forEach(sess => {
            const slots = TIME_SLOTS[sess.key] || [];
            html += `
                <div class="mb-5">
                    <h5 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                        <i data-lucide="${sess.icon}" class="w-4 h-4 text-primary"></i> ${sess.title}
                    </h5>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        ${slots.map(s => `
                            <button type="button" 
                                    class="slot-btn py-2 px-3 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition bg-white"
                                    data-slot="${s}">
                                ${s}
                            </button>
                        `).join("")}
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
        if (window.lucide) window.lucide.createIcons();

        container.querySelectorAll(".slot-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                container.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("bg-primary", "text-white", "border-primary"));
                btn.classList.add("bg-primary", "text-white", "border-primary");
                appointmentState.data.timeSlot = btn.getAttribute("data-slot");
            });
        });
    }

    // Handle URL parameters for instant doctor pre-selection
    function handleURLPrePopulation() {
        const urlParams = new URLSearchParams(window.location.search);
        const doctorId = urlParams.get("doctorId") || urlParams.get("doctor");
        const deptId = urlParams.get("dept");

        if (deptId) {
            const deptCard = document.querySelector(`.dept-select-card[data-dept-id="${deptId}"]`);
            if (deptCard) deptCard.click();
        }

        if (doctorId) {
            const doctors = (window.AIS_DATA && window.AIS_DATA.doctors) || [];
            const foundDoc = doctors.find(d => d.id === doctorId);
            if (foundDoc) {
                // Select department first
                const deptCard = document.querySelector(`.dept-select-card[data-dept-id="${foundDoc.departmentId}"]`);
                if (deptCard) deptCard.click();

                // Select doctor
                setTimeout(() => {
                    const docCard = document.querySelector(`.doctor-pick-card[data-doc-id="${foundDoc.id}"]`);
                    if (docCard) docCard.click();
                }, 50);
            }
        }
    }

    // Step Transition Controller
    function goToStep(stepNumber) {
        if (stepNumber < 1 || stepNumber > appointmentState.totalSteps) return;

        // Hide all panels
        stepPanels.forEach(panel => {
            panel.classList.add("hidden");
        });

        // Show target panel
        const targetPanel = document.getElementById(`wizard-step-${stepNumber}`);
        if (targetPanel) {
            targetPanel.classList.remove("hidden");
        }

        // Update Stepper indicators
        stepIndicators.forEach(ind => {
            const indStep = parseInt(ind.getAttribute("data-step"), 10);
            ind.classList.remove("active", "completed");
            if (indStep === stepNumber) {
                ind.classList.add("active");
            } else if (indStep < stepNumber) {
                ind.classList.add("completed");
            }
        });

        appointmentState.currentStep = stepNumber;
        window.scrollTo({ top: 180, behavior: "smooth" });

        // If step is Review (Step 6), render the review summary
        if (stepNumber === 6) {
            renderReviewSummary();
        }

        if (window.lucide) window.lucide.createIcons();
    }

    // Validate current step before proceeding to next
    function validateStep(step) {
        const validator = window.AIS_VALIDATOR;

        if (step === 1) {
            if (!appointmentState.data.departmentId) {
                window.showToast("Please choose a medical department to proceed.", "error");
                return false;
            }
            return true;
        }

        if (step === 2) {
            if (!appointmentState.data.doctorId) {
                window.showToast("Please choose your consulting doctor.", "error");
                return false;
            }
            return true;
        }

        if (step === 3) {
            const dateInput = document.getElementById("appointment-date");
            if (!validator.validateDate(dateInput.value, dateInput)) {
                return false;
            }
            appointmentState.data.date = dateInput.value;
            return true;
        }

        if (step === 4) {
            if (!appointmentState.data.timeSlot) {
                window.showToast("Please select a convenient consultation time slot.", "error");
                return false;
            }
            return true;
        }

        if (step === 5) {
            const nameEl = document.getElementById("patient-name");
            const ageEl = document.getElementById("patient-age");
            const mobileEl = document.getElementById("patient-mobile");
            const emailEl = document.getElementById("patient-email");
            const genderEl = document.getElementById("patient-gender");
            const reasonEl = document.getElementById("patient-reason");

            const isNameValid = validator.validateName(nameEl.value, nameEl);
            const isAgeValid = validator.validateAge(ageEl.value, ageEl);
            const isMobileValid = validator.validateMobile(mobileEl.value, mobileEl);
            const isEmailValid = validator.validateEmail(emailEl.value, emailEl, false);

            if (!isNameValid || !isAgeValid || !isMobileValid || !isEmailValid) {
                return false;
            }

            appointmentState.data.patientName = nameEl.value.trim();
            appointmentState.data.age = ageEl.value.trim();
            appointmentState.data.gender = genderEl.value;
            appointmentState.data.mobile = mobileEl.value.trim();
            appointmentState.data.email = emailEl.value.trim();
            appointmentState.data.reason = (reasonEl ? reasonEl.value : "").trim();

            const patientTypeEl = document.querySelector('input[name="patientType"]:checked');
            if (patientTypeEl) {
                appointmentState.data.patientType = patientTypeEl.value;
            }

            return true;
        }

        return true;
    }

    // Render Review Summary Screen (Step 6)
    function renderReviewSummary() {
        const reviewContainer = document.getElementById("review-summary-content");
        if (!reviewContainer) return;

        const d = appointmentState.data;

        reviewContainer.innerHTML = `
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                    <div>
                        <span class="text-xs text-slate-500 uppercase font-semibold">Consulting Doctor</span>
                        <h4 class="text-base font-bold text-slate-900">${d.doctorName}</h4>
                        <p class="text-xs text-primary font-medium">${d.doctorSpecialization}</p>
                        <p class="text-xs text-slate-600">${d.departmentName}</p>
                    </div>
                    <div>
                        <span class="text-xs text-slate-500 uppercase font-semibold">Date & Time Slot</span>
                        <h4 class="text-base font-bold text-slate-900">${formatReadableDate(d.date)}</h4>
                        <p class="text-xs font-semibold text-primary">${d.timeSlot}</p>
                        <p class="text-xs text-slate-500">Consultation Fee: <strong class="text-slate-900">${d.doctorFee || '₹600'}</strong></p>
                    </div>
                </div>

                <div>
                    <span class="text-xs text-slate-500 uppercase font-semibold block mb-2">Patient Information</span>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <div>
                            <span class="text-slate-400 block">Patient Name:</span>
                            <span class="font-bold text-slate-800">${d.patientName}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block">Age / Gender:</span>
                            <span class="font-bold text-slate-800">${d.age} Yrs / ${d.gender}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block">Mobile No:</span>
                            <span class="font-bold text-slate-800">${d.mobile}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block">Patient Type:</span>
                            <span class="font-bold text-slate-800 uppercase">${d.patientType} Patient</span>
                        </div>
                    </div>
                    ${d.email ? `
                        <div class="text-xs mt-2">
                            <span class="text-slate-400">Email:</span>
                            <span class="font-semibold text-slate-700 ml-1">${d.email}</span>
                        </div>
                    ` : ""}
                    ${d.reason ? `
                        <div class="text-xs mt-2 pt-2 border-t border-slate-100">
                            <span class="text-slate-400">Reason / Symptoms:</span>
                            <p class="text-slate-700 italic mt-0.5">${d.reason}</p>
                        </div>
                    ` : ""}
                </div>
            </div>
        `;
    }

    // Submit Appointment (Final Step)
    function handleAppointmentSubmission() {
        const submitBtn = document.getElementById("confirm-booking-btn");
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="inline-block animate-spin mr-2">⏳</span> Confirming Appointment...`;
        }

        // Generate realistic unique Appointment ID
        const randomNum = Math.floor(10000 + Math.random() * 90000);
        const appointmentId = `AIS-2026-${randomNum}`;

        const appointmentRecord = {
            id: appointmentId,
            patientName: appointmentState.data.patientName,
            age: appointmentState.data.age,
            gender: appointmentState.data.gender,
            mobile: appointmentState.data.mobile,
            email: appointmentState.data.email,
            department: appointmentState.data.departmentName,
            departmentId: appointmentState.data.departmentId,
            doctor: appointmentState.data.doctorName,
            doctorId: appointmentState.data.doctorId,
            doctorFee: appointmentState.data.doctorFee,
            date: appointmentState.data.date,
            time: appointmentState.data.timeSlot,
            reason: appointmentState.data.reason,
            patientType: appointmentState.data.patientType,
            status: "Confirmed",
            createdAt: new Date().toISOString()
        };

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

        // Save into localStorage for V1 demo persistence
        try {
            const existing = JSON.parse(localStorage.getItem("ais_hospital_appointments") || "[]");
            existing.unshift(appointmentRecord);
            localStorage.setItem("ais_hospital_appointments", JSON.stringify(existing));
        } catch (e) {
            console.warn("Could not save to localStorage", e);
        }

        // Render Confirmation Ticket in Step 7
        setTimeout(() => {
            renderConfirmationTicket(appointmentRecord);
            goToStep(7);
            window.showToast("Appointment successfully confirmed!", "success");
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `Confirm & Generate Slip`;
            }
        }, 600);
    }

    // Render Confirmation Ticket on Step 7
    function renderConfirmationTicket(rec) {
        const ticketContainer = document.getElementById("confirmation-ticket-container");
        if (!ticketContainer) return;

        ticketContainer.innerHTML = `
            <div id="appointment-ticket" class="bg-white border-2 border-primary/30 rounded-2xl p-6 sm:p-8 shadow-lg max-w-xl mx-auto relative overflow-hidden">
                <!-- Watermark -->
                <div class="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                    <i data-lucide="cross" class="w-64 h-64 text-primary"></i>
                </div>

                <div class="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                    <div class="flex items-center gap-2">
                        <div class="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center">
                            <i data-lucide="cross" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-slate-900 font-heading">AIS Hospital</h3>
                            <p class="text-[10px] text-slate-500 uppercase tracking-wider">Outpatient OPD Consultation Slip</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            <i data-lucide="check" class="w-3 h-3"></i> Confirmed
                        </span>
                        <p class="text-xs font-mono font-bold text-primary mt-1">${rec.id}</p>
                    </div>
                </div>

                <div class="bg-primary-50 rounded-xl p-4 mb-4">
                    <div class="grid grid-cols-2 gap-3 text-xs">
                        <div>
                            <span class="text-slate-500 block">Doctor:</span>
                            <span class="font-bold text-slate-900 text-sm">${rec.doctor}</span>
                            <span class="text-primary block font-medium">${rec.department}</span>
                        </div>
                        <div>
                            <span class="text-slate-500 block">Appointment Slot:</span>
                            <span class="font-bold text-slate-900 text-sm">${formatReadableDate(rec.date)}</span>
                            <span class="text-slate-700 block font-semibold">${rec.time}</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs mb-4">
                    <div>
                        <span class="text-slate-400 block">Patient Name:</span>
                        <span class="font-bold text-slate-800">${rec.patientName}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 block">Age / Gender:</span>
                        <span class="font-bold text-slate-800">${rec.age} Yrs / ${rec.gender}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 block">Mobile No:</span>
                        <span class="font-bold text-slate-800">${rec.mobile}</span>
                    </div>
                </div>

                <div class="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
                    <p class="font-semibold text-slate-700">Instructions for Patient:</p>
                    <p>• Please arrive at the hospital registration counter 15 minutes before your slot.</p>
                    <p>• Bring your previous medical prescriptions and diagnostic reports, if any.</p>
                    <p>• For cancellation or rescheduling, call OPD Helpline: <strong>+91 1800 123 4567</strong>.</p>
                </div>

                <!-- Action Buttons (Hidden on Print) -->
                <div class="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 no-print">
                    <button type="button" onclick="window.print()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow transition">
                        <i data-lucide="printer" class="w-4 h-4"></i> Print Slip
                    </button>
                    <button type="button" onclick="AIS_APPOINTMENT.downloadJSON('${rec.id}')" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition">
                        <i data-lucide="download" class="w-4 h-4"></i> Download Record
                    </button>
                    <a href="index.html" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-primary font-semibold text-xs hover:underline">
                        Back to Home
                    </a>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    // Helper: Format Date string
    function formatReadableDate(dateStr) {
        if (!dateStr) return "N/A";
        const d = new Date(dateStr + "T00:00:00");
        return d.toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }

    // Setup Next / Prev button events
    function setupEventListeners() {
        // Next buttons
        document.querySelectorAll("[data-action='next-step']").forEach(btn => {
            btn.addEventListener("click", () => {
                if (validateStep(appointmentState.currentStep)) {
                    goToStep(appointmentState.currentStep + 1);
                }
            });
        });

        // Prev buttons
        document.querySelectorAll("[data-action='prev-step']").forEach(btn => {
            btn.addEventListener("click", () => {
                goToStep(appointmentState.currentStep - 1);
            });
        });

        // Final Confirm Button
        const confirmBtn = document.getElementById("confirm-booking-btn");
        if (confirmBtn) {
            confirmBtn.addEventListener("click", handleAppointmentSubmission);
        }

        // Stepper clickable navigation for already completed steps
        stepIndicators.forEach(ind => {
            ind.addEventListener("click", () => {
                const target = parseInt(ind.getAttribute("data-step"), 10);
                if (target < appointmentState.currentStep) {
                    goToStep(target);
                }
            });
        });
    }

    // Download JSON ticket
    function downloadJSON(id) {
        try {
            const records = JSON.parse(localStorage.getItem("ais_hospital_appointments") || "[]");
            const item = records.find(r => r.id === id);
            if (!item) return;

            const blob = new Blob([JSON.stringify(item, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${id}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (e) {
            console.error(e);
        }
    }

    // Expose API
    window.AIS_APPOINTMENT = {
        init: initAppointmentWizard,
        goToStep,
        state: appointmentState,
        downloadJSON
    };

    document.addEventListener("DOMContentLoaded", initAppointmentWizard);
})();
