import * as React from 'react';
import styled from 'styled-components';
import { Image } from './Styled/Common';
//import { fonts } from '../styles/stylesheet';

const Header = styled.header`
  width: 100%;
  //max-width: 600px;
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 90%;
  display:flex;
  justify-content: center;
  margin-left:auto;
  margin-right:auto;
`;
const FileText = styled.div`
  width: 50%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const Logo = styled(Image)`
  width: 20%;
  display: flex;
  align-self: center;
`;

const File = styled.h2`
  font-family: Courier;
  font-size: 32px; 
  margin-bottom: 0px;
  text-align: left;
`;

const SubFile = styled.h2`
  font-family: Courier;
  font-size: 16px; 
  text-align: left;
`;

export interface NaviItem {
  href: string;
  label: string;
  divider?: string;
}
const NavLinkContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px 10px 10px 10px;
  background: #efefef;
`;

const NavigationLink = styled.a`
  padding: 1rem;
  color: black;
  font-family: 'Material Icons';
  text-decoration: none;
  font-size: 48px;
`;


const naviTree: NaviItem[] = [
  { href: '/index', label: 'home' },
  { href: '/artikkelit', label: 'menu_book' }, 
  { href: '/tietoa', label: 'info' }
];

export default () => (
  <Header>
    <Title className="logo"> 
      <Logo src="static/logo.svg" alt="logo" />
      <FileText>
        <File>
          File
        </File>
        <SubFile>
          Digitin, Asteriskin ja Nucleuksen ainejärjestöjulkaisu
        </SubFile>
      </FileText>
    </Title>
    <br/>
    <NavLinkContainer>
      {naviTree.map(item => (
        <NavigationLink href={item.href} key={item.label}>
          {item.label}
        </NavigationLink>
      ))}
    </NavLinkContainer>
  </Header>
);
