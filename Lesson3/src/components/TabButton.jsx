/* eslint-disable react/prop-types */
// export default function TabButton(props){
//     return (
//         <li><button>{props.children}</button></li>
//     )
// }

//POSSO ANCHE FARLO IN QUESTO MODO

// // ALTRO APPROCCIO
// export default function TabButton({label}){
//     return (
//         <li><button>{label}</button></li>
//     )
// }


// export default function TabButton({children}){

//     //ovviamente non si usa questo approccio che è di tipo imperativo ma si usa un approccio di tipo dichiarativo
//     // document.querySelector("button").addEventListener("click", () => {}); 

//     //Posso tranquillamente dichiarare qui la funzione che farò partire al click. QUesto pèerché in Js posso dichiarare una funzione dentro l'altra senza nessun problema. 
//     //E' molto comodo poiché questa funzione avrà direttamente accesso ai props e agli state del component stesso
//     function handleClick() {
//         console.log("Mammt");
//     }

//     return (
//         // si becca la stessa regola dell'html. Quindi non devo utilizzare le parentesi tonde per richiamare la funzione
//         <li>
//             <button onClick={handleClick} >{children}</button>
//         </li>
//     )
// }



//Questo onSeleziona è un prop che vado a dichiarare nella'App.jsx sui singoli pulsanti come proprietà. È un po' quello che succede in Angular
export default function TabButton({children, onSeleziona}){

    //rimuovo da qui la funzione perché la sposto in App.jsx
    // function handleClick() {
    //     console.log("Mammt");
    // }

    return (
        // si becca la stessa regola dell'html. Quindi non devo utilizzare le parentesi tonde per richiamare la funzione
        <li>
            <button onClick={onSeleziona} >{children}</button>
        </li>
    )
}

