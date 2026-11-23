'use strict';

const versionLinks = document.querySelector('.versions');
if (versionLinks) {
  const requestedVersion = new URLSearchParams(window.location.search).get('versao');
  const legacyLink = [...versionLinks.querySelectorAll('a')]
    .find(link => link.textContent.toLowerCase() === requestedVersion);
  if (legacyLink) window.location.replace(legacyLink.href + window.location.hash);
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
  video.src = new URL(videoSource, document.currentScript.src).href;
  video.hidden = false;
  placeholder.hidden = true;
}
