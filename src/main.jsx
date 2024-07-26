import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// -----------------------------------EXPLANATION---------------------------------------

// Virual Dom VS Actul Dom
// Explanation - Virtual Dom consists of components and its properties , Actual Dom consists of html elements and tags. All the codes first converted into virtual dom and then actual dom.

// import React from 'react' -
// Explanation - React is not only used for build web application as well as used to build android application ,ios app and many more . This import statement is used to write the code means only to develop the application wheather it can be a web app or android app or anything else. Focus on writting the code.

// import ReactDOM from 'react-dom/client'  =>
// Explanation - This statement is used for to convert virtual DOM to actual DOM . for ex- Here virtual DOM is converted into browser DOM(which is used for web app).If we write the code for android app then it will convert the virtual dom into respective DOM(import statement will be changed for respective app)

{
  /* <React.StrictMode>
<App />
</React.StrictMode>, */
}
// Explanation - in this file (main.jsx) only one component (<App />) should be present from which all the codes will be written.This name can be diffrent. <React.StrictMode> is used for give suggestion for any kind of error
