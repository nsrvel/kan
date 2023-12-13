import unique from '@/data/local/unique';
import React from 'react';
import UniqueCard from './unique-card';

const UniqueSection = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-8 bg-primary py-16">
            <h1 className="text-2xl tracking-widest font-bold text-secondary underline pb-8">KEISTIMEWAAN KAMI</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {unique.map((item) => (
                    <UniqueCard key={item.title} title={item.title} iconPath={item.iconPath}>
                        {item.description}
                    </UniqueCard>
                ))}
            </div>
        </div>
    );
};

export default UniqueSection;
