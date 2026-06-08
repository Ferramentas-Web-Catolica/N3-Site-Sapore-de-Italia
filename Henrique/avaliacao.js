const carousel = document.getElementById("carousel");

carousel.addEventListener(
    "wheel",
    (e) => {
        e.preventDefault();

        carousel.scrollBy({
            left: e.deltaY,
            behavior: "smooth"
        });
    },
    { passive: false }
);