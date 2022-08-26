import React from 'react';
import FlexboxGrid from '../components/ui/FlexboxGrid';
import ProgressBar from '../components/ui/ProgressBar';
import ProgressBarBox from '../components/ui/ProgressBarBox';
import { SectionTitle, CommandLineMode } from '../components/ui/SectionTitle';
import styles from './Plan.module.scss';
import SectionBox from './SectionBox';

const Plan = () => {
  return (
    <SectionBox anchorName='plan' className={`${styles.Box} App-Anchor`}>
      <SectionTitle
        username='andrewench'
        branchName='main'
        commandCLI='show-plan --username andrewench --grid'
        mode={CommandLineMode.light} />
      <FlexboxGrid>
        <ProgressBarBox label='GraphQL'>
          <ProgressBar currentPercent={0} />
        </ProgressBarBox>
        <ProgressBarBox label='Redux'>
          <ProgressBar currentPercent={5} />
        </ProgressBarBox>
        <ProgressBarBox label='React Saga'>
          <ProgressBar currentPercent={0} />
        </ProgressBarBox>
        <ProgressBarBox label='NEXT.js'>
          <ProgressBar currentPercent={0} />
        </ProgressBarBox>
        <ProgressBarBox label='Webpack'>
          <ProgressBar currentPercent={0} />
        </ProgressBarBox>
        <ProgressBarBox label='CSS Grid'>
          <ProgressBar currentPercent={5} />
        </ProgressBarBox>
        <ProgressBarBox label='Node.js'>
          <ProgressBar currentPercent={5} />
        </ProgressBarBox>
        <ProgressBarBox label='Git Flow'>
          <ProgressBar currentPercent={0} />
        </ProgressBarBox>
        <ProgressBarBox label='PostgreSQL'>
          <ProgressBar currentPercent={0} />
        </ProgressBarBox>
        <ProgressBarBox label='SOLID'>
          <ProgressBar currentPercent={1} />
        </ProgressBarBox>
        <ProgressBarBox label='OOP'>
          <ProgressBar currentPercent={3} />
        </ProgressBarBox>
        <ProgressBarBox label='Algorithms'>
          <ProgressBar currentPercent={5} />
        </ProgressBarBox>
      </FlexboxGrid>
    </SectionBox>
  )
}

export default Plan