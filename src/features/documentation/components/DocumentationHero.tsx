import { motion } from "framer-motion"
import { ArrowRight, BookOpen } from "lucide-react"

function DocumentationHero() {
    return (
        <section className="border-b border-gray-100 bg-gray-50 pt-36 pb-20 sm:pt-44 sm:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gray-950 text-white"
                    >
                        <BookOpen size={22} />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-6 text-sm font-semibold uppercase tracking-widest text-gray-500"
                    >
                        Documentation
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
                    >
                        Connect your website to UbuntuBlog.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
                    >
                        Learn how UbuntuBlog works, how content is delivered through the
                        API, and how your website can consume published content.
                    </motion.p>

                    <motion.a
                        href="#getting-started"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gray-950 px-5 py-3 text-sm font-semibold text-white"
                    >
                        Getting Started
                        <ArrowRight size={16} />
                    </motion.a>
                </div>
            </div>

        </section>
    )
}

export default DocumentationHero