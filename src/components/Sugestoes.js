export default function Sugestoes() {
  const caminhoImagens = "/assets/img/";
  const dataSugestao = [
    { nome: "bad.vibes.memes", razao: "Segue você", imagem: "bad.vibes.memes.svg" },
    { nome: "chibirdart", razao: "Segue você", imagem: "chibirdart.svg" },
    { nome: "razoesparaacreditar", razao: "Novo no Instagram", imagem: "razoesparaacreditar.svg" },
    { nome: "adorable_animals", razao: "Segue você", imagem: "adorable_animals.svg" },
    { nome: "smallcutecats", razao: "Segue você", imagem: "smallcutecats.svg" },
  ]
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="/assets/img/bad.vibes.memes.svg" />
          <div class="texto">
            <div class="nome">bad.vibes.memes</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="/assets/img/chibirdart.svg" />
          <div class="texto">
            <div class="nome">chibirdart</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="/assets/img/razoesparaacreditar.svg" />
          <div class="texto">
            <div class="nome">razoesparaacreditar</div>
            <div class="razao">Novo no Instagram</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="/assets/img/adorable_animals.svg" />
          <div class="texto">
            <div class="nome">adorable_animals</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>

      <div class="sugestao">
        <div class="usuario">
          <img src="/assets/img/smallcutecats.svg" />
          <div class="texto">
            <div class="nome">smallcutecats</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    </div>
  );
}
