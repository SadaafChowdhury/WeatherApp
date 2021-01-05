import React from "react";
import './App.css';
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons-master/css/weather-icons.css';
function App() {
  return (
    <div className="App">
    <Weather/>
    </div>
  );
}

export default App;
