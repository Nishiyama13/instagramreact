//<img src="/assets/img/catanacomics.svg" />
export default function Usuario() {
  const urlImage = prompt("Coloque o link da imagem");
  const userName = prompt("Digite um nome de Usuário");
  const tagName = prompt("Digite o seu @");

  return (
    <div className="usuario" data-test="user">
      <img
        data-test="profile-image"
        src={!urlImage ? "/assets/img/catanacomics.svg" : urlImage}
      />
      <div className="texto">
        <strong>{!userName ? "catanacomics" : userName}</strong>
        <span data-test="name">
          {!tagName ? "Catana" : tagName}
          <ion-icon name="pencil" data-test="edit-name"></ion-icon>
        </span>
      </div>
    </div>
  );
}
