# Portfólio Edgardo

Apresentação profissional em HTML, CSS e JavaScript. O GitHub Pages serve os arquivos do branch `main` pela raiz.

## Editar

O conteúdo e os seis cartões ficam em `index.html`. Para editar a frase padrão de **O que podemos criar**, altere o elemento `#collaboration-intro`. Para cadastrar uma frase personalizada, adicione uma entrada ao objeto `portfolioConfig` em `assets/site.js`. A chave é o valor de `perfil` na URL.

Os endereços antigos `/cogna/` e `/vitru/` levam à página comum.

Para adicionar o vídeo, coloque o MP4 em `assets/media/` e defina `videoSource` em `assets/site.js` como `./media/apresentacao.mp4`. Inclua as legendas em português no HTML comum. Substitua a foto e os demais conteúdos provisórios em `index.html`.

## Testar

Execute `python3 -m http.server 8000 --bind 127.0.0.1` na raiz. Abra as URLs abaixo e confirme que só muda o título de **O que podemos criar**.

- Padrão: http://127.0.0.1:8000/
- Perfil fictício: http://127.0.0.1:8000/?perfil=instituicao-a
- Perfil desconhecido, com frase padrão: http://127.0.0.1:8000/?perfil=invalido
