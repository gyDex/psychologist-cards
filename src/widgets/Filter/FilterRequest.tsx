
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DialogClose, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ModalWindow } from '@/widgets/ModalWindow/ModalWindow';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image';
type Props = {
    callback: () => void;
    onSubmit: (data: any) => void;
    type: string;
}

export const FilterRequest:React.FC<Props> = ({onSubmit, callback, type }) => {
    const items = [
        {
          id: "recents",
          label: "Есть диагностированное психическое заболевание",
        },
        {
          id: "home",
          label: "Есть диагностированное психиатрическое заболевание",
        },
        {
          id: "applications",
          label: "Принимаете ли вы медикаменты по назначению психиатра",
        },
        {
          id: "desktop",
          label: "Физические недомогания: постоянная усталость, бессонница, проблемы с питанием, проблемы с памятью, психосоматические реакции",
        },
        {
          id: "downloads",
          label: "Подавленное настроение, прокрастинация, ощущение бессмысленности существования, опустошенность, отверженность",
        },
        {
          id: "documents",
          label: "Странные, кошмарные, повторяющиеся сны",
        },
        {
            id: "documents2",
            label: "Страх будущего и неопределенности",
        },
        {
            id: "documents3",
            label: "Беременность, родительство, послеродовая депрессия, проблемы в отношениях с детьми до 18 лет",
        },
    ] as const

    const FormSchema = z.object({
        items: z.array(z.string()),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        items: ["recents", "home"],
        },
    })

    function handleSubmit(data: z.infer<typeof FormSchema>) { 
        onSubmit(data)
    }
     

    return (
        <ModalWindow closeButton={false} type={type}>
            <DialogHeader className="flex flex-row items-center">
                <DialogTitle className="grow font-semibold text-[20px] leading-[27px] max-lg:text-[16px] max-lg:leading-[22px]">Выберите запросы:</DialogTitle>
                <DialogClose className="w-[40px] h-[40px] shrink-0 flex justify-center items-center border-2 border-[#D4D4D4] rounded-full">
                    <Image src={'/modal/cross.svg'} alt="cross" height={15} width={15} />
                </DialogClose>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-[20px]">
                    <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                        <FormItem>
                        {items.map((item) => (
                            <FormField
                            key={item.id}
                            control={form.control}
                            name="items"
                            render={({ field }) => {
                                return (
                                <FormItem
                                    key={item.id}
                                    className="flex flex-row items-center gap-[14px]"
                                >
                                    <FormControl>
                                    <Checkbox 
                                        className='h-[30px] w-[30px]'
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                        return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                (value) => value !== item.id
                                                )
                                            )
                                        }}
                                    />
                                    </FormControl>
                                    <FormLabel className="text-[18px] max-lg:text-[14px]  font-normal">
                                    {item.label}
                                    </FormLabel>
                                </FormItem>
                                )
                            }}
                            />
                        ))}
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

            {/* <Form {...form}  onSubmit={handleSubmit}>
                <div className='w-full flex gap-[14px] items-center'>
                    <Checkbox className="w-[30px] h-[30px]" id="ps" 
                    value={filterRequest.ps} 
                
                    onChange={() => setFilterRequest({
                        ps: 'true'
                    })} />

                    <span className='text-[18px] leading-[100%]'>Есть диагностированное психическое заболевание</span>
                </div>

                <DialogFooter>
                    <Button className="cursor-pointer w-full mt-[15px] hover:bg-[#116466] bg-[#116466] rounded-[50px] text-[white] py-[25px] font-normal  text-[18px] leading-[25px]" type="submit">Применить</Button>
                </DialogFooter>
            </Form> */}
     
        </ModalWindow>
    );
};