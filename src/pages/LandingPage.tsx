import React from 'react';
import * as styles from './LandingPage.module.sass';
import { Container } from '../components/Container/Container';
import Navbar from '../components/Navbar/Navbar';
import SectionOne from '../components/LandingPage/SectionOne';
import SectionTwo from '../components/LandingPage/SectionTwo';
import SectionThree from '../components/LandingPage/SectionThree';
import SectionFour from '../components/LandingPage/SectionFour';
import Footer from '../components/Footer/Footer';
import Attribution from '../components/Attribution/Attribution';

const LandingPage: React.FC = () => {
  return (
    <>
      <Container as="header" className={styles.header}>
        <Navbar />
        {/* Intro */}
        <SectionOne />
      </Container>
      <main>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </main>
      <Container as="footer" className={styles.footer}>
        <Footer />
        <Attribution />
      </Container>
    </>
  );
};

export default LandingPage;
