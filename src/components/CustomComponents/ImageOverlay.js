import React from "react";
;
// reactstrap components

export default function ImageOverlay(props) {
    const url = props.url
    const src = props.src

    return (
        <div className="content">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="content-overlay"></div>
                <img className="content-image" src={src} />
                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">This is a title</h3>
                    <p className="content-text">This is a short description</p>
                </div>
            </a>
        </div>
    )
}