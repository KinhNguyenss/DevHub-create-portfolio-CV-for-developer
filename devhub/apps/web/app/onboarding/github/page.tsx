import Link from "next/link";

export default function OnboardingGithubPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-[var(--font-inter)] selection:bg-primary selection:text-on-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-[var(--font-geist-sans)]">D</div>
          <span className="font-semibold tracking-tight text-on-surface">DevHub</span>
          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono text-[10px] tracking-wider uppercase ml-2">Setup Wizard</span>
        </div>
        <Link href="/workspace/projects" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
          Bỏ qua bước này <span>→</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center w-full px-4 md:px-12 relative z-10 py-8">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Progress Banner */}
          <div className="w-full mb-12 p-6 rounded-2xl bg-surface-container-low/90 backdrop-blur border border-surface-container shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-mono text-xs font-semibold text-secondary uppercase tracking-widest">BƯỚC 2/4</span>
                </div>
                <h2 className="text-xl font-semibold text-on-surface font-[var(--font-geist-sans)]">Kết nối nguồn dữ liệu GitHub</h2>
              </div>
              <div className="flex-1 max-w-md w-full">
                <div className="flex justify-between font-mono text-xs text-on-surface-variant mb-2">
                  <span>Mục tiêu</span>
                  <span className="text-on-surface font-medium">GitHub</span>
                  <span>Hồ sơ</span>
                  <span>Giao diện</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                  <div className="h-full w-2/4 bg-gradient-to-r from-secondary via-primary to-primary-container rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Explainer */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight font-[var(--font-geist-sans)]">
                  Kết nối GitHub của bạn. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mọi thứ sẽ tự động hóa.</span>
                </h1>
                <p className="text-lg text-on-surface-variant max-w-xl">
                  DevHub sử dụng API của GitHub để trích xuất kho lưu trữ công khai, đo lường đóng góp và tự động tạo hồ sơ năng lực của bạn trong vài giây.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "📁", color: "text-primary", title: "Kho mã Repository", desc: "Tự động lấy danh sách dự án nổi bật và mã nguồn bạn ghim." },
                  { icon: "⚡", color: "text-secondary", title: "Ngôn ngữ & Tech Stack", desc: "Phân tích số liệu ngôn ngữ để vẽ biểu đồ kỹ năng chính xác." },
                  { icon: "⭐", color: "text-tertiary", title: "Stars & Đóng góp", desc: "Hiển thị commit streak và số sao đạt được từ cộng đồng." },
                  { icon: "👤", color: "text-primary-fixed", title: "Hồ sơ Developer", desc: "Đồng bộ avatar, bio và các liên kết xã hội tự động." }
                ].map(b => (
                  <div key={b.title} className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
                    <div className={`text-2xl mb-2 ${b.color}`}>{b.icon}</div>
                    <div className="font-semibold text-on-surface mb-1 font-[var(--font-geist-sans)]">{b.title}</div>
                    <div className="text-xs text-on-surface-variant leading-relaxed">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: OAuth Action */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] p-8 rounded-2xl bg-surface-container-low shadow-2xl border border-surface-container text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary-container"></div>
                
                <div className="w-20 h-20 mx-auto bg-surface-container-lowest rounded-2xl flex items-center justify-center shadow-inner relative">
                  <svg className="w-10 h-10 text-on-surface" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                  </svg>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center border-4 border-surface-container-low shadow-sm">
                    <span className="text-on-primary text-xs">⚡</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-on-surface font-[var(--font-geist-sans)]">Cấp quyền truy cập</h3>
                  <p className="text-sm text-on-surface-variant px-4">
                    DevHub chỉ yêu cầu quyền đọc đối với dữ liệu công khai (read:user, public_repo). Không can thiệp mã nguồn riêng tư.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <Link href="/onboarding/profile" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-on-surface hover:bg-surface-variant text-background hover:text-on-surface font-semibold text-sm transition-all shadow-md">
                    Kết nối với GitHub
                  </Link>
                  
                  <div className="flex items-center gap-2 justify-center text-xs text-outline">
                    <span className="w-3 h-3 text-secondary">🔒</span> 256-bit TLS Encryption
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
