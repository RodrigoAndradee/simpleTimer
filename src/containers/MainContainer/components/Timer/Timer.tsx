import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { ButtonsToolbar } from "./components/ButtonsToolbar/ButtonsToolbar";
import { TimerCard } from "./components/TimerCard/TimerCard";
import { formatTime } from "./helpers";
import { MILLISECONDS } from "./Timer.types";

const INITIAL_TIME = 0; // Initial time in ms

export const Timer = () => {
  const [remainingTime, setRemainingTime] = useState(INITIAL_TIME);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { hours, minutes, seconds } = formatTime(remainingTime);

  const handleStart = () => {
    if (remainingTime > 0) setRunning(true);
  };

  const handlePause = () => setRunning(false);

  const handleReset = () => {
    setRunning(false);
    setRemainingTime(INITIAL_TIME);
  };

  useEffect(() => {
    if (running && remainingTime > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prev) => {
          const newTime = prev - MILLISECONDS;
          return newTime <= 0 ? 0 : newTime;
        });
      }, MILLISECONDS);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  useEffect(() => {
    if (remainingTime <= 0 && running) {
      setRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [remainingTime, running]);

  return (
    <Card className="flex items-center justify-center flex-col gap-2 bg-slate-600 border-transparent h-[200px]">
      <div className="flex flex-row gap-2">
        <TimerCard value={hours} />
        <TimerCard value={minutes} />
        <TimerCard value={seconds} />
      </div>

      <ButtonsToolbar
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
        handleUpdateTimer={setRemainingTime}
      />
    </Card>
  );
};
