import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from './Logo.module.scss';

interface Props {
  title: string;
  description: string;
}

const Logo = ({ title, description }: Props) => {
  return (
    <HashLink smooth to='/#top' className={styles.Box}>
      <p className={styles.Title}>{title}</p>
      <p className={`${styles.Description} BlinkCursor`}>{description}</p>
    </HashLink>
  )
}

export default Logo