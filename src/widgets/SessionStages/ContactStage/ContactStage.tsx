import { Button } from '@/components/ui/button';
import { DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { close, openNext } from '@/redux/slices/modal';
import { ModalWindow } from '@/widgets/ModalWindow/ModalWindow';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

type Props = {
    callback: () => void;
}
export const ContactStage:React.FC<Props> = ({callback}) => {
    const dispatch = useDispatch();
    
    return (
        <ModalWindow type='Contact'>
            <DialogHeader className="flex flex-row">
                <Button className='m-0 p-0 cursor-pointer bg-transparent text-[#151515] shadow-none hover:bg-transparent'
                    onClick={() => {
                        dispatch(close());
                        dispatch(openNext('Time'))
                    }}>
                    <Image src={'/modal/back_arrow.svg'} alt='back_arrow' height={10} width={30} />
                    Назад
                </Button>   
            </DialogHeader>

            <DialogTitle className="grow font-semibold text-[20px] leading-[27px] max-lg:text-[16px]">Оставить заявку</DialogTitle>

            <div className='h-[80px] flex items-center gap-[25px]'>
                <Image className='rounded-full object-cover  max-md:h-[52px]  max-md:w-[52px]' src={'/images/person.png'} alt='person' height={80} width={80} />

                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-semibold text-[18px] leading-[25px] max-md:text-[14px]'>Мария Ломакина, 26 лет</h2>

                    <span className='font-normal text-[16px] leading-[22px] max-md:text-[14px]'>
                        6 месяцев в хранителях
                    </span>
                </div>
            </div>

            <form>
                <input type="text" className='max-md:placeholder:text-[14px] max-md:h-[47px] w-full h-[65px] bg-[#FAFAFA] px-[20px] rounded-[10px] font-normal text-[18px] leading-[25px]' placeholder='Введите ваше имя или псевдоним' />
                
                <div className='mt-[25px] focus-within:outline-2 focus-within:outline-[#D4D4D4] px-[20px] max-md:placeholder:text-[14px]  flex max-md:h-[47px] w-full h-[65px] bg-[#FAFAFA]  rounded-[10px] font-normal text-[18px] leading-[25px]'>
                    <Image src={'/flag.svg'} alt='flag' height={23} width={23} />
                    
                    <input className='h-full px-[20px] grow focus-within:outline-none' type="tel"  placeholder='+7' />
                </div>
            </form>

            
            <DialogFooter className='flex flex-col sm:flex-col'>
                <Button onClick={callback} className="max-md:text-[14px] w-full hover:bg-[#116466] bg-[#116466] rounded-[50px] text-[white] py-[25px] font-normal  text-[18px] leading-[25px]" type="button">Перейти в телеграм бот</Button>

                <span className='font-normal text-[14px] text-[#151515] max-md:text-[10px]'>
                    Нажимая на «Забронировать», я соглашаюсь с условиями 
                    <span className='text-[#116466]'>
                        обработки персональных данных, пользовательского соглашения и Оферты
                    </span>
                </span>
            </DialogFooter>
        </ModalWindow>
    );
};