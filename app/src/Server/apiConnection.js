import express, { json } from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(json());

app.get("/data", async (req, res) => {
  try {
    const key =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ottawa?unitGroup=metric&include=current&key=69NY4GEZAZGY54J5MBTHN8A3G&contentType=json";
    
    const response = await fetch(key);
    const data = await response.json(); 

    res.status(200).json(data); 
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen("3000", (err) => {
  if (err) {
    console.log("Error occured in Server not listing on 3000");
  } else {
    console.log("Server is listing on 3000!");
  }
});
