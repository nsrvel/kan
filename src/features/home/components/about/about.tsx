import React from 'react';
import { LandingParagraph, LandingSectionSubTitle, LandingSectionTitle } from '@/components/typography';

const AboutSection = () => {
    return (
        <div id="about" className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] pt-36">
            <div className="flex flex-col items-center justify-center">
                <LandingSectionTitle className="text-primary">TENTANG KAMI</LandingSectionTitle>
                <LandingParagraph className="text-justify first-letter:pl-6">
                    Merupakan perusahaan yang handal dalam ekosistem teknologi modern. Berdiri tahun 2023 dengan
                    pengalaman, keahlian yang dimiliki, kami menjadi mitra strategis dalam penyediaan platform bisnis,
                    pengembangan perangkat lunak, transformasi digital dan kebutuhan peralatan teknologi dan
                    telekomunikasi yang membantu perusahaan Anda mencapai potensi penuhnya dalam era digital ini.
                </LandingParagraph>
                <div className="flex flex-col md:flex-row justify-between items-start gap-24 pt-24">
                    <div className="flex-1">
                        <LandingSectionSubTitle className="text-center text-secondary">VISI</LandingSectionSubTitle>
                        <LandingParagraph className="text-justify first-letter:pl-6">
                            Menjadi pemimpin global dalam menyediakan solusi teknologi terkini dan inovatif, menciptakan
                            nilai tambah untuk pelanggan, dan mendukung perkembangan berkelanjutan dalam era digital
                        </LandingParagraph>
                    </div>
                    <div className="flex-1">
                        <LandingSectionSubTitle className="text-center text-secondary">MISI</LandingSectionSubTitle>
                        <ul className="list-disc pl-4">
                            <li>
                                <LandingParagraph className="text-justify">
                                    Memajukan dan meningkatkan teknologi informasi di Indonesia.
                                </LandingParagraph>
                            </li>
                            <li>
                                <LandingParagraph className="text-justify">
                                    Menciptakan serta mengembangkan aplikasi yang inovatif dengan teknologi terkini.
                                </LandingParagraph>
                            </li>
                            <li>
                                <LandingParagraph className="text-justify">
                                    Memberikan layanan pelanggan yang unggul dan unik, sesuai dengan kebutuhan
                                    pelanggan.
                                </LandingParagraph>
                            </li>
                            <li>
                                <LandingParagraph className="text-justify">
                                    Menjadi mitra terpercaya dalam menyediakan peralatan teknologi dan telekomunikasi
                                    berkualitas tinggi.
                                </LandingParagraph>
                            </li>
                            <li>
                                <LandingParagraph className="text-justify">
                                    Menyebarluaskan pengetahuan dan ketrampilan dalam bidang teknologi informasi yang
                                    berwawasan global.
                                </LandingParagraph>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
