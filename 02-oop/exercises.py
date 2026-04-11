"""
BÀI TẬP LUYỆN TẬP: CLASS & OBJECT, ENCAPSULATION
================================================
Hướng dẫn: Hoàn thành từng bài tập theo thứ tự từ dễ đến khó.
Mỗi bài tập có đề bài và gợi ý, không có đáp án sẵn để bạn tự làm.
"""

# =============================================================================
# BÀI 1: Class Rectangle (Hình chữ nhật) - CƠ BẢN
# =============================================================================
"""
YÊU CẦU:
1. Tạo class Rectangle với private attributes: _width, _height
2. Tạo constructor nhận width và height
3. Tạo getter cho width và height
4. Tạo setter cho width và height (validate > 0)
5. Tạo methods:
   - area(): tính diện tích hình chữ nhật     
   - perimeter(): tính chu vi
   - is_square(): kiểm tra có phải hình vuông không
6. Override __str__ để hiển thị: Rectangle(width=..., height=...)

GỢI Ý:
- Dùng @property cho getter
- Dùng @width.setter để validate
- area = width * height
- perimeter = 2 * (width + height)
"""

# Viết code bài 1 ở đây:




# Test bài 1:
# r = Rectangle(5, 10)
# print(r)              # Rectangle(width=5, height=10)
# print(r.area())       # 50
# print(r.perimeter())  # 30
# print(r.is_square())  # False
# r.width = 10
# print(r.is_square())  # True


# =============================================================================
# BÀI 2: Class BankAccount - ENCAPSULATION NÂNG CAO
# =============================================================================
"""
YÊU CẦU:
1. Tạo class BankAccount với private attributes:
   - _account_number (str)
   - _account_holder (str)
   - _balance (float, mặc định 0)
   - _transaction_history (list, lưu các giao dịch)

2. Chỉ có getter cho account_number và account_holder (không có setter)
3. balance có getter, KHÔNG có setter trực tiếp
4. Tạo methods:
   - deposit(amount): nạp tiền (amount > 0)
   - withdraw(amount): rút tiền (amount > 0 và amount <= balance)
   - get_balance(): trả về balance
   - get_transaction_history(): trả về list các giao dịch
   
5. Mỗi giao dịch là dict: {"type": "deposit/withdraw", "amount": ..., "timestamp": ...}
6. Override __str__ hiển thị thông tin account

QUY TẮC:
- Không thể đổi account_number và account_holder sau khi tạo
- Chỉ có thể thay đổi balance qua deposit() và withdraw()
- Phải validate tất cả input
"""

# Viết code bài 2 ở đây:




# Test bài 2:
# account = BankAccount("123456789", "Nguyễn Văn A")
# account.deposit(1000000)
# account.deposit(500000)
# account.withdraw(200000)
# print(account.get_balance())  # 1300000
# print(account.get_transaction_history())  # List 3 giao dịch
# account.account_number = "999"  # Lỗi! Không thể set


# =============================================================================
# BÀI 3: Class Student và Class Course - QUAN HỆ GIỮA CÁC CLASS
# =============================================================================
"""
YÊU CẦU:
1. Tạo class Student:
   - _student_id (private, chỉ getter)
   - _name (private, getter + setter)
   - _grades (private, dict: {subject: score})
   - methods: add_grade(subject, score), get_average_score(), __str__

2. Tạo class Course:
   - _course_code (private, chỉ getter)
   - _course_name (private, getter + setter)
   - _students (private, list chứa Student objects)
   - methods: 
     * add_student(student): thêm Student vào course
     * remove_student(student_id): xóa Student theo ID
     * get_student_by_id(student_id): tìm Student
     * get_class_average(): điểm trung bình của cả lớp
     * get_top_student(): trả về Student có điểm cao nhất
   - __str__ hiển thị thông tin course và số lượng học sinh

GỢI Ý:
- Trong Course, dùng list chứa Student objects
- get_class_average(): tính average của tất cả students
"""

# Viết code bài 3 ở đây:




# Test bài 3:
# s1 = Student("S001", "Phước")
# s1.add_grade("Python", 9.5)
# s1.add_grade("OOP", 8.5)
# 
# s2 = Student("S002", "Nam")
# s2.add_grade("Python", 8.0)
# s2.add_grade("OOP", 9.0)
# 
# course = Course("PY101", "Python cơ bản")
# course.add_student(s1)
# course.add_student(s2)
# 
# print(course.get_class_average())  # Trung bình của cả lớp
# print(course.get_top_student())    # Student có điểm cao nhất


# =============================================================================
# BÀI 4: Class Product và Class ShoppingCart - KẾT HỢP NHIỀU CLASS
# =============================================================================
"""
YÊU CẦU:
1. Tạo class Product:
   - _product_id (private, chỉ getter)
   - _name (private, getter + setter)
   - _price (private, getter + setter, validate > 0)
   - _stock (private, getter + setter, validate >= 0)
   - __str__ hiển thị thông tin sản phẩm

2. Tạo class ShoppingCart:
   - _cart_id (private, chỉ getter)
   - _items (private, dict: {product_id: {"product": Product, "quantity": int}})
   - methods:
     * add_product(product, quantity): thêm sản phẩm
       - Kiểm tra stock đủ không
       - Nếu đã có trong giỏ, tăng quantity
     * remove_product(product_id): xóa sản phẩm khỏi giỏ
     * update_quantity(product_id, new_quantity): cập nhật số lượng
     * get_total(): tính tổng tiền
     * checkout(): giảm stock của tất cả products và xóa giỏ
     * __str__ hiển thị giỏ hàng

QUY TẮC:
- Không thể thêm quá số lượng stock
- Checkout xong phải clear giỏ hàng
"""

# Viết code bài 4 ở đây:




# Test bài 4:
# p1 = Product("P001", "Laptop", 15000000, 10)
# p2 = Product("P002", "Chuột", 300000, 50)
# 
# cart = ShoppingCart("CART001")
# cart.add_product(p1, 2)   # Thêm 2 laptop
# cart.add_product(p2, 5)   # Thêm 5 chuột
# cart.add_product(p1, 1)   # Thêm 1 laptop nữa (tổng 3)
# 
# print(cart.get_total())   # Tính tổng tiền
# print(cart)               # Hiển thị giỏ hàng
# cart.checkout()           # Thanh toán, giảm stock, clear giỏ


# =============================================================================
# BÀI 5: Class Employee và Class Company - INHERITANCE CHUẨN BỊ
# =============================================================================
"""
YÊU CẦU:
1. Tạo class Employee:
   - _employee_id (private, chỉ getter)
   - _name (private, getter + setter)
   - _base_salary (private, getter + setter, validate >= 0)
   - _department (private, getter + setter)
   - methods:
     * calculate_salary(): trả về base_salary (sẽ override ở subclass)
     * __str__ hiển thị thông tin

2. Tạo class Developer kế thừa Employee:
   - _programming_languages (list)
   - _bonus_per_language (float, mặc định 500000)
   - Override calculate_salary(): base_salary + (số ngôn ngữ * bonus)

3. Tạo class Manager kế thừa Employee:
   - _team_size (int)
   - _bonus_per_member (float, mặc định 1000000)
   - Override calculate_salary(): base_salary + (team_size * bonus_per_member)

4. Tạo class Company:
   - _name (private)
   - _employees (list)
   - methods: add_employee(), remove_employee(), get_total_salary(), find_employee_by_id()
"""

# Viết code bài 5 ở đây:




# Test bài 5:
# dev = Developer("E001", "Phước", 15000000, "IT", ["Python", "Java", "Go"])
# mgr = Manager("E002", "Nam", 20000000, "IT", 5)
# 
# print(dev.calculate_salary())   # 15000000 + 3*500000 = 16500000
# print(mgr.calculate_salary())   # 20000000 + 5*1000000 = 25000000
# 
# company = Company("Tech Corp")
# company.add_employee(dev)
# company.add_employee(mgr)
# print(company.get_total_salary())  # Tổng lương công ty


# =============================================================================
# BÀI 6: Class Library Management System - TỔNG HỢP
# =============================================================================
"""
YÊU CẦU:
Xây dựng hệ thống quản lý thư viện với các class:

1. Class Book:
   - _isbn (private, chỉ getter - mã sách duy nhất)
   - _title (private, getter + setter)
   - _author (private, getter + setter)
   - _available_copies (private, getter + setter, >= 0)
   - _total_copies (private, getter, >= available_copies)
   - __str__ hiển thị thông tin sách

2. Class Member:
   - _member_id (private, chỉ getter)
   - _name (private, getter + setter)
   - _borrowed_books (private, list chứa ISBN đang mượn)
   - _max_books (private, getter, mặc định 5)
   - methods:
     * can_borrow(): kiểm tra có thể mượn thêm không
     * borrow_book(isbn): thêm ISBN vào borrowed_books
     * return_book(isbn): xóa ISBN khỏi borrowed_books
     * get_borrowed_count(): số sách đang mượn

3. Class Library:
   - _books (private, dict: {isbn: Book})
   - _members (private, dict: {member_id: Member})
   - _borrow_records (private, dict: {isbn: member_id})
   - methods:
     * add_book(book): thêm sách vào thư viện
     * register_member(member): đăng ký thành viên
     * borrow_book(isbn, member_id): cho mượn sách
       - Kiểm tra sách tồn tại, còn bản
       - Kiểm tra member tồn tại, có thể mượn
       - Cập nhật available_copies, borrowed_books, borrow_records
     * return_book(isbn, member_id): trả sách
     * search_book(title): tìm sách theo title (trả về list)
     * get_available_books(): trả về list sách còn bản
     * __str__ hiển thị tổng quan thư viện

QUY TẮC:
- Một sách chỉ cho một người mượn (dùng borrow_records)
- Không thể mượn khi hết sách hoặc member đã mượn tối đa
- Trả sách phải đúng người đã mượn
"""

# Viết code bài 6 ở đây:




# Test bài 6:
# lib = Library()
# 
# book1 = Book("978-3-16-148410-0", "Python OOP", "Guido", 5)
# book2 = Book("978-1-40-289462-6", "Clean Code", "Robert", 3)
# 
# member1 = Member("M001", "Phước")
# member2 = Member("M002", "Nam")
# 
# lib.add_book(book1)
# lib.add_book(book2)
# lib.register_member(member1)
# lib.register_member(member2)
# 
# lib.borrow_book("978-3-16-148410-0", "M001")  # Phước mượn Python OOP
# lib.borrow_book("978-3-16-148410-0", "M002")  # Nam mượn Python OOP (còn 4 bản)
# print(lib.get_available_books())  # List sách còn bản
# lib.return_book("978-3-16-148410-0", "M001")  # Phước trả sách
# print(lib)  # Hiển thị tổng quan


# =============================================================================
# BÀI 7: Viết Unit Test cho các Class - NÂNG CAO
# =============================================================================
"""
YÊU CẦU:
Viết test cases cho Bài 1 (Rectangle) sử dụng unittest:

Test cases cần có:
1. test_init - Kiểm tra khởi tạo đúng giá trị
2. test_area - Kiểm tra tính diện tích
3. test_perimeter - Kiểm tra tính chu vi
4. test_is_square_true - Kiểm tra hình vuông (5,5)
5. test_is_square_false - Kiểm tra không phải hình vuông (5,10)
6. test_setter_validation - Kiểm tra setter từ chối giá trị âm
7. test_encapsulation - Kiểm tra không truy cập được _width trực tiếp

Sau đó viết tương tự cho Bài 2 (BankAccount).
"""
import unittest

# Viết test ở đây:




# Chạy test:
# if __name__ == "__main__":
#     unittest.main()
