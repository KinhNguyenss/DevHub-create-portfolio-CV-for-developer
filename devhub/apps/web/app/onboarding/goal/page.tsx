import Link from "next/link";

export default function OnboardingGoalPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-[var(--font-inter)] selection:bg-primary selection:text-on-primary">
      <header className="w-full h-16 border-b border-surface-container-low bg-surface/80 backdrop-blur flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-[var(--font-geist-sans)]">D</div>
          <span className="font-semibold tracking-tight text-on-surface">DevHub</span>
          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono text-[10px] tracking-wider uppercase ml-2">Setup Wizard</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Lưu & Thoát</button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-surface-variant">
            {/* Avatar placeholder */}
            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-medium text-xs">AC</div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Progress Indicator */}
          <div className="flex flex-col items-center mb-10 w-full max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">Bước 1/4</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
              <div className="h-full w-1/4 bg-gradient-to-r from-primary via-primary-container to-secondary rounded-full"></div>
            </div>
          </div>

          <div className="text-center mb-12 space-y-3">
            <h1 className="text-4xl font-bold text-on-surface tracking-tight font-[var(--font-geist-sans)]">Bạn muốn tạo gì trên DevHub?</h1>
            <p className="text-base text-on-surface-variant">Chọn mục tiêu chính để chúng tôi tối ưu hóa trải nghiệm thiết lập cho bạn.</p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
            {/* Portfolio */}
            <div className="relative p-6 rounded-2xl bg-surface-container hover:bg-surface-container-high cursor-pointer transition-all border border-transparent hover:border-primary/30 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center text-2xl text-on-surface-variant group-hover:text-primary transition-colors mb-4">
                🌐
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-2 font-[var(--font-geist-sans)]">Portfolio Trực Tuyến</h3>
              <p className="text-sm text-on-surface-variant mb-6">Trưng bày dự án, kỹ năng và bài viết trên một trang web cá nhân chuyên nghiệp.</p>
              <ul className="space-y-2 text-left w-full text-sm">
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="text-secondary text-base">✓</span> Tên miền tùy chỉnh</li>
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="text-secondary text-base">✓</span> Giao diện tương tác</li>
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="text-secondary text-base">✓</span> Tích hợp Analytics</li>
              </ul>
            </div>

            {/* Resume / CV */}
            <div className="relative p-6 rounded-2xl bg-surface-container hover:bg-surface-container-high cursor-pointer transition-all border border-transparent hover:border-primary/30 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center text-2xl text-on-surface-variant group-hover:text-primary transition-colors mb-4">
                📄
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-2 font-[var(--font-geist-sans)]">CV / Resume</h3>
              <p className="text-sm text-on-surface-variant mb-6">Tạo CV PDF chuẩn định dạng máy quét ATS để nộp cho các công ty công nghệ lớn.</p>
              <ul className="space-y-2 text-left w-full text-sm">
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="text-secondary text-base">✓</span> Chuẩn ATS 1 cột</li>
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="text-secondary text-base">✓</span> Tối ưu hóa từ khóa</li>
                <li className="flex items-center gap-2 text-on-surface-variant"><span className="text-secondary text-base">✓</span> Xuất PDF in ấn</li>
              </ul>
            </div>

            {/* Combo (Pre-selected) */}
            <div className="relative p-6 rounded-2xl bg-surface-container-high ring-2 ring-primary cursor-pointer transition-all flex flex-col items-center text-center">
              <div className="absolute -top-3 px-3 py-1 bg-primary text-on-primary font-mono text-[10px] uppercase font-bold tracking-wider rounded-full">
                Đề xuất
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                ✓
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-2xl text-primary mb-4">
                ✨
              </div>
              <h3 className="text-xl font-semibold text-on-surface mb-2 font-[var(--font-geist-sans)]">Bộ đôi hoàn hảo</h3>
              <p className="text-sm text-on-surface-variant mb-6">Kết hợp cả Portfolio Web và CV ATS từ một nguồn dữ liệu duy nhất.</p>
              <ul className="space-y-2 text-left w-full text-sm">
                <li className="flex items-center gap-2 text-on-surface"><span className="text-secondary text-base">✓</span> Đồng bộ dữ liệu 1 lần</li>
                <li className="flex items-center gap-2 text-on-surface"><span className="text-secondary text-base">✓</span> Render 2 định dạng</li>
                <li className="flex items-center gap-2 text-on-surface"><span className="text-secondary text-base">✓</span> Tối đa cơ hội việc làm</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Link href="/" className="px-6 py-3 rounded-lg font-medium text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
              Quay lại
            </Link>
            <Link href="/onboarding/github" className="px-8 py-3 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-semibold text-sm shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all">
              Tiếp tục bước 2
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center border-t border-surface-container">
        <span className="font-mono text-xs text-outline">DevHub Engine v2.4</span>
      </footer>
    </div>
  );
}
