import React, { useState, useEffect } from "react";
import "./LeftPart.css";

function Left() {
  // Define the types for the state variables.
  const [temp, setTemp] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchCurrentWeather() {
    setLoading(true);
    // Using the Surface Weather Observations endpoint with a bounding box for Ottawa.
    const bbox = "-76,45,-75,46"; // adjust coordinates as needed
    const url = `https://api.weather.gc.ca/collections/swob-realtime/items?f=json&bbox=${bbox}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      // Log the entire response to inspect its structure.
      console.log("Fetched data:", data);

      if (data.features && data.features.length > 0) {
        // Here we assume the first feature corresponds to Ottawa.
        const currentObs = data.features[0].properties;
        // The property name for temperature may vary (e.g., air_temp or temperature).
        const currentTemp = currentObs.air_temp || currentObs.temperature;
        setTemp(currentTemp);
        setError(null);
      } else {
        setError("No weather observations found for the specified area.");
        setTemp(null);
      }
    } catch (err: unknown) {
      // Check if the error is an instance of Error to safely extract the message.
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
      setTemp(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Fetch weather data on component mount.
    fetchCurrentWeather();
    // Optionally update weather data every 10 minutes.
    const interval = setInterval(fetchCurrentWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <div className="currentTemp">
        <div className="displayTemp">
          {error && <p className="error">Error: {error}</p>}
          {loading ? (
            <p>Loading current weather...</p>
          ) : temp !== null ? (
            <p>Current Temperature in Ottawa: {temp}°C</p>
          ) : (
            <p>No temperature data available.</p>
          )}
        </div>
      </div>
      <div>Additional content here</div>
    </div>
  );
}

export default Left;
