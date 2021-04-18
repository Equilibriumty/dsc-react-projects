import "./App.css";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { useEffect } from "react";
import Info from "./components/Info";

function App() {
  const ip = "46.219.209.158";
  const api_key = "at_O7ACF17wFxNr9UlF3Z0LOb1NREykS";
  const api_url = "https://geo.ipify.org/api/v1?";
  const url = api_url + "apiKey=" + api_key + "&ipAddress=" + ip;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
      });
  }, [url]);
  return (
    <div>
      <Header />
      <Info />
      <Map />
    </div>
  );
}

export default App;
