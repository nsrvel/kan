import React from 'react';
import Image from 'next/image';

const ContactButton = () => {
    return (
        <button className="group bg-primary rounded-3xl border-2 border-white">
            <div className="flex flex-row items-center justify-center gap-x-2 px-5 py-3">
                <p className="text-md text-white font-semibold">Hubungi Kami</p>
                <Image alt="contact-logo" src="/icons/paper-plane.svg" height={22} width={20} />
            </div>
        </button>
    );
};

export default ContactButton;
