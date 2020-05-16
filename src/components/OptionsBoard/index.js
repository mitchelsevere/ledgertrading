import React from 'react';
import { Option } from 'Components';

const data = [
  {
    c_oi: 5,
    c_bid: 4400,
    c_ask: 9900,
    strike: 6600,
    p_bid: 3100,
    p_ask: 111,
    p_oi: 2,
  },
  {
    c_oi: 5,
    c_bid: 4400,
    c_ask: 9900,
    strike: 6600,
    p_bid: 3100,
    p_ask: 111,
    p_oi: 2,
  },
];

function OptionsBoard() {
  const options = data.map((option, i) => (
    <Option
      key={`option${i}`}
      coi={option.c_oi}
      cbid={option.c_bid}
      cask={option.c_ask}
      strike={option.strike}
      pbid={option.p_bid}
      pask={option.p_ask}
      poi={option.p_oi}
    />
  ));
  return (
    <table>
      <thead>
        <tr>
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
