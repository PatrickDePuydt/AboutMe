$(window).scroll(function () {
  const scrollPosition = Math.round($(this).scrollTop()); // Grabbing the scroll position
  const documentHeight = document.documentElement.scrollHeight; // Gonna need this for some fancy pants math
  const userIsScrollingAt = (scrollPosition / documentHeight) * 100;
  const backgroundImage = $("[data-target='background']");

  const portrait_one =
    "url(https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80)";

  const portrait_two =
    "url(https://images.unsplash.com/photo-1600496461900-3f1b74fb40d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80)";

  const portrait_three =
    "url(https://images.unsplash.com/photo-1598628340414-bbf4c9e21604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)";

  //    Cycle the background image depending on where the user is on the page
  if (userIsScrollingAt < 9) {
    backgroundImage.css("background-image", portrait_one);
  } else if (userIsScrollingAt >= 10 && userIsScrollingAt < 19) {
    backgroundImage.css("background-image", portrait_two);
  } else if (userIsScrollingAt >= 20 && userIsScrollingAt < 29) {
    backgroundImage.css("background-image", portrait_three);
  } else {
    backgroundImage.css("background-image", portrait_one);
  }
  console.log("userIsScrollingAt: ", userIsScrollingAt);
});
