import React from 'react';
import { Header, OptionsPane } from 'Components';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header header={styles.header} />
      <OptionsPane />
    </div>
  );
}

export default App;
