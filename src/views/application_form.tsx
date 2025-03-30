'use client'

import { ModalState } from "@/redux/store";
import ActionStage from "@/widgets/ApplicationStages/ActionStage";
import AgeStageApplication from "@/widgets/ApplicationStages/AgeStage";
import ConditionStage from "@/widgets/ApplicationStages/ConditionStage";
import { DiseasesStage } from "@/widgets/ApplicationStages/DiseasesStage";
import { GenderStageApplication } from "@/widgets/ApplicationStages/GenderStage";
import { GenderStagePsychologist } from "@/widgets/ApplicationStages/GenderStagePsychologist";
import NameStageApplication from "@/widgets/ApplicationStages/NameStage";
import PreferencesStage from "@/widgets/ApplicationStages/PreferencesStage";
import PromocodeStage from "@/widgets/ApplicationStages/PromocodeStage";
import RequestStage from "@/widgets/ApplicationStages/RequestStage";
import Image from "next/image";
import { useSelector } from "react-redux";

export const ApplicationForm = () => {
    const application_stage = useSelector<ModalState>( state => state.applicationForm.application_stage)

    return (
        <>
            <div className="w-full max-lg:h-full min-lg:h-[800px] max-w-[960px] bg-[white] min-lg:rounded-[30px] flex flex-col">
                {/* <div className=""> */}
                    <div className="w-full px-[40px] pt-[40px] max-lg:px-[20px] shrink-0">
                        <div className="w-full flex justify-between">
                            <div className="flex flex-col gap-[20px]">
                                <h2 className="font-semibold text-[20px] max-lg:text-[16px] leading-[100%]">
                                    Подбор психолога
                                </h2>

                                <span className="font-normal text-[18px] max-[360px]:w-[192px] max-lg:text-[14px] leading-[100%]">Среднее время заполнения заявки - 5 минут</span>
                            </div>

                            <button type="button" className="cursor-pointer w-[50px] h-[50px] rounded-full flex justify-center items-center border-[1px] border-[#D4D4D4]">
                                <Image src={'/modal/cross.svg'} alt="cross" height={15} width={15} />
                            </button>
                        </div>

                        <ul className="mt-[20px] gap-[10px] max-lg:flex max-lg:flex-col grid grid-cols-2 w-full justify-items-stretch">
                            <li className="w-auto border-[1px] max-lg:h-[59px] border-[#D4D4D4] h-[85px] rounded-[15px] flex justify-between items-center p-[20px]">
                                <span className="font-normal max-lg:text-[14px] text-[18px] leading-[100%]">
                                    Заявка заполнена на:
                                </span>

                                <div className="bg-[#116466] max-lg:h-[39px] max-lg:text-[14px] p-[10px] rounded-[6px] font-normal text-[18px] text-[white]">
                                    50%
                                </div>
                            </li>
                            <li className="w-auto border-[1px] max-lg:h-[59px] border-[#D4D4D4] h-[85px] rounded-[15px] flex justify-between items-center p-[20px]">
                                <span className="font-normal max-lg:text-[14px] text-[18px] leading-[100%]">
                                    Подходящие специалисты:
                                </span>

                                <div className="bg-[#116466] p-[10px] max-lg:h-[39px] max-lg:text-[14px] rounded-[6px] font-normal text-[18px] text-[white]">
                                    15
                                </div>
                            </li>
                        </ul>
                    </div>
                    <hr className="w-full border-t-[2px] border-dotted my-[30px]  #000;" />
                    {
                        application_stage === 'name'  &&   <NameStageApplication />             
                    }
                    {
                        application_stage === 'age' && <AgeStageApplication />
                    }
                    {
                        application_stage === 'gender' && <GenderStageApplication />
                    } 
                    {
                        application_stage === 'preferences' && <PreferencesStage />
                    }
                    {
                        application_stage === 'gender_psychologist' && <GenderStagePsychologist />
                    } 
                    {
                        application_stage === 'request' && <RequestStage />
                    }
                    {
                        application_stage === 'condition' && <ConditionStage />
                    }
                    {
                        application_stage === 'action' && <ActionStage />
                    }
                    {
                        application_stage === 'diseases' && <DiseasesStage />
                    } 
                    {
                        application_stage === 'promocode' && <PromocodeStage />
                    }
                </div>
            {/* </div>   */}
        </>
    );
};