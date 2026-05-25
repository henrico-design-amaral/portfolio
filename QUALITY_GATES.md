# QUALITY GATES — Portfolio

## Antes de alterar arquivos

- [ ] Confirmar branch atual.
- [ ] Rodar `git status -sb`.
- [ ] Ler `PROJECT_CONTROL.md`, `AGENTS.md`, `GEMINI.md` e `HANDOFF.md`.
- [ ] Separar escopo permitido e fora do escopo.
- [ ] Listar arquivos provavelmente afetados.
- [ ] Não alterar arquivos durante auditoria.
- [ ] Não trabalhar direto na `main` para mudanças estruturais.

## Antes de commit

- [ ] Rodar `git diff --stat`.
- [ ] Revisar arquivos alterados.
- [ ] Garantir que os arquivos pertencem ao mesmo escopo.
- [ ] Não incluir API keys, secrets ou arquivos de ambiente.
- [ ] Não incluir arquivos temporários.
- [ ] Testar manualmente quando envolver interface.
- [ ] Rodar PSI quando envolver performance, SEO ou acessibilidade relevante.
- [ ] Usar mensagem de commit clara.

## Antes de PR

- [ ] 1 PR = 1 tipo de mudança.
- [ ] Título objetivo.
- [ ] Descrição com o que foi feito.
- [ ] Descrição com fora do escopo.
- [ ] Riscos conhecidos declarados.
- [ ] Próximos passos separados.
- [ ] Nenhum arquivo de escopo estranho incluído.

## Antes de merge

- [ ] PR revisado.
- [ ] Branch comparada com `main`.
- [ ] Nenhuma alteração acidental em HTML/CSS/JS quando o PR for documental.
- [ ] Status final limpo.

## Antes de nova sessão

- [ ] Ler `HANDOFF.md`.
- [ ] Ler `TASKS.md`.
- [ ] Ler `DECISIONS.md`.
- [ ] Verificar `git status -sb`.
- [ ] Retomar pelo menor próximo passo seguro.
