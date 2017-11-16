import React from 'react';

const SideBar = (props) =>{
        return (
            <nav className="sidebar-wrapper bg-grey-1">
                <div className="sidebar">
                    <ul>
                        <li>
                            <span className="icon icon-activity"/>
                            <span className="title text-bold">Activity</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )

}

export default SideBar