'use client'
import { ModalState } from "@/redux/store";
import { Filter } from "@/widgets";
import { useSelector } from "react-redux";

export const Psychologist_cards = () => {
    const filter = useSelector<ModalState>(state => state.filter)
    console.log(filter);
    
    return (
        <>
            <div className="mt-[50px] mb-[50px] max-lg:w-[95%] w-full flex max-w-[1204px] max-lg:flex-col justify-center gap-[31px]  ">
                <aside className="w-full min-lg:max-w-[383px]">
                    <Filter />
                </aside>

                <main className="min-lg:max-w-[790px] w-full">
                    {/* {
                        filter?.price >= 1000 && <>
                            <Card />
                        </>
                    } */}
                    
                </main>
            </div>
        </>
    );
};