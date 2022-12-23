const loaderContainer = document.querySelector(".loader-container");
window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api_key = "343a782515d202a08dd1c2993c8fa87b";
      const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${api_key}`;

      const response = await fetch(api_url);

      const data = await response.json();
      loaderContainer.style.display = "none";
      let { feels_like, pressure, humidity } = data.main;
      let { id, main, icon } = data.weather[0];
      let { speed } = data.wind;
      let { all } = data.clouds;
      let loc_name = data.name;
      let visible = data.visibility;

      document.getElementById("temperature-degree").textContent =
        parseInt(feels_like) + "°";
      document.getElementById("location-name").textContent = loc_name;

      if (icon === "01d" || icon === "01n") {
        document.body.style.backgroundImage =
          "url('assets/istockphoto-182355595-612x612.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
      }
      if (
        icon === "02d" ||
        icon === "02n" ||
        icon === "03d" ||
        icon === "03n" ||
        icon === "04d" ||
        icon === "04n" ||
        icon === "11d" ||
        icon === "11n"
      ) {
        document.body.style.backgroundImage =
          "url('assets/istockphoto-1005526768-612x612.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
      }
      if (icon === "13d" || icon === "13n") {
        document.body.style.backgroundImage =
          "url('assets/28265-nature-landscapes-trees-forest-winter-snow-snowing-flakes-748x468.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
      }

      if (
        icon === "10d" ||
        icon === "10n" ||
        icon === "09d" ||
        icon === "09n"
      ) {
        document.body.style.backgroundImage =
          "url('assets/rain-drops-on-window-1827098_1920.webp')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
      }

      if (id === "701" || id === "721" || id === "741") {
        document.body.style.backgroundImage =
          "url('assets/JFDZ7U577FFBTCTSLUKDQDSAYQ.png')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
      }
      if (id === "711" || id === "731" || id === "761") {
        document.body.style.backgroundImage =
          "url('assets/industrial_landscape_clouds_smoke_sepia-246542.jpg!d')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
      }
      if (id === "751" || id === "762" || id === "771") {
        document.body.style.backgroundImage =
          "url('assets/istockphoto-1357017951-170667a.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
      }
      if (id === "781") {
        document.body.style.backgroundImage =
          "url('assets/Generic-thunderstorm.webp')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
      }
      document.getElementById(
        "location-icon"
      ).innerHTML = `<img src="http://openweathermap.org/img/wn//${icon}@2x.png" style="height:60px;width:60px;">`;
      document.getElementById("temperature-description").innerHTML = main;
      document.getElementById("cloud").innerHTML = all + "%";
      document.getElementById("humid").innerHTML = humidity + "%";
      document.getElementById("wind_speed").innerHTML =
        parseInt(speed) + " km/h";
      document.getElementById("pressure").innerHTML = pressure + " bars";
      document.getElementById("visibility").textContent =
        parseInt(visible / 1000) + "km";
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      /*clock and date*/
      var date = new Date();
      var currentHour = date.getHours();
      var currentMinute = date.getMinutes();
      var currentSecond = date.getSeconds();
      var secondHand = document.querySelector(".second");
      var minuteHand = document.querySelector(".minute");
      var hourHand = document.querySelector(".hour");
      var currentDay = date.getDay();
      var currentDate = date.getDate();
      var currentMonth = date.getMonth();
      var currentYear = date.getFullYear().toString().slice(2);

      var dte =
        currentHour +
        ":" +
        currentMinute +
        "-" +
        weekday[currentDay] +
        "," +
        currentDate +
        " " +
        month[currentMonth] +
        " '" +
        currentYear;

      document.getElementById("date").innerHTML = dte;
      // var x = currentSecond * 6;
      // var y = currentMinute * 6 + (6 / 60) * currentSecond;
      // var z =
      //   currentHour * 30 +
      //   ((30 / 60) * currentMinute + (30 / 60 / 60) * currentSecond);
      // 'x' is the degree value of the secondHand 'Transform[Rotate]'
      // 'y' is the degree value of the minuteHand 'Transform[Rotate]'
      // 'z' is the degree value of the hourHand 'Transform[Rotate]'
      // setInterval(function () {
      //   x += 6 / 100;
      //   y += 6 / 100 / 60;
      //   z += 6 / 100 / 60 / 12;
      //   secondHand.style.transform = "rotate(" + x + "deg)";
      //   minuteHand.style.transform = "rotate(" + y + "deg)";
      //   hourHand.style.transform = "rotate(" + z + "deg)";
      // }, 10);
      // window.addEventListener("focus", function () {
      //   window.location.reload();
      // });
    });
  }
});
function search_location() {
  let input = document.getElementById("search-bar").value.toLowerCase();
  let x = document.getElementsByClassName("location");

  for (var i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-style";
    }
  }
}
// function clearSearch() {
//   let clear = document.querySelector(
//     ".search-bar::-webkit-search-cancel-button"
//   );

//   clear.addEventListener("click", () => {
//     window.addEventListener("load", () => {});
//   });
// }
