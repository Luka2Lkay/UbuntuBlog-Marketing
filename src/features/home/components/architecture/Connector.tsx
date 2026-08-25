import { ArrowRight } from "lucide-react"

const Connector = () => {
    return (
        <div className="flex items-center">
            <div className="h-px w-16 bg-gray-300" />
            <ArrowRight size={15} className="text-gray-300" />
        </div>
    )
}

export default Connector