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
    line-height: 1.2;
  }
  &:hover {
    animate: ${scale} 1s ease-in-out;
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
          Aiemmin File-lehti ilmestyi nelisen kertaa vuodessa.
          Keväällä putkahti ulos pari numeroa ja syksyllä File ilahdutti lukijoitaan samaten kahdesti. Kesän korvilla julkaistiin myös Piltti-File uusille 
          informaatioteknologian laitoksen ja biotekniikan koulutusohjelman opiskelijoille.
        </p>
        <p>
          Filen toimittamisesta vastaa vapaaehtoisista koottu toimikunta. 
          Toimikuntaa johtavat rautaisella otteellaan päätoimittajat, joista yksi toimii usein 
          myös lehden taittajana. Päätoimittajat valitaan sekä Digitistä, 
          Nucleuksesta että Asteriskista, ja sisäinen työnjako sovitaan vuosittain. 
          Toimikunta valitaan aina vuodeksi kerrallaan ja valinnat tehdään Digitin, Nucleuksen ja Asteriskin syyskokouksissa. 
          Myös sinä voit osallistua toimikunnan työhön. Jos olet siis edes jossain määrin 
          kiinnostunut kirjoittamaan juttuja, haastattelemaan sitä mukavaa assaria tai ottamaan lehteen 
          sopivia valokuvia niin olet ehdottomasti tervetullut toimikuntaan mukaan!
        </p>
      </Short>
    </React.Fragment>
  );
};

export default propLoader(Index, fetchFirstX(3));
