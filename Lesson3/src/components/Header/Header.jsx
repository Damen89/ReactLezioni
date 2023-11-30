import reactLogo from "../../assets/react-core-concepts.png";
import "./Header.css";

const parole = ["Cruciali", "Fondamentali", "Importantissimi"];

function getRandomNumber() {
  return Math.floor(Math.random() * parole.length);
}

export default function Header() {
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