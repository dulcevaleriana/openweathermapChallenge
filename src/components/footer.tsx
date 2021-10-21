import React from "react";
import IMG_MOUNTAIN from '../assets/img/background_mountain.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import FooterMountain from "./footerMountain";

const Footer = () => {
    return(
        <div className="class-footer">
            <FooterMountain />
            <div><h6>Make whit <FontAwesomeIcon icon={faHeart} /> by Dulce Valeriana</h6></div>
        </div>
    )
}
export default Footer;