import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-lg text-center"
            >
                <span className="text-sm font-medium uppercase tracking-widest text-gray-500">Error 404</span>
                <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">Page not found</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">The page you're looking for does'nt exist or may have been removed.</p>
                <Link to={"/"} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-small font-medium text-white transition-colors duration-300 hover:bg-gray-800"><ArrowLeft size={18} />Back to home</Link>
            </motion.div>
        </main>
    )
}

export default NotFound