
import "./App.css";
import NavBar from "./Components/Navbar";
import Left from "./Components/LeftPart";
function App() {
  

  return (
    <div className="content">
      <NavBar></NavBar>
      <div className="main">
        <div className="bodyLeft">
          <Left></Left>
        </div>
        <div className="bodyRight">dbhburt</div>
      </div>
    </div>
  );
}

export default App;
