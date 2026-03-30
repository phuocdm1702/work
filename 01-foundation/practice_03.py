# -*- coding: utf-8 -*-

# ==============================================================================
# IMPORT SECTION
# ==============================================================================
# from typing: Import type hints để gợi ý kiểu dữ liệu
# Union: Cho phép nhiều kiểu (VD: int hoặc float)
# List: Kiểu list với phần tử cụ thể
# Dict: Kiểu dictionary với key-value cụ thể
# Any: Kiểu bất kỳ
# Optional: Kiểu có thể là kiểu đó hoặc None
from typing import Union, List, Dict, Any, Optional

# json: Module làm việc với JSON
import json

# csv: Module đọc/ghi file CSV
import csv

# pathlib.Path: Class xử lý đường dẫn file đa nền tảng
from pathlib import Path


# ==============================================================================
# PHẦN 1: FUNCTIONS CƠ BẢN
# ==============================================================================

# BÀI 1.1: Hàm nhân đôi
# def: Từ khóa định nghĩa function
# nhan_doi: Tên function (snake_case - chữ thường, cách nhau bằng _)
# x: Tham số đầu vào
# Union[int, float]: Type hint - x có thể là int hoặc float
# -> Union[int, float]: Kiểu trả về

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
    # return: Từ khóa trả về giá trị
    # x * 2: Biểu thức nhân x với 2
    return x * 2


# BÀI 1.2: Kiểm tra số chẵn
# n: Tham số số nguyên
# -> bool: Trả về True/False

def la_so_chan(n: int) -> bool:
    """
    BÀI 1.2: Kiểm tra số chẵn.
    
    Args:
        n: Số nguyên cần kiểm tra
    
    Returns:
        True nếu n chia hết cho 2, False nếu lẻ
    
    Logic:
        Số chẵn là số chia cho 2 dư 0
        Toán tử % là modulo (lấy phần dư)
        4 % 2 = 0 → True (chẵn)
        7 % 2 = 1 → False (lẻ)
    """
    # n % 2: Lấy phần dư khi chia n cho 2
    # == 0: So sánh bằng 0
    # Kết quả là True hoặc False
    return n % 2 == 0


# ==============================================================================
# PHẦN 2: FUNCTIONS VỚI NHIỀU THAM SỐ
# ==============================================================================

# BÀI 2.1: Tính diện tích hình chữ nhật
# chieu_dai, chieu_rong: Hai tham số đầu vào
# -> float: Trả về số thực

def dien_tich_hcn(chieu_dai: float, chieu_rong: float) -> float:
    """
    BÀI 2.1: Tính diện tích hình chữ nhật.
    
    Args:
        chieu_dai: Chiều dài
        chieu_rong: Chiều rộng
    
    Returns:
        Diện tích = chiều dài × chiều rộng
    """
    # Phép nhân hai tham số
    return chieu_dai * chieu_rong


# BÀI 2.2: Tính trung bình cộng 3 số
# a, b, c: Ba tham số số học
# Lưu ý: / trong Python 3 luôn ra float

def trung_binh_cong(a: float, b: float, c: float) -> float:
    """
    BÀI 2.2: Tính trung bình cộng 3 số.
    
    Args:
        a, b, c: 3 số bất kỳ
    
    Returns:
        Giá trị trung bình = (a + b + c) / 3
    """
    # (a + b + c): Tính tổng trước (trong ngoặc)
    # / 3: Chia cho 3 để lấy trung bình
    return (a + b + c) / 3


# ==============================================================================
# PHẦN 3: CONTROL FLOW (if/else)
# ==============================================================================

# BÀI 3.1: Tìm số lớn hơn
# Dùng if/else để so sánh và quyết định return

def so_lon_hon(a: float, b: float) -> float:
    """
    BÀI 3.1: Tìm số lớn hơn trong 2 số.
    
    Args:
        a: Số thứ nhất
        b: Số thứ hai
    
    Returns:
        Số lớn hơn giữa a và b
    """
    # if: Bắt đầu câu điều kiện
    # a > b: Biểu thức so sánh (lớn hơn)
    if a > b:
        # Khối code if phải thụt đầu dòng (4 spaces)
        return a
    else:
        # else: Chạy khi if là False
        return b


# BÀI 3.2: Xếp loại điểm
# Dùng if/elif/else cho nhiều điều kiện
# elif = else if

def xep_loai_diem(diem: float) -> str:
    """
    BÀI 3.2: Xếp loại điểm số.
    
    Quy tắc:
        9.0 - 10.0: "Xuất sắc"
        8.0 - 8.9:  "Giỏi"
        7.0 - 7.9:  "Khá"
        5.0 - 6.9:  "Trung bình"
        < 5.0:      "Yếu"
    
    Args:
        diem: Điểm từ 0 đến 10
    
    Returns:
        Chuỗi xếp loại
    """
    # if: Kiểm tra điều kiện đầu
    # Python cho phép viết: 9.0 <= diem <= 10.0
    if 9.0 <= diem <= 10.0:
        return "Xuất sắc"
    # elif: Kiểm tra điều kiện tiếp theo nếu if trước sai
    elif 8.0 <= diem < 9.0:
        return "Giỏi"
    elif 7.0 <= diem < 8.0:
        return "Khá"
    elif 5.0 <= diem < 7.0:
        return "Trung bình"
    else:
        # else: Chạy khi tất cả điều kiện trên đều sai
        return "Yếu"


# ==============================================================================
# PHẦN 4: LAMBDA & HIGHER-ORDER FUNCTIONS
# ==============================================================================

# BÀI 4.1: Sắp xếp theo điểm
# Lambda: Hàm ẩn danh, viết nhanh trên 1 dòng
# Cú pháp: lambda tham_so: bieu_thuc

def sap_xep_theo_diem(students: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    BÀI 4.1: Sắp xếp học sinh theo điểm giảm dần.
    
    Args:
        students: List dict có 'name' và 'score'
    
    Returns:
        List đã sắp xếp theo score giảm dần
    
    Giải thích lambda:
        key=lambda s: s['score'] nghĩa là:
        "Với mỗi phần tử s, lấy s['score'] để so sánh"
    """
    # sorted(): Hàm sắp xếp trả về list mới
    # key=: Tiêu chí sắp xếp (nhận function)
    # lambda s: s['score']: Hàm lấy score để so sánh
    # reverse=True: Sắp xếp giảm dần (lớn → nhỏ)
    return sorted(students, key=lambda s: s['score'], reverse=True)


# BÀI 4.2: Lọc sinh viên đạt
# List comprehension: Cú pháp ngắn để tạo list
# [item for item in list if dieu_kien]

def loc_sinh_vien_dat(students: List[Dict[str, Any]], diem_dat: int = 50) -> List[Dict[str, Any]]:
    """
    BÀI 4.2: Lọc sinh viên có score >= diem_dat.
    
    Args:
        students: List các dict sinh viên
        diem_dat: Ngưỡng điểm (mặc định 50)
    
    Returns:
        List sinh viên đạt
    
    List comprehension:
        [s for s in students if s['score'] >= diem_dat]
        - s: Biến tạm cho mỗi phần tử
        - for s in students: Lặp qua list
        - if: Điều kiện lọc (chỉ giữ khi đúng)
    """
    return [s for s in students if s['score'] >= diem_dat]


# ==============================================================================
# PHẦN 5: *ARGS - FLEXIBLE ARGUMENTS
# ==============================================================================

# BÀI 5.1: Tính tổng với số lượng tham số tùy ý
# *numbers: Cú pháp *args - nhận nhiều tham số
# Python gom các tham số dư thành tuple

def tinh_tong_flexible(*numbers: Union[int, float]) -> float:
    """
    BÀI 5.1: Tính tổng số lượng tham số tùy ý.
    
    Args:
        *numbers: Tuple chứa các số truyền vào
    
    Returns:
        Tổng các số
    
    Ví dụ:
        tinh_tong_flexible(1, 2, 3) → numbers = (1, 2, 3)
        tinh_tong_flexible() → numbers = ()
    """
    # sum(): Hàm tính tổng tuple/list
    return sum(numbers)


# BÀI 5.2: Tính trung bình với *args và xử lý lỗi
# raise: Từ khóa ném exception (lỗi)
# ValueError: Exception cho giá trị không hợp lệ

def tinh_trung_binh_flexible(*numbers: Union[int, float]) -> float:
    """
    BÀI 5.2: Tính trung bình với số lượng tham số động.
    
    Args:
        *numbers: Tuple các số
    
    Returns:
        Trung bình cộng
    
    Raises:
        ValueError: Nếu không có số nào (tránh chia cho 0)
    """
    # not numbers: Kiểm tra tuple rỗng
    # not (): True (tuple rỗng là falsy)
    if not numbers:
        # raise: Ném lỗi để báo cho caller biết
        raise ValueError("Cần ít nhất một số")
    
    # sum(numbers): Tổng các số
    # len(numbers): Số lượng phần tử
    return sum(numbers) / len(numbers)


# BÀI 5.3: Tính nhiều thống kê cùng lúc
# Trả về dict chứa nhiều thông tin

def calculate_stats(*numbers: Union[int, float]) -> Dict[str, Union[int, float]]:
    """
    BÀI 5.3: Tính nhiều thống kê cùng lúc.
    
    Args:
        *numbers: Dãy số bất kỳ
    
    Returns:
        Dict với các key: 'sum', 'avg', 'min', 'max', 'count'
    """
    if not numbers:
        raise ValueError("Cần ít nhất một số")
    
    # Tạo dict với nhiều giá trị
    # sum(), min(), max(), len(): Các hàm built-in
    return {
        'sum': sum(numbers),           # Tổng
        'avg': sum(numbers) / len(numbers),  # Trung bình
        'min': min(numbers),           # Nhỏ nhất
        'max': max(numbers),           # Lớn nhất
        'count': len(numbers)          # Số lượng
    }


# ==============================================================================
# PHẦN 6: TYPE HINTS & DOCSTRINGS CHUẨN GOOGLE
# ==============================================================================

# BÀI 6: Xử lý dữ liệu user với docstring chuẩn
# Đây là ví dụ hàm production-ready

def process_user_data(users: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    BÀI 6: Xử lý dữ liệu người dùng.
    
    Args:
        users: List các dict, mỗi dict có:
            - 'name': str (tên)
            - 'age': int (tuổi)
    
    Returns:
        Dict chứa thống kê:
            - 'total_users': int (tổng số)
            - 'avg_age': float (tuổi TB)
            - 'adults_count': int (số người lớn)
            - 'oldest_user': str (tên người lớn tuổi nhất)
    
    Raises:
        ValueError: Nếu users rỗng
    """
    # Kiểm tra input
    if not users:
        raise ValueError("Danh sách người dùng không được rỗng")
    
    # List comprehension: Extract tuổi
    # [user['age'] for user in users]
    ages = [user['age'] for user in users]
    
    # Tính các thống kê cơ bản
    total_users = len(users)
    avg_age = sum(ages) / total_users
    
    # Generator expression: Đếm người >= 18 tuổi
    # sum(1 for age in ages if age >= 18)
    # Mỗi lần điều kiện đúng thì cộng 1
    adults_count = sum(1 for age in ages if age >= 18)
    
    # max(): Tìm user lớn tuổi nhất
    # key=lambda user: user['age']: So sánh theo tuổi
    # ['name']: Lấy tên từ dict kết quả
    oldest_user = max(users, key=lambda user: user['age'])['name']
    
    # Trả về dict kết quả
    return {
        'total_users': total_users,
        'avg_age': avg_age,
        'adults_count': adults_count,
        'oldest_user': oldest_user
    }


# ==============================================================================
# PHẦN 7: FILE HANDLING & JSON
# ==============================================================================

# BÀI 7.1: Lưu dữ liệu vào JSON
# Path: Class xử lý đường dẫn đa nền tảng
# mkdir(parents=True): Tạo thư mục cha nếu chưa có
# exist_ok=True: Không lỗi nếu thư mục đã tồn tại

def save_to_json(data: Any, filename: str) -> Path:
    """
    BÀI 7.1: Lưu dữ liệu vào file JSON.
    
    Args:
        data: Dữ liệu cần lưu (dict, list, v.v.)
        filename: Đường dẫn file
    
    Returns:
        Path object đến file đã lưu
    """
    # Path(): Chuyển string thành Path object
    path = Path(filename)
    
    # parent: Thư mục chứa file
    # mkdir(): Tạo thư mục
    path.parent.mkdir(parents=True, exist_ok=True)
    
    # with: Context manager - tự động đóng file sau khi dùng
    # open(): Mở file để ghi ('w' = write)
    # encoding='utf-8': Hỗ trợ tiếng Việt
    with open(path, 'w', encoding='utf-8') as f:
        # json.dump(): Ghi object ra file JSON
        # ensure_ascii=False: Không escape Unicode
        # indent=2: Format đẹp, thụt 2 spaces
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    return path


# BÀI 7.2: Đọc dữ liệu từ JSON

def load_from_json(filename: str) -> Any:
    """
    BÀI 7.2: Đọc dữ liệu từ file JSON.
    
    Args:
        filename: Đường dẫn file JSON
    
    Returns:
        Dữ liệu đã parse từ JSON
    
    Raises:
        FileNotFoundError: File không tồn tại
        json.JSONDecodeError: File không phải JSON hợp lệ
    """
    # 'r': Mode read (chỉ đọc)
    with open(filename, 'r', encoding='utf-8') as f:
        # json.load(): Đọc và parse JSON
        return json.load(f)


# BÀI 7.3: Đọc file CSV
# csv.DictReader: Đọc CSV thành dict, dùng hàng đầu làm key

def read_students_from_csv(csv_path: str) -> List[Dict[str, Any]]:
    """
    BÀI 7.3: Đọc file CSV chứa danh sách học sinh.
    
    Args:
        csv_path: Đường dẫn file CSV (header: name,score)
    
    Returns:
        List dict với 'name' và 'score' (int)
    
    Lưu ý:
        - DictReader dùng hàng đầu làm key
        - Score đọc từ CSV là string → cần int()
        - Mở CSV trên Windows cần newline=''
    """
    # newline='': Theo csv module docs, luôn dùng cho CSV trên Windows
    with open(csv_path, 'r', newline='', encoding='utf-8') as f:
        # DictReader(): Tạo reader đọc từng dòng thành dict
        reader = csv.DictReader(f)
        
        # List comprehension tạo dict mới cho mỗi dòng
        # int(row['score']): Chuyển string thành int
        return [
            {'name': row['name'], 'score': int(row['score'])}
            for row in reader
        ]


# ==============================================================================
# PHẦN 8: MODULE PATTERN
# ==============================================================================

# BÀI 8.1: Lọc và sắp xếp sinh viên đạt
# Kết hợp filter + sort

def filter_passed_students(students: List[Dict[str, Any]], passing_score: int = 50) -> List[Dict[str, Any]]:
    """
    BÀI 8.1: Lọc và sắp xếp sinh viên đạt.
    
    Args:
        students: List dict có 'name', 'score'
        passing_score: Ngưỡng điểm đạt (default 50)
    
    Returns:
        List sinh viên đạt, sắp xếp giảm dần theo score
    """
    # Bước 1: Filter - lọc sinh viên đạt
    passed = [s for s in students if s['score'] >= passing_score]
    
    # Bước 2: Sort - sắp xếp giảm dần
    return sorted(passed, key=lambda s: s['score'], reverse=True)


# ==============================================================================
# MAIN BLOCK - Chỉ chạy khi file được chạy trực tiếp
# ==============================================================================

# __name__: Biến đặc biệt của Python
# Khi chạy trực tiếp: __name__ == '__main__'
# Khi import: __name__ == 'practice_03'

if __name__ == "__main__":
    # Code trong block này chỉ chạy khi: python practice_03.py
    # Không chạy khi: from practice_03 import ...
    
    # In tiêu đề
    print("=" * 60)
    print("TESTING PRACTICE 03")
    print("=" * 60)
    
    # Test Bài 1.1
    print("\n--- Bài 1.1: Nhân đôi ---")
    print(f"nhan_doi(5) = {nhan_doi(5)}")  # Expected: 10
    print(f"nhan_doi(3.5) = {nhan_doi(3.5)}")  # Expected: 7.0
    
    # Test Bài 1.2
    print("\n--- Bài 1.2: Số chẵn ---")
    print(f"la_so_chan(4) = {la_so_chan(4)}")  # Expected: True
    print(f"la_so_chan(7) = {la_so_chan(7)}")  # Expected: False
    
    # Test Bài 2.1
    print("\n--- Bài 2.1: Diện tích HCN ---")
    print(f"dien_tich_hcn(5, 3) = {dien_tich_hcn(5, 3)}")  # Expected: 15
    
    # Test Bài 2.2
    print("\n--- Bài 2.2: Trung bình cộng ---")
    print(f"trung_binh_cong(10, 20, 30) = {trung_binh_cong(10, 20, 30)}")  # Expected: 20.0
    
    # Test Bài 3.1
    print("\n--- Bài 3.1: Số lớn hơn ---")
    print(f"so_lon_hon(5, 3) = {so_lon_hon(5, 3)}")  # Expected: 5
    print(f"so_lon_hon(2, 8) = {so_lon_hon(2, 8)}")  # Expected: 8
    
    # Test Bài 3.2
    print("\n--- Bài 3.2: Xếp loại điểm ---")
    print(f"xep_loai_diem(8.5) = {xep_loai_diem(8.5)}")  # Expected: Giỏi
    print(f"xep_loai_diem(4.5) = {xep_loai_diem(4.5)}")  # Expected: Yếu
    
    # Test Bài 4.1
    print("\n--- Bài 4.1: Sắp xếp theo điểm ---")
    students = [
        {'name': 'An', 'score': 75},
        {'name': 'Bình', 'score': 92},
        {'name': 'Cường', 'score': 85}
    ]
    sorted_students = sap_xep_theo_diem(students.copy())
    print(f"Sắp xếp: {[s['name'] for s in sorted_students]}")  # Expected: ['Bình', 'Cường', 'An']
    
    # Test Bài 4.2
    print("\n--- Bài 4.2: Lọc sinh viên đạt ---")
    passed = loc_sinh_vien_dat(students)
    print(f"Đạt: {[s['name'] for s in passed]}")
    
    # Test Bài 5.3
    print("\n--- Bài 5.3: Calculate Stats ---")
    stats = calculate_stats(10, 20, 30, 40, 50)
    print(f"Stats: {stats}")
    
    # Test Bài 6
    print("\n--- Bài 6: Process User Data ---")
    users = [
        {'name': 'Alice', 'age': 25},
        {'name': 'Bob', 'age': 17},
        {'name': 'Charlie', 'age': 30}
    ]
    result = process_user_data(users)
    print(f"Result: {result}")
    
    # Test Bài 7.1 (tạo file tạm)
    print("\n--- Bài 7.1: Save to JSON ---")
    test_data = {'course': 'Python', 'lesson': 3}
    saved_path = save_to_json(test_data, 'test_output.json')
    print(f"Đã lưu vào: {saved_path}")
    
    # Test Bài 7.2
    print("\n--- Bài 7.2: Load from JSON ---")
    loaded_data = load_from_json('test_output.json')
    print(f"Đã đọc: {loaded_data}")
    
    # Test Bài 8.1
    print("\n--- Bài 8.1: Filter Passed Students ---")
    passed_sorted = filter_passed_students(students, passing_score=80)
    print(f"Đạt >= 80: {[s['name'] for s in passed_sorted]}")
    
    print("\n" + "=" * 60)
    print("All tests completed!")
    print("=" * 60)
