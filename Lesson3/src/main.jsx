// import React from 'react'

// Questo ReactDOM è ciò che permette di renderizzare i nostri contenuti nella pagina
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//il metodo create root crea la radice, l'entry point della nostra applicazione e va a renderizzare il componnt principale che è proprio App
//root è il div dentro la index nel quale andrà ad essere renderizzato tutto il necessario. 

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render( <App /> )
