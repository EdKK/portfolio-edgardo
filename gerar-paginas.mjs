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
    .replace(/    <nav class="versions"[\s\S]*?<\/nav>\n/, '')
    .replaceAll('./assets/', '../assets/')
    .replace('class="brand" href="./"', 'class="brand" href="../"')
    .replace(/<p id="proposta">[^\n]*<\/p>/, () =>
      `<p id="proposta"><strong>Proposta preliminar para ${company}.</strong> ${proposal}</p>`);
  const directory = new URL(`./${slug}/`, import.meta.url);
  mkdirSync(directory, { recursive: true });
  writeFileSync(new URL('index.html', directory), page);
}
