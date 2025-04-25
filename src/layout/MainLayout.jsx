import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
