import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchFirstX } from '../core/api';
import styled, { keyframes } from 'styled-components';
import { fonts } from '../styles/stylesheet';

const scale = keyframes`
  0%: transform: scale(1.0)
  100%: transform: scale(1.03)
`;

const Short = styled.div`
  overflow: none;
  text-align:left;
  width: 100%;
  margin: 5px;
  padding: 10px 10px 30px 20px;
  text-align: justify; 
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
    font-family: ${fonts.serif};
    font-weight: 400;
    line-height: 1.7;
  }
  &:hover {
    animate: ${scale} 1s ease-in-out;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Index: React.SFC<any> = (props: any) => {
  console.log(props);
  return (
    <React.Fragment>
      <Short>
        <h1>File – IT- ja DI-opiskelijoiden äänitorvi</h1>
        <p>
          File on Digitin, Nucleuksen ja Asteriskin yhteinen julkaisu. Julkaisussa on artikkeleita niin opiskelusta kuin opiskelijatapahtumistakin. 
          Mukana on myös opetushenkilökunnan ja yhteistyöyritysten edustajien haastatteluja. Julkaisuun mahtuu tosin kaikkea muutakin.
        </p>
        <p>
          Aiemmin File-lehti ilmestyi neljä kertaa vuodessa. Keväällä putkahti ulos pari numeroa ja syksyllä 
          File ilahdutti lukijoitaan samaten kahdesti. Kesän korvilla julkaistiin myös Piltti-File uusille 
          informaatioteknologian laitoksen ja biotekniikan koulutusohjelman opiskelijoille.
        </p>
        <p>
          Nykyään Filen toiminta on vapaampaa eikä ole rajoittunut tarkkoihin kalenteriaikatauluihin julkaisutahdin suhteen. 
          Juttuja kerätään ympäri vuoden, julkaisut tehdään mahdollisimman pian ja somen avulla markkinointi tavoittaa huomattavasti
          suuremman määrän lukijoita kuin aiempi 60 lehden levikki. Juttuja voi lukea mistä vain ja milloin vain hakematta konkreettista 
          lehteä järjestöjen tiloista. Toiminta on siis muodikkaasti ketterämpää. 
        </p>
        <p>
          Filen toimittamisesta vastaa rautaisella otteellaan päätoimittajat, joista yksi toimii usein 
          myös PilttiFilen taittajana. Päätoimittajat valitaan sekä Digitistä, 
          Nucleuksesta että Asteriskista, ja sisäinen työnjako sovitaan vuosittain. Mutta myös sinä voit osallistua julkaisun tuottamiseen! 
          Jos olet edes jossain määrin kiinnostunut kirjoittamaan juttuja, haastattelemaan sitä mukavaa assaria tai ottamaan julkaisuun 
          sopivia valokuvia, olet ehdottomasti tervetullut toimintaan mukaan!
        </p>
        <p>
          Sporttiset julkasun tekijät ottakee yhteyttä,<br/>
          <i>Tatu Heinonen<br/>
          sukunimi.etunimi@gmail.com</i>
        </p>
      </Short>
    </React.Fragment>
  );
};

export default propLoader(Index, fetchFirstX(3));
