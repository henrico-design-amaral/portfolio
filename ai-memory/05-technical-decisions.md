# TECHNICAL DECISIONS — Portfolio_v2

Este arquivo registra decisões técnicas do projeto Portfolio_v2.

Ele deve ser atualizado após inspeção do código real e sempre que uma decisão técnica relevante for tomada.

## Status

Pendente de confirmação pelo código atual.

Não assumir stack, framework, bibliotecas ou estrutura sem verificar os arquivos reais do projeto.

## Regras técnicas gerais

Antes de alterar qualquer código:

1. Identificar o framework usado.
2. Verificar package.json.
3. Verificar estrutura de pastas.
4. Verificar scripts disponíveis.
5. Verificar componentes existentes.
6. Verificar padrões de estilo.
7. Verificar build antes de mudanças grandes.
8. Evitar dependências desnecessárias.
9. Evitar refatoração ampla sem necessidade.
10. Preservar responsividade e acessibilidade.

## Regras de alteração

Preferir:

- alterações incrementais
- componentes reutilizáveis
- nomes semânticos
- padrões existentes
- estilos consistentes
- código legível
- remoção de duplicação quando segura

Evitar:

- reescrever tudo
- instalar biblioteca por conveniência
- duplicar componentes
- criar estilos isolados
- quebrar rotas
- alterar configuração sem motivo
- mexer em build sem necessidade
- remover código funcional sem justificativa

## Memória técnica a preencher

Após inspeção do projeto, registrar:

### Framework

Pendente.

### Linguagem

Pendente.

### Estilização

Pendente.

### Bibliotecas principais

Pendente.

### Scripts disponíveis

Pendente.

### Estrutura de pastas

Pendente.

### Componentes principais

Pendente.

### Padrões de layout

Pendente.

### Padrões de motion

Pendente.

### Estratégia de deploy

Pendente.

## Git

Commits devem ocorrer apenas dentro de:

/Portfolio_v2

Nunca commitar a partir de:

/!PROJETOS

## Antes de commit

Executar:

git status

Confirmar que apenas arquivos do Portfolio_v2 estão alterados.

## Tipos de commit recomendados

- system(memory)
- design(section)
- content(section)
- fix(layout)
- docs(memory)
- refactor(component)
- chore(config)

## Riscos conhecidos

- alterar seções sem comparar com o sistema geral
- criar variações visuais isoladas
- quebrar responsividade mobile
- deixar background competir com texto
- misturar memória global com memória local
- commitar na pasta errada

## Regra final

Toda decisão técnica relevante deve ser documentada aqui com:

- data
- decisão
- motivo
- arquivos afetados
- impacto
- risco