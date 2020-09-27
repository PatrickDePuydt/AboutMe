window.addEventListener("scroll", function () {
  const scrollPosition = Math.round(this.scrollY); // Grab the scroll position, rounding these suckers off because aint nobody got time for that
  const documentHeight = document.documentElement.scrollHeight; // Gonna need this for some fancy pants math
  const userViewingAt = (scrollPosition / documentHeight) * 100; // Where the user is currently scrolling
  const backgroundImage = document.querySelector("[data-target='portrait']"); // The body element for the background

  if (userViewingAt < 9) {
    backgroundImage.setAttribute("class", " "); // Blow out the classes, start over
    backgroundImage.classList.add("portrait_one"); // Set the portrait back to the first
  } else if (userViewingAt >= 10 && userViewingAt <= 20) {
    backgroundImage.classList.remove("portrait_one"); // Remove the old
    backgroundImage.classList.add("portrait_two"); // Add the newf
  } else if (userViewingAt >= 20 && userViewingAt <= 40) {
    backgroundImage.classList.remove("portrait_two"); // Remove the old
    backgroundImage.classList.add("portrait_three"); // Add the new
  } else if (userViewingAt >= 40 && userViewingAt <= 60) {
    backgroundImage.classList.remove("portrait_three"); // Remove the old
    backgroundImage.classList.add("portrait_four"); // Add the new
  } else if (userViewingAt >= 60 && userViewingAt <= 90) {
    backgroundImage.classList.remove("portrait_four"); // Remove the old
    backgroundImage.classList.add("portrait_five"); // Add the new
  } else {
    backgroundImage.setAttribute("class", " "); // Blow out the classes, start over
    backgroundImage.classList.add("portrait_one"); // Set the portrait back to the first
  }

  //   console.log("userViewingAt: ", userViewingAt);
  //   console.log("backgroundImage: ", backgroundImage);
});
