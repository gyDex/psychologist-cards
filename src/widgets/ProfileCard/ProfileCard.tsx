import Image from "next/image";

export const ProfileCard = () => {
    return (
        <>
            <div className="h-[351px] w-[214px] relative overflow-hidden rounded-[10px] flex justify-center">
                <Image src={'/images/person.png'} alt="person" className="absolute h-[351px] w-[214px] object-cover " height={600} width={214} />
            
                <div className="relative z-20 font-normal text-[16px] w-[95%] h-[42px] bg-[#116466] flex justify-center items-center mt-[10px] rounded-[10px] text-[white]">
                    Подходит больше всего
                </div>

                <div className="absolute h-full w-full flex justify-center">
                    <Image src={'/card/PlayVideo.svg'} alt="PlayVideo" height={42} width={42} />
                </div>
            </div>
        </>
    );
};