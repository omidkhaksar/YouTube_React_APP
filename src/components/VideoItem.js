import React from 'react'
import '../css/VideoItem.css'
export default class VideoItem extends React.Component {
  render() {
    const videoDetail = this.props.video
    const VideoSelected = this.props.onVideoSelect;
    return (
        <div onClick={() => VideoSelected(this.props.video)} className="item video-item">
            <img className="ui  image" src={videoDetail.snippet.thumbnails.medium.url} alt={videoDetail.snippet.title} />
            <div className="content">
                <h5 className="header">
                    {videoDetail.snippet.title}
                </h5>              
            </div>
            
        </div>
    );
  }
}
