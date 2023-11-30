import "./App.css";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";



function App() {


  function handleSeleziona(){
    console.log("Mammt - Selezionata");
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Cominciamo !!!</h2>
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            
            <TabButton onSeleziona={handleSeleziona}>Components</TabButton>
            <TabButton onSeleziona={handleSeleziona}>JSX</TabButton>
            <TabButton onSeleziona={handleSeleziona}>Props</TabButton>
            <TabButton onSeleziona={handleSeleziona}>State</TabButton>
            {/* <TabButton label="Coglie"></TabButton> */}

          </menu>

          {/* Dynamic Content che deve "ascoltare il click " */}

        </section>


      </main>
    </div>
  );
}


export default App;
