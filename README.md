# Portfolio Sandre.dev

Este repositório contém a homepage minimalista em React + Vite para a Sandre.dev, hospedada na pasta httpdocs/portfolio no servidor Plesk.

Estrutura
- portfolio/ (raiz do app)
- portfolio/index.html
- portfolio/package.json
- portfolio/vite.config.js
- portfolio/src/
- portfolio/src/pages/Home.jsx
- portfolio/src/components/
- portfolio/src/assets/
- portfolio/src/styles/
- portfolio/README.md (este arquivo)

Como rodar localmente
- Instalar dependências: `npm install` (na raiz da pasta portfolio)
- Rodar dev: `npm run dev`
- build: `npm run build` (gera a pasta dist)
- Preview: `npm run preview`

Deploy no Plesk
- Opção simples: build local e copiar o conteúdo de dist para httpdocs/portfolio
- Em Plesk, aponte o domínio sandre.dev para httpdocs/portfolio/dist (ou configure o caminho de site raiz para apontar para esse dist)
- Opção Git: configurar Deployment via Git para httpdocs/portfolio (recomendada para automação)

Observações
- Assets (logo/banner) devem ser adicionados a portfolio/src/assets e referenciados nos componentes.
- A paleta de cores está definida nos CSS e pode ser ajustada quando o logo/banner forem disponibilizados.
