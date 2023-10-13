import React from 'react'

const Section1 = ({handleDownload}) => {

  return (
   <>
   <div className="section-1">
                    <h1>Hi, I am <span>Simran Khurmi</span></h1>
                    <h3>React Developer</h3>
                    <p>Hand-based experience in web-based user interactions along with designing and implementing highly-responsive user interface component by deploying react components.</p>
                    <a href = "https://drive.google.com/file/d/135QX-VbeOQKqjrajEyAXA7FCkqeM9Bot/view?usp=sharing" download = "SIMRAN KHURMI"></a>
                    <button type="button" onClick={handleDownload}> Download CV </button>
                   
                </div>
   </>
  )
}

export default Section1