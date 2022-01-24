import React from 'react'
import './video.css'

const Video = () => {
    return (
        <div className='video'>
            <div className="ratio ratio-16x9">
                <iframe width="697" height="392" src="https://www.youtube.com/embed/R0MEZlK9kxQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default Video