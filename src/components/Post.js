import { useState } from "react";

export default function Post(props) {
  const [icone, setIcone] = useState("heart-outline");
  const [salvar, setSalvar] = useState("bookmark-outline");
  const [contador, setContador] = useState(props.likes);

  return (
    <>
      <div className="post" data-test="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.imagemUsuario} />
            {props.nomeUsuario}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img
            data-test="post-image"
            src={props.imagem}
            onClick={() => {
              if (icone === "heart-outline") {
                setIcone("heart");
                setContador(contador + 1);
              }
            }}
          />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon
                className="like"
                data-test="like-post"
                name={icone}
                onClick={() => {
                  if (icone === "heart-outline") {
                    setIcone("heart");
                    setContador(contador + 1);
                  } else {
                    setIcone("heart-outline");
                    setContador(contador - 1);
                  }
                }}
              ></ion-icon>

              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon
                data-test="save-post"
                name={salvar}
                onClick={() => {
                  if (salvar === "bookmark-outline") {
                    setSalvar("bookmark");
                  } else {
                    setSalvar("bookmark-outline");
                  }
                }}
              ></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.imagemLikeUsuario} />
            <div className="texto">
              Curtido por{" "}
              <strong data-test="likes-number">{props.likeUsuarioName}</strong>{" "}
              e <strong>outras {contador} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
