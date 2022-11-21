import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Login_context from "../providers/loginContext";

export default function EntradaSaida(params) {
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const navigate = useNavigate();

    const isEntrada = true;//recebendo do pai por props

    function salvar(event, isEntrada) {
        event.preventDefault(); // impede o redirecionamento 

        if(isEntrada){
        /*         const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
                    email: email,
                    password: senha
                }); 
        
                  if (requisicao === undefined) {
                    return <img key={1} alt="loading" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
                }
        
                requisicao.then(
                    (resposta) => {
                        setToken(resposta.data.token);
                        setUser({id:resposta.data.id, name:resposta.data.name, image:resposta.data.image, password:resposta.data.password ,token:resposta.data.token})
                        navigate("/habitos");
                        console.log("login resposta.data",resposta.data);
                    }
                );
        
                requisicao.catch((error) => {
                    console.log(error);
                    alert("Login ou Senha não correspondem");
                })
        
        
                */
            }else{
                //é saida
                
            }

    }

    return (
        <>

            <ContainerEntradaSaida>
                <GlobalStyle></GlobalStyle>
                <Title>
                    <p>Nova {isEntrada?"Entrada":"Saída"}</p>
                </Title>
                <MyForm onSubmit={(e) => salvar(e, isEntrada)} >
                    <InputsContainer>
                        <input name="valor" type="text" placeholder="Valor" onChange={e => setValor(e.target.value)} /* value={email} */></input>
                        <input name="descricao" type="text" placeholder="Descrição" onChange={e => setDescricao(e.target.value)} /* value={senha} */></input>
                    </InputsContainer>

                    <div className="centerFlex" >
                        <Button type="submit" /* onClick={(e) => logar(e) }*/>Salvar {isEntrada?"Entrada":"Saída"}</Button>
                    </div>

                </MyForm>

            </ContainerEntradaSaida>
        </>
        /*         <ContainerEntradaSaida>
                    <p>
                        Nova Entrada
                    </p>
                    <input placeholder="Valor"></input>
                    <input placeholder="Descrição"></input>
                </ContainerEntradaSaida> */


    );
};

const MyForm = styled.form`
    width:100%;
`

const ContainerEntradaSaida = styled.div`
    box-sizing:border-box;
    padding:24px;
    display:flex;
    flex-direction:column;
    align-items:start;    
    width:100%;
    height:100vh;

`
const Title = styled.div`
    display:flex;
    justify-content:start;  
    margin-bottom:40px;

    p{
            color:white;
            font-size:26px;
            font-weight:700;
        }
`


const InputsContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    font-size:18px;
    `

const Button = styled.button`
    margin:6px 0px 25px 0px;
    background-color:#a328d6;
    width:100%;
    height:45px;
    border-radius:3px;
    color: white;
    font-size:21px;
    border:0px;   
    font-weight:700;
`


