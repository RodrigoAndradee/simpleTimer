import {
  Tabs as ShadCnTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { TabsProps } from "./Tabs.types";

export const Tabs = ({ tabs }: TabsProps) => {
  return (
    <ShadCnTabs defaultValue="timer" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-slate-700">
        {tabs.map((tab) => (
          <TabsTrigger
            key={`${tab.value} - ${tab.label}`}
            value={tab.value}
            className="data-[state=active]:bg-slate-600 data-[state=active]:text-white text-slate-300"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent value={tab.value} key={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </ShadCnTabs>
  );
};
