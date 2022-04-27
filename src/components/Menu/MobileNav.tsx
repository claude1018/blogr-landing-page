import React, { useRef } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import * as styles from './MobileNav.module.sass';
import menuConfig from '../../helpers/menu.config.js';
import RenderDropdown from '../Dropdown/RenderDropdown';
import Account from '../Account/Account';

type menuClickProps = (
  arg1: React.MouseEvent<HTMLDivElement>,
  arg2: string
) => void;

const MobileNav = () => {
  const menu = useRef<HTMLDivElement | null>(null);
  let showMenu = false;
  const menuClick: menuClickProps = (event, classOpen) => {
    const target = event.target as HTMLDivElement;
    target.classList.toggle(classOpen);
    if (!showMenu) {
      menu.current?.classList.remove(styles.hide);
      setTimeout(() => menu.current?.classList.add(styles['move-to-show']), 20);
      showMenu = true;
    } else {
      menu.current?.classList.remove(styles['move-to-show']);
      setTimeout(() => menu.current?.classList.add(styles.hide), 500);
      showMenu = false;
    }
  };
  return (
    <>
      <Hamburger onClick={menuClick} />
      <div ref={menu} className={`${styles.menu} ${styles.hide}`}>
        <ul>
          <RenderDropdown menu={menuConfig.products} />
          <RenderDropdown menu={menuConfig.company} />
          <RenderDropdown menu={menuConfig.connect} />
        </ul>
        <Account />
      </div>
    </>
  );
};

export default MobileNav;
