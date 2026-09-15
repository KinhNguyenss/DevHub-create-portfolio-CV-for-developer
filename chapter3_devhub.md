# BÀI THỰC HÀNH 3 – DEMO MINH HỌA
## Từ Product Discovery đến Feature Specification (Case study: DevHub)

> Toàn bộ ví dụ trong bài thực hành này sử dụng chung một sản phẩm xuyên suốt — **DevHub: nền tảng tạo Portfolio & CV cho lập trình viên** — để bạn thấy rõ mạch liên kết: Khám phá vấn đề → PRD → Phân tích yêu cầu → User Story → Đặc tả tính năng chi tiết.

---

## 3.1. Khám phá Sản phẩm (Product Discovery)

### Mục tiêu của bước này
Xác nhận **có vấn đề thật sự đáng giải quyết** trước khi viết bất kỳ dòng yêu cầu nào.

### Demo minh họa — DevHub

**Bước 1: Đặt câu hỏi khám phá (Discovery Questions)**
- Developer hiện đang tạo CV/Portfolio bằng cách nào?
- Họ mất bao lâu để hoàn thành một bộ CV + Portfolio?
- Điều gì khiến họ khó chịu nhất trong quá trình đó?
- Họ có sẵn sàng trả tiền để tiết kiệm thời gian/công sức đó không?

**Bước 2: Phỏng vấn người dùng (mẫu 5 câu hỏi rút gọn)**
| # | Câu hỏi phỏng vấn | Insight thu được (ví dụ) |
|---|---|---|
| 1 | "Lần gần nhất bạn cập nhật CV là khi nào, mất bao lâu?" | Trung bình 3–4 giờ, thường trì hoãn vì ngại dàn trang |
| 2 | "Bạn có Portfolio online không? Vì sao có/không?" | 60% không có vì "không biết thiết kế" |
| 3 | "Bạn lấy thông tin dự án để đưa vào CV từ đâu?" | Copy tay từ GitHub, dễ thiếu sót |
| 4 | "Bạn có gặp khó khi CV bị lỗi định dạng khi nộp online?" | Có, đặc biệt với hệ thống ATS |
| 5 | "Bạn sẵn sàng trả bao nhiêu cho 1 công cụ giải quyết việc này?" | 30–50% người được hỏi sẵn sàng trả phí tháng |

**Bước 3: Opportunity Solution Tree (rút gọn)**
```
Mục tiêu kinh doanh: Tăng số developer có thương hiệu cá nhân trực tuyến
 └─ Cơ hội: Developer tốn thời gian & thiếu tự tin khi tự làm CV/Portfolio
     ├─ Giải pháp A: Trình tạo Portfolio kéo-thả + đồng bộ GitHub
     ├─ Giải pháp B: CV builder chuẩn ATS, nhiều mẫu theo vị trí
     └─ Giải pháp C: AI gợi ý viết mô tả dự án/kỹ năng
```

**Bước 4: Xác nhận giả định (Assumption Mapping)**
| Giả định | Mức độ rủi ro | Cách kiểm chứng |
|---|---|---|
| Developer tin tưởng kết nối tài khoản GitHub | Cao | Test A/B nút "Đăng nhập bằng GitHub" trên landing page, đo tỷ lệ click |
| Người dùng sẵn sàng trả phí cho custom domain | Trung bình | Khảo sát giá (Van Westendorp) trên 50 người dùng thử |
| Mẫu Portfolio có sẵn là đủ, không cần code tuỳ biến | Trung bình | Usability test với 5 người dùng thật |

**Kết quả đầu ra của Product Discovery:** một **Problem Statement** được xác nhận, sẵn sàng đưa vào PRD:
> *"Developer (đặc biệt sinh viên mới ra trường và lập trình viên 2–5 năm kinh nghiệm) mất trung bình 3–4 giờ và thường trì hoãn việc cập nhật CV/Portfolio vì thiếu công cụ tổng hợp dữ liệu tự động và thiết kế sẵn có, dẫn đến bỏ lỡ cơ hội việc làm."*

---

## 3.2. Tài liệu Yêu cầu Sản phẩm (PRD)

### Vai trò trong quy trình
PRD là "hợp đồng" mô tả **cái gì** cần xây và **tại sao**, dựa trên kết quả Discovery ở bước 3.1.

### Demo minh họa
Tài liệu PRD đầy đủ cho DevHub đã được xây dựng ở phần trước của buổi học (file `PRD_DevHub_Portfolio_CV.docx`), bao gồm:

| Phần PRD | Nội dung tương ứng lấy từ Discovery |
|---|---|
| Bối cảnh & vấn đề | Trực tiếp từ Problem Statement ở mục 3.1 |
| Mục tiêu & KPI | Suy ra từ mục tiêu kinh doanh trong Opportunity Solution Tree |
| Personas | Dựng từ dữ liệu phỏng vấn (Minh – sinh viên, Lan – Fullstack, Đức – Freelancer) |
| Phạm vi (In/Out of scope) | Ưu tiên hoá 3 giải pháp (A, B, C) — chọn A + B cho MVP, C cho giai đoạn sau |
| Yêu cầu chức năng | Chi tiết hoá từng giải pháp thành các FR-xx cụ thể |

**Điểm cần nhớ:** PRD **không tự sinh ra từ hư không** — mỗi mục trong PRD nên trace ngược lại được một insight hoặc quyết định từ bước Discovery. Đây là lý do 3.1 luôn đứng trước 3.2.

---

## 3.3. Phân tích Yêu cầu (Requirements Analysis)

### Mục tiêu
Biến các câu yêu cầu PRD ở mức "ý tưởng" thành yêu cầu **rõ ràng, đo lường được, không mâu thuẫn**.

### Demo minh họa — Phân rã yêu cầu FR-20 đến FR-24 (module GitHub Integration)

**Yêu cầu gốc trong PRD:**
> "Người dùng kết nối tài khoản GitHub qua OAuth để lấy danh sách repository công khai."

**Bước 1 — Đặt câu hỏi làm rõ (Requirement Elicitation Questions):**
- Repository private có được đồng bộ không? → *Không, chỉ public.*
- Nếu người dùng có 200+ repo, hiển thị thế nào? → *Phân trang, mặc định sắp theo lần cập nhật gần nhất.*
- Điều gì xảy ra nếu người dùng thu hồi quyền truy cập GitHub giữa chừng? → *Hệ thống giữ dữ liệu đã đồng bộ lần cuối, hiển thị cảnh báo "Cần kết nối lại".*
- Tần suất đồng bộ tự động là bao lâu? → *Mỗi 24 giờ, hoặc thủ công bằng nút "Đồng bộ ngay".*

**Bước 2 — Phân loại yêu cầu theo MoSCoW:**
| Yêu cầu | Phân loại |
|---|---|
| Kết nối OAuth GitHub | Must have |
| Lấy tên, mô tả, ngôn ngữ, số sao của repo | Must have |
| Chọn repo làm dự án nổi bật | Must have |
| Đồng bộ tự động định kỳ | Should have |
| Biểu đồ đóng góp (contribution graph) | Could have |
| Đồng bộ private repo | Won't have (giai đoạn 1) |

**Bước 3 — Mô hình hoá luồng xử lý (Use Case dạng bảng)**
| Use Case | UC-05: Đồng bộ dự án từ GitHub |
|---|---|
| Actor chính | Người dùng đã đăng nhập |
| Điều kiện tiên quyết | Tài khoản đã liên kết GitHub OAuth |
| Luồng chính | 1. Người dùng vào trang "Dự án" → 2. Chọn "Đồng bộ từ GitHub" → 3. Hệ thống gọi GitHub API lấy danh sách repo → 4. Hiển thị danh sách để người dùng chọn repo nổi bật |
| Luồng phụ (Exception) | Nếu token hết hạn/bị thu hồi → hiển thị thông báo yêu cầu kết nối lại |
| Hậu điều kiện | Danh sách dự án được cập nhật trong Profile |

**Bước 4 — Kiểm tra chất lượng yêu cầu (Checklist)**
- [x] Rõ ràng (Clear) — không còn mơ hồ về "repository" nào được lấy
- [x] Đo lường được (Measurable) — có tần suất đồng bộ cụ thể (24h)
- [x] Khả thi (Feasible) — dựa trên giới hạn thật của GitHub API (rate limit)
- [x] Không mâu thuẫn với yêu cầu khác (Consistent)
- [x] Truy vết được về PRD gốc (Traceable) — liên kết tới FR-20→FR-24

---

## 3.4. User Stories & Tiêu chí Chấp nhận (Acceptance Criteria)

### Mục tiêu
Diễn đạt yêu cầu đã phân tích ở 3.3 dưới góc nhìn người dùng, kèm điều kiện để xác nhận "hoàn thành".

### Demo minh họa

**User Story chuẩn (định dạng "Là...Tôi muốn...Để..."):**
> **US-05**: Là một *người dùng đã đăng nhập*, tôi muốn *đồng bộ danh sách repository từ GitHub*, để *tôi không phải nhập tay thông tin dự án vào Portfolio*.

**Tiêu chí chấp nhận — định dạng Gherkin (Given–When–Then):**

```gherkin
Feature: Đồng bộ dự án từ GitHub

  Scenario: Đồng bộ thành công khi tài khoản đã liên kết GitHub
    Given người dùng đã đăng nhập và đã liên kết tài khoản GitHub
    When người dùng nhấn nút "Đồng bộ từ GitHub"
    Then hệ thống hiển thị danh sách repository công khai trong vòng 5 giây
    And mỗi repository hiển thị: tên, mô tả, ngôn ngữ chính, số sao

  Scenario: Token GitHub đã bị thu hồi
    Given người dùng đã từng liên kết GitHub nhưng đã thu hồi quyền truy cập
    When người dùng nhấn nút "Đồng bộ từ GitHub"
    Then hệ thống hiển thị thông báo "Kết nối GitHub đã hết hạn, vui lòng liên kết lại"
    And dữ liệu dự án đã đồng bộ trước đó vẫn được giữ nguyên, không bị xoá

  Scenario: Người dùng chưa từng liên kết GitHub
    Given người dùng đăng ký bằng Email, chưa liên kết GitHub
    When người dùng vào trang "Dự án"
    Then hệ thống hiển thị nút "Liên kết tài khoản GitHub" thay vì danh sách repo
```

**Bảng tổng hợp thêm vài User Story khác (đối chiếu mục 6 trong PRD):**

| Mã | User Story | 1 tiêu chí chấp nhận tiêu biểu |
|---|---|---|
| US-06 | Là người dùng, tôi muốn xuất CV ra PDF chuẩn ATS, để nộp hồ sơ trực tiếp | Given CV đã điền đủ thông tin bắt buộc, When nhấn "Xuất PDF", Then file tải xuống trong < 3 giây và không có watermark nếu tài khoản Premium |
| US-07 | Là người dùng, tôi muốn xuất bản Portfolio với link công khai, để chia sẻ cho nhà tuyển dụng | Given Portfolio ở trạng thái "Draft", When nhấn "Xuất bản", Then trạng thái chuyển "Published" và link `devhub.io/{username}` truy cập được ngay |
| US-08 | Là người dùng, tôi muốn xem số lượt xem Portfolio, để biết mức độ quan tâm | Given Portfolio đã publish và có lượt truy cập, When vào trang "Thống kê", Then hiển thị biểu đồ lượt xem 7/30 ngày gần nhất |

**Lưu ý sư phạm khi giảng/thực hành:** một User Story tốt nên đạt tiêu chí **INVEST** — Independent, Negotiable, Valuable, Estimable, Small, Testable. Có thể yêu cầu học viên tự chấm US-06, US-07, US-08 theo 6 tiêu chí này.

---

## 3.5. Đặc tả Tính năng (Feature Specification)

### Mục tiêu
Tài liệu chi tiết nhất, dành cho đội kỹ thuật/thiết kế triển khai — không còn chỗ cho suy đoán.

### Demo minh họa — Đặc tả tính năng: "Xuất bản Portfolio" (Publish Portfolio)

**1. Tổng quan**
- **Tên tính năng:** Xuất bản / Gỡ xuất bản Portfolio
- **Liên kết yêu cầu:** FR-35, FR-36, US-07
- **Người triển khai:** Frontend + Backend
- **Độ ưu tiên:** Cao (MVP)

**2. Mô tả chi tiết hành vi**
- Nút "Xuất bản" chỉ khả dụng khi Portfolio có tối thiểu: Họ tên, 1 ảnh đại diện, 1 dự án, 1 mục kỹ năng.
- Khi nhấn "Xuất bản":
  1. Hệ thống kiểm tra tính hợp lệ của dữ liệu bắt buộc.
  2. Nếu hợp lệ → tạo/khoá bản snapshot nội dung, gán trạng thái `status = published`.
  3. Sinh URL công khai theo mẫu `https://devhub.io/{username}` (nếu chưa có username, buộc người dùng đặt trước).
  4. Hiển thị modal xác nhận kèm nút "Sao chép liên kết" và "Xem trước".
- Khi nhấn "Gỡ xuất bản": trạng thái chuyển `draft`, URL công khai trả về trang 404 tuỳ chỉnh (không xoá dữ liệu).

**3. Giao diện & trạng thái (UI States)**
| Trạng thái | Hiển thị |
|---|---|
| Chưa đủ điều kiện xuất bản | Nút "Xuất bản" bị disable, tooltip liệt kê phần còn thiếu |
| Đang xử lý | Nút hiển thị spinner "Đang xuất bản..." |
| Thành công | Modal xác nhận + đường link + nút chia sẻ mạng xã hội |
| Lỗi hệ thống | Toast "Có lỗi xảy ra, vui lòng thử lại" + log lỗi gửi về hệ thống giám sát |

**4. Quy tắc nghiệp vụ (Business Rules)**
- BR-1: Mỗi tài khoản chỉ có 1 Portfolio được publish ở gói Free.
- BR-2: Username dùng làm URL phải là duy nhất toàn hệ thống, 3–30 ký tự, chỉ gồm chữ/số/gạch ngang.
- BR-3: Nội dung Portfolio đã publish được cache CDN tối đa 10 phút để đảm bảo tốc độ tải.

**5. Yêu cầu API (tóm tắt)**
| Method | Endpoint | Mô tả |
|---|---|---|
| POST | `/api/portfolios/{id}/publish` | Xuất bản Portfolio, trả về `publicUrl` |
| POST | `/api/portfolios/{id}/unpublish` | Gỡ xuất bản |
| GET | `/api/public/{username}` | Lấy dữ liệu Portfolio công khai (dùng cho SSR trang public) |

**6. Yêu cầu phi chức năng riêng cho tính năng**
- Trang Portfolio công khai phải render trong < 2 giây (P95), hỗ trợ SEO (SSR, meta tag Open Graph).
- Endpoint publish phải idempotent — gọi lại nhiều lần không tạo bản ghi trùng.

**7. Test case tiêu biểu**
| TC | Bước thực hiện | Kết quả mong đợi |
|---|---|---|
| TC-01 | Xuất bản Portfolio khi đủ dữ liệu | Trạng thái = published, link truy cập được |
| TC-02 | Xuất bản khi chưa có ảnh đại diện | Nút disable, tooltip nhắc thiếu ảnh |
| TC-03 | Gỡ xuất bản rồi truy cập lại link cũ | Trả về trang 404 tuỳ chỉnh, không lỗi 500 |
| TC-04 | Hai người dùng cùng đặt username trùng | Hệ thống chặn, báo "Username đã được sử dụng" |

---

## BÀI THỰC HÀNH 3 — Chạy Demo một số ví dụ minh họa

### Mục tiêu bài thực hành
Học viên tự tay đi qua đủ 5 bước (3.1 → 3.5) với **một tính năng khác** của DevHub (không trùng ví dụ mẫu ở trên), để hiểu rõ mạch liên kết giữa các tầng tài liệu.

### Đề bài gợi ý (chọn 1 trong 3)
1. **Tính năng "Tạo CV nhiều phiên bản theo vị trí ứng tuyển"**
2. **Tính năng "Nâng cấp gói Premium & thanh toán"**
3. **Tính năng "Gắn tên miền riêng (custom domain)"**

### Các bước thực hành (checklist theo mẫu demo ở trên)

- [ ] **Bước 1 – Product Discovery:** Viết 3–5 câu hỏi phỏng vấn giả định và 1 Problem Statement cho tính năng đã chọn.
- [ ] **Bước 2 – PRD:** Viết đoạn mô tả ngắn (3–5 câu) nêu tính năng này giải quyết vấn đề gì, thuộc mục tiêu KPI nào trong PRD gốc.
- [ ] **Bước 3 – Phân tích yêu cầu:** Lập bảng MoSCoW tối thiểu 5 dòng + 1 Use Case dạng bảng.
- [ ] **Bước 4 – User Story & Acceptance Criteria:** Viết tối thiểu 2 User Story kèm Acceptance Criteria dạng Gherkin (Given–When–Then).
- [ ] **Bước 5 – Feature Specification:** Điền đủ 7 mục như mẫu (Tổng quan, Mô tả hành vi, UI States, Business Rules, API, NFR riêng, Test case).

### Tiêu chí đánh giá bài thực hành
| Tiêu chí | Trọng số |
|---|---|
| Problem Statement rõ ràng, có insight cụ thể (không chung chung) | 20% |
| Yêu cầu được phân tích có MoSCoW + Use Case hợp lý | 20% |
| User Story đạt chuẩn INVEST, Acceptance Criteria đúng cú pháp Gherkin | 30% |
| Đặc tả tính năng đủ chi tiết để một dev khác đọc và code được ngay | 30% |

### Gợi ý thời lượng
- Thảo luận nhóm chọn đề bài: 5 phút
- Thực hành cá nhân/nhóm nhỏ: 30–35 phút
- Trình bày kết quả (2 nhóm ngẫu nhiên): 10 phút
- Nhận xét & tổng kết của giảng viên: 10 phút
