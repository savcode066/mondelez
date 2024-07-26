import React from "react";
import styles from "./Icr.module.css";

import icrImage from "./IcrImages/icrTitle.png";

const renderLinksSection = (title: string) => (
  <div className={styles.icrLinksSection}>
    <h2>{title}</h2>
    <a href="#link1" className={styles.icrLink}>
      Link 1
    </a>
    <a href="#link2" className={styles.icrLink}>
      Link 2
    </a>
    <a href="#link3" className={styles.icrLink}>
      Link 3
    </a>
    <p className={styles.icrAddDocuments}>ADD DOCUMENTS</p>
  </div>
);

const Icr: React.FC = () => {
  return (
    <div className={styles.icrContainer}>
      <div className={styles.icrContent}>
        <div className={styles.icrBox}>
          <img src={icrImage} alt="icrImage" className={styles.icrImage} />
          <p style={{ color: "white" }}>Insights & Corporate Reporting</p>
        </div>
        <div className={styles.icrLinksRow}>
          {renderLinksSection("Nielsen Consumption Reports")}
          {renderLinksSection("Industry Thought Leadership")}
          {renderLinksSection("Shopper Insights")}
          {renderLinksSection("Archive")}
        </div>
      </div>
    </div>
  );
};

export default Icr;
