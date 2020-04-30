import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "",
          imageUrl: "https://i.ibb.co/vmcYqLp/DSC1502.jpg",
          size: "name",
          name: "profile",
          info: `Hey! My name is Himanshu Jain`,
          id: 1,
          linkUrl: "about",
        },
        {
          title: "About Me",
          imageUrl: "https://i.ibb.co/nrtYZng/city.jpg",
          size: "name",
          name: "info",
          info:
            "Hi! My name is Himanshu Jain. I am a rising Junior at Duke University, North Carolina studying Electrical & Computer Engineering-Computer Science. I am also planning to complete a minor in Financial Economics. My home town is New Delhi, India but I currently live in Durham, North Carolina. I have deep interest in applying Computer Science in other fields like Finance and Health. For almost a year, I worked on an Android Application named Digital Fidget. I have also worked on a bot for excavating and mapping archaeological sites. Please head over to my Portfolio page for more information. I am a fitness enthusiast and I love to hit the gym in my freetime. I also play sports like Tennis and Basketball (Let's go Devils!).",
          id: 1,
          linkUrl: "about",
        },
        {
          title: "Resume",
          size: "",
          info: `Linked to Google Drive`,
          imageUrl:
            "https://i.ibb.co/vQ79B4Q/Screenshot-2020-04-28-at-10-34-06-PM.png",
          id: 2,
          linkUrl:
            "https://drive.google.com/file/d/1QU6RULb4XnTNtTvzVqz-fCwW8VtGJ3FY/view",
        },
        {
          title: "Work Experience",
          info: `Projects I've worked on`,
          imageUrl:
            "https://i.ibb.co/qWLgrfc/Screenshot-2020-04-28-at-10-39-40-PM.png",
          id: 3,
          linkUrl: "projects",
        },

        {
          title: "Contact Me",
          imageUrl: "https://i.ibb.co/tq1cgbx/Unknown.jpg",
          id: 5,
          info: "himanshu.jain@duke.edu",
          linkUrl: "mailto:hkj4@duke.edu",
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
