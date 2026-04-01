# Lesson 04: Error Handling & Debugging (Xử lý lỗi & Debug)

**Ngày học:** 31/03/2026  
**Chủ đề:** Exceptions, `raise`, `try/except/else/finally`, Logging  
**Giai đoạn:** 01-foundation

---

## 1. Mục tiêu buổi học

- Hiểu sự khác nhau giữa “lỗi kỹ thuật” (runtime errors) và “lỗi nghiệp vụ” (business rules).
- Biết cách dùng `try/except/else/finally` để chương trình **không bị crash**.
- Biết cách `raise` để tự tạo lỗi nghiệp vụ.
- Biết debug theo hướng “ghi lại dấu vết” bằng `logging` (thay vì `print`).

---

## 2. Exceptions trong Python là gì?

Python dùng **exception** để báo một tình huống bất thường.

- Nếu exception không được xử lý, chương trình dừng và in stack trace.
- Nếu exception được bắt (`except`), bạn có thể:
  - trả về giá trị fallback
  - log lỗi
  - hoặc “đổi lỗi” (raise lỗi khác)

---

## 3. Cấu trúc `try / except / else / finally`

### 3.1 Cú pháp chuẩn

```python
try:
    # đoạn code có thể phát sinh lỗi
    ...
except SomeError as e:
    # xử lý khi lỗi xảy ra
    ...
else:
    # chỉ chạy nếu KHÔNG có exception
    ...
finally:
    # luôn chạy (dọn dẹp tài nguyên)
    ...
```

### 3.2 Ý nghĩa thực tế

- **`try`**: nơi rủi ro (IO, network, parse, chia, ép kiểu).
- **`except`**: “bắt” lỗi để chương trình không sập.
- **`else`**: tách phần “đường đi thành công” để code gọn và rõ.
- **`finally`**: đảm bảo dọn dẹp (close file, release lock, log kết thúc).

---

## 4. Pitfalls quan trọng

### 4.1 Không `return` trong `finally`

Nếu `finally` có `return`, nó sẽ **ghi đè** mọi `return` khác (trong `try` hoặc `except`).

Sai:
```python
def f():
    try:
        return 1
    finally:
        return 2
```

Kết quả thực tế: `f()` luôn trả về `2`.

### 4.2 Không “nuốt lỗi” quá chung chung

Hạn chế:
```python
except Exception:
    pass
```

Vì bạn sẽ không biết hệ thống đang lỗi gì.

---

## 5. `raise` — Tạo lỗi nghiệp vụ (Business Validation)

### 5.1 Khi nào cần `raise`?

- Python có thể không coi đó là lỗi, nhưng nghiệp vụ của bạn coi đó là sai.

Ví dụ: tuổi không thể âm.

```python
def kiem_tra_tuoi(tuoi: int) -> None:
    if tuoi < 0 or tuoi > 150:
        raise ValueError("Tuổi không hợp lệ!")
```

### 5.2 Vì sao `raise` quan trọng?

- Ngăn dữ liệu bẩn lan rộng.
- Khi lỗi xảy ra, stack trace chỉ ra đúng chỗ sai.
- Dễ test hơn (unit test mong đợi exception).

---

## 6. Logging — “dấu vết” chuyên nghiệp thay cho `print`

### 6.1 Vì sao không chỉ dùng `print`?

- `print` không có level, không có timestamp chuẩn.
- `print` khó tổng hợp khi chương trình lớn.

### 6.2 Các level phổ biến

- `logging.debug()` — chi tiết phục vụ debug
- `logging.info()` — luồng chạy bình thường
- `logging.warning()` — cảnh báo (có thể sai nhưng chưa crash)
- `logging.error()` — lỗi xảy ra nhưng hệ thống vẫn cố chạy
- `logging.critical()` — lỗi nghiêm trọng

### 6.3 Ví dụ cấu hình ghi ra file

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='app.log',
    filemode='w'
)
```

---

## 7. Bài thực hành buổi học

- File: `01-foundation/practice_04.py`
- Nội dung chính:
  - `safe_divide(a, b)` bắt `ZeroDivisionError`, `TypeError`
  - `kiem_tra_tuoi()` dùng `raise ValueError`
  - `process_calculations()` xử lý danh sách dữ liệu (có lỗi) nhưng không dừng chương trình
  - ghi log ra `app.log`

---

## 8. Checklist (tự kiểm tra khi code)

- Bạn bắt đúng exception type chưa?
- Bạn có log/hiển thị message để debug không?
- Bạn có đang dùng `finally` để dọn dẹp thay vì `return` không?
- Bạn có chỗ nào nên dùng `raise` để chặn dữ liệu sai nghiệp vụ không?

---

*Tiếp theo: Lesson 05 thường sẽ đi vào OOP (Class/Object), vì khi dự án lớn, bạn sẽ cần tổ chức code bằng class và module.*
