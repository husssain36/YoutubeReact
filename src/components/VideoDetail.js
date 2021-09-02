import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ( {video} ) => {
    
    if(!video) return <div>Loading...</div>

    console.log(video);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <React.Fragment>
            <Paper elevation={6} style={{height: '60%'}}>
                <iframe frameborder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{paddign: '15px'}}>
                <Typography  variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography style={{marginTop: '20px'}} variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography style={{marginTop: '5px'}} variant="subtitle2">{video.snippet.description}</Typography>
            </Paper> 
        </React.Fragment> 
    )
}

export default VideoDetail;