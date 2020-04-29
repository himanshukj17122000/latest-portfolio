import React from "react";
import Typewriter from "typewriter-effect";

import "./about.styles.scss";
const AboutPage = () => (
  <div className='information-holder'>
    <img src='https://i.ibb.co/vmcYqLp/DSC1502.jpg' alt='Profile Pic' />
    <div className='about-page'>
      <span>
        Hi! My name is Himanshu Jain. I am a rising Junior at Duke University,
        North Carolina studying Electrical & Computer Engineering-Computer
        Science. I am also planning to complete a minor in Financial Economics.
        My home town is New Delhi, India but I currently live in Durham, North
        Carolina. I have deep interest in applying Computer Science in other
        fields like Finance and Health. For almost a year, I worked on an
        Android Application named Digital Fidget. I have also worked on a bot
        for excavating and mapping archaeological sites. Please head over to my
        Portfolio page for more information. I am a fitness enthusiast and I
        love to hit the gym in my freetime. I also play sports like Tennis and
        Basketball (Let's go Devils!).
      </span>
      <span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pasteString("<br/>• I have grown up trilingual learning")
              .typeString(" English, Hindi and Punjabi.")
              .pasteString("<br/>• I just binge-watched")
              .typeString(" Money Heist")
              .pasteString(" and mixed opinion about it ")
              .typeString("(controversial but okay!)")
              .pasteString(
                "<br/>• I am a big fan of Bollywood movies and somewhat Hollywood Thrillers. I recently watched Extraction because of"
              )
              .typeString(" Thor")
              .pasteString(" 😤")
              .pasteString("<br/>• My favourite destination is")
              .typeString(" St.Moritz, Switzerland where I went last summer.")
              .pasteString(
                " It is a small town well-known because of the Ambani's (India's Richest family) hosting a wedding there."
              )
              .pauseFor(2500)
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </span>
    </div>
  </div>
);

export default AboutPage;
