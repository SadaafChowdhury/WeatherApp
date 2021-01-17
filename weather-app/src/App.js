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
    this.state = {
      city : undefined,
      country : undefined,
      icon : undefined,
      main : undefined,
      celsius : undefined,
      temp_max : undefined,
      temp_min : undefined,
      description: "",
      error: false
    };
    this.getWeather();
    this.icon = {
      Thunderstorm: "wi-thunderstorm"
    }
  }

  getWeather = async() =>{
    const api_call = await fetch(`http:api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`);
    const response = await api_call.json();
    console.log(response);
    this.setState({
      city: response.name,
      country : response.sys.country,
      celsius: response.main.temp - 273,
      temp_min: response.main.temp_min-273,
      temp_max: response.main.temp_max-273,
      description: response.weather[0].description,
      icon: this.icon.Thunderstorm
    })
  };

  render(){
    return(
      <div className="App">
        <Weather city={this.state.city} country={this.state.country} celsius={this.state.celsius} temp_min={this.state.temp_min}
        temp_max={this.state.temp_max} description={this.state.description} icon={this.state.icon}/>
      </div>
    );
  }

}


export default App;
