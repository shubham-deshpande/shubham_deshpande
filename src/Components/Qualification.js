import React from 'react'
import './Qualification.css'
// import Skills from './Skills'

export default function 
() {
  return (
    <>
    <div className="accordion">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Graduation 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="flex">
            <div className="body">
                <h3>
                    College Name : Vishwakarma Institute of Technology, Pune
                </h3>
                <h4>
                    Degree : BTech in Mechanical Engineering
                </h4>
                <h4>
                    Year : 2018 - 2022
                </h4>
                <h4>
                    CGPA : 9.14 (Till Semester 7)
                </h4>
                <h4>
                    Percentage : 83.90% (Till Semester 7)
                </h4>
            </div>
            </div>
            <div className="logo">
                <img src="https://drive.google.com/uc?export=view&id=1uzGlslTUe6sWYQ5aLlSFXUfwDet2y5sG" alt='' className="image"/>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                College
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="flex">
            <div className="body">
                <h3>
                    College Name : Arihant College of Arts, Commerce and Science
                </h3>
                <h4>
                    Board : Higher Secondary Certificate (HSC)
                </h4>
                <h4>
                    Year : 2017 - 2018
                </h4>
                <h4>
                    Percentage : 78.64% 
                </h4>
            </div>
            </div>
            <div className="logo">
                <img src="https://drive.google.com/uc?export=view&id=1lgD80mXiQr4OSEzPH5_aDRCMcYb2D3yF" alt='' className="image"/>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                School
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="flex">
            <div className="body">
                <h3>
                    School Name : Pawar Public School
                </h3>
                <h4>
                    Board : Indian Certificate of Secondary Education (ICSE)
                </h4>
                <h4>
                    Year : 2015 - 2016
                </h4>
                <h4>
                    Percentage : 93.00% 
                </h4>
            </div>
            </div>
            <div className="logo">
                <img src='https://drive.google.com/uc?export=view&id=1L7QxmT88S7-bP1uKaFdI5SAdWPFV7hf8' alt='' className="image"/>
            </div>
            </div>
        </div>
    </div>
    {/* <Skills/> */}
    </>
  )
}
