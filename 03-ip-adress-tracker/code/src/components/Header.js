import "../styles/Header.css";

export const Header = () => {
  return (
    <div className="header-body">
      <div className="header-text">IP Address Tracker</div>
      <form className="search-wrapper cf">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          required
        ></input>
        <button type="submit">{">"}</button>
      </form>
    </div>
  );
};
