import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../src/App'
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element:<Home/>
      },


      {
        path: '/about',
        element: <About/>
      },


      {
        path: '/projects',
        element: <Projects/>
      },


      {
        path: '/blog',
        element: <Blog/>
      },


      {
        path: '/contact',
        element: <Contact/>
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
