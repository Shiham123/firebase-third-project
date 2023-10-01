import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/mainLayout';
import Home from '../pages/home';
import ErrorPage from '../pages/error';
import Contact from '../pages/contact';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

export default appRouter;
