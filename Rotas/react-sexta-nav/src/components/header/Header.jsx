import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return <>
        <header className="container">
            <div className='logo'>
                LOGO
            </div>

            <nav className='navigation'>
                <ul>
                    <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/home"}>Home</NavLink>
                    <NavLink to={"/contato"}>Contato</NavLink>
                    <NavLink to={"/sobre"}>Sobre</NavLink>
                    <NavLink to={"/produto"}>Produto</NavLink>
                </ul>
            </nav>
        </header>
    </>

}

export default Header;