import React from 'react'
import {Grid} from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'
import youtube from './api/youtube';

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null,
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video})
  }

  handleSubmit = async(searchTerm) => {
    const res = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults:5,
        key: 'AIzaSyCWJ5Nbok2jAr1qkOo2p9u20yyG6E7O3zg',
        q: searchTerm,
    }
  });

      this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })
  } 
  render() {
    const {selectedVideo, videos} = this.state;
    return (
      
      <Grid justifyContent="center" container spacing={10}>
          <Grid item xs={12}>
              <Grid container spacing={10}>
                  <Grid item xs={12}>
                      <SearchBar onFormSubmit={this.handleSubmit}/>
                  </Grid>
                  <Grid item xs={7}>
                      <VideoDetail video={selectedVideo} />
                  </Grid>
                  <Grid item xs={5}>
                      <VideoList videos={videos}  onVideoSelect={this.onVideoSelect} />
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    )
  }
}
export default App;
