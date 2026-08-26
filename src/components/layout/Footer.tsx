import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { ArrowUpRight } from "lucide-react"
import { UBUNTUBLOG_APP_URL } from "@/lib/constants"
import { Link } from "react-router-dom"


function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="border-t border-gray-200 bg-gray-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-flex items-center gap-2">
                            <div className="flex size-9 items-center justify-center rounded-lg bg-white text-gray-950">
                                <span className="text-lg font-bold">U</span>
                            </div>

                            <span className="text-xl font-bold tracking-tight">
                                Ubuntu<span className="font-normal">Blog</span>
                            </span>
                        </Link>
                        <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
                            A centralized content platform that helps businesses create,
                            manage, and deliver content to their websites through an
                            API-first architecture.
                        </p>
                        <a href={UBUNTUBLOG_APP_URL} className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-950 transition-transform hover:scale-[1.02]">
                            Open UbuntuBlog
                            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold">Product</h3>

                        <ul className="mt-5 space-y-3">
                            <li>
                                <a href="#how-it-works" className="text-sm text-gray-400 transition-colors hover:text-white">How It Works</a>
                            </li>
                            <li>
                                <a href="#architecture" className="text-sm text-gray-400 transition-colors hover:text-white">Architecture</a>
                            </li>
                            <li>
                                <a href="#features" className="text-sm text-gray-400 transition-colors hover:text-white">Features</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold">Platform</h3>
                        <ul className="mt-5 space-y-3">
                            <li>
                                <a href={UBUNTUBLOG_APP_URL} className="text-sm text-gray-400 transition-colors hover:text-white">Login</a>
                            </li>
                            <li>
                                <a href={`${UBUNTUBLOG_APP_URL}/sign-up`} className="text-sm text-gray-400 transition-colors hover:text-white">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500">&copy; {currentYear} UbuntuBlog. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Luka2Lkay" target="_blank" aria-label="UbuntuBlog GitHub" className="text-gray-500 transition-colors hover:text-white">
                            <FaGithub size={21} />
                        </a>
                        <a href="https://www.linkedin.com/in/lukhanyo-matshebelele/" aria-label="UbuntuBlog LinkedIn" className="text-gray-500 transition-colors hover:text-white">
                            <FaLinkedin size={21} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer