import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

type Props ={
    button: React.ReactNode;
    children: React.ReactNode;
}

export const ModalWindow:React.FC<Props> = ({button, children}) => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {button}
                </DialogTrigger>

                <DialogContent className="w-[95%] max-w-[640px]">
                    {children}
                </DialogContent>
            </Dialog>
        </>
    );
};