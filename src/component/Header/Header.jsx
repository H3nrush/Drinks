import { Link } from "react-router-dom";
import './Header.scss';
function Header (){
    return (
    <header>
        <div className="nav-container">
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
            </ul>
        </nav>
        </div>
    </header>
    );
};
export default Header;