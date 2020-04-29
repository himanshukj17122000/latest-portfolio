import React from "react";

import "./collection-item.styles.scss";

const ProjectItem = ({ title, linkUrl, info, imageUrl }) => (
  <div
    className='container'
    onClick={() => window.location.replace(`${linkUrl}`)}
  >
    <img
      src={imageUrl}
      alt='Avatar'
      class='image'
      width='10%'
      height='10%'
      position='absolute'
    />
    <div className='overlay'>
      <p className='text'>
        {title.toUpperCase()}
        <br />
        {info}
      </p>
    </div>
  </div>
);

export default ProjectItem;
