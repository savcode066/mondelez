import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Rbt.module.css";

const Rbt: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate("/links");
  };

  return (
    <div className={styles.rbtContainer}>
      <div className={styles.rbtSection}>
        <div className={styles.rbtBox}>
          <p style={{ color: "white" }}>RBT</p>
        </div>
        <div className={styles.rbtUpdateBox} onClick={handleBoxClick}>
          <p style={{ color: "white" }}>Update</p>
        </div>
      </div>
    </div>
  );
};

export default Rbt;
