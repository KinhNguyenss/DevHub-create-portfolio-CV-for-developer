Dự án **DevHub** chưa có tech stack được chốt (file `00-project-context.md` vẫn là `[TECH STACK]` placeholder). Để tư vấn phù hợp, tôi cần hiểu context thêm một chút:

Tốt! Với profile đó, đây là tech stack tôi đề xuất cho **DevHub**:

---

## 🛠️ Tech Stack — DevHub CV/Portfolio Platform

### Frontend — Next.js 15 (App Router)
| Layer | Công nghệ | Lý do |
|---|---|---|
| Framework | **Next.js 15** | SSR/SSG tốt cho SEO của portfolio page, App Router chuẩn |
| Language | **TypeScript** | Type-safe, production standard |
| Styling | **Tailwind CSS + shadcn/ui** | Tốc độ build UI nhanh, đẹp, consistent |
| State | **Zustand** | Nhẹ hơn Redux, đủ cho app này |
| Forms | **React Hook Form + Zod** | Validation chuẩn |
| PDF Export | **React-PDF / Puppeteer** | Render CV thành PDF |
| Preview | **react-to-pdf** hoặc iframe |  Real-time preview template |

### Backend — NestJS
| Layer | Công nghệ | Lý do |
|---|---|---|
| Framework | **NestJS** (Node.js + Express) | Structured, decorators, DI — chuẩn enterprise |
| Language | **TypeScript** | Đồng bộ với frontend |
| ORM | **Prisma** | Type-safe, auto migration, dễ dùng |
| Validation | **class-validator + class-transformer** | Built-in NestJS |
| Queue | **BullMQ** (Redis-based) | Xử lý async job: gen CV, AI call |

### Database & Storage
| Layer | Công nghệ | Lý do |
|---|---|---|
| Primary DB | **PostgreSQL** | Relational, mạnh, free tier trên Railway/Supabase |
| Cache / Queue | **Redis** | Session, rate limit, BullMQ |
| File Storage | **Cloudflare R2** | Free 10GB, S3-compatible API |

### AI Integration
| Layer | Công nghệ | Lý do |
|---|---|---|
| Orchestration | **LangChain.js** | Chain: GitHub → AI → CV content |
| LLM | **OpenAI GPT-4o + Gemini 1.5 Pro** | Fallback strategy |
| GitHub Scraping | **GitHub REST API v3** | Lấy repo, README, language stats |
| Embeddings | **OpenAI text-embedding-3-small** | Search template phù hợp |

### Auth
| Công nghệ | Lý do |
|---|---|
| **NextAuth.js v5** | GitHub OAuth tích hợp sẵn — rất phù hợp cho developer platform |
| **JWT + Refresh Token** | Stateless auth cho API |

### DevOps & Infra (Free Tier)
| Layer | Công nghệ |
|---|---|
| Frontend | **Vercel** (free) |
| Backend | **Railway** (free tier $5/month credit) |
| Database | **Supabase** (PostgreSQL free) hoặc Railway PostgreSQL |
| Redis | **Upstash Redis** (serverless, free tier) |
| CI/CD | **GitHub Actions** |
| Monitoring | **Sentry** (error tracking, free tier) |

---

## Luồng nghiệp vụ cốt lõi với stack này

```
User đăng nhập GitHub OAuth (NextAuth)
        ↓
Backend gọi GitHub API → lấy repos, stars, languages, README
        ↓
LangChain.js → GPT-4o / Gemini
  → Tạo bio, mô tả project, skills
        ↓
User chọn template → Preview real-time (Next.js)
        ↓
User chỉnh sửa nội dung
        ↓
Export PDF (Puppeteer headless)
        ↓
Chia sẻ link portfolio công khai: devhub.io/username
```

---

**Bạn có muốn tôi:**
1. **Tiếp tục tạo toàn bộ tài liệu** (Discovery → PRD → SRS → Architecture → DB → API) với stack này đã được chốt?
2. Hay muốn điều chỉnh tech stack thêm trước?