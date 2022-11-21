import styled from "styled-components"
import GlobalStyle from "../GlobalStyle";
import EntradaSaida from "./EntradaSaida";
import Registros from "./Registros";

const nome = "Caue";
const semRegistro = false;

export default function Historico(params) {

    function entradaSaida(){
        return;
    }

    return (
        <HistoricoContainer >
            <GlobalStyle></GlobalStyle>
            <div className="header">
                <p>Olá, {nome}</p>
                <ion-icon name="log-out-outline"></ion-icon>
            </div>
            
            <RegistroContainer>
            {semRegistro? <p>Não há registros de entrada e saída</p> :<Registros/> }
            </RegistroContainer>

            <ButtonsContainer>
                <div className="btt" onClick ={()=> entradaSaida()}>
                    <ion-icon class="icon-plus" name="add-circle-outline"></ion-icon>
                    <p>
                        Nova<br></br> entrada
                    </p>
                </div>

                <div className="space"></div>

                <div className="btt" onClick ={()=> entradaSaida()}>
                    <ion-icon class="icon-plus" name="add-circle-outline"></ion-icon>
                    <p>
                        Nova<br></br> Saída
                    </p>
                </div>
            </ButtonsContainer>



        </HistoricoContainer>
    )
};

const HistoricoContainer = styled.div`
    padding:24px;    
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;

    .header{
        width:100%;
        color:white;
        font-weight:700;
        font-size:26px;
        display:flex;
        justify-content: space-between;

    }

    .log-out{
        font-size:23px;
    }

`

const ButtonsContainer = styled.div`

    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    /* padding:24px 12px; */

    .btt{
        margin-top:13px;
        position:relative;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        width:100%;
        padding:10px;
        background-color:#a328d6;
        color:white;
        height:114px;
        border-radius:5px;
    }
    .space{
        width:24px;
    }

    .btt:hover{
        opacity:0.7;
    }

    p{
        color:white;
        font-size:17px;
        font-weight:700;
    }

    .icon-plus{
        font-size:22px;
        color:white;
    }


`

const RegistroContainer = styled.div`
    background-color:white;
    margin-top:20px ;
    border-radius:5px;
    display:flex;
/*     align-items:center;
    justify-content:center; */
    height:400px;

    p{
        opacity:0.5;
        font-weight:400;
    }
`