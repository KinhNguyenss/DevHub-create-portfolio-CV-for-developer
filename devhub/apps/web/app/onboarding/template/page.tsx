import Link from "next/link";

export default function OnboardingTemplatePage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-[var(--font-inter)] selection:bg-primary selection:text-on-primary">
      {/* Header */}
      <header className="w-full h-14 border-b border-surface-container-low bg-surface flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary text-on-primary font-bold flex items-center justify-center text-xs font-[var(--font-geist-sans)]">D</div>
            <span className="font-semibold text-sm tracking-tight">DevHub</span>
            <span className="font-mono text-[10px] text-outline ml-1">portfolio_core.v2</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">Step 4 / 4 • Template Gallery</span>
          <button className="text-xs font-medium px-4 py-1.5 rounded-md bg-surface-container hover:bg-surface-container-high transition-colors">Save & Exit</button>
          <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center text-xs text-primary font-bold">AC</div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center w-full px-4 md:px-8 py-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1 flex items-center px-4">
              <span className="text-xs font-medium line-through text-outline">1. Mục tiêu</span>
              <span className="text-secondary ml-1">✓</span>
            </div>
            <div className="w-px h-4 bg-surface-variant"></div>
            <div className="flex-1 flex items-center px-4">
              <span className="text-xs font-medium line-through text-outline">2. GitHub Sync</span>
              <span className="text-secondary ml-1">✓</span>
            </div>
            <div className="w-px h-4 bg-surface-variant"></div>
            <div className="flex-1 flex items-center px-4">
              <span className="text-xs font-medium line-through text-outline">3. Hồ sơ</span>
              <span className="text-secondary ml-1">✓</span>
            </div>
            <div className="w-px h-4 bg-surface-variant"></div>
            <div className="flex-1 flex items-center justify-center px-4 bg-primary/10 rounded-full py-1">
              <span className="w-4 h-4 rounded-full bg-primary text-background text-[10px] font-bold flex items-center justify-center mr-2">4</span>
              <span className="text-xs font-bold text-primary">Giao diện</span>
            </div>
          </div>
          
          <div className="w-full h-1 rounded-full bg-surface-container mb-10 overflow-hidden">
            <div className="h-full w-[95%] bg-gradient-to-r from-primary-container via-primary to-secondary rounded-full"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight text-center mb-10 font-[var(--font-geist-sans)]">Chọn mẫu Portfolio</h1>

          {/* Filter Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 rounded-xl bg-surface-container-low border border-surface-container mb-8">
            <div className="flex overflow-x-auto w-full md:w-auto hide-scrollbar gap-1">
              <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-medium whitespace-nowrap shadow-sm">Tất cả</button>
              <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest text-sm font-medium whitespace-nowrap transition-colors">Tối giản</button>
              <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest text-sm font-medium whitespace-nowrap transition-colors">Chuyên nghiệp</button>
              <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest text-sm font-medium whitespace-nowrap transition-colors">Hiện đại</button>
              <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest text-sm font-medium whitespace-nowrap transition-colors">Sáng tạo</button>
              <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest text-sm font-medium whitespace-nowrap transition-colors">Developer</button>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto px-2">
              <select className="h-9 px-3 rounded-md bg-surface-container-highest border border-outline/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface">
                <option>Đề xuất</option>
                <option>Mới nhất</option>
                <option>Phổ biến nhất</option>
              </select>
              <div className="flex bg-surface-container-highest rounded-md p-0.5 border border-outline/30">
                <button className="p-1.5 bg-surface-variant rounded shadow-sm text-on-surface">
                  <span className="block w-4 h-4 text-xs leading-none text-center">⊞</span>
                </button>
                <button className="p-1.5 text-on-surface-variant hover:text-on-surface">
                  <span className="block w-4 h-4 text-xs leading-none text-center">☰</span>
                </button>
              </div>
            </div>
          </div>

          {/* Template Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            
            {/* Template 1: Classic Terminal */}
            <div className="group rounded-2xl bg-surface-container overflow-hidden border border-transparent hover:border-primary/50 transition-all shadow-md">
              <div className="relative aspect-[4/3] bg-surface-container-lowest overflow-hidden">
                {/* Mockup Frame */}
                <div className="absolute inset-2 rounded-xl border border-surface-container-high bg-[#1e1e1e] shadow-xl overflow-hidden flex flex-col">
                  <div className="h-6 bg-[#2d2d2d] flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="p-4 font-mono text-xs text-[#00ff00] opacity-80">
                    <p>$ whoami</p>
                    <p>alexchen</p>
                    <p className="mt-2">$ ls ./skills</p>
                    <p>rust  go  kubernetes</p>
                  </div>
                </div>
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3 transition-opacity">
                  <button className="px-6 py-2 rounded-lg bg-primary text-on-primary font-medium text-sm shadow-lg">Chọn mẫu này</button>
                  <button className="px-6 py-2 rounded-lg bg-surface-container text-on-surface font-medium text-sm">Xem trước</button>
                </div>
              </div>
              <div className="p-4 bg-surface-container-low border-t border-surface-container">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-on-surface font-[var(--font-geist-sans)]">Classic Terminal</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">Free</span>
                </div>
                <p className="text-xs text-on-surface-variant">Dành cho CLI lovers.</p>
              </div>
            </div>

            {/* Template 2: Developer Pro (Pre-selected) */}
            <div className="group rounded-2xl bg-surface-container overflow-hidden border-2 border-primary ring-4 ring-primary/20 transition-all shadow-[0_0_30px_-5px_rgba(192,193,255,0.3)] relative">
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-primary text-on-primary font-mono text-[10px] uppercase font-bold tracking-wider shadow-md">Đề xuất cho bạn</div>
              <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-medium text-xs shadow-md">✓ Đã chọn</div>
              
              <div className="relative aspect-[4/3] bg-surface-container-lowest overflow-hidden">
                <div className="absolute inset-2 rounded-xl border border-surface-container-high bg-[#0f131d] shadow-xl overflow-hidden flex flex-col p-4">
                   <div className="flex gap-3 mb-4">
                     <div className="w-10 h-10 rounded bg-primary/20"></div>
                     <div className="space-y-1.5 flex-1">
                       <div className="w-1/2 h-3 bg-surface-variant rounded"></div>
                       <div className="w-1/3 h-2 bg-surface-container-highest rounded"></div>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <div className="w-full h-12 bg-surface-container rounded-md"></div>
                     <div className="w-full h-12 bg-surface-container rounded-md"></div>
                   </div>
                </div>
              </div>
              <div className="p-4 bg-surface-container-low border-t border-primary/30">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-on-surface font-[var(--font-geist-sans)]">Developer Pro Dark</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono">Free</span>
                </div>
                <p className="text-xs text-on-surface-variant">Thiết kế tối ưu cho CV & Portfolio.</p>
              </div>
            </div>

            {/* Template 3: Swiss Clean */}
            <div className="group rounded-2xl bg-surface-container overflow-hidden border border-transparent hover:border-primary/50 transition-all shadow-md">
              <div className="relative aspect-[4/3] bg-surface-container-lowest overflow-hidden">
                <div className="absolute inset-2 rounded-xl border border-surface-container-high bg-[#ffffff] shadow-xl overflow-hidden flex flex-col p-6 items-center justify-center">
                   <div className="w-16 h-16 rounded-full bg-zinc-200 mb-3"></div>
                   <div className="w-3/4 h-5 bg-zinc-800 rounded mb-2"></div>
                   <div className="w-1/2 h-3 bg-zinc-400 rounded"></div>
                </div>
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3 transition-opacity">
                  <button className="px-6 py-2 rounded-lg bg-primary text-on-primary font-medium text-sm shadow-lg">Chọn mẫu này</button>
                  <button className="px-6 py-2 rounded-lg bg-surface-container text-on-surface font-medium text-sm">Xem trước</button>
                </div>
              </div>
              <div className="p-4 bg-surface-container-low border-t border-surface-container">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-on-surface font-[var(--font-geist-sans)]">Swiss Clean</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-gradient-to-r from-tertiary to-primary text-on-primary font-mono font-bold">PRO</span>
                </div>
                <p className="text-xs text-on-surface-variant">Tối giản, chữ đen nền trắng.</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 border-t border-surface-container bg-surface-container-lowest/80 backdrop-blur-md z-50 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <Link href="/onboarding/profile" className="text-sm font-medium text-on-surface-variant hover:text-on-surface">← Quay lại</Link>
          <div className="hidden md:flex items-center gap-2 border-l border-surface-variant pl-6">
            <span className="text-xs text-outline">Giao diện đã chọn:</span>
            <span className="text-sm font-semibold text-primary font-[var(--font-geist-sans)]">Developer Pro Dark</span>
          </div>
        </div>
        <Link href="/workspace/projects" className="px-8 py-3 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-bold text-sm shadow-[0_0_24px_rgba(99,102,241,0.4)] transition-all flex items-center gap-2">
          Hoàn tất & Chuyển đến Workspace <span className="text-lg leading-none">🚀</span>
        </Link>
      </footer>
    </div>
  );
}
