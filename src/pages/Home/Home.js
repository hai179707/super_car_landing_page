import { AboutSection, HomeSection, OfferSection, PopularSection } from "./components"
import Featured from "./components/Featured";
import Features from "./components/Features";
import Logos from "./components/Logos";
function Home() {
    return (
        <>
            <HomeSection />
            <AboutSection />
            <PopularSection />
            <Features />
            <Featured />
            <OfferSection />
            <Logos />
        </>
    );
}

export default Home;