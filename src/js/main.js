window.addEventListener("scroll", function () {
  const scrollPosition = Math.round(this.scrollY); // Grabbing the scroll position, rounding these suckers off because aint nobody got time for that
  const documentHeight = document.documentElement.scrollHeight; // Gonna need this for some fancy pants math
  const userIsScrollingAt = (scrollPosition / documentHeight) * 100; // Where the user is currently scrolling
  const backgroundImage = document.querySelector("[data-target='background']"); // The background image
  backgroundImage.classList.add("active");

  console.log("userIsScrollingAt: ", userIsScrollingAt);
  console.log("backgroundImage: ", backgroundImage);
});
