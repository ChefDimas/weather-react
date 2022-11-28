import React, {useState, useEffect} from "react";
import axios from "axios";
import "./photos.json"

function App() {
	const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=Vienna&appid=46534d0028a701b24f7e31b7931dce87&units=metric"
	const city = 'vienna';

	const cityUrl = `https://api.unsplash.com/search/photos?page=1&query=${city}&per_page=1&client_id=EjSXxfWNLqBBQFX0JfnMxX_P_P4TMtWE1qaT_3CmSyc`
	const [photo, getPhoto] = useState('')

	useEffect(() => {
		getAllPhotos();
	}, []);
	const getAllPhotos = () => {
		axios.get(cityUrl)
			.then((response) => {
				const allPhotos = response.data.results.urls.full
				getPhoto(allPhotos)
			})
	}
	return (
		<main className="min-h-screen min-w-screen">
			<div className="top flex justify-between min-h-[60vh]  px-10 py-12">

				<div className="left">
					<span className="time block text-4xl mb-3">
						11:10 AM
					</span>
					<span className="date block">
						Friday, December 26, 2022
					</span>
				</div>
				<div className="right">
					<span className="city block text-5xl mb-3">Vienna</span>
					<span className="country block text-2xl">Austria</span>

				</div>
			</div>
			<div className="bot"></div>
		</main>
	);
}

export default App;
