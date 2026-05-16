# QA Audit — Seção Impacto e Cases

Este documento registra a auditoria de credibilidade e rastreabilidade das métricas publicadas no portfólio.

## Princípio de Verdade
Métricas devem ter lastro documental em `case-references/`. Se o dado for incerto ou representar um requisito obrigatório (ex: compliance), deve-se priorizar uma descrição qualitativa de impacto em vez de um número artificial ou promocional.

---

## 1. Seção IMPACTO (Hero Section)

| Métrica | Valor Atual | Lastro Documental | Confiança | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Automação (Petrobras)** | 95% | `SALA-CAR-sessao.md:L91` | **Alto** | ✅ Mantido |
| **Escala (Bayer)** | 4.000 pontos | N/A (Volume de tecnologias) | **Médio** | ✅ Sanitizado: "Pontos" |
| **Arquitetura (Ambev)** | 6 módulos | `CASE_AMBEV.md:L224` | **Médio** | ✅ Sanitizado: "Módulos" |
| **Compliance (BMG)** | Rastreabilidade | `CASE_BMG.md:L112` | **Alto** | ✅ Sanitizado: Qualitativo |

---

## 2. Seção IMPACTO (Refatoração Editorial)

As métricas foram reestruturadas para uma lógica de **evidências de impacto operacional**, priorizando a natureza técnica do dado sobre o tom promocional.

| Projeto | Dimensão | Evidência | Natureza |
| :--- | :--- | :--- | :--- |
| **Petrobras** | Automação operacional | 95% | Automação |
| **Bayer** | Escala de dados | 4.000 pontos | Dados agrícolas |
| **Ambev** | Arquitetura modular | 6 módulos | Operação |
| **BMG** | Ambiente regulado | Rastreabilidade | Compliance |

---

## 3. Ações Corretivas Aplicadas (V3 - Grid Editorial)

- [x] **Transição de "KPI Wall" para Bloco Editorial:** Abandono da lógica de números gigantes isolados em favor de cards descritivos comparáveis.
- [x] **Grid 2x2 de Cards Largos:** Implementação de layout split-card (Contexto + Evidência) para maior densidade de informação e ritmo visual.
- [x] **Normalização do Case BMG:** O impacto qualitativo ("Rastreabilidade completa") agora possui o mesmo peso visual e gramática que as métricas quantitativas.
- [x] **Motion Sofisticado:** Implementação de revelação progressiva (stagger) e animação de linhas internas para reforçar a natureza técnica da seção.

## 4. Governança
- Requisitos obrigatórios de sistema, compliance ou rastreabilidade **não devem** ser apresentados como métricas promocionais de performance.
- Números performáticos devem ser evitados quando sugerirem uma precisão não comprovada documentalmente.
- **Estrutura Obrigatória (V3):** Todo card de impacto deve conter: Nome do Projeto, Dimensão, Evidência Principal, Descrição Editorial e Tag de Natureza Operacional.
