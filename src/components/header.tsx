import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

const Header = (props:any) => {
    return(
        <div className="class-Header">
            You're on: { props.namePage !== "Home" && (
                <>
                    <NavLink to="/" exact={true}> 
                        <FontAwesomeIcon icon={faHouse} /> Home 
                    </NavLink> 
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                </>
            )}
            <NavLink to={props.link} exact={true}> 
                <FontAwesomeIcon icon={props.icon} /> {props.namePage}
            </NavLink>
        </div>
    )
}

export default Header;