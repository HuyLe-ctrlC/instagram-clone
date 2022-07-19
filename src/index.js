import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { FieldValue, firebase } from "./lib/firebase";
import "./styles/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>
);

/*
 ! => client side rerendered app: react (cra)
 *     -> database which is Firebase
 *     -> react-loading-skeleton
 *     tailwind
 ! => folder structure
 ?    => src
*       -> components
*       -> constants
*       -> context
*       -> helpers
*       -> hooks
*       -> lib( Firebase is going to live in here)
*       -> services (firebase function in here)
*       -> styles (tailwind's folder (app/tailwind))
 */
