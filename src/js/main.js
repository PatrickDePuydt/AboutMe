$(window).scroll(function () {
  const scrollPosition = $(this).scrollTop(); // Grabbing the scroll position
  const backgroundImage = $("[data-target='background']");

  const original_portait =
    "url(https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80)";

  const portrait_two =
    "url(https://images.unsplash.com/photo-1600496461900-3f1b74fb40d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80)";

  const portrait_three =
    "url(https://images.unsplash.com/photo-1598628340414-bbf4c9e21604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)";

  //   Spacing Conditions
  const one = scrollPosition > 100 && scrollPosition < 199;
  const two = scrollPosition > 200 && scrollPosition < 299;
  const three = scrollPosition > 300 && scrollPosition < 399;
  const four = scrollPosition > 400 && scrollPosition < 499;
  const five = scrollPosition > 500 && scrollPosition < 599;
  const six = scrollPosition > 600 && scrollPosition < 699;
  const seven = scrollPosition > 700 && scrollPosition < 799;
  const eight = scrollPosition > 800 && scrollPosition < 899;
  const nine = scrollPosition > 900 && scrollPosition < 999;

  //    Cycle the background image depending on where the user is on the page
  if (one) {
    // console.log("One");
  } else if (two) {
    // console.log("Two");
    backgroundImage.css("background-image", portrait_two);
  } else if (three) {
    // console.log("Three");
    backgroundImage.css("background-image", portrait_three);
  } else if (four) {
    // console.log("four");
  } else if (five) {
    // console.log("five");
  } else if (six) {
    // console.log("six");
  } else if (seven) {
    // console.log("seven");
  } else if (eight) {
    // console.log("eight");
  } else if (nine) {
    // console.log("nine");
  } else {
    backgroundImage.css("background-image", original_portait);
  }

  console.log(document.documentElement.scrollHeight / scrollPosition);
});
