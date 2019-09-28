import * as React from 'react';
import styled from 'styled-components';
import { fonts } from '../styles/stylesheet';

const Header = styled.header`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export interface NaviItem {
  href: string;
  label: string;
  divider?: string;
}

const NavigationLink = styled.a`
  padding: 1rem;
  font-family: ${fonts.sans};
`;

const naviTree: NaviItem[] = [
  { href: '/index', label: 'Koti' },
  { href: '/artikkelit', label: 'Artikkelit' }
];

export default () => (
  <Header>
    {naviTree.map(item => (
      <NavigationLink href={item.href} key={item.label}>
        {item.label}
      </NavigationLink>
    ))}
  </Header>
);
