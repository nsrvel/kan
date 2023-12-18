import MyButton from '@/components/button';
import Image from 'next/image';
import React, { ReactNode } from 'react';

type ProductServiceCardProps = {
    type: 'service' | 'product';
    title: string;
    imgPath?: string;
    url?: string;
    children: ReactNode;
};

const ProductServiceCard: React.FC<ProductServiceCardProps> = ({ type, title, imgPath = '', url, children }) => {
    const isProduct = type === 'product';

    const ServiceHeader = () => {
        return (
            <div className="flex flex-col items-center">
                <div className="relative bg-primary h-[80px] w-[80px] mb-8 rounded-xl">
                    <div className="w-full relative pt-[100%]">
                        <Image
                            src={imgPath}
                            alt={title}
                            objectFit="cover"
                            fill
                            className="w-full h-auto top-0 left-0 object-cover"
                        />
                    </div>
                </div>
                <div className="min-h-[60px]">
                    <h2 className="text-2xl text-center font-semibold text-secondary">{title}</h2>
                </div>
            </div>
        );
    };

    const ProductHeader = () => {
        return (
            <div className="min-h-[160px]">
                <Image src={imgPath} alt={title} width={400} height={255} />
            </div>
        );
    };

    return (
        <div className="flex max-w-[90%] w-[464px] min-h-[476px] border-2 bg-white border-secondary drop-shadow-lg rounded-xl px-8 py-12">
            <div className=" flex flex-col items-center justify-start">
                {isProduct ? <ProductHeader /> : <ServiceHeader />}
                <div className="flex flex-col h-full items-center justify-between mt-6 ">
                    <div className="text-center text-xl leading-8">{children}</div>
                    {isProduct ? <MyButton>Telusuri</MyButton> : <div />}
                </div>
            </div>
        </div>
    );
};

export default ProductServiceCard;
