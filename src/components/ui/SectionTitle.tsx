import React from 'react';
import { AppIcon } from '../common/AppUI';
import styles from './SectionTitle.module.scss';

enum CommandLineMode {
  light = 'light',
  dark = 'dark'
}

interface ISectionTitle {
  username: string;
  branchName: string;
  commandCLI: string;
  mode: CommandLineMode
}

const SectionTitle = ({ username, branchName, commandCLI, mode }: ISectionTitle) => {
  return (
    <div className={styles.Box}>
      <div className={styles.PS1}>
        <AppIcon name='at' />
        <div className={styles.User}>{username}</div>
        <div className={styles.GitBranch}>
          <AppIcon name='git-branch' />
          <span>{branchName}</span>
        </div>
      </div>
      <div className={`${styles.CommandLine} ${mode === 'light' ? styles.CommandLine_light : styles.CommandLine_dark} ${mode === 'dark' ? 'BlinkCursor' : 'BlinkCursor BlinkCursor_white'}`}>
        {commandCLI}
      </div>
    </div>
  )
}

export { SectionTitle, CommandLineMode }