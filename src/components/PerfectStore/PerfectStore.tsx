import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PerfectStore.module.css";

import perfectStoreImage from "./PerfectStoreImages/perfectStoreTitle.png";

const PerfectStore: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate("/links");
  };

  return (
    <div className={styles.perfectStore}>
      <div className={styles.perfectStoreSection}>
        <div className={styles.perfectStoreBox}>
          <img
            src={perfectStoreImage}
            alt="perfectStoreTitle"
            className={styles.perfectStoreImage}
          />
          <p style={{ color: "white" }}>Perfect Store & Merchandising</p>
        </div>
        <div className={styles.perfectBoxes}>
          <div className={styles.perfectBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Perfect Store</p>
          </div>
          <div className={styles.merchBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Merch & Display</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectStore;
