import React from 'react';
import DesktopNav from '../Menu/DesktopNav';
import MobileNav from '../Menu/MobileNav';
import useInnerWidth from '../useInnerWidth/useInnerWidth';
import * as styles from './Navbar.module.sass';
import logoPath from '/public/images/logo.svg';

const Navbar = () => {
  const width = useInnerWidth();
  const Navigation = width < 1110 ? <MobileNav /> : <DesktopNav />;
  return (
    <nav className={styles.nav}>
      <figure>
        <img
          src={logoPath}
          alt="Logo of Blogr in white color"
          className={styles.logo}
        />
      </figure>
      {Navigation}
    </nav>
  );
};

export default Navbar;
