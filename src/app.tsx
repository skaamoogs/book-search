import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/layout/layout';
import { Home } from './pages/home/home';
import { Book } from './pages/book/book';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/:bookId', element: <Book /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
