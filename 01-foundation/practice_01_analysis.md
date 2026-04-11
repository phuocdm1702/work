# Phân tích: Practice 01 - List Operations

## 📋 Tổng quan bài tập

**File:** `practice_01.py`  
**Chủ đề:** Thao tác với List và Control Flow  
**Trình độ:** Cơ bản

---

## 📝 Mô tả yêu cầu

Bài tập yêu cầu thực hiện các thao tác cơ bản với list trong Python:
1. Khai báo danh sách ngôn ngữ lập trình
2. Thêm phần tử vào đầu list
3. Xóa phần tử khỏi list
4. Cập nhật giá trị trong list
5. Kiểm tra vùng nhớ (id, type)
6. Sử dụng câu lệnh điều kiện

---

## ✅ Code đã làm

```python
# Thử thách 1.1: Khai báo và Thao tác với List
languages = [
    "Java",
    "C#",
    "Javascript",
    "PHP"
]
print(languages)

# Thêm "Python" vào đầu danh sách
languages.insert(0, "Python")
print(languages)

# Xóa ngôn ngữ "PHP"
languages.remove("PHP")
print(languages)

# Thay đổi "C#" thành "TypeScript"
inx = languages.index("C#")
languages[inx] = "TypeScript"
print(languages)

# Kiểm tra vùng nhớ
print(id(languages))
print(type(languages))

# Thử thách 1.2: Câu lệnh điều kiện
if "Python" in languages:
    print("Python is in the list! Ready to code.")
else:
    print("Python added to the list.")
```

---

## 🔍 Phân tích chi tiết

### Điểm mạnh ✨

| STT | Điểm mạnh | Giải thích |
|-----|-----------|------------|
| 1 | **Sử dụng đúng method `insert()`** | Đã thêm "Python" vào đầu list đúng cách |
| 2 | **Sử dụng `remove()` đúng** | Xóa "PHP" khỏi list thành công |
| 3 | **Tìm index và cập nhật** | Dùng `index()` để tìm vị trí rồi gán giá trị mới |
| 4 | **Sử dụng `id()` và `type()`** | Hiểu cách kiểm tra vùng nhớ và kiểu dữ liệu |
| 5 | **Condition check** | Dùng `in` operator để kiểm tra phần tử |

### Điểm cần cải thiện ⚠️

| STT | Vấn đề | Code hiện tại | Gợi ý sửa |
|-----|--------|---------------|-----------|
| 1 | Typo "Javascript" | `"Javascript"` | Nên là `"JavaScript"` (chữ S hoa) |
| 2 | Indent không đều | `print()` ở dòng 25 lùi 1 space | Nên indent 4 spaces theo PEP8 |

---

## 🎯 Kết quả chạy

```
['Java', 'C#', 'Javascript', 'PHP']
['Python', 'Java', 'C#', 'Javascript', 'PHP']
['Python', 'Java', 'C#', 'Javascript']
['Python', 'Java', 'TypeScript', 'Javascript']
140123456789012 <id thay đổi mỗi lần chạy>
<class 'list'>
Python is in the list! Ready to code.
```

---

## 📚 Kiến thức đã áp dụng

### 🔧 Phân tích Functions Chi Tiết

#### 1. `print()` - Hàm in ra màn hình
```python
print(languages)        # In toàn bộ list
print(id(languages))    # In địa chỉ vùng nhớ
print(type(languages))  # In kiểu dữ liệu
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `*objects` | `languages`, `id(...)` | Các đối tượng cần in |
| `sep` | mặc định `' '` | Ký tự phân cách |
| `end` | mặc định `'\\n'` | Ký tự kết thúc |

**Kết quả:** In ra console để kiểm tra giá trị.

---

#### 2. `list.insert(index, element)` - Chèn phần tử
```python
languages.insert(0, "Python")  # Chèn "Python" vào vị trí 0 (đầu list)
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `index` | `0` | Vị trí chèn (0 = đầu list) |
| `element` | `"Python"` | Giá trị cần chèn |

**Cách hoạt động:**
1. Dịch chuyển tất cả phần tử từ vị trí 0 sang phải 1 bước
2. Chèn `"Python"` vào vị trí 0
3. List mới: `["Python", "Java", "C#", "Javascript", "PHP"]`

**So sánh với Java:**
```java
// Java
languages.add(0, "Python");  // ArrayList

// Python
languages.insert(0, "Python")
```

---

#### 3. `list.remove(value)` - Xóa phần tử theo giá trị
```python
languages.remove("PHP")  # Xóa phần tử có giá trị "PHP"
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `value` | `"PHP"` | Giá trị cần xóa |

**Lưu ý quan trọng:**
- ❌ Nếu `"PHP"` không tồn tại → `ValueError`
- ✅ Chỉ xóa phần tử **đầu tiên** tìm thấy
- Khác với `del languages[index]` (xóa theo vị trí)

---

#### 4. `list.index(value)` - Tìm vị trí phần tử
```python
inx = languages.index("C#")  # Tìm vị trí của "C#"
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `value` | `"C#"` | Giá trị cần tìm |
| `start` (optional) | không có | Bắt đầu tìm từ index |
| `end` (optional) | không có | Kết thúc tìm tại index |

**Kết quả:** Trả về index đầu tiên tìm thấy `"C#"` → `inx = 2`

**Lưu ý:**
- ❌ Nếu không tìm thấy → `ValueError`

---

#### 5. `id(object)` - Lấy địa chỉ vùng nhớ
```python
print(id(languages))  # Ví dụ: 140123456789012
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `object` | `languages` | Object cần lấy id |

**Ý nghĩa:** 
- Trả về "identity" của object (địa chỉ vùng nhớ trong CPython)
- Mỗi object có id duy nhất trong suốt vòng đời
- So sánh `id(a) == id(b)` để kiểm tra cùng vùng nhớ

**So sánh với Java:**
```java
// Java
checkIdentity(languages);  // Không có hàm trực tiếp

// Python
id(languages)
```

---

#### 6. `type(object)` - Lấy kiểu dữ liệu
```python
print(type(languages))  # <class 'list'>
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `object` | `languages` | Object cần kiểm tra |

**Ứng dụng:**
- Kiểm tra kiểu dữ liệu để debug
- Phân loại xử lý theo type

---

#### 7. `in` - Toán tử kiểm tra membership
```python
if "Python" in languages:  # Kiểm tra "Python" có trong list không
```
| Toán hạng | Ý nghĩa |
|-----------|---------|
| `"Python"` | Giá trị cần tìm |
| `in` | Toán tử kiểm tra |
| `languages` | Container cần kiểm tra |

**Kết quả:** Trả về `True` nếu tìm thấy, `False` nếu không.

**So sánh với Java:**
```java
// Java
if (languages.contains("Python")) { ... }

// Python
if "Python" in languages: ...
```

---

### List Methods
- `insert(index, value)` - Chèn phần tử vào vị trí chỉ định
- `remove(value)` - Xóa phần tử đầu tiên có giá trị value
- `index(value)` - Tìm vị trí của phần tử

### Control Flow
- `if...else` - Câu lệnh điều kiện
- `in` operator - Kiểm tra membership

### Memory Management
- `id()` - Lấy địa chỉ vùng nhớ của object
- `type()` - Lấy kiểu dữ liệu của object

---

## 💡 Gợi ý mở rộng

```python
# Thêm các thao tác nâng cao:
# 1. Slicing
print(languages[1:3])  # ['Java', 'TypeScript']

# 2. List comprehension
upper_languages = [lang.upper() for lang in languages]

# 3. Sorting
languages.sort()

# 4. Nested conditions
if "Python" in languages and "Java" in languages:
    print("Có cả Python và Java!")
```

---

## 📊 Đánh giá tổng quan

| Tiêu chí | Điểm | Nhận xét |
|----------|------|----------|
| Đúng yêu cầu | ⭐⭐⭐⭐⭐ | Hoàn thành đầy đủ |
| Code style | ⭐⭐⭐⭐☆ | Cần sửa indent |
| Hiểu bài | ⭐⭐⭐⭐⭐ | Nắm vững list operations |
| **Tổng** | **9/10** | Tốt |
