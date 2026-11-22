# Portfólio Edgardo

Microsite profissional de página única em português brasileiro. HTML, CSS e JavaScript nativos, sem instalação nem build.

## Teste local

Na pasta do projeto, execute:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

- Geral: http://127.0.0.1:8000/
- Cogna: http://127.0.0.1:8000/?versao=cogna
- Vitru: http://127.0.0.1:8000/?versao=vitru

Use os links no cabeçalho para alternar entre as versões. Abra e feche as três seções abaixo do vídeo. Confira com teclado (Tab, Enter e Espaço) e em larguras de 320 px, 390 px, 768 px e 1440 px. Para um teste no Safari de um iPhone físico, em uma rede local confiável, troque o endereço de bind pelo IP local do computador e acesse esse IP com a porta 8000 no iPhone na mesma rede.

## Conteúdo

O HTML concentra a base comum, incluindo identidade, vídeo, navegação e módulos profissionais. Cada versão altera a identificação do público e a hipótese de colaboração, seguindo a divisão editorial aproximada de 80% de base comum e 20% de adaptação. As propostas são pontos de partida para conversa.

- Vídeo: coloque o MP4 de cerca de 30 segundos em `assets/media/` e preencha `videoSource` em `assets/site.js`. Exemplo de caminho: `./assets/media/apresentacao.mp4`. Inclua legendas em português com um elemento `track` no vídeo.
- Foto: substitua o bloco provisório em `index.html` pela foto autorizada, com texto alternativo.
- Informações profissionais: revise biografia, áreas de atuação, cases, resultados e contato em `index.html`. Revise as propostas de Cogna e Vitru em `assets/site.js`.

## Publicação futura

- **GitHub Pages**. Quando houver autorização para publicar, em Settings → Pages selecione a origem Deploy from a branch, branch `main` e pasta `/ (root)`. O arquivo `.nojekyll` permite servir o conteúdo estático diretamente. Confirme a disponibilidade para repositórios privados no plano GitHub e a visibilidade do site antes de ativar.
- **Cloudflare Pages**. Quando houver autorização para publicar, conecte somente o repositório `portfolio-edgardo`. Use o branch `main`, preset None, comando de build em branco e diretório de saída `.`. A integração pode publicar assim que for configurada.

As versões compartilham a mesma URL de implantação, diferenciadas pelo parâmetro `versao`. Quem tiver acesso ao site poderá alternar entre elas.
