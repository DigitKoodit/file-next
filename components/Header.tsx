import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import InfoIcon from '@material-ui/icons/Info'
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
  fill: red;
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
  Label: any;
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
  display: inline-block;
  margin: 1rem;
  color: black;
  vertical-align: text-top;
`;


const naviTree: NaviItem[] = [
  { href: '/index', Label: HomeIcon },
  { href: '/artikkelit', Label: MenuBookIcon },
  { href: '/tietoa', Label: InfoIcon }
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
    <br />
    <NavLinkContainer>
      {naviTree.map(item => (
        <NavigationLink href={item.href} key={item.href}>
          <item.Label style={{ fontSize: '3rem' }} />
        </NavigationLink>
      ))}
    </NavLinkContainer>
  </Header>
);
