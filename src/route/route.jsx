import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/mainLayout';
import Home from '../pages/home';
import ErrorPage from '../pages/error';
import Contact from '../pages/contact';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
]);

export default appRouter;
