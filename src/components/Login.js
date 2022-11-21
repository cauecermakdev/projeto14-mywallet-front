/* import logo from "../assets/img/trackitLogo.png"; */
import styled from "styled-components";
import React, {useState } from "react";
/* import { useEffect } from "react"; */
import { Link } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import Login_context from "../providers/loginContext";


export default function Login() {
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [token,setToken] = useState("");
    
    const navigate = useNavigate();

    const {user,setUser}  = useContext(Login_context);
    /* console.log("aqui",user); */

    function estaPreenchido() {
        if (email === "" || senha === "") {
            alert("Preencha os campos abaixo");
            return false;
        }
        return true;
    }

    function logar(event) {

        event.preventDefault(); // impede o redirecionamento 

        if (!estaPreenchido()) {
            return;
        };
    
        const requisicao = axios.post("http://localhost:5000/sign-in", {
            email: email,
            password: senha
        });


        if (requisicao === undefined) {
            return <img key={1} alt="loading" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
        }

        requisicao.then(
            (resposta) => {
                console.log(resposta);
                setToken(resposta.data.token);
                setUser({userName:resposta.data.userName, email:resposta.data.email, password:resposta.data.password ,token:resposta.data.token})
                navigate("/historico");
                console.log("login resposta.data",resposta.data);
            }
        );

        requisicao.catch((error) => {
            console.log(error);
            alert("Login ou Senha não correspondem");
        })

    }

    return (
        <ContainerLogin>
            <GlobalStyle></GlobalStyle>
            <div className = "logo-style">MyWallet</div>
            <form onSubmit={(e) => logar(e)}>
                <InputsContainer>
                    <input name="email" type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} /* value={email} */></input>
                    <input name="senha" type="text" placeholder="Senha" onChange={e => setSenha(e.target.value)} /* value={senha} */></input>
                </InputsContainer>

                <div className="centerFlex" >
                    <Button type="submit" onClick={(e) => logar(e)}>Entrar</Button>
                </div>

            </form>
    
            <Link to={"/cadastro"} className="centerFlex">
                <CadastreLink>Primeira vez? Cadastre-se!</CadastreLink>
            </Link>
        </ContainerLogin>
    );
};


const ContainerLogin = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;    
    justify-content:center;
    width:100%;
    height:100vh;
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

const CadastreLink = styled.p`
    margin-top: 35px;
    color:white;
    font-size:14px;
    font-weight:700;
    margin-bottom:110px;
`
