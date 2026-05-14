# CASE — AMBEV MONITORING
## Documento consolidado: narrativa estruturada + lacunas para produção

Fonte: texto do portfólio (abril 2026)
Status: narrativa consolidada — visuais e mockups pendentes

---

## METADADOS DO PROJETO

| Campo | Valor |
|---|---|
| UX Design | Henrico Amaral, Andrea Parente |
| UI Design | Michelle Santos, Afonso Lopez |
| Empresa | Qintess |
| Cliente | AmBev |
| Período | 2019 — 2020 |
| Duração | 12 meses |
| Sistema | Plataforma de monitoramento operacional logístico |

**Contexto de uso:**
Centros de controle logístico e acompanhamento de indicadores operacionais em escala nacional — ambientes com múltiplas telas, monitoramento contínuo e decisões em tempo real.

---

## HERO

**Situação de abertura (lede):**
Um centro de distribuição começa o dia com sinais de ruptura em alguns produtos.

Os carregamentos ainda estão acontecendo. Pedidos continuam sendo processados. Mas parte da operação já não está mais sincronizada.

Alguém precisa responder rapidamente três perguntas:

- Onde está o problema.
- Qual região foi afetada.
- O que precisa ser priorizado agora.

Antes deste sistema, essas respostas estavam espalhadas entre relatórios diferentes.

**A operação existia. A leitura da operação não.**

Este projeto nasceu para resolver isso. Estruturar uma forma clara de acompanhar o estado logístico em escala nacional.

> **[LACUNA VISUAL]** Mockup ou visual de abertura do hero.
> Sugestão: painel de monitoramento mostrando distribuição geográfica de indicadores, rupturas ativas e carregamentos em andamento — com linguagem de mapa ou grid operacional.

---

## RESUMO DO PROJETO

A operação logística dependia de múltiplos relatórios desconectados. Equipes precisavam montar manualmente o contexto antes de agir.

O sistema reorganizou os indicadores em torno do **estado da operação** como unidade central de leitura. Isso permitiu acompanhar rupturas, carregamentos e disponibilidade de produtos de forma contínua.

O resultado foi uma leitura operacional compartilhada — a mesma visão do sistema para equipes que antes operavam com versões diferentes da realidade.

---

## CONTEXTO OPERACIONAL

**Subtítulo:** A distribuição de bebidas em escala nacional envolve múltiplos centros de decisão simultâneos.

Quatro perfis de leitura operacional diferentes coexistiam na mesma operação:

- **Centros de distribuição** acompanham disponibilidade de estoque
- **Equipes logísticas** monitoram carregamentos
- **Times regionais** acompanham nível de serviço
- **Gestores** analisam desempenho agregado da operação

Cada uma dessas leituras existia antes do sistema. Mas existia isoladamente.

Quando surgia uma ruptura ou atraso relevante, entender o impacto exigia cruzar informações manualmente — entre relatórios, sistemas internos e planilhas regionais.

Esse era o principal custo operacional invisível.

---

## O DESAFIO

**Subtítulo:** O problema não era ausência de dados. Era ausência de estrutura.

Indicadores críticos estavam distribuídos entre relatórios operacionais, sistemas internos e planilhas regionais. Isso criava múltiplas versões da operação acontecendo ao mesmo tempo.

Sem uma leitura comum, priorizar decisões ficava mais lento.

O sistema precisava transformar dados dispersos em uma visão única da operação.

---

## RESTRIÇÕES

**01 — Heterogeneidade dos dados**
Os dados vinham de sistemas diferentes com estruturas distintas. Integração sem perda de contexto operacional era necessária.

**02 — Frequência de atualização**
A operação exigia atualização frequente dos indicadores. Dados desatualizados são mais perigosos do que nenhum dado.

**03 — Múltiplos perfis de leitura**
Equipes tinham necessidades diferentes — visão nacional para gestores, análise regional para times locais, detalhe operacional para centros de distribuição.

**04 — Uso individual e coletivo**
O sistema precisava funcionar tanto em uso individual quanto em ambientes de monitoramento coletivo — telas compartilhadas em centros de controle.

**05 — Rastreabilidade**
Nada podia comprometer a rastreabilidade operacional. Decisões tomadas a partir do sistema precisavam ter base auditável.

---

## DISCOVERY

A investigação começou pela análise dos artefatos existentes:

- Relatórios logísticos
- Planilhas regionais
- Indicadores acompanhados diariamente
- Estruturas de monitoramento usadas em centros operacionais

Isso revelou um padrão consistente: **a maior parte do esforço não estava na análise. Estava na reconstrução do contexto antes da análise.**

> **[LACUNA VISUAL]** Diagrama ou composição dos artefatos existentes.
> Sugestão: relatórios e planilhas desconectados convergindo para o ponto de decisão — análogo ao diagrama de fragmentação dos cases anteriores.

---

## PRINCIPAIS INSIGHTS

**01** — A informação existia, mas não era legível como sistema. Cada equipe acompanhava apenas parte da operação.

**02** — Eventos críticos demoravam a aparecer como prioridade — porque nenhum sistema os destacava como tal.

**03** — Monitoramento contínuo e análise investigativa estavam misturados. Isso aumentava o esforço cognitivo de quem precisava apenas de uma leitura rápida do estado da operação.

**04** — O custo cognitivo da operação era alto e invisível — ninguém contabilizava o tempo gasto reconstituindo contexto.

---

## DEFINIÇÃO DO PROBLEMA

Como estruturar uma leitura contínua do estado da operação logística que permita identificar desvios rapidamente, sem depender de cruzamento manual de relatórios?

Essa pergunta orientou toda a arquitetura do produto.

---

## ESTRATÉGIA

**Subtítulo:** A decisão estrutural foi transformar o estado da operação no objeto central do sistema.

A plataforma deixou de refletir sistemas de origem. Passou a refletir a operação real.

Disponibilidade de produtos, carregamentos, rupturas, desempenho logístico — tudo organizado como sinais do mesmo sistema operacional, não como outputs de ferramentas diferentes.

> **[LACUNA VISUAL]** Diagrama da estratégia.
> Sugestão: Estado da Operação no centro, com Disponibilidade / Carregamentos / Rupturas / Desempenho como dimensões satélite.

---

## VISÃO DO SISTEMA

**Subtítulo:** A plataforma foi estruturada em três camadas conectadas.

### DIAGRAMA — Arquitetura de camadas

```
Monitoramento nacional da distribuição
(Visão consolidada da operação em escala)
         │
         ↓
Acompanhamento contínuo de indicadores críticos
(Disponibilidade, rupturas, carregamentos, nível de serviço)
         │
         ↓
Análise contextual de eventos operacionais
(Investigação de desvios mantendo contexto operacional)
```

Essa estrutura permite navegar da visão geral até o detalhe mantendo o contexto da operação intacto.

> **[LACUNA VISUAL]** Versão visual do diagrama acima.

---

## PRINCIPAIS DECISÕES DE DESIGN

**Subtítulo:** O sistema foi definido por decisões estruturais, não por telas isoladas.

---

**01 — Estado da operação como unidade principal**
Indicadores deixaram de ser organizados por sistema de origem. Passaram a ser organizados pela leitura operacional.
*Impacto:* A plataforma passou a refletir o funcionamento real da distribuição.

---

**02 — Separação entre monitoramento e investigação**
A leitura contínua da operação foi separada da análise de causa. São dois modos distintos de interação com o sistema.
*Impacto:* Equipes conseguem identificar problemas antes de investigá-los — sem misturar as duas tarefas.

---

**03 — Hierarquia explícita de sinais críticos**
Disponibilidade, rupturas e carregamentos ganharam prioridade visual sobre métricas secundárias.
*Impacto:* Eventos relevantes aparecem antes que se tornem problemas maiores.

---

**04 — Estrutura consistente entre níveis de leitura**
Visão nacional, regional e operacional seguem a mesma lógica estrutural. Quem sabe ler um nível, sabe ler todos.
*Impacto:* Redução do esforço cognitivo durante navegação entre escalas.

---

**05 — Uso coletivo em centros de controle**
A plataforma foi pensada para ambientes com múltiplas telas e acompanhamento contínuo — não apenas para uso individual em desktop.
*Impacto:* A operação passa a compartilhar a mesma leitura do sistema, eliminando versões paralelas da realidade.

---

## SOLUÇÃO

**Subtítulo:** O sistema passou a funcionar como uma camada de leitura contínua da operação logística.

Com o sistema, equipes:

- Acompanham o estado geral da distribuição
- Identificam rapidamente rupturas e desvios
- Localizam regiões afetadas
- Priorizam carregamentos críticos
- Aprofundam a análise mantendo o contexto operacional

O sistema não substituiu relatórios existentes. Ele reorganizou a operação ao redor deles.

> **[LACUNAS VISUAIS — TELAS]** Interfaces a documentar quando os mockups estiverem disponíveis:
>
> **Tela 1 — Visão nacional**
> Mapa ou grid consolidado com estado da distribuição em escala nacional — rupturas, disponibilidade, nível de serviço por região.
>
> **Tela 2 — Monitoramento de indicadores críticos**
> Painel de acompanhamento contínuo com hierarquia visual de alertas — rupturas em destaque, carregamentos em andamento, desvios de nível de serviço.
>
> **Tela 3 — Análise regional**
> Drill-down de uma região específica com contexto operacional completo — histórico, carregamentos, disponibilidade por produto.
>
> **Tela 4 — Detalhe de evento operacional**
> Investigação de ruptura ou desvio específico com rastreabilidade de causa e impacto.

---

## IMPACTO

**Subtítulo:** O sistema reduziu o esforço necessário para entender o estado da distribuição.

Quatro mudanças operacionais relevantes:

- **Rupturas identificadas com mais rapidez** — sinais críticos visíveis sem cruzamento manual de relatórios
- **Indicadores críticos continuamente visíveis** — sem depender de relatórios periódicos para ter uma leitura do estado da operação
- **Melhor coordenação entre áreas** — leitura compartilhada eliminando versões paralelas da operação
- **Fim da dependência de reconstrução manual de contexto** — o sistema entrega o contexto pronto para quem precisa agir

> **[LACUNA — MÉTRICAS]**
> Se disponíveis: tempo médio de identificação de rupturas antes/depois, volume de centros de distribuição monitorados, frequência de atualização dos indicadores, ou qualquer dado que a AmBev ou Qintess possam confirmar.

---

## REFLEXÕES

**Subtítulo:** Projetar para operações em escala exige aceitar que o problema raramente é falta de informação.

O problema quase sempre é falta de estrutura.

Quando a leitura operacional não existe, decisões dependem de esforço manual — e esforço manual em escala é caro e sujeito a erro.

Neste projeto, o papel do design foi construir essa leitura. Não como interface. Mas como sistema.

---

## PRÓXIMO PROJETO

Este projeto encerra a trilogia sobre design de sistemas operacionais complexos.

Na Petrobras, o desafio era acompanhar ocorrências ambientais em contexto offshore. Na Bayer, o problema era interpretar grandes volumes de dados agrícolas. Na AmBev, o foco foi tornar visível o estado de uma operação logística em escala.

Apesar de acontecerem em contextos diferentes, todos os projetos partem da mesma pergunta: como estruturar informação suficiente para que uma operação complexa possa ser compreendida enquanto está acontecendo?

---

## NOTAS PARA PRODUÇÃO DO SITE

### Diferenciação visual em relação aos outros cases

O Ambev é o único case com operação logística — escala geográfica, distribuição nacional, fluxo físico de produtos. A linguagem visual deve refletir isso.

Sugestões de direção visual:
- Mapa geográfico como elemento estrutural (não decorativo) — centros de distribuição, rotas, regiões
- Paleta: laranja AmBev como acento possível, mas usar com cuidado para não parecer branded. Alternativa: amarelo industrial / âmbar sobre fundo escuro neutro
- Indicadores com linguagem de operational dashboard — números grandes, hierarquia visual clara, estados de alerta explícitos

### Ponto de atenção editorial

Este é o único case com time de design explicitamente dividido: UX (Henrico + Andrea) e UI (Michelle + Afonso). Isso precisa ser comunicado com clareza no portfólio — qual foi especificamente o papel de Henrico dentro do time? Arquitetura de informação? Fluxo de decisão? Estrutura do sistema? Vale definir antes da publicação para não parecer que a autoria está diluída.

### Diagramas a produzir

1. Artefatos desconectados → estado anterior (relatórios, planilhas regionais, sistemas isolados)
2. Estado da operação como centro — modelo de centralização com 4 dimensões satélite
3. Arquitetura de 3 camadas — Monitoramento Nacional → Indicadores Críticos → Análise Contextual
4. *(opcional)* Hierarquia de sinais — disponibilidade, rupturas, carregamentos com prioridade visual

### Pendências antes da produção visual

- [ ] Período e duração do projeto *(ausentes — único case sem essa info)*
- [ ] Definição clara do papel de Henrico dentro do time (vs. Andrea Parente em UX, vs. UI team)
- [ ] Screenshots ou mockups das 4 telas principais
- [ ] Métricas de impacto (se disponíveis e publicáveis)
- [ ] Confirmação: o sistema era usado em centros de controle físicos com múltiplas telas? Qual era o hardware/contexto de uso?
