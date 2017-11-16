import React  from 'react';


const Header = (props) =>{
    return (
        <header>
            <nav id="top-navbar" className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-left">
                        <a className="navbar-brand">
                            <span className="icon icon-logo"/>
                        </a>
                    </div>
                    <div className="navbar-right">
                        <div className="connected navbar-brand">
                            <span className="text-regular">Connected</span>
                            <span className="icon icon-connect-on"/>
                        </div>
                        <div className="user">
                            <span className="icon icon-user_selfie_ph"/>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header