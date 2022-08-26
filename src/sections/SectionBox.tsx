import React, { ReactNode } from 'react';
import styles from './SectionBox.module.scss';

interface ISectionBox {
  children?: ReactNode;
  anchorName: string;
  className?: string;
}

const SectionBox = ({ children, anchorName, className = '' }: ISectionBox) => {
  return (
    <section id={anchorName} className={`${styles.Box} ${className}`}>{children}</section>
  )
}

export default SectionBox