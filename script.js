window.addEventListener("load", () => {
  let long;
  let lat;
  // let temperatureDescription = document.querySelector(
  //   ".temperature-description"
  // );
  // let temperatureDegree = document.querySelector(".temperature-degree");
  // let locationName = document.querySelector(".location-name");
  // let locationIcon = document.querySelector(".weather-icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api_key = "343a782515d202a08dd1c2993c8fa87b";
      const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${api_key}`;

      // fetch(api)
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log(data);

      //     const { feels_like } = data.main;

      //     const { main } = data.weather[0];

      //     const { icon } = data.weather[0];
      //     const { wind_speed } = data.wind;
      //     const { cloud } = data.clouds;
      //     const { rain } = data.rain;
      //     const loc_name = data.name;
      //     const icn = `http://openweathermap.org/img/wn//${icon}@2x.png`;

      //     temperatureDegree.textContent = parseInt(feels_like) + "°";
      //     temperatureDescription.textContent = main;
      //     locationName.textContent = loc_name;
      //     // locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
      //     locationIcon.textContent = icn;
      //   });
      const response = await fetch(api_url);

      const data = await response.json();

      let { feels_like, pressure, humidity } = data.main;
      let { main, icon } = data.weather[0];
      let { speed } = data.wind;
      let { all } = data.clouds;
      let loc_name = data.name;
      // let { '1h' } = data.rain;
      document.getElementById("temperature-degree").textContent =
        parseInt(feels_like) + "°";
      document.getElementById("location-name").textContent = loc_name;

      document.getElementById(
        "location-icon"
      ).innerHTML = `<img src="http://openweathermap.org/img/wn//${icon}@2x.png" style="height:60px;width:60px;">`;
      document.getElementById("temperature-description").innerHTML = main;
      document.getElementById("cloud").innerHTML = all + "%";
      document.getElementById("humid").innerHTML = humidity + "%";
      document.getElementById("wind_speed").innerHTML =
        parseInt(speed) + " km/h";
      document.getElementById("pressure").innerHTML = pressure + " bars";
      // document.getElementById("rain").textContent ='1h' + " mm";
      //  locationIcon.innerHTML = `<img src="icons/${icon}.png">`;
    });
  }
});
