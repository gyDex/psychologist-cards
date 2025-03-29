'use client'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import useModalStage from "@/features/hooks/useModalStage";
import React from "react";

type Props ={
    button?: React.ReactNode;
    children: React.ReactNode;
    type: string,
}

export const ModalWindow:React.FC<Props> = ({button, children, type}) => {
    const { isOpen, close, open, isOpenType } = useModalStage();

    return (
        <>
            <Dialog onOpenChange={close} open={isOpen && isOpenType === type} modal>
                {/* {
                    button &&   <DialogTrigger asChild>
                        {button}
                    </DialogTrigger>
                } */}
                

                <DialogContent className="w-[95%] max-w-[640px]">
                    {children}
                </DialogContent>
            </Dialog>
        </>
    );
};