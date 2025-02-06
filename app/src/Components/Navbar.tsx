import "./Navbar.css";

function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li className="li">
          <img src="https://cdn-icons-png.flaticon.com/512/7133/7133364.png" className="img" alt="weather" />
        </li>
        <li className="li">
          <p>Weather App</p>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
