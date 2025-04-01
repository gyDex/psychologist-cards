import { toNextStage } from "@/redux/slices/application_form";
import Image from "next/image";
import { useDispatch } from "react-redux";

export const PsychologistStage = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex flex-col min-h-full min-lg:mx-[40px] max-lg:px-[20px] mt-[20px] grow h-[100%]">
                <div className="grow w-full justify-center min-h-full h-[100%]">
                    <div className="border-[1px] border-[#D4D4D4] min-h-full p-[20px] rounded-[15px]">
                        <div className="flex justify-between w-full items-center ">
                            <div className="flex gap-[20px] items-center">
                                <Image className='rounded-full object-cover  max-lg:h-[52px]  max-lg:w-[52px]' src={'/images/person.png'} alt='person' height={80} width={80} />
                                
                                <div>
                                    <h2 className="text-[18px]  font-semibold">Наталья Ломакина, 26 лет</h2>
                                    <span className="text-[16px] leading-[22px] font-normal">6 месяцев в сообществе</span>
                                </div>
                            </div>

                            <a href="/" className="text-[#116466] text-[18px] font-normal max-lg:hidden">Перейти на карточку психолога</a>
                        </div>

                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]  gap-[30px] mt-[30px]">
                            <span className="text-[#9A9A9A] font-normal text-[16px] leading-[22px] max-lg:text-[14px]">
                                Основной подход:
                                <span className="text-[#151515] leading-[25px] font-semibold text-[18px] max-lg:text-[14px] flex gap-[10px] mt-[5px]">
                                    Юнгианский анализ

                                    <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} />
                                </span>
                            </span>
                            <span className="text-[#9A9A9A] font-normal text-[16px] leading-[22px] max-lg:text-[14px]">
                                Формат встречи:
                                <span className="text-[#151515] leading-[25px] font-semibold text-[18px] max-lg:text-[14px] flex gap-[10px] mt-[5px]">
                                    Онлайн
                                </span>
                            </span>
                            <span className="text-[#9A9A9A] font-normal text-[16px] leading-[22px] max-lg:text-[14px]">
                                Стоимость:
                                <span className="text-[#151515] leading-[25px] font-semibold text-[18px] max-lg:text-[14px] flex gap-[10px] mt-[5px]">
                                    От 1500 ₽

                                    <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} />
                                </span>
                            </span>
                        </div>

                        <div className="mt-[30px] overflow-hidden">
                            <h2 className="text-[18px] leading-[25px] font-semibold max-lg:text-[14px]">Ближайшая запись:</h2>
                            
                            <ul className="max-lg:flex max-lg:w-full grid grid-cols-5 gap-[14px] mt-[10px] overflow-auto  w-fit">
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal leading-[25px] text-[18px] leading-[25px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                        28.01/ 13:00
                                    </button> 
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>


                <div className="shrink-0 mt-[25px]  pb-[50px] flex gap-[10px]">
                    <button onClick={() => dispatch(toNextStage('promocode'))} className="cursor-pointer shrink-0 w-[81px] border-[1px] border-[#116466] p-[12px] text-[#116466] font-normal text-[18px] max-lg:text-[14px] rounded-[50px]">
                        Назад
                    </button>

                    <button type='button'  onClick={() => dispatch(toNextStage('diseases_psychologist'))} className="cursor-pointer grow border-[1px] bg-[#116466] p-[12px] text-[white] font-normal text-[18px] max-lg:text-[14px] rounded-[50px]">
                        Продолжить
                    </button>
                </div>
            </div>
        </>
    );
};