import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react";
import { steps } from "@/features/home/data/steps";


function HowItWorks() {
    return (
        <section id="how-it-works" className="border-t border-gray-100 bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">How it works</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">Your content. One platform</h2>
                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        UbuntuBlog separates your content management from your website, giving your team one place to manage content while your website consumes it through the API.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative"
                            >
                                {index < steps.length - 1 && (
                                    <div className="absolute left-[calc(100%+1rem)] top-12 hidden w-8 lg:block">
                                        <ArrowRight className="size-5 text-gray-300" />
                                    </div>
                                )}

                                <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex size-12 items-center justify-center rounded-xl bg-gray-950 text-white">
                                            <Icon size={22} />
                                        </div>
                                        <span className="font-mono text-sm text-gray-400">{step.number}</span>
                                    </div>
                                    <h3 className="mt-8 text-xl font-semibold text-gray-950">{step.title}</h3>
                                    <p className="mt-3 leading-7 text-gray-700">{step.description}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-16 overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >
                    <div className="border-b border-gray-100 px-6 py-4 ">
                        <p className="font-mono text-xs uppercase tracking-wider text-gray-400">Content flow</p>
                    </div>

                    <div className="grid items-center gap-4 p-6 sm:p-8 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                        <FlowItem title="Your Team" description="Creates & manages content" />
                        <ArrowRight className="mx-auto hidden text-gray-300 md:block" />
                        <FlowItem title="UbuntuBlog" description="Stores & delivers content" dark />
                        <ArrowRight className="mx-auto hidden text-gray-300 md:block" />
                        <FlowItem title="Your Website" description="Displays published content" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

interface flowItemProps {
    title: string;
    description: string;
    dark?: boolean;
}

const FlowItem = ({ title, description, dark = false }: flowItemProps) => {
    return (
        <div className={`rounded-xl border p-5 text-center ${dark ? "border-gray-950 bg-gray-950 text-white" : "border-gray-200 bg-gray-50"}`}>
            <h3 className="font-semibold">{title}</h3>
            <p className={`mt-1 text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>{description}</p>
        </div>
    )
}

export default HowItWorks