import React from 'react';
import { motion } from 'framer-motion';

type PaperPlaneIconProps = {
    className?: string;
};

const PaperPlaneIcon: React.FC<PaperPlaneIconProps> = ({ className = '' }) => {
    return (
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 10.7128L5.05747 12.9362L16.7816 3.63831L7.58621 14.1489V19L11.0345 15.1596L16.7816 17.1809L20 0L0 10.7128Z"
                fill="white"
                className={className}
            />
        </svg>
    );
};

const ContactButton = () => {
    return (
        <motion.div whileTap={{ scale: 0.9 }}>
            <button className="group bg-primary hover:bg-white rounded-3xl border-2 border-white hover:border-primary transition duration-300">
                <div className="flex flex-row items-center justify-center gap-x-2 px-5 py-3">
                    <p className="text-md text-white group-hover:text-primary font-semibold transition-colors duration-300">
                        Hubungi Kami
                    </p>
                    {/* <Image alt="contact-logo" src="/icons/paper-plane.svg" height={22} width={20} /> */}
                    <PaperPlaneIcon className="group-hover:fill-primary transition-colors duration-300" />
                </div>
            </button>
        </motion.div>
    );
};

export default ContactButton;
