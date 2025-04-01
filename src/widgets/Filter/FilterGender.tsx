
import { Button } from '@/components/ui/button';
import { DialogClose, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ModalWindow } from '@/widgets/ModalWindow/ModalWindow';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
type Props = {
    callback: () => void;
    onSubmit: (data: any) => void;
    type: string;
}

export const FilterGender:React.FC<Props> = ({onSubmit, callback, type }) => {
    const FormSchema = z.object({
        gender: z.enum(["male", "female", "none"]).optional(),
      })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function handleSubmit(data: z.infer<typeof FormSchema>) { 
        alert(data.gender)
        onSubmit(data)
    }
     

    return (
        <ModalWindow closeButton={false} type={type}>

            <DialogHeader className="flex flex-row items-center">
                <DialogTitle className="grow font-semibold text-[20px] leading-[27px] max-lg:text-[16px] max-lg:leading-[22px]">С психологом какого пола вы готовы работать?</DialogTitle>
                <DialogClose className="w-[40px] h-[40px] shrink-0 flex justify-center items-center border-2 border-[#D4D4D4] rounded-full">
                    <Image src={'/modal/cross.svg'} alt="cross" height={15} width={15} />
                </DialogClose>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 space-y-6">
                    <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                        <FormControl>
                            <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                            >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                <RadioGroupItem colorRadio={'#116466'} className='w-[30px] h-[30px] ' value="male" />
                                </FormControl>
                                <FormLabel className="font-normal text-[18px] max-lg:text-[14px]">
                                Мужской
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                <RadioGroupItem colorRadio='#116466' className='w-[30px] h-[30px]' value="female" />
                                </FormControl>
                                <FormLabel className="font-normal text-[18px] max-lg:text-[14px]">
                                Женский
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                <RadioGroupItem colorRadio='#116466' className='w-[30px] h-[30px]' value="none" />
                                </FormControl>
                                <FormLabel className="font-normal text-[18px] max-lg:text-[14px]">
                                    Не имеет значения
                                </FormLabel>
                            </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </ModalWindow>
    );
};