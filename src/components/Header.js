import { Navbar } from "react-bootstrap";
import "./Styles/Header.css"
import "./Images/logo.jpg"
function Header() {
    return (   
        <Navbar className="header">
            <img src="logo.jpg" width="60px"/>
            <ul class="navbar-nav">
                <li  class="nav-item active">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li  class="nav-item active">
                    <a class="nav-link" href="#news">News</a>
                </li>
                <li  class="nav-item active">
                    <a class="nav-link" href="#open-account">OpenAccount</a>
                </li>
                <li  class="nav-item active">
                    <a class="nav-link" href="#open-account">Home</a>
                </li>
            </ul>
        </Navbar>      
    );
  }
export default Header;
  