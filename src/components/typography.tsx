import { cn } from '@/lib/utils';
import { FcProps } from '@/models/react';
import { type ClassValue, clsx } from 'clsx';

type TypographyProps = FcProps & {
    className?: string;
};

export const LandingSectionTitle: React.FC<TypographyProps> = ({ className = [''], children }) => {
    return <div className={cn('text-2xl tracking-widest font-bold underline pb-8', className)}>{children}</div>;
};

export const LandingSectionSubTitle: React.FC<TypographyProps> = ({ className = [''], children }) => {
    return <div className={cn('text-xl tracking-widest font-bold underline pb-8', className)}>{children}</div>;
};

export const LandingParagraph: React.FC<TypographyProps> = ({ className = [''], children }) => {
    return <div className={cn('text-xl leading-8', className)}>{children}</div>;
};
