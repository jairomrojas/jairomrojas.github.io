document.documentElement.setAttribute("data-theme", "dark");
document.documentElement.setAttribute("data-theme-setting", "dark");

function initTheme() {
  document.documentElement.setAttribute("data-theme", "dark");
  document.documentElement.setAttribute("data-theme-setting", "dark");
  try {
    localStorage.setItem("theme", "dark");
  } catch (e) {}
  var light = document.getElementById("highlight_theme_light");
  var dark = document.getElementById("highlight_theme_dark");
  if (light) light.media = "none";
  if (dark) dark.media = "";
}
