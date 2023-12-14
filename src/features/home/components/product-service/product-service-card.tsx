import Image from 'next/image';
import React, { ReactNode } from 'react';

type ProductServiceCardProps = {
    type: 'service' | 'product';
    title: string;
    logoPath?: string;
    url?: string;
    children: ReactNode;
};

const ProductServiceCard: React.FC<ProductServiceCardProps> = ({ type, title, logoPath, url, children }) => {
    const isProduct = type === 'product';

    const Header = () => {
        if (isProduct && logoPath != '') {
            return <Image alt={title} src={logoPath!} height={1000} width={1000} />;
        }
        return <h2 className="text-2xl text-center font-semibold text-secondary pt-4">{title}</h2>;
    };

    return (
        <div className="flex max-w-[90%] w-[464px] min-h-[476px] border-2 bg-white border-secondary drop-shadow-lg rounded-xl p-8">
            <div className=" flex flex-col items-center justify-between gap-y-8">
                <Header />
                <div className="text-center text-xl leading-8">{children}</div>
                {isProduct ? (
                    <button className="group bg-primary rounded-xl">
                        <div className="flex flex-row items-center justify-center gap-x-2 px-16 py-3">
                            <h4 className="text-xl text-white font-semibold">Telusuri</h4>
                        </div>
                    </button>
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
};

export default ProductServiceCard;
