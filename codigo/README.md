Como editar este site (portfólio demonstrativo)

Alterar textos
- Abra `index.html` e edite os textos em cada seção (`<h1>`, `<p>`, títulos de serviços, etc.).

Atualizar número do WhatsApp
- Para trocar o número globalmente, abra `scripts.js` e substitua o valor de `WHATSAPP_NUMBER` pela sequência internacional sem `+` (ex: `5511999999999`).
- Também é possível editar manualmente o link no botão (em `index.html`) no atributo `href` que aponta para `https://wa.me/`.

Imagens
- A imagem de apresentação está em `../imagens/img2.avif`. Substitua por outra imagem mantendo o nome ou altere o `src` em `index.html`.

Formulário
- O formulário é apenas demonstrativo: por padrão não envia dados a um servidor. Para integrá-lo, substitua o `event.preventDefault()` em `scripts.js` e implemente uma chamada para seu backend ou serviço de e-mail.

Executar localmente
- Abra `index.html` no navegador (clicando duas vezes) para ver o site. Para desenvolvimento com recarga automática, use um servidor local (ex: `Live Server` no VS Code).

Licença
- Este projeto é um exemplo/portfólio. Os depoimentos são fictícios e servem apenas para demonstração.