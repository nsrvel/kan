import ContactButton from '@/components/contact-button';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import HeaderLink from './header-link';

const TOP_OFFSET = 66;

const Header = () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handlerScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener('scroll', handlerScroll);

        return () => {
            window.removeEventListener('scroll', handlerScroll);
        };
    }, []);

    return (
        <div className={cn('w-full fixed top-0  z-40 py-4', showBackground ? 'bg-white' : '')}>
            <div className="flex items-center justify-center ">
                <div className="w-full max-w-[90%] md:max-w-[80%] flex justify-between items-center">
                    <Logo />
                    <div className="hidden sm:flex flex-row gap-x-4 items-center">
                        <HeaderLink label="Tentang Kami" url="/" />
                        <HeaderLink label="Produk dan Layanan" url="/" />
                    </div>
                    <ContactButton />
                </div>
            </div>
        </div>
    );
};

export default Header;
