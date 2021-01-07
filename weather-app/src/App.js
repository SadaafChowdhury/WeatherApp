import React from "react";
import './App.css';
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons-master/css/weather-icons.css';

//api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const API_key = "36ec3be2c28e893785829fc96b604d4d";

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async() =>{
    const api_call = await fetch(`http:api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);

    const response = await api_call.json();
    console.log(response);
  }

  render(){
    return(
      <div className="App">
        <Weather/>
      </div>
    );
  }

}


export default App;
