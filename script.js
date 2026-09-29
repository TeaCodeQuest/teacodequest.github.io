(function () {
  var root = document.documentElement;
  var titles = {
    en: "Katja Schütz | Junior Software Developer (Fachinformatiker für Anwendungsentwicklung, IHK)",
    de: "Katja Schütz | Junior Softwareentwicklerin (Fachinformatiker für Anwendungsentwicklung, IHK)"
  };
  function set(l) {
    root.lang = l;
    document.title = titles[l];
    document.querySelectorAll("[data-set]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.set === l));
    });
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  set(saved || ((navigator.language || "").slice(0, 2) === "de" ? "de" : "en"));
  document.querySelectorAll("[data-set]").forEach(function (b) {
    b.addEventListener("click", function () { set(b.dataset.set); });
  });
})();
