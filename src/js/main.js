$(window).scroll(function () {
  const scrollPosition = Math.round($(this).scrollTop()); // Grabbing the scroll position, rounding these suckers off because aint nobody got time for that
  const documentHeight = document.documentElement.scrollHeight; // Gonna need this for some fancy pants math
  const userIsScrollingAt = (scrollPosition / documentHeight) * 100;
  const backgroundImage = $("[data-target='background']");

  const source = "https://source.unsplash.com/random";
  const portrait_one = "url(images/huge-image.jpg)";
  const portrait_two = "url(images/huge-image-2.jpg)";
  const portrait_three = "url(images/huge-image-3.jpg)";

  const portrait_four = portrait_two;
  const portrait_five = portrait_three;
  const portrait_six = portrait_one;
  const portrait_seven = portrait_two;
  const portrait_eight = portrait_three;
  const portrait_nine = portrait_one;

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
