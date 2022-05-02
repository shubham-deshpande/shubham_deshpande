import React from 'react'
import "./About.css"

export default function About(props) {
  return (
      <>
      <div className="main">
        <div className="card" id='card'>
            <div className="card-body">
                <h5 className="card-title">{props.m}</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <img className='img' src='https://drive.google.com/uc?export=view&id=1_Y4-mT4CyzWz2MsR1HdqJ-cVmdSpHeeZ' alt='' />
                <p className="txt">Seeking a challenging and rewarding career in the field where there is a scope for me to learn and grow as a successful engineer and at the same time where I can utilize my experience and skills for the growth of the company.</p>
                {/* <a href="/" className="card-link">Card link</a>
                <a href="#\/" className="card-link">Another link</a> */}
            </div>
        </div>
        </div>
      </>
  )
}
