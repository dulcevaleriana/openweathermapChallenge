import React from "react";

const Card = (props: any) => {
    const mapData = props.mapData;
    return(
        <div className="class-Card">
            <h3>{props.title}</h3>
            {mapData.map((item:any,i:any)=>
                <p key={i}>{item.name}{item.value}</p>
            )}
        </div>
    )
}

export default Card;