export default function GithubProjectsPage() {
  const projects = [
    {
      name: "distributed-cache-engine",
      version: "v1.8.2",
      desc: "Động cơ bộ nhớ đệm phân tán hỗ trợ LRU cluster hai tầng, zero-allocation memory serialization. Giảm 38% chi phí compute.",
      stars: "2.4k",
      forks: "318",
      commits: "78",
      lang: "Rust",
      featured: true,
      visible: true
    },
    {
      name: "go-micro-auth",
      version: "v2.0.1",
      desc: "Microservice xác thực siêu nhẹ dùng Go và JWT. Tích hợp sẵn Redis Rate Limiting và OAuth2.",
      stars: "1.2k",
      forks: "145",
      commits: "12",
      lang: "Go",
      featured: true,
      visible: true
    },
    {
      name: "react-native-crypto-wallet",
      version: "v0.9.0-beta",
      desc: "Ví tiền điện tử đa chuỗi trên nền tảng di động. Hỗ trợ EIP-4337 Account Abstraction.",
      stars: "890",
      forks: "84",
      commits: "34",
      lang: "TypeScript",
      featured: false,
      visible: true
    },
    {
      name: "k8s-auto-scaler-operator",
      version: "v1.1.0",
      desc: "Kubernetes custom controller để tự động mở rộng pods dựa trên custom metrics từ Prometheus.",
      stars: "450",
      forks: "62",
      commits: "5",
      lang: "Go",
      featured: false,
      visible: false
    }
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto p-8 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-on-surface font-[var(--font-geist-sans)] tracking-tight mb-2">Quản lý Dự án GitHub</h1>
        <p className="text-sm text-on-surface-variant">
          Chọn, sắp xếp và tối ưu hóa các kho mã nguồn nổi bật nhất để hiển thị trên Portfolio và CV của bạn.
        </p>
      </div>

      {/* GitHub Connection Status */}
      <div className="flex flex-wrap items-center justify-between p-4 rounded-xl bg-surface-container-low border border-surface-container shadow-sm gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-xl">🐙</div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-on-surface text-sm">@alexchen</span>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-mono text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Connected
              </span>
            </div>
            <p className="text-xs text-on-surface-variant">Đồng bộ tự động lần cuối: 5 phút trước</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-sm font-medium text-on-surface border border-outline/30 transition-colors">
            Quản lý kết nối
          </button>
          <button className="px-4 py-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium transition-colors">
            Đồng bộ ngay
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm">
          <div className="text-on-surface-variant text-sm mb-2">Tổng dự án</div>
          <div className="text-3xl font-bold text-on-surface font-[var(--font-geist-sans)]">24</div>
        </div>
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm">
          <div className="text-on-surface-variant text-sm mb-2">Đang hiển thị (Active)</div>
          <div className="text-3xl font-bold text-primary font-[var(--font-geist-sans)]">6</div>
        </div>
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm">
          <div className="text-on-surface-variant text-sm mb-2">Dự án nổi bật</div>
          <div className="text-3xl font-bold text-secondary font-[var(--font-geist-sans)]">3<span className="text-lg text-outline">/6</span></div>
        </div>
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm">
          <div className="text-on-surface-variant text-sm mb-2">Ngôn ngữ chính</div>
          <div className="text-3xl font-bold text-on-surface font-[var(--font-geist-sans)]">8</div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-2 rounded-lg bg-surface-container-low border border-surface-container">
        <div className="flex-1 w-full relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">🔍</span>
          <input type="text" placeholder="Tìm kiếm theo tên dự án, mô tả, ngôn ngữ..." className="w-full h-10 pl-9 pr-4 rounded-md bg-surface-container-lowest border border-transparent focus:border-primary/50 focus:ring-1 focus:ring-primary text-sm text-on-surface" />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto px-2">
          <select className="h-9 px-3 rounded-md bg-surface-container-highest border border-outline/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface min-w-[120px]">
            <option>Tất cả ngôn ngữ</option>
            <option>Rust</option>
            <option>Go</option>
            <option>TypeScript</option>
          </select>
          <select className="h-9 px-3 rounded-md bg-surface-container-highest border border-outline/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-on-surface">
            <option>Mới nhất</option>
            <option>Nhiều sao nhất</option>
          </select>
          <label className="flex items-center gap-2 text-sm text-on-surface-variant cursor-pointer ml-2">
            <input type="checkbox" className="w-4 h-4 rounded border-outline/50 bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-surface" defaultChecked />
            Chỉ hiện Active
          </label>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((proj) => (
          <div key={proj.name} className={`flex flex-col md:flex-row md:items-center justify-between gap-6 p-5 rounded-xl border transition-all ${proj.visible ? 'bg-surface-container-lowest border-surface-container hover:border-primary/30 shadow-sm' : 'bg-surface-container-lowest/50 border-surface-container/50 opacity-75'}`}>
            <div className="flex-1 flex gap-4">
              <button className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-xl transition-colors ${proj.featured ? 'bg-secondary/10 text-secondary' : 'bg-surface-container text-on-surface-variant hover:text-secondary'}`}>
                {proj.featured ? '★' : '☆'}
              </button>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-primary font-[var(--font-geist-sans)]">{proj.name}</h3>
                  <span className="font-mono text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">{proj.version}</span>
                  {proj.featured && <span className="font-mono text-[10px] text-secondary bg-secondary-container/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Featured</span>}
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed max-w-3xl">
                  {proj.desc}
                </p>
                <div className="flex items-center gap-4 pt-1 font-mono text-[11px] text-on-surface-variant">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary-fixed"></span> {proj.lang}</span>
                  <span className="flex items-center gap-1">⭐ {proj.stars}</span>
                  <span className="flex items-center gap-1">⑂ {proj.forks}</span>
                  <span className="flex items-center gap-1 text-primary">⚡ {proj.commits} commits tuần này</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 shrink-0 ml-14 md:ml-0 border-t md:border-t-0 border-surface-container pt-4 md:pt-0">
              <label className="flex items-center gap-2 cursor-pointer">
                <span className={`text-xs font-medium ${proj.visible ? 'text-on-surface' : 'text-on-surface-variant'}`}>{proj.visible ? 'Hiển thị' : 'Đã ẩn'}</span>
                <div className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${proj.visible ? 'bg-primary' : 'bg-surface-variant'}`}>
                  <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${proj.visible ? 'translate-x-4.5' : 'translate-x-1'}`} />
                </div>
              </label>
              <div className="w-px h-5 bg-surface-variant mx-2"></div>
              <button className="px-3 py-1.5 rounded-md bg-surface-container hover:bg-surface-container-high text-sm font-medium text-on-surface border border-outline/30 transition-colors">
                Chỉnh sửa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
