import React from "react";
import styles from "./Home.module.css";
import homeImage from "./homeImages/homePage.jpg";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcomeBox}>Welcome to Canada's Sale Central</div>
      <img
        src={homeImage}
        alt="Welcome Photo"
        className={styles.welcomePhoto}
      />
    </div>
  );
};

export default Home;
