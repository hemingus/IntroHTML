const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

document.addEventListener("mouseover", e => {
    const target = e.target.closest("[data-tooltip]");
    if (!target) return;

    tooltip.textContent = target.dataset.tooltip;
    tooltip.className = "tooltip";
    tooltip.classList.add("show");

    const rect = target.getBoundingClientRect();
    tooltip.style.left = 
    rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + window.scrollX + "px";
    tooltip.style.top =
    rect.top + window.scrollY - tooltip.offsetHeight - 8 + "px";
});

document.addEventListener("mouseout", e => {
    if (e.target.closest("[data-tooltip]")) {
        tooltip.classList.remove("show");
    }
});
