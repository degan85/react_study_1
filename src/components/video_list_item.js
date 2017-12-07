import React from 'react';

// onVideoSelected는 index.js에서 선언한 function
const VideoListItem = ({video, onVideoSelected}) => {

    // const video = props.video;
    // 매개변수에 {}를 하고 변수명을 넣으면 변수 선언과 가져오는 것을 동시에 진행(ES6)
    const imageUrl = video.snippet.thumbnails.default.url;

  return (
      <li onClick={() => onVideoSelected(video)} className="list-group-item">
          <div className="video-list media">
              <div className="media-left">
                  <img className="media-object" src={imageUrl}/>
              </div>

              <div className="media-body">
                  <div className="media-heading">{video.snippet.title}</div>
              </div>
          </div>
      </li>
  );
};

export default VideoListItem;