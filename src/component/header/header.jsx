import "./header.css";
import HeaderTop from "./headerTop";
import HeaderMiddle from "./headerMiddle";
import Navbar from "./navBar";
import { useState } from "react";

const Header = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <header className="header">

            <HeaderTop setToggle={setToggle} toggle={toggle}/>
            <HeaderMiddle/>
            <Navbar toggle={toggle} setToggle={setToggle}/>
        </header>
    );
}

export default Header;