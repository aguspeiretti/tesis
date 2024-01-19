import "./popUp.css";

const PopUp = ({ cat, onClose }) => {
  return (
    <>
      <div className="popContainer">
        <div className="popUp">
          <div className="titulo">
            <div>
              <h2>{cat}</h2>
            </div>
            <div onClick={() => onClose()}>X</div>
          </div>
          <div className="vistaPrevia">
            {cat == "Tesis" ? (
              <div className="infoContainer">
                <h3 className="Titular">
                  {" "}
                  ¿Por qué elegirnos para hacer tu Tesis?
                </h3>
                <p>
                  <p className="pInterno">
                    En Tesis y Másters sabemos todos los esfuerzos que implica
                    la realización de un proyecto como este, por eso ponemos a
                    tu disposición un equipo de más de 500 especialistas para
                    todas las áreas, que te acompañarán a alcanzar tu meta
                    académica.
                  </p>
                  <p className="pInterno">
                    Para nosotros cada proyecto es único. El servicio que
                    ofrecemos es 100% personalizado. Esto significa que nos
                    adecuamos a tus necesidades para poder brindarte la ayuda
                    que necesitás.
                  </p>
                </p>
              </div>
            ) : cat == "Monografia" ? (
              <div className="infoContainer">
                <h3 className="Titular">Redactamos tu Monografía</h3>
                <p>
                  <p className="pInterno">
                    {" "}
                    ¿Tenés que hacer una monografía y no sabés cómo empezar?
                    Podemos ayudarte.
                  </p>
                  <p className="pInterno">
                    Este tipo de proyecto de investigación es uno de los más
                    solicitados por los docentes de todas las carreras. Se trata
                    de un estudio sobre un tema en concreto que por lo general
                    comprende entre 30 y 50 páginas.
                  </p>
                  <p className="pInterno">
                    Muchos alumnos no saben cómo desarrollar la búsqueda de
                    información de calidad, analizarla u organizarla de forma
                    precisa.
                  </p>
                  <p className="pInterno">
                    En Tesis y Másters te ayudamos desde el desarrollo de la
                    idea, la recopilación de información y la redacción de tu
                    proyecto con el método de escritura correspondiente
                    (argumentativo, expositivo, explicativo o meramente
                    descriptivo).
                  </p>
                </p>
              </div>
            ) : cat == "Ensayo" ? (
              <div className="infoContainer">
                <h3 className="Titular">Hacemos tu ensayo</h3>
                <p>
                  <p className="pInterno">
                    Si tenés que redactar un ensayo y no sabés cómo enfrentar la
                    hoja en blanco, en Tesis y Másters podemos ayudarte. En
                    primer lugar, un ensayo es un tipo de escrito de extensión
                    breve en el que predomina un componente subjetivo y
                    personal.
                  </p>
                  <p className="pInterno">
                    En este tipo de proyectos se debe abordar un tema
                    determinado a partir de un análisis personal. Por lo que es
                    clave entender cómo es su estructura y cómo se deben exponer
                    los argumentos y las fuentes.
                  </p>
                  <p className="pInterno">
                    No importa cuál sea el motivo por el cual no puedas afrontar
                    la elaboración de tu ensayo. En Tesis y Másters te ofrecemos
                    el apoyo que necesitás para entregarlo a tiempo. Te
                    asesoramos en tus puntos débiles o lo elaboramos
                    íntegramente por vos.
                  </p>
                </p>
              </div>
            ) : cat == "Articulo" ? (
              <div className="infoContainer">
                <h3 className="Titular">Redactamos tu Artículo Científico</h3>
                <p>
                  <p className="pInterno">
                    La elaboración de un artículo científico es un requisito
                    previo para la realización de actividades científicas.
                    Abordarlo implica ajustarse a ciertas reglas establecidas.
                  </p>
                  <p className="pInterno">
                    En Tesis y Másters contamos con un equipo interdisciplinario
                    de profesionales altamente cualificados para cada área,
                    expertos en redacción e investigación científica.
                  </p>
                </p>
                <p className="pInterno">
                  Si no contás con el tiempo suficiente o por otras razones no
                  podés realizar tu artículo científico, nosotros te ayudamos a
                  empezar de cero o retomando a partir del material que
                  dispongas.
                </p>
                <p className="pInterno">
                  Nuestro servicio es 100% confidencial y podemos garantizar que
                  como resultado obtendrás un artículo científico libre de
                  plagio, respaldado con informe de Turnitin.
                </p>
              </div>
            ) : cat == "Analisis" ? (
              <div className="infoContainer">
                <h3 className="Titular">Elaboramos tu análisis estadístico</h3>
                <p>
                  <p className="pInterno">
                    Cabe destacar que un análisis estadístico es un proceso muy
                    complejo y más aún cuando se lo debe incluir en una tesis de
                    grado, máster o tesis doctoral. Se pueden tener muchos
                    conocimientos en investigación, pero el análisis estadístico
                    requiere habilidades diferentes y es por esto que muchos
                    suelen frenar en este proceso.
                  </p>
                  <p className="pInterno">
                    Para realizar análisis estadísticos se utilizan diferentes
                    programas específicos que permiten procesar los datos de
                    manera óptima.
                  </p>
                  <p className="pInterno">
                    En Tesis y Másters somos expertos en análisis estadísticos,
                    podemos hacerlo por vos en tiempo récord. Lo hacemos gracias
                    a nuestra eficiente metodología de trabajo, la cual nos
                    permite realizar tus análisis estadísticos de forma segura y
                    100% confidencial.
                  </p>
                </p>
              </div>
            ) : cat == "Presentacion" ? (
              <div className="infoContainer">
                <h3 className="Titular">
                  Tu presentación en manos de expertos
                </h3>
                <p>
                  Te ayudamos con la presentación de tus trabajos
                  universitarios. Gracias a nuestro equipo de profesionales
                  abarcamos todas las áreas de estudio. Nos adaptamos a las
                  exigencias de cada universidad ofreciéndote un servicio
                  confidencial y seguro.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
