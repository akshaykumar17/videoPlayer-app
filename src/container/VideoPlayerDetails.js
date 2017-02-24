import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        selectedVideo: state.selectedVideo
    };
}

class VideoPlayerDetails extends Component {
    render() {
        if (!this.props.selectedVideo) {
            return <div className="videoplayer"></div>;
        }
        const videoID = this.props.selectedVideo.id.videoId;
        const url = "https://www.youtube.com/embed/" + videoID;
        return (
            <div className="videoplayer">
                <div>
                    <iframe src={url} > </iframe>
                </div>
                <div>{this.props.selectedVideo.snippet.title}</div>
                <div>{this.props.selectedVideo.snippet.discription}</div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(VideoPlayerDetails)