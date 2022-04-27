import React from 'react';
import * as styles from './style.module.sass';
import { Details } from '../Details/Details';
import { Special } from '../Headings/Headings';
import { ImageFitParent } from '../Image/Image';
import phoneImage from '../../../public/images/illustration-phones.svg';

const SectionThree = () => {
  return (
    <div className={styles.container}>
      <figure className={styles['img-container']}>
        <ImageFitParent
          className={styles['float-image']}
          src={phoneImage}
          alt="Illustration of a phone"
        />
      </figure>
      <div>
        <Special color="#fff">State of the Art Infrastructure</Special>
        <Details color="#fff" className="mt-1">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </Details>
      </div>
    </div>
  );
};

export default SectionThree;
