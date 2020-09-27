$(window).scroll(function () {
  const scrollPosition = Math.round($(this).scrollTop()); // Grabbing the scroll position, rounding these suckers off because aint nobody got time for that
  const documentHeight = document.documentElement.scrollHeight; // Gonna need this for some fancy pants math
  const userIsScrollingAt = (scrollPosition / documentHeight) * 100;
  const backgroundImage = $("[data-target='background']");

  const source = "https://source.unsplash.com/random";
  const portrait_one =
    "url(https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80)";

  const portrait_two =
    "url(https://images.unsplash.com/photo-1600496461900-3f1b74fb40d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80)";

  const portrait_three =
    "url(https://images.unsplash.com/photo-1598628340414-bbf4c9e21604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)";

  const portrait_four =
    "url(https://images.unsplash.com/photo-1586979270468-e3819db6cacb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1285&q=80)";
  const portrait_five = `url(${source})`;
  const portrait_six = `url(${source})`;
  const portrait_seven = `url(${source})`;
  const portrait_eight = `url(${source})`;
  const portrait_nine = `url(${source})`;

  if (userIsScrollingAt < 9) {
    backgroundImage.css("background-image", portrait_one);
  } else if (userIsScrollingAt >= 10 && userIsScrollingAt <= 20) {
    backgroundImage.css("background-image", portrait_two);
  } else if (userIsScrollingAt >= 10 && userIsScrollingAt <= 20) {
    backgroundImage.css("background-image", portrait_three);
  } else if (userIsScrollingAt >= 20 && userIsScrollingAt <= 30) {
    backgroundImage.css("background-image", portrait_four);
  } else if (userIsScrollingAt >= 30 && userIsScrollingAt <= 40) {
    backgroundImage.css("background-image", portrait_five);
  } else if (userIsScrollingAt >= 40 && userIsScrollingAt <= 50) {
    backgroundImage.css("background-image", portrait_six);
  } else if (userIsScrollingAt >= 50 && userIsScrollingAt <= 60) {
    backgroundImage.css("background-image", portrait_seven);
  } else if (userIsScrollingAt >= 60 && userIsScrollingAt <= 70) {
    backgroundImage.css("background-image", portrait_eight);
  } else if (userIsScrollingAt >= 80 && userIsScrollingAt <= 90) {
    backgroundImage.css("background-image", portrait_nine);
  } else {
    backgroundImage.css("background-image", portrait_one);
  }
  console.log("userIsScrollingAt: ", userIsScrollingAt);
});
