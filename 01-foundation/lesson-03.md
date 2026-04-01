# Lesson 03: Functions, Modules & File Handling

**Ngày học:** 30/03/2026  
**Chủ đề:** Functions, Modules & File Handling  
**Giai đoạn:** 01-foundation

---

## 0. Tóm tắt nhanh (TL;DR)

Buổi này giúp bạn viết code “đúng chuẩn nghề” khi làm việc với function và file:

- Function không chỉ là `def ...`: bạn cần tư duy về **input validation**, **output contract**, và khả năng tái sử dụng.
- Type hints (`Union`, `Optional`, `List[Dict[str, Any]]`) giúp IDE hiểu data structure và giảm lỗi khi refactor.
- Docstring (chuẩn Google) là “tài liệu sống” gắn trực tiếp với function.
- `*args` cho phép thiết kế API linh hoạt.
- Lambda + `sorted(key=...)` giải quyết bài toán sort/filter rất gọn.
- File handling phải đi kèm:
  - `with open(...)` (đóng file tự động)
  - `pathlib.Path` (path an toàn)
  - hiểu lỗi thường gặp: `FileNotFoundError`, `UnicodeEncodeError`, `JSONDecodeError`

---

## 0.1 Cách đọc bài này (như một chương sách)

Nếu bạn muốn học theo thứ tự “từ chắc nền tới nâng cao”, đi theo flow:

1. Function fundamentals
2. `*args` (thiết kế hàm linh hoạt)
3. Type hints + Docstrings (viết hàm có hợp đồng rõ ràng)
4. Lambda + sorting/filtering
5. Module pattern (`if __name__ == "__main__"`)
6. File handling: JSON/CSV + `pathlib`

Nếu bạn học để “áp dụng ngay”, đọc thẳng phần:

- `File Handling` + `CSV to JSON Pipeline`
- Bảng `Lỗi hay gặp & Cách tránh`
- `Best Practices`

---

## 🎯 Mục tiêu buổi học

1. Hiểu và sử dụng `*args`, `**kwargs` cho flexible arguments
2. Áp dụng Type Hints và viết Docstrings chuẩn Google
3. Sử dụng Lambda và Higher-Order Functions
4. Viết Module Pattern với `if __name__ == "__main__"`
5. Xử lý File với Context Manager và pathlib
6. Đọc/ghi JSON và CSV

---

## 📚 Kiến thức đã học

### 1. *args và **kwargs

**`*args` - Packing Operator:**
- Nhận số lượng tham số không xác định
- Python tự động gói thành **Tuple** (immutable, nhanh hơn list)
- Dùng khi không biết trước số lượng arguments

```python
def calculate_stats(*numbers: Union[int, float]) -> dict:
    """Tuple cho *args vì chỉ đọc, không sửa"""
    return {
        'sum': sum(numbers),
        'avg': sum(numbers) / len(numbers),
        'min': min(numbers),
        'max': max(numbers)
    }

# Gọi với bất kỳ số lượng nào
calculate_stats(10, 20, 30)
calculate_stats(1.5, 2.5, 3.5, 4.5, 5.5)
```

### 2. Type Hints & Docstrings

**Type Hints:**
```python
from typing import List, Dict, Union, Any

def process_user_data(users: List[Dict[str, Any]]) -> Dict[str, Any]:
    # Python 3.10+ có thể dùng: list[dict] thay vì List[Dict]
```

**Docstring chuẩn Google:**
```python
def func(args) -> return_type:
    """
    Mô tả ngắn gọn chức năng.
    
    Args:
        param1: Mô tả tham số 1
        param2: Mô tả tham số 2
    
    Returns:
        Mô tả giá trị trả về
    
    Raises:
        ExceptionType: Khi nào raise exception này
    """
```

### 3. List Comprehension & Generator Expression

**List Comprehension:**
```python
# Extract ages từ list dict
ages = [user['age'] for user in users]

# Filter passed students
passed = [s for s in students if s['score'] >= 50]
```

**Generator Expression (tiết kiệm RAM):**
```python
# Đếm adults mà không tạo list tạm
adults_count = sum(1 for age in ages if age >= 18)
```

### 4. Lambda & Sorting

**Lambda trong sort:**
```python
# Sort theo score giảm dần
students.sort(key=lambda s: s['score'], reverse=True)

# Lambda nhận dict s, trả về giá trị để so sánh
```

**zip() kết hợp 2 list:**
```python
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 17, 35]

# Tạo tuples: [('Alice', 25), ('Bob', 17), ('Charlie', 35)]
combined = list(zip(names, ages))

# Tìm người lớn tuổi nhất
oldest = max(zip(names, ages), key=lambda x: x[1])
# Result: ('Charlie', 35)
```

### 5. Module Pattern

**`if __name__ == "__main__":`**
```python
# File utils.py

def save_to_json(data, filename):
    """Hàm để các module khác import"""
    pass

# Code test chỉ chạy khi file được execute trực tiếp
if __name__ == "__main__":
    # Test code ở đây
    save_to_json({'test': 'data'}, 'test.json')
```

**Nguyên tắc:**
- `__name__` = `'__main__'` khi chạy trực tiếp
- `__name__` = tên module khi được import
- Giúp file vừa là module, vừa là script test

### 6. File Handling với Context Manager

**Context Manager (`with`):**
```python
# Tự động đóng file ngay cả khi có exception
with open('file.txt', 'r', encoding='utf-8') as f:
    content = f.read()
# File đã được đóng ở đây
```

**pathlib (thay thế os.path):**
```python
from pathlib import Path

filepath = Path('data/output.json')

# Tạo thư mục cha nếu chưa tồn tại
filepath.parent.mkdir(parents=True, exist_ok=True)

# Path operations
filepath.exists()      # Kiểm tra tồn tại
filepath.absolute()    # Đường dẫn tuyệt đối
filepath.name          # Tên file
filepath.parent        # Thư mục cha
```

### 7. JSON & CSV

**JSON:**
```python
import json

# Ghi vào file
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Đọc từ file
with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# String operations
json_str = json.dumps(data)      # Object -> String
data = json.loads(json_str)      # String -> Object
```

**CSV với DictReader:**
```python
import csv

with open('students.csv', 'r', encoding='utf-8', newline='') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # row là dict với header làm key
        # {'name': 'Alice', 'score': '85'}
        row['score'] = int(row['score'])  # Cast string to int
```

---

## 💻 Bài tập đã làm

### Phần 1: Hàm thống kê linh hoạt

```python
from typing import Union

def calculate_stats(*numbers: Union[int, float]) -> dict[str, Union[int, float]]:
    """
    Tính các thống kê cơ bản từ một dãy số.
    
    Args:
        *numbers: Số lượng tham số không xác định (int hoặc float)
    
    Returns:
        Dict chứa: sum, average, min, max, count
    
    Raises:
        ValueError: Nếu không có số nào được truyền vào
    """
    if not numbers:
        raise ValueError("Cần ít nhất một số để tính toán")
    
    return {
        "sum": sum(numbers),
        "average": round(sum(numbers) / len(numbers), 2),
        "min": min(numbers),
        "max": max(numbers),
        "count": len(numbers)
    }
```

**Key takeaways:**
- `*numbers` nhận tuple các số
- `Union[int, float]` cho type hints kết hợp
- Built-in `sum()`, `min()`, `max()` tiện lợi
- Validation đầu vào với `if not numbers`

### Phần 2: Xử lý dữ liệu người dùng

```python
from typing import List, Dict, Any

def process_user_data(users: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Phân tích danh sách users và trả về thống kê."""
    
    # List comprehension để extract
    ages = [user['age'] for user in users]
    names = [user['name'] for user in users]
    
    # zip() + max() để tìm oldest
    oldest = max(zip(names, ages), key=lambda x: x[1])
    
    return {
        "total_users": len(users),
        "avg_age": round(sum(ages) / len(ages), 1),
        "adults_count": sum(1 for age in ages if age >= 18),
        "oldest_user": oldest[0]
    }
```

**Key takeaways:**
- `zip(names, ages)` tạo tuples để sort/search
- `sum(1 for ...)` là generator expression tiết kiệm RAM
- Nested type hints giúp IDE hiểu rõ cấu trúc data

### Phần 3: Module utils.py

```python
import json
from pathlib import Path
from typing import Any

def save_to_json(data: Any, filename: str) -> Path:
    """Lưu dữ liệu Python vào file JSON."""
    filepath = Path(filename)
    filepath.parent.mkdir(parents=True, exist_ok=True)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    return filepath

def load_from_json(filename: str) -> Any:
    """Đọc dữ liệu từ file JSON."""
    filepath = Path(filename)
    
    if not filepath.exists():
        raise FileNotFoundError(f"Không tìm thấy file: {filepath}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

# Test standalone
if __name__ == "__main__":
    test_data = {"course": "Python Pro", "lesson": 3}
    save_to_json(test_data, "test.json")
    loaded = load_from_json("test.json")
    assert loaded == test_data
```

**Key takeaways:**
- `pathlib.Path` hỗ trợ nhiều method tiện lợi
- `mkdir(parents=True)` tạo cả cây thư mục
- Context manager `with` đảm bảo file đóng
- Block `__main__` cho phép test standalone

### Phần 4: CSV to JSON Pipeline

```python
import csv
import json
from pathlib import Path

def read_students_from_csv(csv_path: str):
    """Đọc CSV thành list dict."""
    students = []
    with open(Path(csv_path), 'r', encoding='utf-8', newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            row['score'] = int(row['score'])
            students.append(dict(row))
    return students

def filter_passed_students(students, passing_score=50):
    """Lọc và sort học viên đạt."""
    passed = [s for s in students if s['score'] >= passing_score]
    passed.sort(key=lambda s: s['score'], reverse=True)
    return passed

# Workflow
if __name__ == "__main__":
    all_students = read_students_from_csv("students.csv")
    passed = filter_passed_students(all_students, 50)
    save_to_json(passed, "output/passed_students.json")
```

**Key takeaways:**
- `csv.DictReader` dùng header làm key tự động
- `newline=''` khi open CSV trên Windows
- Lambda trong `sort(key=...)` để sort by field
- Filter bằng list comprehension

---

## 🔍 So sánh Python vs Java

| Khái niệm | Python | Java |
|-----------|--------|------|
| Varargs | `*args` (tuple) | `...` varargs (array) |
| Type Hints | Optional, runtime không check | Mandatory compile-time check |
| Docstrings | Triple quotes `"""` | Javadoc `/** */` |
| Lambda | `lambda x: x + 1` | `(x) -> x + 1` |
| File closing | `with` context manager | `try-finally` hoặc `try-with-resources` |
| Path handling | `pathlib.Path` | `java.nio.file.Path` |
| JSON | Built-in `json` module | External library (Gson, Jackson) |
| CSV | Built-in `csv` module | External library (Apache Commons) |

---

## ⚠️ Lỗi hay gặp & Cách tránh

| Lỗi | Nguyên nhân | Cách fix |
|-----|-------------|----------|
| `ZeroDivisionError` | Truyền empty list/args | Check `if numbers` trước khi chia |
| `KeyError` | Dict không có key | Dùng `.get()` hoặc check trước |
| `FileNotFoundError` | Path không tồn tại | Dùng `Path.exists()` check hoặc `mkdir` |
| `TypeError: not JSON serializable` | Data chứa object không serialize được | Chỉ dùng dict, list, primitive types |
| `UnicodeEncodeError` | Ghi file không dùng encoding | Luôn dùng `encoding='utf-8'` |
| Block `__main__` chạy khi import | Code ở global scope | Đưa test code vào `if __name__ == '__main__':` |

---

## ✅ Checklist khi viết function/file-handling (dùng như quy trình)

### Checklist cho function

- Bạn đã xác định rõ “contract” của hàm chưa?
  - Input là gì (type/structure)?
  - Output là gì?
  - Khi nào raise exception?
- Có cần validate đầu vào không? (fail fast)
- Có thể viết unit test đơn giản cho 3 case không?
  - Case bình thường
  - Case biên
  - Case lỗi

### Checklist cho file handling

- Luôn dùng `with open(...)` chưa?
- Đã chỉ định `encoding='utf-8'` chưa?
- Với CSV trên Windows: đã dùng `newline=''` chưa?
- Path có thể chưa tồn tại: đã `mkdir(parents=True, exist_ok=True)` chưa?
- Đã xử lý trường hợp file không tồn tại / JSON lỗi format chưa?

---

## 📌 Best Practices

1. **Luôn dùng Type Hints** cho function signatures phức tạp
2. **Viết docstrings** cho mọi public function
3. **Dùng `with` statement** cho file operations
4. **Validate đầu vào** - fail fast với meaningful errors
5. **Dùng `pathlib`** thay vì string manipulation cho paths
6. **Block `if __name__ == '__main__'`** cho test code
7. **List comprehension** thay vì for loop đơn giản
8. **Generator expression** (`sum(1 for ...)`) thay vì list khi chỉ cần đếm

---

## 🎓 Tổng kết

Buổi 3 tập trung vào việc viết code Python chuyên nghiệp:
- **Functions**: Flexible args, type hints, docstrings
- **Data processing**: List comprehension, lambda, zip
- **Modules**: Pattern `__main__` cho reusable code
- **File I/O**: Context manager, pathlib, JSON/CSV

**Key insight:** Python code ngắn gọn không đồng nghĩa với thiếu structure. Type hints và docstrings giúp code dễ maintain ngay cả khi là dynamic language.

---

## 🔗 Tài liệu tham khảo

- [Python Typing Documentation](https://docs.python.org/3/library/typing.html)
- [Google Python Style Guide - Docstrings](https://google.github.io/styleguide/pyguide.html#383-functions-and-methods)
- [pathlib Documentation](https://docs.python.org/3/library/pathlib.html)
- [json module](https://docs.python.org/3/library/json.html)
- [csv module](https://docs.python.org/3/library/csv.html)
