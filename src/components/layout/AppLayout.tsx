import { Outlet } from "react-router";
import SideBar from "./AppBar";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <SideBar />
      <main className="main-content mt-14">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
