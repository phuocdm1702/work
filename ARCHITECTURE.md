# Architecture: Python-Learn Advanced Dashboard

Hệ thống được thiết kế để cung cấp lộ trình học tập Python Fullstack chuyên sâu, chuyển đổi từ tư duy Java sang Python.

## 1. Thành phần Hệ thống (System Components)

### 1.1 Frontend: Learning Dashboard
- **Công nghệ:** HTML5, TailwindCSS, Alpine.js, Chart.js.
- **Vai trò:** Giao diện tương tác người dùng, hiển thị lộ trình (Roadmap), tài liệu (Docs), và theo dõi Git (Git Tracker).
- **Cơ chế:** Ứng dụng Single Page Application (SPA) nhẹ, sử dụng Alpine.js để quản lý state và chuyển đổi tab.

### 1.2 Data Layer: Static & Local Data
- **docs_data.js:** Chứa toàn bộ nội dung học tập, bài tập, ví dụ code và dữ liệu mẫu cho Git Tracker.
- **roadmap_data.json:** Định nghĩa cấu trúc lộ trình 8 tháng.
- **LocalStorage:** Lưu trữ trạng thái cấu hình GitHub và tiến độ học tập của người dùng.

### 1.3 Integration: GitHub API
- Kết nối trực tiếp với GitHub API để lấy dữ liệu commit real-time nếu người dùng cấu hình repo trong phần Settings.

## 2. Luồng dữ liệu (Data Flow)

1. **Khởi tạo:** Khi ứng dụng tải, `docs_data.js` nạp dữ liệu vào bộ nhớ.
2. **Nạp dữ liệu:** Alpine.js (`cmsApp`) khởi tạo state từ `docs_data.js` và `localStorage`.
3. **Hiển thị:** Các thành phần UI (Roadmap, Docs, Git) render dựa trên state hiện tại.
4. **Tương tác:** Người dùng chuyển tab hoặc chọn bài học -> State cập nhật -> UI render lại (Reactivity).
5. **Git Tracker:** 
   - Ưu tiên hiển thị commit mẫu từ `docs_data.js`.
   - Nếu có cấu hình GitHub, thực hiện `fetch` dữ liệu từ API và cập nhật danh sách commit.

## 3. Cấu trúc Thư mục (Directory Structure)

```text
C:/Python-Learn
├── dashboard/              # Mã nguồn giao diện chính
│   ├── index.html          # File entry point duy nhất
│   └── docs_data.js        # "Database" nội dung và logic ứng dụng
├── roadmap_data.json       # Cấu trúc lộ trình học tập
├── 01-foundation/          # [Sắp tới] Mã nguồn ví dụ phần cơ bản
├── 02-oop/                 # [Sắp tới] Mã nguồn ví dụ OOP
└── ...                     # Các thư mục chuyên đề khác
```

## 4. Nguyên tắc Thiết kế (Design Principles)

- **Performance:** Không sử dụng Framework nặng, đảm bảo load ngay lập tức.
- **Zero-Backend:** Hệ thống chạy hoàn toàn ở Client-side, dễ dàng deploy lên GitHub Pages hoặc Vercel.
- **Java-to-Python Focus:** Tài liệu luôn đi kèm bảng so sánh trực tiếp với Java để tối ưu quá trình học cho Java Developer.
