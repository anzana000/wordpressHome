import React from 'react'
import "./Footer.css"
import wordpress from "./wordpress.jpg";
import martha from "./martha.png";
import whitehouse from "./whitehouse.png";
import blondie from "./blondie.png";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <div className = "footer-section">
        <div className = "footer">
        <div className = "footer-col-1">
        <h2>WordPress Swag</h2>
        <img src = {wordpress} alt = "wordpress swag"/>
        </div>
        <div className = "footer-col-2">
            <h2>News From Our Blog</h2>
           <span>WordPress 5.6 Release Candidate</span>
           <p>WordPress 5.6 Release Candidate is now available!</p>
        </div>
        <div className = "footer-col-3">
            <h2 className = "black-header">It’s Easy As…</h2>
            <ol type = "1">
                <li><span>Find a trusted web host </span>and maybe support WordPress at the same time.</li>
                <li><span>Download & install WordPress </span>with our famous 5-minute installation. Publishing has never been easier.</li>
                <li><span>Spend some time reading our documentation</span>get to know WordPress better every day and start helping others, too.</li>
            </ol>
        </div>
        <div className = "footer-col-4">
        <h2>WordPress Users</h2>
            <div><img src = {martha} alt = "martha"/></div>
            <div><img src = {whitehouse} alt = "whitehouse"/></div>
           <div> <img src = {blondie} alt = "blondie"/></div>
           <span>… and hundreds more</span>
        </div>
</div>
<div className = "footer-bottom">
<div className = "footer-items">
<div className = "col-1">
    <ul>
        <li>About</li>
        <li>Blog</li>
        <li>Hosting</li>
        <li>Donate</li>
    </ul>
</div>
<div className = "col-2">
<ul>
        <li>Support</li>
        <li>Developers</li>
        <li>Get Involved</li>
    </ul>
</div>
<div className = "col-3">
<ul>
        <li>Showcase</li>
        <li>Plugins</li>
        <li>Themes</li>
    </ul>
</div>
<div className = "col-4">
<ul>
        <li>WordCamp</li>
        <li>WordPress.TV</li>
        <li>BuddyPress</li>
        <li>bbPress</li>
    </ul>
</div>
<div className = "col-5">
<ul>
        <li>WordPress.com</li>
        <li>Matt</li>
        <li>Privacy</li>
        <li>Public Code</li>
    </ul>
</div>
<div className = "col-6">
<ul>
        <li><TwitterIcon/> @WordPress</li>
        <li><FacebookIcon/> WordPress</li>
    </ul>
</div>
</div>
<div className = "quote">CODE IS POETRY.</div>
</div>   
</div>   
    )
}

export default Footer
