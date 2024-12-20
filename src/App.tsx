import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import SalesStrategy from "./components/SalesStrategy/SalesStrategy";
import LinksSection from "./components/LinksSection/LinksSection";
import PerfectStore from "./components/PerfectStore/PerfectStore";
import Supply from "./components/Supply/Supply";
import Icr from "./components/Icr/Icr";
import Rgm from "./components/Rgm/Rgm";
import Sct from "./components/Sct/Sct";
import Rbt from "./components/Rbt/Rbt";
import MeetingPlanned from "./components/MeetingPlanned/MeetingPlanned";
import PsLinksSection from "./components/PsLinksSection/PsLinksSection";
import MerchLinksSection from "./components/MerchLinksSection/MerchLinksSection";

import styles from "./App.module.css";
import logoImage from "./assets/images/logo.png";

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <div className={styles.logo}>
            <div>
              <img src={logoImage} alt="Mondelez International Logo" />
            </div>
            <h1 className={styles.csc}>Canada Sales Central</h1>
          </div>
        </header>
        <nav className={styles.navbar}>
          <Link to="/">Home</Link>
          <Link to="/sales-strategy">Sales Strategy & Activation</Link>
          <Link to="/perfect-store">Perfect Store</Link>
          <Link to="/supply">Supply</Link>
          <Link to="/insights">Insights & Corporate Reporting</Link>
          <Link to="/rgm">RGM</Link>
          <Link to="/training">Sales Capabilities & Training</Link>
          <Link to="/rbt">RBT</Link>
          <Link to="/meetings">Meetings & Policies</Link>
        </nav>
        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <h3>Archive</h3>
            <ul>
              <li>
                <a href="#2024">2024</a>
              </li>
              <li>
                <a href="#2023">2023</a>
              </li>
              <li>
                <a href="#2022">2022</a>
              </li>
              <li>
                <a href="#2021">2021</a>
              </li>
              <li>
                <a href="#links">Links</a>
              </li>
            </ul>
          </aside>
          <main className={styles.mainContent}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sales-strategy" element={<SalesStrategy />} />
              <Route path="/links" element={<LinksSection />} />
              <Route path="/perfect-store" element={<PerfectStore />} />
              <Route path="/supply" element={<Supply />} />
              <Route path="/insights" element={<Icr />} />
              <Route path="/rgm" element={<Rgm />} />
              <Route path="/training" element={<Sct />} />
              <Route path="/rbt" element={<Rbt />} />
              <Route path="/meetings" element={<MeetingPlanned />} />
              <Route path="/perfect-store-links" element={<PsLinksSection />} />
              <Route
                path="/merch-display-links"
                element={<MerchLinksSection />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
