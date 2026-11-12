(function () {
  var root = document.documentElement;
  var saved = localStorage.getItem("lang");
  var guess = (navigator.language || "en").toLowerCase().startsWith("uk") ? "uk" : "en";
  var param = new URLSearchParams(location.search).get("lang");
  root.lang = param === "uk" || param === "en" ? param : saved || guess;

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".lang");
    button.addEventListener("click", function () {
      root.lang = root.lang === "uk" ? "en" : "uk";
      localStorage.setItem("lang", root.lang);
    });
  });
})();
