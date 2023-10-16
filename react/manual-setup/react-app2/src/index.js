import React from "react";

import { createRoot } from "react-dom/client";
import Router from "./router";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<Router tab="home" />);
root.render(React.createElement(Router))
// root.render(React.createElement('div', null, 'Hello, React!!!?'))

// updating dom using vanilla js
// const heading = document.createElement("h1");
// heading.textContent = "Hello, World!";
// container.appendChild(heading)


// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Link,
//   } from "react-router-dom";
// import Home from "./component/home";
  
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <Home />
//       ),
//     },
//     {
//       path: "about",
//       element: <div>About</div>,
//     },
//   ]);
  
//   createRoot(document.getElementById("root")).render(
//     <RouterProvider router={router} />
//   );
