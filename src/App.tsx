import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { StyleMode } from "./components/StyleMode";
import { useState } from "react";

export default function App() {

    const [styleMode, setStyleMode] = useState<StyleMode>(StyleMode.DARK_MODE);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <> <ScrollToTop /> <Landing styleMode={styleMode} setStyleMode={setStyleMode} /> </>,
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

    return ( 
        <>
            <RouterProvider router={router} />
        </>
    );
}