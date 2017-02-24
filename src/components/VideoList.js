import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
    render() {
        if (!this.props.videos) {
            return <div className="video-list" ></div>
        }
        return (
            <ul className="video-list">
                {this.props.videos.map((video) => {
                    return (
                        <VideoItem
                            key={video.etag}
                            video={video}
                            onVideoSelected={this.props.onVideoSelected}
                            />
                    )
                })}
            </ul >
        );
    }

}


export default VideoList;