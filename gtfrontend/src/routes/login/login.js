import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
import "./login.css";
import Cabecario from "../../components/cabecario/cabecario"
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(userName, password);

        console.log("Enviado");
    }

    return (
        <>
        <Cabecario />
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h1 className="h1-login">Login</h1>
                </div>

                <div className="input-field-container">
                    <input
                        className="input-field"
                        type="email"
                        placeholder="E-mail"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>

                <div className="input-field-container">
                    <input
                        className="input-field"
                        type="password"
                        placeholder="Senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>

                <button className="entrar">Entrar</button>
                <h3>Ou</h3>
                <div>
                    <button className="entrar-google">Entrar com <FaGoogle className="google" /></button>
                </div>
                <div className="signup-link">
                    <p>
                        Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
                    </p>
                </div>
            </form>
        </div>
    </>
    );
}

export default Login;