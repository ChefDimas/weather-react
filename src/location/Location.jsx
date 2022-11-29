import React, { useState, useEffect } from "react";
import axios from "axios";
import "./location.css";

const Location = () => {
    const [location, setLocation] = useState("");
    const [data, setData] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=46534d0028a701b24f7e31b7931dce87&units=metric`;

    const searchLocation = (e) => {
        if (e.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
            });
            setLocation("");
        }
    };

    useEffect(() => {
        adjustInputSize();
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setLocation(e.target.value);
    };

    const handleClearField = (e) => {
        setLocation("");
    };

    const adjustInputSize = () => {
        const locationButton = document.getElementById("userLocation");
        if (location.length < 1) {
            locationButton.style.width =
                locationButton.placeholder.length + 1 + "ch";
        } else {
            locationButton.style.width = location.length + "ch";
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="userLocation"
                    className="location"
                    onChange={handleChange}
                    onFocus={handleClearField}
                    onKeyPress={searchLocation}
                    placeholder=" "
                    spellCheck="false"
                    value={location}
                    autoFocus
                />
            </form>
        </>
    );
};

export default Location;
