import { Link } from "react-router-dom";

const Navbar = ({toggle, setToggle}) => {
    return ( 

        <div style={{left: toggle && '0'}} className="navbar">
            {/* <ul className="navbar-links">

                <li onClick={() => setToggle(false)} className="navbar-link">
                    <Link to="/">Home</Link>
                </li>                

                <li onClick={() => setToggle(false)} className="navbar-link">
                    <Link to="/authors">Authors</Link>
                </li>

                <li onClick={() => setToggle(false)} className="navbar-link">
                    <Link to="/about"> About Us</Link>
                </li>

                <li onClick={() => setToggle(false)} className="navbar-link">
                    Contact Us
                </li>

                <li onClick={() => setToggle(false)} className="navbar-link">
                    <Link to="/register">Register</Link>
                </li>

            </ul> */}

            <ul className="navbar-links">

                <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
                    Home
                </Link>                

                <Link to="/authors" onClick={() => setToggle(false)} className="navbar-link">
                    Authors
                </Link>

                <Link to="/about" onClick={() => setToggle(false)} className="navbar-link">
                    About Us
                </Link>

                <Link to="/contact" onClick={() => setToggle(false)} className="navbar-link">
                    Contact Us
                </Link>

                <Link to="/register" onClick={() => setToggle(false)} className="navbar-link">
                    Register
                </Link>

            </ul>
        </div>
    );
}

export default Navbar;