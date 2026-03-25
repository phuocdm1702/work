# Git Workflow & Pull Request Guide

Chào mừng bạn đến với quy trình làm việc chuẩn Senior. Để quản lý dự án hiệu quả, chúng ta sẽ tuân thủ quy trình **Branching & PR** dưới đây.

## 1. Quy tắc đặt tên Nhánh (Branch Naming)
Luôn tạo nhánh mới cho mỗi task, không bao giờ làm việc trực tiếp trên `main`.
- `feat/feature-name`: Phát triển tính năng mới.
- `fix/bug-name`: Sửa lỗi.
- `docs/topic-name`: Cập nhật tài liệu.
- `refactor/component`: Tối ưu hóa code.

## 2. Quy chuẩn Commit Message (Conventional Commits)
Cấu trúc: `type(scope): description`
- `feat`: Một tính năng mới.
- `fix`: Sửa lỗi.
- `docs`: Thay đổi tài liệu.
- `chore`: Cập nhật build, package, v.v. (không thay đổi code logic).

Ví dụ: `feat(ui): add git tracker dashboard page`

## 3. Quy trình tạo Pull Request (PR)

### Bước 1: Đẩy nhánh lên GitHub
```bash
git add .
git commit -m "docs: add git workflow guide"
git push origin feat/git-workflow-guide
```

### Bước 2: Tạo PR trên giao diện GitHub
1. Vào repository trên GitHub.
2. Nhấn nút **"Compare & pull request"**.
3. Mô tả những gì bạn đã làm trong phần nội dung PR.
4. Gán **Reviewer** (là tôi) để review code.

### Bước 3: Review & Merge
- Tôi sẽ review code của bạn.
- Nếu có phản hồi, bạn thực hiện sửa đổi ngay trên nhánh đó và push lại.
- Sau khi được Approve, chúng ta sẽ **Squash and Merge** vào `main`.

---
*Lưu ý: Luôn `git pull origin main` trước khi tạo nhánh mới để đảm bảo code luôn mới nhất.*
