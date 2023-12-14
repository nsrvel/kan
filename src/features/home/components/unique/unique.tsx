import unique from '@/data/local/unique';
import React from 'react';
import UniqueCard from './unique-card';
import { LandingSectionTitle } from '@/components/typography';

const UniqueSection = () => {
    return (
        <div id="unique" className="w-full pt-36">
            <div className="flex flex-col justify-center items-center gap-y-8 bg-primary py-16">
                <LandingSectionTitle className="text-secondary">KEISTIMEWAAN KAMI</LandingSectionTitle>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {unique.map((item) => (
                        <UniqueCard key={item.title} title={item.title} iconPath={item.iconPath}>
                            {item.description}
                        </UniqueCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UniqueSection;
