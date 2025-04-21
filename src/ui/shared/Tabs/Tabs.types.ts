import { ReactElement } from "react";

export interface TabsProps {
  tabs: { value: string; label: string; content: ReactElement }[];
}
