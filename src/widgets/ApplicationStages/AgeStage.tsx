'use client'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toNextStage } from '@/redux/slices/application_form';
import { fill_username } from '@/redux/slices/application_form_data';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z } from 'zod'

const AgeStageApplication = () => {
    const dispatch = useDispatch();

    const FormSchema = z.object({
        age: z.string().nonempty("Вы не заполнили обязательное поле")
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            age: '',
        }
    })

    function handleSubmit(data: z.infer<typeof FormSchema>) {
        dispatch(toNextStage('gender')) 
        dispatch(fill_username(data.age))
    }

    return (
        <div className='px-[50px] max-lg:px-[20px]  flex w-full grow'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full flex flex-col mt-[20px]">
                    <FormField
                        
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <div className='grow'>
                                <FormItem className='grow'>
                                    <FormLabel className='max-lg:text-[16px] max-lg:leading-[22px] text-[20px] font-semibold leading-[27px] '>Сколько вам лет?</FormLabel>
                                    <FormDescription className='max-lg:text-[14px] font-normal text-[18px] leading-[25px] mt-[10px]'>
                                        Мы учитываем ваш возраст при подборе психолога
                                    </FormDescription>
                                    <FormControl className='mt-[30px]'>
                                        <Input className='bg-[#FAFAFA] placeholder:text-[18px] placeholder:text-[#9A9A9A] placeholder:max-lg:text-[14px] rounded-[10px] border-none w-full h-[65px]' placeholder="Введите ваше имя или псевдоним" {...field} />
                                    </FormControl>
                                    <span className='mt-[10px] max-lg:text-[12px] font-normal text-[14px] leading-[100%] text-[#9A9A9A]'>
                                        ! Поле обязательное для заполнения
                                    </span>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <div className="shrink-0  pb-[50px] flex gap-[10px]">
                        <button type='submit' onClick={() => dispatch(toNextStage('name'))} className="cursor-pointer shrink-0 w-[81px] border-[1px] border-[#116466] p-[12px] text-[#116466] font-normal text-[18px] max-lg:text-[14px] rounded-[50px]">
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

export default AgeStageApplication;