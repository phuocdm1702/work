# Phân tích: Class Rectangle

## 📋 Tổng quan bài tập

**File:** `Rectangle.py`  
**Chủ đề:** Class & Object, Encapsulation  
**Trình độ:** Cơ bản

---

## 📝 Mô tả yêu cầu

Xây dựng class Rectangle với:
1. **Private attributes**: `_width`, `_height`
2. **Getter/Setter** với validation
3. **Methods**: `area()`, `perimeter()`, `is_square()`
4. **`__str__` và `__repr__`**

---

## ✅ Code đã làm

```python
class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height

    @property
    def width(self):
        return self._width

    @property
    def height(self):
        return self._height

    @width.setter
    def width(self, value):
        if value > 0:
            self._width = value
        else:
            raise ValueError("Width phải > 0")

    @height.setter
    def height(self, value):
        if value > 0:
            self._height = value
        else:
            raise ValueError("Height phải > 0")

    def area(self):
        return self._width * self._height

    def perimeter(self):
        return 2 * (self._width + self._height)

    def is_square(self):
        return self._width == self._height

    def __str__(self):
        return f"Rectangle(width={self._width}, height={self._height})"

    def __repr__(self):
        return f"Rectangle(width={self._width}, height={self._height})"
```

---

## 🔍 Phân tích chi tiết

### Điểm mạnh ✨

| STT | Điểm mạnh | Giải thích |
|-----|-----------|------------|
| 1 | **Encapsulation đúng** | Dùng `_width`, `_height` (private convention) |
| 2 | **Property decorator** | `@property` cho getter, `@width.setter` cho setter |
| 3 | **Validation trong setter** | Kiểm tra `value > 0`, raise ValueError |
| 4 | **Tách biệt `__str__` và `__repr__`** | Cả 2 method đều có |
| 5 | **Method names rõ ràng** | `area()`, `perimeter()`, `is_square()` |

### Code Review

```python
# GOOD: Constructor lưu vào private attributes
self._width = width  # ✓
self._height = height  # ✓

# GOOD: Property getter
@property
def width(self):
    return self._width  # ✓ Không phải self.width (tránh recursion)

# GOOD: Setter với validation
@width.setter
def width(self, value):
    if value > 0:  # ✓ Validate
        self._width = value
    else:
        raise ValueError("Width phải > 0")  # ✓ Báo lỗi rõ ràng

# GOOD: Methods sử dụng private attributes
def area(self):
    return self._width * self._height  # ✓ Không phải self.width
```

---

## 🎯 Kết quả chạy

```python
r = Rectangle(5, 10)
print(r)              # Rectangle(width=5, height=10)
print(r.area())       # 50
print(r.perimeter())  # 30
print(r.is_square())  # False

r.width = 10
print(r.is_square())  # True

# Test validation
try:
    r.width = -5  # ValueError: Width phải > 0
except ValueError as e:
    print(e)
```

---

## 📚 Kiến thức OOP đã áp dụng

## 📚 Kiến thức OOP đã áp dụng

### 🔧 Phân tích Methods Chi Tiết

#### 1. `__init__()` - Constructor (Khởi tạo đối tượng)
```python
def __init__(self, width, height):
    self._width = width    # Lưu width vào private attribute
    self._height = height  # Lưu height vào private attribute
```

| Tham số | Ý nghĩa |
|---------|---------|
| `self` | Reference đến instance hiện tại (giống `this` trong Java) |
| `width` | Chiều rộng truyền vào khi tạo object |
| `height` | Chiều cao truyền vào khi tạo object |

**Cách sử dụng:**
```python
r = Rectangle(5, 10)  # Gọi __init__(self=?, 5, 10)
                        # self tự động truyền
```

**So sánh với Java:**
```java
// Java
public Rectangle(int width, int height) {
    this._width = width;
    this._height = height;
}

// Python
def __init__(self, width, height):
    self._width = width
    self._height = height
```

---

#### 2. `@property` - Getter
```python
@property
def width(self):
    return self._width

@property
def height(self):
    return self._height
```

| Thành phần | Ý nghĩa |
|------------|---------|
| `@property` | Decorator biến method thành property |
| `self` | Reference đến instance |
| `return self._width` | Trả về giá trị private |

**Cách sử dụng:**
```python
r = Rectangle(5, 10)
print(r.width)   # Gọi width() tự động → 5 (không cần r.width())
```

**So sánh với Java:**
```java
// Java
public int getWidth() {
    return this._width;
}
// Dùng: r.getWidth()

// Python
@property
def width(self):
    return self._width
# Dùng: r.width (như attribute, không cần ())
```

---

#### 3. `@width.setter` - Setter với validation
```python
@width.setter
def width(self, value):
    if value > 0:
        self._width = value
    else:
        raise ValueError("Width phải > 0")
```

| Thành phần | Ý nghĩa |
|------------|---------|
| `@width.setter` | Decorator định nghĩa setter cho property `width` |
| `value` | Giá trị mới cần gán |
| `raise ValueError` | Ném lỗi nếu validation fail |

**Cách sử dụng:**
```python
r = Rectangle(5, 10)
r.width = 20     # Gọi setter → self._width = 20
r.width = -5     # Raise ValueError!
```

**Luồng validation:**
```
r.width = -5
    ↓
@width.setter nhận value=-5
    ↓
if -5 > 0? → False
    ↓
raise ValueError("Width phải > 0")
```

---

#### 4. `area()` - Tính diện tích
```python
def area(self):
    return self._width * self._height
```

| Tham số | Ý nghĩa |
|---------|---------|
| `self` | Reference đến instance |
| Return | `width × height` |

**Cách sử dụng:**
```python
r = Rectangle(5, 10)
print(r.area())  # 5 × 10 = 50
```

---

#### 5. `perimeter()` - Tính chu vi
```python
def perimeter(self):
    return 2 * (self._width + self._height)
```

**Công thức:** `2 × (width + height)`

---

#### 6. `is_square()` - Kiểm tra hình vuông
```python
def is_square(self):
    return self._width == self._height
```

| Return | Ý nghĩa |
|--------|---------|
| `True` | width == height (hình vuông) |
| `False` | width != height (hình chữ nhật) |

---

#### 7. `__str__()` - String representation cho người dùng
```python
def __str__(self):
    return f"Rectangle(width={self._width}, height={self._height})"
```

| Gọi khi | Ví dụ |
|---------|-------|
| `print(r)` | `Rectangle(width=5, height=10)` |
| `str(r)` | `Rectangle(width=5, height=10)` |
| f"{r}" | `Rectangle(width=5, height=10)` |

---

#### 8. `__repr__()` - String representation cho developer
```python
def __repr__(self):
    return f"Rectangle(width={self._width}, height={self._height})"
```

| Gọi khi | Ví dụ |
|---------|-------|
| `repr(r)` | `Rectangle(width=5, height=10)` |
| Console | `Rectangle(width=5, height=10)` |

**Khác biệt `__str__` vs `__repr__`:**
```python
# __str__ → Cho người dùng cuối (user-friendly)
"Rectangle: 5x10"

# __repr__ → Cho developer (chi tiết để debug)
"Rectangle(width=5, height=10, id=0x1234)"
```

---

### Encapsulation (Đóng gói)

```python
# Private attributes (convention: single underscore)
self._width = width   # Không nên truy cập trực tiếp từ ngoài

# Public interface via properties
@property
def width(self):      # Getter - cho phép đọc
    return self._width

@width.setter
def width(self, value):  # Setter - cho phép ghi với kiểm soát
    if value > 0:
        self._width = value
```

### Property Decorator

| Cách cũ (Java style) | Cách Pythonic |
|---------------------|---------------|
| `getWidth()`, `setWidth()` | `@property`, `@width.setter` |
| `r.setWidth(10)` | `r.width = 10` |
| `r.getWidth()` | `r.width` |

### Magic Methods

| Method | Khi nào gọi | Mục đích |
|--------|-------------|----------|
| `__init__` | `Rectangle(5, 10)` | Khởi tạo object |
| `__str__` | `print(r)`, `str(r)` | Hiển thị cho người dùng |
| `__repr__` | `repr(r)`, console | Hiển thị cho developer |

---

## 💡 Gợi ý mở rộng

```python
# 1. Type hints
class Rectangle:
    def __init__(self, width: float, height: float) -> None:
        self._width = width
        self._height = height

# 2. Docstrings đầy đủ
@width.setter
def width(self, value: float) -> None:
    """Set width with validation.
    
    Args:
        value: Width value, must be positive
        
    Raises:
        ValueError: If value <= 0
    """

# 3. Class method để tạo square
@classmethod
def square(cls, side: float) -> "Rectangle":
    """Create a square rectangle."""
    return cls(side, side)

# 4. Comparison methods
from functools import total_ordering

@total_ordering
class Rectangle:
    def __eq__(self, other): ...
    def __lt__(self, other): ...
```

---

## 📊 Đánh giá tổng quan

| Tiêu chí | Điểm | Nhận xét |
|----------|------|----------|
| Encapsulation | ⭐⭐⭐⭐⭐ | Đúng Python convention |
| Property | ⭐⭐⭐⭐⭐ | Sử dụng đúng |
| Validation | ⭐⭐⭐⭐⭐ | Có kiểm tra và báo lỗi |
| Magic methods | ⭐⭐⭐⭐⭐ | `__str__`, `__repr__` đầy đủ |
| **Tổng** | **10/10** | Xuất sắc |

---

## 🎯 Tóm tắt

Đây là implementation **chuẩn Python** của class Rectangle:
- ✅ Sử dụng `_attribute` cho private (Python convention)
- ✅ `@property` thay cho getter/setter methods
- ✅ Validation trong setter
- ✅ `__str__` và `__repr__` đầy đủ
- ✅ Code clean, dễ đọc

Là ví dụ tốt cho người mới học OOP trong Python!
