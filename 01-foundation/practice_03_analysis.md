# Phân tích: Practice 03 - Functions & Type Hints

## 📋 Tổng quan bài tập

**File:** `practice_03.py`  
**Chủ đề:** Functions, Type Hints, Docstrings  
**Trình độ:** Trung bình  
**Độ dài:** 613 dòng (File lớn, nhiều chức năng)

---

## 📝 Mô tả yêu cầu

Bài tập thực hành định nghĩa functions với:
1. **Type hints** cho parameters và return values
2. **Docstrings** chuẩn Google/NumPy style
3. **Multiple parameters** và default values
4. **Union types** cho nhiều kiểu dữ liệu
5. **Làm việc với List, Dict, JSON, CSV**

---

## ✅ Code đã làm (Tóm tắt)

### Imports & Type Hints
```python
from typing import Union, List, Dict, Any, Optional
import json
import csv
from pathlib import Path
```

### Functions đã định nghĩa

| Function | Input Types | Return Type | Mô tả |
|----------|-------------|-------------|-------|
| `nhan_doi(x)` | `Union[int, float]` | `Union[int, float]` | Nhân đôi giá trị |
| `la_so_chan(n)` | `int` | `bool` | Kiểm tra số chẵn |
| `dien_tich_hcn(cd, cr)` | `float, float` | `float` | Tính diện tích HCN |
| `xoa_phan_tu()` | `List, Any` | `List` | Xóa phần tử khỏi list |
| `doc_json()` | `str` | `Dict` | Đọc file JSON |
| `ghi_csv()` | `str, List[List]` | `None` | Ghi file CSV |
| ... và nhiều hàm khác | | | |

---

## 🔍 Phân tích chi tiết

### Điểm mạnh ✨

| STT | Điểm mạnh | Giải thích |
|-----|-----------|------------|
| 1 | **Type hints đầy đủ** | Mọi function đều có type annotations |
| 2 | **Docstrings chi tiết** | Theo chuẩn Google style với Args, Returns, Examples |
| 3 | **Union types** | `Union[int, float]` cho tham số chấp nhận nhiều kiểu |
| 4 | **Sử dụng pathlib** | `from pathlib import Path` - cách hiện đại thay cho os.path |
| 5 | **Optional type** | `Optional[float]` cho giá trị có thể None |
| 6 | **Comments tiếng Việt** | Giải thích chi tiết từng dòng code |

### Code mẫu tốt

```python
def nhan_doi(x: Union[int, float]) -> Union[int, float]:
    """
    BÀI 1.1: Nhân đôi giá trị đầu vào.
    
    Args:
        x: Số cần nhân đôi (int hoặc float)
    
    Returns:
        Giá trị x nhân với 2
    
    Ví dụ:
        >>> nhan_doi(5)
        10
        >>> nhan_doi(3.5)
        7.0
    """
    return x * 2
```

### Điểm cần cải thiện ⚠️

| STT | Vấn đề | Gợi ý sửa |
|-----|--------|-----------|
| 1 | File quá dài (613 dòng) | Nên chia thành modules nhỏ hơn |
| 2 | Chưa có try-except | Nên thêm xử lý lỗi cho file operations |
| 3 | Chưa có `__main__` | Thiếu phần test/demo functions |

---

## 📚 Kiến thức đã áp dụng

## 📚 Kiến thức đã áp dụng

### 🔧 Phân tích Functions Chi Tiết

#### 1. `def` - Định nghĩa function
```python
def nhan_doi(x: Union[int, float]) -> Union[int, float]:
    """Nhân đôi giá trị đầu vào."""
    return x * 2
```
| Thành phần | Ý nghĩa |
|------------|---------|
| `def` | Từ khóa định nghĩa function |
| `nhan_doi` | Tên function (snake_case) |
| `(x: ...)` | Tham số với type hint |
| `-> ...` | Return type hint |
| `"""..."""` | Docstring (documentation) |

**Cách hoạt động:**
```
Input:  x = 5
        ↓
Process: x * 2 = 10
        ↓
Output: return 10
```

---

#### 2. `Union[type1, type2]` - Type hint đa kiểu
```python
from typing import Union

def nhan_doi(x: Union[int, float]) -> Union[int, float]:
    ...
```
| Tham số | Giá trị | Ý nghĩa |
|---------|---------|---------|
| `type1` | `int` | Kiểu số nguyên |
| `type2` | `float` | Kiểu số thực |

**Cách dùng (Python 3.10+):**
```python
# Cách cũ
from typing import Union
def func(x: Union[int, float]) -> ...

# Cách mới (Python 3.10+)
def func(x: int | float) -> ...  # Dùng | thay cho Union
```

**Ý nghĩa:** Cho biết function chấp nhận nhiều kiểu dữ liệu khác nhau.

---

#### 3. `return` - Trả về giá trị
```python
def la_so_chan(n: int) -> bool:
    return n % 2 == 0  # Trả về True/False
```
| Cú pháp | Ý nghĩa |
|---------|---------|
| `return value` | Trả về giá trị cho caller |
| `return` | Trả về None (implicit) |

**Luồng thực thi:**
```
┌─────────────────┐
│ Gọi function    │
│ la_so_chan(4)   │
└────────┬────────┘
         ▼
┌─────────────────┐
│ Tính 4 % 2 == 0 │
│ Kết quả: True   │
└────────┬────────┘
         ▼
┌─────────────────┐
│ return True     │───► Caller nhận True
└─────────────────┘
```

---

#### 4. `-> None` - Không trả về giá trị
```python
def print_hello(name: str) -> None:
    print(f"Hello, {name}!")
```
| Return type | Ý nghĩa |
|-------------|---------|
| `-> None` | Function không trả về gì (chỉ thực hiện side effects) |

**So sánh:**
```python
# Có return value
def add(a: int, b: int) -> int:
    return a + b

result = add(2, 3)  # result = 5

# Không return value
def greet(name: str) -> None:
    print(f"Hello {name}!")

greet("Phuoc")  # Không có giá trị trả về để gán
```

---

#### 5. Docstring (Documentation String)
```python
def nhan_doi(x: Union[int, float]) -> Union[int, float]:
    """
    BÀI 1.1: Nhân đôi giá trị đầu vào.
    
    Args:
        x: Số cần nhân đôi (int hoặc float)
    
    Returns:
        Giá trị x nhân với 2
    
    Ví dụ:
        >>> nhan_doi(5)
        10
        >>> nhan_doi(3.5)
        7.0
    """
    return x * 2
```

| Section | Nội dung |
|---------|----------|
| `Args` | Tham số đầu vào và kiểu dữ liệu |
| `Returns` | Giá trị trả về và ý nghĩa |
| `Ví dụ` | Usage examples (có thể test bằng doctest) |

**Lợi ích:**
- Hiển thị khi dùng `help(function)`
- IDE hiển thị tooltip
- Tự động tạo documentation

---

#### 6. `from pathlib import Path` - Xử lý đường dẫn
```python
from pathlib import Path

data_file = Path("data.json")
content = data_file.read_text()
```

| Method | Ý nghĩa |
|--------|---------|
| `Path("file.txt")` | Tạo đối tượng Path |
| `.read_text()` | Đọc nội dung file text |
| `.write_text()` | Ghi nội dung vào file |
| `.exists()` | Kiểm tra file tồn tại |

**So sánh với Java:**
```java
// Java
Files.readString(Path.of("data.json"));

// Python
Path("data.json").read_text()
```

---

### Type Hints trong Python

```python
# Cơ bản
def func(x: int, y: str) -> bool:
    pass

# Union type (Python 3.10+ dùng |)
def func(x: int | float) -> str:
    pass

# Optional (có thể None)
def func(x: Optional[int] = None) -> str:
    pass

# List/Dict với generic types
from typing import List, Dict
def func(items: List[str], mapping: Dict[str, int]) -> None:
    pass
```

### Docstring Standards

| Style | Đặc điểm | Dùng khi nào |
|-------|----------|--------------|
| Google Style | Args:, Returns:, Raises: | Phổ biến nhất |
| NumPy Style | Parameters, Returns | Scientific computing |
| reStructuredText | :param, :return: | Sphinx documentation |

---

## 💡 Gợi ý mở rộng

```python
# 1. Sử dụng | thay cho Union (Python 3.10+)
def nhan_doi(x: int | float) -> int | float:
    return x * 2

# 2. Type aliases cho complex types
Vector = list[float]
Matrix = list[Vector]

def multiply(m: Matrix, v: Vector) -> Vector:
    pass

# 3. Generic functions
from typing import TypeVar

T = TypeVar('T')

def first(items: list[T]) -> T | None:
    return items[0] if items else None
```

---

## 📊 Đánh giá tổng quan

| Tiêu chí | Điểm | Nhận xét |
|----------|------|----------|
| Type hints | ⭐⭐⭐⭐⭐ | Đầy đủ và chính xác |
| Docstrings | ⭐⭐⭐⭐⭐ | Chi tiết, có ví dụ |
| Code structure | ⭐⭐⭐⭐☆ | File hơi dài |
| Comments | ⭐⭐⭐⭐⭐ | Rất chi tiết |
| **Tổng** | **9/10** | Rất tốt |

---

## 🎯 Tóm tắt

File `practice_03.py` là bài tập tốt về functions và type hints trong Python. Người học đã nắm vững:
- Cách định nghĩa function với type hints
- Cách viết docstrings chuẩn
- Cách sử dụng Union, Optional, List, Dict types
- Cách làm việc với file (JSON, CSV) sử dụng pathlib
