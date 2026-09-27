/**
 * AIS Hospital - Theme Switcher Controller
 * Manages 3 visual healthcare themes:
 * - 'teal'  : Medical Teal (#0F766E) - Default
 * - 'green' : Indian Medical Green (#15803D)
 * - 'blue'  : Royal Medical Blue (#1D4ED8)
 */

(function () {
    const THEMES = ["teal", "green", "blue"];
    const STORAGE_KEY = "ais_hospital_theme";

    // Detect initial theme
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const defaultTheme = (window.AIS_CONFIG && window.AIS_CONFIG.theme) || "teal";
    const initialTheme = (savedTheme && THEMES.includes(savedTheme)) ? savedTheme : defaultTheme;

    function applyTheme(themeName) {
        if (!THEMES.includes(themeName)) {
            themeName = "teal";
        }
        document.documentElement.setAttribute("data-theme", themeName);
        if (document.body) {
            document.body.setAttribute("data-theme", themeName);
        }
        localStorage.setItem(STORAGE_KEY, themeName);

        // Update any theme switcher buttons or select controls in UI
        const selectors = document.querySelectorAll(".theme-select-btn");
        selectors.forEach(btn => {
            const btnTheme = btn.getAttribute("data-theme-val");
            if (btnTheme === themeName) {
                btn.classList.add("ring-2", "ring-offset-2", "ring-primary");
            } else {
                btn.classList.remove("ring-2", "ring-offset-2", "ring-primary");
            }
        });

        // Dispatch event for other components if needed
        window.dispatchEvent(new CustomEvent("ais:themechange", { detail: { theme: themeName } }));
    }

    // Apply immediately to prevent flicker
    applyTheme(initialTheme);

    window.AIS_THEME = {
        get current() {
            return document.documentElement.getAttribute("data-theme") || "teal";
        },
        setTheme: applyTheme,
        themes: THEMES
    };

    // Re-verify on DOMContentLoaded to ensure body attribute is set
    document.addEventListener("DOMContentLoaded", () => {
        applyTheme(window.AIS_THEME.current);
    });
})();
