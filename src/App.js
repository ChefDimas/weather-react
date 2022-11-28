import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import Location from "./location/Location";
import "./app.css"

function App() {

	const url = "https://api.openweathermap.org/data/2.5/weather?q=Vienna&appid=46534d0028a701b24f7e31b7931dce87&units=metric"
	const city = 'Vienna'
	const description = 'Cloudy'
	return (
		<main>
			<div className="app">
				<div className="container">
					<div className="top">
						<h1>Right now in&#160;</h1>
							<Location/>
						<h1>, it's mostly&#160;</h1>
							<span className="description">{description}</span>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
