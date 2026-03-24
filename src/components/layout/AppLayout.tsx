import { Outlet } from "react-router";
import AppSidebar from "./AppBar";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <AppSidebar />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
