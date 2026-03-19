import { Outlet } from "react-router";
import SideBar from "./AppBar";

const AppLayout = () => {
  return (
    <div className="app-layout h-full">
      <SideBar />
      <main className="main-content mt-16 ml-15 h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
