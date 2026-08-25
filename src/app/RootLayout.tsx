import { Outlet } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"

function RootLayout() {
    return (
        <div className="m-h-screen bg-white text-gray-950">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout