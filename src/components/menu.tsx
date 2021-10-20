import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props:any) => {
    const menuOptions = props.menuOptions;
    return(
        <div>
            <ul>
                {menuOptions.map((list:any,i:any) => 
                    <li key={i} >
                        {/* <FontAwesomeIcon icon={list.icon} />  */}
                        <NavLink to={list.link}>{list.name}</NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Menu;