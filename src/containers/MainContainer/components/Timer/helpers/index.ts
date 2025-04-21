import { MILLISECONDS, MINUTES, ONE_HOUR } from "../Timer.types";

interface formatTimePropsReturn {
  hours: string;
  minutes: string;
  seconds: string;
}

export const formatTime = (milliseconds: number): formatTimePropsReturn => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / MILLISECONDS));
  const hours = Math.floor(totalSeconds / ONE_HOUR);
  const minutes = Math.floor((totalSeconds % ONE_HOUR) / MINUTES);
  const seconds = totalSeconds % MINUTES;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};
