var btnSubmit = document.querySelector(".btn-success");
var inputSec= document.querySelector(".inputSec");
var date = document.querySelector(".Date");
var time = document.querySelector(".time");
var myTime = setInterval(myTimer, 1000);
var imageUrl =  "url('https://source.unsplash.com/1600x900/?";
var apiKeys= "8917bea0bb76ef659c8e7d9fb5d96e6d";



var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}

// function myTimer(){
//   time = new Date();
//   time = time.toLocaleTimeString();
// }

window.addEventListener("load",getDate);
function getDate(){
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  date.innerHTML = days[d.getDay()];
}

// btnSubmit.addEventListener("click",ShowWeather);

// function ShowWeather(e){
//   e.preventDefault();

//   if(inputSec.value.length == 0){
//       return alert("please enter city name");
//   }else{
//     // alert(inputSec.value);
//       fetch("https://api.openweatherMap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apiKeys)
//       .then(function(response){
//         if(!response.ok){
//           alert("no weather found");
//           throw new Error("no weather found");
//         }
//         return response.json();
//      })
//      .then((data) => this.displayWeather(data));
//   }
// }

// function displayWeather(data){
//   const {name} = data;
//   const {icon, description } = data.weather[0];
//   const {temprature, humidity} = data.main;
//   const {speed} = data.wind;
//   document.querySelector(".city").innerText = "weather in " +name;
//   document.querySelector(".icon").src =
//   "https://openweathermap.org/img/wn/" + icon +".png";
//   document.querySelector(".climate").innerText = description;
//   document.querySelector(".temprature").innerText = temprature +"&deg;c";
//   document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//   document.querySelector(".wind").innerText = "wind speed: " + speed + "km/h";
//   document.querySelector(".weather").classList.remove("loading");
//   document.body.style.backgroundImage = imageUrl + name;
// }

// function search(){
//   this.featchWeather(document.querySelector(".inputSec").value);
// }

// document
// .querySelector(".inputSec")
// .addEventListener("keyup", function (event){
//   if(event.key == "Enter")
//   weather.search();
// })




// incase the code did not work

let weather ={
  apiKeys:"8917bea0bb76ef659c8e7d9fb5d96e6d",
  featchWeather:function(city){
    fetch(
      "https://api.openweatherMap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apiKeys
    )
    .then((response) => {
      if(!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.")
      }
      return response.json();
    })
    .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data){
    const {name} = data;
  const {icon, description } = data.weather[0];
  const {temp, humidity} = data.main;
  const {speed} = data.wind;
  document.querySelector(".city").innerText = "weather in " +name;
  document.querySelector(".icon").src =
  "https://openweathermap.org/img/wn/" + icon +".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp;
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "wind speed: " + speed + "km/h";
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage = (imageUrl + name);
  },

  search: function () {
    this.featchWeather(document.querySelector(".inputSec").value);
  },
};

btnSubmit.addEventListener("click",function(){
weather.search();
});
  
document
.querySelector(".inputSec")
.addEventListener("keyup", function (event){
    if(event.key == "Enter"){
      weather.search();
    }
  });

  // weather.featchWeather("oslo");
// window.addEventListener("load",() =>{
//   const long;
//   const lag;

//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(()=>{

//     })
//   }
// })
