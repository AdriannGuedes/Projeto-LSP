import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './routes/login/login';
import Cadastro from './routes/cadastro/cadastro';
import Home from './routes/home/home';
import DetalhesCard from './routes/detalhesCard/detalhesCard';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/detalhesCard/:id",
        element: <DetalhesCard/>
      }

    ]
  },
])
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
