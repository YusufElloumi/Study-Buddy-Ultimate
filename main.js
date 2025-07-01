// Entry point for JavaScript logic
document.addEventListener("DOMContentLoaded", () => {
  console.log("App initialized");
});

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach((el) => {
    el.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}
