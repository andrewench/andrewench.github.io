import React, { ReactNode } from 'react';
import styles from './FlexboxGrid.module.scss';

interface IFlexboxGrid {
  children?: ReactNode;
}

const FlexboxGrid = ({ children }: IFlexboxGrid) => {
  return (
    <div className={styles.Box}>{children}</div>
  )
}

export default FlexboxGrid