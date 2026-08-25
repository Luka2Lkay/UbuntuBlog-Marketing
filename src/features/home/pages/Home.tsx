import Hero from "@/features/home/components/Hero"
import BuiltFor from "@/features/home/components/BuiltFor"
import HowItWorks from "@/features/home/components/HowItWorks"
import Architecture from "@/features/home/components/architecture/Architecture"

function Home() {
    return (
        <>
            <Hero />
            <BuiltFor />
            <HowItWorks />
            <Architecture/>
        </>
    )
}

export default Home