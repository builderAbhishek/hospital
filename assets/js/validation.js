/**
 * AIS Hospital - Form Validation Utility
 * Provides clean, user-friendly inline validation for appointment booking and contact forms.
 */

const AIS_VALIDATOR = {
    // Regex Patterns
    patterns: {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        indianMobile: /^(\+91[\-\s]?)?[6-9]\d{9}$/,
        name: /^[a-zA-Z\s\.]{2,60}$/
    },

    // Show inline error under input
    showError(inputElement, message) {
        if (!inputElement) return;
        this.clearError(inputElement);

        inputElement.classList.add("border-red-500", "focus:border-red-500", "focus:ring-red-200");
        inputElement.classList.remove("border-slate-200", "border-primary");

        const errorEl = document.createElement("p");
        errorEl.className = "text-red-600 text-xs font-medium mt-1 inline-error-msg flex items-center gap-1";
        errorEl.innerHTML = `<svg class="w-3.5 h-3.5 inline shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ${message}`;

        // Insert after parent if input has an icon wrapper or directly after input
        const parent = inputElement.closest(".input-wrapper") || inputElement.parentElement;
        parent.appendChild(errorEl);
    },

    // Clear inline error
    clearError(inputElement) {
        if (!inputElement) return;
        inputElement.classList.remove("border-red-500", "focus:border-red-500", "focus:ring-red-200");
        inputElement.classList.add("border-slate-200");

        const parent = inputElement.closest(".input-wrapper") || inputElement.parentElement;
        const existing = parent.querySelectorAll(".inline-error-msg");
        existing.forEach(el => el.remove());
    },

    // Clear all errors in a form or container
    clearAllErrors(container) {
        if (!container) return;
        const errors = container.querySelectorAll(".inline-error-msg");
        errors.forEach(el => el.remove());
        const inputs = container.querySelectorAll(".border-red-500");
        inputs.forEach(el => {
            el.classList.remove("border-red-500", "focus:border-red-500", "focus:ring-red-200");
            el.classList.add("border-slate-200");
        });
    },

    // Validate Full Name
    validateName(name, inputEl) {
        const val = (name || "").trim();
        if (!val) {
            if (inputEl) this.showError(inputEl, "Please enter patient full name.");
            return false;
        }
        if (!this.patterns.name.test(val)) {
            if (inputEl) this.showError(inputEl, "Please enter a valid name (at least 2 letters, alphabets only).");
            return false;
        }
        if (inputEl) this.clearError(inputEl);
        return true;
    },

    // Validate Mobile Number
    validateMobile(mobile, inputEl) {
        const val = (mobile || "").trim();
        if (!val) {
            if (inputEl) this.showError(inputEl, "Mobile number is required for SMS confirmation.");
            return false;
        }
        // Normalize: remove spaces, dashes, +91
        const cleaned = val.replace(/[\s\-\+]/g, "").replace(/^91/, "");
        if (cleaned.length !== 10 || !/^[6-9]\d{9}$/.test(cleaned)) {
            if (inputEl) this.showError(inputEl, "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.");
            return false;
        }
        if (inputEl) this.clearError(inputEl);
        return true;
    },

    // Validate Email Address
    validateEmail(email, inputEl, required = true) {
        const val = (email || "").trim();
        if (!val) {
            if (required) {
                if (inputEl) this.showError(inputEl, "Email address is required.");
                return false;
            }
            if (inputEl) this.clearError(inputEl);
            return true;
        }
        if (!this.patterns.email.test(val)) {
            if (inputEl) this.showError(inputEl, "Please enter a valid email address (e.g. name@example.com).");
            return false;
        }
        if (inputEl) this.clearError(inputEl);
        return true;
    },

    // Validate Age
    validateAge(age, inputEl) {
        const val = parseInt(age, 10);
        if (isNaN(val) || val < 0 || val > 125) {
            if (inputEl) this.showError(inputEl, "Please enter a valid age between 0 and 125.");
            return false;
        }
        if (inputEl) this.clearError(inputEl);
        return true;
    },

    // Validate Date (no past dates, within 60 days, check Sunday)
    validateDate(dateStr, inputEl) {
        if (!dateStr) {
            if (inputEl) this.showError(inputEl, "Please select an appointment date.");
            return false;
        }

        const selectedDate = new Date(dateStr + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (isNaN(selectedDate.getTime())) {
            if (inputEl) this.showError(inputEl, "Please enter a valid date.");
            return false;
        }

        if (selectedDate < today) {
            if (inputEl) this.showError(inputEl, "Appointment date cannot be in the past.");
            return false;
        }

        // Within 60 days
        const maxDate = new Date();
        maxDate.setDate(today.getDate() + 60);
        if (selectedDate > maxDate) {
            if (inputEl) this.showError(inputEl, "Appointments can be booked up to 60 days in advance.");
            return false;
        }

        // Sunday check for general OPD
        if (selectedDate.getDay() === 0) {
            if (inputEl) this.showError(inputEl, "Regular OPD is closed on Sundays. Emergency Care is open 24×7.");
            return false;
        }

        if (inputEl) this.clearError(inputEl);
        return true;
    },

    // Validate Select Dropdown
    validateSelect(val, inputEl, fieldName = "selection") {
        if (!val || val === "" || val === "select") {
            if (inputEl) this.showError(inputEl, `Please select a valid ${fieldName}.`);
            return false;
        }
        if (inputEl) this.clearError(inputEl);
        return true;
    }
};

// Make accessible
if (typeof window !== "undefined") {
    window.AIS_VALIDATOR = AIS_VALIDATOR;
}
