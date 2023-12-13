import productAndService from '@/data/local/product-service';
import React from 'react';
import ProductServiceCard from './product-service-card';

const ProductService = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-8">
            <h1 className="text-2xl tracking-widest font-bold text-primary underline pb-8">PRODUK DAN LAYANAN KAMI</h1>
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
    );
};

export default ProductService;
