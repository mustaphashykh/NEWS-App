import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg ${this.props.theme === 'dark' ? "bg-dark" : "bg-light"} ${this.props.theme === 'dark' ? "text-white" : "text-black"}`}>
                    <div className="container-fluid">
                        <a className={`navbar-brand ${this.props.theme === 'dark' ? "text-white" : "text-black"}`} href="/">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <div style={{ width: "100%" }} onClick={() => { this.props.NEWSchanger('general') }} className={`btn ${this.props.theme === 'dark' ? 'btn-dark' : "btn-light"} ${this.props.category === 'general' ? "border" : ""}`}>General</div>
                                <div style={{ width: "100%" }} onClick={() => { this.props.NEWSchanger('business') }} className={`btn btn-light ${this.props.theme === 'dark' ? 'btn-dark' : "btn-light"} ${this.props.category === 'business' ? "border" : ""}`}>Business</div>
                                <div style={{ width: "100%" }} onClick={() => { this.props.NEWSchanger('entertainment') }} className={`btn btn-light ${this.props.theme === 'dark' ? 'btn-dark' : "btn-light"} ${this.props.category === 'entertainment' ? "border" : ""}`}>Entertainment</div>
                                <div style={{ width: "100%" }} onClick={() => { this.props.NEWSchanger('health') }} className={`btn btn-light ${this.props.theme === 'dark' ? 'btn-dark' : "btn-light"} ${this.props.category === 'health' ? "border" : ""}`}>Health</div>
                                <div style={{ width: "100%" }} onClick={() => { this.props.NEWSchanger('sports') }} className={`btn btn-light ${this.props.theme === 'dark' ? 'btn-dark' : "btn-light"} ${this.props.category === 'sports' ? "border" : ""}`}>Sports</div>
                                <div style={{ width: "100%" }} onClick={() => { this.props.NEWSchanger('science') }} className={`btn btn-light ${this.props.theme === 'dark' ? 'btn-dark' : "btn-light"} ${this.props.category === 'science' ? "border" : ""}`}>Science</div>
                                <div style={{ width: "100%" }} onClick={() => { this.props.NEWSchanger('technology') }} className={`btn btn-light ${this.props.theme === 'dark' ? 'btn-dark' : "btn-light"} ${this.props.category === 'technology' ? "border" : ""}`}>Technology</div>
                            </ul>
                            <div className="border rounded">
                                <div className='d-flex justify-content-between p-1'>
                                    <span><i className="fa-solid fa-sun mx-2"></i></span>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => { this.props.theme === 'dark' ? this.props.themeChanger('light') : this.props.themeChanger('dark') }} />
                                    </div>
                                    <span><i className="fa-solid fa-moon"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
