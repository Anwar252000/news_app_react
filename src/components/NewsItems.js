import React from 'react'

export default function NewsItems(props) {
    return (
        <>
            <div className="card">
                <span class="badge text-bg-secondary">
                    {props.news}</span>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}...</h5>
                    <p className="card-text">{props.desc}...</p>
                    <p className="card-text">Author "{props.author}" and Published in {new Date(props.date).toLocaleString()}</p>
                    <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </>
    )
}
