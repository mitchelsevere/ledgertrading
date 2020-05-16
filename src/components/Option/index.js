import React from 'react';

function Option(props) {
  return (
    <tr>
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
