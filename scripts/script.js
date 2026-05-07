// Dados das imagens para cada unidade
const imagensPorUnidade = {
  0: [
    { src: './imagens/1.jpg', alt: 'Fachada Cambuci' },
    { src: './imagens/3.jpg', alt: 'Ambiente interno Cambuci' },
    { src: './imagens/4.jpg', alt: 'Ambiente externo Cambuci' },
    { src: './imagens/7.jpg', alt: 'Detalhe Cambuci' }
  ],
  1: [
    { src: './imagens/2.jpg', alt: 'Fachada Aclimação' },
    { src: './imagens/5.jpg', alt: 'Ambiente interno Aclimação' },
    { src: './imagens/6.jpg', alt: 'Ambiente externo Aclimação' },
    { src: './imagens/8.jpg', alt: 'Detalhe Aclimação' }
  ]
};

const indexAtual = { 0: 0, 1: 0 };

function toggleGaleria(btn) {
  const card = btn.closest('.unidade-card');
  const galeria = card.querySelector('.unidade-imagens');
  
  if (galeria.classList.contains('ativa')) {
    galeria.classList.remove('ativa');
    btn.textContent = 'Ver fotos';
  } else {
    galeria.classList.add('ativa');
    btn.textContent = 'Ocultar fotos';
  }
}

function obterIndiceUnidade(elemento) {
  const card = elemento.closest('.unidade-card');
  const cards = Array.from(document.querySelectorAll('.unidade-card'));
  return cards.indexOf(card);
}

function atualizarCarousel(indiceUnidade) {
  const card = document.querySelectorAll('.unidade-card')[indiceUnidade];
  const img = card.querySelector('.foto-carousel');
  const indicadores = card.querySelectorAll('.indicador');
  
  const indiceAtualImg = indexAtual[indiceUnidade];
  const imagemData = imagensPorUnidade[indiceUnidade][indiceAtualImg];
  
  img.src = imagemData.src;
  img.alt = imagemData.alt;
  
  indicadores.forEach((ind, idx) => {
    ind.classList.toggle('ativo', idx === indiceAtualImg);
  });
}

function mudarImagem(botao, direcao) {
  const indiceUnidade = obterIndiceUnidade(botao);
  const totalImagens = imagensPorUnidade[indiceUnidade].length;
  
  indexAtual[indiceUnidade] = (indexAtual[indiceUnidade] + direcao + totalImagens) % totalImagens;
  
  atualizarCarousel(indiceUnidade);
}

function irParaImagem(indicador) {
  const card = indicador.closest('.unidade-card');
  const indiceUnidade = obterIndiceUnidade(indicador);
  const indicadores = card.querySelectorAll('.indicador');
  
  const novoIndice = Array.from(indicadores).indexOf(indicador);
  indexAtual[indiceUnidade] = novoIndice;
  
  atualizarCarousel(indiceUnidade);
}