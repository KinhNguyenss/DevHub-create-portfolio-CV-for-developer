# PRD: DevHub — CV & Portfolio Generator for Developers

> **Generated via:** ralph `prd` skill
> **Source:** Business Discovery Report v1.0
> **Branch:** `ralph/devhub-mvp`
> **Date:** 2026-09-15
> **Status:** Ready for Implementation

---

## Introduction

DevHub là nền tảng giúp lập trình viên **tự động tạo CV và Portfolio chuyên nghiệp trong vài phút** bằng cách kết nối tài khoản GitHub. Hệ thống sẽ phân tích repositories, ngôn ngữ lập trình, commit history, stars và README — sau đó dùng AI để sinh ra nội dung CV (bio, mô tả project, danh sách kỹ năng), hiển thị trên template đẹp, cho phép chỉnh sửa và xuất ra PDF hoặc public portfolio URL.

**Vấn đề cần giải quyết:**
- Developer mất 4–8 giờ tạo CV/Portfolio thủ công
- CV thường thiếu bằng chứng thực tế, không phản ánh đúng kỹ năng
- GitHub profile khó đọc với nhà tuyển dụng không phải developer

**Confirmed Decisions:**
- **Budget:** Bootstrap — dùng free-tier tối đa (Vercel, Supabase, Upstash)
- **Team:** Solo / team nhỏ — scope phải cắt gọt, chỉ P0 cho MVP
- **Market:** Vietnam trước, bilingual (Tiếng Việt + Tiếng Anh)
- **Privacy:** 3 mức: public / unlisted / private (có ngay từ MVP)
- **URL slug:** Cho phép custom slug, không bắt buộc trùng GitHub username

---

## Goals

- Cho phép developer tạo xong portfolio hoàn chỉnh trong **dưới 5 phút**
- Tự động pull dữ liệu từ GitHub — **không cần nhập tay**
- AI generate professional content: bio, mô tả project, danh sách kỹ năng
- Hỗ trợ **export PDF chất lượng cao** và **public portfolio URL**
- Hỗ trợ **2 ngôn ngữ**: Tiếng Việt & Tiếng Anh cho nội dung AI generate
- Portfolio có **3 mức privacy**: public / unlisted / private
- Cho phép user **custom URL slug** (devhub.io/[slug])
- Đạt 1,000 registered users trong 3 tháng sau khi ra mắt

---

## User Stories

### US-001: GitHub OAuth Login
**Description:** As a developer, I want to sign in with my GitHub account so that DevHub can access my GitHub data without me entering it manually.

**Acceptance Criteria:**
- [ ] "Sign in with GitHub" button hiển thị trên landing page và login page
- [ ] Click vào button redirect đến GitHub OAuth consent page
- [ ] Sau khi user approve, redirect về DevHub với session được tạo
- [ ] User profile (avatar, name, email, github_username) được lưu vào database
- [ ] GitHub access token được lưu an toàn (encrypted hoặc server-side session)
- [ ] Nếu user đã có account, login vào account hiện có (không tạo duplicate)
- [ ] Typecheck passes

---

### US-002: Pull GitHub Data
**Description:** As a developer, I want DevHub to automatically import my GitHub repositories and stats so that I don't have to enter my project history manually.

**Acceptance Criteria:**
- [ ] Sau khi login, hệ thống tự động gọi GitHub API để lấy: repos (tối đa 100 repos mới nhất), languages, stars, bio, avatar URL, followers/following count
- [ ] Với mỗi repo: lấy name, description, language, stargazers_count, topics, URL, is_fork, created_at, updated_at
- [ ] Dữ liệu được lưu vào database (bảng `github_repos` và `github_profile`)
- [ ] Xử lý GitHub API rate limit gracefully (hiển thị error nếu bị rate-limited, không crash)
- [ ] Toàn bộ quá trình xảy ra bất đồng bộ (async job) — user thấy loading state
- [ ] Typecheck passes

---

### US-003: AI Content Generation — Professional Summary
**Description:** As a developer, I want AI to write a professional summary about me based on my GitHub data so that I don't have to write it myself.

**Acceptance Criteria:**
- [ ] AI (GPT-4o hoặc Gemini) generate đoạn summary 3–5 câu dựa trên: top languages, số repo, số stars, bio GitHub
- [ ] User có thể chọn ngôn ngữ output: Tiếng Việt hoặc Tiếng Anh
- [ ] Summary được lưu vào database dưới trường `ai_summary`
- [ ] User thấy summary trong portfolio editor sau khi generation xong
- [ ] Nếu AI call thất bại, hiển thị error message rõ ràng và cho phép retry
- [ ] Typecheck passes

---

### US-004: AI Content Generation — Project Descriptions
**Description:** As a developer, I want AI to write professional descriptions for my top projects so that each project sounds impressive and clear.

**Acceptance Criteria:**
- [ ] AI generate description (2–4 câu) cho top 6 repos (sort by stars, loại fork)
- [ ] Description dựa trên: repo name, description gốc, language, topics, README (nếu có, tối đa 500 chars đầu)
- [ ] User có thể chọn ngôn ngữ output: Tiếng Việt hoặc Tiếng Anh (đồng bộ với setting ở US-003)
- [ ] Descriptions lưu vào database
- [ ] Typecheck passes

---

### US-005: AI Content Generation — Skills List
**Description:** As a developer, I want AI to extract and rank my technical skills from my GitHub data so that my skill section is accurate and relevant.

**Acceptance Criteria:**
- [ ] AI phân tích toàn bộ languages từ tất cả repos và tạo danh sách skills có thứ tự ưu tiên
- [ ] Kết quả là mảng string, ví dụ: ["TypeScript", "React", "Node.js", "PostgreSQL", ...]
- [ ] Tối đa 15 skills
- [ ] Skills lưu vào database dưới trường `ai_skills`
- [ ] Typecheck passes

---

### US-006: Template Selection
**Description:** As a developer, I want to choose from multiple CV/portfolio templates so that my portfolio matches my personal style.

**Acceptance Criteria:**
- [ ] Hiển thị tối thiểu 2 templates: "Light" (nền trắng) và "Dark" (nền tối)
- [ ] User nhìn thấy thumbnail preview của mỗi template trước khi chọn
- [ ] Click vào template → portfolio editor load với template đó
- [ ] Lựa chọn template được lưu vào database (field `template_id`)
- [ ] Verify in browser using dev-browser skill
- [ ] Typecheck passes

---

### US-007: Portfolio Editor — WYSIWYG Editing
**Description:** As a developer, I want to edit my AI-generated content directly in the portfolio editor so that I can fix mistakes or add personal touches.

**Acceptance Criteria:**
- [ ] Mỗi text field trong portfolio (summary, project descriptions, skills, tên, title) đều có thể click để edit inline
- [ ] Thay đổi được auto-save (debounce 1s) hoặc có nút Save rõ ràng
- [ ] User có thể undo thay đổi và revert về AI-generated content
- [ ] Editing không làm mất layout/formatting của template
- [ ] Verify in browser using dev-browser skill
- [ ] Typecheck passes

---

### US-008: Toggle Projects On/Off
**Description:** As a developer, I want to hide specific repositories from my portfolio so that I can choose which projects to showcase.

**Acceptance Criteria:**
- [ ] Trong portfolio editor, mỗi project card có toggle switch "Show / Hide"
- [ ] Hidden projects không hiển thị trên public portfolio
- [ ] Preferences được lưu vào database (field `is_visible` trên bảng `portfolio_projects`)
- [ ] Verify in browser using dev-browser skill
- [ ] Typecheck passes

---

### US-009: Export PDF
**Description:** As a developer, I want to export my CV as a PDF so that I can attach it to job applications.

**Acceptance Criteria:**
- [ ] Nút "Export PDF" rõ ràng trong portfolio editor
- [ ] PDF được generate server-side bằng Puppeteer (headless Chrome)
- [ ] PDF trông giống hệt portfolio preview trên browser (WYSIWYG)
- [ ] PDF download về máy user với filename `devhub-cv-[username].pdf`
- [ ] File size PDF < 5MB
- [ ] Generate time < 15 giây (hiển thị loading spinner trong lúc chờ)
- [ ] Typecheck passes

---

### US-010: Public Portfolio URL
**Description:** As a developer, I want a shareable public portfolio link so that I can send it to recruiters or clients.

**Acceptance Criteria:**
- [ ] Mỗi user có portfolio URL dạng: `devhub.io/[slug]`
- [ ] Portfolio page public accessible, không cần login để xem
- [ ] Portfolio page render đúng trên server (SSR/SSG) để SEO indexable
- [ ] `<title>` tag = "[Tên User] — Developer Portfolio | DevHub"
- [ ] `<meta description>` được generate từ AI summary
- [ ] Verify in browser using dev-browser skill
- [ ] Typecheck passes

---

### US-011: Custom URL Slug
**Description:** As a developer, I want to choose my own portfolio URL slug so that my link is personal and memorable.

**Acceptance Criteria:**
- [ ] Trong settings, user có thể nhập custom slug (chỉ chấp nhận: a-z, 0-9, dấu gạch ngang)
- [ ] Hệ thống kiểm tra slug có unique không — nếu đã tồn tại hiển thị lỗi rõ ràng
- [ ] Slug mặc định = GitHub username của user
- [ ] Sau khi đổi slug, old URL không còn hoạt động (redirect hoặc 404)
- [ ] Slug tối thiểu 3 ký tự, tối đa 30 ký tự
- [ ] Verify in browser using dev-browser skill
- [ ] Typecheck passes

---

### US-012: Portfolio Privacy Controls
**Description:** As a developer, I want to control who can see my portfolio so that I can keep it private while I'm still editing.

**Acceptance Criteria:**
- [ ] Trong settings, user có thể chọn 1 trong 3 mức privacy: Public / Unlisted / Private
- [ ] Public: ai cũng xem được, search engine index được
- [ ] Unlisted: chỉ người có link mới xem được, không index search engine
- [ ] Private: chỉ owner xem được, return 401 cho unauthenticated request
- [ ] Mặc định khi tạo mới: Private
- [ ] Verify in browser using dev-browser skill
- [ ] Typecheck passes

---

### US-013: Re-sync GitHub Data
**Description:** As a developer, I want to refresh my GitHub data so that my portfolio reflects my latest projects and contributions.

**Acceptance Criteria:**
- [ ] Nút "Re-sync GitHub" trong portfolio editor hoặc settings
- [ ] Click button → trigger async job pull lại toàn bộ GitHub data
- [ ] Sau khi sync xong, portfolio editor tự refresh với data mới
- [ ] Hiển thị timestamp "Last synced: X minutes ago"
- [ ] Rate limit: user chỉ có thể re-sync tối đa 1 lần / 10 phút (hiển thị countdown nếu bị limit)
- [ ] Verify in browser using dev-browser skill
- [ ] Typecheck passes

---

### US-014: Landing Page
**Description:** As a potential user, I want to see a professional landing page so that I understand what DevHub offers before signing up.

**Acceptance Criteria:**
- [ ] Landing page có: headline rõ ràng, sub-headline, CTA "Get Started with GitHub", section giải thích how it works (3 bước), section benefits, footer
- [ ] Page load < 2 giây (LCP)
- [ ] Responsive trên mobile (375px) và desktop (1280px)
- [ ] CTA button link đến GitHub OAuth flow
- [ ] Verify in browser using dev-browser skill
- [ ] Typecheck passes

---

### US-015: User Dashboard
**Description:** As a logged-in developer, I want a dashboard where I can see and manage my portfolio so that I have a central hub for all DevHub actions.

**Acceptance Criteria:**
- [ ] Sau khi login, redirect đến dashboard
- [ ] Dashboard hiển thị: avatar, tên, portfolio URL, trạng thái privacy, nút Edit Portfolio, nút View Public Portfolio, nút Export PDF, nút Re-sync GitHub
- [ ] Nếu portfolio chưa được generate lần đầu: hiển thị onboarding flow bắt đầu generate
- [ ] Verify in browser using dev-browser skill
- [ ] Typecheck passes

---

## Functional Requirements

- **FR-01:** Hệ thống phải hỗ trợ GitHub OAuth 2.0 để đăng nhập
- **FR-02:** GitHub access token phải được lưu trữ encrypted
- **FR-03:** Hệ thống phải gọi GitHub REST API v3 với authenticated token để lấy data
- **FR-04:** Hệ thống phải xử lý GitHub API rate limit (5,000 req/hour) bằng cách throttle và retry với exponential backoff
- **FR-05:** Tất cả các GitHub data sync jobs phải được xử lý bất đồng bộ qua job queue (BullMQ)
- **FR-06:** Hệ thống phải gọi LLM API (OpenAI GPT-4o primary, Gemini fallback) để generate nội dung
- **FR-07:** Nếu LLM primary thất bại, hệ thống phải tự động fallback sang LLM secondary
- **FR-08:** AI-generated content phải được lưu vào database và có thể override bởi user
- **FR-09:** Hệ thống phải hỗ trợ generate nội dung bằng Tiếng Việt VÀ Tiếng Anh
- **FR-10:** Portfolio phải render server-side (SSR) cho public URL để SEO
- **FR-11:** PDF export phải dùng Puppeteer headless Chrome server-side
- **FR-12:** Mỗi user có đúng một portfolio (1-to-1 relationship)
- **FR-13:** URL slug phải unique trong toàn hệ thống, chỉ chứa ký tự [a-z0-9-]
- **FR-14:** Portfolio có 3 mức privacy: public / unlisted / private
- **FR-15:** Private portfolio trả về HTTP 401 cho unauthenticated request
- **FR-16:** Unlisted portfolio có `<meta name="robots" content="noindex">`
- **FR-17:** Re-sync GitHub bị rate-limit: tối đa 1 lần / 10 phút per user
- **FR-18:** Tất cả API endpoints phải yêu cầu authentication (trừ public portfolio view và landing page)
- **FR-19:** Frontend phải responsive: hỗ trợ mobile (375px+) và desktop (1280px+)
- **FR-20:** Portfolio page phải load trong < 2 giây (Time to First Byte < 500ms)
- **FR-21:** PDF export phải hoàn thành trong < 15 giây
- **FR-22:** Hệ thống phải ghi logs cho mọi AI API call (latency, model, token count, error)
- **FR-23:** Error messages phải rõ ràng, human-readable, không expose stack trace ra UI
- **FR-24:** Mọi form input phải được validate cả client-side và server-side

---

## Non-Goals (Out of Scope — MVP)

- Không tích hợp LinkedIn, Stack Overflow
- Không có template marketplace
- Không có custom domain (myname.dev)
- Không có employer/recruiter dashboard
- Không có job board integration
- Không có AI career path recommendation
- Không có team/company portfolio
- Không có real-time collaboration
- Không có mobile app
- Không có email notifications / newsletters
- Không có analytics dashboard
- Không có payment / billing (freemium chưa triển khai trong MVP)
- Không có A/B testing

---

## Design Considerations

- **Design system:** Tailwind CSS + shadcn/ui components
- **Theme:** Hỗ trợ cả light và dark mode
- **Typography:** Inter font (Google Fonts)
- **Loading states:** Skeleton screens khi loading data, spinner khi export PDF
- **Empty states:** Onboarding flow rõ ràng khi user lần đầu đăng nhập
- **Portfolio templates:**
  - **Light template:** Nền trắng, typography rõ, card-based project layout
  - **Dark template:** Nền tối, accent màu neon nhẹ, developer terminal aesthetic

---

## Technical Considerations

- **Frontend:** Next.js 15 (App Router) + TypeScript
- **Backend:** NestJS + TypeScript
- **ORM:** Prisma + PostgreSQL (Supabase free tier)
- **Queue:** BullMQ + Redis (Upstash free tier)
- **Auth:** NextAuth.js v5 (GitHub OAuth provider)
- **AI:** LangChain.js — GPT-4o (primary) → Gemini (fallback)
- **PDF:** Puppeteer server-side (Railway — cần 512MB+ RAM, `--no-sandbox`)
- **Storage:** Cloudflare R2 (free 10GB) — PDF exports
- **Deploy:** Vercel (frontend) + Railway (backend + worker)
- **GitHub API scope:** `read:user`, `public_repo` — minimum required
- **AI cost control:** Cache AI content vào DB, không regenerate nếu data không đổi

---

## Success Metrics

- Time-to-first-portfolio < 5 phút
- PDF export time < 15 giây
- Portfolio page load time < 2 giây
- AI generation error rate < 5%
- GitHub OAuth conversion rate > 80%
- Activation rate > 60%
- D30 retention > 25%
- NPS >= 40 trong 3 tháng đầu

---

## Open Questions

1. **Timeline MVP:** Chưa có deadline cụ thể — cần confirm để biết feature nào cần cắt thêm
2. **Pricing Free Tier:** Giới hạn cụ thể của free plan là gì? (số lần export PDF? số template?)
3. **Puppeteer vs WeasyPrint:** Puppeteer tốn RAM — cân nhắc WeasyPrint nếu Railway free tier không đủ RAM
4. **GitHub private repos:** Có pull private repo vào portfolio không? Hiện tại assume chỉ public repos (scope: `public_repo`)
