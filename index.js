var input = document.querySelector('#input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('#temp');
var desc = document.querySelector('.desc');
var humidity = document.querySelector('.humidity');
var country = document.querySelector('#country');
var button= document.querySelector('#submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8a993f282785ceb416ffae61420287c6&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var countryValue = data['sys']['country'];
  var humidityValue = data['main']['humidity'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = "Temperature - "+tempValue+"degree Celsius";
  humidity.innerHTML = "Humidity - "+humidityValue;
  country.innerHTML = "Country - "+countryValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
