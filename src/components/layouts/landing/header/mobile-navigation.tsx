import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

type BurgerItemProps = {
    label: string;
    url: string;
};

const BurgerItem: React.FC<BurgerItemProps> = ({ label, url }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(url);
    };

    return (
        <div
            className="hover:bg-primary hover:text-white hover:cursor-pointer py-2 px-4 text-md rounded-md"
            onClick={onClick}
        >
            {label}
        </div>
    );
};

const MobileNavigation = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="p-3 border-2 border-transparent hover:border-primary rounded-xl">
                    <Menu className="text-primary" size={23} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white mr-6 px-2 py-3 rounded-lg">
                <DropdownMenuLabel className="text-md">Menu</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-[#525252] bg-opacity-25" />
                <BurgerItem label="Tentang Kami" url="/#about" />
                <BurgerItem label="Produk dan Layanan" url="/#product-and-service" />
                <BurgerItem label="Hubungi Kami" url="/" />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobileNavigation;
