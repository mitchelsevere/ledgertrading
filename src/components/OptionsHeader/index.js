import React from 'react';
import styles from './OptionsHeader.module.css';

function OptionsHeader() {
  return (
    <div className="options-header">
      <div className={styles.heading}>
        <h3>Trade Bitcoin</h3>
      </div>
      <div className={styles.prices}>
        <span className={styles.price}>9,500.00</span>
        <span className={styles.divider}>/</span>
        <span className={styles.price}>9,700.00</span>
      </div>
      <div className={`${styles.heading} ${styles.optionsHeading}`}>
        <h3>Call Options</h3>
        <h3 className={styles.put}>Put Options</h3>
      </div>
    </div>
  );
}

export default OptionsHeader;
