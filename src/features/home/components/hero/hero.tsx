import MyButton from '@/components/button';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-screen w-full">
            <Image
                src="/images/hero-bg.jpg"
                alt="hero"
                fill
                sizes="100%"
                priority={false}
                className=""
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent via-10% to-transparent" />
            <div className="flex absolute inset-0 w-full h-full items-center justify-center">
                <div className="mx-4 max-w-[1120px] flex flex-col items-center justify-center gap-y-6  bg-white bg-opacity-50 backdrop-blur-sm rounded-xl py-6 px-8">
                    <h2 className="text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-primary font-semibold text-center">
                        PT KREASI APLIKASI NASIONAL
                    </h2>
                    <h1 className="text-[32px] md:text-[40px] lg:text-[44px] xl:text-[50px] text-primary font-bold text-center">{`"MENGOPTIMALKAN BISNIS MELALUI SOLUSI IT TERDEPAN DAN BERKELANJUTAN"`}</h1>
                    <MyButton>Telusuri</MyButton>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
