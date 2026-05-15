# DO NOT REPEAT — Portfolio

Este arquivo registra soluções, padrões e abordagens que não devem ser repetidos no Portfolio.

Antes de propor ou executar qualquer alteração, verificar este arquivo.

## Não repetir no posicionamento

Não apresentar Henrico como:

- designer visual genérico
- criador de telas bonitas
- UX designer com discurso comum
- profissional baseado apenas em estética
- executor de landing pages
- perfil júnior ou intermediário

## Não repetir na escrita

Evitar:

- experiências incríveis
- soluções inovadoras
- design centrado no usuário
- interfaces intuitivas
- jornadas fluidas
- transformação digital
- impacto positivo
- paixão por design
- design que encanta
- experiências memoráveis
- elevar a experiência do usuário

Essas expressões são genéricas e enfraquecem o posicionamento.

## Não repetir no visual

Evitar:

- visual genérico de SaaS
- template premium comum
- excesso de glow
- excesso de gradiente
- grid forte demais
- cyberpunk
- sci-fi genérico
- dashboard falso futurista
- glassmorphism gratuito
- cards decorativos sem função
- motion chamativo
- background competindo com conteúdo
- contraste baixo em texto importante
- texto pequeno demais para parecer sofisticado

## Não repetir na estrutura

Evitar:

- alterar uma seção sem comparar com o site inteiro
- criar variações visuais isoladas
- duplicar componentes
- reescrever tudo sem necessidade
- instalar dependências sem justificativa
- misturar memória global com memória local
- commitar fora da pasta Portfolio
- usar OLD_portfolio como base sem pedido explícito
- **Não usar comandos NPM/Node**: O projeto é puramente estático; não tente rodar `npm install` ou `npm run` a menos que um `package.json` seja explicitamente introduzido.
- **Não quebrar o monolito sem plano**: Apesar de grande, o `index.html` é o local de todas as seções. Não tente separar arquivos sem um plano de build (ex: Vite).
- **Não alterar tokens no site.css sem verificar index.html**: O Tailwind é configurado inline no HTML; alterações no CSS global devem respeitar os tokens definidos no script de config do Tailwind.

## Não repetir no processo

Evitar:

- começar pelo código sem ler a memória
- aceitar pedido literal sem avaliar impacto
- deixar decisões importantes sem registro
- ignorar problemas abertos
- tratar inferência como fato
- fingir que algo foi confirmado sem ler arquivos
- não atualizar changelog após decisão relevante

## Regra final

Se uma solução parecer genérica, decorativa ou desconectada do posicionamento de Henrico, não usar.

## Não manter bibliotecas de agentes dentro do Portfolio

Não adicionar ao projeto:

- _agents/
- _agents/skills/
- bibliotecas completas de prompts
- repositórios externos de skills
- clones de agentes
- frameworks auxiliares que não façam parte do site publicado

Esses materiais devem ficar em bibliotecas globais fora do projeto.

O Portfolio deve conter apenas arquivos necessários ao site, documentação, memória local e assets reais do portfólio.