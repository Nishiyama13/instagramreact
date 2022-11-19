import React from "react";
import { useState } from "react";

export default function Usuario() {
  const [nomeDeUsuario, setNomeDoUsuario] = useState("Catana");
  const [imagem, setImagem] = useState("/assets/img/catanacomics.svg");
  const [tagName, setTagName] = useState("Catana"); //const reservada para edição do nome em negrito

  function inserirNome() {
    const nome = prompt("Escolha um nome:");
    setNomeDoUsuario(nome);
  }

  function inserirImagem() {
    const imagemUrl = prompt("Insira URL de uma imagem:");
    setImagem(imagemUrl);
  }

  return (
    <>
      <div className="usuario" data-test="user">
        <img
          onClick={inserirImagem}
          data-test="profile-image"
          src={!imagem ? "/assets/img/catanacomics.svg" : imagem}
        />
        <div className="texto">
          <strong>{!tagName ? "Catana" : tagName}</strong>
          <span data-test="name">
            {!nomeDeUsuario ? "catanacomics" : nomeDeUsuario}
            <ion-icon
              name="pencil"
              data-test="edit-name"
              onClick={inserirNome}
            ></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
}
