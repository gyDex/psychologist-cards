'use client'
import { Button } from '@/components/ui/button';
import { DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { getTimeDifference } from '@/features/utils';
import { toNextStage } from '@/redux/slices/application_form';
import { close, openNext } from '@/redux/slices/modal';
import { ModalWindow } from '@/widgets/ModalWindow/ModalWindow';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ModalState } from '@/redux/store';
import { redirect } from 'next/navigation';

type Props = {
    callback: () => void;
}
export const ContactStage:React.FC<Props> = ({callback}) => {

    const [ login, setLogin ] = useState('');
    const [ telephone, setTelephone ] = useState('');

    const dispatch = useDispatch();

    const slots = useSelector<ModalState>(state => state.modal.slotsSelect);
    const slots_objects = useSelector<ModalState>(state => state.modal.slots_objects);
    const requests = useSelector<ModalState>(state => state.filter.requests);

    const makeTicketId = (length: number) => {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    function onSubmit () {
        const time_difference = getTimeDifference();
        
        const data = {
            anxieties: [],
            questions: [],
            customQuestion: [],

            diagnoses:  [],

            diagnoseMedicaments: 'Нет',

            diagnoseInfo:false,

            traumaticEvents: [],

            clientStates: [],

            selectedPsychologistsNames: [],

            shownPsychologists: '',
            lastExperience: 'Да, было.  До года',
            amountExpectations: '',
            age: 0,

            slots: slots,
            slots_objects: slots_objects,

            contactType: 'Telegram',
            contact: telephone,

            name: login,

            promocode: 'application_form_data.applicationFormData.promocode',

            ticket_id: 'application_form_data.applicationFormData.ticketID',

            emptySlots: false,

            userTimeZone: time_difference,
            userTimeOffsetMsk: time_difference,
            bid: 3764,

            rid: 4091,

            categoryType: '',

            customCategory: '',

            question_to_psychologist: [],

            filtered_by_automatch_psy_names: [],

            _queries: requests !== undefined ? requests : '',

            customTraumaticEvent: 'Ещё одно состояние',

            customState: '',

            formPsyClientInfo: {
                age: 18,
                city: '',
                sex: '',
                psychoEducated: 'Да, я практикующий специалист',
                anxieties: [],
                customAnexiety: '',
                hasPsychoExperience: 'Да, я работал(а) с психологом/психотерапевтом',
                meetType: 'Оффлайн',
                selectionСriteria: '',
                custmCreteria: '',
                importancePsycho: '',

                customImportance: '',

                agePsycho: '',
                sexPsycho: 'Не имеет значения',
                priceLastSession: '',
                durationSession: 'До года',
                reasonCancel: 'Не помогло, вообще прекратил(а)',
                pricePsycho: '',
                reasonNonApplication: '',
                contactType: '',
                contact: '+71234567890',
                name: login,
                is_adult: true,
                is_last_page: false,
                occupation: 'Предприниматель'     
            },
            utm_client: null,
            utm_tarif: undefined,
            utm_campaign: null,
            utm_content: null,
            utm_medium: null,
            utm_source: null,
            utm_term: null,
            utm_psy: undefined
        }

        const apiUrl = 'https://n8n-v2.hrani.live/webhook/get-aggregated-psychologist-schedule-test-contur';

        const delayBeforeSuccess = setTimeout(() => {
            const ticketId = makeTicketId(7);
            redirect(` https://t.me/hraniteli_client_test_bot?start=${ticketId}`)
        },1000)
        console.log(data)

        axios.post(apiUrl, data).then(() => {


            return () => delayBeforeSuccess;
        }).catch(() => {

        });

        return () => delayBeforeSuccess;
    }
    
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

            <DialogTitle className="grow font-semibold text-[20px] leading-[27px] max-lg:text-[16px] max-lg:leading-[22px]">Оставить заявку</DialogTitle>

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
                <input value={login} onChange={e => setLogin(e.target.value)} type="text" className='max-md:placeholder:text-[14px] max-md:h-[47px] w-full h-[65px] bg-[#FAFAFA] px-[20px] rounded-[10px] font-normal text-[18px] leading-[25px]' placeholder='Введите ваше имя или псевдоним' />
                
                <div className='mt-[25px] focus-within:outline-2 focus-within:outline-[#D4D4D4] px-[20px] max-md:placeholder:text-[14px]  flex max-md:h-[47px] w-full h-[65px] bg-[#FAFAFA]  rounded-[10px] font-normal text-[18px] leading-[25px]'>
                    <Image src={'/flag.svg'} alt='flag' height={23} width={23} />
                    
                    <input value={telephone} onChange={e => setTelephone(e.target.value)} className='h-full px-[20px] grow focus-within:outline-none' type="tel"  placeholder='+7' />
                </div>
            </form>

            
            <DialogFooter className='flex flex-col sm:flex-col'>
                <Button onClick={onSubmit} className="cursor-pointer max-md:text-[14px] w-full hover:bg-[#116466] bg-[#116466] rounded-[50px] text-[white] py-[25px] font-normal  text-[18px] leading-[25px]" type="button">Перейти в телеграм бот</Button>

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