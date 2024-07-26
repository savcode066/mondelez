import React from "react";
import styles from "./Supply.module.css";

import supplyImage from "./SupplyImages/supplyTitle.png";

const renderLinksSection = (title: string) => (
  <div className={styles.linksSection}>
    <h2>{title}</h2>
    <a href="#link1" className={styles.link}>
      Link 1
    </a>
    <a href="#link2" className={styles.link}>
      Link 2
    </a>
    <a href="#link3" className={styles.link}>
      Link 3
    </a>
    <p className={styles.addDocuments}>ADD DOCUMENTS</p>
  </div>
);

const Supply: React.FC = () => {
  return (
    <div className={styles.supply}>
      <div className={styles.supplySection}>
        <div className={`${styles.supplyBox}`}>
          <img
            src={supplyImage}
            alt="supplyImage"
            className={styles.supplyImage}
          />
          <p style={{ color: "white" }}>Supply</p>
        </div>
        <div className={styles.linksRow}>
          {renderLinksSection("Allocation Tracker")}
          {renderLinksSection("Dop Form")}
          {renderLinksSection("Excess List")}
          {renderLinksSection("Sample Request Form")}
        </div>
      </div>
    </div>
  );
};

export default Supply;
