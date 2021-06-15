window.addEventListener('load', () => {
  let apiKey = 'e339cb5f28c842bdb10191553212704';
  let long;
  let lat;
  let tempDescription = document.querySelector('.temperature-description');
  let tempDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${long}&aqi=no`

      fetch(api)
        .then(response => {
          console.log(response)
          return response.json();
        })
        .then(data => {
          console.log(data);
          const { temp_c } = data.current;
          const { text } = data.current.condition;
          const { name, region } = data.location;

          // Set DOM Elements from the API
          tempDegree.textContent = temp_c;
          tempDescription.textContent = text;
          locationTimezone.textContent = `${name}, ${region}`;
        })
    });

  } else {
    h1.textContent = "Please enable your geolocation"
  }
})



