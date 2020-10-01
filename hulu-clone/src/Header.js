import React from "react";
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        <div className="header">
            <div className="header_icons">
                {/* all icons here... */}
                <HomeIcon/>
                <FlashOnIcon/>
                <LiveTvIcon/>
                <VideoLibraryIcon/>
                <SearchIcon/>

            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png " alt=" " />
        </div>

    );
}

export default Header;


