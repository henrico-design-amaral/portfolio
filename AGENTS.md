# AGENTS.md — Portfolio Henrico Amaral

Estas regras valem para o projeto Portfolio.

## 1. Objetivo do projeto

Este portfolio deve posicionar Henrico Amaral como Product Designer sênior especializado em:

- sistemas complexos
- plataformas operacionais
- ambientes enterprise
- operações críticas
- visualização de decisão
- estruturação de fluxos e informação
- produtos digitais com alta complexidade operacional

O projeto não deve parecer um portfolio visual genérico.

A estética deve ser:
- editorial
- técnica
- sóbria
- precisa
- minimalista
- orientada à narrativa
- compatível com sistemas enterprise

## 2. Narrativa da home

A home deve funcionar como uma narrativa progressiva:

1. Hero
Apresenta posicionamento, promessa central e direção editorial.

2. Método
Explica a forma de pensar, investigar e estruturar problemas.

3. Cases
Mostra evidência concreta de repertório.

4. Impacto
Conecta design com clareza operacional, decisão e consequência.

5. Sobre
Humaniza sem virar autobiografia genérica.

6. Contato
Fecha com autoridade, clareza e chamada objetiva.

Nenhuma seção deve parecer decorativa.

## 3. Regras visuais

Preservar:
- estética escura editorial
- grids sutis
- motion discreto
- atmosfera técnica
- textos grandes com boa respiração
- microtextos editoriais
- contraste entre fundos escuros e acentos precisos
- sensação de sistema visual contínuo

Evitar:
- visual SaaS genérico
- efeitos chamativos
- animações rápidas
- excesso de cards
- excesso de blur
- gradientes sem intenção
- aparência de template
- futurismo artificial

## 4. Backgrounds e motion

Os backgrounds devem parecer parte de uma narrativa única.

A home não deve parecer uma coleção de blocos isolados.

Motion deve ser:
- sutil
- lento
- elegante
- quase imperceptível
- subordinado ao conteúdo

Nunca usar motion que dispute atenção com o texto.

## 5. Texto e copy

O texto deve ser:
- claro
- humano
- estratégico
- direto
- sem jargão vazio
- sem tom acadêmico
- sem autoelogio exagerado
- sem frases motivacionais

Comunicar senioridade por precisão, não por grandiosidade.

Evitar clichês como:
- transformar complexidade em clareza
- experiências incríveis
- soluções inovadoras
- design centrado no usuário, quando usado sem contexto
- impacto estratégico, quando usado sem evidência

Preferir vocabulário como:
- decisão
- sistema
- operação
- contexto
- trade-off
- clareza
- estrutura
- consequência
- restrição
- evidência

## 6. Cases principais

Os cases principais são:

- Petrobras / SALACAR
- Bayer
- Ambev
- BMG

Tratamento conceitual:

Petrobras:
operação crítica offshore, resposta ambiental, coordenação operacional e inteligência geoespacial.

Bayer:
interpretação, validação e governança de dados agrícolas.

Ambev:
monitoramento logístico, priorização operacional e escala nacional.

BMG:
jornada bancária PJ, onboarding, conta corrente, serviços financeiros e integração com adquirência.

A seção de cases deve vender repertório e decisão, não apenas estética.

## 7. Imagens e assets

As imagens dos cases usam WebP.

Antes de trocar qualquer imagem, verificar:
- caminho no HTML
- caminho no CSS
- peso do arquivo
- proporção
- consistência visual
- fallback se necessário

Não deixar referências quebradas para .png quando o arquivo final estiver em .webp.

## 8. Design system

Arquivos de design system ficam em:

docs/

Não deixar documentação solta na raiz se ela pertence ao design system.

Links devem apontar corretamente para:

docs/design-system.html
docs/design-system-v2.html
docs/design-system-v3.html

## 9. Modo de trabalho obrigatório

Antes de alterar:
1. rodar git status
2. confirmar branch
3. listar arquivos afetados
4. explicar risco
5. propor plano curto

Durante alteração:
- mexer em poucos arquivos por vez
- não misturar refactor estrutural com alteração visual pesada
- não alterar copy e layout ao mesmo tempo sem necessidade
- não criar novos arquivos se uma alteração localizada resolver

Depois de alterar:
1. indicar o que mudou
2. indicar como testar
3. sugerir commit
4. apontar pendências

## 10. Critério de aceite

Uma alteração só é boa se:

- melhora a narrativa
- reduz inconsistência
- preserva senioridade
- não quebra responsividade
- não quebra links
- não aumenta ruído visual
- não cria dívida técnica desnecessária
- mantém coerência com o posicionamento do portfolio

## 11. Proibições

Não fazer:
- reescrita completa sem pedido explícito
- alteração massiva em múltiplas seções sem plano
- remoção de conteúdo sem justificativa
- criação de componentes duplicados
- troca de estética sem explicar o motivo
- mudança direta na main em tarefas complexas
- commit automático sem aprovação humana
