# tóm tắt Buổi 1 (Chuyên sâu): Hệ thống Kiểu dữ liệu Python

Tài liệu này tổng hợp toàn bộ kiến thức cốt lõi dành cho Java Developer khi bắt đầu làm quen với Data Structures trong Python.

## 1. Khái niệm cốt lõi: Mutable vs Immutable
Đây là sự khác biệt quan trọng nhất về quản lý bộ nhớ trong Python.

| Đặc điểm | Immutable (Bất biến) | Mutable (Có thể thay đổi) |
| :--- | :--- | :--- |
| **Định nghĩa** | Không thể sửa đổi giá trị sau khi tạo. | Có thể thêm, xóa, sửa nội dung trực tiếp. |
| **Các kiểu** | `int`, `float`, `str`, `tuple`, `bool`, `None` | `list`, `dict`, `set` |
| **Java Equivalent** | String, Integer, final variables | ArrayList, HashMap, HashSet |

## 2. Chi tiết các cấu trúc dữ liệu nâng cao

### 2.1 Tuple `()` - Nhóm Immutable
- **Công dụng:** Lưu trữ dữ liệu hằng số, thông tin cố định (vd: PROJECT_INFO).
- **Chú ý:** Truy cập bằng index nhưng không thể gán lại giá trị. Tốc độ xử lý nhanh hơn List.

### 2.2 List `[]` - Nhóm Mutable (ArrayList)
- **Công dụng:** Lưu trữ danh sách đối tượng có thứ tự.
- **Kỹ thuật quan trọng:**
    - `append()`: Thêm vào cuối.
    - `insert(0, val)`: Thêm vào đầu.
    - `Slicing [start:stop]`: Cắt danh sách (vd: `[:2]` lấy 2 phần tử đầu).

### 2.3 Set `{}` - Nhóm Mutable (HashSet)
- **Công dụng:** Lưu trữ các phần tử **duy nhất**, không trùng lặp.
- **Chú ý:** Không có thứ tự, không truy cập được bằng index (phải convert sang list nếu muốn lấy index).

### 2.4 Dictionary `{key: value}` - Nhóm Mutable (HashMap)
- **Công dụng:** Lưu trữ cặp khóa-giá trị, cực kỳ phổ biến trong xử lý JSON/API.
- **Truy cập sâu (Nested):** `data["key"][index]["sub_key"]`.

## 3. Các từ khóa & Hàm đặc biệt
- **`None`**: Tương đương `null` trong Java. Luôn kiểm tra bằng `is None` thay vì `== None`.
- **`id()`**: Trả về địa chỉ ô nhớ của đối tượng.
- **`type()`**: Trả về kiểu dữ liệu của biến.
- **`list()`, `set()`, `tuple()`**: Các hàm chuyển đổi kiểu dữ liệu (Type Casting).

## 4. Lưu ý quan trọng cho Senior Developer
- **Indentation:** Python dùng thụt lề để phân cấp khối lệnh, không dùng `{}`.
- **Pythonic Way:** Ưu tiên code ngắn gọn, dễ đọc. Sử dụng `in` để kiểm tra tồn tại thay vì vòng lặp thủ công.
- **Memory Management:** Hiểu rõ đối tượng nào bị thay đổi trực tiếp (Mutable) để tránh lỗi logic khi truyền tham số vào hàm.

---
*Chúc bạn thực hành tốt và hẹn gặp lại ở Buổi 2!*
