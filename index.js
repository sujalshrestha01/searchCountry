import { createRoot } from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import CountryDetail from "./Components/CountryDetail";
import Home from "./Components/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/:country",
            element:<CountryDetail/>
        }
      ]
    },
   
  ]);
  

let root=createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router} />)