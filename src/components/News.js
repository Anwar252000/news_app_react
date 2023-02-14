import NewsItems from './NewsItems'
import React, { useState, useEffect } from 'react';
export default function News(props) {
    
    const [articles, setArticles] = useState([])
    const updateNews= async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=fa5257025bbc4383b1ff7566db0284fc`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
}
useEffect(()=>{
    updateNews();
},[]);

    return (
        <>
            <div className="container my-3">
                <h1 className='container' style={{textAlign:"center"}}> Top Head Lines {props.h1title}</h1>
                <div className="row" >
                {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsItems news={element.source.name} author={element.author?element.author:"Unknown"} date={element.publishedAt} title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                </div>
            </div>
        </>
    )
}