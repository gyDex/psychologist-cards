'use client'
import { PlayVideo } from "@/shared/PlayVideo";
import Image from "next/image";
import ReactPlayer from "react-player";
import styles from './ProfileCard.module.scss'

export const ProfileCard = () => {
    return (
        <>   
            <div className={`h-[351px] w-[214px] ${styles.player} overflow-hidden rounded-[10px]`} suppressHydrationWarning >
                <ReactPlayer style={{
                    width: '100%',
                    height: '100%'
                }}
                
                playIcon={
                    <div className="w-full h-full absolute flex justify-center items-center">
                    <PlayVideo />
                    </div>
                } 
                light={

                        <Image src={'/images/person.png'} alt="person" 
                        className="h-[351px] w-[214px] object-cover " height={351} width={214} />


                }
                url='https://www.youtube.com/watch?v=LXb3EKWsInQ' 
                playing />
                {/* <Image src={'/images/person.png'} alt="person" className="h-[351px] w-[214px] object-cover " height={600} width={214} /> */}
            </div>
        </>
    );
};