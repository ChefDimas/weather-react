import React from "react";
import "./weatherIcon.css";
// import {
//     WiCloudy,
//     WiDaySunny,
//     WiTornado,
//     WiSandstorm,
//     WiSnow,
//     WiRain,
//     WiStormShowers,
//     WiThunderstorm,
// } from "weather-icons-react";

function weatherIcon(data) {
    const obj = data[Object.keys(data)[0]];
    obj.weather
        ? (() => {
              switch (obj.weather[0].main) {
                  case "Clouds":
                      return (
                          <div className="weather-cloud">
                              <div className="cloud"></div>
                              <div className="cloud"></div>
                          </div>
                      );
                  default:
                      return null;
              }
          })()
        : console.log("error");
    // return <>{console.log(obj)}</>;
}
export default weatherIcon;
