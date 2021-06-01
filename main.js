
// $(".loaderBackground1").addClass("loaderBackgroundAnimation1");
// $(".loaderBackground2").addClass("loaderBackgroundAnimation2");
// $(".loaderBackground3").addClass("loaderBackgroundAnimation3");
// $(".loaderBackground4").addClass("loaderBackgroundAnimation4");
// $(".loaderBackground5").addClass("loaderBackgroundAnimation5");




$(".headerIcon").click(function (e) {
  e.preventDefault();
  $("#videoSource").attr("src", "files/Presentation3.mp4");
  document.getElementById("backgroundVideo").load();
  $(".youtubeVideo").css("display", "flex");
  document.getElementById("backgroundAudio").pause();
  
});

$(".closeIcon").click(function (e) {
  e.preventDefault();
  $(".youtubeVideo").css("display", "none");
  document.getElementById("backgroundAudio").play();
  document.getElementById("backgroundVideo").pause();
});

$(".viewAnswerButton").click(function (e) {
  e.preventDefault();
  var answerNumber = "files/" + this.id + ".mp4";
  console.log(answerNumber);
  $("#videoSource").attr("src", answerNumber);
  document.getElementById("backgroundVideo").load();
  $(".youtubeVideo").css("display", "flex");
  document.getElementById("backgroundAudio").pause();
});

$(".outerBonusButton").click(function (e) {
  e.preventDefault();
  
  document.getElementById("backgroundAudio").pause();
  document.getElementById("bonusAudio").play();
   
});



document.getElementById("bonusAudio").onended = function () {
  document.getElementById("backgroundAudio").play();
}

document.getElementById("bonusAudio").onplay = function () {
  document.getElementById("backgroundAudio").pause();
}
document.getElementById("bonusAudio").onpause = function () {
  document.getElementById("backgroundAudio").play();
}

document.getElementById("quizAudio").onended = function () {
  document.getElementById("backgroundAudio").play();
}

document.getElementById("quizAudio").onplay = function () {
  document.getElementById("backgroundAudio").pause();
}
document.getElementById("quizAudio").onpause = function () {
  document.getElementById("backgroundAudio").play();
}



$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  mouseDrag: true,
  touchDrag: true,
  rewind: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    650: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})