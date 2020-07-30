import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Projects from './pages/projects/projects.component';
import AboutPage from './pages/about/about.component';
import Header from './components/header/header.component';
import { isMobile } from 'react-device-detect';
import './App.scss';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const App = () => {
  const [clicked, setClicked] = useState({
    status: false,
  });
  const handleDarkMode = () => {
    setClicked(prevState => ({
      ...prevState,
      status: !clicked.status,
    }));
    const app = document.querySelector('.App');
    const button = document.querySelector('.addDarkMode');
    app.classList.toggle('dark');
    button.classList.toggle('dark');
  };
  return (
    <div className='App'>
      {clicked.status ? (
        <Navbar
          collapseOnSelect
          bg='light'
          variant='light'
          expand='lg'
          size='3x'
          fixed='top'
        >
          <Navbar.Brand href='/'>👨‍💻</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/projects'>Projects</Nav.Link>
            <Nav.Link href='/about'>About Me</Nav.Link>
          </Nav>
        </Navbar>
      ) : (
        <Navbar
          collapseOnSelect
          bg='dark'
          variant='dark'
          expand='lg'
          size='3x'
          fixed='top'
        >
          <Navbar.Brand href='/'>👨‍💻</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/projects'>Projects</Nav.Link>
            <Nav.Link href='/about'>About Me</Nav.Link>
          </Nav>
        </Navbar>
      )}
      <button
        style={{
          fontSize: 30,
        }}
        className='addDarkMode'
        type='button'
        onClick={handleDarkMode}
      >
        {' '}
        {clicked.status ? '🔦' : '💡'}{' '}
      </button>{' '}
      <Switch>
        <Route
          exact
          path='/'
          render={() =>
            isMobile ? (
              <Route
                path='/'
                component={() => {
                  window.location.href = 'https://hkj.netlify.app';
                  return null;
                }}
              />
            ) : (
              <HomePage />
            )
          }
        />{' '}
        <Route
          path='/projects'
          render={() =>
            isMobile ? (
              <Route
                path='/projects'
                component={() => {
                  window.location.href =
                    'https://hkj.netlify.app/portfolio.html';
                  return null;
                }}
              />
            ) : (
              <Projects />
            )
          }
        />{' '}
        <Route
          path='/about'
          render={() =>
            isMobile ? (
              <Route
                path='/about'
                component={() => {
                  window.location.href = 'https://hkj.netlify.app';
                  return null;
                }}
              />
            ) : (
              <AboutPage />
            )
          }
        />{' '}
      </Switch>{' '}
      <footer>
        <div className='icons'>
          <SocialIcon url='https://www.facebook.com/sirjain'> </SocialIcon>{' '}
          <SocialIcon url='https://www.linkedin.com/in/hkj17/'> </SocialIcon>{' '}
          <SocialIcon url='https://github.com/himanshukj17122000'> </SocialIcon>{' '}
          <SocialIcon url='https://drive.google.com/file/d/1QU6RULb4XnTNtTvzVqz-fCwW8VtGJ3FY/view'>
            {' '}
          </SocialIcon>{' '}
          <SocialIcon url='https://www.instagram.com/kumarjainhim/?hl=en'>
            {' '}
          </SocialIcon>{' '}
        </div>{' '}
      </footer>{' '}
    </div>
  );
};

export default App;
