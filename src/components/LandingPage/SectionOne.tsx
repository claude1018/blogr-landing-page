import React from 'react';
import * as styles from './style.module.sass';
import { SecondaryButton, TransparentButton } from '../Button/Button';
import { IntroDetails } from '../Details/Details';
import { Big } from '../Headings/Headings';

const SectionOne = () => {
  return (
    <div className={styles['section-container']}>
      <div className="white">
        <Big color="#fff">A modern publishing platform</Big>
        <IntroDetails className={styles.margin}>
          Grow your audience and build your online brand
        </IntroDetails>
      </div>
      <div className={`flexCenterAll__row ${styles.margin}`}>
        <SecondaryButton>Start for Free</SecondaryButton>
        <TransparentButton>Learn More</TransparentButton>
      </div>
    </div>
  );
};

export default SectionOne;
