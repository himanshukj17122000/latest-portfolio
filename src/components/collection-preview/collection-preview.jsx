import React from "react";

import "./collection-preview.styles.scss";
import ProjectItem from "../collection-item/project-item.components";

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items.map(({ id, ...otherItemProps }) => (
        <ProjectItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
