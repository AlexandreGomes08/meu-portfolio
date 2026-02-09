# Alexandre Gomes - Portfolio

Este é o monorepo do meu portfólio pessoal e ecossistema de soluções digitais. O projeto foi desenvolvido com uma arquitetura moderna, escalável e focada na melhor experiência do usuário.

## 🚀 Tecnologias

O ecossistema é composto pelas seguintes tecnologias principais:

- **Frontend:** [Next.js](https://nextjs.org/) (React) com Estilização via Tailwind CSS.
- **Backend:** [NestJS](https://nestjs.com/) com [Prisma ORM](https://www.prisma.io/).
- **Banco de Dados:** [Supabase](https://supabase.com/) (PostgreSQL).
- **Agente de IA:** Integrado via [n8n](https://n8n.io/) para automação e assistência inteligente.
- **Animações:** [Framer Motion](https://www.framer.com/motion/) e [AOS](https://michalsnik.github.io/aos/).
- **Deployment:** [Fly.io](https://fly.io/) e [Vercel](https://vercel.com/).

## 📁 Estrutura do Projeto

```bash
 me-portfolio/
 ├── frontend/      # Aplicação Next.js (Portfólio Web)
 ├── backend/       # API Rest em NestJS
 ├── core/          # Lógica e tipos compartilhados
 ├── n8n/           # Configurações do Agente de IA e Workflows
 └── .github/       # Workflows de CI/CD
```

## 🤖 Agente de IA (n8n)

O portfólio possui um assistente inteligente integrado que utiliza o **n8n** como engine de orquestração. O agente é capaz de:

- Responder dúvidas sobre minha carreira e projetos.
- Processar mensagens em tempo real através de Webhooks.
- Integrar-se com bases de conhecimento externas.

## 🛠️ Como rodar o projeto

### Pré-requisitos

- Node.js (v18+)
- Docker (opcional, para n8n)
- Variáveis de ambiente configuradas (`.env`)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/AlexandreGomes08/meu-portfolio.git
```

2. Instale as dependências na raiz (ou em cada pasta):

```bash
npm install
```

3. Configure o `.env` no `frontend` e `backend` baseado nos arquivos `.env.example`.

4. Inicie o desenvolvimento:

```bash
# Na raiz para rodar o frontend preferencialmente
cd frontend
npm run dev
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por **Alexandre Gomes** 🚀
