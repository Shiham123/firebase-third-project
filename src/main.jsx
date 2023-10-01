import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import { RouterProvider } from 'react-router-dom';
import appRouter from './route/route.jsx';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
    <App />
  </React.StrictMode>
);
