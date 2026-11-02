/* WEDE5020 Part 3 enhancements for Shudus Plumbing & Construction */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Accessible mobile navigation
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      menu.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  // Dynamic service search and filtering
  const search = document.getElementById("service-search");
  const serviceCards = [...document.querySelectorAll("#services-list .service-card")];
  const count = document.getElementById("service-count");
  if (search && serviceCards.length) {
    const filterServices = () => {
      const term = search.value.trim().toLowerCase();
      let visible = 0;
      serviceCards.forEach(card => {
        const match = card.textContent.toLowerCase().includes(term);
        card.hidden = !match;
        if (match) visible++;
      });
      if (count) count.textContent = `Showing ${visible} of ${serviceCards.length} services.`;
    };
    search.addEventListener("input", filterServices);
  }

  // Project gallery lightbox
  const dialog = document.getElementById("gallery-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  if (dialog && lightboxImage) {
    document.querySelectorAll(".gallery-trigger").forEach(button => {
      button.addEventListener("click", () => {
        const image = button.querySelector("img");
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        caption.textContent = image.alt;
        if (typeof dialog.showModal === "function") dialog.showModal();
        else dialog.setAttribute("open", "");
      });
    });
    const close = dialog.querySelector(".lightbox-close");
    if (close) close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
  }

  // Quote enquiry: validate, submit asynchronously to Netlify Forms, and fall back to email.
  const quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", async event => {
      event.preventDefault();
      const feedback = document.getElementById("quote-feedback");
      if (!quoteForm.reportValidity()) return;
      const data = new FormData(quoteForm);
      try {
        const response = await fetch("/", { method: "POST", body: data });
        if (!response.ok) throw new Error("Form endpoint is unavailable");
        if (feedback) feedback.textContent = "Thank you. Your quotation request has been submitted. The business will respond using the contact details supplied.";
        quoteForm.reset();
      } catch (error) {
        const fields = [
          ["Name", data.get("full_name")], ["Phone", data.get("phone")],
          ["Email", data.get("email")], ["Location", data.get("location")],
          ["Service", quoteForm.querySelector("#service").selectedOptions[0].text],
          ["Property type", quoteForm.querySelector("#property-type").selectedOptions[0].text],
          ["Preferred date", data.get("preferred_date") || "Not specified"],
          ["Work description", data.get("description")],
          ["Supporting file selected", data.get("documents")?.name || "No file selected"]
        ];
        const body = fields.map(([key, value]) => `${key}: ${value}`).join("\n\n");
        if (feedback) feedback.textContent = "Your details are valid, but the website form endpoint is not available on this host. Your email application will open with the request prepared. Attach any selected supporting file before sending.";
        window.location.href = `mailto:info@shudusplumbing.co.za?subject=${encodeURIComponent("Website quotation request")}&body=${encodeURIComponent(body)}`;
      }
    });
  }

  // General contact form: AJAX submission with a mailto fallback on non-Netlify hosting.
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const data = new FormData(contactForm);
      const feedback = document.getElementById("contact-feedback");
      try {
        const response = await fetch("/", { method: "POST", body: data });
        if (!response.ok) throw new Error("Form endpoint is unavailable");
        if (feedback) feedback.textContent = "Thank you. Your message has been submitted successfully.";
        contactForm.reset();
      } catch (error) {
        const body = [
          `Name: ${data.get("name")}`,
          `Email: ${data.get("email")}`,
          `Phone: ${data.get("phone")}`,
          `Message type: ${data.get("message_type")}`,
          `Message:\n${data.get("message")}`
        ].join("\n\n");
        if (feedback) feedback.textContent = "Your details are valid. This host does not provide the form endpoint, so your default email application will open with the message prepared. Review it and press Send.";
        window.location.href = `mailto:info@shudusplumbing.co.za?subject=${encodeURIComponent("Website contact message")}&body=${encodeURIComponent(body)}`;
      }
    });
  }

  // Interactive OpenStreetMap powered by Leaflet; marker is the general Cosmo City area.
  const mapElement = document.getElementById("business-map");
  if (mapElement) {
    const loadMap = () => {
      if (!window.L) return;
      const map = L.map(mapElement).setView([-26.005, 27.927], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);
      L.marker([-26.005, 27.927]).addTo(map)
        .bindPopup("<strong>Shudus Plumbing &amp; Construction</strong><br>General area: Cosmo City, Gauteng")
        .openPopup();
    };
    if (window.L) loadMap();
    else {
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(css);
      const leaflet = document.createElement("script");
      leaflet.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      leaflet.onload = loadMap;
      leaflet.onerror = () => { mapElement.textContent = "The interactive map could not load. Please use the Cosmo City, Gauteng location details above."; };
      document.head.appendChild(leaflet);
    }
  }
});
