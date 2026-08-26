import { motion } from "framer-motion";

interface TechNodeProps {
    label: string;
    small?: boolean
}

function TechNode({ label, small = false }: TechNodeProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className={`rounded-lg border border-white/10 bg-white/5 text-center text-white ${small ? "px-3 py-3 text-xs" : "px-4 py-4 text-sm font-medium"}`}
        >
            {label}
        </motion.div>
    )
}

export default TechNode