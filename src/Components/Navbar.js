import React from 'react'
import { Link } from 'react-router-dom';
// import About from './About';

export default function Navbar(props) {

    // const[isClicked, setClicked] = useState(false);

    // const getClicked = (event) => {
    //     setClicked(true);
    // }


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" id='name' to="/">{props.name}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link id='navb' to="/">{props.h}</Link>
                </li>
                <li className="nav-item">
                <Link id='navb' to="/qualification">{props.q}</Link>
                </li>
                <li className="nav-item">
                <Link id='navb' to="/experience">{props.e}</Link>
                </li>
                <li className="nav-item">
                <Link id='navb' to="/achievement">{props.a}</Link>
                </li>
                <li className="nav-item">
                <Link id='navb' to="/projects">{props.p}</Link>
                </li>
            </ul>
      </div>
    </nav>
        {/* {isClicked ? <About/> : null} */}
    </>
  )
}
