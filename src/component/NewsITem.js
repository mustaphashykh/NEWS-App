import React, { Component } from 'react'


export default class NewsITem extends Component {
    render() {
        let { title, description, imageURL, newsURL, author, date } = this.props;
        return (
            <div className='my-4'>
                <div className="card" >
                    <div style={{ display: 'flex', position: 'absolute', justifyContent: 'flex-end', right: '0' }}>
                        <span className={`badge rounded-pill ${this.props.theme === 'dark' ? "bg-danger" : "bg-primary"}`}>
                            {this.props.name}
                        </span>
                    </div>
                    <img style={{ width: "100%", height: '160px' }} src={imageURL ? imageURL : "https://i.pinimg.com/564x/dc/c5/d7/dcc5d796870f54a1ef0d1f31ceefa781.jpg"} className="card-img-top" alt="..." />
                    <div className={`card-body ${this.props.theme === "light" ? "bg-light" : "bg-dark"} ${this.props.theme === 'dark' ? "text-white" : "text-black"}`}>
                        <h5 className="card-title">{title ? title.length > 34 ? title.slice(0, 34) + ".........." : title : "The title of this NEWS is missing..."}</h5>
                        <p className="card-text">{description ? description.length > 70 ? description.slice(0, 71) + "....." : description : "The description of the NEWS broadcasted above is missing from the site it is...."}</p>
                        <p className="card-text">Author : {author ? author.length > 10 ? author.slice(0, 10) + "..." : author : "Unknow"}</p>
                        <p className="card-text">Dated : {date ? new Date(date).toUTCString() : "Unknow"}</p>
                        <a href={newsURL} target="_blanks" className={`btn btn-sm
                         ${this.props.theme === 'dark' ? "btn-danger" : "btn-primary"} `}>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}