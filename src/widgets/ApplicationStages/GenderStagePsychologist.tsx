"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useDispatch } from "react-redux"
import { toNextStage } from "@/redux/slices/application_form"

const FormSchema = z.object({
    gender: z.enum(["male", "female", 'nothing'], {
    required_error: "Вы не заполнили обязательное поле",
  }),
})

export const GenderStagePsychologist = () => {
    const dispatch = useDispatch();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })
    function handleSubmit() {
        dispatch(toNextStage('request')) 
    }

    // function handleSubmit(data: z.infer<typeof FormSchema>) {
    //     dispatch(toNextStage('request')) 
    // }

  return (
    <div className='px-[40px] max-lg:px-[20px]  flex w-full grow'>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full flex flex-col h-[100%]">
            <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
                <div className='grow'>
                <FormItem className='grow'>
                    <FormLabel className=' max-lg:text-[16px] font-semibold text-[20px] leading-[100%]'>С психологом какого пола вы готовы работать?</FormLabel>
                    <FormDescription className='max-lg:text-[14px] font-normal text-[18px] leading-[100%] mt-[5px]'>
                        Мы учитываем ваш пол при подборе психолога
                    </FormDescription>
                    <FormControl className="mt-[20px]">
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col"
                        >
                            <FormItem className="flex items-center gap-[15px]">
                                <FormControl>
                                <RadioGroupItem className="h-[30px] w-[30px]" value="male" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    Мужской
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center gap-[15px]">
                                <FormControl> 
                                <RadioGroupItem className="h-[30px] w-[30px]" value="nothing" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    Женский
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center gap-[15px]">
                                <FormControl> 
                                <RadioGroupItem className="h-[30px] w-[30px]" value="female" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    Не имеет значения
                                </FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                    <span className='mt-[10px] max-lg:text-[12px] font-normal text-[14px] leading-[100%] text-[#9A9A9A]'>
                        ! Поле обязательное для заполнения
                    </span>
                    <FormMessage />
                </FormItem>
                </div>
            )}
            />
            <div className="shrink-0  pb-[40px] flex gap-[10px]">
                <button type='submit' onClick={() => dispatch(toNextStage('preferences'))} className="cursor-pointer shrink-0 w-[81px] border-[1px] border-[#116466] p-[12px] text-[#116466] font-normal text-[14px] rounded-[50px]">
                    Назад
                </button>

                <button type='submit' className="cursor-pointer grow border-[1px] bg-[#116466] p-[12px] text-[white] font-normal text-[14px] rounded-[50px]">
                    Продолжить
                </button>
            </div>
        </form>
        </Form>
    </div>
  )
}
