import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Tooltip } from "@/ui/shared/Tooltip/Tooltip";
import { Edit } from "@mynaui/icons-react";
import { useState } from "react";
import { EditTimerDialogProps } from "./EditTimerDialog.types";

const INITIAL_VALUE = "000000";

export const EditTimerDialog = ({ onApply }: EditTimerDialogProps) => {
  const [currentValue, setValue] = useState<string>(INITIAL_VALUE);

  const handleApply = () => {
    const hours = Number(currentValue.slice(0, 2));
    const minutes = Number(currentValue.slice(2, 4));
    const seconds = Number(currentValue.slice(4, 6));

    const hoursInMilliseconds = hours * 60 * 60 * 1000;
    const minutesInMilliseconds = minutes * 60 * 1000;
    const secondsInMilliseconds = seconds * 1000;

    onApply(
      hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds
    );
  };

  const handleClose = () => {
    setValue(INITIAL_VALUE);
  };

  return (
    <AlertDialog>
      <Tooltip
        content="Edit Timer"
        trigger={
          <AlertDialogTrigger asChild>
            <Button>
              <Edit />
            </Button>
          </AlertDialogTrigger>
        }
      />

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Timer</AlertDialogTitle>

          <AlertDialogDescription className="flex items-center justify-center w-full">
            <InputOTP maxLength={6} onChange={setValue} value={currentValue}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              :
              <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              :
              <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleApply}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

EditTimerDialog.defaultProps = {
  value: "000000",
};
