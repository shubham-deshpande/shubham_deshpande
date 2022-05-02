import React from 'react'
import './Exp.css'

export default function 
(props) {
  return (
    <>
    <div className="main-skills">
        <div className="card-skill" id='card-skill'>
        <div className="ttl-skill">
        <h2>Principal Global Services - Internship</h2>
        </div>
            <div className="card-body-skill">
                <h5 className="card-title-skill">{props.m}</h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <img className='img-skill' src='https://drive.google.com/uc?export=view&id=1kIgtmr8MgvsFW9VpNykxcQI_oWNDsXSD' alt='' />
                <div className="txt-skill">
                <h4>20th January, 2022 - 25th May, 2022</h4>
                  <p>Trained on the following softwares :</p>  
                  <div className="txtt">
                  <p className="txtt-flex">HTML</p>
                  <p className="txtt-flex">CSS</p>
                  <p className="txtt-flex">JavaScript</p>
                  <p className="txtt-flex">React.Js</p>
                  <p className="txtt-flex">Informatica</p>
                  <p className="txtt-flex">Power-BI</p>
                  <p className="txtt-flex">Oracle-SQL</p>
                  <p className="txtt-flex">Manual Testing</p>
                  <p className="txtt-flex">Selenium Testing</p>
                  <p className="txtt-flex">AWS</p>
                  <p className="txtt-flex">Python</p>
                  <p className="txtt-flex">Java</p>
                </div>
                </div>
                {/* <a href="/" className="card-link">Card link</a>
                <a href="#\/" className="card-link">Another link</a> */}
            </div>
        </div>
        </div>
    </>
  )
}
