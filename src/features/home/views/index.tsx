import LandingLayout from '@/components/layouts/landing/landing-layout';
import HeroSection from '../components/hero/hero';
import AboutSection from '../components/about/about';

const HomePage = () => {
    return (
        <>
            <div className="bg-white">
                <LandingLayout>
                    <HeroSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                    <AboutSection />
                </LandingLayout>
            </div>
        </>
    );
};

export default HomePage;
