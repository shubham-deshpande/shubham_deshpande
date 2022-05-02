import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom'

export default function Cards(props) {
  return (
      <>
      <div className="main">
        <div className="card" >
            <img src="https://source.unsplash.com/random/1080x1000/?wallpaper/nature" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.q}</h5>
                <p className="card-text">Click to know about my {props.q}.</p>
                <div className="button">
                    <Link to="/shubham_deshpande/qualification" className="btn btn-primary" id='button-card'>{props.k}</Link>
                </div>
            </div>
        </div>
        <div className="card" >
            <img src="https://source.unsplash.com/random/1080x1000/?wallpaper/sea" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.e}</h5>
                <p className="card-text">Click to know about my {props.e}.</p>
                <div className="button">
                    <Link to="/shubham_deshpande/experience" className="btn btn-primary" id='button-card'>{props.k}</Link>
                </div>
            </div>
        </div>
        <div className="card" >
            <img src="https://source.unsplash.com/random/1080x1000/?wallpaper/air" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.a}</h5>
                <p className="card-text">Click to know about my {props.a}.</p>
                <div className="button">
                    <Link to="/shubham_deshpande/achievement" className="btn btn-primary" id='button-card'>{props.k}</Link>
                </div>
            </div>
        </div>
        <div className="card" >
            <img src="https://source.unsplash.com/random/1080x1000/?wallpaper/land" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.p}</h5>
                <p className="card-text">Click to know about my {props.p}.</p>
                <div className="button">
                    <Link to="/shubham_deshpande/projects" className="btn btn-primary" id='button-card'>{props.k}</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}