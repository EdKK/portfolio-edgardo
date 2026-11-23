# Portfólio Edgardo

Apresentação profissional em HTML, CSS e JavaScript. O GitHub Pages serve os arquivos do branch `main` pela raiz.

- Geral: https://edkk.github.io/portfolio-edgardo/
- Cogna: https://edkk.github.io/portfolio-edgardo/cogna/
- Vitru: https://edkk.github.io/portfolio-edgardo/vitru/

## Editar

Atualize o conteúdo comum em `index.html` e as propostas em `gerar-paginas.mjs`. Rode `node gerar-paginas.mjs` e inclua os dois HTML gerados no commit. O GitHub Pages serve as páginas prontas, sem etapa de build.

Para adicionar o vídeo, coloque o MP4 em `assets/media/` e defina `videoSource` em `assets/site.js` como `./media/apresentacao.mp4`. Inclua as legendas em português no HTML comum. Substitua a foto e os demais conteúdos provisórios em `index.html`.

## Testar

Execute `python3 -m http.server 8000 --bind 127.0.0.1` na raiz. Abra `http://127.0.0.1:8000/` e acesse Cogna e Vitru. Abra as três seções e confira se apenas a proposta muda. Os links antigos com `?versao=cogna` ou `?versao=vitru` encaminham para os endereços novos.
