import React, { ReactNode } from 'react';
import styles from './ProgressBarBox.module.scss';

interface IProgressBarBox {
  label: string;
  children: ReactNode;
}

const ProgressBarBox = ({ label, children }: IProgressBarBox) => {
  return (
    <div className={styles.Box}>
      <div className={styles.Label}>{label}</div>
      {children}
    </div>
  )
}

export default ProgressBarBox