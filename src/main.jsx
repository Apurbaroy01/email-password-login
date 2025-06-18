import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home/Home';
import { ToastContainer } from 'react-toastify';
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      
      {
        path:"/register",
        element: <Register></Register>,
      },
      {
        path:"/login",
        element: <Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
