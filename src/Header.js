import React ,{useState} from 'react';
import './Header.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";


function Header() {
  const [inputSearch , setInputSearch] = useState("");

  return( <div className='header'>
<MenuSharpIcon className="menuIcon" fontSize='large' cursor ="pointer"/>

<Link to={"/"}>
<YouTubeIcon className="youtubeIcon" fontSize='large' cursor ="pointer" />
</Link>

<h1 className='header__name' cursor ="pointer">YouTube</h1>
<div className='headerInput'>
<input onChange={e => setInputSearch(e.target.value)} value={inputSearch} typeof='text'placeholder='    Search'  ></input>

<Link to={`/search/${inputSearch}`}>
  <SearchIcon fontSize='large' cursor="pointer" className='header__inputButton'/>


</Link>

</div>

<VideoCallSharpIcon className="addvideoIcon" fontSize='large' cursor ="pointer" />
<NotificationsSharpIcon  className="notificationIcon"fontSize='large' cursor ="pointer" />
<AppsIcon className="appIcon" fontSize='large' cursor ="pointer" />
<AccountCircleIcon 
alt="Rounit" 
src="https://avatars.githubusercontent.com/u/71965521?v=4"
className="avatarIcon" fontSize='large' cursor ="pointer" />

  </div>);
}

export default Header;
