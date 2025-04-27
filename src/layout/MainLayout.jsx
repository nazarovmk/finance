import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";

function MainLayout() {
  const [showNavbar, setShowNavbar] = useState(() => {
    const stored = localStorage.getItem("showNavbar");
    return stored === "true";
  });

  useEffect(() => {
    localStorage.setItem("showNavbar", showNavbar);
  }, [showNavbar]);
  return (
    <div className="layout">
      <Sidebar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
