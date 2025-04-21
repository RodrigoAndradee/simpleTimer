import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pause, Play, Refresh } from "@mynaui/icons-react";
import { EditTimerDialog } from "../EditTimerDialog/EditTimerDialog";
import { ButtonsToolbarProps } from "./ButtonsToolbar.types";

export const ButtonsToolbar = (props: ButtonsToolbarProps) => {
  const { handleStart, handlePause, handleReset } = props;

  const BUTTONS_MAPPED = [
    { label: "Start", icon: <Play />, onClick: handleStart },
    { label: "Pause", icon: <Pause />, onClick: handlePause },
    { label: "Reset", icon: <Refresh />, onClick: handleReset },
  ];

  return (
    <div className="flex items-center justify-center gap-2">
      <EditTimerDialog />

      <TooltipProvider>
        {BUTTONS_MAPPED.map((button) => {
          return (
            <Tooltip key={button.label}>
              <TooltipTrigger asChild>
                <Button onClick={button.onClick}>{button.icon}</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">{button.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
};
