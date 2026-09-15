# DevHub — Business Discovery Report

> **Phase:** Business Discovery  
> **Role:** Senior Business Analyst + Product Manager  
> **Status:** Draft v1.0 — Pending Stakeholder Validation  
> **Date:** 2026-09-15  

---

## 1. Business Problem

### 1.1 Core Problem Statement

Lập trình viên — đặc biệt là sinh viên IT và developer trẻ — **mất quá nhiều thời gian** để tạo CV/Portfolio chuyên nghiệp. Vấn đề không chỉ là thiếu công cụ, mà là:

| Vấn đề | Biểu hiện |
|--------|-----------|
| **Thông tin bị phân tán** | Dự án nằm ở GitHub, kỹ năng trong đầu, kinh nghiệm trên LinkedIn — không có nơi tổng hợp |
| **Không biết "chọn gì để nói"** | Developer giỏi code nhưng không biết cách trình bày năng lực của mình |
| **CV thiếu bằng chứng** | CV tự khai báo dễ gây nghi ngờ, không có dữ liệu thực tế minh chứng |
| **Cập nhật chậm** | Mỗi lần có project mới phải tự mình cập nhật CV thủ công |
| **Portfolio không chuyên nghiệp** | Đa số developer chỉ có GitHub profile không có bố cục, thiếu visual appeal |

### 1.2 Problem Scale

- Vietnam có khoảng **500,000+ developer** (theo VINASA 2024), tăng ~15%/năm
- Globally: **28 million+ developers** trên GitHub (2024)
- **60-70% developer** cần cập nhật CV/Portfolio ít nhất 1 lần/năm (theo Stack Overflow Survey 2024)
- Trung bình mỗi người mất **4-8 giờ** để tạo CV/Portfolio từ đầu

---

## 2. Business Goals

### 2.1 Short-term (0–6 tháng — MVP)
- Ra mắt sản phẩm có thể dùng được (working product) với core feature: GitHub → CV/Portfolio
- Đạt **1,000 registered users** trong 3 tháng đầu
- Đạt **NPS (Net Promoter Score) ≥ 40** từ early users

### 2.2 Medium-term (6–18 tháng)
- Đạt **10,000 active users/tháng**
- Chuyển đổi **5–10% users lên gói Premium** (freemium conversion)
- Tích hợp thêm LinkedIn, Stack Overflow
- Có **marketplace template** với designer bên ngoài

### 2.3 Long-term (18 tháng+)
- Trở thành **go-to platform** cho developer branding tại Vietnam & SEA
- Doanh thu MRR ≥ $10,000 từ subscription + template marketplace
- Tích hợp AI phân tích chuyên sâu: career path suggestion, skill gap analysis
- Partnership với HR platform / job boards

---

## 3. Target Users (User Segments)

### Segment A — Student / Junior Developer (Primary)
- **Demographics:** 18–26 tuổi, sinh viên IT năm 3-4 hoặc mới ra trường 1-2 năm
- **Behavior:** Active GitHub (các project cá nhân, học tập), dùng LinkedIn để apply job
- **Pain:** Không có kinh nghiệm làm CV, CV trông "trắng tay", mất nhiều giờ định dạng
- **Motivation:** Cần có CV đẹp để apply thực tập, junior position
- **Tech Savviness:** Cao — quen với developer tools

### Segment B — Mid-level Developer (Secondary)
- **Demographics:** 26–35 tuổi, 2–7 năm kinh nghiệm, đang đi làm
- **Behavior:** Có GitHub có dự án thực tế, muốn "re-brand" khi tìm việc mới
- **Pain:** CV cũ, không có thời gian update, muốn showcase side-projects
- **Motivation:** Tìm việc tốt hơn / freelance / nâng lương
- **Tech Savviness:** Rất cao

### Segment C — Freelance Developer
- **Demographics:** 24–40 tuổi, làm độc lập hoặc part-time
- **Behavior:** Cần nhanh chóng tạo portfolio để pitch với client
- **Pain:** Mỗi client cần pitch khác nhau, không có portfolio chuẩn
- **Motivation:** Win more clients, build credibility
- **Tech Savviness:** Cao

### Segment D — HR / Technical Recruiter (Viewer — không tạo CV)
- **Demographics:** 25–40 tuổi, HR tech hoặc engineering manager
- **Behavior:** Cần xem nhanh năng lực ứng viên qua link
- **Pain:** GitHub profile khó đọc, CV PDF không có context về dự án thực tế
- **Value:** DevHub portfolio = single source of truth cho ứng viên

---

## 4. Stakeholders Map

| Stakeholder | Role | Interest | Influence |
|-------------|------|----------|-----------|
| **Founder/Product Owner** | Quyết định product direction | High | High |
| **Dev Team** | Build product | High | Medium |
| **End Users (Developers)** | Dùng sản phẩm | High | Medium |
| **HR/Recruiters** | Xem portfolio | Medium | Low |
| **GitHub** (External) | Cung cấp API data | High | High |
| **OpenAI/Google** (External) | Cung cấp AI | High | High |
| **Template Designers** (Future) | Tạo template marketplace | Medium | Low |
| **Investors** (Future) | Funding | High | High |

---

## 5. User Pain Points (Deep Dive)

### 5.1 Pain Point Analysis

```
Pain #1: "Tôi không biết bắt đầu từ đâu"
  Severity: HIGH
  Frequency: 90% first-time users
  Current workaround: Dùng Word template tải về, copy-paste thủ công

Pain #2: "CV của tôi trông không professional"
  Severity: HIGH
  Frequency: 70% users
  Current workaround: Nhờ người khác thiết kế, dùng Canva (không phù hợp IT)

Pain #3: "Tôi không biết phải nêu project nào, viết gì"
  Severity: HIGH
  Frequency: 80% junior developers
  Current workaround: Hỏi anh/chị đi trước, copy CV mẫu

Pain #4: "CV của tôi không phản ánh được kỹ năng thực sự"
  Severity: MEDIUM
  Frequency: 60% users
  Current workaround: Thêm tay vào CV, nhưng thiếu bằng chứng

Pain #5: "Mỗi lần apply job phải customize CV lại từ đầu"
  Severity: MEDIUM
  Frequency: 50% mid-level developers
  Current workaround: Giữ nhiều phiên bản file Word/PDF
```

---

## 6. Existing Solutions & Competitive Analysis

| Platform | Strength | Weakness | Relevance to DevHub |
|----------|----------|----------|---------------------|
| **Resume.io / Zety** | UI đẹp, nhiều template | Không kết nối GitHub, manual input | Direct competitor |
| **Canva** | Thiết kế tự do | Không có data tự động, không phải dân tech | Indirect competitor |
| **LinkedIn** | Network lớn, built-in | Khó customize, không có code showcase | Indirect competitor |
| **GitHub Profile README** | Dev-friendly | Chỉ cho developer hiểu, không phải CV | Indirect competitor |
| **Notion Portfolio** | Flexible | Không có AI, manual, không professional | Indirect competitor |
| **GitConnected** | Dev portfolio | Ít user, design cũ, ít feature | Direct competitor |
| **ReadySetHire / Polywork** | Developer-focused | US-centric, ít phổ biến Vietnam | Direct competitor |

### Competitive Advantage của DevHub
- **GitHub-first automation:** Tự động pull data, không manual input
- **AI-generated content:** Viết bio, mô tả project bằng AI — không competitor nào làm tốt
- **Vietnam market focus:** Hiểu văn hóa tuyển dụng local, support tiếng Việt
- **Freemium model:** Low barrier to entry

---

## 7. Proposed Solution

### Core Solution
> **DevHub** = GitHub OAuth → Auto Data Pull → AI Content Generation → Beautiful Template → Export PDF + Public URL

### Solution Layers

```
Layer 1 — DATA INGESTION
  GitHub API → repos, commits, stars, languages, README, PRs
  
Layer 2 — AI PROCESSING  
  LLM (GPT-4o / Gemini) → 
    - Professional bio generation
    - Project description rewriting
    - Skill extraction & ranking
    - Summary statement generation

Layer 3 — CV/PORTFOLIO BUILDER
  Template engine → 
    - Choose template (free/premium)
    - Real-time preview
    - Manual editing override
    
Layer 4 — EXPORT & SHARING
  - Export PDF (high quality)
  - Public portfolio URL: devhub.io/username
  - Shareable link with custom slug
  - Embed widget (future)
```

---

## 8. Value Proposition

### For Developers (Core Users)
> *"Kết nối GitHub, nhận CV chuyên nghiệp trong 3 phút — không cần tự viết một chữ."*

- **Save time:** 4-8 giờ → 3-5 phút
- **Better quality:** AI-generated, data-backed content
- **Always up-to-date:** Re-sync GitHub bất cứ lúc nào
- **Professional design:** Template đẹp, không cần biết design

### For Recruiters (Secondary Users)
> *"Xem năng lực developer ngay qua một link — không cần yêu cầu CV, không cần đọc GitHub"*

- **Single link:** devhub.io/username — đủ thông tin
- **Verified data:** Kỹ năng được validate bởi GitHub activity
- **Visual clarity:** Dễ đọc, scannable

---

## 9. Business Constraints

| Constraint | Detail | Impact |
|------------|--------|--------|
| **Budget** | [NEEDS CLARIFICATION] — Bootstrap hay có funding? | Ảnh hưởng infra choices |
| **Team size** | [NEEDS CLARIFICATION] — Solo hay team? | Ảnh hưởng timeline và scope |
| **Timeline** | [NEEDS CLARIFICATION] — Deadline MVP? | Ảnh hưởng feature scope |
| **GitHub API Rate Limit** | 5,000 req/hour per OAuth token (authenticated) | Cần throttling strategy |
| **OpenAI Cost** | ~$0.005–0.015 per CV generation (GPT-4o) | Phải có cost control cho free tier |
| **Legal** | Privacy policy cần rõ ràng — dùng data GitHub của user | GDPR/data consent required |

---

## 10. Technical Constraints

| Constraint | Detail |
|------------|--------|
| **GitHub API** | Rate limit 5,000 req/hour authenticated; GraphQL API có complexity limit |
| **PDF Generation** | Puppeteer cần headless Chrome — tốn RAM trên server |
| **AI Latency** | GPT-4o response time 2-10s — cần async job queue |
| **SEO for Portfolio** | Cần SSR/SSG để portfolio page index được trên Google |
| **OAuth Scope** | Chỉ request minimum required GitHub scope — không over-permission |
| **File Storage** | PDF export files cần storage strategy (TTL? per-user quota?) |

---

## 11. Risks

### 11.1 Business Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **GitHub API changes / deprecation** | Low | High | Abstract GitHub adapter, monitor changelog |
| **OpenAI pricing surge** | Medium | High | Multi-LLM fallback (Gemini), cache results |
| **Low adoption / user churn** | Medium | High | Strong onboarding, show value in first 60 seconds |
| **Competitor launches similar product** | Medium | Medium | Move fast, build community moat |
| **Freemium doesn't convert to paid** | Medium | High | Design premium features carefully |

### 11.2 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **PDF rendering inconsistency** | High | Medium | Snapshot testing cho templates |
| **GitHub OAuth token expiry** | Medium | High | Implement token refresh, graceful re-auth |
| **AI hallucination in content** | Medium | Medium | User review step trước khi publish |
| **Data scraping GitHub violations** | Low | High | Chỉ dùng official GitHub API, comply ToS |
| **Scalability bottleneck at job queue** | Low | Medium | BullMQ + Redis, horizontal scaling |

---

## 12. Assumptions

> Đây là những điều được assume — cần validate với stakeholder

| ID | Assumption | Risk if Wrong |
|----|-----------|---------------|
| A-01 | Users sẵn sàng grant GitHub OAuth read permission | Cần permission scope nhỏ nhất có thể |
| A-02 | GitHub repo data đủ để tạo CV meaningful | Cần fallback manual input form |
| A-03 | OpenAI API đủ stable và affordable cho MVP | Có Gemini fallback |
| A-04 | Users muốn public portfolio URL (devhub.io/username) | Cần thêm privacy option (private/unlisted) |
| A-05 | Freemium model viable — free tier đủ hấp dẫn | Cần A/B test pricing |
| A-06 | Việt Nam market là primary target ban đầu | Ảnh hưởng language, timezone, payment |
| A-07 | Team có thể handle cả frontend + backend | Nếu solo dev: cần ưu tiên ruthlessly |

---

## 13. Out of Scope (MVP)

> Những gì KHÔNG làm trong giai đoạn MVP để tránh scope creep:

- ❌ LinkedIn data integration
- ❌ Stack Overflow data integration
- ❌ Template marketplace (designer upload)
- ❌ Custom domain (devhub.io → myname.dev)
- ❌ Employer/recruiter dashboard
- ❌ Job board integration
- ❌ Career path AI recommendation
- ❌ Team/company portfolio
- ❌ Real-time collaboration
- ❌ Mobile app (iOS/Android)
- ❌ Email campaign / newsletter
- ❌ Analytics dashboard (recruiter view counts)
- ❌ A/B testing different CV versions

---

## 14. MVP Scope ✅

> Những gì cần có để ra mắt được (Minimum Viable Product):

### Must-Have (P0)
- [ ] GitHub OAuth login / register
- [ ] Pull GitHub data: repos, languages, stars, bio, avatar
- [ ] AI-generated: professional summary, project descriptions, skill list
- [ ] Template selection (tối thiểu 2 templates)
- [ ] Real-time CV preview trong browser
- [ ] Manual edit override (user có thể sửa AI output)
- [ ] Export PDF (basic quality)
- [ ] Public portfolio URL: `devhub.io/[username]`

### Should-Have (P1 — nếu còn time)
- [ ] Re-sync GitHub data (update khi có repo mới)
- [ ] Toggle dự án public/private (ẩn một số repo khỏi CV)
- [ ] Basic template customization (màu sắc, font)
- [ ] Share link với privacy: public / unlisted

### Nice-to-Have (P2 — post-MVP)
- [ ] Second template (premium)
- [ ] Gói Premium basic
- [ ] Email verification / notifications

---

## Product Vision

> **"Biến mọi GitHub profile thành một professional portfolio — tự động, đẹp, và đáng tin."**

DevHub là **developer's career launchpad** — nơi mà năng lực kỹ thuật thực sự được thể hiện rõ ràng, không cần developer phải tự "marketing" bản thân bằng ngôn ngữ.

---

## Product Goals

| Goal | Metric | Target (6 months) |
|------|--------|-------------------|
| Speed | Time-to-first-portfolio | < 5 phút |
| Quality | User satisfaction score | ≥ 4.2 / 5 |
| Adoption | Registered users | 5,000 |
| Engagement | Users who exported PDF | > 60% |
| Retention | D30 retention | > 25% |
| Revenue | Freemium conversion | > 5% |

---

## Success Metrics (North Star + Supporting)

### North Star Metric
> **"Số lượng portfolio được tạo và chia sẻ thành công mỗi tuần"**

### Supporting Metrics
- **Acquisition:** Sign-ups per week, GitHub OAuth conversion rate
- **Activation:** % users hoàn thành tạo portfolio lần đầu (< 10 phút)
- **Retention:** DAU/MAU ratio, re-sync GitHub rate
- **Revenue:** MRR, freemium-to-paid conversion %
- **Quality:** AI content approval rate (user giữ nguyên vs sửa nhiều)

---

## User Personas

### Persona 1: Minh — Sinh viên CNTT năm 4
```
Tuổi: 22 | TP.HCM | UIT
GitHub: 15 repos (khóa luận, project môn học, 1 side project)
Mục tiêu: Tìm thực tập tại công ty product hoặc outsource
Frustration: "Em không biết phải viết gì vào CV, project nào đáng để nêu"
Quote: "Em chỉ cần một CV trông professional là được rồi, không cần fancy"
DevHub value: Tự động tổng hợp project, AI viết mô tả, xuất PDF ngay
```

### Persona 2: Linh — Frontend Developer 3 năm
```
Tuổi: 27 | Hà Nội | Đang làm tại startup
GitHub: 40+ repos, nhiều project thực tế
Mục tiêu: Tìm remote job cho công ty nước ngoài (lương cao hơn)
Frustration: "CV tôi vẫn dùng từ 2 năm trước, không có thời gian update"
Quote: "Tôi muốn portfolio link gửi thẳng cho recruiter nước ngoài được"
DevHub value: Public portfolio URL, đẹp, auto-updated, tiếng Anh
```

### Persona 3: Hùng — Freelance Full-stack Developer
```
Tuổi: 31 | Đà Nẵng | Freelancer 4 năm
GitHub: 25 repos (nhiều cái private client work)
Mục tiêu: Pitch được khách hàng mới, showcase portfolio nhanh
Frustration: "Mỗi lần pitch khách là phải gửi file PDF cũ, trông không impressive"
Quote: "Tôi cần gửi link portfolio cho client ngay trong buổi meeting"
DevHub value: Quick share link, đẹp, professional, dễ cập nhật
```

---

## User Journey (High-level — MVP)

```
STAGE 1: DISCOVERY
  Channel: LinkedIn post, GitHub trending, mouth-to-mouth
  Action: User thấy DevHub, vào landing page
  
STAGE 2: ONBOARDING
  Action: "Connect with GitHub" → OAuth flow
  Time: < 30 giây
  Critical: Must show immediate value (preview loading)
  
STAGE 3: ACTIVATION (THE "AHA MOMENT")
  Action: DevHub pull GitHub data → AI generate → Show draft portfolio
  Time: 30–90 giây (async với loading screen)
  Critical: User thấy portfolio của MÌNH hiện ra → WOW moment
  
STAGE 4: CUSTOMIZATION
  Action: Chọn template, sửa AI content nếu muốn, toggle projects
  Time: 2–10 phút
  
STAGE 5: EXPORT & SHARE
  Action: Export PDF, copy public URL
  Time: < 30 giây
  Value realized: User có ngay thứ cần (CV PDF + portfolio link)
  
STAGE 6: RETENTION
  Trigger: New GitHub repo pushed → Email "Cập nhật portfolio?"
  Action: User re-sync → update in 1 click
  
STAGE 7: UPGRADE (Future)
  Trigger: User thấy premium template / custom domain
  Action: Upgrade subscription
```

---

## MVP Definition (Final)

### MVP = "Tạo được portfolio chuyên nghiệp trong 5 phút từ GitHub"

**In Scope:**
1. GitHub OAuth Login
2. Auto GitHub data pull (repos, bio, languages, stars)
3. AI content generation (summary, project descriptions, skills)
4. Template selection (2 templates: Light + Dark)
5. WYSIWYG editing (sửa được text AI generate)
6. Export PDF
7. Public portfolio URL (devhub.io/username)
8. Re-sync GitHub data

**Definition of Done (MVP):**
- User mới có thể tạo portfolio từ GitHub trong < 5 phút
- Portfolio page load trong < 2 giây
- PDF export hoạt động đúng
- URL public accessible, SEO indexable
- Không có P0 bugs

---

## ❓ Open Questions (Cần Stakeholder Clarification)

| # | Question | Impact | Priority |
|---|----------|--------|----------|
| Q1 | **Budget:** Bootstrap hay có vốn ban đầu? | Infra cost choices | HIGH |
| Q2 | **Team size:** Solo founder hay team? | Timeline & scope | HIGH |
| Q3 | **Timeline:** MVP deadline cụ thể là khi nào? | Feature scope | HIGH |
| Q4 | **Market focus:** Vietnam only hay global ngay từ đầu? | Ngôn ngữ, payment | HIGH |
| Q5 | **Privacy:** Portfolio có cần private/unlisted mode không? | Auth & access control | MEDIUM |
| Q6 | **Pricing:** Free plan limit là gì? (số template, số export?) | Business model | MEDIUM |
| Q7 | **AI content language:** Tiếng Việt, tiếng Anh, hay cả hai? | LLM prompting | MEDIUM |
| Q8 | **Custom slug:** User có thể chọn username khác GitHub không? | URL design | LOW |
| Q9 | **Team accounts:** Có plan cho công ty/agency không? | Future roadmap | LOW |

---

> **Next Step:** Sau khi confirm các Open Questions → chuyển sang **Phase 2: Requirements (SRS)**

---

*Document owned by: Product Team | Last updated: 2026-09-15*
