import styled from "styled-components"
import GlobalStyle from "../GlobalStyle"
import axios from "axios";
import LoginContext from "../providers/loginContext";
import { useContext, useEffect, useState } from "react";
import { useInRouterContext } from "react-router-dom";




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







//recebe dados  bd
let array = [];

/* function arrayDadosHistoricoDoUsuario() {
    const requisicao = axios.get("http://localhost:5000/historico", null, config);

    requisicao.then((req, res) => {
        console.log("foi arrayHistorico");

    })

    requisicao.catch(err => console.log(err));
    console.log("array do usuario", array);
}

arrayDadosHistoricoDoUsuario(); */

//______

export default function Registros(params) {
    const [transacoes, setTransacoes]  = useState([]);
    const [addTransacao,setAddTransacao] =  useState(false);


    /* const {email,password,token } = useContext(LoginContext); */
    const {provider} = useContext(LoginContext);
    console.log("Dentro de registro puxando os dados de LoginContext");
 /*    console.log("email",email);
    console.log("password",password);
    console.log("token",token); */
    console.log("provider", provider);

    /* console.log(await db.collection("users").find({email:email}).toArray()); */
    
     /* let { user, setUser } = useContext(Login_context);  */
     const user = {
        token:"6954129c-2933-4d5b-ac2d-7658fa4051db",
        nome:"juvenal",
        email:"juvenal@gmail.com",
        _id: "637bb31a63b4de980da02cba"
     }
     
     

    useEffect(() => {
        
         const config = {
            headers: { 
                authorization: `Bearer ${user.token}` ,
                user:user
            }
        } 

        const requisicao = axios.get("http://localhost:5000/historico",  
        {
            headers: { 
                Authorization: `Bearer ${user.token}` ,
                user
            }
        } 
        );
        
        requisicao.then((resposta) => {
            console.log('requisicao',resposta.data);
            setTransacoes(resposta.data);

        })

        requisicao.catch(err => console.log(err));
        console.log("array do usuario", array);

    }, [addTransacao]);

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
                {transacoes.map((dataIn, i) =>
                    
                        <DataIn key={i} isentrada={dataIn.isEntrada}>
                            <div>
                                <p className="data">{dataIn.data}</p>
                                <p className="descricao" isentrada={dataIn.isEntrada?1:0}>{dataIn.descricao}</p>
                            </div>
                            <p className="valor">{dataIn.valor}</p>
                        </DataIn>
                    

                )
                }
            </ContainerRegistros>

            <div className="saldo">
                <p className="saldoTitle">SALDO</p>
                <p className="saldoTotal" positivo={(calculaSaldo(array) > 0)?1:0}>{calculaSaldo(array)}</p>
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
        color:${(props) => props.isentrada ? "red" : "green"}
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