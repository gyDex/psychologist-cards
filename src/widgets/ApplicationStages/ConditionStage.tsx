'use client'
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { toNextStage } from '@/redux/slices/application_form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod'

const ConditionStage = () => {
    const dispatch = useDispatch();

        const request = [
        {
          id: "recents",
          label: "Опыт семейной жизни, собственные дети",
        },
        {
            id: "recents1",
            label: "Опыт семейной жизни, собственные дети",
        },
        {
            id: "recents2",
            label: "Опыт семейной жизни, собственные дети",
        },
        {
            id: "recents3",
            label: "Опыт семейной жизни, собственные дети",
        },
        {
            id: "recents4",
            label: "Опыт семейной жизни, собственные дети",
        },
        {
            id: "recents5",
            label: "Опыт семейной жизни, собственные дети",
        },
    ] as const

    const FormSchema = z.object({
        request: z.array(z.string())
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            request: [],
        }
    })

    // function handleSubmit(data: z.infer<typeof FormSchema>) {
    //     dispatch(toNextStage('action')) 
    //     // dispatch(fill_username(data.request))
    // }
    function handleSubmit() {
        dispatch(toNextStage('action')) 
        // dispatch(fill_username(data.request))
    }
    return (
        <div className='px-[50px] max-lg:px-[20px]  flex w-full grow'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-[20px] border-[#D4D4D4] w-full flex flex-col">
                    <FormField
                        control={form.control}
                        name="request"
                        render={({  }) => (
                            <div className='grow '>
                                <FormItem className='grow p-[25px] max-lg:p-[15px] max-lg:max-h-none border-[1px] rounded-[25px]  max-h-[390px]'>
                                    <FormLabel className='max-lg:text-[16px] max-lg:leading-[22px] font-semibold text-[20px] leading-[27px] max-lg:w-full w-[541px] '>Что из описанного ниже вы наблюдаете в своём состоянии в последнее время?</FormLabel>
                                    <FormDescription className='max-lg:text-[14px] w-full font-normal text-[18px]  leading-[25px] mt-[10px]  '>
                                        Выберите все подходящие пункты или пропустите вопрос, если ничего из этого не наблюдается
                                    </FormDescription>
                                    <div className='flex justify-between mt-[25px] max-lg:flex-col min-h-full'>
                                        <div className='flex flex-col gap-[15px] w-full max-h-[150px] max-lg:max-h-[200px] overflow-x-auto'>
                                            {request.map((item) => (
                                                <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="request"
                                                render={({ field }: any) => {
                                                    return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-center space-x-3 space-y-0"
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
                                                                    (value: any) => value !== item.id
                                                                    )
                                                                )
                                                            }}
                                                        />
                                                        </FormControl>
                                                        <FormLabel className="text-[18px] leading-[25px] max-lg:text-[14px]  font-normal">
                                                        {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                    )
                                                }}
                                                />
                                            ))}
                                        </div>

                                    </div>
                                </FormItem>
                            </div>
                        )}
                    />
                    <div className="shrink-0  pb-[50px] flex gap-[10px]  max-lg:mt-[20px]">
                        <button onClick={() => dispatch(toNextStage('request'))} className="cursor-pointer shrink-0 w-[81px] border-[1px] border-[#116466] p-[12px] text-[#116466] font-normal text-[18px] max-lg:text-[14px] rounded-[50px]">
                            Назад
                        </button>

                        <button type='submit' className="cursor-pointer grow border-[1px] bg-[#116466] p-[12px] text-[white] font-normal text-[18px] max-lg:text-[14px] rounded-[50px]">
                            Продолжить
                        </button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default ConditionStage;