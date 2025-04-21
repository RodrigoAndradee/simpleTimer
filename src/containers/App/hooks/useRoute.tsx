import { MainContainer } from "@/containers/MainContainer/MainContainer";
import { useMemo } from "react";

export const useRoute = () => {
  const routes = useMemo(
    () => [
      {
        enable: true,
        url: "/",
        Component: <MainContainer />,
        title: "MainContainer",
      },
      {
        enable: true,
        url: "*",
        Component: <>NOT FOUND</>,
        title: "Not Found",
      },
    ],
    []
  );

  return { routes };
};
