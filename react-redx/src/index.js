import _ from 'lodash'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../components/search_bar'
import VideoList from '../components/video_list'
import VideoDetail from "../components/video_detail";

//AIzaSyAy1nm1GgdGQhpOAz4WSoC3zY6wnLJL6Nk
const API_KEY = "AIzaSyAy1nm1GgdGQhpOAz4WSoC3zY6wnLJL6Nk";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.searchVideo('surfboards');

  }

  searchVideo(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos :videos,
        selectedVideo:videos[0]});
    });
  }

  render() {
    const videoSearch = _.debounce((term)=> {this.searchVideo(term)},300);
    return (<div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
    </div>);
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));