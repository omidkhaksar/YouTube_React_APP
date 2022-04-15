import React from 'react'

export default class VideoList extends React.Component {
    render() {
        const selectedVideo = this.props.selectedVideo;
        
        if (!selectedVideo) {
            return (
                <div>
                    <div className="ui embed">

                    </div>
                    <div className="ui segment">
                        <div className="ui placeholder">
                        <div className="header">
                            <div className=" large line"></div>
                            <p className="line"></p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        const vidoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
        return (
            
            <div>
                <div className="ui embed">
                    <iframe width="560" height="315" src={vidoSrc} title="YouTube video player" frameBorder="25" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="ui segment" >
                    <h4 className="ui header">{selectedVideo.snippet.title}</h4>
                    <p>{selectedVideo.snippet.description}</p>
                </div>
            </div>
        );
    }
}
