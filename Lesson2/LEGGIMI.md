# REUSABLE Components with Props
React ci permette di passare dati attraverso un principio chiamato Prop
![](schermate/schermata4.png?raw=true)

## Cosa sono i Props
Sono degli attributi custom che vado a definire nel momento in cui vado a renderizzare un component attraverso il suo nome.
```
 <ul>
    <CoreConcept titolo="Components" descrizione="Cosa sono e come si usano i components" />
    <CoreConcept/>
    <CoreConcept/>
    <CoreConcept/>
</ul>
```
Gli attributi "titolo" e "descrizione" sono i Props. Utilizzati per poter "iniettare" dei valori diversi ogni volta che richiamo quelle proprietà.
Ovviamente non sono limitato alle string ma posso passare qualsiasi tipo di dato in quei props se serve.

I props a loro volta vanno definiti all'interno della funzione che genera il component. Vanno trattati comme oggetti.

![](schermate/schermata5.png?raw=true)

## Utilizzo alternativo dei Props
Utilizzando il file data.js posso richiamare quelle proprietà che esistono all'esterno.
Dato che in data.js ho `export CORE_CONCEPTS` nel momento in cui li devo importare nel file che li utilizza devo utilizzare le greffe `import {CORE_CONCEPTS} from "..."`.

ATT: Quando mi trovo nella situazione in cui i props hanno lo stesso nome delle proprietà degli oggetti posso utilizzare l'operatore spread di JS  [...] con il quale è possibile mappare in un colpo solo tutte le proprietà.

ATT2: A questo punto posso anche utilizzare direttamente la destrutturazione delle variabili nella funzione che crea il component andando a passare delle variabili che portano lo stesso nome delle proprietà degli oggetti. 

(Restructuring Assignment)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property]

