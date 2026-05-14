# CASE — BAYER PLATFORM
## Documento consolidado: narrativa estruturada + lacunas para produção

Fonte: texto do portfólio (abril 2026)
Status: narrativa consolidada — visuais e mockups pendentes

---

## METADADOS DO PROJETO

| Campo | Valor |
|---|---|
| Product Designer | Henrico Amaral |
| UX Researcher | Maria Antonieta Santos |
| Empresa | MaxxiData |
| Cliente | Bayer |
| Período | Dezembro 2021 — Março 2022 |
| Duração | 4 meses |
| Sistema | Plataforma de Dados Agrícolas — análise técnica e validação de tecnologias |
| Plataforma | Web — sistema interno |

**Colaboradores envolvidos:**
- Engenharia
- Especialistas agronômicos
- Times comerciais
- Gestão técnica
- Pesquisa com usuários

**Contexto de uso:**
Sistema interno utilizado para análise técnica de culturas agrícolas (soja, algodão), validação institucional de tecnologias e licenciamento de soluções agrícolas.

---

## HERO

**Pergunta de abertura (lede):**
Um especialista precisa decidir se uma tecnologia agrícola pode ser validada para uso em determinada cultura e região.

**Contexto narrativo:**
Os dados existem. Resultados de testes, desempenho por safra, comparações regionais, histórico técnico.

O problema é outro.

Essas informações estão espalhadas entre relatórios, planilhas e sistemas diferentes. Antes de interpretar o cenário, é preciso montar manualmente o contexto da análise.

A plataforma foi criada para resolver esse ponto. Organizar dados agrícolas e processos de validação técnica em um único sistema que apoia decisões sobre o uso de tecnologias no campo.

> **[LACUNA VISUAL]** Imagem ou mockup de abertura do hero.
> Sugestão: painel de análise comparativa com dados de culturas e indicadores regionais, sobre fundo fotográfico agrícola ou abstrato técnico.

---

## RESUMO DO PROJETO

Especialistas precisavam analisar dados técnicos distribuídos entre diferentes ferramentas. A análise dependia de consolidação manual antes da interpretação.

O sistema reorganizou essas informações em torno da **cultura agrícola como unidade central de análise**, conectando dados técnicos, comparação de indicadores e registro de decisões dentro de um único fluxo.

O resultado foi maior clareza na leitura de cenários agrícolas e melhor rastreabilidade das decisões técnicas.

---

## CONTEXTO OPERACIONAL

**Subtítulo:** A validação de tecnologias agrícolas depende de leitura cuidadosa de dados técnicos.

Especialistas analisam desempenho por cultura, comportamento regional, resultados de testes e histórico de safras antes de recomendar o uso de uma tecnologia.

Esse processo envolve diferentes áreas — especialistas agronômicos, equipes comerciais, gestão técnica e áreas institucionais — cada uma com sua perspectiva e seus próprios registros.

Antes da plataforma, essas análises aconteciam de forma fragmentada. Dados eram consultados em sistemas distintos. Comparações eram feitas em planilhas. Decisões eram registradas em documentos separados.

A interpretação do cenário dependia da capacidade individual de reunir informação suficiente.

---

## O DESAFIO

**Subtítulo:** O sistema anterior não falhava por falta de dados. Falhava por falta de estrutura.

Especialistas tinham acesso à informação necessária, mas não conseguiam acompanhar o contexto completo da análise dentro de um único fluxo.

Isso gerava três problemas principais:

**01 — Fragmentação de informação**
Dados técnicos relevantes estavam distribuídos entre ferramentas sem conexão entre si.

**02 — Baixa rastreabilidade de decisões técnicas**
O registro das decisões acontecia fora do ambiente de análise, quebrando a continuidade do processo.

**03 — Dependência de consolidação manual**
Antes de qualquer interpretação, o especialista precisava montar o contexto da análise manualmente — esforço que deveria ser zero.

O desafio era estruturar um sistema capaz de acompanhar o ciclo completo da interpretação técnica.

---

## RESTRIÇÕES

Quatro restrições definiram o escopo do projeto:

**01 — Heterogeneidade dos dados**
Os dados vinham de múltiplos sistemas internos com estruturas diferentes. Integração sem perda de granularidade era necessária.

**02 — Variabilidade técnica**
Indicadores variavam entre culturas e regiões. O sistema precisava acomodar essa variação sem perder legibilidade.

**03 — Profundidade sem simplificação**
O sistema precisava manter profundidade técnica sem simplificar excessivamente a informação — especialistas continuariam precisando de acesso a dados completos.

**04 — Auditabilidade**
Decisões técnicas precisavam permanecer registradas de forma auditável. Rastreabilidade era requisito institucional, não opcional.

**05 — Respeito ao processo existente**
O sistema deveria se adaptar ao processo existente de validação tecnológica, não substituí-lo completamente.

---

## DISCOVERY

A investigação começou pela análise dos artefatos utilizados pelas equipes:

- Planilhas de comparação
- Relatórios técnicos
- Formulários de validação
- Documentos institucionais

Esses materiais mostraram que o maior esforço da análise não estava na interpretação dos dados. **Estava na montagem do contexto necessário para interpretar o cenário.**

Também ficou claro que decisões técnicas eram registradas fora do ambiente de análise — o que quebrava a continuidade do processo e dificultava rastreabilidade posterior.

> **[LACUNA VISUAL]** Diagrama ou composição visual dos artefatos analisados.
> Sugestão: artefatos desconectados convergindo para o ponto central de análise — análogo ao diagrama de fragmentação do Petrobras.

---

## PRINCIPAIS INSIGHTS

**01** — A informação necessária para análise já existia, mas estava distribuída entre diferentes sistemas.

**02** — Especialistas precisavam montar manualmente o contexto antes de interpretar indicadores.

**03** — Comparação entre culturas, regiões e tecnologias era parte central do raciocínio técnico — não um recurso secundário.

**04** — O registro das decisões não acontecia no mesmo ambiente onde a análise era feita.

**05** — A fragmentação aumentava o esforço necessário para validar tecnologias, criando variação entre análises feitas por diferentes especialistas.

---

## DEFINIÇÃO DO PROBLEMA

Como estruturar um sistema capaz de organizar dados agrícolas complexos em torno da cultura analisada, permitindo interpretar cenários técnicos e registrar decisões dentro de um fluxo contínuo?

---

## ESTRATÉGIA

**Subtítulo:** A decisão estrutural foi definir a cultura agrícola como unidade central de análise.

Em vez de navegar por bases de dados isoladas, especialistas passam a acompanhar o desempenho técnico diretamente no contexto da cultura avaliada.

Essa mudança aproxima o sistema do modelo mental real da operação — especialistas já pensam em termos de cultura, região e ciclo de safra. O sistema passou a seguir essa lógica em vez de impor uma navegação orientada a sistemas de dados.

> **[LACUNA VISUAL]** Diagrama da estratégia de centralização.
> Sugestão: Cultura no centro, com Dados Técnicos / Análise Comparativa / Validação / Documentação como módulos satélite.

---

## VISÃO DO SISTEMA

**Subtítulo:** A estratégia se materializa em quatro módulos conectados.

### DIAGRAMA — Arquitetura de módulos

```
Dados da cultura
(Indicadores técnicos e histórico de desempenho)
         │
         ↓
Análise comparativa
(Comparação entre regiões, períodos e tecnologias)
         │
         ↓
Fluxo de validação
(Registro de análises e pareceres técnicos)
         │
         ↓
Documentação institucional
(Histórico de decisões e justificativas técnicas)
```

Esses módulos estruturam a análise como um processo contínuo — do dado bruto à decisão auditável.

> **[LACUNA VISUAL]** Versão visual do diagrama acima.
> Sugestão: pipeline horizontal ou vertical com ícones por módulo.

---

## PRINCIPAIS DECISÕES DE DESIGN

**Subtítulo:** O sistema foi definido por decisões estruturais, não por telas isoladas.

---

**01 — Definir a cultura como unidade central de análise**
A navegação passou a seguir o objeto real da decisão técnica.
*Impacto:* redução do esforço necessário para montar contexto de análise.

---

**02 — Separar análise técnica e validação institucional em camadas conectadas**
Permitiu acompanhar o raciocínio técnico sem perder rastreabilidade formal.
*Impacto:* continuidade entre interpretação e decisão.

---

**03 — Priorizar comparação entre cenários como eixo da leitura**
Indicadores isolados não explicam desempenho agrícola. A análise exige contraste — entre regiões, entre safras, entre tecnologias.
*Impacto:* interfaces orientadas à interpretação de variações, não à exibição de métricas individuais.

---

**04 — Registrar decisões dentro do fluxo analítico**
Eliminou a dependência de documentos externos para registro de pareceres e validações.
*Impacto:* maior rastreabilidade institucional.

---

**05 — Controlar densidade informacional sem reduzir profundidade técnica**
Especialistas continuam acessando dados completos — a apresentação foi estruturada para não sobrecarregar a leitura.
*Impacto:* equilíbrio entre clareza e precisão técnica.

---

## SOLUÇÃO

**Subtítulo:** A plataforma reorganiza o fluxo de análise agrícola em torno da cultura avaliada.

Especialistas acessam indicadores técnicos, comparam desempenho regional, analisam resultados históricos e registram decisões dentro do próprio sistema.

A análise deixa de depender de consolidação manual e passa a acontecer dentro de um ambiente contínuo.

O sistema conecta interpretação técnica e validação institucional — o que antes eram etapas separadas em ferramentas diferentes passa a ser um fluxo único.

> **[LACUNAS VISUAIS — TELAS]** Interfaces a documentar quando os mockups estiverem disponíveis:
>
> **Tela 1 — Visão da cultura**
> Painel principal da cultura selecionada com indicadores técnicos e histórico de desempenho por safra.
>
> **Tela 2 — Análise comparativa**
> Comparação de desempenho entre regiões, períodos ou tecnologias aplicadas à mesma cultura.
>
> **Tela 3 — Fluxo de validação**
> Registro de análise técnica com campos estruturados para parecer e decisão.
>
> **Tela 4 — Documentação institucional**
> Histórico de decisões com justificativas e rastreabilidade por cultura/tecnologia.

---

## IMPACTO

**Subtítulo:** A plataforma reduziu a fragmentação do processo de análise agrícola.

Especialistas passaram a acompanhar o contexto completo da decisão dentro de um único sistema.

Três mudanças operacionais relevantes:

- **Menor dependência de planilhas paralelas** — dados técnicos passaram a estar acessíveis dentro do próprio fluxo de análise
- **Maior rastreabilidade das decisões técnicas** — pareceres e validações registrados no sistema, não em documentos externos
- **Maior consistência entre análises** — diferentes especialistas operando sobre a mesma estrutura de dados, reduzindo variação nos processos

A interpretação deixou de ser um esforço individual e passou a fazer parte de um fluxo estruturado.

> **[LACUNA — MÉTRICAS]**
> Se existirem e puderem ser publicados: volume de tecnologias validadas pelo sistema, redução de tempo de análise, número de culturas monitoradas, ou qualquer dado que o cliente possa confirmar.

---

## REFLEXÕES

**Subtítulo:** Projetar sistemas para especialistas exige trabalhar com complexidade real, não simplificações artificiais.

Neste projeto, o principal desafio não era visualizar dados. Era estruturar a relação entre análise e decisão.

Especialistas agronômicos não precisam de dashboards mais bonitos. Precisam de um sistema que acompanhe o raciocínio técnico deles — que entenda que a análise de uma cultura não é uma consulta pontual, mas um processo com histórico, comparações e decisões encadeadas.

Quando o sistema acompanha esse raciocínio, ele deixa de ser apenas uma ferramenta de consulta e passa a funcionar como parte do processo institucional.

---

## PRÓXIMO PROJETO

Se neste projeto o desafio foi estruturar a interpretação de dados agrícolas, o próximo explora outra dimensão da complexidade operacional.

Monitorar o estado de uma operação logística em escala industrial e tornar visíveis eventos distribuídos ao longo de toda a cadeia de abastecimento.

---

## NOTAS PARA PRODUÇÃO DO SITE

### Diferenciação visual em relação ao Petrobras

Este case precisa ter personalidade visual própria. O Petrobras usa fotografia offshore, paleta escura com acento vermelho/laranja. O Bayer deve evocar o contexto agrícola de forma técnica — não stock de fazenda, mas precisão, escala, análise.

Sugestões de direção visual:
- Fotografia de lavoura em larga escala, baixo contraste, tratamento técnico
- Paleta: verde musgo escuro, cinza técnico, amarelo âmbar como acento (agrícola sem parecer marketing rural)
- Diagramas com mais densidade de informação — série temporal, comparação de indicadores

### Diagramas a produzir

1. Artefatos desconectados → estado anterior (planilhas, relatórios, formulários convergindo para análise)
2. Cultura como centro — modelo de centralização (4 módulos satélite)
3. Pipeline de módulos — Dados → Comparação → Validação → Documentação
4. *(opcional)* Exemplo de análise comparativa — como indicadores variam entre regiões/safras

### Pendências antes da produção visual

- [ ] Screenshots ou mockups das 4 telas principais
- [ ] Métricas de impacto (se disponíveis e publicáveis)
- [ ] Nome do UX Researcher / colaborador de design (se houver)
- [ ] Exemplos concretos de culturas, indicadores ou regiões usados no sistema (mesmo que anonimizados)
- [ ] Confirmação: o sistema era web interno? desktop? ambos?
