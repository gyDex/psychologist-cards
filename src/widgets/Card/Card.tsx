'use client'

import Image from "next/image";

import { ProfileCard } from "../ProfileCard/ProfileCard";
import { useState } from "react";
import { FavoritesButton } from "../FavoritesButton/FavoritesButton";
import { TimeStage } from "../SessionStages/TimeStage/TimeStage";

type Props = {
    name: string,
    price: number,
    additional_approaches: string,
    basic_approaches: string, 
    requests: any[],
    diagnosed_diseases: any[],
}

export const Card = () => {
    const [isShow, setShow ] = useState(false);
    const [isShowInfo, setShowInfo ] = useState(false);

    return (
        <>
            <div className="w-[100%] flex flex-col bg-[#FFFFFF] rounded-[20px] p-[20px]">
                <div className="w-full flex justify-between">
                    <div className="max-lg:w-full">
                        <div className="flex gap-[30px] max-lg:flex-col max-lg:w-full">
                            <ProfileCard />

                            <div className="flex flex-col justify-between max-lg:w-full">
                                <div className="flex flex-col gap-[8px]">
                                    <h2 className="font-semibold text-[20px] max-lg:text-[18px]">
                                        Мария Ломакина, 26 лет
                                    </h2>

                                    <h3 className=" flex max-lg:text-[14px] gap-[10px]">
                                        6 месяцев в сообществе <Image src={'/card/check.svg'} alt="check" height={23} width={23} />
                                    </h3>
                                </div>


                                <div className="flex gap-[20px] max-lg:flex-col max-lg:gap-[5px] max-lg:mt-[10px]">
                                    <span className="text-[#9A9A9A] font-normal text-[16px] max-lg:text-[14px]">
                                        Основной подход:
                                        <span className="text-[#151515] font-normal text-[18px] max-lg:text-[14px] flex gap-[10px] mt-[5px]">
                                            Юнгианский анализ

                                            <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} />
                                        </span>
                                    </span>

                                    <span className="text-[#9A9A9A] font-normal text-[16px] max-lg:text-[14px]">
                                        Стоимость:
                                        <span className="text-[#151515] font-normal text-[18px] max-lg:text-[14px] flex gap-[10px] mt-[5px]">
                                            От 1500 ₽

                                            <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} />
                                        </span>
                                    </span>
                                </div>

                                <div className="w-full max-lg:mt-[10px]">
                                    <span className="text-[#9A9A9A] font-normal text-[16px] max-lg:text-[14px] w-full">
                                        Дополнительные подходы:
                                        <ul className="font-normal text-[18px] max-lg:text-[14px] gap-[15px] justify-items-stretch grid grid-cols-[repeat(auto-fit,_minmax(125px,_1fr))]  w-full text-[#151515] mt-[5px]">
                                            <li className="flex gap-[5px]">КПТ <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} /></li>
                                            <li className="flex gap-[5px]">Гештальт <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} /></li>
                                            <li className="flex gap-[5px]">Полемодальный <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} /></li>
                                        </ul>
                                    </span>
                                </div>

                                <div className="flex gap-[20px]">
                                    <span className="text-[#9A9A9A] font-normal text-[16px] w-full max-lg:text-[14px] max-lg:mt-[5px]">
                                        Ближайшая запись:
                                        
                                        <ul className="flex gap-[15px] mt-[5px] overflow-auto min-w-full">
                                            <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] flex justify-center items-center">
                                                <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                                    28.01/ 13:00
                                                </button> 
                                            </li>
                                            <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] flex justify-center items-center">
                                                <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                                    28.01/ 13:00
                                                </button> 
                                            </li>
                                            <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px] border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] flex justify-center items-center">
                                                <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                                    28.01/ 13:00
                                                </button> 
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-[5px] flex-col w-full mt-[25px]">
                            <span className="text-[#9A9A9A] font-normal text-[16px] max-lg:text-[14px]">
                                Запросы:
                            </span>   
                            <ul className="gap-[15px] grid grid-cols-3  mt-[5px] max-lg:flex overflow-auto">
                                <li className="max-lg:text-[14px] shrink-0 rounded-[50px] w-auto  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px]">
                                        Рефлексивные группы
                                    </button>
                                </li>
                                <li className="max-lg:text-[14px] shrink-0 rounded-[50px] w-auto  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px]">
                                        Рефлексивные группы
                                    </button>
                                </li>
                                <li className="max-lg:text-[14px] shrink-0 rounded-[50px] w-auto  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px]">
                                        Рефлексивные группы
                                    </button>
                                </li>
                                <li className="max-lg:text-[14px] shrink-0 rounded-[50px] w-auto  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px]">
                                        Рефлексивные группы
                                    </button>
                                </li>
                                <li className="max-lg:text-[14px] shrink-0 rounded-[50px] w-auto  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px]">
                                        Рефлексивные группы
                                    </button>
                                </li>
                                <li className="max-lg:text-[14px] shrink-0 rounded-[50px] w-auto  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] flex justify-center items-center">
                                    <button className="relative h-full w-full cursor-pointer p-[8px]">
                                        Рефлексивные группы
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="h-[100%] flex items-start">
                        <FavoritesButton />
                    </div>
                </div>

                <div className="flex gap-[5px] flex-col w-full mt-[35px]">
                        <span className="text-[#9A9A9A] font-normal text-[16px] max-lg:text-[14px]">
                            Диагностированные заболевания:
                        </span>   
                        <ul className="gap-[15px] flex flex-col  mt-[5px]">
                            <span className="text-[#151515] max-lg:text-[14px] w-full justify-between font-normal text-[18px] flex gap-[10px] mt-[5px]">
                                Работает с психическими заболеваниями (РПП, СДВГ и др)

                                <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} />
                            </span>
                            <span className="text-[#151515] max-lg:text-[14px] w-full justify-between font-normal text-[18px] flex gap-[10px] mt-[5px]">
                                Работает с психиатрическими заболеваниями (ПРЛ, БАР, ПТСР и др)

                                <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} />
                            </span>
                        </ul>
                </div>

                {
                    !isShow &&  <div className="flex gap-[5px] flex-col w-full mt-[35px]">
                        <div>
                            <span className="text-[#9A9A9A] font-normal text-[16px] max-lg:text-[14px]">
                                О хранителе
                            </span> 

                            <span className="text-[#151515] max-lg:text-[14px] flex-col w-full justify-between font-normal text-[18px] flex gap-[10px] mt-[5px]">
                                Два раза в месяц, интервизии, рефлексивные группы, тренинги и другие мероприятия на развитие профессионализма в аналитическом подходе
                                {
                                    isShowInfo && <span className="block max-lg:text-[14px]">
                                        ..................
                                    </span>
                                }
                            </span>

                            <button onClick={() => setShowInfo(prev => !prev)} className="text-[#116466] w-full flex justify-start cursor-pointer">
                                {
                                    isShowInfo ? 'Свернуть' : "Читать ещё"
                                }
                                
                            </button>       
                        </div>

                        <div className="mt-[20px]">
                            <span className="text-[#9A9A9A] font-normal text-[16px] max-lg:text-[14px]">
                                Образование
                            </span> 

                            <span className="text-[#151515] flex-col max-lg:text-[14px] w-full justify-between font-bold text-[18px] flex gap-[10px] mt-[5px]">
                                Диплом о профессиональной переподготовке, 2025
                            </span>
                            <span className="text-[#151515] flex-col max-lg:text-[14px] w-full justify-between font-normal text-[18px] flex gap-[10px] mt-[5px]">
                                Московская ассоциация аналитической психологии (МААП)
                            </span>

                            <button className="text-[#116466] max-lg:text-[14px] w-full flex justify-start cursor-pointer mt-[10px]">
                                Смотреть все   
                            </button>       
                        </div>

                        <div className="mt-[20px] w-full">
                            <span className="text-[#9A9A9A] font-normal text-[16px] max-lg:text-[14px]">
                                Подробнее о хранителе
                            </span> 

                            <ul className="flex w-full font-normal text-[14px] mt-[10px] overflow-auto gap-[15px]">
                                <li className="shrink-0 flex items-center justify-center gap-[15px]">
                                    <Image src={'/card/favorites_icon.svg'} alt="favorites" height={30} width={30} />
                                    <span>
                                         vk.com/example
                                    </span>
                                </li>
                                <li className="shrink-0 flex items-center justify-center gap-[15px]">
                                    <Image src={'/card/favorites_icon.svg'} alt="favorites" height={30} width={30} />
                                    <span>
                                         vk.com/example
                                    </span>
                                </li>
                                <li className="shrink-0 flex items-center justify-center gap-[15px]">
                                    <Image src={'/card/favorites_icon.svg'} alt="favorites" height={30} width={30} />
                                    <span>
                                         vk.com/example
                                    </span>
                                </li>
                            </ul>       
                        </div>

                        <ul className="mt-[20px] w-full grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] font-normal text-[18px] gap-[10px]">
                            <li>
                                <span className="text-[#9A9A9A] text-[16px] max-lg:text-[12px]">
                                    Личная терапия:
                                </span>
                                
                                <span className="flex text-[#151515] gap-[10px] mt-[10px] max-lg:text-[14px]">
                                    Да
                                    <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} />

                                </span>
                            </li>

                            <li>
                                <span className="text-[#9A9A9A] text-[16px] max-lg:text-[12px]">
                                Посещает супервизию:
                                </span>
                                
                                <span className="flex text-[#151515] gap-[10px] mt-[10px] max-lg:text-[14px]">
                                    Да
                                    <Image src={'/card/hint.svg'} alt="hint" height={23} width={23} />

                                </span>
                            </li>
                            <li>
                                <span className="text-[#9A9A9A] text-[16px] max-lg:text-[12px]">
                                    Семейное положение
                                </span>
                                
                                <span className="flex text-[#151515] gap-[10px] mt-[10px] max-lg:text-[14px]">
                                    Замужем, дети
                                </span>
                            </li>
                            <li>
                                <span className="text-[#9A9A9A] text-[16px] max-lg:text-[12px]">
                                    Есть дети:
                                </span>
                                
                                <span className="flex text-[#151515] gap-[10px] mt-[10px] max-lg:text-[14px]">
                                    Да
                                </span>
                            </li>
                        </ul>
                    </div> 
                }

                <div className="flex gap-[25px] mt-[25px] max-[600px]:flex-col max-[600px]:w-[100%] ">
                    <button onClick={() => setShow(prev => !prev)} type="button" className="cursor-pointer shrink-0 text-[#116466] font-normal text-[18px] border-[1px] rounded-[50px] border-[#116466] p-[12px]">
                        {
                            isShow ? 'Свернуть' : "Подробнее о хранителе"
                        }
                        
                    </button>

                    <TimeStage />
                </div>
            </div>
        </>
    );
};
