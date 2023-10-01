import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

import { RouterProvider } from 'react-router-dom';
import appRouter from './route/route.jsx';

import { AppProvider } from './context/useContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={appRouter} />
    </AppProvider>
  </React.StrictMode>
);
