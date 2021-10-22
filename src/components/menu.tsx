import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from '../js/jsMediaQuery';

import IMG_LOGO from '../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Menu = (props:any) => {
    const menuOptions = props.menuOptions;
    const responsiveMenuWidth768px = useMediaQuery("(max-width: 768px)");
    const [activeMenu, setActiveMenu] = useState(false);

    return(
        <div className="class-menu">
            {responsiveMenuWidth768px && (
                <>
                    {activeMenu === true ? (
                        <FontAwesomeIcon icon={faXmark} onClick={() => setActiveMenu(false)}/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} onClick={() => setActiveMenu(true)}/>
                    )}
                </>
            )}
            <img src={IMG_LOGO} alt="IMG_LOGO"/>
            <ul className={activeMenu === true ? "class-menu-smartphone" : " "}>
                {menuOptions.map((list:any,i:any) => 
                    <li key={i} onClick={() => setActiveMenu(false)}>
                        <NavLink to={list.link} exact={true}><FontAwesomeIcon icon={list.icon} />{list.name}</NavLink>
                    </li>
                )}
            </ul>
            {activeMenu && (<div className="class-bg-menu-smartphone" onClick={() => setActiveMenu(false)}/>)}
        </div>
    )
}

export default Menu;