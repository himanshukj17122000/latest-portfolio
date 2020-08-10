import React from 'react';

import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';
import Carousel from 'react-bootstrap/Carousel';
import { DiAppcelerator } from 'react-icons/di';

const HomePage = () => (
  <div className='homepage'>
    {/* <Carousel style={{ width: '40rem', height: '30rem' }}>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://i.ibb.co/3RNdbqY/IMG-2826.jpg'
          alt='Student'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://i.ibb.co/3RNdbqY/IMG-2826.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://i.ibb.co/3RNdbqY/IMG-2826.jpg'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <DiAppcelerator size='10x' /> */}
    <Directory />
  </div>
);

export default HomePage;
