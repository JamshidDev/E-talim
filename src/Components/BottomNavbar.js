import React from "react";
import "../css/BottomNavbar.css";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';

function BottomNavbar(){
    return(
        <>
            <div className="bottom_navbar_container">
                <ul className="box_icon">
                <li>
                <HomeRoundedIcon/>
                </li>
                <li>
                <PostAddRoundedIcon/>
                </li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                </ul>
            </div>
        </>
    )
}

export default BottomNavbar;