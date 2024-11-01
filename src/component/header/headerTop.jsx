import { Link } from "react-router-dom";

const HeaderTop = ({setToggle, toggle}) => {
    return ( 
    <div className="header-top">
        <div onClick={() => setToggle(prev => !prev)} className="header-top-menu">
            {toggle ? <li className="bi bi-x-lg"></li> : <li className="bi bi-list"></li>}
        </div>
        <div className="header-top-phone">
            <li className="bi bi-telephone-fill">123-456-789</li>
        
        </div>
        <div className="header-top-text">
            Welcom To Online Book Store
        </div>
        <Link to="/login" className="header-top-link">
            <li className="bi bi-person-fill">Login</li>
            
        </Link>
    </div>
    );
}

export default HeaderTop;