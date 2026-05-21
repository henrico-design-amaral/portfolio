# QA Audit — Seção Impacto e Cases

Este documento registra a auditoria de credibilidade e rastreabilidade das métricas publicadas no portfólio.

## Princípio de Verdade
Métricas devem ter lastro documental em `case-references/`. Se o dado for incerto ou representar um requisito obrigatório (ex: compliance), deve-se priorizar uma descrição qualitativa de impacto em vez de um número artificial ou promocional.

---

## 1. Seção IMPACTO (Hero Section)

| Métrica | Valor Atual | Lastro Documental | Confiança | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Automação (Petrobras)** | 95% | `docs/CASE_PETROBRAS.md:L91` + memória de auditoria anterior | **Alto** | ✅ Mantido |
| **Usuários (Petrobras)** | 400+ | Sem lastro localizado em docs/case-references textuais | **Baixo** | Removido da home |
| **Escala (Bayer)** | 4.000 pontos | Sem lastro localizado; `CASE_BAYER.md` marca métricas como lacuna | **Baixo** | Substituído por evidência qualitativa |
| **Arquitetura (Ambev)** | 6 módulos | Sem lastro localizado; `CASE_AMBEV.md` descreve 3 camadas, não 6 módulos | **Baixo** | Substituído por evidência qualitativa |
| **Abertura (BMG)** | Menos de 24 horas | Presente em `CASE_BMG.md` como resultado esperado, sem confirmação primária localizada | **Médio/Baixo** | Removido da home |
| **Compliance (BMG)** | Rastreabilidade / fluxo regulado | `CASE_BMG.md` + workshop de stakeholders | **Alto** | Mantido como qualitativo |

---

## 2. Seção IMPACTO (Refatoração Editorial)

As métricas foram reestruturadas para uma lógica de **evidências de impacto operacional**, priorizando a natureza técnica do dado sobre o tom promocional.

| Projeto | Dimensão | Evidência | Natureza |
| :--- | :--- | :--- | :--- |
| **Petrobras** | Automação operacional | 95% | Quantitativa documentada |
| **Bayer** | Dados agrícolas | Rastreabilidade de dados agrícolas | Qualitativa concreta |
| **Ambev** | Monitoramento logístico | Visibilidade de rupturas operacionais | Qualitativa concreta |
| **BMG** | Ambiente regulado | Fluxos regulados simplificados | Qualitativa concreta |

---

## 3. Ações Corretivas Aplicadas (V3 - Grid Editorial)

- [x] **Transição de "KPI Wall" para Bloco Editorial:** Abandono da lógica de números gigantes isolados em favor de cards descritivos comparáveis.
- [x] **Grid 2x2 de Cards Largos:** Implementação de layout split-card (Contexto + Evidência) para maior densidade de informação e ritmo visual.
- [x] **Normalização do Case BMG:** O impacto qualitativo ("Rastreabilidade completa") agora possui o mesmo peso visual e gramática que as métricas quantitativas.
- [x] **Motion Sofisticado:** Implementação de revelação progressiva (stagger) e animação de linhas internas para reforçar a natureza técnica da seção.
- [x] **Revisão 2026-05-21:** Remoção de métricas sem lastro textual suficiente na home; Bayer, Ambev e BMG passam a comunicar evidências qualitativas concretas sem inflar KPI.

## 4. Governança
- Requisitos obrigatórios de sistema, compliance ou rastreabilidade **não devem** ser apresentados como métricas promocionais de performance.
- Números performáticos devem ser evitados quando sugerirem uma precisão não comprovada documentalmente.
- **Estrutura Obrigatória (V3):** Todo card de impacto deve conter: Nome do Projeto, Dimensão, Evidência Principal, Descrição Editorial e Tag de Natureza Operacional.
- Quando uma métrica aparecer em documentação como hipótese, resultado esperado ou lacuna, ela não deve ser publicada como KPI quantitativo.
