import React from 'react';
import ValueCard from './value-card';
import valueAndCulture from '@/data/local/value-and-culture';
import { LandingSectionTitle } from '@/components/typography';

const CompanyValueSection = () => {
    return (
        <div id="company-value-and-culture" className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] pt-36">
            <div className="flex flex-col justify-center items-center gap-y-8">
                <div className="flex items-center justify-center w-full bg-primary rounded-xl py-12">
                    <LandingSectionTitle className="text-secondary pb-0">NILAI BUDAYA PERUSAHAAN</LandingSectionTitle>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-8 justify-center items-center">
                    {valueAndCulture.map((item) => (
                        <ValueCard key={item.title} title={item.title} iconPath={item.iconPath}>
                            {item.description}
                        </ValueCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyValueSection;
