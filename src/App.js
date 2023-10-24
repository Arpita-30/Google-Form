import react, { useState } from 'react';
import './App.css';

import Navbar, { MyContext } from "./Navigation";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Description from "./Description"
import Form from "./Form"



// const [names, setNames] = useState("");

// const onAdd = (newName) => {
//   setNames(prevNames => {
//     return [...prevNames, newName];
//   });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "home",
        element: <Description />,

      },


    ],
  }
]);

function App() {



  return (


    <div className="App">
      <RouterProvider router={router} />
    </div>



  )
}

export default App;
