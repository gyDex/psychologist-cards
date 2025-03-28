import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox";

export const Filter = () => {
    return (
        <>
            <div className="w-[100%] bg-[#FFFFFF] rounded-[20px] p-[20px]">
                <div className="w-full flex justify-between">
                    <h2 className="font-semibold text-[20px]">
                        Фильтры
                    </h2>

                    <Image src={'/filter.svg'} height={18} width={18} alt="filter" />
                </div>

                <div className="w-full mt-[20px]">
                    <Select >
                        <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px]">
                            <SelectValue placeholder="Выберите пол хранителя" />
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
                        <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px]">
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
                        <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px]">
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
                        <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px]">
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
                        <SelectTrigger className="w-full min-h-[65px] font-normal text-[18px]">
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
                        className="font-normal text-[16px]"
                    >
                        Есть видеовизитка
                    </label>
                </div>

                <div className="flex items-center gap-[15px] mt-[15px]">
                    <Checkbox className="w-[30px] h-[30px]" id="video" />
                    <label
                        htmlFor="video"
                        className="font-normal text-[16px]"
                    >
                        Работает с психическими заболеваниями (РПП, СДВГ и др)
                    </label>
                </div>

                <div className="flex items-center gap-[15px] mt-[15px]">
                    <Checkbox className="w-[30px] h-[30px]" id="video" />
                    <label
                        htmlFor="video"
                        className="font-normal text-[16px]"
                    >
                        Работает с психиатрическими заболеваниями (ПРЛ, БАР, ПТСР и др)
                    </label>
                </div>
            </div>
        </>
    );
};