import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <> <ScrollToTop /> <Landing /> </>,
  },
  {
    path: '/projects',
    element: <> <ScrollToTop /> <Projects /> </>,
  },
  {
    path: '/blog',
    element: <> <ScrollToTop /> <Blog /> </>,
  },
  {
    path: '/contact',
    element: <> <ScrollToTop /> <Contact /> </>,
  },
]);

export default function App() {
  return ( 
    <>
      <RouterProvider router={router} />
    </>
  );
}