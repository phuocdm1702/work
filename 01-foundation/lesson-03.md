# Lesson 03: Functions, Modules & File Handling

**Ngày học:** 30/03/2026  
**Chủ đề:** Functions, Modules & File Handling  
**Giai đoạn:** 01-foundation

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

### 1. Tổng quan nội dung
Buổi học hôm nay tập trung vào việc làm chủ cách viết Function (hàm) trong Python, từ các khái niệm cơ bản đến các kỹ thuật chuyên nghiệp được sử dụng trong thực tế.

### 2. Các kiến thức trọng tâm

#### A. Cấu trúc Function chuẩn
Một hàm chuyên nghiệp thường bao gồm:
- **Type Hints**: Gợi ý kiểu dữ liệu đầu vào và đầu ra.
- **Docstring**: Mô tả chi tiết chức năng, tham số (Args), giá trị trả về (Returns), và các lỗi có thể xảy ra (Raises).
- **Logic**: Thân hàm được thụt lề 4 khoảng trắng.

#### B. Type Hints & Union
- **`Union[int, float]`**: Cho phép một biến có thể là kiểu `int` HOẶC `float`.
- **`-> float`**: Chỉ định kiểu dữ liệu trả về của hàm.
- *Lưu ý*: Type hints chỉ là gợi ý cho lập trình viên và IDE, không bắt buộc về mặt kỹ thuật nhưng cực kỳ quan trọng trong bảo trì code.

#### C. Flexible Arguments (`*args`)
- Cho phép truyền vào số lượng tham số không giới hạn.
- Python sẽ gom các tham số này vào một `tuple`.
- Ví dụ: `def tinh_tong(*numbers):` có thể nhận `tinh_tong(1, 2)` hoặc `tinh_tong(1, 2, 3, 4, 5)`.

#### D. File Handling (JSON & CSV)
- **JSON**: Dùng module `json`. Quan trọng nhất là `json.dump()` (ghi) và `json.load()` (đọc).
- **CSV**: Dùng module `csv`. `csv.DictReader` rất hữu dụng để đọc mỗi dòng thành một dictionary.
- **Pathlib**: Sử dụng `from pathlib import Path` để xử lý đường dẫn file an toàn trên cả Windows và Linux.

#### E. Module Pattern (`if __name__ == "__main__":`)
- Giúp phân biệt khi nào file được chạy trực tiếp, khi nào file được import vào file khác.
- Đảm bảo code chạy thử (test) không bị thực thi ngoài ý muốn khi ta chỉ muốn sử dụng các hàm của file đó.

### 3. Các bài tập đã thực hiện
1. **Hàm cơ bản**: `nhan_doi`, `la_so_chan`.
2. **Hàm nhiều tham số**: `dien_tich_hcn`, `trung_binh_cong`.
3. **Control Flow**: `so_lon_hon`, `xep_loai_diem`.
4. **Lambda & Sắp xếp**: `sap_xep_theo_diem`, `loc_sinh_vien_dat`.
5. **Flexible Args**: `calculate_stats` (tính tổng, min, max, avg cùng lúc).
6. **Xử lý File**: `save_to_json`, `load_from_json`, `read_students_from_csv`.

### 4. Ghi chú cá nhân
- Cần chú ý thụt lề (indentation) vì Python rất nghiêm ngặt việc này.
- Khi làm việc với file, luôn dùng `with open(...)` để đảm bảo file được đóng tự động, tránh rò rỉ bộ nhớ.
- Docstring nên viết theo chuẩn Google để dễ đọc và tương thích với các công cụ tạo tài liệu tự động.

---
*Ngày học: 31/03/2026*
*Tài liệu thực hành: `01-foundation/practice_03.py`*

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
