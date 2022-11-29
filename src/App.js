import React, { useState } from "react";
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
                        <span className="description">cloudy.</span>
                    </div>
                    <div className="bottom">
                        <div className="image">
                            <img src={sun} alt="sun" />
                        </div>
                        <div className="temp">
                            {data.main ? (
                                <h1 className="mainTemp">{data.main.temp}</h1>
                            ) : null}
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
