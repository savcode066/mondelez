import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SalesStrategy.module.css";

const SalesStrategy: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate("/links");
  };

  return (
    <div className={styles.salesStrategy}>
      <div className={styles.biscuitSection}>
        <div className={styles.biscuitBox}>
          <p style={{ color: "white" }}>Biscuit</p>
        </div>
        <div className={styles.cookiesBoxes}>
          <div className={styles.cookieBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Cookies</p>
          </div>
          <div className={styles.crackerBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Crackers</p>
          </div>
        </div>
      </div>

      <div className={styles.confySection}>
        <div className={styles.confyBox}>
          <p style={{ color: "white" }}>Confy</p>
        </div>
        <div className={styles.confyBoxes}>
          <div className={styles.confyItemBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Item 1</p>
          </div>
          <div className={styles.confyItemBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Item 2</p>
          </div>
          <div className={styles.confyItemBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Item 3</p>
          </div>
        </div>
      </div>

      <div className={styles.snackBarSection}>
        <div className={styles.snackBarBox}>
          <p style={{ color: "white" }}>Snack Bar</p>
        </div>
        <div className={styles.clifBox} onClick={handleBoxClick}>
          <p style={{ color: "white" }}>Clif</p>
        </div>
      </div>

      <div className={styles.seasonalSection}>
        <div className={styles.seasonalBox}>
          <p style={{ color: "white" }}>Seasonal</p>
        </div>
        <div className={styles.seasonalItems}>
          <div className={styles.easterBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Easter</p>
          </div>
          <div className={styles.halloweenBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Halloween</p>
          </div>
          <div className={styles.festiveBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Festive</p>
          </div>
          <div className={styles.otherBox} onClick={handleBoxClick}>
            <p style={{ color: "white" }}>Other/Toblerone</p>
          </div>
        </div>
      </div>

      <div className={styles.scaleSection}>
        <div className={styles.scaleBox}>
          <p style={{ color: "white" }}>Scale</p>
        </div>
        <div className={styles.singleScaleBox} onClick={handleBoxClick}>
          <p style={{ color: "white" }}>Scale</p>
        </div>
      </div>
    </div>
  );
};

export default SalesStrategy;
