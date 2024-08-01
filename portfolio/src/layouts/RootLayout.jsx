import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default function RootLayout() {

    return (
    <>
        <header>
            <Navbar />
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <Footer />
        </footer>
    </>
    )
}
