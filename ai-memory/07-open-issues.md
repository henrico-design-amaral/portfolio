# OPEN ISSUES — Portfolio

Problemas, pendências e oportunidades de melhoria identificados.

## 2026-05-21 — Pendências consolidadas

### CV final em PDF (resolvido ✅)
- **Status**: PDF gerado em `docs/Henrico-Amaral-CV.pdf` via Edge headless com layout A4 profissional. Link em `index.html` atualizado de `.md` para `.pdf`.
- **Próximo passo**: Manter o conteúdo sincronizado com o Markdown original quando houver alterações.

### Foto real do Henrico em Sobre (substituída por placeholder profissional)
- **Onde**: `assets/img/foto-placeholder.svg` (anteriormente `foto.webp`)
- **Descrição**: O placeholder foi substituído por SVG geométrico abstrato em duotone quente (#BE9C6E sobre fundo escuro), com proporção 4:5 (360x450) e elementos visuais do sistema de design do portfólio.
- **Próximo passo**: Substituir por foto real no mesmo crop e manter o SVG como fallback ou substituí-lo completamente.

### Validação visual headless (concluída ✅)
- **Onde**: $env:TEMP\portfolio-val\
- **Descrição**: Screenshots capturados nos 6 breakpoints (1680, 1440, 1366, 1024, 768, 390). Todos os screenshots OK (48–99KB). Conteúdo verificado por DOM dump e análise headless.
- **Próximo passo**: Validação visual em navegador interativo manual.

### Branches antigas (limpeza concluída ✅)
- Removidas: `audit/home-structure`, `design/solid-section-backgrounds`, `fix/home-modal-and-docs-structure`, `fix/home-signature-content-audit` (active worktree), `gh-pages`, `master`
- **Remote `gh-pages`**: Pendente de exclusão remota.

### `ai-memory/04-content-style.md` ainda precisa de revisão editorial
- **Onde**: `ai-memory/04-content-style.md`
- **Descrição**: O arquivo está com conteúdo de design system, não de estilo textual. Isso não bloqueia a home, mas pode confundir futuras alterações de copy.
- **Próximo passo**: Reescrever em uma rodada pequena de documentação, separada da correção visual/conteúdo da home.

## 2026-05-17 — Pendências pós-revisão sistêmica

### Foto real do Henrico em Sobre
- **Onde**: `assets/img/henrico-amaral.jpg` (ainda inexistente).
- **Descrição**: O bloco `.about-photo-frame` foi implementado e está pronto para receber a foto. Enquanto o arquivo não existir, a área fica em branco com background escuro.
- **Próximo passo**: Adicionar foto real em crop 4:5 (ex: 720x900px). Preto e branco ou duotone quente. Salvar como `assets/img/henrico-amaral.jpg`.

### Validação visual da revisão sistêmica
- **Onde**: Todas as seções.
- **Descrição**: Revisaões de background (.nbg), padding (.section-pad), kickers e títulos não foram validadas em navegador interativo.
- **Próximo passo**: Abrir localmente e validar 1440px, 1366px, 1024px, 768px e 390px.

### Cards do Sobre em mobile
- **Onde**: `.about-grid` com 5 cards.
- **Descrição**: Grid passa por 1col (mobile), 2col (640px+), 3col (1024px+), 5col (1280px+). Verificar overflow e altura dos cards em 390px.
- **Próximo passo**: Testar nos breakpoints e ajustar se cards ficarem muito altos.

### Tradutor i18n (site.js) desatualizado
- **Onde**: `assets/js/site.js`, objeto `COPY`.
- **Descrição**: Os novos cards do Sobre (ab.card5.*) e os novos títulos de seção não foram sincronizados com o dicionário EN.
- **Próximo passo**: Revisar as chaves `ab.card5`, `ct.title`, `ab.subtitle`, `ab.p1`–`ab.p4`, `s4.title`, `s4.statement`, `s5.title`, `ct.tag` no objeto COPY do site.js.

### Validação visual de Sobre e Contato em navegador interativo real
- **Onde**: `#about`, `#contact`, CTA de CV e bloco final/rodapé.
- **Descrição**: As seções foram reestruturadas localmente e validadas por sintaxe/HTTP/DOM. O ambiente headless continua pouco confiável para observar o estado final das animações GSAP, especialmente em deep-links e capturas com hash.
- **Impacto**: Pode haver pequenos ajustes finos de altura, ritmo de entrada, quebras de título ou densidade dos chips em navegador interativo.
- **Próximo Passo**: Abrir localmente a página e validar 1366px, 1024px, 768px e 390px; conferir PT/EN e o CTA `docs/Henrico-Amaral-CV.md`.

## 2026-05-16 — Pendência pós-auditoria sistêmica

### Validação visual em navegador interativo real
- **Onde**: Método, Cases, Impacto, Hero.
- **Descrição**: A auditoria local gerou screenshots headless via Microsoft Edge e confirmou HTTP 200, mas o ambiente headless não foi confiável para observar o estado final das animações GSAP. A validação visual final deve ser feita em navegador interativo.
- **Impacto**: Pode haver pequenos ajustes finos de viewport, ritmo de motion ou quebra de microflows que só aparecem com inspeção visual manual.
- **Próximo Passo**: Abrir localmente a página e validar 1680px, 1440px, 1366px, 1024px, 768px e 390px antes de uma próxima publicação.

## Pendências Técnicas

### 0. Validação visual dos microtextos editoriais
- **Onde**: `index.html`, `assets/css/site.css`, `assets/js/site.js`.
- **Descrição**: Método, Cases e Impacto foram alinhadas ao mesmo sistema de microtextos editoriais (`section-microstats`, `section-chip-row`, `section-editorial-footer`), mas ainda falta validação visual em navegador.
- **Impacto**: Possível necessidade de ajuste fino de quebra, densidade e ritmo em mobile/tablet.
- **Próximo Passo**: Testar 390px, 768px e 1366px; verificar overflow horizontal, equilíbrio dos chips e leitura dos microflows.

### 0.1. Confirmação pós-deploy no GitHub Pages
- **Onde**: GitHub Pages em `/Portfolio/` ou rota configurada no repositório.
- **Descrição**: Após push para `origin/main`, confirmar se a versão publicada recebeu as mudanças de microtextos, fundos sólidos e memória.
- **Impacto**: GitHub Pages pode demorar alguns minutos ou servir cache temporário.
- **Próximo Passo**: Abrir a URL publicada após o push e verificar a versão renderizada.

### 1. Refatoração do Monolito index.html
- **Onde**: `index.html` (~1300 linhas).
- **Descrição**: O arquivo central está crescendo demais, dificultando a manutenção e a localização de seções.
- **Impacto**: Risco de erros em alterações futuras e dificuldade de modularização.
- **Próximo Passo**: Avaliar o uso de um bundler (Vite) ou sistema de templates para separar seções.

### 2. Dependência de CDNs Externas
- **Onde**: Tailwind, GSAP, ScrollTrigger.
- **Descrição**: O projeto depende de conexões externas para carregar o sistema de design e as interações.
- **Impacto**: Falha no carregamento se as CDNs estiverem lentas/offline; impossibilidade de desenvolvimento offline.
- **Próximo Passo**: Considerar a instalação local via NPM ou download dos assets.

### 3. Integração do Modal de Case Study
- **Onde**: `index.html` e `site.js`.
- **Descrição**: Verificar se o modal no final do `index.html` está consumindo corretamente todos os dados do objeto `CASE_DATA`.
- **Impacto**: Experiência do usuário incompleta nos cases.
- **Próximo Passo**: Testar abertura de todos os modais e validar dados.

### 4. Validação GSAP com novas classes da seção Impacto
- **Onde**: `assets/js/site.js` + `.impact-cell` (classe nova).
- **Descrição**: O CSS da seção Impacto foi completamente reescrito com novas classes semânticas (`.impact-evidence`, `.impact-desc`, `.impact-dimension`). As animações GSAP/ScrollTrigger que eventualmente targeteavam seletores antigos precisam ser verificadas.
- **Impacto**: Animações de entrada dos cards podem não disparar corretamente.
- **Próximo Passo**: Abrir a seção no browser, checar o console e validar que todos os cards animam na entrada.

### 5. Validação de breakpoints da seção Impacto
- **Onde**: `index.html` + `site.css`.
- **Descrição**: O novo sistema de grid com `grid-auto-rows: 340px` não foi testado em 390px, 768px e 1366px.
- **Impacto**: Possível overflow ou cards cortados em mobile/tablet.
- **Próximo Passo**: Testar nos breakpoints definidos. Em mobile (`max-width: 639px`) `grid-auto-rows: auto` está ativado — verificar se funciona.

## Oportunidades de Conteúdo e Design

### 1. Aproveitamento de Conteúdo Detalhado
- **Onde**: Pasta `/docs/`.
- **Descrição**: Existem arquivos MD com cases detalhados que não estão sendo totalmente expostos no site (que usa apenas um resumo no modal).
- **Próximo Passo**: Criar páginas dedicadas ou expandir o conteúdo dos modais.

### 2. Acessibilidade Dinâmica
- **Onde**: Transições GSAP e seções interativas.
- **Descrição**: Garantir que as animações respeitem `prefers-reduced-motion` (já iniciado no JS) e que a navegação via teclado seja fluida.
- **Próximo Passo**: Auditoria de acessibilidade WCAG 2.2.

---

## Histórico de Issues Resolvidas

- **[2026-05-15] Mapeamento de Memória Técnica**: Stack real identificada e documentada em `05-technical-decisions.md`.
- **[2026-05-15] Consolidação do Design System**: Tokens de cores, fontes e motion documentados em `03-design-system.md`.
- **[2026-05-16] Estado Git confirmado**: Repositório já estava inicializado, branch `main` ativa e `origin` apontando para `https://github.com/henrico-design-amaral/portfolio.git`.
- **[2026-05-16] Fundos de Método e Cases**: Camadas internas de grid/topologia removidas; seções mantidas com fundos sólidos da paleta (`base-200` e `page`).
- **[2026-05-16] Microtextos editoriais**: Método e Impacto receberam microstats, chips, microflows e rodapés editoriais sutis.
- **[2026-05-16] Padronização editorial**: Cases foi alinhada às mesmas classes editoriais (`section-microstats`, `section-chip-row`, `section-editorial-footer`) usadas em Método e Impacto.
- **[2026-05-16] Seletores Tailwind quebrados no Impact**: Classes como `lg\:text-\[3\.5rem\]` não matchavam. Substituídas por classes semânticas próprias.
- **[2026-05-16] Cards com alturas diferentes**: Resolvido com `grid-auto-rows` fixo no `.impact-grid`.
- **[2026-05-16] Título herdando fonte errada**: `font-family: Syne` agora declarado explicitamente no CSS — não depende mais de classes Tailwind no h2.
- **[2026-05-16] BMG com peso visual inferior**: Todos os 4 cards agora têm markup idêntico e `.impact-evidence` com `font-size` uniforme.
- **[2026-05-16] Markup duplicado no index.html**: Resolvido via PowerShell regex após falha dos seletores CRLF no editor.
- **[2026-05-16] Remote Git apontando para repo inexistente**: Atualizado de `Portfolio_v2.git` para `portfolio.git`. 
- **[2026-05-17] Validação visual da revisão minimalista**: Hero desktop/mobile validado por screenshot local; Cases, Impacto, Sobre e Contato validados via CDP com títulos/cards visíveis; `site.js` validado com `node --check`; assets principais retornando HTTP 200; contraste principal auditado em pares críticos.


Problemas, pendências e oportunidades de melhoria identificados.

## Pendências Técnicas

### 1. Refatoração do Monolito index.html
- **Onde**: `index.html` (~1300 linhas).
- **Descrição**: O arquivo central está crescendo demais, dificultando a manutenção e a localização de seções.
- **Impacto**: Risco de erros em alterações futuras e dificuldade de modularização.
- **Próximo Passo**: Avaliar o uso de um bundler (Vite) ou sistema de templates para separar seções.

### 2. Dependência de CDNs Externas
- **Onde**: Tailwind, GSAP, ScrollTrigger.
- **Descrição**: O projeto depende de conexões externas para carregar o sistema de design e as interações.
- **Impacto**: Falha no carregamento se as CDNs estiverem lentas/offline; impossibilidade de desenvolvimento offline.
- **Próximo Passo**: Considerar a instalação local via NPM ou download dos assets.

### 3. Integração do Modal de Case Study
- **Onde**: `index.html` e `site.js`.
- **Descrição**: Verificar se o modal no final do `index.html` está consumindo corretamente todos os dados do objeto `CASE_DATA`.
- **Impacto**: Experiência do usuário incompleta nos cases.
- **Próximo Passo**: Testar abertura de todos os modais e validar dados.

## Oportunidades de Conteúdo e Design

### 1. Aproveitamento de Conteúdo Detalhado
- **Onde**: Pasta `/docs/`.
- **Descrição**: Existem arquivos MD com cases detalhados que não estão sendo totalmente expostos no site (que usa apenas um resumo no modal).
- **Próximo Passo**: Criar páginas dedicadas ou expandir o conteúdo dos modais.

### 2. Acessibilidade Dinâmica
- **Onde**: Transições GSAP e seções interativas.
- **Descrição**: Garantir que as animações respeitem `prefers-reduced-motion` (já iniciado no JS) e que a navegação via teclado seja fluida.
- **Próximo Passo**: Auditoria de acessibilidade WCAG 2.2.

---

## Histórico de Issues Resolvidas

- **[2026-05-15] Mapeamento de Memória Técnica**: Stack real identificada e documentada em `05-technical-decisions.md`.
- **[2026-05-15] Consolidação do Design System**: Tokens de cores, fontes e motion documentados em `03-design-system.md`.
