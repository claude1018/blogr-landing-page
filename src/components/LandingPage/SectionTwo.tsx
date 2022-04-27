import React from 'react';
import * as styles from './style.module.sass';
import { Medium, Small } from '../Headings/Headings';
import { ImageFitParent } from '../Image/Image';
import graphImgMobile from '../../../public/images/illustration-editor-mobile.svg';
import graphImgDesktop from '../../../public/images/illustration-editor-desktop.svg';
import { Details } from '../Details/Details';
import { Container } from '../Container/Container';
import useInnerWidth from '../useInnerWidth/useInnerWidth';

const SectionTwo = () => {
  const width = useInnerWidth();
  const image = width < 1110 ? graphImgMobile : graphImgDesktop;
  return (
    <Container className={`text-center ${styles['grid-one']}`}>
      <Medium className={styles.header}>Designed for the future</Medium>
      <ImageFitParent
        className={styles.one}
        src={image}
        alt="Illustration editor Image"
      />
      <div className={styles.two}>
        <Small>Introducing an extensible editor</Small>
        <Details className="mt-1">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </Details>
      </div>
      <div className={styles.three}>
        <Small>Robust content management</Small>
        <Details className="mt-1">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </Details>
      </div>
    </Container>
  );
};

export default SectionTwo;
