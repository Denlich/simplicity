import { Link } from "react-router-dom";

import '../../index.css';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='row container header'>
      <div className='col'>
        <Link to="/">
          <h2 className="thin">Simplicity</h2>
        </Link>
      </div>

      <div className='row col router'>
        <Link to="/">work</Link>
        <Link to="/about" className="mv">about</Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
}