'use client'
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { close } from "@/redux/slices/modal";
import { ModalState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props ={
    children: React.ReactNode;
    type: string,
}
export const ModalWindow:React.FC<Props> = ({children, type}) => {
    const isOpenType = useSelector<ModalState>(state => state.modal.isOpenType) as string;
    const isOpen = useSelector<ModalState>(state => state.modal.isOpen) as boolean;
    const dispatch = useDispatch();

    return (
        <>
            <Dialog onOpenChange={() => dispatch(close())} open={isOpen && isOpenType === type} modal>
                <DialogContent className="w-[95%] max-w-[640px]">
                    {children}
                </DialogContent>
            </Dialog>
        </>
    );
};