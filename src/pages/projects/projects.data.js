const PROJECT_DATA = [{
    id: 1,
    title: "Work Experience",
    items: [{
      id: 69,
      title: "Big Ideas Lab",
      size: "",
      linkUrl: "https://github.com/himanshukj17122000/moveIt",
      info: `Developing a health and fitness application that uses a Machine Learning Algorithm for searching nearby restaurants according to the user’s food preferences and stores the user’s steps count to monitor the fitness goals. Used Android Studio design features like Navigation Drawer, Persistent Bottom Sheet, RecyclerView, Fragments and Tab Layout to develop the UI. Incorporated Google Maps, Google Fit, GraphView, and Firebase in the application. Testing and debugging using Android Emulator. Gained hands-on experience in Android Development using Java, XML and Adobe XD`,
      imageUrl: "https://i.ibb.co/1G5hKfw/Screenshot-2020-12-12-at-5-58-02-AM.png",
    },{
      id: 88,
      title: "Meals For Families",
      size: "",
      linkUrl: "https://mealsforfamilies.org",
      info: `Volunteering with the Open NC Collaborative Team to mitigate the effects of Coronavirus Pandemic by providing North Carolina residents with a map of nearby grocery and free School meal sites. Building an interactive map using Google Sheets, Vue, Bootstrap-Vue, and Leaflet`,
      imageUrl: "https://i.ibb.co/1JnwjZf/1528383687964.png",
    },{
        id: 20,
        title: "CenturyLink Corporation",
        size: "",
        linkUrl: "",
        info: `Joined a Scrum Team following Scaled-Agile Framework. Participating in Scrum standup calls and demos. Developed and deployed a Spring Boot Application on Kubernetes for automatic uploading of fallout reports to the OracleDB and thereby reducing the report uploading time by ~30%. Built a full-stack data mapping Flask application with MongoDB to parse datasheets and display the results on a dashboard. Outperformed the existing system by ~5x. Configuring and building an interactive Executive dashboard using Hygieia to display metrics related to their projects`,
        imageUrl: "https://i.ibb.co/dDZZX55/https-i-forbesimg-com-media-lists-companies-centurylink-416x416.jpg",
      }, {
        id: 10,
        title: "National Informatics Center",
        size: "",
        linkUrl: "",
        info: `Developed the backend of SSO Analytics Application using Django,
        MongoDB, and Python that gathers data regarding access to the NIC
        database and monitors it to detect any suspicious activity. Built
        Custom APIs using Django Rest Framework and tested them using Postman
        to help the front-end developers fetch JSON data from the NIC servers. Set up MongoClient between RoboMongo and the Python Code to store
        and fetch the data. The gathered data is analysed to make sure no
        suspicious logins were made into the system`,
        imageUrl: "https://i.ibb.co/3Rkhs56/nic.jpg",
      },
      {
        id: 11,
        title: "Teaching Assistant",
        linkUrl: "",
        size: "",
        info: `Lab TA for the course ECE 110: Introduction to ECE. Helping a
        group of 10 students in carrying out lab exercises with Op-Amps,
        Voltmeters, Ammeters. Grading lab reports and holding office hours to
        help students with the course material. Attended weekly meetings and
        discussed ideas to make the lab better for the students. Office Hours
        TA for ECE 250/CS 250: Computer Architecture. Grading exams and
        helping students in their assignments during my office hours`,
        imageUrl: "https://i.ibb.co/CKyxYtq/pratt.png",
      },
      {
        id: 1,
        title: "Binary Semantics",
        size: "",
        linkUrl: "https://github.com/himanshukj17122000/Android-Visitor-Management-",
        info: `Met and discussed requirements of the client before working on the
        project. Learnt about the Software Design Life Cycle. Trained on
        various features of Android Studio by the Lead System Analyst of the
        Company. Developed a full-stack mobile application using Android
        Studio and SQLite for monitoring visitors to the office and collecting
        data to analyse it for future needs. The application integrates
        GoogleMaps API and is able to store the user's information in a global
        database. It also allows the user to print a ID card before visiting
        the office`,
        imageUrl: "https://i.ibb.co/zr44h6L/binary.png",
      },
      {
        id: 2,
        title: "Friendship Beyond Border",
        linkUrl: "https://www.amazon.com/Friendship-Beyond-Borders-Ayela-Chughtai-ebook/dp/B07G797MF7",
        info: `Met students from Pakistan for a science competition in India and
        worked on a project with them. The similarities between us work
        together and win the runners-up prize in the competition. I felt that
        they were really different from how I had imagined them to be. Co-authored a book that talks about these similarities between the two
        nations and how these similarities should be leveraged upon to
        overcome the hatred shared by both the nations. The book was endorsed
        by the Ministry of Culture, Government of India and was sold on
        Flipkart, Amazon etc. More than 500 copies of the book were
        sold`,
        imageUrl: "https://i.ibb.co/JCv3QJF/book.jpg",
      },

      {
        id: 4,
        title: "Duke Bass Connections",
        size: "",
        linkUrl: "https://igs.duke.edu/events/smart-archaeology-uncovering-secrets-beneath-surface",
        info: `Working on building a robot for exploring archaeological sites in
        Italy and mapping them in order to develop virtual reality models for
        educational purposes. Using tools like ROS and various SLAM softwares
        like Vins-mono and Rovio to develop the land rover as well as the
        aerial component (drone) of the project. Anticipated outcome is a
        research paper that will be presented at the American Association of
        Archaeologists Conference and other international workshops, digital
        exhibition near Vulci and Duke Library`,
        imageUrl: "https://i.ibb.co/qCT67bv/duke.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Clubs and Organisations",
    items: [{
        id: 3,
        title: "Duke Impact Investing Group",
        size: "",
        linkUrl: "",
        info: "Selected to be a part of the team that contacts off-campus companies to provide them technical assistance. Revamping the website, increasing the SEO presence, and overhauling the front-facing presence for the organization. Working across the other DIIG divisions to gather data about their work and the companies they interact with off-campus",
        imageUrl: "https://i.ibb.co/3Nn2qZC/diig.jpg",
      },
      {
        id: 12,
        title: "Duke Applied Machine Learning Group",
        linkUrl: "https://www.dukeaml.com",
        size: "",
        info: `Part of the Applied Machine Learning Group at Duke University. Working on Digital Fidget Project with other members of the Group in
        collaboration with the Humans and Autonomy Lab. Working on a Data
        Visualization Pipeline that takes different datasets and visualises
        the data using different graphs for better understanding the data. Group is working with different businesses in the Durham Area to help
        them understand the data regarding their business and help them expand
        to new areas. Working with the Woo Center on Analyte Data for
        grouping different lab reports together on the basis of the test`,
        imageUrl: "https://i.ibb.co/3vcCcHj/damlduke-copy.png",
      },
      {
        id: 13,
        title: "Humans and Autonomy Lab",
        size: "",
        linkUrl: "",
        info: "Developed an android application for wearables that provides the patient with anxiety relieving games and gathers accelerometer data and other health indicators. Learnt different Machine Learning algorithms and using them to analyze the data collected and improve the application accordingly. Intellectual Property Disclosure has been filed by the Professor for the application that was completed last semester",
        imageUrl: "https://i.ibb.co/jZns70N/Screenshot-2020-04-29-at-5-14-16-PM.png",
      },
      {
        id: 25,
        title: "Zavlanos Lab",
        size: "",
        linkUrl: "",
        info: "Selected to join a team of 6 students working on building a rover for mapping archaeological sites in Italy to make virtual reality models for educational purposes. Developed models and navigation algorithms in ROS for customizing a Jackal Robot and making it capable of mapping sending real-time location data and mapping surrounding areas using Lidar sensor. Built on open-source SLAM softwares like Vins-mono, Rovio and Roomba to carry out field trials with the robot",
        imageUrl: "https://i.ibb.co/3C3C3y5/Unknown.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Personal Projects",
    items: [{
      id: 99,
      title: "Dino- Find the word",
      linkUrl: "https://devpost.com/software/dino-vocab-on-the-fly",
      info: "Google extension that makes a popup with the word meaning, synonyms and example statements. Supports many different languages and helps the user learn new words. Keeps a track of the different words learnt and sends an email every week with the new words learnt and their meanings. Implemented the API used node mailer for sending emails to the given email ID with the given email body. Designed the popup and implemented drag features. Submitted for HackDuke 2020",
      size: "",
      imageUrl: "https://i.ibb.co/X3mCFdS/Screenshot-2020-12-12-at-6-14-57-AM.png",
    },{
      id: 99,
      title: "Gym Scheduler",
      linkUrl: "https://gymtrackerduke.herokuapp.com",
      info: "A combined portal for Duke students to reserve gym equipment, view and enroll in fitness classes, and manage their workout schedule! GymTracker allows you to view equipment and resources available by their location, reserve equipment in times that work for you, find and enroll in exciting classes - and manage all of your bookings, just with a click! Tech Stack- SQL, Flask, Jinja2, HTML, CSS, Bootstrap, Pyrebase (Firebase)",
      size: "",
      imageUrl: "https://i.ibb.co/87szYP6/Screenshot-2020-12-12-at-6-11-11-AM.png",
    },{
        id: 39,
        title: "MOOC Search Engine",
        linkUrl: "https://master.d381zdcnbbn5kn.amplifyapp.com",
        info: "I was inspired to build this since I feel that matching a curious mind to learning resources can be made more efficient. I feel that there are a plethora of resources (MOOCs, Podcasts, Videos) out there that lack a centralized search engine to find the best content in line with the learner's needs. People around the world, especially students, are currently at home and are looking for ways to improve their skills! They try to take online courses for different skills but often end up confused - which one should I use? This website helps you by fetching tutorials + courses + books + more from different sources with the top content. This makes learning much easier and faster. You can search for courses, videos, books, and codebase through our platform. We present all-encompassing learning resources for whatever you want to learn about! Example resources: Coursera, Udemy, Github, Youtube, Libgen.",
        size: "",
        imageUrl: "https://i.ibb.co/619gsjQ/Screenshot-2020-07-26-at-5-20-57-PM.png",
      },
      // {
      //   id: 42,
      //   title: "School Meal Mapper",
      //   linkUrl: "https://school-meal-mapper.github.io/School-Meal-Mapper/",
      //   info: "Joined a team of 20+ software developers to work on mitigating the effects of Coronavirus Pandemic by providing North Carolina residents with a map of nearby grocery and free School meal sites. Building an interactive map using Google Sheets, Vue, Bootstrap-Vue, and Leaflet",
      //   size: "",
      //   imageUrl: "https://i.ibb.co/GVQ2Src/Screenshot-2020-07-27-at-12-24-06-AM.png",
      // },
      {
        id: 18,
        title: "Vscode Extensions",
        linkUrl: "https://marketplace.visualstudio.com/items?itemName=webStarter.webStarter",
        size: "",
        info: "I made 3 extensions- Web Animations, Corona Recovery Stats for the Vscode and API retrieval extension. Web Animations allows users to get starter code for 5+ Web Animations that are made using different JavaScript libraries. Corona Recovery Stats allows the user to get the number of recoveries as well as the rate of recovery in any country they want. This information is show in their status bar. API retrieval uses Scrapy and Flask to scrape data from online websites and presents the different APIs category wise. The user can fetch online APIs using VScode and use them in his/her project.",
        imageUrl: "https://i.ibb.co/Fz2d9QC/Screenshot-2020-04-29-at-5-19-01-PM.png",
      },
      {
        id: 22,
        title: "Weather-App",
        linkUrl: "https://radiant-brook-47740.herokuapp.com",
        size: "",
        info: "I made a weather app using Node, Express, handlebars and CSS. This allows the user to get information about the weather of any place just by inputting the name of the city. The app uses 2 different APIs for getting the live weather of any place chosen by the user.",
        imageUrl: "https://i.ibb.co/pfznssD/Screenshot-2020-04-29-at-5-25-12-PM.png",
      },
      {
        id: 23,
        title: "GitHub Finder",
        size: "",
        linkUrl: "https://githubfinderhimanshu.netlify.com",
        info: "A webapp that is able to find the Github users using the username. You can visit the profile of the user and read about the repositories of the user. The app is hosted on Netlify and has been made using React.js, HTML, and CSS",
        imageUrl: "https://i.ibb.co/m0XPYWv/Screenshot-2020-04-29-at-5-25-42-PM.png",
      },
      {
        id: 24,
        title: "GitHub Battle",
        linkUrl: "https://hungry-haibt-e7dc30.netlify.com",
        size: "",
        info: "Learnt and Built a React App using GitHub API from scratch. The project fetches information using the GitHub API and displays the most popular repositories according to the programming language. The project's another component fetches information about GitHub users and compares their score to choose the winner between the two. Both the pages have a navigation bar to route between the two and even change the background of the page. The project was deployed on Netlify.",
        imageUrl: "https://i.ibb.co/Z6GGkk2/Screenshot-2020-04-29-at-5-21-24-PM.png",
      },
      {
        id: 25,
        title: "Task Manager APIs",
        linkUrl: "https://github.com/himanshukj17122000/task-managerAPIs",
        size: "https://himanshutask-manager.herokuapp.com",
        info: "Built 16 different API routes using Node, Express and MongoDB. The APIs can be used with Postman and are part of Task Manager Application that can create a user, log in the user, delete a user, upload images and maintain a list of tasks entered by the user. The APIs are being tested using Jest. Use https://himanshutask-manager.herokuapp.com as the endpoint to connect to the different end points. Emails are also sent using SendGrid API.",
        imageUrl: "https://i.ibb.co/n3vhJMr/nodejs-1-logo.png",
      },
      {
        id: 29,
        title: "Web Scraper",
        linkUrl: "https://github.com/himanshukj17122000/scraper",
        info: "This web scraper was made in Python that could be run using CLI.",
        size: "",
        imageUrl: "https://i.ibb.co/zJ5CgJN/Screenshot-2020-04-29-at-5-38-21-PM.png",
      },
      {
        id: 30,
        title: "Chat App",
        linkUrl: "https://himanshu-chat-app.herokuapp.com",
        info: "Chat App with multiple different rooms made using Socket.io, HTML, CSS, and Node.js. Real-time chat can be done by multiple members. Just choose the room and wait for others to join it before starting the chat!",
        size: "",
        imageUrl: "https://i.ibb.co/y5CVL2s/Screenshot-2020-05-19-at-3-01-29-AM.png",
      },
      {
        id: 31,
        title: "DevConnector",
        linkUrl: "https://devconnectorhkj.herokuapp.com",
        info: "A MERN Stack Application made for connecting developers across the globe. Anyone can register, login, delete account, make posts, comment on other posts and more. It also uses the github API for accessing the repos of the developer. Top repositories are displayed for the user. This application also uses Firebase for storing profile pictures that the user can change. SendGrid API is used for sending emails when the user registers or leave the application.",
        size: "",
        imageUrl: "https://i.ibb.co/2kgTYrD/Screenshot-2020-05-19-at-3-05-19-AM.png",
      },
    ],
  },
  {
    id: 4,
    title: "Coursework",
    items: [{
        id: 25,
        title: "Card Games",
        linkUrl: "",
        size: "",
        info: "Allows users to play a variety of games within a similar genre. Cards against Humanity, Solitaire, Memory, Truth and Dare are some of the games that can be played.",
        imageUrl: "https://i.ibb.co/hsp1xTc/Screenshot-2020-04-29-at-5-28-25-PM.png",
      },
      {
        id: 26,
        title: "Breakout Game",
        linkUrl: "https://github.com/himanshukj17122000/BreakoutGame",
        info: "A 2D game of Breakout, in which a ball bounces around the screen and affects bricks as it bounces into them. The player controls a paddle to brick the ball from moving off the screen. Written in OpenJFX.",
        size: "",
        imageUrl: "https://i.ibb.co/GHvFLNc/Screenshot-2020-04-29-at-5-29-13-PM.png",
      },
      {
        id: 27,
        title: "Cellular Automata Simulations",
        linkUrl: "https://github.com/himanshukj17122000/Simulation-Project-",
        info: `2D CA simulations. The cells are composed of their state and their rules for interacting with their neighbors. At the beginning of the simulation, the grid's number of rows and columns and the rules (e.g., whether a cell changes state, is created, or moves to another position in the grid) are set. The simulation is run by applying the rules (implemented in Java) on each cell "simultaneously", i.e., based only on their current state, and then updating their states in a second pass.`,
        size: "",
        imageUrl: "https://i.ibb.co/TBy5zsR/Screenshot-2020-04-29-at-5-30-37-PM.png",
      },
      {
        id: 28,
        title: "Fetch App",
        linkUrl: "https://github.com/himanshukj17122000/Fetch-App",
        info: `This mobile application allows the user to sign up using an email ID, sign in using Google and Facebook in order to make a profile for their dogs. The dog profile is then stored on the Firebase server and the preferences submitted are used to show other users. The user can then scroll through other profiles and read more about them. If the user likes it, he/she can chat with the other user using out in-built chat feature. This makes sure that the other user's number of phone number is never revealed to other people. The two users can then chat on our app and even send photos and videos.

        The application also shows a map with all the users marked on it so that the user can see nearby people. The users presented by our app also depend on the preferences one fills out while signing up. These preferences can later be changed and that would allow the displayed users to change as well.`,
        size: "",
        imageUrl: "https://i.ibb.co/G3TSqCd/Screenshot-2020-04-29-at-5-51-20-PM.png",
      },

      {
        id: 29,
        title: "Logo IDE",
        linkUrl: "https://github.com/himanshukj17122000/Logo-IDE",
        info: "An integrated development environment, IDE, that supports users to write SLogo programs. Unlike IDEs such as IntelliJ, which are designed around files that represent a complete program, SLogo users should be able to command the turtle interactively on a per instruction basis. This is the read-eval-print loop used in environments for interpreted languages such as Python, Lisp, Smalltalk, and now Java (even the command-line shell could be considered such an environment).",
        size: "",
        imageUrl: "https://i.ibb.co/HKnnr1H/Screenshot-2020-04-29-at-5-37-10-PM.png",
      },
    ],
  },
];

export default PROJECT_DATA;