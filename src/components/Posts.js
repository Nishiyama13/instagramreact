export default function Posts() {
  const dataPost = [
    { nomeUsuario: "meowed", imagemUsuario: "/assets/img/meowed.svg", imagemConteudo: "/assets/img/gato-telefone.svg", imagemLikeUsuario: "/assets/img/respondeai.svg", likeUsuario: "respondeai", likes: 101.523 },
    { nomeUsuario: "barked", imagemUsuario: "/assets/img/barked.svg", imagemConteudo: "/assets/img/dog.svg", imagemLikeUsuario: "/assets/img/adorable_animals.svg", likeUsuario: "adorable_animals", likes: 99.159 }
  ]
  return (
    <div class="posts">
      {dataPost.map((item) => <Post nomeUsuario={item.nomeUsuario} imagemUsuario={item.imagemUsuario} imagem={item.imagemConteudo} imagemLikeUsuario={item.imagemLikeUsuario} likeUsuarioName={item.likeUsuario} likes={item.likes} />)}
    </div>
  );
}

function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemUsuario} />
          {props.nomeUsuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemLikeUsuario} />
          <div class="texto">
            Curtido por <strong>{props.likeUsuarioName}</strong> e{" "}
            <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}