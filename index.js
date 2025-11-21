import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import CountryDetail from "./Components/CountryDetail";
import Home from "./Components/Home";

// Add the basename (your repo name)
const basename = "/searchCountry"; 

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/:country", element: <CountryDetail /> },
      ],
    },
  ],
  { basename } 
);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
