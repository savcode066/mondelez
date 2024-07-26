import React from "react";
import styles from "./Rgm.module.css";

import rgmImage from "./RgmImages/rgmTitle.png";

const renderLinksSection = (title: string) => (
  <div className={styles.rgmLinksSection}>
    <h2>{title}</h2>
    <a href="#link1" className={styles.rgmLink}>
      Link 1
    </a>
    <a href="#link2" className={styles.rgmLink}>
      Link 2
    </a>
    <a href="#link3" className={styles.rgmLink}>
      Link 3
    </a>
    <p className={styles.rgmAddDocuments}>ADD DOCUMENTS</p>
  </div>
);

const Rgm: React.FC = () => {
  return (
    <div className={styles.rgmContainer}>
      <div className={styles.rgmContent}>
        <div className={styles.rgmBox}>
          <img src={rgmImage} alt="rgmImage" className={styles.rgmImage} />
          <p style={{ color: "white" }}>RGM</p>
        </div>
        <div className={styles.rgmLinksRow}>
          {renderLinksSection("ROI template")}
          {renderLinksSection("MFO template")}
          {renderLinksSection("IRF Template")}
          {renderLinksSection("Trade Policy & Pricing")}
        </div>
      </div>
    </div>
  );
};

export default Rgm;
