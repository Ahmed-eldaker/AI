const navbar = document.getElementById("main-menu");
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "30px";
  } else {
    navbar.style.top = "0px";
  }

  prevScrollPos = currentScrollPos;
};
$(".imgDiv").click(function () {
  $(".layer").css({ display: "flex" });
  $(".img4").css({ "background-image": $(this).css("background-image") });
});
const images = ["Imgs/1.jpg", "Imgs/2.jpg", "Imgs/3.jpg"];
var currentIndex = 0;
$(".right").click(function () {
  if (currentIndex != 3) {
    $(".img4").css({ "background-image": `url(${images[currentIndex]})` });
    currentIndex++;
  } else {
    currentIndex = 0;

    $(".img4").css({ "background-image": `url(${images[currentIndex]})` });
  }
});
$(".left").click(function () {
  if (currentIndex != 0) {
    $(".img4").css({ "background-image": `url(${images[currentIndex]})` });
    currentIndex--;
  } else {
    currentIndex = 2;
    $(".img4").css({ "background-image": `url(${images[currentIndex]})` });
  }
});
$(".layer").click(function (e) {
  if (!$(e.target).hasClass("imgDiv") && !$(e.target).hasClass("iconSlider")) {
    $(this).css({ display: "none" });
  }
});
