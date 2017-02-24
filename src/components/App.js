import React from 'react';
import SearchBar from '../container/SearchBar';
import VisibleVideoList from'../container/VisibleVideoList'
import VideoPlayerDetails from '../container/VideoPlayerDetails';

const App = () => {
  return (
    <div>
      hi
      <SearchBar />
      <VideoPlayerDetails />
      <VisibleVideoList />
    </div>
  );
}

export default App;
