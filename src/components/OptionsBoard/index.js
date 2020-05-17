import React from 'react';
import { Option } from 'Components';
import styles from './OptionsBoard.module.css';

function OptionsBoard(props) {
  const options =
    props.options &&
    props.options.map((option, i) => {
      const [call, put] = option;
      return (
        <Option
          key={`option${i}`}
          date={call.date}
          callOi={call.open_interest}
          callBid={call.bid}
          callAsk={call.ask}
          strike={call.strike_price}
          putBid={put.bid}
          putAsk={put.ask}
          putOi={put.open_interest}
        />
      );
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
