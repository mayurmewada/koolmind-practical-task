// "use strict";

// const flightBtn = document.getElementById("flight-btn");
// const container = document.getElementById("main");

// const flightBtnHandler = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = () => {
//     console.log("hello world");
//     if (this.status === 200) {
//       container.innerHTML = xhr.responseText;
//       container.style.backgroundColor = "#454545";
//       console.log(xhr.responseText);
//     } else {
//       console.log("no page found");
//     }

//     xhr.open("get", "flight.html");
//     xhr.send();
//   };
// };

// flightBtn.addEventListener("click", flightBtnHandler());

function renderFlightContent(id) {
  jQuery.ajax({
    type: "GET",
    url: "./pages/flight.html",
    data: "id=" + id,
    success: function (data) {
      $("#main-content").html(data);
    },
  });
  // $(".burger").click(function () {
  $(".stay-link").removeClass("active");
  $(".eat-link").removeClass("active");
  $(".flight-link").addClass("active");
  // });
}
function renderStayContent(id) {
  jQuery.ajax({
    type: "GET",
    url: "./pages/stay.html",
    data: "id=" + id,
    success: function (data) {
      $("#main-content").html(data);
    },
  });
  $(".flight-link").removeClass("active");
  $(".eat-link").removeClass("active");
  $(".stay-link").addClass("active");
}
function renderEatContent(id) {
  jQuery.ajax({
    type: "GET",
    url: "./pages/eat.html",
    data: "id=" + id,
    success: function (data) {
      $("#main-content").html(data);
    },
  });
  $(".stay-link").removeClass("active");
  $(".flight-link").removeClass("active");
  $(".eat-link").addClass("active");
}

// responive burger
$(".burger").click(function () {
  $("#open-close").toggleClass("hidden");
});
