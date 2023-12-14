import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative max-h-screen overflow-y-hidden">
            <Image
                alt="hero-bg"
                src="/images/hero-bg.jpg"
                height={1000}
                width={2000}
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent via-10% to-transparent" />
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <div className="my-auto mx-[399px] max-h-[90%] max-w-[90%] flex flex-col items-center justify-center gap-y-6  bg-white bg-opacity-50 backdrop-blur-sm rounded-xl py-6 px-8 ">
                    <h2 className="text-[40px] text-primary font-semibold text-center">PT KREASI APLIKASI NASIONAL</h2>
                    <h1 className="text-[50px] text-primary font-bold text-center">{`"MENGOPTIMALKAN BISNIS MELALUI SOLUSI IT TERDEPAN DAN BERKELANJUTAN"`}</h1>
                    <button className="group bg-primary rounded-xl">
                        <div className="flex flex-row items-center justify-center gap-x-2 px-16 py-3">
                            <h4 className="text-xl text-white font-semibold">Telusuri</h4>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
