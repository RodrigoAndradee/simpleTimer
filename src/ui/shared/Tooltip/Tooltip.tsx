import {
  Tooltip as ShadCnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({ content, trigger }: TooltipProps) => {
  return (
    <TooltipProvider>
      <ShadCnTooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>

        <TooltipContent side="bottom">{content}</TooltipContent>
      </ShadCnTooltip>
    </TooltipProvider>
  );
};
