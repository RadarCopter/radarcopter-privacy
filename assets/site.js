/* RadarCopter site — language switching (EN/ES) */
(function () {
  var KEY = "rc-lang";

  function detect() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "es") return saved;
    } catch (e) {}
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  function apply(lang) {
    if (lang !== "en" && lang !== "es") lang = "en";
    var root = document.documentElement;
    root.setAttribute("data-lang", lang);
    root.lang = lang;
    var btns = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < btns.length; i++) {
      var selected = btns[i].getAttribute("data-lang") === lang;
      btns[i].classList.toggle("on", selected);
      btns[i].setAttribute("aria-pressed", selected ? "true" : "false");
    }
    var badges = document.querySelectorAll("img.store-badge");
    for (var j = 0; j < badges.length; j++) {
      var src = badges[j].getAttribute("data-src-" + lang);
      if (src) badges[j].src = src;
      if (badges[j].getAttribute("data-store") === "google") {
        badges[j].alt = lang === "es" ? "Descargar en Google Play" : "Get it on Google Play";
      } else {
        badges[j].alt = lang === "es" ? "Descargar en el App Store" : "Download on the App Store";
      }
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  window.rcSetLang = apply;

  if (/Android/i.test(navigator.userAgent || "")) {
    document.documentElement.classList.add("is-android");
  }

  var header = document.querySelector(".site-header");
  if (header) {
    var syncHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", syncHeader, { passive: true });
    syncHeader();
  }

  // Apply before first paint when possible (script is loaded at end of body).
  apply(detect());
})();
