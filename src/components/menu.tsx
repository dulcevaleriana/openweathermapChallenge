import React from "react";
import { NavLink } from "react-router-dom";
import IMG_LOGO from '../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = (props:any) => {
    const menuOptions = props.menuOptions;
    return(
        <div>
            <img src={IMG_LOGO} alt="IMG_LOGO"/>
            <ul>
                {menuOptions.map((list:any,i:any) => 
                    <li key={i} >
                        <FontAwesomeIcon icon={list.icon} /> <NavLink to={list.link}>{list.name}</NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Menu;