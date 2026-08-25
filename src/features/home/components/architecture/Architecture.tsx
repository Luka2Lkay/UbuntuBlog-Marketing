import { motion } from "framer-motion"
import ArchitectureCard from "@/features/home/components/architecture/ArchitectureCard"
import { UserRound, ArrowDown, Cloud, Database, Globe, LockKeyhole, Server } from "lucide-react"
import Connector from "@/features/home/components/architecture/Connector"
import Principle from "@/features/home/components/architecture/Principle"

function Architecture() {
    return (
        <section id="architecture" className="overflow-hidden border-t border-gray-100 bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Architecture</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">Build to power your website</h2>
                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        UbuntuBlog separates content management from content delivery.
                        Your team manages content in one place while your website consumes
                        it through a secure, structured API.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-10 lg:p-14"
                >
                    <div className="grid gap-6 lg:grid-cols-3">
                        <ArchitectureCard icon={UserRound} title="Content Team" description="Owners and contributors manage content from the UbuntuBlog platform." />
                        <ArchitectureCard icon={Globe} title="Business Website" description="Your existing website consumes published content through the API." />
                        <ArchitectureCard icon={LockKeyhole} title="Authentication" description="Platform users are authenticated and authorized before managing content." />
                    </div>

                    <div className="y-8 hidden items-center justify-center gap-4 lg:flex">
                        <Connector />
                        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
                            <Cloud size={15} className="text-gray-500" />
                            <span className="font-mono text-xs text-gray-500">HTTPS / API</span>
                        </div>
                        <Connector />
                    </div>

                    <div className="my-8 flex justify-center lg:hidden">
                        <ArrowDown className="text-gray-300" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="rounded-2xl border border-gray-950 bg-gray-950 p-6 text-white shadow-xl sm:p-8"
                    >
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-white text-gray-950">
                                        <Server size={20} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Core infrastructure</p>
                                        <h3 className="mt-1 text-xl font-semibold">UbuntuBlog API</h3>
                                    </div>
                                </div>

                                <p className="t-4 max-w-xl leading-7 text-gray-400">
                                    A centralized API connects your websites to their content,
                                    handling site-specific data, publishing, and content
                                    delivery.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-xs text-gray-400">
                                <div>
                                    <span className="text-gray-500">GET</span>{" "}/api/posts
                                </div>

                                <div className="mt-2">
                                    <span className="text-gray-500">site=</span>
                                    your-website
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="my-8 flex justify-center">
                        <div className="flex flex-col items-center gap-3">
                            <div className="h-8 w-px bg-gray-300" />
                            <ArrowDown className="text-gray-300" />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
                    >
                        <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                            <Database size={22} />
                        </div>
                        <h3 className="mt-4 font-semibold text-gray-950">Content Database</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Sites, posts, categories, tags, users, and publishing data are
                            stored centrally and associated with their respective sites.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
                    className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    <Principle title="Multi-site" description="Manage content for multiple business websites from one platform." />
                    <Principle title="API-first" description="Content is delivered through a structured API rather than tied to a specific frontend." />
                    <Principle title="Role-based" description="Owners and contributors can have different permissions within a site." />
                    <Principle title="Headless" description="Your website controls the presentation while UbuntuBlog manages the content." />
                </motion.div>
            </div>
        </section>
    )
}

export default Architecture