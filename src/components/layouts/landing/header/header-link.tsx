import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type HeaderLinkProps = {
    url: string;
    label: string;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ url, label }) => {
    return (
        <Link
            href={url}
            scroll={false}
            className={cn(
                'group w-fit hover:cursor-pointer px-3 py-1'
                // isActive ? ' bg-[#88ccca] text-black' : ''
            )}
        >
            <p className="text-[18px] text-primary font-medium">{label}</p>
            <div className={cn('h-[3px] bg-primary rounded-md opacity-0 group-hover:opacity-100 duration-300 ')} />
        </Link>
    );
};

export default HeaderLink;
