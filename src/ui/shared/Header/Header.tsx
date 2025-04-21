import { useRoute } from "@/containers/App/hooks/useRoute";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { routes } = useRoute();

  return (
    <div className="flex items-center w-full h-12 bg-slate-600 px-4 gap-4 overflow-x-auto">
      {routes.map((route) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-slate-300 underline"
              : "text-slate-100 hover:text-slate-300"
          }
          to={route.url}
          key={route.url}
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  );
};
