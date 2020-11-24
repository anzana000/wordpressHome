import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className = "header">
            <div className = "top-info">
                <span>Have you taken the WordPress 2020 Survey yet?</span>
            </div>

            <div className = "logo-N-info">
                <div className = "wordpressOrg">
                     <img src = "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2477546631566470624-512.png" alt = "wordpress logo"/>         
                
                    <h2>WORDPRESS.ORG</h2>      
                      </div>

                      <div className = "search-section">
                          <input placeholder = "Search Wordpress.org"/>
                          <SearchIcon/>
                      </div>
            </div>

            <div className = "button-and-links">
                    <ul>
                        <li><button href = "#">Showcase</button></li>
                        <li><button href = "#">Themes</button></li>
                        <li><button href = "#">Plugins</button></li>
                        <li><button href = "#">Mobile</button></li>
                        <li><button href = "#">Support</button></li>
                        <li><button href = "#">Get Involved</button></li>
                        <li><button href = "#">About</button></li>
                        <li><button href = "#">Blog</button></li>
                        <li><button href = "#">Hosting</button></li>
                    </ul>
                    <a href = "https://wordpress.org/download/"><button>Get WordPress</button></a>
            </div>
        </div>
    )
}

export default Header;

