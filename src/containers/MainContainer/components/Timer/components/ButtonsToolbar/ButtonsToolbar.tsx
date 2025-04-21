import { Button } from "@/components/ui/button";

import { Tooltip } from "@/ui/shared/Tooltip/Tooltip";
import { Pause, Play, Refresh } from "@mynaui/icons-react";
import { useMemo } from "react";
import { EditTimerDialog } from "../EditTimerDialog/EditTimerDialog";
import { ButtonsToolbarProps } from "./ButtonsToolbar.types";

export const ButtonsToolbar = (props: ButtonsToolbarProps) => {
  const { handleStart, handlePause, handleReset, handleUpdateTimer } = props;

  const BUTTONS_MAPPED = useMemo(
    () => [
      { label: "Start", icon: <Play />, onClick: handleStart },
      { label: "Pause", icon: <Pause />, onClick: handlePause },
      { label: "Reset", icon: <Refresh />, onClick: handleReset },
    ],
    [handlePause, handleReset, handleStart]
  );

  return (
    <div className="flex items-center justify-center gap-2">
      <EditTimerDialog onApply={handleUpdateTimer} />

      {BUTTONS_MAPPED.map((button) => {
        return (
          <Tooltip
            key={button.label}
            content={button.label}
            trigger={<Button onClick={button.onClick}>{button.icon}</Button>}
          />
        );
      })}
    </div>
  );
};
