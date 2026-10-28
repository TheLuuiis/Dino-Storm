import '../css/pages/Home.css';
import Welcome from '../assets/img/Referencias/welcome.jpg';

const Home = () => {
    return (
        <section className="container__home">
            <div className="home">
                <div className="description__home">
                    <div className="sub__title">
                        <svg data-dc-tpl="23" width="20" height="19" viewBox="0 0 120 110" aria-hidden="true"><polygon data-dc-tpl="24" fill="#F2B01E" points="60,10 72.3,43 107.6,44.5 80,66.5 89.4,100.5 60,81 30.6,100.5 40,66.5 12.4,44.5 47.7,43"></polygon></svg>
                        <sub>
                            Gratis. Con dinosaurios. Y armas láser.
                        </sub>
                    </div>
                    <h1>
                        Monta un dino, dispara láser y gobierna el pueblo.
                    </h1>
                    <p>
                        Un juego 3D multijugador que se abre en tu navegador. Sin instalar nada: crea tu vaquero, elige tu dinosaurio y sube hasta sheriff.
                    </p>
                    <div className="container__home__btn">
                        <a
                            href="https://www.dinostorm.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn__ btn__home__active"
                        >
                            Crear mi vaquero
                        </a>
                        <a
                            href="https://www.dinostorm.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn__ btn__home"
                        >
                            Ver tráiler
                        </a>
                    </div>
                </div>
                <div className="container__home__img">
                    <img src={Welcome} alt="img__welcome"/>
                    <div className="comment__home__img">
                        <div className="comment comment__active">
                            <p>
                                Periodo
                            </p>
                            <h3>
                                Cretácico
                            </h3>
                        </div>
                        <div className="comment">
                            <p>
                                Dieta:
                            </p>
                            <h3>
                                Carnívoro
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;