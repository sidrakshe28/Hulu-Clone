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

                <div className="header_icons">
                <HomeIcon/>
                <p>Home</p>
                </div>
                {/* all icons here... */}
                <div className="header_icons">
                <FlashOnIcon/>
                <p>Trending</p>
                </div>

                <div className="header_icons">
                <LiveTvIcon/>
                <p>Verified</p>
                </div>

                <div className="header_icons">
                <VideoLibraryIcon/>
                <p>Collections</p>
                </div>

                <div className="header_icons">
                <SearchIcon/>
                <p> Search</p>
                </div>

                <div className="header_icons">
                <PersonOutlineIcon/>
                <p>Account</p>
                </div>
                
                
                
                
                

            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png " alt=" " />
        </div>

    );
}

export default Header;


