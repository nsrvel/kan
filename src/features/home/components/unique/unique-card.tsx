import Image from 'next/image';
import React, { ReactNode } from 'react';

type UniqueCardProps = {
    iconPath: string;
    title: string;
    children: ReactNode;
};

const UniqueCard: React.FC<UniqueCardProps> = ({ title, iconPath, children }) => {
    return (
        <div className="w-[368px] min-h-[368px] border-2 bg-white border-secondary rounded-xl p-8">
            <div className="flex flex-col items-center justify-center gap-2 pb-4">
                <Image alt={title} src={iconPath} height={100} width={100} />
                <h2 className="text-2xl font-semibold text-secondary">{title}</h2>
            </div>
            <div className="text-center text-xl first-letter:pl-6 leading-8">{children}</div>
        </div>
    );
};

export default UniqueCard;
