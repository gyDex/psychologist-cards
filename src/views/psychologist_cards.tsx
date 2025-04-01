'use client'
import { Card, Filter } from "@/widgets";

export const Psychologist_cards = () => { 
    return (
        <>
            <div className="mt-[50px] max-lg:mt-[20px] mb-[50px] max-lg:w-[100%] max-lg:px-[20px] w-full flex max-w-[1204px] max-lg:flex-col justify-center max-lg:gap-[20px] gap-[31px]  ">
                <aside className="w-full min-lg:max-w-[383px]">
                    <Filter />
                </aside>

                <main className="min-lg:max-w-[790px] w-full">
                    {
                        // filter?.price >= 1000 && 
                        <>
                            <Card />
                        </>
                    }
                    
                </main>
            </div>
        </>
    );
};