import { useState } from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
function App() {
  const [data, setData] = useState(null);
  async function handleClick() {
    const response = await fetch("http://localhost:3000/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const d = await response.json();
    setData(d.days[0].temp);
  }

  setTimeout(() => {
    handleClick();
    console.log("useEffect!!");
  }, 10000);

  return (
    <>
      <NavBar></NavBar>
      <div className="Weatherdiv">
        <button>  {JSON.stringify(data)}</button>
      </div>
    </>
  );
}

export default App;
