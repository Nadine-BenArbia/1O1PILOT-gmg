import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "./Button/Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handelClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            101pilot <i className=" fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handelClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/AddJob"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Add Job
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/jobList"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Open Jobs
              </Link>
            </li>
            
          </ul>
          {button && <Button buttonStyle="btn--outline"> <Link  to ="/Login"> Login</Link> </Button>}
          {button && <Button buttonStyle="btn--outline"><Link to="/Register" >Register </Link> </Button>}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
