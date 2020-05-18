import React, { Fragment, useContext } from 'react';
import { useDispatch, ReactReduxContext } from 'react-redux';
import styles from './Option.module.css';

import * as actions from 'Actions';

function Option(props) {
  const numberConversion = (number, bool = true) => {
    if (bool) {
      return (number / 100)
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        .slice(1);
    }
    return (number / 100)
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
      .slice(1, -3);
  };

  const useStore = () => {
    const { store } = useContext(ReactReduxContext);
    const { getState, dispatch } = store;
    const state = getState();
    return [state, dispatch];
  };

  const [store] = useStore();
  const dispatch = useDispatch();
  const date = store.options.currentDate;
  dispatch(actions.setCurrentDate(props.date));

  return (
    <Fragment>
      {date !== props.date && (
        <tr className={styles.date}>
          <td>{props.date}</td>
        </tr>
      )}
      <tr className={styles.option}>
        <td>{props.callOi || '·'}</td>
        <td>{numberConversion(props.callBid) || '·'}</td>
        <td>{numberConversion(props.callAsk) || '·'}</td>
        <td className={styles.strike}>
          {numberConversion(props.strike, false) || '·'}
        </td>
        <td>{numberConversion(props.putBid) || '·'}</td>
        <td>{numberConversion(props.putAsk) || '·'}</td>
        <td>{props.putOi || '·'}</td>
      </tr>
    </Fragment>
  );
}

export default Option;
