import React from 'react';
import * as styles from './Attribution.module.sass';

const Attribution = () => {
  return (
    <div className={styles.attribution}>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/claude1018">claude</a>.
    </div>
  );
};

export default Attribution;
