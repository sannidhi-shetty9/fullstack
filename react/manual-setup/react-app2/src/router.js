import React from "react";
// import { BrowserRouter, Route } from 'react-router-dom';

// import Home from './component/home';

// class App extends React.Component {
//     render() {
//       return React.createElement('div', null, 'Hello, React!!!');
//     }
//   }

// function App() {
//     return React.createElement('div', null, 'Hello, React!!');
// }

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Home from "./component/home";
  
  
class Router extends React.Component {
        render() {
            const router = createBrowserRouter([
                {
                  path: "/",
                  element: (
                    <Home />
                  ),
                },
                {
                  path: "about",
                  element: <div>About!</div>,
                },
              ]);
          return (
            <RouterProvider router={router} />
          )
        }
      }

  export default Router;