import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props: any) => {
    const mapData = props.mapData;
    return(
        <div className="class-Card">
            {props.iconTitle && (<h3><FontAwesomeIcon icon={props.iconTitle} />{props.title}</h3>)}
            {mapData.map((item:any,i:any)=>
                <p key={i}>
                    <FontAwesomeIcon icon={item.icon} />
                    {item.name}
                    {item.value}
                </p>
            )}
        </div>
    )
}

export default Card;