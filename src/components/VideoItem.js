import React from 'react';

const VideoItem = ({
    video,
    onVideoSelected
}) => {
    // const imageUrl = video.snippet.thumbnails.default.url;
    // console.log(onVideoSelected);
    return (
        <li onClick={() => onVideoSelected(video)} >
            <div>
                <div>
                    <img role="presentation" src={video.snippet.thumbnails.default.url} />
                </div>
                <div>
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
}

export default VideoItem
