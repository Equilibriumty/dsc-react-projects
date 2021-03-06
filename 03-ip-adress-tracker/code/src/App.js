import "./App.css";
import { Map } from "./components/Map";
import { useEffect, useState } from "react";
import Info from "./components/Info";
import axios from "axios";

function App() {
  const [info, setInfo] = useState({});
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [ip, setIp] = useState("");

  const api_key = "at_O7ACF17wFxNr9UlF3Z0LOb1NREykS";
  const api_url = "https://geo.ipify.org/api/v1?";
  const url = api_url + "apiKey=" + api_key + "&ipAddress=" + ip;

  const handleChange = (e) => {
    setIp(e.target.value);
  };

  const handleSubmit = () => {
    setIp(ip);
    console.log(ip);
  };

  const fetchData = async () => {
    const result = await axios(url);

    setInfo(result.data);
    setLocation(result.data.location);
    console.log(result.data);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <div>
      <div className="header-body">
        <div className="header-text">IP Address Tracker</div>
        <div className="search-wrapper cf">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            required
            onChange={handleChange}
          />
          <button>{">"}</button>
        </div>
      </div>
      <Info info={info} location={location} />
      <Map location={location} />
    </div>
  );
}

export default App;
