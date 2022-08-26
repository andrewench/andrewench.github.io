import React from 'react';
import { AppImg } from '../components/common/AppUI';
import { SectionTitle, CommandLineMode } from '../components/ui/SectionTitle';
import styles from './Portfolio.module.scss';
import SectionBox from './SectionBox';
import portfolioImage from '../assets/img/portfolio.jpg';

const Portfolio = () => {
  return (
    <SectionBox anchorName='portfolio' className={`${styles.Box} App-Anchor`}>
      <SectionTitle
        username='andrewench'
        branchName='dev'
        commandCLI='show-portfolio --username andrewench --out image'
        mode={CommandLineMode.dark}
        />
      <div className={styles.PortfolioList}>
        <div className={styles.ImageBox}>
          <AppImg src={portfolioImage} alt='Portfolio / Music Platform' />
        </div>
        <pre className={styles.ImageDescription}>
          <span>Title:</span> Music Platform<br />
          <span>Stack:</span> React / React Router<br />
          <span>Future Technologies:</span> Redux / i18next<br />
          <span>Status:</span> In develop
        </pre>
      </div>
    </SectionBox>
  )
}

export default Portfolio