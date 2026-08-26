import Hero from "@/features/home/components/Hero"
import BuiltFor from "@/features/home/components/BuiltFor"
import HowItWorks from "@/features/home/components/HowItWorks"
import Architecture from "@/features/home/components/architecture/Architecture"
import PlatformFeatures from "@/features/home/components/platform_features/PlatformFeatures"

function Home() {
    return (
        <>
            <Hero />
            <BuiltFor />
            <HowItWorks />
            <Architecture />
            <PlatformFeatures />
        </>
    )
}

export default Home