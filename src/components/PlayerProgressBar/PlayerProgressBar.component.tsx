import React from 'react'

import styles from './PlayerProgressBar.module.css'

interface Props {
    trackName?: string;
    artists?: string[];
    progress: number;
}

const PlayerProgressBar = ({trackName, artists, progress}: Props) => {
    return (
        <div className={styles.progressBarWrapper}>
        <div className={styles.trackTitle}>
          {trackName}
        </div>
        <div className={styles.durationBar}>
          <div className={styles.progressBar} style={{width: `${progress * 100}%`}}/>
        </div>
        <div className={styles.author}>
          {artists?.join(', ')}
        </div>
      </div>
    )
}

export default PlayerProgressBar