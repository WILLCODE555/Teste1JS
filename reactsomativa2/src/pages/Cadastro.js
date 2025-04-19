// src/pages/Cadastro.js
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    dataNascimento: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const cadastrarUsuario = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.senha);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, 'usuarios', uid), {
        uid,
        nome: form.nome,
        sobrenome: form.sobrenome,
        dataNascimento: form.dataNascimento,
        email: form.email
      });

      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input type="text" name="nome" placeholder="Nome" onChange={handleChange} /><br />
      <input type="text" name="sobrenome" placeholder="Sobrenome" onChange={handleChange} /><br />
      <input type="email" name="email" placeholder="E-mail" onChange={handleChange} /><br />
      <input type="password" name="senha" placeholder="Senha" onChange={handleChange} /><br />
      <input type="date" name="dataNascimento" placeholder="Data de Nascimento" onChange={handleChange} /><br />
      <button onClick={cadastrarUsuario}>Cadastrar</button>
    </div>
  );
};

export default Cadastro;
