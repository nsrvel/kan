import { useModal } from '@/hooks/use-modal-store';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import MyButton from '../button';

const formSchema = z.object({
    name: z.string().min(1, {
        message: 'Nama wajib diisi',
    }),
    companyName: z.string().min(1, {
        message: 'Nama perusahaan wajib diisi',
    }),
    email: z.string().email({
        message: 'Email tidak valid',
    }),
    phoneNumber: z.string(),
    message: z.string().min(1, {
        message: 'Pesan wajib diisi',
    }),
});

export const ContactModal = () => {
    const { isOpen, onClose, type, data } = useModal();

    const router = useRouter();

    const isModalOpen = isOpen && type === 'contact';

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            companyName: '',
            email: '',
            phoneNumber: '',
            message: '',
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post('/api/contact', values);

            form.reset();
            router.refresh();
            onClose();
        } catch (error) {
            console.log(error);
        }
    };

    const handleClose = () => {
        form.reset();
        onClose();
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-[#C5F1F1] w-[952px] max-w-[90%]">
                <DialogHeader className="pt-8 px-6 mb-8">
                    <DialogTitle className="text-4xl text-center font-bold text-primary">Hubungi Kami</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
                        <div className="space-y-4 px-6 flex flex-col items-center justify-center">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center">
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-white border-0 focus-visible:ring-0 text-black text-md focus-visible:ring-offset-0 placeholder:text-[#BBBBBB] p-6 w-[600px] max-w-[90%]"
                                                placeholder="Nama"
                                                {...field}
                                            />
                                        </FormControl>
                                        <div className="w-[600px] max-w-[90%] px-6">
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center">
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-white border-0 focus-visible:ring-0 text-black text-md focus-visible:ring-offset-0 placeholder:text-[#BBBBBB] p-6 w-[600px] max-w-[90%]"
                                                placeholder="Nama Perusahaan"
                                                {...field}
                                            />
                                        </FormControl>
                                        <div className="w-[600px] max-w-[90%] px-6">
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center">
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-white border-0 focus-visible:ring-0 text-black text-md focus-visible:ring-offset-0 placeholder:text-[#BBBBBB] p-6 w-[600px] max-w-[90%]"
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <div className="w-[600px] max-w-[90%] px-6">
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center">
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-white border-0 focus-visible:ring-0 text-black text-md focus-visible:ring-offset-0 placeholder:text-[#BBBBBB] p-6 w-[600px] max-w-[90%]"
                                                placeholder="Nomor Telepon"
                                                {...field}
                                            />
                                        </FormControl>
                                        <div className="w-[600px] max-w-[90%] px-6">
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center">
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-white border-0 focus-visible:ring-0 text-black text-md focus-visible:ring-offset-0 placeholder:text-[#BBBBBB] p-6 w-[600px] max-w-[90%] h-[200px]"
                                                placeholder="Pesan"
                                                {...field}
                                            />
                                        </FormControl>
                                        <div className="w-[600px] max-w-[90%] px-6">
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="px-6 mt-2">
                            <div className="flex flex-col items-center justify-center w-[600px] max-w-[90%]">
                                <div className="text-md text-justify px-2 mb-8 ">
                                    Dengan mengirimkan pesan ini, Anda dinyatakan setuju dengan semua
                                    <span className="text-primary font-semibold"> Kebijakan Privasi </span>
                                    dari Kreasi Aplikasi Nasional
                                </div>
                                <MyButton className="px-12">Kirim</MyButton>
                            </div>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
