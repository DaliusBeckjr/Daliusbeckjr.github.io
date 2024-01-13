import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Projects from "../pages/Projects";

// update the router functionality with the latest 
const Root = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    }
]

export default Root;