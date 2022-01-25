import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import "./ChannelRow.css";




function ChannelRow(
    {image,
channel,
verified,
subs,
noOfVideos,
description}
) {
  return (<div className='channelRow'>
     <AccountCircleIcon className='channelRow__logo' 
     />
     <div className='channelRow__text'>
          <h4>{channel} {verified && < VerifiedIcon /> }</h4>
          <p>
              {subs} subscribers *  {noOfVideos} videos
          </p>
          <p>
              {description}
          </p>
     </div>
  </div>);
}

export default ChannelRow;
