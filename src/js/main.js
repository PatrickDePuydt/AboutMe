window.addEventListener("scroll", function () {
  // When a user starts scrolling...
  const scrollPosition = Math.round(this.scrollY); // Grab the scroll position, rounding these suckers off because aint nobody got time for that
  const documentHeight = document.documentElement.scrollHeight; // Gonna need this for some fancy pants math
  const userViewingAt = (scrollPosition / documentHeight) * 100; // Where the user is currently scrolling
  const backgroundELement = document.querySelector("[data-target='portrait']"); // The body element for the background

  if (userViewingAt < 20) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_one"); // Set the portrait back to the first
  } else if (userViewingAt >= 20 && userViewingAt <= 40) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_two"); // Add the new
  } else if (userViewingAt >= 40 && userViewingAt <= 60) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_three"); // Add the new
  } else if (userViewingAt >= 60 && userViewingAt <= 80) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_four"); // Add the new
  } else if (userViewingAt >= 80 && userViewingAt <= 100) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_five"); // Add the new
  } else {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_one"); // Set the portrait back to the first
  }

  //   console.log("userViewingAt: ", userViewingAt);
  //   console.log("backgroundELement: ", backgroundELement);
});
