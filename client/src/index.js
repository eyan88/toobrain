import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateNote from './components/notes/CreateNote';
import Home from './components/notes/Home';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "create",
        element: <CreateNote/>,
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);