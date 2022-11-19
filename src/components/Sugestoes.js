export default function Sugestoes() {
  const dataSugestao = [
    {
      nome: "bad.vibes.memes",
      razao: "Segue você",
      imagem: "/assets/img/bad.vibes.memes.svg",
    },
    {
      nome: "chibirdart",
      razao: "Segue você",
      imagem: "/assets/img/chibirdart.svg",
    },
    {
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
      imagem: "/assets/img/razoesparaacreditar.svg",
    },
    {
      nome: "adorable_animals",
      razao: "Segue você",
      imagem: "/assets/img/adorable_animals.svg",
    },
    {
      nome: "smallcutecats",
      razao: "Segue você",
      imagem: "/assets/img/smallcutecats.svg",
    },
  ];
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {dataSugestao.map(item => (
        <Sugestao nome={item.nome} razao={item.razao} imagem={item.imagem} />
      ))}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.imagem} />
        <div className="texto">
          <div className="nome">{props.nome}</div>
          <div className="razao">{props.razao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
