import '../css/components/Header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/Referencias/logo.png';

const Header = () => {
    return (  
        <header className="header">
            <div className="logo">
                <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#F2B01E" viewBox="0 0 24 24" ><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"/></svg>
                <span>
                    Dino Storm
                </span>
            </div>
            <nav className="nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'app-nav-link active' : 'app-nav-link'}
                >
                    Inicio
                </NavLink>
                <NavLink
                    to="/dinosaurios"
                    className={({ isActive }) => isActive ? 'app-nav-link active' : 'app-nav-link'}
                >
                    Dinosaurios
                </NavLink>
                <NavLink
                    to="/armas"
                    className={({ isActive }) => isActive ? 'app-nav-link active' : 'app-nav-link'}
                >
                    Armas
                </NavLink>
                <NavLink
                    to="/implantes"
                    className={({ isActive }) => isActive ? 'app-nav-link active' : 'app-nav-link'}
                >
                    Implantes
                </NavLink>
                <NavLink
                    to="/tecnologias"
                    className={({ isActive }) => isActive ? 'app-nav-link active' : 'app-nav-link'}
                >
                    Tecnologías
                </NavLink>
            </nav>
            <span className='header__play'>
                Jugar ahora
            </span>
        </header>
    );
}
 
export default Header;