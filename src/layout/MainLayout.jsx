import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function MainLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
