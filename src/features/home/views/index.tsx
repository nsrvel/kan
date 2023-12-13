import LandingLayout from '@/components/layouts/landing/landing-layout';
import HeroSection from '../components/hero/hero';
import AboutSection from '../components/about/about';
import CompanyValueSection from '../components/company-value/company-value';
import UniqueSection from '../components/unique/unique';
import ProductService from '../components/product-service/product-service';

const HomePage = () => {
    return (
        <>
            <LandingLayout>
                <HeroSection />
                <AboutSection />
                <CompanyValueSection />
                <UniqueSection />
                <ProductService />
            </LandingLayout>
        </>
    );
};

export default HomePage;
