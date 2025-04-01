
import { Button } from '@/components/ui/button';
import { DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ModalWindow } from '@/widgets/ModalWindow/ModalWindow';

type Props = {
    callback: () => void;
}

export const TimeStage:React.FC<Props> = ({callback}) => {
    return (
        <ModalWindow type='Time'>
            <DialogHeader className="flex flex-row">
                <DialogTitle className="grow font-semibold text-[20px] leading-[27px] max-lg:text-[16px] max-lg:leading-[22px]">Выберите время сеанса с хранителем</DialogTitle>
            </DialogHeader>

            <span className="text-[18px] leading-[25px] font-normal text-[#151515] flex gap-[10px] max-lg:flex-col max-lg:text-[14px]">
                Часовой пояс:
                <span className="text-[#116466]">
                    Asia/Yekaterinburg ( MSK + 2)
                </span>
            </span>

            <span className="font-semibold text-[18px] leading-[25px] mt-[5px] max-lg:text-[14px]">
                Сегодня:
            </span>

            <ul className="flex gap-[15px] mt-[20px] max-lg:mt-[10px] overflow-auto min-w-full">
                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] leading-[25px] flex justify-center items-center">
                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                        28.01/ 13:00
                    </button> 
                </li>
                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] leading-[25px] flex justify-center items-center">
                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                        28.01/ 13:00
                    </button> 
                </li>
                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px] border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] leading-[25px] flex justify-center items-center">
                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                        28.01/ 13:00
                    </button> 
                </li>
            </ul>

            <span className="font-semibold text-[18px] leading-[25px] mt-20px] max-lg:text-[14px]">
                Завтра:
            </span>

            <ul className="flex gap-[15px] mt-[20px] max-lg:mt-[10px] overflow-auto min-w-full mb-[25px]">
                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] leading-[25px] flex justify-center items-center">
                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                        28.01/ 13:00
                    </button> 
                </li>
                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] leading-[25px] flex justify-center items-center">
                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                        28.01/ 13:00
                    </button> 
                </li>
                <li className="max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[132px] border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] leading-[25px] flex justify-center items-center">
                    <button className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                        28.01/ 13:00
                    </button> 
                </li>
            </ul>
            
            <DialogFooter>
                <Button onClick={callback} className="cursor-pointer w-full hover:bg-[#116466] bg-[#116466] rounded-[50px] text-[white] py-[25px] font-normal  text-[18px] leading-[25px]" type="button">Далее</Button>
            </DialogFooter>
        </ModalWindow>
    );
};