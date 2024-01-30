'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import './style.scss';

const MainPlayer = () => {
  return (
    <>
      <div className='main-rp'>
        <ReactPlayer
          className='main-player'
          url="/videos/main.mp4"
          playing={true}
          muted={true}
          loop={true}
          width={'100%'}
          maxwidth={'none'}
        />
      </div>
    </>
  )
}

export default MainPlayer;
