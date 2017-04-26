import React from 'react';
import SearchBar from '../container/SearchBar';
import VisibleVideoList from '../container/VisibleVideoList'
import VideoPlayerDetails from '../container/VideoPlayerDetails';

const App = () => {
  return (
    <div className="container" >
      <h3> A VIDEO RENDERING APP</h3>
      <SearchBar className="container" />
      <VideoPlayerDetails className="container" />
      <VisibleVideoList  className="container"/>
    </div>
  );
}

export default App;
