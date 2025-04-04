'use client'
import { ModalState } from "@/redux/store";
import { Card, Filter } from "@/widgets";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import Error from "next/error";
import { IPsychologist } from "@/entities/IPsychologist";



export const Psychologist_cards = () => { 
    const filter = useSelector<ModalState>(state => state.filter) as any;
    
    const [ dataCard, setDataCard] = useState<IPsychologist[]>([]);

    const [isLoading, setLoading] = useState(true);

    

    useEffect(() => {
        try
        {
            setLoading(true);
            const apiUrl = 'https://n8n-v2.hrani.live/webhook/get-filtered-psychologists-test-contur';

            axios.get(apiUrl).then((resp) => {
                const allPsychologist = resp.data;
                setDataCard(allPsychologist);
            });
        }
        catch {
            setLoading(false)
            throw new Error('Something went wrong.' as any)
        }
        finally {
            setLoading(false)
        }
    },[]);

    useEffect(() => {
        try
        {
            setLoading(true);
            const apiUrl = 'https://n8n-v2.hrani.live/webhook/get-filtered-psychologists-test-contur';
            console.log(filter)
            axios.get(apiUrl).then((resp) => {
                const allPsychologist = resp.data;
                FilterData(allPsychologist)
            });
        }
        catch {
            setLoading(false)
            throw new Error('Something went wrong.' as any)
        }
        finally {
            setLoading(false)
        }
    },[filter]);

    const FilterData = async(data: any) => {
        const gender = filter.gender;
        const price = filter.price;
        const requests = filter.requests;
        // const basic_approach = filter.basic_approach;
        // const dates = filter.dates;
        // const times = filter.times;

        let filterData = data;

        if(gender !== 'none' && gender !== 'Не имеет значения'  && gender !== '' && gender !== null && gender !== undefined) {
            filterData = filterData.find((item: any) => item.sex === gender);
        }

        if(filterData !== null && filterData !== undefined) {  
            console.log(filterData)
            if (filterData.length > 1) {
                filterData = filterData.find((item : any) => Number(item.min_session_price) >= price);
            }
            else if ([filterData].length === 1) {
                filterData = [filterData].find(item => Number(item.min_session_price) >= price);
            }
        }

        if(filterData !== null && filterData !== undefined) {
            for (let index = 0; index < filterData.length; index++) {
                const works_with = filterData[index].works_with.split(';').map(function(item: any){
                    return item.trimStart();
                });
                for (let j = 0; j <= requests.length - 1; index++) {
                    if(works_with.label.includes(requests[j]))
                    {
                        setDataCard([])
                        return;
                    }
                }
            }
        }

        if (filterData !== null && filterData !== undefined) {

            if(filterData.length > 1) {
                setDataCard(filterData)
            }
            else if ([filterData].length === 1) {
                setDataCard([filterData])
                return;
            }
            else if([filterData].length === 0) {
                setDataCard([])
                return;
            }
        }
        else {
            setDataCard([])
        }
    }

    if (isLoading) {
        return (
            <div className="mt-[50px] max-lg:mt-[20px] mb-[50px] max-lg:w-[100%] max-lg:px-[20px] w-full flex max-w-[1204px] max-lg:flex-col justify-center max-lg:gap-[20px] gap-[31px]  ">
            <aside className="w-full min-lg:max-w-[383px]">
                <Filter />
            </aside>

                <main className="min-lg:max-w-[790px] w-full">
                    <h1>Загрузка...</h1> 
                </main>
            </div>
        )
    }
    
    return (
        <div className="mt-[50px] max-lg:mt-[20px] mb-[50px] max-lg:w-[100%] max-lg:px-[20px] w-full flex max-w-[1204px] max-lg:flex-col justify-center max-lg:gap-[20px] gap-[31px]  ">
            <aside className="w-full min-lg:max-w-[383px]">
                <Filter />
            </aside>

            <main className="min-lg:max-w-[790px] w-full">
                {
                    dataCard?.length > 1 && dataCard?.map((item: IPsychologist, i) => 
                        <Card key={i} data={item} />)                    
                }
                {
                    dataCard?.length === 1 && <Card data={dataCard[0]} />
                }  
                {
                    dataCard.length === 0 && <h1>
                        Ничего не найдено
                    </h1>
                }
            </main>
        </div>
    );
};