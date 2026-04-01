# Lesson 01: Data Types & Core Structures (Kiểu dữ liệu & Cấu trúc lõi)

**Đối tượng học:** Người đã có nền tảng Java/C# muốn nắm “Python Way” một cách chắc chắn.  
**Giai đoạn:** 01-foundation

---

## 1. Mục tiêu buổi học

- Nắm được cách Python quản lý dữ liệu theo hướng **object** (mọi thứ là object).
- Hiểu rõ khác biệt quan trọng nhất: **Mutable vs Immutable**.
- Làm chủ 4 cấu trúc lõi dùng hàng ngày:
  - `tuple`, `list`, `set`, `dict`
- Biết các “hàm nền” để debug: `type()`, `id()`, casting (`list()`, `tuple()`, `set()`).

---

## 2. Khái niệm cốt lõi: Mutable vs Immutable

Đây là phần dễ gây bug nhất khi bạn bắt đầu code Python.

| Đặc điểm | Immutable (Bất biến) | Mutable (Có thể thay đổi) |
| :--- | :--- | :--- |
| **Định nghĩa** | Không thể sửa đổi giá trị sau khi tạo | Có thể thêm/xoá/sửa trực tiếp |
| **Các kiểu phổ biến** | `int`, `float`, `str`, `tuple`, `bool`, `None` | `list`, `dict`, `set` |
| **Java liên tưởng** | `String`, wrapper types, `final` value | `ArrayList`, `HashMap`, `HashSet` |

### 2.1 Ví dụ quan trọng (tư duy bộ nhớ)

```python
a = 10
b = a
b = 20

print(a)  # 10
print(b)  # 20
```

`int` là immutable, nên việc “sửa” thực tế là tạo object mới.

```python
arr = [1, 2]
ref = arr
ref.append(3)

print(arr)  # [1, 2, 3]
print(ref)  # [1, 2, 3]
```

`list` là mutable, nên `arr` và `ref` trỏ cùng object.

---

## 3. Cấu trúc dữ liệu lõi (cách dùng + khi nào dùng)

### 3.1 Tuple `()` — dữ liệu “cố định”

- **Dùng khi**: dữ liệu không nên bị sửa (config, constants, record cố định).
- **Ưu điểm**: an toàn hơn list (khó bị sửa nhầm), thường nhẹ hơn.

Ví dụ:
```python
POINT = (10, 20)
x, y = POINT
```

### 3.2 List `[]` — danh sách có thứ tự (tương đương ArrayList)

- **Dùng khi**: cần thứ tự, cần thêm/xoá/sửa.

Các thao tác hay dùng:
```python
languages = ["Java", "C#", "JavaScript"]
languages.append("Python")
languages.insert(0, "Go")

first_two = languages[:2]
```

### 3.3 Set `{}` — tập hợp phần tử duy nhất (tương đương HashSet)

- **Dùng khi**: cần loại trùng nhanh, cần membership test (`in`) nhanh.
- **Lưu ý**: set không có thứ tự.

Ví dụ:
```python
tags = {"python", "backend", "python"}
print(tags)  # phần tử "python" chỉ xuất hiện 1 lần
```

### 3.4 Dictionary `{key: value}` — key/value (tương đương HashMap)

- **Dùng khi**: mapping, JSON, API data, config.

Ví dụ:
```python
user = {"name": "Alice", "age": 25}
print(user["name"])  # Alice
```

Truy cập nested:
```python
data = {"users": [{"name": "A"}, {"name": "B"}]}
print(data["users"][1]["name"])  # B
```

---

## 4. `None` và các hàm debug cơ bản

### 4.1 `None`

- `None` tương đương `null` trong Java.
- **Quy tắc**: kiểm tra `None` bằng `is None` / `is not None`.

```python
value = None
if value is None:
    print("missing")
```

### 4.2 `type()` và `id()`

- `type(x)`: biết kiểu.
- `id(x)`: biết “định danh” object (gần với địa chỉ/identity).

```python
x = []
print(type(x))
print(id(x))
```

---

## 5. Pitfalls (lỗi thường gặp)

### 5.1 Mutable default arguments (nhắc trước để tránh bug)

Tránh viết:
```python
def add_item(item, items=[]):
    items.append(item)
    return items
```

Lý do: `items` bị “dùng lại” giữa các lần gọi.

### 5.2 Copy list sai cách

```python
a = [1, 2]
b = a
```

`b` không phải copy mà là tham chiếu.

Copy đúng:
```python
b = a.copy()
# hoặc
b = list(a)
```

---

## 6. Áp dụng thực tế

- Khi xử lý API/JSON: `dict` + `list` là 2 cấu trúc xuất hiện nhiều nhất.
- Khi validate dữ liệu: set giúp loại trùng nhanh.
- Khi viết hàm: phân biệt mutable/immutable giúp tránh bug “sửa nhầm dữ liệu đầu vào”.

---

## 7. Bài thực hành liên quan

- File: `01-foundation/practice_01.py`
- Mục tiêu: luyện thao tác list, membership test (`in`), và quan sát `id()`.

---

*Hẹn gặp lại ở Lesson 02: Loops & Control Flow.*
