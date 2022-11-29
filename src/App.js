import React from "react";
import axios from "axios";
import Location from "./location/Location";
import "./app.css";
import sun from "../src/assets/weatherImages/sun.png";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";
import { WiStrongWind } from "react-icons/wi";

function App() {
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=Vienna&appid=46534d0028a701b24f7e31b7931dce87&units=metric";
    const city = "Vienna";
    const description = "Cloudy";

    return (
        <main>
            <div className="app">
                <div className="container">
                    <div className="top">
                        <h1>Right now in&#160;</h1>
                        <Location />
                        <h1>, it's mostly&#160;</h1>
                        <span className="description">{description}.</span>
                    </div>
                    <div className="bottom">
                        <div className="image">
                            <img src={sun} alt="sun" />
                        </div>
                        <div className="temp">
                            <h1 className="mainTemp">64</h1>
                            <div className="tempMinMax">
                                <h4 className="minTemp">61 ℃ /</h4>
                                <h4 className="maxTemp">67 ℃</h4>
                            </div>
                        </div>
                        <div className="indicators">
                            <div className="indicator">
                                <TbTemperature />
                                <h4 className="pressure">8 mph</h4>
                            </div>
                            <div className="indicator">
                                <MdOutlineWaterDrop />
                                <h4 className="humidity">66 %</h4>
                            </div>
                            <div className="indicator">
                                <WiStrongWind />
                                <h4 className="windSpeed">4 KM/H</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
