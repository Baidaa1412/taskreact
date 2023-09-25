import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';


// import Classs from './components/class';
// import Fun from './components/fun';
// import Pure from './components/pure';
import ErrorPage from './components/error';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   }
// ]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<React.StrictMode>
//   {/* <App1/> */}
//   <App3/>

  

// </React.StrictMode> );
//---------------------task4-------------
// src/index.js


ReactDOM.render(
  <React.StrictMode>
    <App3 />
  </React.StrictMode>,
  document.getElementById('root')
);