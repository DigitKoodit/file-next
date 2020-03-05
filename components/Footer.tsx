import * as React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 20px;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0px;
  background: #DAE4E9;
  margin-top: auto; 
  &:after {
    z-index: 0;
    position: absolute;
    content: '';
    left: 5px;
    right: 5px;
    top: -5px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: calc(100% + 40px);
    bottom: 0px;
  }
`;

export default () => (
  <Footer>Copyright Asteriski ry, Digit ry, Nucleus ry, 2019</Footer>
);
