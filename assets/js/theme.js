document.documentElement.setAttribute("data-theme", "light");
document.documentElement.setAttribute("data-theme-setting", "light");

function initTheme() {
  document.documentElement.setAttribute("data-theme", "light");
  document.documentElement.setAttribute("data-theme-setting", "light");
  try {
    localStorage.setItem("theme", "light");
  } catch (e) {}
  var light = document.getElementById("highlight_theme_light");
  var dark = document.getElementById("highlight_theme_dark");
  if (light) light.media = "";
  if (dark) dark.media = "none";
}
