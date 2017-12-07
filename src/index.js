import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = '';

// Create a new component. This component should produce
// some HTML
// App = function() { 을 변경 (ES6)
//const App =  () => {
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            // ES6에서 key 값과 value 값을 같게 하면 이렇게 줄여서 표현 가능
            // this.setState({ video : video }); 는
            // this.setState({ videos }); 와 같다 (ES6)
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {

        // 매번 단어마다 검색하지 않고 300ms 기다리면 검색되게 해줌.
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList
                    onVideoSelected={ selectedVideo => this.setState({selectedVideo}) }
                    videos={ this.state.videos }/>
            </div>
        );
    }
};


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// <App/>을 하면 App 클래스를 인스턴스 하는 것임.