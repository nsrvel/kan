type productServiceType = {
    type: 'service' | 'product';
    title: string;
    logoPath?: string;
    url?: string;
    description: string;
};

const productAndService: productServiceType[] = [
    {
        type: 'service',
        title: 'SOFTWARE & APPLICATION DEVELOPMENT',
        description: 'Layanan unggulan pembuatan aplikasi dan website yang sesuai dengan kebutuhan unik bisnis Anda',
    },
    {
        type: 'service',
        title: 'HARDWARE DISTRIBUTION',
        description:
            'Layanan penyediaan perangkat komputer, suku cadang komputer dan Telekomunikasi berkualitas tinggi untuk mendukung kinerja bisnis Anda',
    },
    {
        type: 'service',
        title: 'IT CONSULTANT',
        description:
            'Dengan team terbaik kami, kami dapat memberikan panduan dalam perkembangan digitalisasi perusahaan Anda',
    },
    {
        type: 'product',
        title: 'Suretyship',
        logoPath: '/logos/suretyship.png',
        url: 'suretyship.co.id',
        description: 'Platform penjaminan revolusioner untuk pengajuan surety bond dan bank garansi',
    },
];

export default productAndService;
