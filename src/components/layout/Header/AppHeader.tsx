import React from 'react';
import { AppNavHashLink } from '../../common/AppUI';
import Logo from '../../ui/Logo';
import styles from './AppHeader.module.scss';
import 'animate.css';

const AppHeader = () => {
  return (
    <div className={`${styles.Box} App-Header animate__animated`}>
      <Logo title='andrewench' description='> Person.init();' />

      <div className={styles.Links}>
        <AppNavHashLink className={styles.Link} to='/#skills' label='Skills' />
        <AppNavHashLink className={styles.Link} to='/#portfolio' label='Portfolio' />
        <AppNavHashLink className={styles.Link} to='/#plan' label='Plan' />
        <AppNavHashLink className={styles.Link} to='/#about' label='About' />
      </div>

    </div>
  )
};

export default AppHeader