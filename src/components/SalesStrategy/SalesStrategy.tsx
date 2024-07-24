import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SalesStrategy.module.css";

import cookieImage from "./salesImages/cookie.png";
import candyImage from "./salesImages/candy.png";
import chocolateImage from "./salesImages/chocolate.png";
import clifImage from "./salesImages/clif.png";
import coughImage from "./salesImages/cough.png";
import crackerImage from "./salesImages/cracker.png";
import scaleImage from "./salesImages/scale.png";
import seasonalImage from "./salesImages/seasonal.png";
import confyImage from "./salesImages/confy.png";
import easterImage from "./salesImages/easter.png";
import halloweenImage from "./salesImages/halloween.png";
import festiveImage from "./salesImages/festive.png";
import otherImage from "./salesImages/other.png";

const SalesStrategy: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate("/links");
  };

  return (
    <div className={styles.salesStrategy}>
      <div className={styles.biscuitSection}>
        <div className={`${styles.biscuitBox}`}>
          <img
            src={cookieImage}
            alt="Cookie"
            className={styles.cookieImageTitle}
          />
          <p style={{ color: "white" }}>Biscuit</p>
        </div>
        <div className={`${styles.cookiesBoxes}`}>
          <div className={styles.cookieBox} onClick={handleBoxClick}>
            <img
              src={cookieImage}
              alt="Cookie"
              className={styles.cookieImage}
            />
            <p style={{ color: "white" }}>Cookies</p>
          </div>
          <div className={styles.crackerBox} onClick={handleBoxClick}>
            <img
              src={crackerImage}
              alt="Cracker"
              className={styles.crackerImage}
            />
            <p style={{ color: "white" }}>Crackers</p>
          </div>
        </div>
      </div>

      <div className={styles.confySection}>
        <div className={`${styles.confyBox} `}>
          <img
            src={confyImage}
            alt="Candy"
            className={styles.confyImageTitle}
          />
          <p style={{ color: "white" }}>Confy</p>
        </div>
        <div className={`${styles.confyBoxes} `}>
          <div className={styles.confyItemBox} onClick={handleBoxClick}>
            <img src={candyImage} alt="Candy" className={styles.candyImage} />
            <p style={{ color: "white" }}>Candy</p>
          </div>
          <div className={styles.confyItemBox} onClick={handleBoxClick}>
            <img
              src={chocolateImage}
              alt="Chocolate"
              className={styles.chocolateImage}
            />
            <p style={{ color: "white" }}>Chocolate</p>
          </div>
          <div className={styles.confyItemBox} onClick={handleBoxClick}>
            <img src={coughImage} alt="Cough" className={styles.cookieImage} />
            <p style={{ color: "white" }}>Cough</p>
          </div>
        </div>
      </div>

      <div className={styles.snackBarSection}>
        <div className={`${styles.snackBarBox} `}>
          <img
            src={clifImage}
            alt="Clif"
            className={styles.snackBarImageTitle}
          />
          <p style={{ color: "white" }}>Snack Bar</p>
        </div>
        <div className={styles.clifBox} onClick={handleBoxClick}>
          <img src={clifImage} alt="Clif" className={styles.cookieImage} />
          <p style={{ color: "white" }}>Clif</p>
        </div>
      </div>

      <div className={styles.seasonalSection}>
        <div className={`${styles.seasonalBox} `}>
          <img
            src={seasonalImage}
            alt="Scale"
            className={styles.seasonalImageTitle}
          />
          <p style={{ color: "white" }}>Seasonal</p>
        </div>
        <div className={`${styles.seasonalItems} `}>
          <div className={styles.easterBox} onClick={handleBoxClick}>
            <img
              src={easterImage}
              alt="Easter"
              className={styles.cookieImage}
            />
            <p style={{ color: "white" }}>Easter</p>
          </div>
          <div className={styles.halloweenBox} onClick={handleBoxClick}>
            <img
              src={halloweenImage}
              alt="Halloween"
              className={styles.cookieImage}
            />
            <p style={{ color: "white" }}>Halloween</p>
          </div>
          <div className={styles.festiveBox} onClick={handleBoxClick}>
            <img
              src={festiveImage}
              alt="Festive"
              className={styles.cookieImage}
            />
            <p style={{ color: "white" }}>Festive</p>
          </div>
          <div className={styles.otherBox} onClick={handleBoxClick}>
            <img
              src={otherImage}
              alt="Other/Toblerone"
              className={styles.cookieImage}
            />
            <p style={{ color: "white" }}>Other/ Toblerone</p>
          </div>
        </div>
      </div>

      <div className={styles.scaleSection}>
        <div className={`${styles.scaleBox} `}>
          <img
            src={scaleImage}
            alt="Scale"
            className={styles.scaleImageTitle}
          />
          <p style={{ color: "white" }}>Scale</p>
        </div>
        <div className={styles.singleScaleBox} onClick={handleBoxClick}>
          <img src={scaleImage} alt="Scale" className={styles.cookieImage} />
          <p style={{ color: "white" }}>Scale</p>
        </div>
      </div>
    </div>
  );
};

export default SalesStrategy;
