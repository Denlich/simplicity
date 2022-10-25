import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MenuIcon from "mdi-react/MenuIcon";

import "../../index.css";
import "./Navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  let { width } = useWindowDimensions();

  useEffect(() => {
    width >= 768 ? setToggle(true) : setToggle(false);
  }, [width]);

  return (
    <div className="nav nav--border ">
      <div className="col">
        <Link to="/">
          <h2 className="thin">Simplicity</h2>
        </Link>
      </div>
      {width <= 768 && (
        <MenuIcon
          onClick={() => setToggle(!toggle)}
          color="#140c40"
          size="2rem"
        />
      )}
      {toggle && (
        <ul className="row nav__list">
          <li className="nav__item">
            <Link to="/">work</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__item mv" to="/about">
              about
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__item" to="/contact">
              contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
