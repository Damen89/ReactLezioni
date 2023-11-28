import reactLogo from "./assets/react.svg";
import "./App.css";

import { CORE_CONCEPTS } from "./data.js";

const parole = ["Cruciali", "Fondamentali", "Importantissimi"];

function getRandomNumber() {
  return Math.floor(Math.random() * parole.length);
}

function Header() {
  const parole2 = parole[getRandomNumber()]; //questa opzione è la migliore

  return (
    <header>
      <h1>React Essential</h1>

      <p>Concetti {parole[getRandomNumber()]} per una buona cosa</p>
      <p>
        Posso richiamare quelle definite in alto: {parole2} nella function
        Header{" "}
      </p>

      <p>Posso anche mostrare dei valori al volo {1 + 1}. </p>
      <p>
        Non posso inserire if-statement o for-loops all&apos; interno delle
        graffe.{" "}
      </p>

      {/* Anche l'src delle immagini è meglio andarselo a prendere dall'import in alto */}
      <img src={reactLogo} alt="logo di React" />
    </header>
  );
}

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt="" />
//       <h3>{props.title}</h3>
//       <h4>{props.description}</h4>
//     </li>
//   );
// }

//Utilizzando questa feature di JS devo stare solo attendo al nome che do alle cose. Le quali devono corrispondere con le proprietà degli oggetti che sto "mappando".

function CoreConcept({title, image, description}){
  return(
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Cominciamo !!!</h2>

          {/* <ul>
            <CoreConcept
              title="Components"
              description="cosa sono e cosa fanno i components"
              image={reactLogo}
            />

            <CoreConcept
              title="Props"
              description="cosa sono e cosa fanno i components"
              image={reactLogo}
            /> 
          </ul> */}

          {/* Utilizzo i Core conceps che sono nel file data */}
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]}/>

          {/* Utilizzo dell'operatore Spread che mi facilita la vita */}
            <CoreConcept {...CORE_CONCEPTS[3]} />

          </ul>
        </section>
      </main>
    </div>
  );
}

// keyword molto importante sennò non funziona una mazza di niente
export default App;
