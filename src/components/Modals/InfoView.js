import React from 'react'
import DateTime from '../DateTime/DateTime'
const InfoView = (props) =>{
    return(
        <div className="infoView">
            <span>viewed this information about you`</span>
            <div className="date">at
                <DateTime dateDate={props.data} status="hour" />
                on <DateTime dateDate={props.data} status="date" /></div>
        </div>
    )
};
export default InfoView