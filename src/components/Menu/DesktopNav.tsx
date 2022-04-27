import React from 'react';
import * as styles from './DesktopNav.module.sass';
import menuConfig from '../../helpers/menu.config.js';
import Account from '../Account/Account';
import RenderDropdown from '../Dropdown/RenderDropdown';

const DesktopNav = () => {
  return (
    <div className={styles.menu}>
      <div className={styles['nav-links']}>
        <RenderDropdown menu={menuConfig.products} />
        <RenderDropdown menu={menuConfig.company} />
        <RenderDropdown menu={menuConfig.connect} />
      </div>
      <Account className={styles.account} />
    </div>
  );
};

export default DesktopNav;
