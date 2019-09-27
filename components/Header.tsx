import * as React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export default ({ children }) => <Header>{children}</Header>;
