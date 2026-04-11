# Phân tích: Practice 02 - Loop & Control Flow

## 📋 Tổng quan bài tập

**File:** `practice_02.py`  
**Chủ đề:** Vòng lặp, Control Flow & List Comprehension  
**Trình độ:** Cơ bản - Trung bình

---

## 📝 Mô tả yêu cầu

Bài tập bao gồm 5 phần:
1. **Enumerate** - In danh sách học sinh kèm số thứ tự
2. **Zip** - Kết hợp nhiều list cùng lúc
3. **List Comprehension** - Tạo list bình phương số chẵn
4. **Walrus Operator** - Kiểm tra độ dài tên với `:=`
5. **For-Else** - Tìm kiếm phần tử trong list

---

## ✅ Code đã làm

```python
# =================================================================
# BUỔI 2: VÒNG LẶP & CẤU TRÚC ĐIỀU KHIỂN (PRACTICE)
# =================================================================

# 1. ENUMERATE
students = ["An", "Bình", "Chi", "Dũng"]
print("--- Task 1: Enumerate ---")
for i, student in enumerate(students, start=1):
    print(f"{i}. {student}")

# 2. ZIP
scores = [8.5, 9.0, 7.5, 8.0]
print("\n--- Task 2: Zip ---")
for student, score in zip(students, scores):
    print(f"{student}: {score} điểm")

# 3. LIST COMPREHENSION
print("\n--- Task 3: List Comprehension ---")
squares_of_evens = [x**2 for x in range(1, 11) if x % 2 == 0]
print(f"Squares of evens: {squares_of_evens}")

# 4. CONTROL FLOW - Walrus Operator
print("\n--- Task 4: Walrus Operator ---")
name = "Phuoc"
if (n := len(name)) > 3:
    print(f"Tên '{name}' có {n} ký tự (dài hơn 3)")

# 5. FOR-ELSE
numbers = [1, 3, 5, 8, 9]
print("\n--- Task 5: For-Else ---")
search_target = 7
for num in numbers:
    if num == search_target:
        print(f"Tìm thấy số {search_target}!")
        break
else:
    print(f"Không tìm thấy số {search_target} trong danh sách.")
```

---

## 🔍 Phân tích chi tiết

### Điểm mạnh ✨

| STT | Điểm mạnh | Giải thích |
|-----|-----------|------------|
| 1 | **Enumerate đúng** | Sử dụng `start=1` để bắt đầu từ 1 thay vì 0 |
| 2 | **Zip nhiều list** | Kết hợp students và scores đúng cách |
| 3 | **List comprehension** | `[x**2 for x in range(1, 11) if x % 2 == 0]` - đúng cú pháp và logic |
| 4 | **Walrus operator** | Sử dụng `:=` để gán và kiểm tra trong cùng một dòng |
| 5 | **For-else đúng** | Hiểu cách else chỉ chạy khi không có break |

### Điểm cần cải thiện ⚠️

| STT | Vấn đề | Gợi ý sửa |
|-----|--------|-----------|
| 1 | Chưa có xử lý lỗi với zip | Nên kiểm tra độ dài list trước khi zip |
| 2 | Walrus có thể mở rộng | Có thể dùng nhiều lần trong một expression |

---

## 🎯 Kết quả chạy

```
--- Task 1: Enumerate ---
1. An
2. Bình
3. Chi
4. Dũng

--- Task 2: Zip ---
An: 8.5 điểm
Bình: 9.0 điểm
Chi: 7.5 điểm
Dũng: 8.0 điểm

--- Task 3: List Comprehension ---
Squares of evens: [4, 16, 36, 64, 100]

--- Task 4: Walrus Operator ---
Tên 'Phuoc' có 5 ký tự (dài hơn 3)

--- Task 5: For-Else ---
Không tìm thấy số 7 trong danh sách.
```

---

## 📚 Kiến thức đã áp dụng

## 📚 Kiến thức đã áp dụng

### 🔧 Phân tích Functions Chi Tiết

#### 1. `enumerate(iterable, start=0)` - Đánh số thứ tự
```python
for i, student in enumerate(students, start=1):
    print(f"{i}. {student}")
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `iterable` | `students` | List/tuple cần đánh số |
| `start` | `1` | Số bắt đầu (mặc định 0) |

**Cách hoạt động:**
```
Input: ["An", "Bình", "Chi", "Dũng"]
Output: (1, "An"), (2, "Bình"), (3, "Chi"), (4, "Dũng")
         ↑     ↑
       index  value
```

**So sánh với Java:**
```java
// Java
for (int i = 0; i < students.size(); i++) {
    System.out.println((i+1) + ". " + students.get(i));
}

// Python
for i, student in enumerate(students, start=1):
    print(f"{i}. {student}")
```

**Lợi ích:** Ngắn gọn, Pythonic, không cần quản lý index thủ công.

---

#### 2. `zip(*iterables)` - Kết hợp nhiều list
```python
for student, score in zip(students, scores):
    print(f"{student}: {score} điểm")
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `*iterables` | `students, scores` | Nhiều list cần kết hợp |

**Cách hoạt động:**
```
Input:  students = ["An", "Bình", "Chi"]
        scores   = [8.5, 9.0, 7.5]
        
Output: ("An", 8.5), ("Bình", 9.0), ("Chi", 7.5)
         ↑         ↑
       student   score
```

**Lưu ý quan trọng:**
- Dừng ở list ngắn nhất nếu độ dài khác nhau
- Để giữ lại phần tử dư: dùng `itertools.zip_longest()`

**So sánh với Java:**
```java
// Java - phải dùng index
for (int i = 0; i < students.size(); i++) {
    System.out.println(students.get(i) + ": " + scores.get(i));
}

// Python
for student, score in zip(students, scores):
    print(f"{student}: {score}")
```

---

#### 3. `range(start, stop, step)` - Tạo dãy số
```python
squares_of_evens = [x**2 for x in range(1, 11) if x % 2 == 0]
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `start` | `1` | Bắt đầu (bao gồm) |
| `stop` | `11` | Kết thúc (không bao gồm) |
| `step` | mặc định `1` | Bước nhảy |

**Kết quả:** `range(1, 11)` → `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`

**So sánh với Java:**
```java
// Java
IntStream.range(1, 11)  // 1-10
IntStream.rangeClosed(1, 10)  // 1-10

// Python
range(1, 11)  # 1-10
```

---

#### 4. Walrus Operator `:=` - Gán và trả về
```python
if (n := len(name)) > 3:
    print(f"Tên '{name}' có {n} ký tự (dài hơn 3)")
```
| Phần | Ý nghĩa |
|------|---------|
| `len(name)` | Tính độ dài chuỗi |
| `n := ...` | Gán kết quả vào `n`, trả về giá trị |
| `> 3` | So sánh với 3 |

**Cách hoạt động:**
1. Tính `len(name)` → `6`
2. Gán `n = 6` và trả về `6`
3. So sánh `6 > 3` → `True`
4. In ra kết quả

**So sánh (không dùng walrus):**
```python
# Cách cũ - 2 dòng
n = len(name)
if n > 3:
    print(...)

# Dùng walrus - 1 dòng
if (n := len(name)) > 3:
    print(...)
```

---

#### 5. `len(object)` - Lấy độ dài
```python
n = len(name)  # name = "Phuoc" → n = 6
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `object` | `name` | String/list/tuple/dict/set |

**Trả về:** Số phần tử trong container

---

#### 6. For-Else Structure
```python
for num in numbers:
    if num == search_target:
        print(f"Tìm thấy số {search_target}!")
        break
else:
    print(f"Không tìm thấy số {search_target} trong danh sách.")
```

**Luồng thực thi:**
```
┌─────────────────┐
│  Bắt đầu vòng   │
│     lặp         │
└────────┬────────┘
         ▼
┌─────────────────┐
│  Có phần tử?    │──No──►┌─────────────┐
│                 │       │   ELSE      │
└────────┬────────┘       │  (không     │
         │Yes             │   có break) │
         ▼                └─────────────┘
┌─────────────────┐
│   Kiểm tra điều │
│   kiện          │
└────────┬────────┘
         │
    ┌────┴────┐
   Yes        No
    │          │
    ▼          ▼
┌────────┐  ┌────────────┐
│ BREAK  │  │ Tiếp tục   │
│ (không  │  │ vòng lặp  │
│  vào    │  │ tiếp theo │
│  else)  │  └────────────┘
└────────┘
```

**Ý nghĩa:** `else` chỉ chạy khi vòng lặp hoàn thành mà **KHÔNG** gặp `break`.

---

### Python Idioms
- **Enumerate**: Thay thế `range(len(list))` trong Java
- **Zip**: Kết hợp nhiều iterator song song
- **List Comprehension**: Cách viết ngắn gọn để tạo list
- **Walrus Operator** (`:=`): Gán và trả về giá trị trong cùng expression
- **For-Else**: Else chạy khi vòng lặp không bị break

### Comparison với Java

| Python | Java Equivalent |
|--------|-----------------|
| `enumerate(list, start=1)` | `for (int i=0; i<list.size(); i++)` |
| `zip(list1, list2)` | Manual iteration with indices |
| `[x**2 for x in range(10)]` | Stream API: `.map().collect()` |
| `if (n := len(name)) > 3` | Không có equivalent |
| `for...else` | Không có equivalent |

---

## 💡 Gợi ý mở rộng

```python
# 1. Zip với nhiều list khác độ dài (dùng zip_longest)
from itertools import zip_longest

# 2. List comprehension với điều kiện phức tạp
results = [x if x > 0 else 0 for x in data]

# 3. Walrus trong while
while (line := input()) != "quit":
    process(line)

# 4. Nested for-else
for i in range(3):
    for j in range(3):
        if condition(i, j):
            break
    else:
        continue
    break
```

---

## 📊 Đánh giá tổng quan

| Tiêu chí | Điểm | Nhận xét |
|----------|------|----------|
| Đúng yêu cầu | ⭐⭐⭐⭐⭐ | Hoàn thành đầy đủ 5 tasks |
| Pythonic | ⭐⭐⭐⭐⭐ | Sử dụng đúng idioms |
| Hiểu bài | ⭐⭐⭐⭐⭐ | Nắm vững các tính năng đặc biệt |
| **Tổng** | **10/10** | Xuất sắc |
