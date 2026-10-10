import Link from "next/link";

export default function OnboardingProfilePage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-[var(--font-inter)] selection:bg-primary selection:text-on-primary">
      {/* Header */}
      <header className="w-full h-14 border-b border-surface-container-low bg-surface flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary text-on-primary font-bold flex items-center justify-center text-xs font-[var(--font-geist-sans)]">D</div>
            <span className="font-semibold text-sm tracking-tight">Onboarding Control Plane</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <div className="px-3 py-1.5 text-sm text-on-surface-variant hover:bg-surface-container rounded-md cursor-pointer transition-colors">Connect Repositories</div>
            <div className="px-3 py-1.5 text-sm text-primary font-medium bg-primary/10 rounded-md cursor-pointer">ATS Resume Engine</div>
            <div className="px-3 py-1.5 text-sm text-on-surface-variant hover:bg-surface-container rounded-md cursor-pointer transition-colors">Metrics & Verification</div>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-outline bg-surface-container px-2 py-1 rounded">Step 03 / 04</span>
          <div className="w-7 h-7 rounded-full bg-surface-container-highest border border-surface-variant flex items-center justify-center text-xs font-medium text-primary">AC</div>
        </div>
      </header>

      {/* Sub-header Ribbon */}
      <div className="w-full border-b border-surface-container-low bg-surface-container-lowest px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-secondary font-mono text-sm">{">_"}</span>
          <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">DevHub Control Engine</span>
          <div className="flex items-center gap-1.5 ml-4 px-2 py-0.5 rounded bg-secondary/10">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-mono text-[10px] text-secondary tracking-widest uppercase">Syncing Active</span>
          </div>
        </div>
        <button className="text-xs text-on-surface-variant hover:text-on-surface underline">Lưu & Thoát</button>
      </div>

      <main className="flex-1 flex flex-col items-center w-full px-4 md:px-8 py-8">
        <div className="w-full max-w-[1400px]">
          {/* Stepper */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            <div className="p-3 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-between text-sm">
              <span className="font-medium">01 Mục tiêu</span>
              <span className="text-secondary">✓</span>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-low text-on-surface-variant flex items-center justify-between text-sm">
              <span className="font-medium">02 GitHub Sync</span>
              <span className="text-secondary">✓</span>
            </div>
            <div className="p-3 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-between text-sm shadow-sm">
              <span className="font-bold">03 Hồ sơ chuyên môn</span>
              <span className="w-2 h-2 rounded-full bg-on-primary-container animate-pulse"></span>
            </div>
            <div className="p-3 rounded-lg bg-surface-container-lowest text-outline flex items-center justify-between text-sm opacity-60">
              <span className="font-medium">04 Chọn Giao diện</span>
            </div>
          </div>
          
          <div className="w-full h-1 rounded-full bg-surface-container mb-8 overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-primary via-primary-container to-secondary rounded-full"></div>
          </div>

          <h1 className="text-3xl font-bold text-on-surface tracking-tight mb-8 font-[var(--font-geist-sans)]">Hoàn thiện hồ sơ của bạn</h1>

          {/* Main Layout 12 cols */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: Form (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Card 1: Identity */}
              <div className="p-6 rounded-xl bg-surface-container-low shadow-sm border border-surface-container space-y-6">
                <h2 className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)] border-b border-surface-container pb-4">Định danh cá nhân</h2>
                
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-surface-container-high border-2 border-surface-variant flex items-center justify-center text-xl text-primary font-bold overflow-hidden">
                      <div className="w-full h-full bg-primary/20 flex items-center justify-center">AC</div>
                    </div>
                    <button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-surface-container-highest border border-outline flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors">
                      <span className="text-[12px]">📷</span>
                    </button>
                  </div>
                  <div className="space-y-2">
                    <button className="px-4 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-sm font-medium transition-colors border border-outline/30">
                      Tải ảnh lên
                    </button>
                    <button className="flex items-center gap-2 px-4 py-1.5 rounded text-primary hover:bg-primary/10 text-sm font-medium transition-colors">
                      <span className="text-base">↻</span> Đồng bộ từ GitHub
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Họ và tên</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary text-sm text-on-surface" defaultValue="Alex Chen" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Chức danh nghề nghiệp</label>
                    <input type="text" className="w-full h-10 px-3 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary text-sm text-on-surface" defaultValue="Staff Distributed Systems Engineer" />
                  </div>
                </div>

                <div className="space-y-1.5 relative">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-on-surface">Giới thiệu bản thân (Bio)</label>
                    <span className="font-mono text-xs text-outline">128/500</span>
                  </div>
                  <textarea rows={4} className="w-full p-3 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary text-sm text-on-surface resize-none" defaultValue="Kỹ sư phần mềm đam mê xây dựng các hệ thống phân tán hiệu suất cao. Có kinh nghiệm sâu sắc trong việc tối ưu hóa backend với Rust và Go."></textarea>
                  
                  {/* AI Generate Prompt */}
                  <div className="absolute bottom-3 right-3">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 text-xs font-medium transition-colors">
                      <span className="text-sm">✨</span> Dùng AI viết lại
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: Contact & Links */}
              <div className="p-6 rounded-xl bg-surface-container-low shadow-sm border border-surface-container space-y-6">
                <h2 className="text-lg font-semibold text-on-surface font-[var(--font-geist-sans)] border-b border-surface-container pb-4">Liên hệ & Mạng xã hội</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Email công việc</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">✉</span>
                      <input type="email" className="w-full h-10 pl-8 pr-3 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary text-sm text-on-surface" defaultValue="alex.chen@example.com" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">GitHub URL</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">💻</span>
                      <input type="text" className="w-full h-10 pl-8 pr-3 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary text-sm text-on-surface" defaultValue="github.com/alexchen" readOnly />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">LinkedIn</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">🔗</span>
                      <input type="text" className="w-full h-10 pl-8 pr-3 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary text-sm text-on-surface" placeholder="linkedin.com/in/username" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Địa điểm</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">📍</span>
                      <input type="text" className="w-full h-10 pl-8 pr-3 rounded-lg bg-surface-container-lowest border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary text-sm text-on-surface" placeholder="Thành phố, Quốc gia" defaultValue="Hồ Chí Minh, VN" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-end pt-4">
                <Link href="/onboarding/template" className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-semibold text-sm shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all">
                  Lưu & Tiếp tục <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Col: Live Preview (5 cols) */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="sticky top-24 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-2xl overflow-hidden flex flex-col h-[600px]">
                <div className="h-10 bg-surface-container-low border-b border-surface-container flex items-center px-4 gap-2">
                  <span className="w-3 h-3 rounded-full bg-error"></span>
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <div className="ml-4 font-mono text-[10px] text-on-surface-variant uppercase tracking-wider flex-1 text-center">Live Preview</div>
                </div>
                
                <div className="flex-1 p-8 bg-surface overflow-y-auto">
                  {/* Mock CV Header */}
                  <div className="text-center space-y-4 mb-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold text-primary mb-2">AC</div>
                    <h2 className="text-3xl font-bold text-on-surface font-[var(--font-geist-sans)] tracking-tight">Alex Chen</h2>
                    <p className="text-primary font-medium">Staff Distributed Systems Engineer</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-on-surface-variant font-mono">
                      <span>alex.chen@example.com</span>
                      <span>•</span>
                      <span>Hồ Chí Minh, VN</span>
                    </div>
                  </div>

                  {/* Mock Bio */}
                  <div className="mb-8">
                    <h3 className="text-sm uppercase tracking-widest text-outline border-b border-surface-container pb-2 mb-3 font-semibold">Tóm tắt</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Kỹ sư phần mềm đam mê xây dựng các hệ thống phân tán hiệu suất cao. Có kinh nghiệm sâu sắc trong việc tối ưu hóa backend với Rust và Go.
                    </p>
                  </div>

                  {/* Mock Skills (from GitHub) */}
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-outline border-b border-surface-container pb-2 mb-3 font-semibold">Công nghệ nổi bật</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs font-mono text-on-surface">Rust</span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs font-mono text-on-surface">Go</span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs font-mono text-on-surface">Kubernetes</span>
                      <span className="px-2.5 py-1 rounded-md bg-surface-container-low text-xs font-mono text-on-surface">Distributed Systems</span>
                    </div>
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
