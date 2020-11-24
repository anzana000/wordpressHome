import React from 'react'
import "./MainIntro.css"
import themes from "./themes.png";

function MainIntro() {
    return (
        <div className = "main-intro">
        <div className = "intro-section">
            <span>Meet WordPress</span>
            <p>WordPress is open source software you can use to create a </p>
            <p>beautiful website, blog, or app.</p>
        </div>
        <div className = "some-info-stuff">
            <p>Beautiful designs, powerful features, and the freedom to build</p>
            <p>anything you want. WordPress is both free and priceless at the</p>
            <p>same time.</p>
        </div>

        <div className = "themes-image">
            <img src = {themes} alt ="wordpress themes"/>
            <h2>Trusted by the Best</h2>
            <p>39% of the web uses WordPress, from hobby blogs to the</p>
            <p>biggest news sites online.</p>
        </div>

        <div className = "parallax-image">
         </div>
         <a href = "https://wordpress.org/showcase/" className = "link">Discover more sites built with WordPress.</a>
        </div>
    )
}

export default MainIntro
