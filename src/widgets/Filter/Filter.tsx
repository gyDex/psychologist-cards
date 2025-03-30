'use client'
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalState } from "@/redux/store";
import { open, openNext } from "@/redux/slices/modal";
// import { FilterRequest } from "./FilterRequest";

export const Filter = () => {
    const [isShow, setShow] = useState(true);
    const isOpenType = useSelector<ModalState>(state => state.modal.isOpenType) as string
    const isOpen = useSelector<ModalState>(state => state.modal.isOpen) as boolean

    // const [filterData,setFilterData] = useState();

    const dispatch = useDispatch()
    return (
        <>
            <div className="w-[100%] bg-[#FFFFFF] rounded-[20px] p-[20px]">
                <div className="max-lg:hidden w-full flex justify-between">
                    <h2 className="font-semibold text-[20px] leading-[27px]">
                        Фильтры
                    </h2>

                    <Image src={'/filter.svg'} height={18} width={18} alt="filter" />
                </div>

                <div className="min-lg:hidden w-full flex justify-between">
                    <div className="flex gap-[15px]">
                        <Image src={'/filter.svg'} height={18} width={18} alt="filter" />
                        <h2 className="font-semibold text-[20px] leading-[27px]">
                            Фильтры
                        </h2>
                    </div>

                    <button onClick={() => setShow(prev => !prev)} className="text-[#116466]">
                        {
                            isShow ? 'Свернуть' : 'Развернуть'
                        }
                    </button>
                </div>

                {
                    isShow && <>
                    <div className="w-full mt-[20px]">
                        {/* <FilterRequest callback={ () => {
                            dispatch(close());
                            dispatch(openNext('Contact'));
                        }}
                        onSubmit={(data) => {
                            setFilterData(data)
                            console.log()
                        }}
                        />         */}
                        <Select onOpenChange={() => {
                                dispatch(openNext('FilterRequest'));
                                dispatch(open())
                            }} open={isOpen && isOpenType === 'FilterRequest'}>
                            <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px] leading-[25px]">
                                <SelectValue placeholder="Выберите пол хранителя" />
                            </SelectTrigger>
                        </Select>
                        {/* {
                            filterData?.items?.map((item,i) => <div key={i}>
                                {
                                    item
                                }
                            </div>)
                        } */}
                    </div>

                    <div className="w-full mt-[20px]">
                        <Select >
                            <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px] leading-[25px]">
                                <SelectValue placeholder="Выберите запросы" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full mt-[20px]">
                        <Select >
                            <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px] leading-[25px]">
                                <SelectValue placeholder="Выберите основной подход" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full mt-[20px]">
                        <Select >
                            <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px] leading-[25px]">
                                <SelectValue placeholder="Выберите стоимость" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full mt-[20px]">
                        <Select >
                            <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px] leading-[25px]">
                                <SelectValue placeholder="Выберите дату сессии" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center gap-[15px] mt-[30px]">
                        <Checkbox className="w-[30px] h-[30px]" id="video" />
                        <label
                            htmlFor="video"
                            className="font-normal text-[16px] leading-[22px]"
                        >
                            Есть видеовизитка
                        </label>
                    </div>

                    <div className="flex items-center gap-[15px] mt-[15px]">
                        <Checkbox className="w-[30px] h-[30px]" id="video" />
                        <label
                            htmlFor="video"
                            className="font-normal text-[16px] leading-[22px]"
                        >
                            Работает с психическими заболеваниями (РПП, СДВГ и др)
                        </label>
                    </div>

                    <div className="flex items-center gap-[15px] mt-[15px]">
                        <Checkbox className="w-[30px] h-[30px]" id="video" />
                        <label
                            htmlFor="video"
                            className="font-normal text-[16px] leading-[22px]"
                        >
                            Работает с психиатрическими заболеваниями (ПРЛ, БАР, ПТСР и др)
                        </label>
                    </div>
                    </>   
                }

                
            </div>
        </>
    );
};