import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Logo = () => {
    const router = useRouter();

    const onClick = () => {
        router.push('/', { scroll: true });
    };
    return (
        <div className="hover:cursor-pointer" onClick={onClick}>
            <Image alt="kan-logo" src="/logos/kan-logo.svg" height={32} width={196} />
        </div>
    );
};

export default Logo;
