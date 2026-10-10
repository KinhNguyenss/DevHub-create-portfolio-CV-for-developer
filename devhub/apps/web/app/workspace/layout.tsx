import Link from "next/link";
import { ReactNode } from "react";

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex font-[var(--font-inter)] selection:bg-primary selection:text-on-primary">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-64 bg-surface-container-low/95 backdrop-blur border-r border-surface-container flex flex-col z-40 shadow-xl">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-surface-container">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-[var(--font-geist-sans)]">D</div>
            <span className="font-semibold tracking-tight text-on-surface">DevHub <span className="text-secondary text-xs uppercase ml-1 font-mono tracking-widest bg-secondary/10 px-1.5 py-0.5 rounded">PRO</span></span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="text-xs font-semibold text-outline uppercase tracking-wider mb-3 px-2">Workspace</div>
          
          <Link href="/workspace/overview" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
            <span className="text-lg">📊</span> Tổng quan
          </Link>
          <Link href="/workspace/portfolio" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
            <span className="text-lg">🌐</span> Portfolio Web
          </Link>
          <Link href="/workspace/projects" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm bg-primary-container/80 text-on-primary-container font-medium shadow-sm transition-colors border border-primary/20">
            <span className="text-lg">💻</span> Dự án GitHub
          </Link>
          <Link href="/workspace/cv" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
            <span className="text-lg">📄</span> Quản lý CV / Resume
          </Link>
          <Link href="/workspace/templates" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
            <span className="text-lg">🎨</span> Mẫu giao diện
          </Link>
          <Link href="/workspace/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors mt-4">
            <span className="text-lg">⚙</span> Cài đặt
          </Link>
        </div>

        {/* User Footer */}
        <div className="p-4 border-t border-surface-container">
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-surface-container cursor-pointer transition-colors">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold text-xs">AC</div>
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-medium text-on-surface truncate">Alex Chen</div>
              <div className="text-xs text-on-surface-variant font-mono truncate">@alexchen</div>
            </div>
            <span className="text-on-surface-variant text-xs">▼</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-surface-container-lowest/80 backdrop-blur sticky top-0 z-30 border-b border-surface-container px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
            <span>Portfolio</span>
            <span className="text-outline">/</span>
            <span className="text-on-surface">Dự án GitHub</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-sm font-medium transition-colors border border-surface-variant">
              <span className="text-primary">↻</span> Đồng bộ GitHub
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary text-sm font-medium shadow-md transition-colors">
              <span className="text-base leading-none">+</span> Thêm dự án thủ công
            </button>
            
            <div className="w-px h-6 bg-surface-variant mx-1"></div>
            
            <button className="relative p-2 text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface-container-lowest"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 w-full bg-surface">
          {children}
        </main>
      </div>
    </div>
  );
}
