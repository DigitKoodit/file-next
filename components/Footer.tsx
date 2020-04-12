import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 20px;
  width: 100%;
  text-align: center;
  position: relative;
  background: #DAE4E9;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    bottom: 0px;
  }
`;

export default () => (
  <Footer>Copyright Asteriski ry, Digit ry, Nucleus ry, 2019</Footer>
);
