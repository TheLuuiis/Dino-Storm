import '../css/pages/Implantes.css';

export const implantes = [
  {
    id: 1,
    slug: "armadura",
    name: "Implante de Armadura",
    group: "basico",
    type: "defensivo",
    stat: "armadura",
    icon: "shield",
    image: "/images/implantes/armadura.png",
    description:
      "¿Siempre estás en medio de batallas? Esta mejora de armadura está hecha para ti. Aumenta la armadura de tu dino de manera que reciba menos daño.",
    requiresSlot: false,
  },
  {
    id: 2,
    slug: "vitalidad",
    name: "Implante de Vitalidad",
    group: "basico",
    type: "defensivo",
    stat: "vitalidad",
    icon: "heart",
    image: "/images/implantes/vitalidad.png",
    description:
      "¿Te preocupa que tu dinosaurio pierda demasiada vida? ¿Usas demasiadas pociones? En ese caso los implantes de Vitalidad son para ti. Aumenta la vida de tu dinosaurio con ellos.",
    requiresSlot: false,
  },
  {
    id: 3,
    slug: "fuerza",
    name: "Implante de Fuerza",
    group: "basico",
    type: "ofensivo",
    stat: "fuerza",
    icon: "fist",
    image: "/images/implantes/fuerza.png",
    description:
      "Simplemente más músculos para tu dinosaurio. Conseguirás una mayor capacidad de daño, pero recuerda que los músculos no lo son todo.",
    requiresSlot: false,
  },
  {
    id: 4,
    slug: "recuperacion",
    name: "Implante de Recuperación",
    group: "basico",
    type: "soporte",
    stat: "recuperacion",
    icon: "regen",
    image: "/images/implantes/recuperacion.png",
    description:
      "Tras muchos años de investigación nuestros doctores dieron con ello. Con este implante tu dinosaurio recuperará vida más rápido.",
    requiresSlot: false,
  },
  {
    id: 5,
    slug: "agilidad",
    name: "Implante de Agilidad",
    group: "basico",
    type: "soporte",
    stat: "agilidad",
    icon: "dodge",
    image: "/images/implantes/agilidad.png",
    description:
      "¿Te parece que tu dinosaurio es algo lento en sus reacciones? Entonces ponle un implante de agilidad. Aumentará su habilidad para esquivar ataques.",
    requiresSlot: false,
  },
  {
    id: 6,
    slug: "resistencia",
    name: "Implante de Resistencia",
    group: "basico",
    type: "soporte",
    stat: "velocidad",
    icon: "rocket",
    image: "/images/implantes/resistencia.png",
    description:
      "La velocidad puede ser vital a veces. Nadie puede cogerte si eres más rápido que otros. Con el implante de resistencia aumentarás la velocidad de tu dinosaurio.",
    requiresSlot: false,
  },
  {
    id: 7,
    slug: "estabilidad",
    name: "Implante de Estabilidad",
    group: "basico",
    type: "defensivo",
    stat: "estabilidad",
    icon: "anchor",
    image: "/images/implantes/estabilidad.png",
    description:
      "¿Eres de los que evitan el conflicto? Usa la mejora de estabilidad para que nadie te pare. Disminuye la duración de las condiciones de aturdimiento, confusión y miedo.",
    requiresSlot: false,
  },
  {
    id: 8,
    slug: "furia",
    name: "Implante de Furia",
    group: "especial",
    type: "ofensivo",
    stat: "furia",
    icon: "flame",
    image: "/images/implantes/furia.png",
    description:
      "Aumenta la ganancia de potencia extra por la conversión del daño recibido. Debe instalarse en una ranura de Dino Implante para que funcione.",
    requiresSlot: true,
  },
  {
    id: 9,
    slug: "escudo",
    name: "Implante de Escudo",
    group: "especial",
    type: "defensivo",
    stat: "resistencia-armas",
    icon: "shield",
    image: "/images/implantes/escudo.png",
    description:
      "Aumenta la resistencia de tu dinosaurio al daño de arma recibido. Necesita ser instalado en una ranura de Dino Implante para funcionar.",
    requiresSlot: true,
  },
  {
    id: 10,
    slug: "garras",
    name: "Implante de Garras",
    group: "especial",
    type: "ofensivo",
    stat: "alcance-corto",
    icon: "claw",
    image: "/images/implantes/garras.png",
    description:
      "Permite a tu dinosaurio una oportunidad de golpear objetivos adicionales en corta distancia. Necesita ser instalado en una ranura de Dino Implante para que funcione.",
    requiresSlot: true,
  },
  {
    id: 11,
    slug: "reflexion-de-arma",
    name: "Implante de Reflexión de Arma",
    group: "especial",
    type: "defensivo",
    stat: "reflexion",
    icon: "reflect",
    image: "/images/implantes/reflexion-de-arma.png",
    description:
      "Garantiza una oportunidad a tu dinosaurio de reflejar temporalmente un poco del daño recibido de armas. Necesita ser instalado en una ranura de Dino Implante para que funcione.",
    requiresSlot: true,
  },
  {
    id: 12,
    slug: "regulacion-de-calor",
    name: "Implante de Regulación de Calor",
    group: "especial",
    type: "defensivo",
    stat: "resistencia-parálisis",
    icon: "thermo",
    image: "/images/implantes/regulacion-de-calor.png",
    description:
      "Disminuye la duración de las condiciones de parálisis y ralentización. Debe instalarse en una ranura de Dino Implante para que funcione.",
    requiresSlot: true,
  },
];

const Implantes = () => {
    return (
        <section className="container__implantes">
            <div className="sub__container__implantes">
                <div className="container__info__implantes">
                    
                </div>
                <div className="container__controller">
                    <h1>1</h1>
                    <h1>1</h1>
                    <h1>1</h1>
                </div>
            </div>
        </section>
    );
}

export default Implantes;