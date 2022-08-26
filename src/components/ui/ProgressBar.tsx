import React, { useCallback, useRef } from 'react';
import styles from './ProgressBar.module.scss';

interface IProgressBar {
  currentPercent: number;
}

const ProgressBar = ({ currentPercent }: IProgressBar) => {
  let track = useRef<HTMLDivElement>(null);

  const calculateProgress = (currentPercent: number) => {
    if (track.current !== null) {
      if (currentPercent <= track.current.offsetWidth) {
        return Math.floor( (track.current.offsetWidth / 100) * currentPercent );
      }
    }
  }

  const measuredDrag = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      node.style.width = `${calculateProgress(currentPercent)}px`;
    }
  }, []);

  return (
    <div className={styles.Box}>
      <div className={styles.Track} ref={track}></div>
      <div className={styles.Drag} ref={measuredDrag}></div>
    </div>
  )
}

export default ProgressBar