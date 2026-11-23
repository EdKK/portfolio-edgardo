import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const template = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const proposals = {
  "cogna": [
    "Cogna",
    "Explorar um piloto de apoio à permanência estudantil, com foco em identificar dificuldades nas primeiras semanas e avaliar o alcance das ações de acolhimento."
  ],
  "vitru": [
    "Vitru",
    "Explorar um piloto de ambientação no ensino digital, com foco em ajudar estudantes a organizar a rotina e concluir as primeiras atividades."
  ]
};

for (const [slug, [company, proposal]] of Object.entries(proposals)) {
  const page = template
    .replace('<body>', '<body class="company-page">')
    .replace(/  <header class="bar wrap">[\s\S]*?<\/header>\n/, '')
    .replaceAll('./assets/', '../assets/')
    .replace(/<h1 id="titulo">[^\n]*<\/h1>/, '<h1 id="titulo">Olá, sou o professor doutor Edgardo</h1>')
    .replace('podemos construir juntos na EAD.</p>', 'podemos construir juntos na EAD</p>')
    .replace(/<p id="proposta">[^\n]*<\/p>/, () =>
      `<p id="proposta"><strong>Proposta preliminar para ${company}.</strong> ${proposal}</p>`);
  const directory = new URL(`./${slug}/`, import.meta.url);
  mkdirSync(directory, { recursive: true });
  writeFileSync(new URL('index.html', directory), page);
}
