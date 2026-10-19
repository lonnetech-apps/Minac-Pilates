# MINAC - Pilates e Fisioterapia

Landing page moderna, responsiva e de alta conversão para a clínica **MINAC Pilates e Fisioterapia**.

Criada com **React 19**, **Vite**, **Tailwind CSS**, **Lucide Icons** e **Motion**.

---

## 🚀 Como abrir e deixar online no GitHub Pages

O projeto já está 100% configurado para o GitHub Pages com caminhos relativos (`base: './'`) e arquivo de workflow automatizado.

Escolha uma das 2 opções abaixo para colocar no ar:

---

### Opção 1: Automático via GitHub Actions (Recomendado)

1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment** > **Source**, mude de *"Deploy from a branch"* para:
   👉 **GitHub Actions**
4. Pronto! O GitHub executará o workflow `.github/workflows/deploy.yml` automaticamente.
5. Em cerca de 1 minuto, na mesma página **Settings > Pages** ou na aba **Actions**, aparecerá o link público do seu site:
   `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`

---

### Opção 2: Publicar com um único comando (`npm run deploy`)

Se você preferir publicar diretamente pelo terminal:

1. Execute no terminal:
   ```bash
   npm run deploy
   ```
2. Esse comando compila o projeto e cria automaticamente a branch `gh-pages` no seu repositório.
3. No GitHub, vá em **Settings** > **Pages** e certifique-se de que a branch selecionada é `gh-pages` e a pasta é `/ (root)`.
4. O link público estará ativo na hora!

---

## 🛠️ Comandos Locais

- **Instalar dependências:** `npm install`
- **Rodar em desenvolvimento:** `npm run dev`
- **Gerar versão de produção:** `npm run build`
- **Testar build localmente:** `npm run preview`

---

## ✨ Recursos Implementados

- **Design Fiel à Identidade:** Cores terracota (`#B85B38`), verde oliva (`#3D4739`), areia e tipografia editorial clássica.
- **Hero Completo:** Slogan "MOVIMENTO • EQUILÍBRIO • BEM-ESTAR", chamada principal, foto em estúdio e botão com ação direta para WhatsApp.
- **Faixa de Diferenciais:** Atendimento individualizado (máx. 2 alunos), profissionais qualificados, ambiente acolhedor e aromaterapia clínica.
- **Seção de Serviços:** Cards interativos para Pilates, Fisioterapia, Terapias Manuais e Aromaterapia Clínica com modal de detalhes e agendamento.
- **Seção "Para quem é?":** Lista de indicações clínicas (dores na coluna, lesões, postura).
- **Seção "Nossa Equipe":** Perfil da fisioterapeuta, frase lema caligráfica e credenciais completas.
- **Formulário de Agendamento:** Disparo de mensagens personalizadas diretamente para o WhatsApp `(11) 91663-6635`.
- **Botão Flutuante de WhatsApp:** Acesso rápido permanente em mobile e desktop.
- **Totalmente Responsivo:** Perfeita adaptação para celulares, tablets e telas widescreen.
