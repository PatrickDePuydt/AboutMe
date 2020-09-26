$(window).scroll(function () {
  const scrollPosition = $(this).scrollTop(); // Grabbing the scroll position
  const backgroundImage = $("[data-target='background']");

  const second_portait =
    "https://images.unsplash.com/photo-1559017895-ca553c995892?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80";

  const third_portrait =
    "https://images.unsplash.com/photo-1598628340414-bbf4c9e21604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";

  //   Spacing Conditions
  const scroll_one = scrollPosition > 100 && scrollPosition < 199;
  const scroll_two = scrollPosition > 200 && scrollPosition < 299;
  const scroll_three = scrollPosition > 300 && scrollPosition < 399;
  const scroll_four = scrollPosition > 400 && scrollPosition < 499;
  const scroll_five = scrollPosition > 500 && scrollPosition < 599;
  const scroll_six = scrollPosition > 600 && scrollPosition < 699;
  const scroll_seven = scrollPosition > 700 && scrollPosition < 799;
  const scroll_eight = scrollPosition > 800 && scrollPosition < 899;
  const scroll_nine = scrollPosition > 900 && scrollPosition < 999;

  //    Cycle the background image depending on where the user is on the page
  if (scroll_one) {
    console.log("One");
  } else if (scroll_two) {
    console.log("Two");
    backgroundImage.css("background-image", second_portait);
  } else if (scroll_three) {
    console.log("Three");
    backgroundImage.css("background-image", third_portrait);
  } else if (scroll_four) {
    console.log("scroll_four");
  } else if (scroll_five) {
    console.log("five");
  } else if (scroll_six) {
    console.log("scroll_six");
  } else if (scroll_seven) {
    console.log("scroll_seven");
  } else if (scroll_eight) {
    console.log("scroll_eight");
  } else if (scroll_nine) {
    console.log("scroll_nine");
  } else {
    console.log("Default");
  }
});
