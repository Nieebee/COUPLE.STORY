import React from 'react'
import * as S from './styles'
import Card from '../Tools/Card'
import PTBarnum from '../../Images/PT.BARNUM.jpg'
import Charity from '../../Images/Charity.jpg'
import BeardedW from '../../Images/BeardedWoman.jpg'
import Phillip from '../../Images/Phillip.jpg'
import Jenny from '../../Images/JennyLind.jpg'
import Anne from '../../Images/AnneWheeler.jpg'


export const Footer = () => {
    return (

      <S.Container>
        <S.Cards>
       <Card name="P.T Barnum" img={PTBarnum}/>
       <Card name="Charity Barnum" img={Charity}/>
       <Card name="Bearded Woman" img={BeardedW}/>
       <Card name="Phillip Carlyle" img={Phillip}/>
       <Card name="Anne Wheeler" img={Anne}/>
       <Card name="Jenny Lind" img={Jenny}/>
       </S.Cards>
              <div>
           <ul>
               <li></li>
               <li></li>
           </ul>
       </div>
       <div></div>
      </S.Container>
    )
  }