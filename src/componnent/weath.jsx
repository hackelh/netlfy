import React, { useState, useEffect } from "react"
function Weath() {
    const [ville, setVille] = React.useState("");
    const [temp, setTemp] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [icon, setIcon] = React.useState("");
    const [isReady, setReady] = React.useState(false);
    React.useEffect(() => {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=18.08581&lon=-15.9785&appid=485eaae13c44dca81805beb5cfe0e7b3&units=metric"
      )
        .then(result => result.json())
        .then(jsonresult => {
          setVille(jsonresult.name);
          setTemp(jsonresult.main.temp);
          setDesc(jsonresult.weather[0].main);
          setIcon(jsonresult.weather[0].icon);
          setReady(true);
        })
        .catch(err => console.error(err));
    }, []);
    if (isReady) {
      return (
        <div className="App">
          <h3>{ville}</h3>
          <p>Temperatures: {temp} °C</p>
          <p>Descriptions: {desc}</p>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
  export default Weath;