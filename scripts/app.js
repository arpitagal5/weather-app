const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

updateUI = (data) =>{

    console.log(data);
//const cityDets = data.cityDets;
//const weather = data.weather;
//De Structuring
const { cityDets, weather} = data ;

//update details template
details.innerHTML = `
<h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
              <span class="date">${weather.LocalObservationDateTime.slice(0,10)}</span>

            </div>
`;

// update the night/day and icons if request

//Ternary methd

let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg' ;
time.setAttribute('src', timeSrc);

//it will work exactly same like below code
// let timeSrc = null;
//if(weather.IsDayTime){
  //  timeSrc = 'img/day.svg';
//}else{
  //  timeSrc = 'img/night.svg';
//}
//time.setAttribute('src', timeSrc);

const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src', iconSrc);




//remove the d-none class present

if (card.classList.contains('d-none')){
    card.classList.remove('d-none');
}


};

const updateCity = async (city) =>{

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return{ cityDets, weather };
};

cityForm.addEventListener('submit', e =>{
    //prevent default action
    e.preventDefault();

//get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // set localStorage
    localStorage.setItem('city',city);
});

if(localStorage.getItem('city')){
  updateCity(localStorage.getItem('city'))
  .then(data => updateUI(data))
  .catch(err => console.log(err));
}




/////////////////   126   FORECAST CLASSES ////////

// const cityForm = document.querySelector('form');

// const card = document.querySelector('.card');
// const details = document.querySelector('.details');
// const time = document.querySelector('img.time');
// const icon = document.querySelector('.icon img');
// const forecast = new Forecast();


// updateUI = (data) =>{

//     console.log(data);
// //const cityDets = data.cityDets;
// //const weather = data.weather;
// //De Structuring
// const { cityDets, weather} = data ;

// //update details template
// details.innerHTML = `
// <h5 class="my-3">${cityDets.EnglishName}</h5>
//             <div class="my-3">${weather.WeatherText}</div>
//             <div class="display-4 my-4">
//               <span>${weather.Temperature.Metric.Value}</span>
//               <span>&deg;C</span>
//             </div>
// `;

// // update the night/day and icons if request

// //Ternary methd


// let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg' ;
// time.setAttribute('src', timeSrc);

// //it will work exactly same like below code
// // let timeSrc = null;
// //if(weather.IsDayTime){
//   //  timeSrc = 'img/day.svg';
// //}else{
//   //  timeSrc = 'img/night.svg';
// //}
// //time.setAttribute('src', timeSrc);

// const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
// icon.setAttribute('src', iconSrc);




// //remove the d-none class present
// if (card.classList.contains('d-none')){
//     card.classList.remove('d-none');
// }
// };


// cityForm.addEventListener('submit', e =>{
//     //prevent default action
//     e.preventDefault();

// //get city value
//     const city = cityForm.city.value.trim();
//     cityForm.reset();

//     //update the ui with new city
//     forecast.updateCity(city)
//     .then(data => updateUI(data))
//     .catch(err => console.log(err));

//     // set localStorage
//     localStorage.setItem('city',city);
// });

// if(localStorage.getItem('city')){
//   forecast.updateCity(localStorage.getItem('city'))
//   .then(data => updateUI(data))
//   .catch(err => console.log(err));
// }

