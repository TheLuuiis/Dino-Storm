import '../css/components/Header.css';

const Header = () => {
    return (  
        <header>
            <div className='container__header'>
                <div className="logo__header">
                    <svg data-dc-tpl="7" width="34" height="31" viewBox="0 0 120 110" aria-hidden="true"><polygon data-dc-tpl="8" fill="#F2B01E" stroke="#1E1410" stroke-width="6" stroke-linejoin="round" points="60,10 72.3,43 107.6,44.5 80,66.5 89.4,100.5 60,81 30.6,100.5 40,66.5 12.4,44.5 47.7,43"></polygon></svg>
                    <a href="#">
                        Dino Storm
                    </a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Dinos</a>
                        </li>
                        <li>
                            <a href="#">Armas</a>
                        </li>
                        <li>
                            <a href="#">Implantes</a>
                        </li>
                        <li>
                            <a href="#">Tecnologías</a>
                        </li>
                    </ul>
                </nav>
                <div className="container__play">
                    <a href="#" className='acceder'>
                        Acceder
                    </a>
                    <a href="#" className='play'>
                        Jugar gratis
                    </a>
                </div>
            </div>
        </header>
    );
}
 
export default Header;