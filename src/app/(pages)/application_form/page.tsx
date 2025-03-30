import { ApplicationForm } from "@/views";

export default function ApplicationFormLayout() {
    return (
        <div className="w-full  max-lg:h-full max-lg:flex-col  max-lg:justify-start  flex justify-center items-center">
            <ApplicationForm />
        </div>
    )
}