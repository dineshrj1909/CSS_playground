import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Card = () => {
  return <div style={{ backgroundColor: 'green' }}>Card title</div>;
};

const Cols = () => {
  return [1, 2, 3, 4].map((item) => (
    <Col md={4}>
      <Card></Card>
    </Col>
  ));
};

const FacilitiesGridStructure = () => {
  return (
    <Row style={{ marginTop: '24px' }}>
      <Col md={9}>
        <Row style={{ alignItems: 'center' }}>
          <Col>
            <div
              style={{
                borderRadius: '50%',
                border: '1px solid grey',
                width: '60px',
                height: '60px',
                // Default flex direction in row(left to right)
                display: 'inline-flex',
                // Justify content aligns horizontal axis
                justifyContent: 'center',
                // Align items aligns in vertical axis
                alignItems: 'center',
                marginRight: '8px',
              }}
            >
              5
            </div>
            <span>sample inline text</span>
          </Col>
          <Col md={'auto'}>
            <Button>View All</Button>
          </Col>
        </Row>
      </Col>
      <Col md={3}></Col>
    </Row>
  );
};

const GridExample = () => {
  return (
    // Container always contains max-width based on the device width.
    // Also contains padding of 15px to dissolve the negative margin provided for Row.
    <Container>
      <div
        style={{ backgroundColor: 'black', color: 'white', margin: '8px 0' }}
      >
        Sample text to show containers width
      </div>
      <Row>
        <Cols></Cols>
      </Row>
      <FacilitiesGridStructure />
    </Container>
  );
};

export default GridExample;
