import { Outlet } from "react-router-dom";
import DocumentationNavbar from "@/components/layout/DocumentationNavbar";
import Footer from "@/components/layout/Footer";

function DocumentationLayout() {
    return (
        <div className="min-h-screen bg-white text-gray-950">
            <DocumentationNavbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default DocumentationLayout