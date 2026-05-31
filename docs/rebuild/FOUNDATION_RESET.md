# Foundation Reset

Data: 2026-05-31
Branch de origem: `main` (inicialmente diagnosticado na branch `hero/build-clean-zero-hero` e depois atualizado com a `main` antes do reset)
Commit de origem: `140514a` ("feat(home): rebuild index from zero (#49)")
Tag criada: `legacy/pre-foundation-reset-20260531`
Branch legado criada: `legacy/pre-foundation-reset-20260531`
Backup físico: `C:\Users\henri\Documents\04_PROJETOS_CONTEÚDO\99_BACKUPS\portfolio\pre-foundation-reset-20260531-1922`
Motivo do reset: O projeto atual acumulou dívida técnica, resíduos visuais, múltiplas gerações de CSS/JS, backups locais internos, branches experimentais e decisões conflitantes de design. A prioridade é obter controle absoluto sobre cada linha de código, seguindo a diretriz de simplificar para fazer melhor.

> [!NOTE]
> O backup físico completo do repositório foi criado em uma pasta externa fora da raiz ativa (`C:\Users\henri\Documents\04_PROJETOS_CONTEÚDO\99_BACKUPS\portfolio\pre-foundation-reset-20260531-1922`). Isso garante que os resíduos pesados e dependências antigas fiquem fora do repositório ativo e não contaminem a nova base limpa.

Itens preservados na base ativa:
- `.git`
- `.claude`
- `ai-memory`
- `docs` (incluindo CV, especificações de design, documentação de decisões e este manifesto)
- `docs/design-system/PORTFOLIO_DESIGN_SYSTEM.md`
- `docs/design-system/TOKENS.md`
- `assets/fonts`
- `assets/img`
- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `README.md`
- `PROJECT_CONTROL.md`
- `.gitignore`
- `.nojekyll`
- `favicon.svg`

Itens movidos para legado (removidos da base ativa):
- `_backups` (antigos backups internos que poluíam o repositório)
- `cases` (estrutura legada de cases)
- `tools` (scripts utilitários antigos)
- `assets/css/*` (removidos todos os arquivos CSS antigos: `site.css`, `home.css`, `case-petrobras.css`, `tailwind.generated.css`, `tailwind.input.css`)
- `assets/js/*` (removidos todos os arquivos JS antigos: `site.js`, `home.js`)
- `index.html` (antigo index.html pesado e sobrecarregado)
- `package.json`
- `package-lock.json`
- `tailwind.config.js`
- `docs/design-system.html`
- `docs/design-system-v2.html`
- `docs/design-system-v3.html`

Critérios de aceite:
1. A nova `index.html` carrega apenas `main.css?v=foundation-01` e `main.js?v=foundation-01`.
2. Totalmente semântico e responsivo (390px, sem overflow).
3. Lógica funcional de idioma (PT/EN) baseada em dados puros com persistência no `localStorage`.
4. Console do navegador livre de erros.
5. Sem dependência de build externa (Tailwind CDN/CLI, GSAP ou ScrollTrigger).
6. Auditoria de resíduos livre de termos antigos.

Próximas etapas:
1. Validar a base limpa e semântica com o usuário.
2. Implementar a hero canônica alinhada com o Design System.
3. Desenvolver estilos para Método, Cases, Sobre e Contato sem dependências de animações complexas.
