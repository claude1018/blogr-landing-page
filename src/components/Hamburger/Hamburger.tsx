import React from 'react';
import * as styles from './Hamburger.module.sass';

type menuClickProps = (
  arg1: React.MouseEvent<HTMLDivElement>,
  arg2: string
) => void;

type onClickHandlerProps = (arg1: React.MouseEvent<HTMLDivElement>) => void;

const Hamburger: React.FC<{ onClick: menuClickProps }> = ({ onClick }) => {
  const onClickHandler: onClickHandlerProps = (event) => {
    onClick(event, styles.open);
  };
  return (
    <div onClick={onClickHandler} className={styles.hamburgerContainer}>
      <span className={styles.hamburger}></span>
    </div>
  );
};

export default Hamburger;
