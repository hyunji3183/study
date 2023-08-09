import React from 'react'
import ReactPlayer from 'react-player'

export default function ReactVideo() {
    const endVideo = () => {
        console.log('end');
    }
    const playVideo = () => {
        console.log('now playing');
    }
    return (
        <div>
            <h2>ReactVideo</h2>
            <ReactPlayer
                playing
                // loop
                controls
                muted
                onEnded={endVideo}
                onPlay={playVideo}
                url='./games-ovenbreak-feature-1.mp4' />
        </div>
    )
}
