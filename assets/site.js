'use strict';

const versions = {
  cogna: {
    audience: 'Apresentação para Cogna',
    proposal: 'Explorar um piloto de apoio à permanência estudantil, com foco em identificar dificuldades nas primeiras semanas e avaliar o alcance das ações de acolhimento.',
  },
  vitru: {
    audience: 'Apresentação para Vitru',
    proposal: 'Explorar um piloto de ambientação no ensino digital, com foco em ajudar estudantes a organizar a rotina e concluir as primeiras atividades.',
  },
};

const requestedVersion = new URLSearchParams(window.location.search).get('versao');
if (Object.prototype.hasOwnProperty.call(versions, requestedVersion)) {
  const version = versions[requestedVersion];
  document.title = `Edgardo | ${version.audience}`;
  document.querySelector('#audiencia').textContent = version.audience;
  const proposal = document.querySelector('#proposta');
  proposal.lastChild.textContent = ` ${version.proposal}`;
  document.querySelector('[aria-current="page"]').removeAttribute('aria-current');
  document.querySelector(`[data-version="${requestedVersion}"]`).setAttribute('aria-current', 'page');
}

// Preencher o caminho relativo quando o vídeo definitivo estiver disponível.
const videoSource = '';
if (videoSource) {
  const video = document.querySelector('#video');
  const placeholder = document.querySelector('#video-provisorio');
  video.addEventListener('error', () => {
    video.hidden = true;
    placeholder.hidden = false;
    placeholder.querySelector('p').textContent = 'Vídeo indisponível no momento';
  });
  video.src = videoSource;
  video.hidden = false;
  placeholder.hidden = true;
}
