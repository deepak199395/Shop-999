import React, { useState } from "react";
import { FaUser, FaBox, FaShoppingCart, FaCog, FaChartBar, FaBars, FaTimes } from "react-icons/fa";
import "../../Styles/admin.css"; // Import CSS file

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
      {/* 🟢 Hamburger Menu for Mobile */}
      <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 🟢 Sidebar */}
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

      {/* 🟢 Main Content */}
      <main className="admin-main">
        <div className="admin-content">
          {activeSection === "dashboard" && <Dashboard />}
          {activeSection === "profile" && <Profile />}
          {activeSection === "products" && <Products />}
          {activeSection === "orders" && <Orders />}
          {activeSection === "settings" && <Settings />}
        </div>
      </main>
    </div>
  );
};

/* Dummy Components for Sections */
const Dashboard = () => <Section title="Dashboard" />;
const Profile = () => <Section title="Profile" />;
const Products = () => <Section title="Products" />;
const Orders = () => <Section title="Orders" />;
const Settings = () => <Section title="Settings" />;

const Section = ({ title }) => (
  <div>
    <h2>{title}</h2>
    <p>Manage {title.toLowerCase()} from here.</p>
  </div>
);

export default Admin;
