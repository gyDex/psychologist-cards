import { DialogClose, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ModalWindow } from '@/widgets/ModalWindow/ModalWindow';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { open, openNext } from '@/redux/slices/modal';
import clsx from 'clsx';

type Props = {
    callback: () => void;
    onSubmit: (data: any) => void;
    type: string;
}

export const FilterDate:React.FC<Props> = ({ type }) => {

    const [ dateFilter, setDateFilter ] = useState(0);
    const dispatch = useDispatch();

    return (
        <ModalWindow className='max-[425px]:h-[519px]' maxWidth='max-w-[960px]' closeButton={false} type={type}>

            <DialogHeader className="flex flex-row items-center">
                <DialogTitle className="grow font-semibold text-[20px] leading-[27px] max-lg:text-[16px] max-lg:leading-[22px]">Выберите подходящую для Вас дату:</DialogTitle>
                <DialogClose className="w-[40px] h-[40px] shrink-0 flex justify-center items-center border-2 border-[#D4D4D4] rounded-full">
                    <Image src={'/modal/cross.svg'} alt="cross" height={15} width={15} />
                </DialogClose>
            </DialogHeader>

            <ul className="max-lg:w-full max-lg:grid-cols-[repeat(auto-fit,_minmax(64px,_1fr))] grid gap-[10px] grid-cols-10 mt-[5px] w-fit overflow-auto ">
                {
                    Array.from(Array(30).keys()).map((item: number, i: number) => 
                        <li key={i} className={
                            clsx(`max-lg:text-[14px] relative shrink-0 rounded-[50px] w-[74px]  border-[1px] border-[#D4D4D4]  text-[#116466] font-normal text-[18px] leading-[25px] flex justify-center items-center`,
                            {
                                ['border-none bg-[#116466] text-[white]']: dateFilter === i
                            }
                        )}>
                            <button onClick={() => setDateFilter(i)} className="relative h-full w-full cursor-pointer p-[8px] py-[8px]">
                                28.01
                            </button> 
                        </li>
                    )
                }
            </ul>

            <button onClick={() => {
                dispatch(open())
                dispatch(openNext('FilterTime'));
            }} className='w-[81px] h-[53px] bg-[#116466] p-[14px] rounded-[50px] text-[#FFFFFF]'>
                Далее
            </button>
        </ModalWindow>
    );
};