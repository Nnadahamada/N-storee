// import React, { useEffect, useRef, useState } from 'react';
// import video from 'src/Assets/WhatsApp.mp4'

// export default function VideoHome() {
//   const videoRef = useRef(null);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//     const interval = setInterval(() => {
//       if (videoRef.current) {
//         const currentTimeSec = videoRef.current.currentTime;
//         setCurrentTime(currentTimeSec);
//       }
//     }, 1000);
  

//   return (
//     <div>
//       <video width="70%" ref={videoRef} controls>
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div>
//         {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)} / {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
//       </div>
//     </div>
//   );
// }

import { Card, Col, Row, Button, CardGroup , Control  } from 'react-bootstrap';
import { Container } from "@mui/material";

import { Player } from "video-react";
import React from 'react'
import ReactPlayer from 'react-player'
import style from '../Video comp/Video.module.css'
export default function VideoHome() {
  return (
  


 <Container maxWidth="lg" justify="center">
 <div className= " player__wrapper mt-5">
 <ReactPlayer
     className={`${style.videocon} `}
     url="https://github.com/himahamoda/HN/assets/133769074/619fd79b-fcaf-4285-a551-504aa80b03bd     "
     width="100%"
     height="100%"
     playing={true}
     muted={true}
     loop
     controls
   />
</div>

</Container>
  )
}
