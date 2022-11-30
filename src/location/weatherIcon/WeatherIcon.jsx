import React from "react";
import "./weatherIcon.css";
import {
    WiCloudy,
    WiDaySunny,
    WiTornado,
    WiSandstorm,
    WiSnow,
    WiRain,
    WiStormShowers,
    WiThunderstorm,
} from "weather-icons-react";

function weatherIcon(data) {
    // const icons = [
    //     WiCloudy,
    //     WiDaySunny,
    //     WiTornado,
    //     WiSandstorm,
    //     WiSnow,
    //     WiRain,
    //     WiThunderstorm, //drizzle
    //     WiStormShowers,
    // ];

    // const getIcon = (weather) => {
    //     switch (weather) {
    //         case "Clouds":
    //             return icons[0];
    //             break;
    //         default:
    //             return icons[1];
    //     }
    // };

    return (
        <>
            {data.data.weather ? (
                data.data.weather[0].main === "Clouds" ? (
                    <div className="weather-cloud">
                        <div className="cloud"></div>
                        <div className="cloud"></div>
                    </div>
                ) : (
                    "dsada"
                )
            ) : (
                console.log("error")
            )}
        </>
    );
}
export default weatherIcon;

// <div class="weather-cloud">
//     <div class="cloud"></div>
//     <div class="cloud"></div>
// </div>
