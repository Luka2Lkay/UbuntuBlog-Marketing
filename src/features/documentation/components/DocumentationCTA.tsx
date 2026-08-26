import { motion } from "framer-motion"
import { BookOpen, ArrowRight } from "lucide-react"
import { UBUNTUBLOG_APP_URL } from "@/lib/constants"

function DocumentationCTA() {
    return (
        <section className="border-t border-gray-100 bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-16 text-center sm:px-12"
                >
                    <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-white/5 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-32 -right-20 size-80 rounded-full bg-white/5 blur-3xl" />

                    <div className="relative">
                        <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-white text-gray-950">
                            <BookOpen size={22} />
                        </div>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-gray-500">Ready to get started?</p>
                        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight leading-10 text-white sm:text-4xl">Start managing your website content with UbuntuBlog.</h2>
                        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-400">
                            Create your site, invite your team, and start publishing content
                            through a platform built for modern business websites.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a href={UBUNTUBLOG_APP_URL} className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition-transform hover:scale-[1.02]">
                                Open UbuntuBlog
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="mailto:luka.matshebelele@gmail.com" className="rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-gray-300 transition-colors hover:bg-white/5 hover:text-white">Contact Us</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default DocumentationCTA