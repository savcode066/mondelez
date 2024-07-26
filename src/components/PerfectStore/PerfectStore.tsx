import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PerfectStore.module.css";

import perfectStoreImage from "./PerfectStoreImages/perfectStoreTitle.png";

const PerfectStore: React.FC = () => {
  const navigate = useNavigate();

  const handlePerfectStoreClick = () => {
    // Define what should happen when "Perfect Store" is clicked
    navigate("/perfect-store-links");
  };

  const handleMerchBoxClick = () => {
    // Define what should happen when "Merch & Display" is clicked
    navigate("/merch-display-links");
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
          <div className={styles.perfectBox} onClick={handlePerfectStoreClick}>
            <p style={{ color: "white" }}>Perfect Store</p>
          </div>
          <div className={styles.merchBox} onClick={handleMerchBoxClick}>
            <p style={{ color: "white" }}>Merch & Display</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectStore;
