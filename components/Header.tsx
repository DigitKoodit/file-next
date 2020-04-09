import * as React from 'react';
import styled from 'styled-components';
import { Image } from './Styled/Common';
//import { fonts } from '../styles/stylesheet';

export const Body = styled.body`
  overflow: visible;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;

  & * {
    box-sizing: border-box;
  }

  & > div {
    text-decoration: none;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const Page = styled.div`
  text-decoration: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 100px;
  max-width: 900px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100%;
  background: white;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0px;
  }
`;

const Header = styled.header`
  width: 100%;
  max-width: 600px;
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
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
  box-shadow: inset 8px 8px 10px 0px #e8eff2;
  background: #EBF1F3;
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
          Asteriskin, Digitin ja Nucleuksen ainejärjestöjulkaisu
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
