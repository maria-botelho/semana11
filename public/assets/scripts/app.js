// Seleciona todos os checkboxes
const checkboxes = document.querySelectorAll('input[name="filtro"]');
  
// Adiciona evento de change a cada checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filtrarCards);
});

// Função de filtragem
function filtrarCards() {
  // Pega os valores dos checkboxes marcados
  const filtrosAtivos = Array.from(document.querySelectorAll('input[name="filtro"]:checked'))
                            .map(checkbox => checkbox.value);
  
  // Seleciona todos os cards
  const cards = document.querySelectorAll('.card-estado');
  
  // Itera sobre cada card
  cards.forEach(card => {
    // Pega a categoria do card (do atributo data-categoria)
    const categoriaCard = card.getAttribute('data-categoria');
    
    // Verifica se a categoria do card está nos filtros ativos
    const deveMostrar = filtrosAtivos.includes(categoriaCard);
    
    // Mostra ou esconde o card baseado na verificação
    card.style.display = deveMostrar ? 'inline-block' : 'none';
  });
}

// ARRAY JSON

let dados = [
    {
    "id": 1,
    "nome": "Veja mais - Pará",
    "titulo": "Turismo no Pará",
    "descricao": "Conheça uns dos mais visitados pontos turísticos do estado do Pará.",
    "conteudo": "O Ver-o-Peso é um dos pontos turísticos mais famosos de Belém, no Pará, e um dos maiores mercados ao ar livre da América Latina. Localizado às margens da Baía do Guajará, é um local histórico e cultural, conhecido por sua feira vibrante, onde se encontra de tudo.Os barcos com açaí que chegam durante a madrugada ao Mercado Ver-o-Peso são o despertar do dia na cidade de Belém, no Pará. Os cestos carregados de frutas exóticas, peixes amazônicos e temperos  de todos os cheiros e sabores que circulam pelo mercado são apenas os primeiros passos para conhecer a capital paraense.Intensa em todos os sentidos, Belém do Pará é uma cidade para ser vivenciada e não apenas visitada. E quanto mais rápido você se deixar levar pelo jeito paraense, mais fácil irá se apaixonar.",
    "imagem": "assets/img/belem-para.jpg"
  },
  {
    "id": 2,
    "nome": "Veja mais - Rio de Janeiro",
    "titulo": "Turismo no Pará",
    "descricao": "Conheça uns dos mais visitados pontos turísticos do estado do Rio de Janeiro.",
    "conteudo": "Literalmente de braços abertos, o Cristo Redentor, no morro do Corcovado, é uma das Sete Maravilhas do Mundo Moderno e recebe diariamente milhares de turistas de diversos lugares do mundo. O monumento é um dos mais icônicos do Brasil e um dos principais cartões-postais do Rio de Janeiro. É necessário subir 700 metros do nível do mar para, enfim, chegar ao pico onde está a estátua que é cartão postal da cidade. Além de sua imponência arquitetônica, o Cristo Redentor é um símbolo de paz e um dos destinos turísticos mais visitados do Brasil, oferecendo uma vista panorâmica deslumbrante da cidade do Rio de Janeiro.",
    "imagem": "assets/img/cristo-destaque.jpg"
  },
  {
    "id": 3,
    "nome": "Veja mais - Tocantins",
    "titulo": "Turismo no Pará",
    "descricao": "Conheça uns dos mais visitados pontos turísticos do estado do Pará.",
    "conteudo": "O Jalapão, localizado no estado do Tocantins, é um destino de ecoturismo famoso por suas paisagens deslumbrantes, que incluem dunas douradas, cachoeiras cristalinas, rios de águas transparentes e os incríveis fervedouros – nascentes de água onde é impossível afundar devido à pressão do solo. A região é ideal para quem busca aventura, com atividades como trilhas, rafting e passeios off-road. Além das belezas naturais, o Jalapão também encanta pela cultura local, com comunidades quilombolas que preservam tradições e artesanatos, como as peças feitas de capim-dourado. O acesso é desafiador, geralmente feito em veículos 4x4, mas a experiência compensa cada quilômetro percorrido!",
    "imagem": "assets/img/agua-tocantins.jpg"
  }
]