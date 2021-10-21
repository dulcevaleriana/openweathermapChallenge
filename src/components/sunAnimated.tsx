import React from "react";

const SunAnimated = (props:any) =>{
    return(
        <div className="class-SunAnimated">
            <div className={props.startSearch === true ? "class-cloud class-cloud-small" : "class-cloud class-cloud-small class-cloudDown"}/>
            <div className={props.startSearch === true ? "class-sun" : "class-sun class-sunDown"}/>
            <div className={props.startSearch === true ? "class-cloud class-cloud-small" : "class-cloud class-cloud-small class-cloudDown"}/>
        </div>
    )
}

export default SunAnimated;