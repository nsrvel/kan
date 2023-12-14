import productAndService from '@/data/local/product-service';
import React from 'react';
import ProductServiceCard from './product-service-card';
import { LandingSectionTitle } from '@/components/typography';

const ProductService = () => {
    return (
        <div id="product-and-service" className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] pt-36">
            <div className="flex flex-col items-center justify-center gap-y-8">
                <LandingSectionTitle className="text-primary">PRODUK DAN LAYANAN KAMI</LandingSectionTitle>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {productAndService.map((item) => (
                        <ProductServiceCard
                            key={item.title}
                            type={item.type}
                            title={item.title}
                            logoPath={item.logoPath}
                            url={item.url}
                        >
                            {item.description}
                        </ProductServiceCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductService;
