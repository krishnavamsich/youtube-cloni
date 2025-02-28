import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
const PlayVideo = () => {
  return (
    <div className='play-video'>
       <video src={video1} controls autoplay muted></video>
      <h3>cregvev  erf3wref dfr3g   f</h3>
      <div className="play-video-info">
        <p>153 Views &bull; 2days ago</p>
        <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />125</span>

            <span><img src={share} alt="" />share</span>
            <span><img src={save} alt="" />save</span>

        </div>
      </div>
      <hr/>
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>casdcdc</p>
            <span>1M Subscribers</span>
        </div>
        <button>subscribe</button>
      </div>
      <div className="vid-description">
        <p>avfsvfvabsf</p>
        <p>csfvsfvfsv sfvsfsfvsfvfv</p>
        <hr />
        <h4>130 comments</h4>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>jack Nichoson <span>1day ago</span></h3>
                <p>ficiuiu lj wilk ds;ln ino uoipukli iinh</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>jack Nichoson <span>1day ago</span></h3>
                <p>ficiuiu lj wilk ds;ln ino uoipukli iinh</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
