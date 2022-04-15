import React from 'react'
import VideoItem from './VideoItem'
export default class VideoList extends React.Component {
  render() {
    const VideoSelected = this.props.onVideoSelect;
    const renderedList = this.props.videos.map((video) =>{
      return (<VideoItem onVideoSelect={VideoSelected} video={video}  key={video.id.videoId}/>)  
    })  
    return (
        <div className="ui relaxed divided  animated list">
            {renderedList}
        </div>
    )
  }
}
