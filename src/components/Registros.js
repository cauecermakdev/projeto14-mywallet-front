import styled from "styled-components"
import GlobalStyle from "../GlobalStyle"
import axios from "axios";
import Login_context from "../providers/loginContext";
import { useContext } from "react";



/* const array = [
    {
        data: '30/11',
        descricao: "almoco mae",
        valor: "39,90",
        isEntrada: true
    },
    {
        data: '10/11',
        descricao: "janta",
        valor: "89,90",
        isEntrada: false
    },
    {
        data: '7/12',
        descricao: "presente caue",
        valor: "139,90",
        isEntrada: true
    }
] */

const { user, setUser } = useContext(Login_context); 
const config = {
    headers: { Authorization: `Bearer ${user.token}` }
}

//recebe dados  bd
let array = [];

function arrayDadosHistoricoDoUsuario(){
     const requisicao =  axios.get("http://localhost:5000/historico", null, config);
     
     requisicao.then((req,res)=>{
        console.log("foi arrayHistorico");

    })
    
    requisicao.catch(err=> console.log(err));
     console.log("array do usuario", array);
}

arrayDadosHistoricoDoUsuario();

//______

export default function Registros(params) {

    function calculaSaldo(array) {

        let saldo = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].isEntrada === true) {
                saldo += parseFloat(array[i].valor);
            } else {
                saldo -= parseFloat(array[i].valor);
            }
        }
        return saldo;
    }

    return (
        <DataContainer>
            <GlobalStyle></GlobalStyle >
            <ContainerRegistros>
            {array.map((dataIn, i) =>
                <>
                    <DataIn key={i} isEntrada={dataIn.isEntrada}>
                        <div>
                            <p className="data">{dataIn.data}</p>
                            <p className="descricao" isEntrada={dataIn.isEntrada}>{dataIn.descricao}</p>
                        </div>
                        <p className="valor">{dataIn.valor}</p>
                    </DataIn>
                </>
            
            )
            }
            </ContainerRegistros>

            <div className="saldo">
                <p className="saldoTitle">SALDO</p>
                <p className="saldoTotal" positivo={(calculaSaldo(array) > 0) ? true : false}>{calculaSaldo(array)}</p>
            </div>
            

        </DataContainer>
    )
};

const ContainerRegistros = styled.div`
`

const DataIn = styled.div`
    display:flex; 
    align-items:space-between;
    width:100%;
    padding:15px 10px;
    justify-content:space-between;  

    div{
        margin:0px 5px;
        display:flex;
    }

    p{
        margin-right:5px;
    }

    .data{
        color:#c6c6c6;
    }

    .valor{
        color:${(props) => props.isEntrada ? "red" : "green"}
    }

    .descricao{
        color:black;
    }
`

const DataContainer = styled.div`
    width:100%;
    padding:20px 0px;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:400px;
    font-size:16px;

    .saldo{
        display:flex;
        justify-content:space-between;
        padding:0px 15px;
    }

    .saldoTitle{
        font-size:17px;
        font-weight:700;
    }

    .saldoTotal{
        color:${props => props.positivo ? "green" : "red"};
    }

    p{
        font-weight:400;
    }

`