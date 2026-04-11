# Phân tích: Class Course

## 📋 Tổng quan bài tập

**File:** `Course.py`  
**Chủ động:** Quan hệ giữa các Class (Course - Student)  
**Trình độ:** Trung bình - Khó

---

## 📝 Mô tả yêu cầu

Xây dựng class Course quản lý nhiều Student:
1. **Private attributes**: `_course_code`, `_course_name`, `_students`
2. **`_course_code` chỉ getter**
3. **List chứa Student objects**
4. **Methods**:
   - `add_student()` - Thêm học sinh
   - `remove_student()` - Xóa học sinh
   - `get_student_by_id()` - Tìm theo ID
   - `get_class_average()` - Điểm trung bình lớp
   - `get_top_student()` - Học sinh giỏi nhất

---

## ✅ Code đã làm

```python
class Course:
    def __init__(self, course_code, course_name):
        self._course_code = course_code
        self._course_name = course_name
        self._students = []

    @property
    def course_code(self):
        return self._course_code

    @property
    def course_name(self):
        return self._course_name

    @property
    def students(self):
        return self._students

    @course_name.setter
    def course_name(self, value):
        self._course_name = value

    def add_student(self, student):
        self._students.append(student)

    def remove_student(self, student):
        self._students.remove(student)

    def get_student_by_id(self, id):
        for student in self._students:
            if student.student_id == id:
                return student
        return None

    def get_class_average(self):
        if not self._students:
            return 0
        total = 0
        for student in self._students:
            total += student.get_average_score()
        return total / len(self._students)

    def get_top_student(self):
        if not self._students:
            return None
        top_student = self._students[0]
        for student in self._students:
            if student.get_average_score() > top_student.get_average_score():
                top_student = student
        return top_student

    def __str__(self):
        return f"Course({self._course_code}, {self._course_name}, {len(self._students)} students)"
```

---

## 🔍 Phân tích chi tiết

### Điểm mạnh ✨

| STT | Điểm mạnh | Giải thích |
|-----|-----------|------------|
| 1 | **Aggregation pattern** | Course chứa list của Student objects |
| 2 | **Read-only course_code** | Mã môn học không đổi |
| 3 | **Find by ID** | `get_student_by_id()` duyệt list |
| 4 | **Class average** | Tính trung bình tất cả học sinh |
| 5 | **Top student** | Tìm học sinh có điểm cao nhất |
| 6 | **Safe checks** | Kiểm tra empty list |

## 📚 Kiến thức OOP đã áp dụng

### 🔧 Phân tích Methods Chi Tiết

#### 1. `__init__()` - Constructor
```python
def __init__(self, course_code, course_name):
    self._course_code = course_code      # Mã môn (read-only)
    self._course_name = course_name      # Tên môn (có thể đổi)
    self._students = []                  # List các Student objects
```

| Tham số | Ý nghĩa |
|---------|---------|
| `course_code` | Mã môn học (read-only) |
| `course_name` | Tên môn học (có thể đổi) |

**Cách sử dụng:**
```python
course = Course("PY101", "Python cơ bản")
```

---

#### 2. `course_code` (Read-only Property)
```python
@property
def course_code(self):
    return self._course_code
```

Mã môn không được thay đổi sau khi tạo.

---

#### 3. `course_name` (Read/Write Property)
```python
@property
def course_name(self):
    return self._course_name

@course_name.setter
def course_name(self, value):
    self._course_name = value
```

Tên môn có thể đổi, ví dụ từ "Python cơ bản" thành "Python nâng cao".

---

#### 4. `students` (Read-only Property)
```python
@property
def students(self):
    return self._students
```

Trả về list các Student objects.

---

#### 5. `add_student(student)` - Thêm học sinh
```python
def add_student(self, student):
    self._students.append(student)
```

| Tham số | Ý nghĩa |
|---------|---------|
| `student` | Student object cần thêm |

**Luồng thực thi:**
```
course.add_student(s1)
    ↓
self._students.append(s1)
    ↓
_students = [s1]
```

**Aggregation Pattern:**
```
Course ────────► [Student, Student, Student]
   (1)              (*) HAS-A relationship
```

---

#### 6. `remove_student(student)` - Xóa học sinh
```python
def remove_student(self, student):
    self._students.remove(student)
```

**Lưu ý:** Nếu student không tồn tại → `ValueError`.

---

#### 7. `get_student_by_id(id)` - Tìm học sinh theo ID
```python
def get_student_by_id(self, id):
    for student in self._students:
        if student.student_id == id:
            return student
    return None
```

**Thuật toán:** Linear Search (O(n))

| Tham số | Ý nghĩa |
|---------|---------|
| `id` | Student ID cần tìm |

**Luồng thực thi:**
```
get_student_by_id("S001")
    ↓
Duyệt qua từng student trong _students
    ↓
student.student_id == "S001"? → True
    ↓
return student
```

**Trả về:**
- `Student object` nếu tìm thấy
- `None` nếu không tìm thấy

---

#### 8. `get_class_average()` - Tính điểm trung bình lớp
```python
def get_class_average(self):
    if not self._students:           # Kiểm tra list rỗng
        return 0
    total = 0
    for student in self._students:
        total += student.get_average_score()
    return total / len(self._students)
```

**Công thức:** `sum(avg_score của từng student) / số lượng student`

**Luồng thực thi:**
```
 students = [s1, s2, s3]
    ↓
s1.get_average_score() = 9.0
s2.get_average_score() = 8.5
s3.get_average_score() = 8.0
    ↓
total = 9.0 + 8.5 + 8.0 = 25.5
    ↓
25.5 / 3 = 8.5  → Return 8.5
```

---

#### 9. `get_top_student()` - Tìm học sinh giỏi nhất
```python
def get_top_student(self):
    if not self._students:
        return None
    top_student = self._students[0]
    for student in self._students:
        if student.get_average_score() > top_student.get_average_score():
            top_student = student
    return top_student
```

**Thuật toán:** Linear Search (O(n))

**Luồng thực thi:**
```
 students = [s1(9.0), s2(8.5), s3(8.0)]
    ↓
Initialize: top_student = s1
    ↓
Compare s2(8.5) vs s1(9.0): 8.5 > 9.0? → No
    ↓
Compare s3(8.0) vs s1(9.0): 8.0 > 9.0? → No
    ↓
return s1 (điểm cao nhất)
```

---

#### 10. `__str__()` - Hiển thị thông tin
```python
def __str__(self):
    return f"Course({self._course_code}, {self._course_name}, {len(self._students)} students)"
```

**Kết quả:**
```python
course = Course("PY101", "Python cơ bản")
course.add_student(s1)
course.add_student(s2)
print(course)  # Course(PY101, Python cơ bản, 2 students)
```

---

### Class Relationship

```
Course (1) ──────────────> (*) Student
  - _students: list[Student]
  
# Aggregation: Course có nhiều Student
# Student có thể tồn tại độc lập Course
```

### Code Review

```python
# GOOD: List of objects
self._students = []  # ✓ Sẽ chứa Student objects

def add_student(self, student):
    self._students.append(student)  # ✓ Thêm object

# GOOD: Search by ID
def get_student_by_id(self, id):
    for student in self._students:
        if student.student_id == id:  # ✓ Dùng property của Student
            return student
    return None  # ✓ Return None nếu không tìm thấy

# GOOD: Calculate average
def get_class_average(self):
    if not self._students:  # ✓ Check empty
        return 0
    total = sum(s.get_average_score() for s in self._students)
    return total / len(self._students)
```

---

## 🎯 Kết quả chạy

```python
from Student import Student
from Course import Course

s1 = Student("S001", "Phước")
s1.add_grade("Python", 9.5)
s1.add_grade("OOP", 8.5)

s2 = Student("S002", "Nam")
s2.add_grade("Python", 8.0)
s2.add_grade("OOP", 9.0)

course = Course("PY101", "Python cơ bản")
course.add_student(s1)
course.add_student(s2)

print(course)  # Course(PY101, Python cơ bản, 2 students)
print(course.get_class_average())  # 8.75

top = course.get_top_student()
print(top)  # Student ID: S001, Name: Phước

found = course.get_student_by_id("S002")
print(found.name)  # Nam
```

---

## 📚 Kiến thức đã áp dụng

### Aggregation (Has-A Relationship)

```python
# Course HAS-A list of Students
class Course:
    def __init__(self):
        self._students: list[Student] = []
    
    def add_student(self, student: Student) -> None:
        self._students.append(student)
```

### List Operations

| Operation | Code | Complexity |
|-----------|------|------------|
| Add | `list.append(item)` | O(1) |
| Remove | `list.remove(item)` | O(n) |
| Find | Linear search | O(n) |
| Sort | `sorted(list, key=func)` | O(n log n) |

---

## 💡 Gợi ý mở rộng

```python
from typing import List, Optional
from statistics import mean, median

class Course:
    def __init__(self, course_code: str, course_name: str):
        self._course_code = course_code
        self._course_name = course_name
        self._students: List[Student] = []
        self._max_students = 30
    
    def add_student(self, student: Student) -> None:
        if len(self._students) >= self._max_students:
            raise ValueError("Course is full")
        if self._find_student_index(student.student_id) >= 0:
            raise ValueError("Student already enrolled")
        self._students.append(student)
    
    def _find_student_index(self, student_id: str) -> int:
        """Find student index by ID (private method)."""
        for i, s in enumerate(self._students):
            if s.student_id == student_id:
                return i
        return -1
    
    def remove_student(self, student_id: str) -> None:
        """Remove student by ID."""
        idx = self._find_student_index(student_id)
        if idx < 0:
            raise ValueError("Student not found")
        self._students.pop(idx)
    
    def get_grade_report(self) -> dict:
        """Generate comprehensive grade report."""
        if not self._students:
            return {}
        
        averages = [s.get_average_score() for s in self._students]
        return {
            "course": self._course_code,
            "students_count": len(self._students),
            "class_average": mean(averages),
            "median": median(averages),
            "highest": max(averages),
            "lowest": min(averages),
            "pass_rate": sum(1 for a in averages if a >= 5.0) / len(averages)
        }
    
    def get_failing_students(self) -> List[Student]:
        """Get students with average < 5.0."""
        return [s for s in self._students if s.get_average_score() < 5.0]
    
    def sort_by_grade(self) -> List[Student]:
        """Return students sorted by average score (descending)."""
        return sorted(self._students, 
                     key=lambda s: s.get_average_score(), 
                     reverse=True)
```

---

## 📊 Đánh giá tổng quan

| Tiêu chí | Điểm | Nhận xét |
|----------|------|----------|
| Aggregation | ⭐⭐⭐⭐⭐ | Đúng pattern |
| Encapsulation | ⭐⭐⭐⭐⭐ | Private attributes |
| Search logic | ⭐⭐⭐⭐⭐ | Linear search |
| Calculation | ⭐⭐⭐⭐⭐ | Class average, top student |
| Extensibility | ⭐⭐⭐⭐⭐ | Dễ thêm methods |
| **Tổng** | **10/10** | Xuất sắc |

---

## 🎯 Tóm tắt

Course class thể hiện:
- ✅ **Aggregation** - Quan hệ has-a với Student
- ✅ **Collection management** - List operations
- ✅ **Business logic** - Average, top student
- ✅ **Clean API** - Properties, meaningful methods

Là nền tảng tốt cho hệ thống quản lý học tập!
