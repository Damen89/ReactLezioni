# JSX
E' il mix tra il linguaggio Js e html fuso insieme. 
JSX = Javascript Syntax EXtension. 
Utile per descrivere e creare elementi HTML in un file Javascript.

# Seguimi
1. vai in index.html
2. vai in main.jsx
3. vai in app.jsx
   
# Components
I Components hanno lo stesso concetto dei component in Angular. Quindi per creare una una Reactive UI ho bisogno di combinare component e farli lavorare tra loro. Sono strutture building block, ognuna delle quali ha la sua logica e la possibilità di mostrare contenuti.

I COMPONENT SONO RIUTILIZZABILI

Il component è fatto da: HTML, CSS, JS. Un po' come succede con Angular. Quindi fornisce la possibilità di integrare meglio un component con un altro.
![](schermate/schermata1.png?raw=true)

Perché utilizzare i components ? 
![](schermate/schermata2.png?raw=true)

## Come sono fatti
Non è nient'altro che una funzione in JS.
Deve seguire 2 regole fondamentali:
- Deve iniziare con la lettera Maiuscola ( -> PascalCase ) ed essere descrittiva. Questo perché in fase di renderizzazione tutti gli elementi HTML sono con la letterea minuscola e quindi il framework in qualche modo deve distinguerli.
- Deve restituire un valore da renderizzare (cioè deve avere un qualcosa da mostrare nella pagina ).

## Gerarchia dei component (nested)
![](schermate/schermata3.png?raw=true)


# Valori Dinamici nei Component
Nella Header voglio mostrare una parola casuale scelta tra 3 o 4 parole. Per far ciò definisco una function alla JS.
L'utitlizzo delle graffe fa in modo che react vada a mostrare un valore dinamico in quel punto lì. Questo valore può essere qualunque cosa sia stata, dichiarata, calcolata o importata 
```
 <img src={reactLogo} alt="logo di React" />
    <h1>React Essential</h1>
```

### import Keyword
Gli import in alto possono e devono essere utilizzati per passare delle variabili. Questo è opportuno farlo anche perché in fase di deploy vengono meglio utilizzati e importati nei file finali. 
Vale anche per le immagini. 
