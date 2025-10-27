import React, { useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home'
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, [])
  return <RouterProvider router={router} />;
}

export default App