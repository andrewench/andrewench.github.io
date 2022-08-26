import React from 'react';
import styles from './About.module.scss';
import SectionBox from './SectionBox';

const About = () => {
  return (
    <SectionBox anchorName='about' className={styles.Box}>
      <div id='about' className={`${styles.Box} App-Anchor`}>
        <blockquote className={styles.Quote} draggable='false'>"I love programming and I hope that one day to grow up to Middle and Senior"</blockquote>
      </div>
    </SectionBox>
  )
}

export default About