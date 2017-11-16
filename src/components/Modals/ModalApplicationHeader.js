import React from 'react'

const ModalApplicationHeader = (props) => {
    return (
        <div className="modal-header" style={{background:  props.bgColor}}>
            {props.bgImage || props.bgLogo ? <img src={props.bgImage || props.bgLogo } alt="logo"/> : null}
        </div>
    )
};
export default ModalApplicationHeader