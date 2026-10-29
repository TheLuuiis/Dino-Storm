import React, { useState } from 'react';
import '../css/pages/Implantes.css';

  export const implantes = [

    {
      id: 1, slug: "armadura", name: "Implante de Armadura", group: "basico", type: "defensivo", stat: "armadura", icon: "shield",
      image: "/src/assets/img/Implantes/Armadura.png",
      description: "¿Siempre estás en medio de batallas? Esta mejora de armadura está hecha para ti. Aumenta la armadura de tu dino de manera que reciba menos daño.",
      requiresSlot: false,
      estadisticas: { vitalidad: 60, armadura: 95, recuperacion: 40 }
    },
    {
      id: 2, slug: "vitalidad", name: "Implante de Vitalidad", group: "basico", type: "defensivo", stat: "vitalidad", icon: "heart",
      image: "/src/assets/img/Implantes/Vitalidad.png",
      description: "¿Te preocupa que tu dinosaurio pierda demasiada vida? ¿Usas demasiadas pociones? En ese caso los implantes de Vitalidad son para ti. Aumenta la vida de tu dinosaurio con ellos.",
      requiresSlot: false,
      estadisticas: { vitalidad: 95, armadura: 50, recuperacion: 60 }
    },
    {
      id: 3, slug: "fuerza", name: "Implante de Fuerza", group: "basico", type: "ofensivo", stat: "fuerza", icon: "fist",
      image: "/src/assets/img/Implantes/Fuerza.png",
      description: "Simplemente más músculos para tu dinosaurio. Conseguirás una mayor capacidad de daño, pero recuerda que los músculos no lo son todo.",
      requiresSlot: false,
      estadisticas: { vitalidad: 70, armadura: 40, recuperacion: 50 }
    },
    {
      id: 4, slug: "recuperacion", name: "Implante de Recuperación", group: "basico", type: "soporte", stat: "recuperacion", icon: "regen",
      image: "/src/assets/img/Implantes/Recuperacion.png",
      description: "Tras muchos años de investigación nuestros doctores dieron con ello. Con este implante tu dinosaurio recuperará vida más rápido.",
      requiresSlot: false,
      estadisticas: { vitalidad: 80, armadura: 60, recuperacion: 95 }
    },
    {
      id: 5, slug: "agilidad", name: "Implante de Agilidad", group: "basico", type: "soporte", stat: "agilidad", icon: "dodge",
      image: "/src/assets/img/Implantes/Agilidad.png",
      description: "¿Te parece que tu dinosaurio es algo lento en sus reacciones? Entonces ponle un implante de agilidad. Aumentará su habilidad para esquivar ataques.",
      requiresSlot: false,
      estadisticas: { vitalidad: 50, armadura: 30, recuperacion: 70 }
    },
    {
      id: 6, slug: "resistencia", name: "Implante de Resistencia", group: "basico", type: "soporte", stat: "velocidad", icon: "rocket",
      image: "/src/assets/img/Implantes/Aguante.png",
      description: "La velocidad puede ser vital a veces. Nadie puede cogerte si eres más rápido que otros. Con el implante de resistencia aumentarás la velocidad de tu dinosaurio.",
      requiresSlot: false,
      estadisticas: { vitalidad: 85, armadura: 75, recuperacion: 50 }
    },
    {
      id: 7, slug: "estabilidad", name: "Implante de Estabilidad", group: "basico", type: "defensivo", stat: "estabilidad", icon: "anchor",
      image: "/src/assets/img/Implantes/Estabildad.png",
      description: "¿Eres de los que evitan el conflicto? Usa la mejora de estabilidad para que nadie te pare. Disminuye la duración de las condiciones de aturdimiento, confusión y miedo.",
      requiresSlot: false,
      estadisticas: { vitalidad: 90, armadura: 85, recuperacion: 40 }
    },
    {
      id: 8, slug: "furia", name: "Implante de Furia", group: "especial", type: "ofensivo", stat: "furia", icon: "flame",
      image: "/src/assets/img/Implantes/Furia.png",
      description: "Aumenta la ganancia de potencia extra por la conversión del daño recibido. Debe instalarse en una ranura de Dino Implante para que funcione.",
      requiresSlot: true,
      estadisticas: { vitalidad: 60, armadura: 30, recuperacion: 80 }
    },
    {
      id: 9, slug: "escudo", name: "Implante de Escudo", group: "especial", type: "defensivo", stat: "resistencia-armas", icon: "shield",
      image: "/src/assets/img/Implantes/Escudo.png",
      description: "Aumenta la resistencia de tu dinosaurio al daño de arma recibido. Necesita ser instalado en una ranura de Dino Implante para funcionar.",
      requiresSlot: true,
      estadisticas: { vitalidad: 75, armadura: 100, recuperacion: 50 }
    },
    {
      id: 10, slug: "garras", name: "Implante de Garras", group: "especial", type: "ofensivo", stat: "alcance-corto", icon: "claw",
      image: "/src/assets/img/Implantes/Garras.png",
      description: "Permite a tu dinosaurio una oportunidad de golpear objetivos adicionales en corta distancia. Necesita ser instalado en una ranura de Dino Implante para que funcione.",
      requiresSlot: true,
      estadisticas: { vitalidad: 50, armadura: 40, recuperacion: 45 }
    },
    {
      id: 11, slug: "reflexion-de-arma", name: "Implante de Reflexión de Arma", group: "especial", type: "defensivo", stat: "reflexion", icon: "reflect",
      image: "/src/assets/img/Implantes/Reflexion.png",
      description: "Garantiza una oportunidad a tu dinosaurio de reflejar temporalmente un poco del daño recibido de armas. Necesita ser instalado en una ranura de Dino Implante para que funcione.",
      requiresSlot: true,
      estadisticas: { vitalidad: 80, armadura: 90, recuperacion: 60 }
    },
    {
      id: 12, slug: "regulacion-de-calor", name: "Implante de Regulación de Calor", group: "especial", type: "defensivo", stat: "resistencia-parálisis", icon: "thermo",
      image: "/src/assets/img/Implantes/Calor.png",
      description: "Disminuye la duración de las condiciones de parálisis y ralentización. Debe instalarse en una ranura de Dino Implante para que funcione.",
      requiresSlot: true,
      estadisticas: { vitalidad: 85, armadura: 70, recuperacion: 85 }
    }
  ];

const Implantes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const currentImplante = implantes[currentIndex];

  const handleNext = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === implantes.length - 1 ? 0 : prev + 1));
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? implantes.length - 1 : prev - 1));
      setIsFading(false);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (isFading || index === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 300);
  };

  return (
    <div className="container__implantes">
      <div className="sub__container__implantes">
        <div className="container__info__implantes">
          
          <div className="description__implantes">
            <div className={`inner__fade ${isFading ? 'fade-out' : 'fade-in'}`}>
              <h3 className="subtitle__implantes">DINO IMPLANTES</h3>
              <h1 className="title__implantes">{currentImplante.name.toUpperCase()}</h1>
              <p className="text__implantes">{currentImplante.description}</p>
              
              <div className="buttons__container">
                <button className="btn__instalar">INSTALAR</button>
                <button className="btn__mejorar">MEJORAR</button>
              </div>

              <div className="stats__container">
                <div className="stat__row">
                  <span className="stat__name">VITALIDAD</span>
                  <div className="stat__bar__bg">
                    <div className="stat__bar__fill" style={{ width: `${currentImplante.estadisticas.vitalidad}%` }}></div>
                  </div>
                  <span className="stat__value">{currentImplante.estadisticas.vitalidad}%</span>
                </div>
                <div className="stat__row">
                  <span className="stat__name">ARMADURA</span>
                  <div className="stat__bar__bg">
                    <div className="stat__bar__fill bg-white" style={{ width: `${currentImplante.estadisticas.armadura}%` }}></div>
                  </div>
                  <span className="stat__value">{currentImplante.estadisticas.armadura}%</span>
                </div>
                <div className="stat__row">
                  <span className="stat__name">RECUPERACIÓN</span>
                  <div className="stat__bar__bg">
                    <div className="stat__bar__fill" style={{ width: `${currentImplante.estadisticas.recuperacion}%` }}></div>
                  </div>
                  <span className="stat__value">{currentImplante.estadisticas.recuperacion}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container__img__implantes">
            <div className={`inner__fade img__wrapper ${isFading ? 'fade-out' : 'fade-in'}`}>
              <img src={currentImplante.image} alt={currentImplante.name} className="implante__image" />
              
              <div className="floating__label__top">
                {currentImplante.name.toUpperCase()}
              </div>
              
              <div className="floating__label__bottom">
                <span className="titulo__bottom">{currentImplante.name.toUpperCase()}</span>
                <div className="tipo__bottom">
                  <span className="badge__tipo">TIPO: {currentImplante.type.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Controles Inferiores */}
        <div className="container__controller">
          <div className="controller__slider__area">
            <div className="slider__track">
              <div className="slider__thumb" style={{ left: `${(currentIndex / (implantes.length - 1)) * 100}%` }}></div>
            </div>
          </div>

          <div className="controller__dots">
            {implantes.map((_, index) => (
              <div 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>

          <div className="controller__arrows">
            <span className="pagination">
              {String(currentIndex + 1).padStart(2, '0')} / {String(implantes.length).padStart(2, '0')}
            </span>
            <svg className="arrow__btn arrow__clear" onClick={handlePrev}  xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#985532" viewBox="0 0 24 24" ><path d="M11.79 6.29 6.09 12l5.7 5.71 1.42-1.42L9.91 13H18v-2H9.91l3.3-3.29z"></path></svg>
            <svg className="arrow__btn arrow__coffee" onClick={handleNext} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FDF7F1" viewBox="0 0 24 24" ><path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path></svg>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Implantes;