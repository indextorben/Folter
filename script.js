document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const showOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                item.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Sofort prüfen, falls Elemente bereits sichtbar sind
});