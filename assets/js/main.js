/* V-Agent — site interactions. Plain JS, no dependencies. */
(function () {
  "use strict";

  // Where contact + newsletter requests are sent. Change this in one place.
  var CONTACT_EMAIL = "v961agent@gmail.com";

  document.documentElement.classList.add("js");

  /* ---------- Header: shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
    if (open) { var first = menu.querySelector("a"); if (first) first.focus(); }
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
    });
    window.matchMedia("(min-width: 960px)").addEventListener("change", function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Work page filters ---------- */
  var filterBtns = document.querySelectorAll("[data-filter]");
  if (filterBtns.length) {
    var items = document.querySelectorAll("[data-category]");
    var countEl = document.getElementById("work-count");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        var shown = 0;
        items.forEach(function (item) {
          var match = f === "all" || item.getAttribute("data-category").split(" ").indexOf(f) !== -1;
          item.hidden = !match;
          if (match) shown++;
        });
        if (countEl) countEl.textContent = shown + (shown === 1 ? " project" : " projects");
      });
    });
  }

  /* ---------- Helpers ---------- */
  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }
  function mailto(subject, body) {
    return "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }
  document.querySelectorAll("[data-contact-email]").forEach(function (el) {
    el.textContent = CONTACT_EMAIL;
    if (el.tagName === "A") el.href = "mailto:" + CONTACT_EMAIL;
  });

  /* ---------- Contact form ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    // Pre-select plan/service from links like contact.html?plan=growth or ?service=ai
    var params = new URLSearchParams(window.location.search);
    ["plan", "service"].forEach(function (key) {
      var val = params.get(key), select = form.elements[key];
      if (val && select && select.querySelector('option[value="' + CSS.escape(val) + '"]')) select.value = val;
    });

    function validateField(field) {
      var wrap = field.closest(".field");
      var ok = field.checkValidity() && (field.type !== "email" || isEmail(field.value.trim()));
      if (wrap) wrap.classList.toggle("has-error", !ok);
      field.setAttribute("aria-invalid", String(!ok));
      return ok;
    }
    form.querySelectorAll("[required]").forEach(function (f) {
      f.addEventListener("blur", function () { validateField(f); });
      f.addEventListener("input", function () {
        if (f.closest(".field").classList.contains("has-error")) validateField(f);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      form.querySelectorAll("[required]").forEach(function (f) {
        if (!validateField(f) && !firstBad) firstBad = f;
      });
      if (firstBad) { firstBad.focus(); return; }

      var d = form.elements;
      var sel = function (s) { return s.options[s.selectedIndex].text; };
      var body = [
        "Name: " + d.name.value.trim(),
        "Email: " + d.email.value.trim(),
        "Company: " + (d.company.value.trim() || "-"),
        "Service: " + sel(d.service),
        "Plan: " + sel(d.plan),
        "Budget: " + sel(d.budget),
        "",
        d.message.value.trim()
      ].join("\n");
      var href = mailto("New project enquiry from " + d.name.value.trim(), body);

      var status = document.getElementById("form-status");
      status.hidden = false;
      status.innerHTML = "Thanks, " + escapeHtml(d.name.value.trim().split(" ")[0]) +
        "! Your email app should open with your message ready to send. " +
        'If it doesn\'t, <a href="' + href + '">click here</a> or write to <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + "</a>.";
      window.location.href = href;
    });
  }

  /* ---------- Newsletter (footer) ---------- */
  document.querySelectorAll(".newsletter").forEach(function (nl) {
    nl.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = nl.querySelector("input[type=email]");
      var note = nl.querySelector(".note");
      var v = input.value.trim();
      if (!isEmail(v)) {
        note.textContent = "Please enter a valid email address.";
        note.classList.remove("is-ok");
        input.focus();
        return;
      }
      window.location.href = mailto("Newsletter signup", "Please add " + v + " to the V-Agent newsletter.");
      note.textContent = "Almost done — send the email that just opened to confirm.";
      note.classList.add("is-ok");
      input.value = "";
    });
  });

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
})();
