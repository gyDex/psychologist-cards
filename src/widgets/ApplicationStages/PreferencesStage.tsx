'use client'
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toNextStage } from '@/redux/slices/application_form';
import { fill_username } from '@/redux/slices/application_form_data';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod'

const PreferencesStage = () => {
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
    ] as const

    const FormSchema = z.object({
        request: z.string()
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            request: '',
        }
    })

    function handleSubmit(data: z.infer<typeof FormSchema>) {
        dispatch(toNextStage('gender_psychologist')) 
        // dispatch(fill_username(data.request))
    }

    return (
        <div className='px-[40px] max-lg:px-[20px]   flex w-full grow'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleSubmit)} className=" border-[#D4D4D4] w-full flex flex-col h-[100%]">
                    <FormField
                        control={form.control}
                        name="request"
                        render={({ field }) => (
                            <div className='grow '>
                                <FormItem className='grow p-[25px] max-lg:p-[15px] border-[1px] rounded-[25px]  '>
                                    <FormLabel className='max-lg:text-[16px] font-semibold text-[20px] leading-[100%]'>Что вам важно в психологе?</FormLabel>
                                    <FormDescription className='max-lg:text-[14px] font-normal text-[18px]  leading-[25px] mt-[5px]'>
                                        Опыт, образование и личная терапия - по умолчанию. Если предпочтений нет - можете пропустить
                                    </FormDescription>
                                    <div className='flex justify-between mt-[25px] max-lg:flex-col'>
                                        <div className='flex flex-col gap-[15px]'>
                                            {request.map((item) => (
                                                <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="request"
                                                render={({ field }) => {
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
                                        </div>

                                        <div>
                                        <FormControl>
                                            <Textarea
                                            placeholder="Введите свой вариант ответа"
                                            className="w-[361px] bg-[#FAFAFA] border-none h-[190px] min-h-[190px] max-h-[190px] max-lg:mt-[25px] max-lg:w-full"
                                            // {...field}
                                            />
                                        </FormControl>
                                        </div>
                                    </div>
                                </FormItem>
                            </div>
                        )}
                    />
                    <div className="shrink-0 mt-[25px]  pb-[40px] flex gap-[10px]">
                        <button onClick={() => dispatch(toNextStage('gender'))} className="cursor-pointer shrink-0 w-[81px] border-[1px] border-[#116466] p-[12px] text-[#116466] font-normal text-[14px] rounded-[50px]">
                            Назад
                        </button>

                        <button type='submit' className="cursor-pointer grow border-[1px] bg-[#116466] p-[12px] text-[white] font-normal text-[14px] rounded-[50px]">
                            Продолжить
                        </button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default PreferencesStage;