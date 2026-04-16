import { StarIcon } from "@phosphor-icons/react";
import { Card, CardContent } from "./ui/card";
import { QuoteIcon } from "lucide-react";

interface AssessmentsCardProps {
    user: string,
    text: string,
    img: string,
}
export function AssessmentsCard({ user, text, img }: AssessmentsCardProps) {
    return (
        <Card className="p-10 shadow-lg hover:shadow-xl">
            <div className="flex justify-between">
                <div className="flex">
                    <StarIcon className="text-yellow-400" weight="fill" size={24} />
                    <StarIcon className="text-yellow-400" weight="fill" size={24} />
                    <StarIcon className="text-yellow-400" weight="fill" size={24} />
                    <StarIcon className="text-yellow-400" weight="fill" size={24} />
                    <StarIcon className="text-yellow-400" weight="fill" size={24} />
                </div>
                <QuoteIcon className="text-primary/30" size={32} />
            </div>
            <CardContent className="p-0">
                <p className="text-lg text-black/70 font-semibold">"{ text }"</p>
                <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        { img }
                    </div>
                    <div>
                        <strong className="text-lg font-semibold">{ user }</strong>
                        <p className="text-md text-black/70">Paciente</p>
                    </div>
                </div>
            </CardContent>

        </Card>
    );
}