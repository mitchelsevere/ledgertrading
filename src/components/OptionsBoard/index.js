import React from 'react';
import { Option } from 'Components';
import styles from './OptionsBoard.module.css';

function OptionsBoard(props) {
  const options =
    props.options &&
    props.options.map((option, i) => {
      return option.map((_, j) => {
        if (j % 2 === 0) {
          return (
            <Option
              key={`option${i + j}`}
              date={option[j].date}
              callOi={option[j].open_interest}
              callBid={option[j].bid}
              callAsk={option[j].ask}
              strike={option[j].strike_price}
              putBid={option[j + 1].bid}
              putAsk={option[j + 1].ask}
              putOi={option[j + 1].open_interest}
            />
          );
        }
      });
    });
  return (
    <table className={styles.options}>
      <thead>
        <tr className={styles.columnHeader}>
          <th>OI</th>
          <th>Bid</th>
          <th>Ask</th>
          <th>Strike</th>
          <th>Bid</th>
          <th>Ask</th>
          <th>OI</th>
        </tr>
      </thead>
      <tbody>{options}</tbody>
    </table>
  );
}

export default OptionsBoard;
