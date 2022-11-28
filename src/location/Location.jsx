import React, {useState, useEffect} from "react";
import "./location.css"

const Location = () => {
	const [location, setLocation] = useState("")

	useEffect(() => {
		adjustInputSize()
	}, [location])

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleChange = (e) => {
		setLocation(e.target.value)
	}

	const handleClearField = (e) => {
		setLocation("")
	}

	const adjustInputSize = () => {
		const locationButton = document.getElementById("userLocation")
		if (location.length < 1) {
			locationButton.style.width = locationButton.placeholder.length + 1 + 'ch'
		} else {
			locationButton.style.width = location.length + 'ch'
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					id="userLocation"
					className="location"
					onChange={handleChange}
					onFocus={handleClearField}
					placeholder=" "
					spellCheck="false"
					value={location}
					autoFocus
				/>
			</form>
		</>
	)
};

export default Location;