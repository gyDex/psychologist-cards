
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
type Props = {
    // callback: () => void;
    onSubmit: (data: any) => void;
}

export const FilterRequest:React.FC<Props> = ({onSubmit }) => {
    const items = [
        {
          id: "recents",
          label: "Recents",
        },
        {
          id: "home",
          label: "Home",
        },
        {
          id: "applications",
          label: "Applications",
        },
        {
          id: "desktop",
          label: "Desktop",
        },
        {
          id: "downloads",
          label: "Downloads",
        },
        {
          id: "documents",
          label: "Documents",
        },
    ] as const

    const FormSchema = z.object({
        items: z.array(z.string()).refine((value) => value.some((item) => item), {
          message: "You have to select at least one item.",
        }),
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
        <ModalWindow type='FilterRequest'>
            <DialogHeader className="flex flex-row">
                <DialogTitle className="grow font-semibold text-[20px] leading-[27px] max-lg:text-[16px]">Выберите запросы:</DialogTitle>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                    <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                        <FormItem>
                        <div className="mb-4">
                            <FormLabel className="text-base">Sidebar</FormLabel>
                            <FormDescription>
                            Select the items you want to display in the sidebar.
                            </FormDescription>
                        </div>
                        {items.map((item) => (
                            <FormField
                            key={item.id}
                            control={form.control}
                            name="items"
                            render={({ field }) => {
                                return (
                                <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                    <FormControl>
                                    <Checkbox
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
                                    <FormLabel className="text-sm font-normal">
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