export default function Sugestoes() {
  const dataSugestao = [
    { nome: "bad.vibes.memes", razao: "Segue você", imagem: "/assets/img/bad.vibes.memes.svg" },
    { nome: "chibirdart", razao: "Segue você", imagem: "/assets/img/chibirdart.svg" },
    { nome: "razoesparaacreditar", razao: "Novo no Instagram", imagem: "/assets/img/razoesparaacreditar.svg" },
    { nome: "adorable_animals", razao: "Segue você", imagem: "/assets/img/adorable_animals.svg" },
    { nome: "smallcutecats", razao: "Segue você", imagem: "/assets/img/smallcutecats.svg" },
  ]
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {dataSugestao.map((item) => <Sugestao nome={item.nome} razao={item.razao} imagem={item.imagem} />)}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}
