import Image from 'next/image';
import React, { ReactNode } from 'react';

type ValueCardProps = {
    iconPath: string;
    title: string;
    children: ReactNode;
};

const ValueCard: React.FC<ValueCardProps> = ({ title, iconPath, children }) => {
    const { firstLetter, restOfSentence } = splitSentence(title);

    return (
        <div className="w-[491px] min-h-[275px] border-2 border-primary rounded-xl p-8">
            <div className="flex flex-row items-center justify-center gap-x-2 pb-4">
                <Image alt={title} src={iconPath} height={50} width={50} />
                <h2 className="text-2xl font-semibold text-secondary">
                    <span className="text-4xl text-primary">{firstLetter}</span>
                    {restOfSentence}
                </h2>
            </div>
            <div className="text-justify text-xl first-letter:pl-6 leading-8">{children}</div>
        </div>
    );
};

export default ValueCard;

function splitSentence(sentence: string) {
    if (typeof sentence !== 'string' || sentence.length === 0) {
        return { firstLetter: '', restOfSentence: '' };
    }

    const firstLetter = sentence.charAt(0);
    const restOfSentence = sentence.substring(1);

    return { firstLetter, restOfSentence };
}
