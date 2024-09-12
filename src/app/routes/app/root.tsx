// import { NavBarLayout } from "../../../components/layouts/nav-bar-layout";
import { Outlet } from "react-router-dom";
import { NavBarLayout } from "@/components/layouts/nav-bar-layout";
export const AppRoot = () => {
  return (
    <>
      <NavBarLayout>
        <Outlet />
      </NavBarLayout>
    </>
  );
};
