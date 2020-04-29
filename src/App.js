import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Projects from "./pages/projects/projects.component";
import AboutPage from "./pages/about/about.component";
import Header from "./components/header/header.component";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route
        exact
        path='/'
        render={() =>
          window.orientation > 1 ? <Redirect to='/about' /> : <HomePage />
        }
      />{" "}
      <Route path='/projects' component={Projects} />{" "}
      <Route path='/about' component={AboutPage} />{" "}
      <Route path='/mobile' component={AboutPage} />{" "}
    </Switch>{" "}
    <footer>
      <div className='icons'>
        <SocialIcon url='https://www.facebook.com/sirjain'> </SocialIcon>{" "}
        <SocialIcon url='https://www.linkedin.com/in/hkj17/'> </SocialIcon>{" "}
        <SocialIcon url='https://github.com/himanshukj17122000'> </SocialIcon>{" "}
        <SocialIcon url='https://drive.google.com/file/d/1QU6RULb4XnTNtTvzVqz-fCwW8VtGJ3FY/view'>
          {" "}
        </SocialIcon>{" "}
        <SocialIcon url='https://www.instagram.com/kumarjainhim/?hl=en'>
          {" "}
        </SocialIcon>{" "}
      </div>{" "}
    </footer>{" "}
  </div>
);

export default App;
