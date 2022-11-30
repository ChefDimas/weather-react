import React, { useState, useEffect } from "react";
import axios from "axios";
import Location from "./location/Location";
import "./app.css";
import sun from "../src/assets/weatherImages/sun.png";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";
import { WiStrongWind } from "react-icons/wi";

function App() {
    const [description, setDescription] = useState("sunny");
    const [data, setData] = useState("");

    const childToParentData = (data) => {
        setData(data);
    };

    return (
        <main>
            <div className="app">
                <div className="container">
                    <div className="top">
                        <h1>Right now in&#160;</h1>
                        <Location childToParentData={childToParentData} />
                        <h1>, it's mostly&#160;</h1>
                        {data.weather ? (
                            <span className="description">
                                {data.weather[0].main}.
                            </span>
                        ) : (
                            <span className="description">sunny.</span>
                        )}
                    </div>
                    <div className="bottom">
                        <div className="image">
                            <img src={sun} alt="sun" />
                        </div>
                        {data.main ? (
                            <div className="temp">
                                <h1 className="mainTemp">{data.main.temp}</h1>
                                <div className="tempMinMax">
                                    <h4 className="minTemp">
                                        {data.main.temp_min}℃ /
                                    </h4>
                                    <h4 className="maxTemp">
                                        {data.main.temp_max}℃
                                    </h4>
                                </div>
                            </div>
                        ) : (
                            <div className="temp">
                                <h1 className="mainTemp">0.00</h1>
                                <div className="tempMinMax">
                                    <h4 className="minTemp">0 ℃ /</h4>
                                    <h4 className="maxTemp">0 ℃</h4>
                                </div>
                            </div>
                        )}

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
