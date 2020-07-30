import React from 'react';

import './collection-item.styles.scss';
import Flip from 'react-reveal/Flip';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectItem = ({ title, linkUrl, info, imageUrl }) => (
  <Flip left>
    <Card
      class='projectCard'
      style={{
        width: '18rem',
        height: '40rem',
        marginBottom: '2rem',
        overflow: 'hidden',
      }}
    >
      <Card.Img
        variant='top'
        src={imageUrl}
        style={{ width: '18rem', height: '20rem' }}
      />
      <Card.Body>
        <div
          class='cardComplete'
          style={{
            maxHeight: '17rem',
            overflowY: 'auto',
            scrollbarColor: 'red',
          }}
        >
          <Card.Title style={{ textAlign: 'center', justifySelf: 'center' }}>
            <strong>{title.toUpperCase()}</strong>
          </Card.Title>
          <Card.Text
            style={{
              maxHeight: '17rem',
              overflowY: 'scroll',
              scrollbarColor: 'red',
              overflow: 'hidden',
            }}
          >
            {info}
          </Card.Text>
          <br />
          {linkUrl ? (
            <Button
              variant='primary'
              onClick={() => window.location.replace(`${linkUrl}`)}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Check it out!
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  </Flip>
);

export default ProjectItem;
