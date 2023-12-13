import React from 'react';
import ValueCard from './value-card';
import valueAndCulture from '@/data/local/value-and-culture';

const CompanyValueSection = () => {
    return (
        <div className="w-full max-w-[80%] flex flex-col justify-center items-center gap-y-8">
            <div className="flex items-center justify-center w-full bg-primary rounded-xl py-12">
                <h1 className="text-2xl tracking-widest font-bold text-secondary underline">NILAI BUDAYA PERUSAHAAN</h1>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-8 justify-center items-center">
                {valueAndCulture.map((item) => (
                    <ValueCard key={item.title} title={item.title} iconPath={item.iconPath}>
                        {item.description}
                    </ValueCard>
                ))}
            </div>
        </div>
    );
};

export default CompanyValueSection;
