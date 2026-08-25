import { motion } from "framer-motion";

interface ArchitectureProps {
    icon: React.ElementType;
    title: string;
    description: string
}

function ArchitectureCard({ icon: Icon, title, description }: ArchitectureProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
            <div className="flex size-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                <Icon size={20} />
            </div>

            <h3 className="mt-5 font-semibold text-gray-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
        </motion.div>
    )
}

export default ArchitectureCard