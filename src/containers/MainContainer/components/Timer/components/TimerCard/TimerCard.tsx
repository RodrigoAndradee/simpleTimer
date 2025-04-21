import { Card } from "@/components/ui/card";
import { TimerCardProps } from "./TimerCard.types";

export const TimerCard = ({ value }: TimerCardProps) => {
  return (
    <Card className="p-[0] w-[100px] h-[100px] flex items-center justify-center rounded-md bg-slate-500 text-slate-300 text-6xl border-transparent">
      {value || "00"}
    </Card>
  );
};
