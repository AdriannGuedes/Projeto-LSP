import Cabecario from "../../components/cabecario/cabecario";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./cadastro.css"
import axios from "axios";


function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();

        const userData = {
            nome: nome,
            email: email,
            senha: senha,
            telefone: telefone
        };

        try {
            const response = await axios.post('http://seu-backend.com/api/addUser', userData);

            console.log('Response:', response.data);

            // Resetar campos após cadastro bem-sucedido (opcional)
            setNome("");
            setEmail("");
            setSenha("");
            setTelefone("");

            console.log('Usuário cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error.message);
            setError('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
        }
    }

    return (
        <>
            <Cabecario />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1 className="h1-login">Cadastro</h1>
                    </div>

                    <div className="input-field-container">
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-field-container">
                        <input
                            className="input-field"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-field-container">
                        <input
                            className="input-field"
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-field-container">
                        <input
                            className="input-field"
                            type="tel"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                    </div>

                    <button className="entrar" type="submit">Cadastrar</button>
                </form>

                <div className="signup-link">
                    <p>
                        Já possui conta? <Link to="/">Faça login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Cadastro;