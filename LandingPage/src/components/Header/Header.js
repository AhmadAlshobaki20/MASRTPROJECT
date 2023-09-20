import newlogo from "../../assets/student.png";
import { useState } from "react";
import "./Header.css";
function Header() {
  const [toggle, setToggle] = useState(false);

  const ClickToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <header class="Header">
        <div className="logo">
          <img
            src={newlogo}
            alt="logo"
            id="logo"
            style={{ height: "7vmin", width: "7vmin" }}
          />
          <a>VENOM</a>
        </div>
        <nav className={toggle ? "active" : ""}>
          <ul>
            <li>
              <a href=".." onClick={() => setToggle(false)}>
                Home
              </a>
            </li>
            <li>
              <a href=".." onClick={() => setToggle(false)}>
                About us
              </a>
            </li>
            <li>
              <a href=".." onClick={() => setToggle(false)}>
                Services
              </a>
            </li>
            <li>
              <a href=".." onClick={() => setToggle(false)}>
                Contact us
              </a>
            </li>
          </ul>
          <button
            onClick={() => setToggle(false)}
            id="get-app"
            style={{ background: "20b3b3", color: "white" }}
          >
            get the app
          </button>
        </nav>
        <i onClick={ClickToggle} id="minu-burger" class="fa-solid fa-bars"></i>
      </header>
    </>
  );
}

export default Header;
