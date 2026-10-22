import '../css/components/Welcome.css';
import ImgWelcome from '../assets/img/Referencias/welcome.jpg';

const Welcome = () => {
    return (  
        <div className="container__welcome">
            <div className="welcome">
                <div className="description__welcome">
                    <div className="sub__title__welcome">
                        <svg data-dc-tpl="23" width="18" height="17" viewBox="0 0 120 110" aria-hidden="true"><polygon data-dc-tpl="24" fill="#F2B01E" points="60,10 72.3,43 107.6,44.5 80,66.5 89.4,100.5 60,81 30.6,100.5 40,66.5 12.4,44.5 47.7,43"></polygon></svg>
                        <sub>
                            Gratis. Con dinosaurios. Y armas láser.
                        </sub>
                    </div>
                    <h1>
                        Monta un <span>dino</span>, dispara láser y gobierna el pueblo.
                    </h1>
                    <p>
                        Un juego 3D multijugador que se abre en tu navegador. Sin instalar nada: crea tu vaquero, elige tu dinosaurio y sube hasta sheriff.
                    </p>
                    <div className="container__link__welcome">
                        <a href="#" className='btn__orange'>Crear mi vaquero</a>
                        <a href="#" className='btn__white'>Ver el tráiler</a>
                    </div>
                </div>
                <div className="img__welcome">
                    <img src={ImgWelcome} alt="ImgWelcome" />
                </div>
            </div>
        </div>
    );
}
 
export default Welcome;