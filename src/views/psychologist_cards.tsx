import { AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, Filter, ModalWindow } from "@/widgets";

export const Psychologist_cards = () => {
    return (
        <>
            <div className="mt-[50px] mb-[50px] max-lg:w-[95%] w-full flex max-w-[1204px] max-lg:flex-col justify-center gap-[31px]  ">
                <aside className="w-full min-lg:max-w-[383px]">
                    <Filter />
                </aside>

                <main className="min-lg:max-w-[790px] w-full">
                    <Card />
                </main>
            </div>
        </>
    );
};