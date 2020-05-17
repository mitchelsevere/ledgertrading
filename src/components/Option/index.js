import React from 'react';
import styles from './Option.module.css';

function Option(props) {
  return (
    <tr className={styles.option}>
      <td>{props.coi}</td>
      <td>{props.cbid}</td>
      <td>{props.cask}</td>
      <td>{props.strike}</td>
      <td>{props.pbid}</td>
      <td>{props.pask}</td>
      <td>{props.poi}</td>
    </tr>
  );
}

export default Option;
