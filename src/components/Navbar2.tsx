import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FederalGovt } from "./Federal";
import { StateGovt } from "./State";
import { LocalGovt } from "./Local";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("federal");

  const tabs = [
    { id: "federal", label: "Federal", path: "#" },
    { id: "state", label: "State", path: "#" },
    { id: "local", label: "Local", path: "#" },
  ];

  const renderComponent = () => {
    switch (activeTab) {
      case "federal":
        return <FederalGovt />;
      case "state":
        return <StateGovt />;
      case "local":
        return <LocalGovt />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="navList2">
        <ul className="nav-buttons">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`nav-button ${activeTab === tab.id ? "active" : ""}`}
              >
                <Link to={tab.path}>
                  <p>{tab.label}</p>
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="content-area">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, transform: "translateX(30px)" }}
            animate={{ opacity: 1, transform: "translateX(0px)" }}
            exit={{ opacity: 0, transform: "translateX(-30px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Dashboard;