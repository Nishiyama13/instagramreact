//<img src="/assets/img/catanacomics.svg" />
export default function Usuario() {
  const urlImage = prompt("Coloque o link da imagem");
  const userName = prompt("Digite um nome de Usuário");
  const tagName = prompt("Digite o seu @");

  return (
    <div class="usuario">
      <img src={!urlImage ? "/assets/img/catanacomics.svg" : urlImage} />
      <div class="texto">
        <strong>{!userName ? "catanacomics" : userName}</strong>
        <span>
          {!tagName ? "Catana" : tagName}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
