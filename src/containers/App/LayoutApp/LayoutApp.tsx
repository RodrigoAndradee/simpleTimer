import { ReactElement } from "react";

export const LayoutApp = ({ children }: { children: ReactElement }) => {
  return (
    <div className="bg-slate-800 h-screen flex items-center justify-center">
      {children}
    </div>
  );
};
