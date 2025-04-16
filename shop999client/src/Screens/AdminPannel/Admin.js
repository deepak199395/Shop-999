import React, { useState } from "react";
import { FaUser, FaBox, FaShoppingCart, FaCog, FaChartBar, FaBars, FaTimes } from "react-icons/fa";
import "../../Styles/admin.css";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";
import Settings from "./Settings";
import Profile from "./Profile";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    { name: "Dashboard", icon: <FaChartBar />, key: "dashboard" },
    { name: "Profile", icon: <FaUser />, key: "profile" },
    { name: "Products", icon: <FaBox />, key: "products" },
    { name: "Orders", icon: <FaShoppingCart />, key: "orders" },
    { name: "Settings", icon: <FaCog />, key: "settings" },
  ];
   return (
    <div className="admin-container">
      <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2>Admin Panel</h2>
        <nav className="admin-nav">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => {
                setActiveSection(section.key);
                setSidebarOpen(false);
              }}
              className={activeSection === section.key ? "active" : ""}
            >
              {section.icon} {section.name}
            </button>
          ))}
        </nav>
      </aside>

      <main className="admin-main">
        <div className="admin-content">
          {activeSection === "dashboard" && <Dashboard />}
          {activeSection === "profile" && <Profile/>}
          {activeSection === "products" && <Products />}
          {activeSection === "orders" && <Orders />}
          {activeSection === "settings" && <Settings />}
        </div>
      </main>
    </div>
  );
};
export default Admin;
