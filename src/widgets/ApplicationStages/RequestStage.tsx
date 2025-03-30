'use client'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toNextStage } from '@/redux/slices/application_form';
import { fill_username } from '@/redux/slices/application_form_data';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod'

const RequestStage = () => {
    const dispatch = useDispatch();

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
        dispatch(toNextStage('condition')) 
        dispatch(fill_username(data.request))
    }

    return (
        <div className='px-[40px] max-lg:px-[20px]  flex w-full grow'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full flex flex-col h-[100%]">
                    <FormField
                        
                        control={form.control}
                        name="request"
                        render={({ field }) => (
                            <div className='grow'>
                                <FormItem className='grow'>
                                    <FormLabel className='max-lg:text-[16px] font-semibold text-[20px] leading-[100%]'>Опишите свой запрос к психологу: что беспокоит, чего ожидаете, к чему хотите прийти?</FormLabel>
                                    <FormDescription className='max-lg:text-[14px] font-normal text-[18px] leading-[100%] mt-[5px]'>
                                        Не знаете ответов — это нормально, напишите, как чувствуете. Можете пропустить если не готовы
                                    </FormDescription>
                                    <FormControl className='mt-[20px]'>
                                        <Input className='bg-[#FAFAFA] placeholder:max-lg:text-[14px] rounded-[10px] border-none w-full h-[65px]' placeholder="Введите свой запрос" {...field} />
                                    </FormControl>
                                </FormItem>
                            </div>
                        )}
                    />
                    <div className="shrink-0  pb-[40px] flex gap-[10px]">
                        <button type='submit' onClick={() => dispatch(toNextStage('gender_psychologist'))} className="cursor-pointer shrink-0 w-[81px] border-[1px] border-[#116466] p-[12px] text-[#116466] font-normal text-[14px] rounded-[50px]">
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

export default RequestStage;