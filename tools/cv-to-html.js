const fs = require('fs');
const path = require('path');

const cvHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Henrico Amaral — Currículo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', -apple-system, sans-serif;
      font-size: 10.5pt;
      line-height: 1.55;
      color: #1a1a1a;
      background: #fff;
      max-width: 210mm;
      margin: 0 auto;
      padding: 18mm 20mm;
    }
    @page { size: A4; margin: 0; }
    @media print {
      body { padding: 0; }
      .page { padding: 18mm 20mm; min-height: 297mm; display: flex; flex-direction: column; }
      .no-break { page-break-inside: avoid; }
    }
    h1 {
      font-family: 'Syne', sans-serif;
      font-size: 26pt;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #1a1a1a;
      margin-bottom: 2pt;
      line-height: 1.1;
    }
    .subtitle {
      font-family: 'Syne', sans-serif;
      font-size: 10pt;
      font-weight: 500;
      color: #BE9C6E;
      letter-spacing: 0.02em;
      margin-bottom: 14pt;
    }
    .contact-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 6pt 14pt;
      font-size: 8.5pt;
      color: #666;
      margin-bottom: 16pt;
      border-bottom: 1px solid #e8e4dd;
      padding-bottom: 12pt;
    }
    .contact-bar a { color: #666; text-decoration: none; }
    .contact-bar a:hover { color: #BE9C6E; }
    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 11pt;
      font-weight: 600;
      color: #1a1a1a;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      margin-bottom: 8pt;
      margin-top: 16pt;
      padding-top: 10pt;
      border-top: 1.5px solid #e8e4dd;
    }
    h2:first-of-type { border-top: none; margin-top: 0; padding-top: 0; }
    p { margin-bottom: 7pt; font-size: 10pt; color: #333; }
    ul { list-style: none; padding: 0; margin-bottom: 6pt; }
    li {
      padding: 3pt 0 3pt 12pt;
      position: relative;
      font-size: 9.5pt;
      color: #444;
      line-height: 1.45;
    }
    li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10pt;
      width: 4pt;
      height: 4pt;
      border-radius: 50%;
      background: #BE9C6E;
    }
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .section-header .meta { font-size: 8pt; color: #999; font-weight: 400; text-transform: none; }
    .footnote {
      margin-top: auto;
      padding-top: 12pt;
      border-top: 1px solid #e8e4dd;
      font-size: 8pt;
      color: #999;
    }
    .kpi {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9pt;
      color: #BE9C6E;
      font-weight: 500;
    }
    .pill {
      display: inline-block;
      font-size: 7.5pt;
      color: #888;
      border: 1px solid #ddd;
      border-radius: 3px;
      padding: 1pt 5pt;
      margin: 1pt 2pt;
      font-weight: 500;
    }
  </style>
</head>
<body>
  <div class="page">
    <h1>Henrico Amaral</h1>
    <div class="subtitle">Senior Product Designer · Decision Infrastructure</div>

    <div class="contact-bar">
      <span>henricoamaral.design@gmail.com</span>
      <a href="https://www.linkedin.com/in/henrico-amaral/">linkedin.com/in/henrico-amaral/</a>
      <a href="https://henrico-design-amaral.github.io/portfolio/">henrico-design-amaral.github.io/portfolio</a>
      <span>São Paulo, SP</span>
    </div>

    <h2>Perfil</h2>
    <p>Há aproximadamente 20 anos, estrutura produtos digitais onde a interface é a camada visível de problemas maiores: fluxos operacionais, tomada de decisão, regras de negócio, dados, restrições técnicas e coordenação entre áreas. Atua na interseção entre produto, operação, tecnologia e decisão — combinando design, IA e pensamento sistêmico para transformar complexidade em sistemas mais claros, operáveis e sustentáveis.</p>

    <h2>Foco de Atuação</h2>
    <ul>
      <li>Arquitetura de informação</li>
      <li>Plataformas internas</li>
      <li>Produtos B2B e enterprise</li>
      <li>Sistemas regulados</li>
      <li>Operações críticas</li>
      <li>Visualização operacional</li>
      <li>Design systems</li>
      <li>IA aplicada ao design e diagnóstico de produto</li>
    </ul>

    <h2>Experiência em Contextos Enterprise</h2>
    <p>Projetos e produtos para empresas como <strong>Petrobras</strong>, <strong>Bayer</strong>, <strong>Ambev</strong>, <strong>Banco do Brasil</strong>, <strong>Bradesco</strong>, <strong>Claro</strong>, <strong>Globo</strong>, <strong>iFood</strong> e <strong>BMG</strong>.</p>

    <h2>Cases em Destaque</h2>

    <div class="no-break">
      <p><strong>Petrobras</strong> — Plataforma de integridade de poços com georreferenciamento<br>
      <span class="kpi">95%</span> de redução de falhas de integridade — design de interface crítica para operações de produção</p>
    </div>

    <div class="no-break">
      <p><strong>Bayer</strong> — Plataforma de rastreabilidade de dados agrícolas<br>
      Estruturação de informação e visualização operacional para cadeia produtiva do agronegócio</p>
    </div>

    <div class="no-break">
      <p><strong>Ambev</strong> — Ferramenta interna de visibilidade de rupturas operacionais<br>
      Design de produto para monitoramento e resposta rápida em operações logísticas</p>
    </div>

    <div class="no-break">
      <p><strong>BMG</strong> — Sistema de fluxos regulados simplificados<br>
      Redesenho de processos financeiros em ambiente regulado com restrições de compliance</p>
    </div>

    <h2>Ferramentas &amp; Métodos</h2>
    <p>
      <span class="pill">Figma</span>
      <span class="pill">FigJam</span>
      <span class="pill">Miro</span>
      <span class="pill">Notion</span>
      <span class="pill">Power BI</span>
      <span class="pill">AccessMonitor</span>
      <span class="pill">ChatGPT</span>
      <span class="pill">Claude</span>
      <span class="pill">Gemini</span>
      <span class="pill">GitHub</span>
      <span class="pill">Sistemas regulados</span>
      <span class="pill">Design Systems</span>
      <span class="pill">Arquitetura de Informação</span>
      <span class="pill">Pensamento Sistêmico</span>
    </p>

    <div class="footnote">
      Pense simples. Faça melhor. Torne-se inevitável.
    </div>
  </div>
</body>
</html>`;

const outDir = path.join(__dirname, '..', 'docs');
fs.writeFileSync(path.join(outDir, 'Henrico-Amaral-CV.html'), cvHtml, 'utf-8');
console.log('CV HTML written to docs/Henrico-Amaral-CV.html');
