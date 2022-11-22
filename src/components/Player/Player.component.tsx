import React from 'react';
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";
import {
  PauseCircleIcon,
  PlayCircleIcon
} from "@heroicons/react/20/solid";
import PlayerProgressBar from '../PlayerProgressBar/PlayerProgressBar.component'

import styles from "./Player.module.css";

const Player = () => {
  const { state, actions} = usePlayer()
  const {progress, duration} = state
  const durationMinutes = Math.floor(duration / 60)
  const durationSeconds = duration % 60;
  const durationString = `${String(durationMinutes).padStart(2, '0')}:${String(durationSeconds).padStart(2, '0')}`

  const progressTotal = progress * duration
  const progressMinutes = Math.floor(progressTotal / 60)
  const progressSeconds = Math.round(progressTotal % 60)
  const progressString = `${String(progressMinutes).padStart(2, '0')}:${String(progressSeconds).padStart(2, '0')}`

  return (
    <div className={styles.root}>
      {state.playing ? (
        <PauseCircleIcon onClick={() => actions.pause()} className={styles.iconButton}/>
      ) : (
        <PlayCircleIcon onClick={() => actions.play({
          id: trackData.id,
          name: trackData.name,
          src: trackData.preview_url,
          artists: trackData.artists.map(artist => artist.name)
        })} className={styles.iconButton} />
      )}
      <PlayerProgressBar trackName={state.meta?.name} artists={state.meta?.artists} progress={state.progress} />
      <div className={styles.duration}>
        {progressString} / {durationString}
      </div>
    </div>
  );
};

export default Player;