import React from "react";
import styles from "./Sct.module.css";

import sctImage from "./SctImages/sctTitle.png";

const renderLinksSection = () => (
  <div className={styles.sctLinksSection}>
    <a href="#link1" className={styles.sctLink}>
      Link to Sales training
    </a>
    <a href="#link2" className={styles.sctLink}>
      Link to Leadership training
    </a>
    <a href="#link3" className={styles.sctLink}>
      Link to Learning Resources
    </a>
    <a href="#link4" className={styles.sctLink}>
      Link to Development Tools
    </a>
  </div>
);

const Sct: React.FC = () => {
  return (
    <div className={styles.sctContainer}>
      <div className={styles.sctContent}>
        <div className={styles.sctBox}>
          <img src={sctImage} alt="sctImage" className={styles.sctImage} />
          <p style={{ color: "white" }}>Sales Capabilities & Training</p>
        </div>
        <div className={styles.sctLinksRow}>{renderLinksSection()}</div>
      </div>
    </div>
  );
};

export default Sct;
