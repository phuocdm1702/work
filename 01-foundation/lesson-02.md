# Lesson 02: Loops & Control Flow (Vòng lặp & Điều khiển luồng)

**Ngày học:** 01/04/2026  
**Chủ đề:** Loops, Control Flow, Pythonic Iteration  
**Giai đoạn:** 01-foundation

---

## 1. Mục tiêu buổi học

- Hiểu cách lặp qua dữ liệu theo phong cách Python (không lạm dụng `range(len(...))`).
- Nắm vững `break`, `continue`, `for-else` (điểm khác biệt lớn so với Java).
- Biết cách kết hợp dữ liệu bằng `zip()` và đánh số bằng `enumerate()`.
- Biết tạo danh sách nhanh bằng List Comprehension.
- Hiểu `:=` (Walrus Operator) để viết code gọn mà vẫn rõ.

---

## 2. Nền tảng: “Iterables” và “Iteration” trong Python

### 2.1 Iterable là gì?
Một object được gọi là **iterable** nếu có thể “lặp qua từng phần tử”. Ví dụ:
- `list`, `tuple`, `set`, `dict`, `str`, `range`, file object, ...

Python ưu tiên viết:
- `for item in items:`

Thay vì:
- `for i in range(len(items)):` (phong cách hay gặp ở Java/C#)

**Vì sao?**
- Code ngắn hơn, ít bug index.
- Trực tiếp thể hiện ý định: “lặp qua phần tử”, không phải “lặp qua chỉ số”.

---

## 3. `enumerate()` — Lặp có chỉ số (Index) một cách an toàn

### 3.1 Khi nào dùng?
- Khi vừa cần **phần tử**, vừa cần **số thứ tự**.

### 3.2 Cú pháp
```python
for index, value in enumerate(iterable, start=0):
    ...
```

### 3.3 Ví dụ thực tế
```python
students = ["An", "Bình", "Chi"]

for i, name in enumerate(students, start=1):
    print(f"{i}. {name}")
```

### 3.4 Lưu ý
- `start=1` giúp hiển thị số thứ tự “thân thiện người dùng”.
- Nếu bạn không cần index, không dùng `enumerate()`.

---

## 4. `zip()` — Ghép nhiều danh sách chạy song song

### 4.1 Khi nào dùng?
- Khi bạn có nhiều list “song hành” và muốn ghép thành cặp.

### 4.2 Cú pháp
```python
for a, b in zip(list_a, list_b):
    ...
```

### 4.3 Ví dụ
```python
students = ["An", "Bình", "Chi"]
scores = [8.5, 9.0, 7.5]

for name, score in zip(students, scores):
    print(f"{name}: {score}")
```

### 4.4 Pitfall (lỗi thường gặp)
- `zip()` sẽ dừng theo list ngắn nhất.
- Nếu muốn bắt lỗi khi độ dài không khớp, bạn phải tự check `len()` trước.

---

## 5. List Comprehension — Tạo list nhanh và “Pythonic”

### 5.1 Cú pháp cơ bản
```python
new_list = [expression for item in iterable]
```

### 5.2 Cú pháp có điều kiện
```python
new_list = [expression for item in iterable if condition]
```

### 5.3 Ví dụ
Bình phương các số chẵn từ 1 đến 10:
```python
squares_of_evens = [x**2 for x in range(1, 11) if x % 2 == 0]
```

### 5.4 Khi KHÔNG nên dùng
- Nếu biểu thức quá dài, nhiều tầng `if/for`, đọc khó → chuyển sang `for` thường để rõ ràng.

---

## 6. Walrus Operator `:=` — Gán và kiểm tra trong một biểu thức

### 6.1 Mục đích
Giảm việc gọi hàm lặp lại và giúp code gọn.

### 6.2 Ví dụ
```python
name = "Phuoc"

if (n := len(name)) > 3:
    print(f"Tên '{name}' có {n} ký tự")
```

### 6.3 Lưu ý
- Dùng vừa đủ. Lạm dụng sẽ khiến code khó đọc.

---

## 7. `break`, `continue` — Điều khiển vòng lặp

### 7.1 `break`
- Thoát khỏi vòng lặp ngay lập tức.

### 7.2 `continue`
- Bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang vòng lặp tiếp theo.

---

## 8. `for-else` — Tính năng “lạ” nhưng rất hữu ích

### 8.1 Ý nghĩa
- Khối `else` của `for` chỉ chạy khi vòng lặp kết thúc **mà không gặp `break`**.

### 8.2 Ví dụ: Tìm kiếm
```python
numbers = [1, 3, 5, 8, 9]
target = 7

for num in numbers:
    if num == target:
        print("Found!")
        break
else:
    print("Not found")
```

### 8.3 So sánh với Java
- Java thường phải dùng `found = false` rồi kiểm tra sau vòng lặp.
- Python dùng `for-else` để code sạch hơn.

---

## 9. Áp dụng thực tế

- **Parse dữ liệu CSV/JSON**: đọc từng dòng/record và xử lý.
- **Validate dữ liệu**: tìm record lỗi → `break` hoặc `continue`.
- **Ghép dữ liệu UI**: `zip()` để ghép labels và values.
- **Tạo data nhanh**: List comprehension tạo list filter/map.

---

## 10. Bài thực hành liên quan
- File: `01-foundation/practice_02.py`
- Nội dung: `enumerate`, `zip`, list comprehension, walrus operator, `for-else`.
