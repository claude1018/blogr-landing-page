import React from 'react';
import * as styles from './style.module.sass';
import { Container } from '../Container/Container';
import { Small } from '../Headings/Headings';
import { Details } from '../Details/Details';
import laptopImgMobile from '../../../public/images/illustration-laptop-mobile.svg';
import laptopImgDesktop from '../../../public/images/illustration-laptop-desktop.svg';
import useInnerWidth from '../useInnerWidth/useInnerWidth';
import { ImageFitParent } from '../Image/Image';

const SectionFour = () => {
  const width = useInnerWidth();
  const img = width < 1110 ? laptopImgMobile : laptopImgDesktop;
  return (
    <Container className={`text-center ${styles['grid-two']}`}>
      <ImageFitParent
        className={styles.header}
        src={img}
        alt="image of a laptop"
      />

      <div className={styles.one}>
        <Small>Free, open, simple</Small>
        <Details className="mt-1">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </Details>
      </div>
      <div className={styles.two}>
        <Small>Powerful tooling</Small>
        <Details className="mt-1">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </Details>
      </div>
    </Container>
  );
};

export default SectionFour;
