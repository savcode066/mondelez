import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={`${styles.button} ${styles.gpsMeeting}`}>
        GPS Meeting
      </button>
      <button className={`${styles.button} ${styles.innovationTrackers}`}>
        Innovation Trackers
      </button>
    </div>
  );
};

export default Home;
