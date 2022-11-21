import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Historico from "./Historico";
import EntradaSaida from "./EntradaSaida";

export default function App(params) {
    const [user,setUser] = React.useState({
        id: 0,
        name: "teste",
        image: "https",
        email: "gmail",
        password: "****",
        token:"0000",
        listaHabitosHoje:[]
    }); 

    return (
        <AppContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/historico" element={<Historico />} />
                    <Route path="/entradaSaida" element={<EntradaSaida />} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
    );

};

const AppContainer = styled.div`
    
`