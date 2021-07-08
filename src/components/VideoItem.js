import './VideoItem.css';
import React from 'react';

const VideoItem = ({video}) => {
    return (
        <div className="video-item item">
            <img className="image item" src={video.snippet.thumbnails.medium.url} alt={video.snippet}/>
            <div className="content">
                <div className="header">{
                    video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;