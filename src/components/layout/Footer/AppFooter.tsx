import React from 'react';
import { AppIcon, IconVariants } from '../../common/AppUI';
import styles from './AppFooter.module.scss';

const AppFooter = () => {
  return (
    <div className={styles.Box}>
      <a className={styles.ProfileLink} href='https://github.com/andrewench' target='_blank' rel='noreferrer'>
        <AppIcon name='logo-github' variant={IconVariants.none} />
        <span>andrewench</span>
      </a>
      <p className={styles.Build}>Build Stack: React / TailwindCSS</p>
      <a className={styles.Source} target='_blank' href='https://github.com/andrewench/andrewench.github.io' rel='noreferrer'>
        <AppIcon name='open' />
        <span>See in Github</span>
      </a>
      <div className={styles.Copyright}>© 2022. All right reserved.</div>
    </div>
  )
}

export default AppFooter