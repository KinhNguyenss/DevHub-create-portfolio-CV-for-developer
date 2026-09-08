# DevHub 🚀

> **AI-powered CV & Portfolio platform for developers**  
> Tự động tạo CV chuyên nghiệp từ GitHub profile trong 5 phút.

---

## 📁 Cấu trúc Monorepo

```
devhub/
├── apps/
│   ├── web/          # Next.js 15 - Frontend (port 3000)
│   └── api/          # NestJS    - Backend  (port 3001)
├── packages/
│   ├── types/        # Shared TypeScript types
│   └── config/       # Shared ESLint, TypeScript configs
├── docker-compose.yml
├── turbo.json
└── .env.example
```

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, shadcn/ui |
| Backend | NestJS, TypeScript, Prisma ORM |
| Database | PostgreSQL, Redis |
| AI | LangChain.js, OpenAI GPT-4o, Gemini 1.5 Pro |
| Auth | NextAuth.js v5 (GitHub OAuth) |
| Storage | Cloudflare R2 |
| Deploy | Vercel (web) + Railway (api) |

## ⚡ Quick Start

### 1. Prerequisites

- Node.js >= 20
- Docker Desktop
- GitHub OAuth App ([tạo tại đây](https://github.com/settings/developers))
- OpenAI API Key hoặc Gemini API Key

### 2. Clone & Setup

```bash
git clone https://github.com/your-username/devhub.git
cd devhub

# Copy environment file
cp .env.example .env.local
# → Điền các giá trị vào .env.local
```

### 3. Start Database & Redis

```bash
docker-compose up -d
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Setup Database

```bash
cd apps/api
npx prisma migrate dev --name init
npx prisma db seed        # seed template data
```

### 6. Run Development

```bash
# Terminal 1 - Frontend
npm run dev:web

# Terminal 2 - Backend  
npm run dev:api

# Hoặc chạy cả hai cùng lúc
npm run dev
```

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Docs (Swagger)**: http://localhost:3001/api/docs

## 🔑 Environment Variables

Xem [`.env.example`](./.env.example) để biết tất cả biến môi trường cần thiết.

**Bắt buộc để chạy:**
| Variable | Mô tả |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `NEXTAUTH_SECRET` | NextAuth secret key (min 32 chars) |
| `GITHUB_CLIENT_ID` | GitHub OAuth App Client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App Client Secret |
| `OPENAI_API_KEY` | OpenAI API key |

## 📖 Tài liệu

- [AI-SDLC/](./AI-SDLC/) - Tài liệu thiết kế theo SDLC
  - [00-project-context.md](./AI-SDLC/00-project-context.md) - Project context
  - [01-discovery.md](./AI-SDLC/01-discovery.md) - Business discovery
  - [02-requirement.md](./AI-SDLC/02-requirement.md) - Requirements
  - [03-product-design.md](./AI-SDLC/03-product-design.md) - Product design
  - [04-architecture.md](./AI-SDLC/04-architecture.md) - Architecture
  - [05-database.md](./AI-SDLC/05-database.md) - Database design
  - [06-api.md](./AI-SDLC/06-api.md) - API contract

## 🏗️ API Endpoints (Overview)

```
POST   /api/v1/auth/github          # GitHub OAuth
GET    /api/v1/users/me             # Current user profile
GET    /api/v1/github/profile       # Fetch GitHub data
POST   /api/v1/cv                   # Create new CV
GET    /api/v1/cv/:id               # Get CV
PATCH  /api/v1/cv/:id               # Update CV
DELETE /api/v1/cv/:id               # Delete CV
POST   /api/v1/cv/:id/generate      # AI generate from GitHub
POST   /api/v1/cv/:id/export/pdf    # Export to PDF
GET    /api/v1/cv/:id/public        # Get public CV (no auth)
GET    /api/v1/templates            # List templates
```

## 🚀 Deployment

| Service | Platform | Free Tier |
|---|---|---|
| Frontend | Vercel | ✅ Free |
| Backend | Railway | ✅ $5 credit/month |
| Database | Supabase | ✅ 500MB free |
| Redis | Upstash | ✅ 10K req/day free |
| Storage | Cloudflare R2 | ✅ 10GB free |

---

Built for **Chuyên đề 4 - AI in Software Development** 🎓
