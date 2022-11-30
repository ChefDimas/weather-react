import React from "react";
import "./weatherIcon.css";
import sun from "../../assets/weatherImages/sun.png";

function weatherIcon() {
    //     const icons = [
    //         Clouds,
    //         Clear,
    //         Tornado,
    //         Squall,
    //         Ash,
    //         Dust,
    //         Sand,
    //         Fog,
    //         Dust,
    //         Haze,
    //         Smoke,
    //         Mist,
    //         Snow,
    //         Rain,
    //         Drizzle,
    //         Thunderstorm,
    //     ];

    // const getIcon = (weather) => {
    //     switch (weather) {
    //     }
    // };

    return (
        <>
            <img
                src="http://openweathermap.org/img/wn/09d@2x.png"
                alt="sun"
                className="image"
            />
        </>
    );
}
export default weatherIcon;
