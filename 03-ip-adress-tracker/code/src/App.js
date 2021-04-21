import "./App.css";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { useEffect, useState } from "react";
import Info from "./components/Info";
import axios from "axios";

function App() {
  const ip = "77.47.218.109";
  const api_key = "at_O7ACF17wFxNr9UlF3Z0LOb1NREykS";
  const api_url = "https://geo.ipify.org/api/v1?";
  const url = api_url + "apiKey=" + api_key + "&ipAddress=" + ip;

  const [info, setInfo] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setInfo(result.data);
      setLocation(result.data.location);
      console.log(result.data);
    };

    fetchData();
  }, [url]);
  return (
    <div>
      <Header />
      <Info info={info} location={location} />
      <Map location={location} />
    </div>
  );
}

export default App;
