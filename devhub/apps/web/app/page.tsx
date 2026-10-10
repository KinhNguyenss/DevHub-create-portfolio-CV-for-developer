import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-[var(--font-inter)]">
      {/* ─── Navbar ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
        <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-on-primary font-bold text-sm font-[var(--font-geist-sans)]">D</span>
            </div>
            <span className="text-xl font-semibold text-on-surface tracking-tight font-[var(--font-geist-sans)]">DevHub</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors font-[var(--font-inter)]">Tính năng</a>
            <a href="#templates" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors font-[var(--font-inter)]">Mẫu giao diện</a>
            <a href="#how-it-works" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors font-[var(--font-inter)]">Cách hoạt động</a>
            <a href="#pricing" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors font-[var(--font-inter)]">Bảng giá</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors px-3 py-2 font-[var(--font-inter)]">
              Đăng nhập
            </Link>
            <Link href="/register" className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary text-sm font-medium shadow-[0_0_20px_-3px_rgba(192,193,255,0.45)] transition-all transform hover:scale-[1.01] font-[var(--font-inter)]">
              Tạo Portfolio của tôi
            </Link>
          </div>
        </div>
      </header>

      <main className="w-full pt-16 bg-surface min-h-screen">
        {/* ─── HERO ─── */}
        <section className="relative w-full overflow-hidden px-6 lg:px-12 pt-16 pb-24 lg:pb-32">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 left-1/4 w-[420px] h-[280px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high shadow-sm mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="font-mono text-[11px] text-primary tracking-wide uppercase font-medium">DevHub Engine v2.4 Live Sync</span>
              <span className="text-outline text-sm">→</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-[56px] font-bold leading-[1.15] tracking-[-0.03em] max-w-4xl text-on-surface mb-6 animate-fade-in delay-75 font-[var(--font-geist-sans)]">
              Xây dựng Portfolio giúp bạn{" "}
              <span className="gradient-text">luôn nổi bật</span>.
            </h1>

            {/* Subtext */}
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl mb-10 animate-fade-in delay-150">
              Biến hồ sơ GitHub thành Portfolio và CV lập trình viên chuyên nghiệp. Nhập dự án tự động, nâng tầm nội dung với AI, chọn giao diện mẫu tinh tế và xuất bản chỉ trong vài phút.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 animate-fade-in delay-225">
              <Link href="/register" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-medium text-sm shadow-[0_0_24px_-4px_rgba(192,193,255,0.45)] transition-all transform hover:scale-[1.01]">
                Tạo Portfolio của tôi
                <span className="text-base">⚡</span>
              </Link>
              <a href="#templates" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-medium text-sm transition-all">
                Khám phá Mẫu giao diện
                <span className="text-base">⊞</span>
              </a>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-2 font-mono text-xs text-outline mb-16 animate-fade-in delay-300">
              <span className="text-secondary text-sm">✓</span>
              <span>Không cần kỹ năng thiết kế</span>
              <span className="text-surface-variant">·</span>
              <span>Bắt đầu hoàn toàn miễn phí</span>
            </div>

            {/* Hero mockup */}
            <div className="relative w-full max-w-5xl mx-auto animate-fade-in delay-450">
              {/* Floating badges */}
              <div className="hidden lg:flex absolute -left-8 top-12 z-20 items-center gap-2.5 px-4 py-2.5 rounded-xl glass shadow-xl animate-float">
                <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs font-bold">✓</span>
                <span className="text-sm font-medium text-on-surface">Đã kết nối GitHub</span>
              </div>
              <div className="hidden lg:flex absolute -right-6 top-20 z-20 items-center gap-2.5 px-4 py-2.5 rounded-xl glass shadow-xl" style={{animationDelay: '1.5s'}}>
                <span className="text-tertiary">✨</span>
                <span className="text-sm font-medium text-on-surface">Tóm tắt tối ưu bởi AI</span>
              </div>
              <div className="hidden lg:flex absolute -left-10 bottom-24 z-20 items-center gap-2.5 px-4 py-2.5 rounded-xl glass shadow-xl" style={{animationDelay: '0.8s'}}>
                <span className="text-secondary">↻</span>
                <span className="text-sm font-medium text-on-surface">12 kho mã nguồn đã đồng bộ</span>
              </div>
              <div className="hidden lg:flex absolute -right-8 bottom-12 z-20 items-center gap-2.5 px-4 py-2.5 rounded-xl glass shadow-xl" style={{animationDelay: '2s'}}>
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">✓</span>
                <span className="text-sm font-medium text-on-surface">Portfolio đã xuất bản</span>
              </div>

              {/* Browser mockup */}
              <div className="w-full rounded-2xl bg-surface-container-lowest shadow-[0_20px_50px_-10px_rgba(192,193,255,0.18)] overflow-hidden text-left">
                <div className="h-11 px-4 bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-surface-variant" />
                    <span className="w-3 h-3 rounded-full bg-surface-variant" />
                    <span className="w-3 h-3 rounded-full bg-surface-variant" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-surface-container text-on-surface-variant font-mono text-xs w-80 justify-center">
                    <span className="text-secondary text-xs">🔒</span>
                    <span className="text-on-surface font-medium">devhub.vn/alexchen</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-sm">⌨</span>
                    <span className="text-sm">↗</span>
                  </div>
                </div>
                <div className="p-6 md:p-10 bg-surface-container-lowest">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8">
                    <div className="flex items-center gap-5">
                      <div className="w-20 h-20 rounded-2xl bg-surface-container-high flex items-center justify-center shadow-md">
                        <span className="text-3xl font-bold text-primary font-[var(--font-geist-sans)]">AC</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5">
                          <h2 className="text-2xl font-semibold text-on-surface tracking-[-0.01em] font-[var(--font-geist-sans)]">Alex Chen</h2>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-mono text-xs">Staff Level</span>
                        </div>
                        <p className="text-sm text-on-surface-variant">Senior Full Stack Engineer · Distributed Systems</p>
                        <div className="flex items-center gap-3 pt-1">
                          <span className="flex items-center gap-1 font-mono text-xs text-outline">📍 TP. Hồ Chí Minh</span>
                          <span className="flex items-center gap-1 font-mono text-xs text-primary">⌨ github.com/alexchen</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="px-4 py-2 rounded-xl bg-surface-container-low text-center">
                        <div className="text-xl font-semibold text-primary font-[var(--font-geist-sans)]">2,840</div>
                        <div className="font-mono text-xs text-on-surface-variant">Commits YTD</div>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-surface-container-low text-center">
                        <div className="text-xl font-semibold text-secondary font-[var(--font-geist-sans)]">3.4k★</div>
                        <div className="font-mono text-xs text-on-surface-variant">Stars Earned</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["TypeScript", "Go", "Rust", "Next.js 15", "Docker & K8s", "Apache Kafka"].map((tag, i) => (
                      <span key={tag} className={`px-2.5 py-1 rounded bg-surface-container font-mono text-xs ${i === 0 ? 'text-primary' : i === 1 ? 'text-secondary' : i === 2 ? 'text-primary-fixed' : i === 4 ? 'text-tertiary' : 'text-on-surface'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="p-6 rounded-xl bg-surface-container-low shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">🧠</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)]">Distributed Cache Engine</span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-mono text-xs">Featured</span>
                        </div>
                        <span className="font-mono text-xs text-outline">github.com/alexchen/dist-cache-engine</span>
                      </div>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Động cơ bộ nhớ đệm phân tán hỗ trợ LRU cluster hai tầng, zero-allocation memory serialization. Giảm 38% chi phí compute.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRUST STRIP ─── */}
        <section className="w-full bg-surface-container-lowest py-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-outline">
                Tất cả những gì bạn cần để định hình vị thế kỹ sư phần mềm
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
              {[
                { icon: "↺", color: "text-primary", label: "Tích hợp GitHub", sub: "Một chạm tự động" },
                { icon: "🧠", color: "text-secondary", label: "AI tinh chỉnh", sub: "Tác động định lượng" },
                { icon: "📱", color: "text-tertiary", label: "Mẫu giao diện", sub: "Chuẩn kỹ thuật cao cấp" },
                { icon: "📄", color: "text-primary-fixed", label: "CV chuẩn ATS", sub: "Vượt qua mọi bộ lọc" },
                { icon: "🌐", color: "text-secondary", label: "Tên miền công khai", sub: "Edge CDN toàn cầu" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-surface-container-low shadow-sm">
                  <span className={`text-2xl mb-2 ${item.color}`}>{item.icon}</span>
                  <span className="text-sm font-medium text-on-surface">{item.label}</span>
                  <span className="text-xs text-on-surface-variant mt-0.5">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROBLEM vs SOLUTION ─── */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="font-mono text-xs text-primary tracking-wider uppercase font-semibold">Góc nhìn Nhà Tuyển Dụng</span>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-on-surface font-[var(--font-geist-sans)]">
                GitHub cho thấy những gì bạn viết.<br />
                <span className="gradient-text">DevHub cho thấy bạn là ai.</span>
              </h2>
              <p className="text-sm text-on-surface-variant">
                Kho lưu trữ của bạn chứa đựng hàng ngàn dòng code giá trị, nhưng Tech Recruiter chỉ dành 6 giây để quyết định có nên phỏng vấn bạn hay không.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before */}
              <div className="p-8 lg:p-10 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-error-container/40 text-error flex items-center justify-center font-bold">✕</span>
                    <span className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)]">Khi chưa dùng DevHub</span>
                  </div>
                  <span className="font-mono text-xs text-error bg-error-container/20 px-3 py-1 rounded-full">Tỷ lệ phản hồi &lt; 5%</span>
                </div>
                <ul className="space-y-4">
                  {[
                    { title: "Commit message lộn xộn:", desc: "Các commit kiểu \"fix bug\", \"update logic\" che khuất năng lực giải quyết vấn đề cốt lõi." },
                    { title: "Dự án học tập lẫn lộn:", desc: "Repository thử nghiệm sinh viên hiển thị ngang hàng với hệ thống doanh nghiệp." },
                    { title: "Không có định vị cá nhân:", desc: "Không nêu rõ tech stack sở trường, phạm vi trách nhiệm và vai trò lãnh đạo kỹ thuật." },
                    { title: "CV bị bộ lọc ATS loại bỏ:", desc: "Định dạng PDF nhiều cột, ảnh chân dung làm hỏng hệ thống scan tự động." },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3 text-on-surface-variant text-sm">
                      <span className="text-error text-lg shrink-0 mt-0.5">⚠</span>
                      <span><strong className="text-on-surface">{item.title}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-surface-container-low">
                  <span className="font-mono text-xs text-on-surface-variant">// 78% hồ sơ kỹ sư xuất sắc bị loại tại vòng CV tự động do parsing lỗi.</span>
                </div>
              </div>
              {/* After */}
              <div className="p-8 lg:p-10 rounded-2xl bg-surface-container-low shadow-[0_15px_40px_-5px_rgba(192,193,255,0.2)] flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-72 h-72 bg-primary/20 rounded-full blur-[90px] pointer-events-none" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold">✓</span>
                    <span className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)]">Với DevHub</span>
                  </div>
                  <span className="font-mono text-xs text-primary bg-primary/20 px-3 py-1 rounded-full">Lời mời phỏng vấn x3</span>
                </div>
                <ul className="space-y-4 relative z-10">
                  {[
                    { title: "Portfolio tuyển dụng ấn tượng:", desc: "Giao diện sắc nét chuẩn visual của các công ty công nghệ top đầu." },
                    { title: "CV chuẩn hóa cấu trúc ATS:", desc: "Tự động dịch chuyển dự án sang dạng PDF 1 cột đạt điểm 100% trên Greenhouse và Lever." },
                    { title: "Làm nổi bật tác động kinh doanh:", desc: "AI biến đổi mô tả repo thành tỷ lệ giảm latency, throughput tải, và doanh số tối ưu." },
                    { title: "Kiểm duyệt 1-click cho Tech Lead:", desc: "Tự động liên kết live demo, tài liệu swagger và benchmark proofs." },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3 text-on-surface text-sm">
                      <span className="text-secondary text-lg shrink-0 mt-0.5">✓</span>
                      <span><strong>{item.title}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-xl bg-surface-container text-on-surface flex items-center justify-between relative z-10">
                  <span className="font-mono text-xs text-primary">Tỷ lệ đỗ sàng lọc sơ loại</span>
                  <span className="text-xl font-semibold text-secondary font-[var(--font-geist-sans)]">94.8%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface-container-lowest" id="features">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-3">
                <span className="font-mono text-xs text-secondary uppercase font-semibold tracking-wider">Hệ Sinh Thái DevHub</span>
                <h2 className="text-4xl font-semibold tracking-tight text-on-surface font-[var(--font-geist-sans)]">Mọi công cụ bạn cần để hiện diện chuyên nghiệp.</h2>
              </div>
              <p className="text-sm text-on-surface-variant max-w-md">Được thiết kế chuyên sâu cho developer, tự động hóa quy trình tổng hợp hồ sơ năng lực.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "⌨", color: "text-primary bg-primary/10", title: "Đồng bộ GitHub trực tiếp", desc: "Tự động trích xuất danh sách kho lưu trữ, số sao, commit streak, và tính toán tỷ lệ phân bổ ngôn ngữ lập trình theo thời gian thực.", link: "REST API & GraphQL v4 →", linkColor: "text-primary" },
                { icon: "🧠", color: "text-secondary bg-secondary/10", title: "AI viết hồ sơ kỹ thuật", desc: "LLM phân tích README, pull requests và kiến trúc commit để chuyển đổi ghi chú khô khan thành thành tựu định lượng theo chuẩn Google X-Y-Z.", link: "Mô hình GPT-4o tinh chỉnh →", linkColor: "text-secondary" },
                { icon: "🎨", color: "text-tertiary bg-tertiary/10", title: "Bộ sưu tập mẫu tinh tế", desc: "Từ Dark IDE, Terminal cổ điển đến Swiss tối giản, từng mẫu được tối ưu cho màn hình kỹ sư với typography sắc sảo.", link: "4 Phong cách độc quyền →", linkColor: "text-tertiary" },
              ].map((f) => (
                <div key={f.title} className="p-8 rounded-2xl bg-surface-container-low shadow-md space-y-5 hover:bg-surface-container transition-all">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${f.color}`}>{f.icon}</div>
                  <h3 className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)]">{f.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
                  <span className={`inline-flex items-center gap-1 font-mono text-xs ${f.linkColor}`}>{f.link}</span>
                </div>
              ))}
              <div className="md:col-span-2 p-8 rounded-2xl bg-surface-container-low shadow-md space-y-5 hover:bg-surface-container transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed/20 flex items-center justify-center text-2xl text-primary-fixed">✅</div>
                  <h3 className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)]">Trình tạo CV chuẩn ATS (Greenhouse, Lever, Workday)</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl">
                    Xuất bản PDF dạng văn bản thuần 1 cột không bao giờ bị hệ thống quét CV tự động loại bỏ. Tự động kiểm tra mật độ từ khóa kỹ thuật phù hợp với vị trí Senior / Tech Lead.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {["Điểm tương thích ATS: 100/100", "Chuẩn in ấn Vector PDF", "Chống vỡ định dạng parser"].map((tag) => (
                    <div key={tag} className="px-3 py-1.5 rounded-lg bg-surface-container font-mono text-xs text-on-surface">{tag}</div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-surface-container-low shadow-md space-y-5 hover:bg-surface-container transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-2xl text-secondary-container">🌐</div>
                  <h3 className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)]">Tên miền & Edge CDN</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    URL ngắn gọn <code className="text-primary font-mono text-xs">devhub.vn/@username</code> hoặc ánh xạ tên miền riêng (CNAME) với SSL tự động bởi Cloudflare Edge.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-secondary-container">TTFB toàn cầu &lt; 30ms →</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface" id="how-it-works">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
              <span className="font-mono text-xs text-primary uppercase font-semibold tracking-wider">Quy Trình Hoạt Động</span>
              <h2 className="text-4xl font-semibold tracking-tight text-on-surface font-[var(--font-geist-sans)]">Từ GitHub đến hồ sơ chuyên nghiệp chỉ trong vài phút.</h2>
              <p className="text-sm text-on-surface-variant">Không cần kéo thả rối rắm, không cần viết mã giao diện thủ công.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "BƯỚC 01", color: "text-primary bg-primary/10", title: "Kết nối GitHub", desc: "Xác thực OAuth 2.0 an toàn. DevHub chỉ đọc metadata công khai, tuyệt đối không can thiệp mã nguồn bí mật.", note: "🔒 Zero repo exposure" },
                { step: "BƯỚC 02", color: "text-secondary bg-secondary/10", title: "Chọn lọc & Trích xuất", desc: "Chọn repository trọng tâm. Hệ thống tự động phân tích commit frequency, pull request và tech stacks.", note: "🔽 Tự động khử repo rác" },
                { step: "BƯỚC 03", color: "text-tertiary bg-tertiary/10", title: "Tinh chỉnh với AI", desc: "AI đề xuất tóm tắt chuyên môn, biến đổi commit thô thành gạch đầu dòng tác động ấn tượng chuẩn ATS.", note: "✨ Chuẩn cấu trúc X-Y-Z" },
                { step: "BƯỚC 04", color: "text-primary-fixed bg-primary-container/20", title: "Xuất bản & Chia sẻ", desc: "Nhận liên kết công khai tức thì hoặc tải về CV PDF chuẩn format để nộp hồ sơ tới các tập đoàn lớn.", note: "📤 Ready for interview" },
              ].map((s) => (
                <div key={s.step} className="relative p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4">
                  <div className="space-y-4">
                    <span className={`font-mono text-xs px-2.5 py-1 rounded ${s.color}`}>{s.step}</span>
                    <h3 className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)]">{s.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-on-surface-variant font-mono text-xs">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface-container-lowest" id="pricing">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="font-mono text-xs text-primary uppercase font-semibold tracking-wider">Bảng Giá</span>
              <h2 className="text-4xl font-semibold tracking-tight text-on-surface font-[var(--font-geist-sans)]">Bắt đầu miễn phí. Nâng cấp khi sẵn sàng.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Free", price: "0đ", period: "/tháng", color: "border-outline-variant", highlight: false, features: ["1 Portfolio", "3 GitHub repos", "Mẫu giao diện cơ bản", "Tên miền devhub.vn/@you"], cta: "Bắt đầu miễn phí" },
                { name: "Pro", price: "199.000đ", period: "/tháng", color: "border-primary shadow-[0_0_40px_-8px_rgba(192,193,255,0.4)]", highlight: true, features: ["Không giới hạn Portfolio", "Tất cả GitHub repos", "AI viết hồ sơ kỹ thuật", "Mẫu giao diện độc quyền", "CV chuẩn ATS PDF export", "Tên miền riêng (CNAME)", "Analytics chi tiết"], cta: "Bắt đầu dùng Pro" },
                { name: "Team", price: "599.000đ", period: "/tháng", color: "border-outline-variant", highlight: false, features: ["5 thành viên", "Tất cả tính năng Pro", "Shared design system", "Priority support", "Custom domain riêng"], cta: "Liên hệ Sales" },
              ].map((plan) => (
                <div key={plan.name} className={`p-8 rounded-2xl border-2 ${plan.color} ${plan.highlight ? 'bg-surface-container-low' : 'bg-surface-container-lowest'} flex flex-col gap-6 relative`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-on-primary font-mono text-xs">Phổ biến nhất</div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)]">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-bold text-on-surface font-[var(--font-geist-sans)]">{plan.price}</span>
                      <span className="text-sm text-on-surface-variant">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span className="text-secondary">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/register" className={`w-full py-3 rounded-lg text-center text-sm font-medium transition-all ${plan.highlight ? 'bg-primary text-on-primary hover:bg-primary-fixed shadow-[0_0_20px_-4px_rgba(192,193,255,0.4)]' : 'bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant'}`}>
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section className="w-full py-24 px-6 lg:px-12 bg-surface relative overflow-hidden">
          <div className="absolute inset-0 glow-primary pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface font-[var(--font-geist-sans)]">
              Sẵn sàng để <span className="gradient-text">nổi bật</span>?
            </h2>
            <p className="text-lg text-on-surface-variant">
              Tham gia cùng hàng nghìn lập trình viên đang dùng DevHub để chinh phục vị trí mơ ước.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-semibold text-base shadow-[0_0_32px_-4px_rgba(192,193,255,0.5)] transition-all transform hover:scale-[1.02] animate-glow-pulse">
                Tạo Portfolio miễn phí
                <span>→</span>
              </Link>
            </div>
            <p className="font-mono text-xs text-outline">Không cần thẻ tín dụng · Bắt đầu trong 2 phút</p>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="w-full py-12 px-6 lg:px-12 bg-surface-container-lowest border-t border-outline-variant">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-on-primary font-bold text-xs">D</span>
              </div>
              <span className="text-base font-semibold text-on-surface font-[var(--font-geist-sans)]">DevHub</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant">v2.4 LTS</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-on-surface-variant">
              <a href="#" className="hover:text-on-surface transition-colors">Điều khoản</a>
              <a href="#" className="hover:text-on-surface transition-colors">Bảo mật</a>
              <a href="#" className="hover:text-on-surface transition-colors">API</a>
              <a href="#" className="hover:text-on-surface transition-colors">Blog</a>
            </div>
            <p className="font-mono text-xs text-outline">© 2026 DevHub. Xây dựng cho lập trình viên.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
