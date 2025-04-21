import { Card } from "@/components/ui/card";
import { Tabs } from "@/ui/shared/Tabs/Tabs";
import { useMemo } from "react";
import { Timer } from "./components/Timer/Timer";

export const MainContainer = () => {
  const tabs = useMemo(
    () => [
      {
        label: "Timer",
        value: "timer",
        content: <Timer />,
      },
      {
        label: "Stopwatch",
        value: "stopwatch",
        content: (
          <Card className="flex items-center justify-center flex-col gap-2 bg-slate-600 border-transparent h-[200px]">
            Working On
          </Card>
        ),
      },
    ],
    []
  );

  return <Tabs tabs={tabs} />;
};
