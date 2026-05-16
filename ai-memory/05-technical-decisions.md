# TECHNICAL DECISIONS — Portfolio

Este arquivo registra a stack real e as decisões técnicas do projeto Portfolio após inspeção estrutural.

## Configuração do Projeto

- **Pasta local**: Portfolio
- **Remote GitHub**: [henrico-design-amaral/portfolio](https://github.com/henrico-design-amaral/portfolio)
- **Deploy**: GitHub Pages em [/portfolio/](https://henrico-design-amaral.github.io/portfolio/)
- **Natureza**: Site estático
- **Regra de Git**: Commits devem ocorrer apenas dentro de `!PROJETOS/Portfolio`
- **Branch principal**: `main`
- **Remote origin confirmado**: `https://github.com/henrico-design-amaral/portfolio.git`

## Stack Confirmada

- **Frontend**: Vanilla HTML5, JS (ES6+), CSS3.
- **Framework de Estilização**: Tailwind CSS (v3) via CDN.
- **Engine de Animação**: GSAP (v3.12.5) + ScrollTrigger via CDN.
- **Tipografia**: Google Fonts (Syne, Inter, JetBrains Mono).
- **Arquitetura**: SPA Estático (Single Page Application - Monolith).

## Estrutura de Pastas

- `/`: Raiz com `index.html` (monolito) e arquivos de documentação.
- `/assets/css/`: `site.css` (estilos customizados e overrides).
- `/assets/js/`: `site.js` (dicionário i18n, constantes de motion e lógica GSAP).
- `/assets/img/`: Ativos visuais e imagens dos cases.
- `/docs/`: Documentação de suporte e cases detalhados.
- `/ai-memory/`: Memória persistente do projeto.

## Decisões Técnicas Atuais

1. **Monolito HTML**: O projeto concentra toda a estrutura em um único `index.html` de ~1300 linhas. Isso facilita o deploy estático simples, mas aumenta a complexidade de manutenção.
2. **Localização (i18n)**: Implementada via JavaScript customizado (`site.js`) usando o objeto `COPY` e atributos `data-t`. Troca de idioma em tempo real sem reload.
3. **Motion Engine**: Centralizado no objeto `MOTION` em `site.js`. Uso extensivo de ScrollTrigger para parallax e revelações de conteúdo.
4. **Dependência de CDN**: Tailwind e GSAP são carregados externamente.
5. **Configuração Tailwind**: Definida inline no `index.html` (dentro de `tailwind.config`) para permitir customização rápida de tokens de design.

## Scripts Disponíveis

- **Nenhum**: O projeto não utiliza Node.js/NPM no estado atual. É puramente estático.

## Riscos Técnicos

1. **Manutenibilidade**: O tamanho do `index.html` torna difícil localizar e alterar seções específicas.
2. **Performance**: O uso intensivo de filtros de blur e múltiplas instâncias de ScrollTrigger pode impactar a performance em dispositivos móveis menos potentes.
3. **Confiabilidade**: Dependência total de CDNs externas para funcionamento do layout (Tailwind) e interações (GSAP).

## Próximos Passos Técnicos

1. Validar responsividade em dispositivos reais.
2. Considerar modularização se o projeto crescer em volume de conteúdo.
3. Otimizar carregamento de imagens de cases.

## 2026-05-16 — Estado Git confirmado

Decisão:
Não executar `git init` novamente porque `Portfolio` já possui `.git`, branch `main` ativa e remote `origin` configurado.

Estado confirmado:
- Branch atual: `main`
- Tracking: `main...origin/main`
- Remote fetch/push: `https://github.com/henrico-design-amaral/portfolio.git`

Regra:
Se o repositório já estiver inicializado, não repetir `git init` nem recriar `origin`. Antes de qualquer ação Git estrutural, confirmar `git status --short --branch`, `git branch --show-current` e `git remote -v`.

Nota:
Em 2026-05-16, o push para a URL `Portfolio.git` funcionou via redirect, mas o GitHub retornou aviso de repositório movido para `portfolio.git`. O remote local foi atualizado para a URL lowercase oficial.

## 2026-05-16 — Publicação via GitHub Pages

Decisão:
Atualizações do portfólio publicado devem ser entregues por commit na branch `main` e push para `origin/main`, preservando o fluxo atual do GitHub Pages.

Arquivos previstos no commit desta rodada:
- `index.html`
- `assets/css/site.css`
- `assets/js/site.js`
- `ai-memory/05-technical-decisions.md`
- `ai-memory/06-visual-decisions.md`
- `ai-memory/07-open-issues.md`
- `ai-memory/08-changelog.md`
- `ai-memory/09-do-not-repeat.md`

Problemas resolvidos:
- Estado Git confirmado sem necessidade de `git init`.
- Remote `origin` confirmado como `https://github.com/henrico-design-amaral/portfolio.git`.
- Deploy do GitHub Pages passa a depender apenas do push da branch `main`.

Problemas pendentes:
- Confirmar no GitHub Pages se a versão publicada atualizou após o push.
- Validar visualmente Método, Cases e Impacto nos breakpoints principais.

Próximos passos:
- Após push, verificar a página publicada e cache do GitHub Pages.
- Se houver atraso de publicação, aguardar o job do Pages concluir antes de nova intervenção.

## 2026-05-15 — Remoção de bibliotecas de agentes do projeto

Decisão:
Remover bibliotecas de agentes e skills de dentro do repositório Portfolio.

Pastas removidas do escopo do projeto:
- _agents/
- huashu-design/
- ui-ux-pro-max-skill/

Motivo:
Essas pastas são recursos operacionais externos e não pertencem ao produto publicado. Mantê-las dentro do Portfolio aumenta ruído, confunde agentes, polui o Git e cria risco de commits indevidos.

Regra:
Skills, prompts, agentes e bibliotecas externas devem ficar fora do Portfolio, centralizados em:
- Henrico-Agent-OS/ (Biblioteca Central)
- !PROJETOS/!SKILLS (Quarentena/Temporário)
- C:/Users/henri/.agents
- C:/Users/henri/.gemini
- C:/Users/henri/.antigravity

Status:
Concluído. Repositório Portfolio limpo e materiais migrados para Henrico-Agent-OS.

## 2026-05-15 — Renomeação de _archive para case-references

Decisão:
Renomear a pasta `_archive/` para `case-references/` para melhor refletir seu propósito.

Motivo:
`_archive` sugeria material descartável, enquanto a pasta contém referências cruciais (brutas e privadas) para a construção dos cases.

Regras de Segurança:
- `case-references/` contém material bruto e privado (docs, imagens de apoio, dados de clientes).
- `assets/` contém apenas arquivos públicos otimizados para o site.
- `case-references/` não deve ser commitado no GitHub público sem curadoria prévia.
- A pasta deve ser mantida no `.gitignore`.

## 2026-05-15 — Auditoria e Sanitização da Seção Impacto

**Decisão:**
Priorizar conteúdo estático no HTML para todas as métricas de impacto, usando JavaScript apenas como camada de aprimoramento progressivo (animação).

**Motivo:**
Garantir que os dados de impacto (KPIs) sejam indexáveis por motores de busca (SEO), acessíveis para tecnologias assistivas (A11y) e legíveis mesmo sem JavaScript. Placeholders "0" foram substituídos pelos valores reais.

**Diretrizes Editoriais:**
- Métricas quantitativas devem ser acompanhadas de justificativa qualitativa ("Engenharia de dados", "Conformidade sistêmica").
- Evitar números isolados sem contexto operacional.
- O tom deve refletir o posicionamento de "Enterprise Product Designer", focando em resultados estruturais e escala corporativa.

**Lastro Documental:**
As métricas exibidas (95% automação, 4K pontos de recepção, etc.) foram auditadas e encontram-se suportadas pelos materiais brutos em `case-references/`.

## 2026-05-16 — Refinamento Editorial e Governança de Métricas

**Decisão:**
Substituir rótulos performáticos sem lastro quantitativo direto por descrições qualitativas técnicas. Requisitos de compliance (ex: BMG) deixam de ser métricas percentuais e passam a ser requisitos de infraestrutura.

**Diretrizes de Governança:**
- **Métricas Qualitativas:** Onde o lastro quantitativo é insuficiente, priorizamos rótulos qualitativos concretos (ex: "Coordenação de Riscos Operacionais").
- **Compliance como Infraestrutura:** Requisitos regulatórios são tratados como condições de produto ("auditável", "aderente"), não como métricas promocionais.
