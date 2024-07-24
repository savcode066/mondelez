import React from "react";
import styles from "./LinksSection.module.css";

const LinksSection: React.FC = () => {
  const renderLinksSection = (title: string) => (
    <div className={styles.linksSection}>
      <h2>{title}</h2>
      <a href="#link1" className={styles.link}>
        Link 1
      </a>
      <a href="#link2" className={styles.link}>
        Link 2
      </a>
      <a href="#link3" className={styles.link}>
        Link 3
      </a>
      <p className={styles.addDocuments}>ADD DOCUMENTS</p>
    </div>
  );

  return (
    <div className={styles.linksRow}>
      {renderLinksSection("Customer Facing Presentations")}
      {renderLinksSection("Internal Launch Strategies")}
      {renderLinksSection("Toolkit")}
    </div>
  );
};

export default LinksSection;
