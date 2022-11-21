import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /*Aqui vai meu CSS*/

    * {
  box-sizing: border-box;
  text-decoration: none;  
  --cor-fundo: #FB6B6B;
  --cor-fundo-card: #FFFFD4;
  --cor-nao-lembrei: #FF3030;
  --cor-quase-nao-lembrei: #FF922E;
  --cor-zap: #2FBE34;
  --preto: #333333;
  font-family: 'Lexend Deca', sans-serif;
}

.root{
    width:100%;
    height:100%;
}

body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Lexend Deca', sans-serif;
}

.centerFlex{
  display:flex;
  align-items:center;
  justify-content:center;
}


footer{
    height:117px;
    width:100%;
    background-color:#9EADBA;
    display:flex;
    align-items:center;
}

footer div:first-child{
  background-color:white;
  border-radius:2px;
  margin-left:10px;
}

footer img{
        width:48px;
        height:72px;
        margin:8px;
        border-radius:2px;
        object-fit: cover;
    }

footer p{
        color:#293845;
        font-size:26px;
        margin-left:14px;
        font-weight:300;
        margin-bottom:10px;
    }



    input{
        margin:3px 0px;
        font-size:18px;
        font-weight:400;
        width:100%;
        height:45px;
        background-color:#FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding-left:16px;
        color: #dbdbdb;;
    }

    input:focus{
        color:#52B6FF;
    }

    .display-none{
      display:none;
    }

    .logo-style{
      font-family: 'Saira Stencil One', cursive;
      color:white;
      font-size:32px;
      margin-bottom:30px;
    }

`;

export default GlobalStyle;
