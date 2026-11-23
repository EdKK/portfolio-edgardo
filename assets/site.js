'use strict';

const collaborationIntro = document.querySelector('#collaboration-intro');
const portfolioConfig = {
  default: collaborationIntro.textContent,
  'instituicao-a': 'Podemos colaborar no desenvolvimento de experiências que aproximem a formação acadêmica da prática profissional.',
};

const profile = new URLSearchParams(window.location.search).get('perfil');
collaborationIntro.textContent = Object.hasOwn(portfolioConfig, profile)
  ? portfolioConfig[profile]
  : portfolioConfig.default;

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
  video.src = new URL(videoSource, document.currentScript.src).href;
  video.hidden = false;
  placeholder.hidden = true;
}
