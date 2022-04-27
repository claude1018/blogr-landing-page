import React from 'react';
import * as styles from './Footer.module.sass';
import logo from '../../../public/images/logo.svg';
import menu from '../../helpers/menu.config.js';
import RenderLists from '../Lists/RenderLists';

const Footer = () => {
  return (
    <nav className={styles.grid}>
      <img className={styles.header} src={logo} alt="Blogr Logo" />
      <RenderLists className={styles.one} menu={menu.products} />
      <RenderLists className={styles.two} menu={menu.company} />
      <RenderLists className={styles.three} menu={menu.connect} />
    </nav>
  );
};

export default Footer;
