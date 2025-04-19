// src/pages/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const fazerLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/principal');
    } catch (error) {
      setErro('Usuário não cadastrado ou senha incorreta.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} /><br />
      <button onClick={fazerLogin}>Entrar</button>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
};

export default Login;
