const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themePreference = window.matchMedia("(prefers-color-scheme: dark)");
let hasSavedTheme = false;

try {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  hasSavedTheme = savedTheme === "light" || savedTheme === "dark";
} catch (error) {
  console.error("No se pudo leer la preferencia de tema guardada.", error);
}

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle?.setAttribute("aria-label", `Activar modo ${theme === "dark" ? "claro" : "oscuro"}`);
  themeMeta?.setAttribute("content", theme === "dark" ? "#272417" : "#f7f4eb");
};

if (themeToggle) {
  const savedTheme = root.dataset.theme;
  applyTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : themePreference.matches ? "dark" : "light");

  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    hasSavedTheme = true;

    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch (error) {
      console.error("No se pudo guardar la preferencia de tema.", error);
    }
  });

  themePreference.addEventListener("change", (event) => {
    if (!hasSavedTheme) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

menuButton?.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
  navigation?.classList.toggle("is-open", !isExpanded);
});

navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Abrir menú");
    navigation.classList.remove("is-open");
  }
});

const motionButton = document.querySelector(".motion-toggle");
motionButton?.addEventListener("click", () => {
  const isPaused = motionButton.getAttribute("aria-pressed") === "true";
  document.body.classList.toggle("motion-paused", !isPaused);
  motionButton.setAttribute("aria-pressed", String(!isPaused));
  motionButton.textContent = isPaused ? "Pausar órbita" : "Reanudar órbita";
});

const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
