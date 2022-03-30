import React from 'react'
import {createGlobalStyle} from "styled-components"
import {Header} from './Components/Header'
import BGMain from './Images/TGS.jpg'
import {Footer} from './Components/Footer'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    body{
      background-image: url(${BGMain});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height: 100vh;
    }
`
 const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <h1>Nie</h1>
      <Header/>
      <Footer/>
    </div>
  )
}
export default App;
