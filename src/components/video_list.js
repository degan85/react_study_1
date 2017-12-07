import React from 'react';
import VideoListItem from './video_list_item';

// 함수형일 때는 props로 쓰고
// class형일 때는 this.props로 써야함.
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
       return (
           <VideoListItem
               onVideoSelected={props.onVideoSelected}
               key={video.etag}
               video={video} />
       )
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;