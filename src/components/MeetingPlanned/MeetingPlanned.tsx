import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MeetingPlanned.module.css";

import meetingPlannedImage from "./MeetingPlannedImages/meetingPoliciesTitle.png";

const MeetingPlanned: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate("/links");
  };

  return (
    <div className={styles.meetingPlannedContainer}>
      <div className={styles.meetingPlannedSection}>
        <div className={styles.meetingPlannedBox}>
          <img
            src={meetingPlannedImage}
            alt="meetingPlannedImage"
            className={styles.meetingPlannedImage}
          />
          <p style={{ color: "white" }}>Meeting & Policies</p>
        </div>
        <div className={styles.meetingPlannedBoxes}>
          <div className={styles.meetingBox} onClick={handleBoxClick}>
            <p style={{ color: "black" }}>Meetings</p>
          </div>
          <div className={styles.policiesBox} onClick={handleBoxClick}>
            <p style={{ color: "black" }}>Policies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingPlanned;
