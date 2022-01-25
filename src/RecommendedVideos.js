import React from 'react';
import './RecommendedVideos.css'
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return( <div className='recommendedvideos'>
      <h2>Recommended Videos</h2>
      <div className='recommendedvideos__videos'>
             
<VideoCard
title="The Odin Project vs freeCodeCamp - What's The Best Free Website To Learn Web Development in 2022? "
views="1M views"
timestamp="3 days ago"
channelImage="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1"
channel="Dorian Develops" 
image="https://img.youtube.com/vi/Y9mTrj0oR8A/maxresdefault.jpg"/>
<VideoCard
title="How to Become a Full Stack Web Developer | Complete Roadmap
"
views="1M views"
timestamp="3 days ago"
channelImage=" https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1 "
channel="CodeWithHarry" 
image="https://img.youtube.com/vi/nknwAOtmtDk/maxresdefault.jpg"/>
<VideoCard
title="Web Developer Reacts to Beautiful Portfolio Websites"
views="1M views"
timestamp="3 days ago"
channelImage=" https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1"
channel="Adrian Twarog" 
image="https://img.youtube.com/vi/KWVJTRWILjU/maxresdefault.jpg"/><VideoCard
title="How to be a Full Stack Developer?
"
views="1M views"
timestamp="3 days ago"
channelImage="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1  "
channel="Telusko" 
image="https://img.youtube.com/vi/bhOSK7TzZKQ/maxresdefault.jpg"/><VideoCard
title="Front end developer Roadmap from 0
"
views="1M views"
timestamp="3 days ago"
channelImage="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1  "
channel="Hitesh choudhary" 
image="https://img.youtube.com/vi/nFQ22Wb6Qe8/maxresdefault.jpg"/><VideoCard
title="5 Projects You Can Build In A Week That Will Get You Hired
"
views="1M views"
timestamp="3 days ago"
channelImage=" https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1 "
channel="Web Dev Simplified !" 
image="https://img.youtube.com/vi/oluY633rkgI/maxresdefault.jpg"/><VideoCard
title="HTML Full Course - Build a Website Tutorial
"
views="1M views"
timestamp="3 days ago"
channelImage="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1  "
channel="freeCodeCamp.org" 
image="https://img.youtube.com/vi/pQN-pnXPaVg/maxresdefault.jpg"/>
      </div>
  </div>);
}

export default RecommendedVideos;
