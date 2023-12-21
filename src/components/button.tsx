import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type MyButtonProps = {
    children: React.ReactNode;
    className?: string;
};

const MyButton: React.FC<MyButtonProps> = ({ children, className }) => {
    return (
        <motion.div whileTap={{ scale: 0.9 }}>
            <button className={cn('group bg-primary rounded-xl hover:opacity-90 ', className)}>
                <div className="flex flex-row items-center justify-center gap-x-2 px-16 py-3 text-xl text-white font-semibold">
                    {children}
                </div>
            </button>
        </motion.div>
    );
};

export default MyButton;
