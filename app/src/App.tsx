import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
function App() {
  const [data, setData] = useState(null);
  async function handleClick() {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ottawa?unitGroup=metric&include=current&key=69NY4GEZAZGY54J5MBTHN8A3G&contentType=json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const d = await response.json();
    setData(d.currentConditions.temp);
  }

  setTimeout(() => {
    handleClick();
    console.log("useEffect!!");
  }, 1000000);

  return (
    <div className="content">
      <NavBar></NavBar>
      <div className="main">
        <div className="bodyLeft">
          <div className="Weatherdiv">{JSON.stringify(data)}</div>
        </div>
        <div className="bodyRight">dbhburt</div>
      </div>
    </div>
  );
}

export default App;
