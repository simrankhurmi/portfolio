import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Social from "./Social";

function  handleDownload(){
    window.open("https://drive.google.com/file/d/135QX-VbeOQKqjrajEyAXA7FCkqeM9Bot/view?usp=drive_link")
}

const Content = () => {
  return (
    <>
      <div className="content">
        <Section1 handleDownload={handleDownload}/>
        <Section2/> 
        <Social/>
      </div>
    </>
  );
};

export default Content;
