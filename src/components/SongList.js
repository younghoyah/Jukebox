import React from 'react';
import SongTile from './SongTile'


const SongList = props => {
  let songMessage;
  let songList = props.data.map(song => {
    if (props.stateId === song.id) {
      songMessage = `Currently playing ${song.name}`
      if (song.favorite) {
        songMessage += `JAJAJJAJAAJAM`
      }
    }
    return(
      <SongTile
        key={song.id}
        id={song.id}
        name={song.name}
        handleClick={props.handleClick}
      />
    )
  })

  return(
    <div>
      <h3>{songMessage}</h3>
      {songList}
    </div>
  )
}

export default SongList;
