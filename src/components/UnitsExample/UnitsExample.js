import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './UnitsExample.css';

const Para = ({ className }) => {
  return (
    <p className={className}>
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs. The passage is attributed to an
      unknown typesetter in the 15th century who is thought to have scrambled
      parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen
      book.
    </p>
  );
};

const UnitsExample = () => {
  return (
    <Row>
      <Col md={4}>
        <h2>px unit</h2>
        <p>Constants for all resolutions.</p>
        <Para className='font-size-px'></Para>
      </Col>
      <Col md={4}>
        <h2>rem unit</h2>
        <p>
          Scales the font size of elements based on the root HTML font size.
          Relative to font-size of the root element
        </p>
        <Para className='font-size-rem'></Para>
      </Col>
      <Col md={4} className='em-parent'>
        <h2>em unit</h2>
        <p>
          Scales based on the immediate parents font size or its own font size.
          Relative to the font-size of the element
        </p>
        <Para className='font-size-em'></Para>
      </Col>
    </Row>
  );
};

export default UnitsExample;
