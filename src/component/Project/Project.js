import { NavLink  } from "react-router-dom";

import '../../index.css';

export default function Project({ img, name }) {
  return (
    <NavLink className='project row' to={`/${name}`}>
      <div className='imgContainer'>
        <img src={img} width="100%" height="100%" />
      </div>
      <div className='markedProjectTitle'>
        <h1 className='thin'>{ name }</h1>
        <div className='mark' />
      </div>
    </NavLink>
  );
}