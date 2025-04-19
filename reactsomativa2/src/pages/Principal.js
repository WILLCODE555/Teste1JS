// src/pages/Principal.js
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Principal = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchDados = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'usuarios', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUsuario(docSnap.data());
        }
      }
    };

    fetchDados();
  }, []);

  return (
    <div>
      <h2>Página Principal</h2>
      {usuario ? (
        <div>
          <p><strong>Nome:</strong> {usuario.nome}</p>
          <p><strong>Sobrenome:</strong> {usuario.sobrenome}</p>
          <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento}</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default Principal;
