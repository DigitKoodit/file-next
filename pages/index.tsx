import React from 'react';
import propLoader from '../core/propLoader';
import { fetchFirstX } from '../core/api';
import styled from 'styled-components';
import { fonts } from '../styles/stylesheet';

const ArticleLink = styled.a`
  width: 100%;
  text-decoration: none;
  color: black;
  margin-bottom: 25px;
`;
const Short = styled.div`
  overflow: none;
  text-align:left;
  width: 100%;
  background: #f7f7f7;
  box-shadow: 2px 2px 5px 2px #efefef;
  padding: 10px 20px 20px 20px;
  border-radius: 10px 10px 10px 10px;
  h3 {
    text-decoration: none;
    font-size: 1.3rem;
    font-family: ${fonts.serif};
    font-weight: 600;
    color: gray;
  }
  a {
    text-decoration: none;
    color: black;
    width: 100%;
  }
  p {
    text-decoration: none;
    font-family: ${fonts.sans};
    font-weight: 400;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 10px 50px 30px 30px;
  }
`;
const MainContainer = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    padding: 10px 10px 0px 10px;
    text-align: left;
  }
`;
const MainText = styled.div`
  width: 100%;
  #width: 70%;
  align-self: start;
  text-align: justify;
  #margin-bottom: 30px;
  padding-left: 20px;
  padding-right: 30px;

  & p, b {
    font-family: 'Quattrocento', serif;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
    text-align: left;
  }
`;
// const FunFacts = styled.div`
//   width: 50%;
//   height: 100%;
//   margin-right: -130px;
//   border-radius: 10px 10px 10px 10px;
//   padding-left:30px;
//   padding-right:30px;
//   background: #EBF1F3;
//   & ul, li {
//     padding-left: 20px;
//   }
//   & li {
//     padding-left: 5px;
//     font-family: 'Quattrocento', serif;
//     font-size:1em;
//     padding-bottom:10px;
//   }
// `

const InstructionText = styled.div`
  margin: 30px;
  width: calc(100% + 250px);
  height:100px;
  padding-left: 150px;
  padding-right: 150px;
  background: #EBF1F3;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    width: calc(100% + 200px);
  }
  
  @media (max-width: 768px) {
    width: calc(100% + 40px);
    padding: 10px 50px 0px 30px;
    text-align: left;
  }
`;

const Digit = styled(Short)`
  background: url(static/digit.svg) top right no-repeat #f7f7f7;
  background-size: 130px 130px;
  //background: linear-gradient(135deg, rgba(247,247,247,1) 0%, rgba(251,255,201,1) 100%);
`;
const Asteriski = styled(Short)`
  background: url(static/asteriski.svg) top right no-repeat #f7f7f7;
  background-size: 130px 130px;
  //background: linear-gradient(135deg, rgba(247,247,247,1) 0%, rgba(233,255,213,1) 100%);
`;
const Nucleus = styled(Short)`
  background: url(static/nucleus.svg) top right no-repeat #f7f7f7;
  background-size: 130px 130px;
  //background: linear-gradient(135deg, rgba(247,247,247,1) 0%, rgba(224,225,255,1) 100%);
`;

const Index: React.SFC<any> = (props: any) => {
  const { data } = props;
  return (
    <React.Fragment>
      <MainContainer>
        <MainText>
          <h1>File Next Generation</h1>
          <p>
            Jo antiikin asteriskilaiset lukivat tuota suurta ja mahtavaa paperilehteä, <b>Fileä</b>. Useita vuosia myöhemmin teknistaustaiset digittiläiset liittyivät tähän jaloon joukkoon.
            Lukijakunta kasvoi entisestään (ei kovin paljon), kun biologisuudeltaan eroavat, tekniset taitajat nugettilaiset ottivat osaa arvokkaan lehden tuottamiseen. 
          </p>
          <p>
            Paperilehden ajoista aika melkein jätti Filen, kunnes sähköisyys tarttui sisältöön ja tempaisi sen internetin syövereihin. Tästä eteenpäin Fileä julkaistakoon vain ruudulta
            luettavassa muodossa, paitsi PilttiFileä, joka fuksipalleroiden iloksi edelleen paperisena tuotettakoon.
          </p>
          <p>
            Live long and prosper.
          </p>
          
        </MainText>
        {/* <FunFacts>
          <h3>File facts</h3>
          <ul>
            <li>Vuonna 1973 Asteriski ry:n tiedote julkaistiin ensimmäistä kertaa nimellä *File.</li>
            <li>Vuonna 1978 perustettiin ensimmäistä kertaa File-toimikunta.</li>
            <li>1980-luvulla Filen kehittyi tiedotteesta lehtiseksi, joka sisälsi myös humoristisia juttuja.</li>
            <li>Vuonna 1989 File sai ensimmäisen kerran virallisen toimituskunnan, jossa oli 3 henkeä.</li>
            <li>Vuonna 2000 Digit liittyi Fileen.</li>
            <li>Vuonna 2009 Filelle tuli myös Digitin puolelta päätoimittaja.</li>
            <li>Vuonna 2016 Nucleus liittyi Fileen. Nucleukselta tuli myös päätoimittaja.</li>
            <li>Vuonna 2019 yhtään Fileä ei julkaistu paperisena ja 2020 Filen verkkojulkaisu saatiin ulos.</li>
          </ul>
        </FunFacts> */}
      </MainContainer>
      <InstructionText>
        <h3>
          Kolme uusinta artikkelia:
        </h3>
      </InstructionText>
      {data.map(item => (
        <ArticleLink  href={`/article?id=${item.sys.id}`}>
          {item.fields.guild == 'digit'?
            <Digit key={item.sys.id}>
              <h3>{item.fields.title}</h3>
              <p>{item.fields.description}</p>
            </Digit> 
          : item.fields.guild == 'asteriski' ?
            <Asteriski key={item.sys.id}>
              <h3>{item.fields.title}</h3>
              <p>{item.fields.description}</p>
            </Asteriski>
          :  item.fields.guild == 'nucleus' ?
            <Nucleus key={item.sys.id}>
              <h3>{item.fields.title}</h3>
              <p>{item.fields.description}</p>
            </Nucleus>
          :
            <Short key={item.sys.id}>
              <h3>{item.fields.title}</h3>
              <p>{item.fields.description}</p>
            </Short>
          }
        </ArticleLink>
        
      ))}
      <br/>
    </React.Fragment>
  );
};

export default propLoader(Index, fetchFirstX(3));
