import { Mail, MapPin } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div className="w-full mt-12">
            <div className="h-24 md:h-36 lg:h-56 w-full relative">
                <div className="h-full bg-primary" />
                <div className="absolute inset-0 h-full bg-white rounded-b-[100%]" />
            </div>
            <div className="flex items-center justify-center w-full bg-primary py-20">
                <div className=" max-w-[80%]">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-x-4 gap-y-8">
                        <div className="flex flex-1 flex-col gap-y-4">
                            <h1 className="text-white text-2xl font-semibold">PT. Kreasi Aplikasi Nasional</h1>
                            <h1 className="text-white text-lg">Panduan Teknologi untuk Masa Depan Bisnis Anda</h1>
                        </div>
                        <div className="flex flex-1 flex-col gap-y-4">
                            <h1 className="text-white text-2xl font-semibold">Produk dan Layanan</h1>
                            <div className="flex flex-col gap-y-2">
                                <p className="text-white text-md">suretyship.co.id</p>
                                <p className="text-white text-md">Software & Application Development</p>
                                <p className="text-white text-md">Hardware Distribution</p>
                                <p className="text-white text-md">IT Telecommunication</p>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-y-4">
                            <h1 className="text-white text-2xl font-semibold">Alamat</h1>
                            <div className="flex flex-row gap-x-2">
                                <MapPin className="text-white" height={40} width={40} />
                                <p className="text-white text-md pt-2">
                                    Grand Aries Niaga Blok G1-2T, RT.12/RW.3, Meruya Utara, Kec. Kembangan, Kota Jakarta
                                    Barat, Daerah Khusus Ibukota Jakarta 11620,
                                </p>
                            </div>
                            <div className="flex flex-row gap-x-2 items-center">
                                <Mail className="text-white" height={20} width={20} />
                                <p className="text-white text-md">email@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-primary py-4 border-t-secondary border-t-[1px]">
                <p className="text-sm text-white">© 2023 PT. Kreasi Aplikasi Nasional. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
