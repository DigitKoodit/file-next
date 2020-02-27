import * as React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 20px;
  width: 100%;
  text-align: center;
  //max-width: 600px;
  position: fixed;
  bottom: 0px;
  background: #dddddd;
  &:after {
    z-index: 0;
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    top: -5px;
  }
`;

export default () => (
  <Footer>Copyright Asteriski ry, Digit ry, Nucleus ry, 2019</Footer>
);
