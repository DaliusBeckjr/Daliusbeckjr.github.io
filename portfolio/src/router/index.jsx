import { Route, createRoutesFromElements } from 'react-router-dom';


// Layouts
import RootLayout from "../layouts/RootLayout";

// Pages
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Projects from "../pages/Projects";

// update the router functionality with the latest 
const Root = createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route index element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='home' element={<Home />} />
        <Route path='projects' element={<Projects />} />
    </Route>

)

export default Root;