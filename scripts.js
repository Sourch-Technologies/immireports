document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".reviews-slider");
  if (!slider) return;

  let speed = 0.5;

  setInterval(() => {
    slider.scrollLeft += speed;
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollLeft = 0;
    }
  }, 16);
});
