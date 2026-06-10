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
      btns[i].classList.toggle("on", btns[i].getAttribute("data-lang") === lang);
    }
    var badges = document.querySelectorAll("img.store-badge");
    for (var j = 0; j < badges.length; j++) {
      var src = badges[j].getAttribute("data-src-" + lang);
      if (src) badges[j].src = src;
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  window.rcSetLang = apply;

  // Apply before first paint when possible (script is loaded at end of body).
  apply(detect());
})();
