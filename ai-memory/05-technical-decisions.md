# TECHNICAL DECISIONS — Portfolio

Este arquivo registra a stack real e as decisões técnicas do projeto Portfolio após inspeção estrutural.

## Configuração do Projeto

- **Pasta local**: Portfolio
- **Remote GitHub**: [henrico-design-amaral/portfolio](https://github.com/henrico-design-amaral/portfolio)
- **Deploy**: GitHub Pages em [/portfolio/](https://henrico-design-amaral.github.io/portfolio/)
- **Natureza**: Site estático
- **Regra de Git**: Commits devem ocorrer apenas dentro de `!PROJETOS/Portfolio`

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