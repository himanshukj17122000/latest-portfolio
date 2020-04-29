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
      width='300vh'
      height='300vh'
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
