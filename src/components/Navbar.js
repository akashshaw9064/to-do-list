import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#85B8EF"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" data-bs-toggle="modal" data-bs-target="#aboutModal" href="#" onClick={(e)=>{e.preventDefault(); props.showAbout();}}>About</a> 
                </li>
                <div className="modal" id="aboutModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">About Us</h5>
                        <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>This To-Do list utility is created by Akash Shaw who is a full time software developer. Apart from coding you can find him singing, composing songs with his guitar and hanging out with his buddies. This Utility helps users to save their day to day activity and manage them effectively.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
               
            </ul>
            { props.searchBar?<form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>:""}
            </div>
        </div>
        </nav>
    )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    searchBar : PropTypes.bool
    
}
Navbar.defaultProps  = {
    title : 'Title Here',
    searchBar : false
}