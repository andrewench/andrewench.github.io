import React, { memo } from 'react';
import ProgressBar from '../components/ui/ProgressBar';
import ProgressBarBox from '../components/ui/ProgressBarBox';
import { SectionTitle, CommandLineMode } from '../components/ui/SectionTitle';
import SectionBox from './SectionBox';
import FlexboxGrid from '../components/ui/FlexboxGrid';
import styles from './Skills.module.scss';

const Skills = memo(() => {
  return (
    <SectionBox anchorName='skills' className={`${styles.Box} App-Anchor`}>
      <SectionTitle
        username='andrewench'
        branchName='main'
        commandCLI='show-skills --username andrewench --grid'
        mode={CommandLineMode.light} />
      <FlexboxGrid>
        <ProgressBarBox label='HTML 5'>
          <ProgressBar currentPercent={90} />
        </ProgressBarBox>
        <ProgressBarBox label='CSS 3'>
          <ProgressBar currentPercent={85} />
        </ProgressBarBox>
        <ProgressBarBox label='JavaScript (ES6)'>
          <ProgressBar currentPercent={56} />
        </ProgressBarBox>
        <ProgressBarBox label='React'>
          <ProgressBar currentPercent={50} />
        </ProgressBarBox>
        <ProgressBarBox label='React Router'>
          <ProgressBar currentPercent={18} />
        </ProgressBarBox>
        <ProgressBarBox label='React Hooks'>
          <ProgressBar currentPercent={30} />
        </ProgressBarBox>
        <ProgressBarBox label='TypeScript'>
          <ProgressBar currentPercent={30} />
        </ProgressBarBox>
        <ProgressBarBox label='SASS (SCSS)'>
          <ProgressBar currentPercent={42} />
        </ProgressBarBox>
        <ProgressBarBox label='Tailwind'>
          <ProgressBar currentPercent={50} />
        </ProgressBarBox>
        <ProgressBarBox label='Git'>
          <ProgressBar currentPercent={40} />
        </ProgressBarBox>
        <ProgressBarBox label='Electron'>
          <ProgressBar currentPercent={56} />
        </ProgressBarBox>
        <ProgressBarBox label='Storybook'>
          <ProgressBar currentPercent={8} />
        </ProgressBarBox>
        <ProgressBarBox label='English'>
          <ProgressBar currentPercent={7} />
        </ProgressBarBox>
      </FlexboxGrid>
    </SectionBox>
  )
});

export default Skills;