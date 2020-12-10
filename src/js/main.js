window.addEventListener("scroll", function () {
  // When a user starts scrolling...
  const scrollPosition = Math.round(this.scrollY); // Grab the scroll position, rounding these suckers off because aint nobody got time for that
  const documentHeight = document.documentElement.scrollHeight; // Gonna need this for some fancy pants math
  const userViewingAt = (scrollPosition / documentHeight) * 100; // Where the user is currently scrolling
  const backgroundELement = document.querySelector("[data-target='portrait']"); // The body element for the background

  if (userViewingAt < 10) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_1"); // Set the portrait back to the first
  } else if (userViewingAt >= 10 && userViewingAt <= 20) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_2"); // Add the new
  } else if (userViewingAt >= 20 && userViewingAt <= 30) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_3"); // Add the new
  } else if (userViewingAt >= 30 && userViewingAt <= 40) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_4"); // Add the new
  } else if (userViewingAt >= 40 && userViewingAt <= 50) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_5"); // Add the new
  } else if (userViewingAt >= 50 && userViewingAt <= 60) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_6"); // Add the new
  } else if (userViewingAt >= 60 && userViewingAt <= 70) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_7"); // Add the new
  } else if (userViewingAt >= 70 && userViewingAt <= 80) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_8"); // Add the new
  } else if (userViewingAt >= 80 && userViewingAt <= 90) {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_9"); // Add the new
  } else {
    backgroundELement.setAttribute("class", " "); // Blow out the classes, start over
    backgroundELement.classList.add("portrait_1"); // Set the portrait back to the first
  }
});

// So this is a SUPER embarassing solution but I did it honestly and to the best of my knolwedge. Would love some feedback.
