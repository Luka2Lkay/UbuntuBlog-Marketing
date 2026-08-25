import { motion } from "framer-motion"
import { ArrowRight, Code2, Globe2, Layers3 } from "lucide-react"
import { UBUNTUBLOG_APP_URL } from "@/lib/constants"

function Hero() {
    return (
        <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">

            <div className="pointer-events-none absolute inset-0 -z-10 ">
                <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-gray-100 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm"
                    >
                        <span className="size-2 rounded-full bg-green-500" />
                        Content infrastructure for modern businesses
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl"
                    >
                        One platform for
                        <span className="block text-gray-500">all your content.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg leadig-8 text-gray-600"
                    >
                        UbuntuBlog gives businesses a centralized platform to create, manage, and publish content to their websites through a powerful API.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <a href={UBUNTUBLOG_APP_URL} className="group inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]">
                            Get Started
                            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                        </a>

                        <a href="#how-it-works" className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                            See How It Works
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="relative mx-auto mt-20 max-w-5xl"
                >
                    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl shadow-gray-200/60 sm:p-6">
                        <div className="mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                            <span className="size-2.5 rounded-full bg-gray-300" />
                            <span className="size-2.5 rounded-full bg-gray-300" />
                            <span className="size-2.5 rounded-full bg-gray-300" />

                            <div className="ml-3 flex items-center gap-2 rounded-md bg-gray-50 px-3 py-1.5 text-xs text-gray-400">
                                <Code2 size={13} />
                                api.ubuntublog.com/posts
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3 md:items-center">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-xl border border-gray-200 p-5"
                            >
                                <Globe2 className="mb-4 size-8 text-gray-700" />
                                <h3 className="font-semibold text-gray-900">Your Website</h3>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-xl bg-black p-6 text-white"
                            >
                                <Layers3 className="mb-4 size-8" />
                                <h3 className="font-semibold">UbuntuBlog</h3>
                                <p className="mt-1 text-sm text-gray-400">Content platform & API</p>
                                <div className="mt-5 rounded-lg bg-white/10 px-3 py-2 font-mono text-xs text-gray-300">GET /posts</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-xl border border-gray-200 p-5"
                            >
                                <div className="mb-4 flex gap-2">
                                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs">
                                        Posts
                                    </span>
                                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs">
                                        SEO
                                    </span>
                                </div>

                                <h3 className="font-semibold text-gray-900">Your Content</h3>
                                <p className="mt-1 text-sm text-gray-500">Create once, piblish anywhere.</p>
                            </motion.div>
                        </div>


                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero