import React, { useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import {Link} from 'react-router-dom'
import {API_KEY, value_converter} from '../../data'

const Feed = ({category}) => {

    const[data,setData]=useState([])

    const fetchData = async()=>{
      const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
      await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }

  return (
    <div className="feed">
        <Link to={`video/20/4521`} className='card'>
        <img src={thumbnail1} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </Link>
    <div className='card'>
        <img src={thumbnail2} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail3} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail4} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail5} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail6} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail7} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail8} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail1} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail2} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail3} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail4} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail5} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail6} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail7} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail8} alt="" />
        <h2>best channel</h2>
        <h3>freeet stack</h3>
        <p>15kviews & bull; 2 days ago</p>
    </div>
    
    
    </div>
    
  )
}

export default Feed
