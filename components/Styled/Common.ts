import { fonts } from '../../styles/stylesheet';
import styled from 'styled-components';

export const fadeInTop = `
  @keyframes fade-in-top {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const fadeIn = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateX(-15x);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const fadeInLeft = `
  @keyframes fade-in-left {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Html = styled.html`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  background: #F3F7F9;
  #background: #efefef;
  & * {
    font-family: ${fonts.sans};
    line-height: 1.5;
  }
  & * {
    box-sizing: border-box;
  }
`;

export const Image = styled.img`
  width: 250px;
`;

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

export const PlaceHolder = styled.p`
  ${fadeInLeft}
  animation: fade-in-left .5s ease forwards;
  animation-delay: 300ms;
  opacity: 0;
  width: 100%;
  padding: 40px;
  font-size: 1.1rem;
  text-align: center;
  max-width: 100%;
  overflow-y: scroll;
  overflow-wrap: break-word;
`;
