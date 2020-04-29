import React from "react";

import PROJECT_DATA from "./projects.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: PROJECT_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Projects;
