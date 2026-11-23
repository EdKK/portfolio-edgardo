import { readFileSync, writeFileSync } from 'node:fs';

const template = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const header = /  <header class="bar wrap">[\s\S]*?<\/header>\n/;

if (!header.test(template)) throw new Error('Cabeçalho da página Geral não encontrado.');

const page = template
  .replace('<body>', '<body class="company-page">')
  .replace(header, '')
  .replaceAll('./assets/', '../assets/');

for (const company of ['cogna', 'vitru']) {
  writeFileSync(new URL(`./${company}/index.html`, import.meta.url), page);
}
