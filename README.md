# Conectwork · protótipo

Protótipo navegável do Conectwork (dados fictícios, salvos só no aparelho de quem usa).
Funciona como aplicativo instalável (PWA) quando publicado em HTTPS, por exemplo no GitHub Pages.

## Documentos
Explicação simples do projeto: `explicacao.pdf`.
O PDF completo do projeto fica em `apresentacao.pdf` (no ar: `https://cavalcante-creator.github.io/conectwork/apresentacao.pdf`).

## Publicar no GitHub Pages
1. Crie um repositório novo no GitHub (ex.: `conectwork`), público.
2. Envie todos os arquivos desta pasta para a raiz do repositório (Add file › Upload files).
3. Settings › Pages › Build and deployment: Source = *Deploy from a branch*, Branch = `main`, pasta `/ (root)` › Save.
4. Em cerca de 1 minuto o endereço fica `https://<seu-usuario>.github.io/conectwork/`.

## Instalar
- Android (Chrome): abrir o endereço › menu ⋮ › *Instalar app*.
- iPhone (Safari): abrir o endereço › Compartilhar › *Adicionar à Tela de Início*.
- Computador (Chrome/Edge): ícone de instalar na barra de endereço.

Ao publicar uma versão nova, troque `VERSAO` em `sw.js` para os aparelhos baixarem a atualização.
