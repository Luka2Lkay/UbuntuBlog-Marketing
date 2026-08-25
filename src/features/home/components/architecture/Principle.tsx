import { motion } from "framer-motion";

interface PrincipleProps {
    title: string;
    description: string;
}

function Principle({ title, description }: PrincipleProps) {
    return (
        <motion.div
            variants={{
                hidden: {
                    opacity: 0,
                    y: 20
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5
                    }
                },

            }}
            className="border-l-2 border-gray-200 pl-5"
        ><h3 className="font-semibold text-gray-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
        </motion.div>
    )
}

export default Principle