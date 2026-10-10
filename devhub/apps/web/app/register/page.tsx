"use client";

import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col justify-between selection:bg-primary selection:text-on-primary">
      <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
            <span className="font-bold font-[var(--font-geist-sans)]">D</span>
          </div>
          <span className="text-xl font-semibold text-on-surface tracking-tight font-[var(--font-geist-sans)]">DevHub</span>
        </Link>
        <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span>auth-gateway v2.4</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center w-full px-4 md:px-12">
        <div className="w-full max-w-[1536px] mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-surface-container-lowest shadow-2xl">
            {/* Left Column (Branding & Showcase) */}
            <section className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-10 lg:p-14 bg-surface-container-low overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center shadow-md text-primary font-bold">D</div>
                    <span className="text-2xl font-semibold tracking-tight text-on-surface font-[var(--font-geist-sans)]">DevHub</span>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-container-highest text-secondary font-medium tracking-wide">
                    Bản v2.4 LTS
                  </span>
                </div>
                <h1 className="text-4xl font-semibold text-on-surface mb-4 leading-tight tracking-tight font-[var(--font-geist-sans)]">
                  Xây dựng Portfolio giúp bạn luôn nổi bật.
                </h1>
                <p className="text-base text-on-surface-variant max-w-md mb-8 leading-relaxed">
                  Kết nối GitHub, trưng bày các dự án mã nguồn xuất sắc và tạo Portfolio & CV chuẩn ATS chỉ trong vài phút.
                </p>
                
                {/* Tech Stack Preview */}
                <div className="rounded-xl bg-surface-container p-4 shadow-xl mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold">AC</div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h2 className="text-sm font-semibold text-on-surface">Alex Chen</h2>
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        </div>
                        <p className="text-xs text-on-surface-variant">Staff Distributed Systems Engineer</p>
                      </div>
                    </div>
                    <div className="font-mono text-[11px] text-secondary bg-surface-container-highest px-2 py-0.5 rounded">
                      top 1% OSS
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-low text-primary">Rust</span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-low text-secondary">Go</span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant">Kubernetes</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Column (Register Form) */}
            <div className="col-span-1 lg:col-span-7 flex flex-col items-center justify-center p-6 lg:p-12">
              <div className="w-full max-w-[480px] bg-surface-container-low rounded-xl p-8 lg:p-10 shadow-2xl space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-on-surface tracking-tight font-[var(--font-geist-sans)]">
                    Tạo tài khoản DevHub
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    Bắt đầu xây dựng Portfolio và CV chuyên nghiệp cho sự nghiệp lập trình viên của bạn.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* OAuth Buttons */}
                  <div className="space-y-3">
                    <button type="button" className="group relative w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface shadow-sm transition-all duration-150">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                      </svg>
                      <span className="text-sm font-semibold">Tiếp tục với GitHub</span>
                      <span className="absolute right-3 font-mono text-[11px] px-2 py-0.5 rounded-full bg-primary/20 text-primary-fixed">Nhanh nhất</span>
                    </button>
                    <button type="button" className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface shadow-sm transition-all duration-150">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 5c1.56 0 2.96.54 4.07 1.58l3.05-3.05C17.26 1.79 14.82 1 12 1 7.42 1 3.53 3.61 1.67 7.43l3.66 2.84C6.2 7.37 8.85 5 12 5z" fill="#EA4335"></path>
                        <path d="M23.49 12.27c0-.82-.07-1.61-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.71 2.88c2.16-1.99 3.71-4.93 3.71-8.7z" fill="#4285F4"></path>
                        <path d="M5.33 14.73c-.23-.68-.36-1.41-.36-2.17 0-.76.13-1.49.36-2.17L1.67 7.55C.61 9.68 0 12.06 0 14.56s.61 4.88 1.67 7.01l3.66-2.84z" fill="#FBBC05"></path>
                        <path d="M12 23.56c3.24 0 5.95-1.08 7.93-2.92l-3.71-2.88c-1.07.72-2.45 1.16-4.22 1.16-3.15 0-5.8-2.37-6.67-5.27L1.67 16.49C3.53 20.31 7.42 23.56 12 23.56z" fill="#34A853"></path>
                      </svg>
                      <span className="text-sm font-medium">Tiếp tục với Google</span>
                    </button>
                  </div>

                  <div className="relative flex items-center justify-center my-4">
                    <div className="w-full h-px bg-surface-variant"></div>
                    <span className="absolute px-3 bg-surface-container-low font-mono text-[11px] text-on-surface-variant uppercase tracking-wider">
                      HOẶC ĐĂNG KÝ VỚI EMAIL
                    </span>
                  </div>

                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = '/onboarding/goal'; }}>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-on-surface block" htmlFor="fullname">Họ và tên</label>
                        <span className="font-mono text-[11px] text-on-surface-variant">Bắt buộc</span>
                      </div>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-on-surface-variant text-lg">👤</span>
                        <input className="w-full h-11 pl-10 pr-4 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all border border-transparent focus:border-primary/50" id="fullname" placeholder="Nguyễn Văn Alex" required type="text" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-on-surface block" htmlFor="email">Địa chỉ Email</label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-on-surface-variant text-lg">✉</span>
                        <input className="w-full h-11 pl-10 pr-4 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all border border-transparent focus:border-primary/50" id="email" placeholder="alex.chen@example.com" required type="email" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-on-surface" htmlFor="password">Mật khẩu</label>
                        <span className="font-mono text-[11px] text-on-surface-variant">Tối thiểu 8 ký tự</span>
                      </div>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-on-surface-variant text-lg">🔒</span>
                        <input className="w-full h-11 pl-10 pr-10 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner transition-all border border-transparent focus:border-primary/50" id="password" placeholder="Tạo mật khẩu an toàn" required type="password" />
                      </div>
                    </div>

                    {/* Account Goal Options */}
                    <div className="space-y-2 pt-2">
                      <label className="text-sm font-medium text-on-surface block">Bạn muốn xây dựng gì trước tiên?</label>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="cursor-pointer rounded-lg p-2.5 bg-surface-container hover:bg-surface-container-high transition-all text-center space-y-1 border border-transparent hover:border-primary/30">
                          <span className="text-lg text-on-surface-variant">🌐</span>
                          <div className="font-mono text-[11px] font-semibold text-on-surface">Portfolio</div>
                        </div>
                        <div className="cursor-pointer rounded-lg p-2.5 bg-surface-container hover:bg-surface-container-high transition-all text-center space-y-1 border border-transparent hover:border-primary/30">
                          <span className="text-lg text-on-surface-variant">📄</span>
                          <div className="font-mono text-[11px] font-semibold text-on-surface">CV / Resume</div>
                        </div>
                        <div className="cursor-pointer rounded-lg p-2.5 bg-surface-container-high ring-1 ring-primary transition-all text-center space-y-1">
                          <span className="text-lg text-primary">⭐</span>
                          <div className="font-mono text-[11px] font-semibold text-primary">Cả hai</div>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="w-full h-12 mt-4 rounded-lg bg-primary hover:bg-primary-fixed text-on-primary font-medium text-sm transition-all shadow-[0_0_20px_-5px_rgba(192,193,255,0.4)]">
                      Tạo tài khoản miễn phí
                    </button>
                  </form>

                  <div className="text-center pt-2">
                    <span className="text-sm text-on-surface-variant">Đã có tài khoản? </span>
                    <Link href="/login" className="text-sm text-primary font-semibold hover:underline">
                      Đăng nhập
                    </Link>
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
