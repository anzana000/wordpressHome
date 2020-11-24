import React from 'react'
import "./features.css";
import BrushIcon from '@material-ui/icons/Brush';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HttpsIcon from '@material-ui/icons/Https';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LineStyleIcon from '@material-ui/icons/LineStyle';

function Features() {
    return (
        <div className = "features-container">
            <h2>Powerful Features</h2>
            <p className = "small-text">Limitless possibilities. What will you create?</p>

            <div className = "features">
                <div className = "row-1">
                <div className = "box-1 box"><BrushIcon/> <p>Customizable</p><p> Designs</p></div>
                <div className = "box-2 box"><LineStyleIcon/> <p>SEO</p><p> Friendly</p></div>
                <div className = "box-3 box"><PhoneAndroidIcon/> <p>Responsive </p><p> Mobile Sites</p></div>
                <div className = "box-4 box"><TrendingUpIcon/> <p>High</p><p> Performance</p></div>
                </div>
                <div className = "row-2">
                <div className = "box-5 box"><DirectionsRunIcon/> <p>Manage</p><p> on the Go</p></div>
                <div className = "box-6 box"><HttpsIcon/> <p>High</p><p> Security</p></div>
                <div className = "box-7 box"><FileCopyIcon/> <p>Powerful</p><p> Media Management</p></div>
                <div className = "box-8 box"><AccessibilityNewIcon/> <p>Easy and</p><p> Accessible</p></div>

                </div>
                </div>

               <div className = "some-bottom-text">
               <p>Extend WordPress with over 55,000 plugins to help your website meet your</p>
                <p>needs. Add an online store, galleries, mailing lists, forums, analytics, and</p>
                <p><a href = "https://wordpress.org/plugins/">much more.</a></p>
               </div>

               <div className = "community-image">
                   <div className = "screen"></div>
                  <div className = "community-text"> <h2>Community</h2>
                   <p>Hundreds of thousands of developers, content creators, and site owners gather at</p>
                   <p>monthly meetups in 817 cities worldwide.</p>
                   <button>Find a local Wordpress Community</button></div>
               </div>

               <div className = "get-started">
                   <h2>Get Started with WordPress</h2>
                   <p>Over 60 million people have chosen WordPress to power the </p>
                      <p>  place on the web they call “home” — join the family.</p>

                   <button>Get WordPress</button>
               </div>
        </div>
    )
}

export default Features
