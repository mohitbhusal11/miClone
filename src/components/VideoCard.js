import React from 'react'
import "../styles/VideoCard.css"


const VideoCard = ({image,name,index}) => {
  return (
    <div className='VideoCard' style={{backgroundImage:`url(${image})`}}>
        <p>{name}</p>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z"/></svg></a>
    </div>
  )
}

export default VideoCard