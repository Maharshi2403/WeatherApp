import "./Navbar.css";

function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li className="li">
          <img
            className="img"
            src="https://cdn-icons-png.flaticon.com/512/7133/7133364.png"
          ></img>
        </li>
        <li className="li">
          <p>Weather App</p>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
