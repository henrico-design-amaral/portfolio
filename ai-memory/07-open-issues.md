# OPEN ISSUES — Portfolio

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