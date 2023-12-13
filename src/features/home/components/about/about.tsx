import React from 'react';

const AboutSection = () => {
    return (
        <div className="max-w-[80%]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl tracking-widest font-bold text-primary underline pb-8">TENTANG KAMI</h1>
                <p className="text-justify text-xl first-letter:pl-6 leading-8">
                    Merupakan perusahaan yang handal dalam ekosistem teknologi modern. Berdiri tahun 2023 dengan
                    pengalaman, keahlian yang dimiliki, kami menjadi mitra strategis dalam penyediaan platform bisnis,
                    pengembangan perangkat lunak, transformasi digital dan kebutuhan peralatan teknologi dan
                    telekomunikasi yang membantu perusahaan Anda mencapai potensi penuhnya dalam era digital ini.
                </p>
                <div className="flex flex-wrap justify-between items-start gap-24 pt-24">
                    <div className="flex-1">
                        <h2 className="text-center text-xl tracking-widest font-semibold text-secondary underline pb-8">
                            VISI
                        </h2>
                        <p className="text-justify text-xl first-letter:pl-6 leading-8">
                            Menjadi pemimpin global dalam menyediakan solusi teknologi terkini dan inovatif, menciptakan
                            nilai tambah untuk pelanggan, dan mendukung perkembangan berkelanjutan dalam era digital
                        </p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-center text-xl tracking-widest font-semibold text-secondary underline pb-8">
                            MISI
                        </h2>
                        <ul className="list-disc pl-4">
                            <li className="text-justify text-xl leading-8">
                                Memajukan dan meningkatkan teknologi informasi di Indonesia.
                            </li>
                            <li className="text-justify text-xl leading-8">
                                Menciptakan serta mengembangkan aplikasi yang inovatif dengan teknologi terkini.
                            </li>
                            <li className="text-justify text-xl leading-8">
                                Memberikan layanan pelanggan yang unggul dan unik, sesuai dengan kebutuhan pelanggan.
                            </li>
                            <li className="text-justify text-xl leading-8">
                                Menjadi mitra terpercaya dalam menyediakan peralatan teknologi dan telekomunikasi
                                berkualitas tinggi.
                            </li>
                            <li className="text-justify text-xl leading-8">
                                Menyebarluaskan pengetahuan dan ketrampilan dalam bidang teknologi informasi yang
                                berwawasan global.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
