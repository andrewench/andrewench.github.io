import React from 'react';
import { AppIcon } from '../../common/AppUI';
import styles from './Offer.module.scss';

const Offer = () => {
  return (
    <div className={styles.Box}>
      <h1 className={`${styles.Message} ${styles.Text}`}>Hi, I'm andrewench</h1>
      <h3 className={`${styles.Title} ${styles.Text}`}>Junior React Frontend Developer</h3>
      <AppIcon name='arrow-down' />
    </div>
  )
}

export default Offer