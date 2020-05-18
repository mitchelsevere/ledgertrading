import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { OptionsHeader, OptionsBoard } from 'Components';
import styles from './OptionsPane.module.css';

import * as actions from 'Actions';

function OptionsPane() {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.options.data, shallowEqual);
  useEffect(() => {
    dispatch(actions.getData());
    // client side web socket
    // const webSocket = new WebSocket('ws://localhost:3000/ws');
    // webSocket.onopen = function (event) {
    //   console.log('WebSocket is now connected:', event);
    // };
    // webSocket.onerror = function (event) {
    //   console.error('WebSocket error observed:', event);
    // };
  }, []);
  return (
    <div className={styles.container}>
      <OptionsHeader />
      <OptionsBoard options={options} />
    </div>
  );
}

export default OptionsPane;
