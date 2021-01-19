// const key = 'WbaxxW3knQIG2yoFc1so9JAdbbqZhcWq';
// //get Weather information
// const getWeather = async (id) => {

// const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
// const query = `${id}?apikey=${key}`;

// const response = await fetch(base + query);
// const data = await response.json();
// return data[0];
// console.log(data.city);

// };

// //getCity Information
// const getCity = async(city) =>{
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query =`?apikey=${key}&q=${city}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
//     console.log(data[0]);
//     return data[0];
// };


// /*
// getCity('manchester').then(data =>{
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));
// */

class Forecast{
    constructor(){
        this.key = 'WbaxxW3knQIG2yoFc1so9JAdbbqZhcWq';
        this.cityURL =  'http://dataservice.accuweather.com/currentconditions/v1/';
        this.weatherURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return{ cityDets, weather };

    }
    async getCity(city){
        const query = `?apikey=${key}&q=${city}`;
        const response = await fetch(this.cityURL+query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURL+query);
        const data = await response.json();
        return data[0];

    }
}



//MAKING FORECAST USING CLASS AND CONSTRUCTOR OBJECT  //   126  // 


// class Forecast{
//     constructor(){
//         this.key = 'WbaxxW3knQIG2yoFc1so9JAdbbqZhcWq';
//         this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
//         this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     }
//     async updateCity(city){

//         const cityDets = await this.getCity(city);
//         const weather = await this.getWeather(cityDets.Key);
//         return{ cityDets, weather };
//     }
//     async getCity(city){

//         const query =`?apikey=${this.key}&q=${city}`;
//         const response = await fetch(this.cityURI + query);
//         const data = await response.json();
//         return data[0];
//     }
//     async getWeather(id){
//         const query = `${id}?apikey=${this.key}`;
//         const response = await fetch(this.weatherURI + query);
//         const data = await response.json();
//         return data[0];
//     }
// }


