import React from 'react'


const SongTile = props => {

  let handleClick = () => { props.handleClick(props.id) }
  return(
    <div onClick={handleClick}>{props.name}</div>
  )
}

export default SongTile;
