import "./Navbar.css";

function NavBar() {
  return (
    <header className="nav">
      <div className="logo-div">
        <img
          className="logo-img"
          src="https://cdn-icons-png.flaticon.com/512/7133/7133364.png"
        ></img>
        <h1>Weather App</h1>
      </div>
      <div className="search-div">
        <div className="search-box">
          <button className="search-logo-button"> <img className="search-logo" src="https://cdn-icons-png.flaticon.com/512/64/64673.png" /></button>
          <input className="search-box-input" type="text" defaultValue="Search City"></input>
        </div>
      </div>
      <div className="city-div"></div>
    </header>
  );
}

export default NavBar;
