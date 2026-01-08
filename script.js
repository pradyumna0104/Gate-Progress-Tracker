const checkboxes = document.querySelectorAll("input[type='checkbox']");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

document.querySelectorAll(".subject-header").forEach(btn => {
  btn.addEventListener("click", () => {
    const body = btn.nextElementSibling;
    body.style.display = body.style.display === "block" ? "none" : "block";
  });
});

checkboxes.forEach((cb, i) => {
  cb.checked = localStorage.getItem("cb" + i) === "true";
  cb.addEventListener("change", () => {
    localStorage.setItem("cb" + i, cb.checked);
    updateProgress();
  });
});

function updateProgress() {
  const done = [...checkboxes].filter(c => c.checked).length;
  const percent = Math.round((done / checkboxes.length) * 100);
  progressFill.style.width = percent + "%";
  progressText.textContent = percent + "%";
}

updateProgress();
