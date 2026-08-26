import { motion } from "framer-motion"
import { Check, Terminal } from "lucide-react"
import { steps } from "@/features/documentation/data/steps"

function IntegrationSteps() {
    return (
        <section id="integration-steps" className="border-t border-gray-100 bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Integration</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Connect your website in 4 steps.</h2>
                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        Keep your existing frontend and let UbuntuBlog handle the content
                        layer. Your website decides how the content looks and feels.
                    </p>
                </motion.div>

                <div className="mx-auto mt-16 max-w-5xl">
                    <div className="space-y-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="group relative grid overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-[auto_1fr_1.1fr]"
                                >
                                    <div className="flex items-start justify-center border-b border-gray-100 bg-gray-50 px-6 py-6 md:border-b-0 md:border-r">
                                        <div className="flex items-center gap-3 md:block md:text-center">
                                            <span className="font-mono text-sm text-gray-400">{step.number}</span>

                                            <div className="flex size-10 items-center justify-center rounded-lg bg-gray-950 text-white md:mt-4">
                                                <Icon size={19} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 sm:p-8">
                                        <h3 className="text-xl font-semibold text-gray-950">{step.title}</h3>
                                        <p className="mt-3 max-w-lg leading-7 text-gray-600">{step.description}</p>
                                    </div>

                                    <div className="border-t border-gray-100 bg-gray-950 md:border-l md:border-t-">
                                        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                                            <Terminal size={14} className="text-gray-500" />
                                            <span className="font-mono text-xs text-gray-500">Example</span>
                                        </div>

                                        <pre className="overflow-x-auto p-5 text-xs leading-6 text-gray-300 sm:text-sm">
                                            <code>{step.code}</code>
                                        </pre>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mt-12 max-w-5xl rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
                >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white">
                                <Check size={19} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-950">Your website is connected.</h3>
                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Content published in UbuntuBlog can now be consumed by your
                                    website through the API.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3">
                            <span className="size-2 rounded-full bg-green-500" />
                            <span className="font-mono text-xs text-gray-500">API connected</span>
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    )
}

export default IntegrationSteps