import Footer from './footer/footer';
import Header from './header/header';

type LandingLayoutProps = {
    children: React.ReactNode;
};

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
    return (
        <main className="min-h-screen relative flex flex-col items-center justify-between bg-[#6E95DD00]">
            <Header />
            <div className="flex flex-col items-center justify-center gap-y-36">{children}</div>
            <Footer />
        </main>
    );
};

export default LandingLayout;
