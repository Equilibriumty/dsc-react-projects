import "../styles/Header.css";
import { useState } from "react";
export const Header = () => {
  const [ip, setIp] = useState("");
  console.log(ip);
  return (
    <div className="header-body">
      <div className="header-text">IP Address Tracker</div>
      <form className="search-wrapper cf">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
          required
          onChange={(e) => {
            setIp(e.target.value);
          }}
        />
        <button type="submit">{">"}</button>
      </form>
    </div>
  );
};
