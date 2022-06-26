import React from "react";
import videoBG from '../video/car.mp4'


const VideoMain = () => {
    return (
        <div className="videomainbg"> 
  <video  src={videoBG} autoPlay muted loop/>
        </div>
    )
}
export default VideoMain;