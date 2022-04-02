import React from "react";

const Navbar  = ({totalCounters}) => {
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                <i className="fa-fashopping-cart fa-lg m-2" aria-hidden="true"></i>
                <span className="badge badge-pill badge-info m-2" style={{width: 50}}>
                    {totalCounters}
                </span>
            </div>
        </nav>
    )
}

export default Navbar;