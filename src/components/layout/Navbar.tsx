import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const UBUNTUBLOG_APP_URL = import.meta.env.VITE_UBUNTUBLOG_APP_URL

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Architecture", href: "#architecture" }
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)
    const [activeSection, setActiveAction] = useState("home")

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (currentScrollY) => {
        if (isOpen) return;

        setScrolled(currentScrollY > 20)

        const prevScollY = scrollY.getPrevious() ?? 0;

        if (currentScrollY < 80) {
            setShowNavbar(true)
            return;
        }

        if (Math.abs(currentScrollY - prevScollY) < 10) return

        setShowNavbar(currentScrollY < prevScollY)
    })

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") setIsOpen(false)
            }
            window.addEventListener("keydown", handleKeyDown)

            return () => {
                document.body.style.overflow = ""
                window.removeEventListener("keydown", handleKeyDown)
            }
        } else {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    useEffect(() => {
        const handleIntersection: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveAction(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0
        })

        navLinks.forEach((link) => {
            const element = document.querySelector(link.href)

            if (element) observer.observe(element)
        })
        return () => observer.disconnect()
    }, [])

    return (
        <motion.header
            animate={{ y: showNavbar || isOpen ? 0 : "-10%" }}
            transition={{ duration: 0.05 }}
            className="fixed inset-x-0 top-0 z-50"
        ><div className={`transition-all duration-300 ${scrolled ? "border-b border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"}`}>
                <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
                    <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-black text-white">
                            <span className="font-bold text-lg">U</span>
                        </div>

                        <span className="text-lg font-bold tracking-tight">Ubuntu<span className="font-normal">Blog</span></span>
                    </Link>

                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.slice(1);

                            return (
                                <li key={link.name}>
                                    <a href={link.href} className="relative text-sm font-medium text-gray-600 transition-colors hover:text-black">{link.name}<span className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 group ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} /></a>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="hidden items-center gap-3 md:flex">
                        <a href={UBUNTUBLOG_APP_URL} className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-black">Login</a>
                        <a href={`${UBUNTUBLOG_APP_URL}/sign-up`} className="rounded-lg text-white bg-black px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-gray-800">Get Started</a>
                    </div>

                    <button type="button" onClick={() => setIsOpen((prev) => !prev)} aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"} className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden border-b border-gray-200 bg-white md:hidden"
                    >
                        <ul className="flex flex-col items-center justify-center min-h-full py-18 gap-7 text-2xl">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.slice(1);
                                return (<motion.li key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ opacity: 1, x: 0, transition: { delay: index * 0.05 } }}
                                ><a href={link.href} onClick={() => setIsOpen(false)} className={`rounded-lg px-3 py-3 text-sm font-medium hover:bg-gray-50 hover:text-black ${isActive ? "text-black" : "text-gray-700"}`}>{link.name}</a></motion.li>)
                            })}
                        </ul>

                        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4">

                            <a href={UBUNTUBLOG_APP_URL} onClick={() => setIsOpen(false)} className="rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50">Login</a>
                            <a href={`${UBUNTUBLOG_APP_URL}/sign-up`} className="rounded-lg bg-black px-4 py-3 text-center text-sm font-medium text-white hover:bg-gray-800">Get Started</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Navbar