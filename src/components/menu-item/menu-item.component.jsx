import React from "react";
import { withRouter } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./menu-item.styles.scss";

const MenuItem = ({
  title,
  info,
  imageUrl,
  size,
  name,
  history,
  linkUrl,
  match,
}) =>
  name !== "profile" ? (
    <div
      className={`${size} menu-item`}
      onClick={() => window.location.replace(`${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {size === "name" && title.trim() ? (
        <div className={`${name} name`}>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(" Hi! My name is Himanshu Jain. ")
                  .pasteString(
                    "I am a rising Junior at Duke University, North Carolina studying Electrical & Computer Engineering-Computer Science. I am also planning to complete a minor in Financial Economics. "
                  )
                  .typeString("Click here to read more!")
                  .pauseFor(2500)
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </span>
        </div>
      ) : (
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>{info}</span>
        </div>
      )}
    </div>
  ) : (
    <div
      className={`${size} menu-item`}
      onClick={() => window.location.replace(`${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    </div>
  );

export default withRouter(MenuItem);
