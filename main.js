const siteHeader = document.getElementById("site-header");
const header = document.querySelector(".header-shell");
const menuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const revealItems = document.querySelectorAll(".reveal-up");
const dropdowns = document.querySelectorAll("[data-dropdown]");
const counter = document.querySelector("[data-counter]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateHeaderState = () => {
  if (!header) return;
  const isSticky = window.scrollY > 16;
  header.classList.toggle("scrolled", isSticky);
  if (siteHeader) {
    siteHeader.classList.toggle("is-sticky", isSticky);
  }
};

const setMenuState = (open) => {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
};

const setupMobileMenu = () => {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
};

const setupRevealObserver = () => {
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const animateCounter = () => {
  if (!counter || prefersReducedMotion) return;

  const target = Number(counter.dataset.counter || 0);
  if (!target) return;

  let hasAnimated = false;
  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || hasAnimated) return;

        hasAnimated = true;
        const duration = 1600;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const value = Math.floor(progress * target);
          counter.textContent = `${value}+`;

          if (progress < 1) {
            window.requestAnimationFrame(tick);
          } else {
            counter.textContent = `${target}+`;
          }
        };

        window.requestAnimationFrame(tick);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counterObserver.observe(counter);
};

const setupDropdowns = () => {
  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    if (!button) return;

    const close = () => {
      dropdown.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    };

    const open = () => {
      dropdown.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    };

    button.addEventListener("click", (event) => {
      event.preventDefault();
      const expanded = button.getAttribute("aria-expanded") === "true";
      dropdowns.forEach((item) => {
        const itemButton = item.querySelector("button");
        item.classList.remove("open");
        if (itemButton) itemButton.setAttribute("aria-expanded", "false");
      });
      if (!expanded) open();
    });

    dropdown.addEventListener("mouseenter", open);
    dropdown.addEventListener("mouseleave", close);
    dropdown.addEventListener("focusout", (event) => {
      if (!dropdown.contains(event.relatedTarget)) close();
    });
  });

  document.addEventListener("click", (event) => {
    if ([...dropdowns].some((dropdown) => dropdown.contains(event.target))) return;
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("open");
      const button = dropdown.querySelector("button");
      if (button) button.setAttribute("aria-expanded", "false");
    });
  });
};

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) setMenuState(false);
});

updateHeaderState();
setMenuState(false);
setupMobileMenu();
setupRevealObserver();
setupDropdowns();
animateCounter();
