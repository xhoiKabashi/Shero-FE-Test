document.querySelectorAll(".navbar a").forEach((item) => {
  item.addEventListener("click", (event) => {
    // Remove active class from all items
    document.querySelectorAll(".navbar a").forEach((item) => {
      item.classList.remove("active-item");
    });
    // Add active class to clicked item
    event.target.classList.add("active-item");
  });
});
//

document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    perView: 5,
    focusAt: 0,
    gap: 20,
    breakpoints: {
      1024: {
        perView: 3,
      },
      600: {
        perView: 2,
      },
    },
  }).mount();
});
