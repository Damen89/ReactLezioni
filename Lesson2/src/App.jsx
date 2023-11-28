import reactLogo from "./assets/react.svg";
import "./App.css";

const parole = ["Cruciali", "Fondamentali", "Importantissimi"];

function getRandomNumber(){
  return Math.floor(Math.random() * parole.length)
}

function Header() {

  const parole2 = parole[getRandomNumber()]; //questa opzione è la migliore

  return(
  <header>

    <h1>React Essential</h1>

    <p>Concetti {parole[getRandomNumber()]} per una buona cosa</p>
    <p>Posso richiamare quelle definite in alto: {parole2} nella function Header </p>


    <p>Posso anche mostrare dei valori al volo {1+1}. </p>
    <p>Non posso inserire if-statement o for-loops all&apos; interno delle graffe. </p>

    {/* Anche l'src delle immagini è meglio andarselo a prendere dall'import in alto */}
    <img src={reactLogo} alt="logo di React" />
  </header>
  );
}

function App() {
  return (
    <div>
      {/* Proprio come se fossimo in JS una volta dichiarata la function la devo utilizzare. La cosa bella di JSX è che quando ho un component allora lo posso semplicemente richiamare dentro il mio html usando il nome della function e quindi del component */}

      {/* <Header></Header> */}

    {/* oppure anche così con il self closing tag */}
    <Header />
      <main>
        <h2>Cominciamo !!!</h2>
      </main>
    </div>
  );
}

// keyword molto importante sennò non funziona una mazza di niente
export default App;
