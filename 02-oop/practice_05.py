"""
Lesson 05 Practice: Object-Oriented Programming
File: 01-foundation/practice_05.py

Yêu cầu: Hoàn thành tất cả các phần TODO bên dưới.
Mỗi TODO có hướng dẫn chi tiết - đọc kỹ trước khi code.
"""

from typing import Optional, List
import logging
from datetime import datetime

# Cấu hình logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='library.log',
    filemode='w'
)


# ============================================================================
# PHẦN 1: Class Book (Encapsulation)
# ============================================================================

class Book:
    """
    Đại diện cho một cuốn sách trong thư viện.
    
    TODO 1.1: Khởi tạo __init__ với các parameters:
        - title: str (public)
        - author: str (public)
        - isbn: str (public)
        - _available: bool (protected, default True)
        - __borrow_count: int (private, default 0)
    def __init__ (self, title, author, isbn):
    self._title = title;
    self._author = author;
    self._isbn = isbn;

    @property
    def title(self):
        return self.__title;
    TODO 1.2: Viết method borrow():
        - Nếu _available là True: 
            + Đặt _available = False
            + Tăng __borrow_count lên 1
            + Log: "Book '{title}' borrowed"
            + Return True
        - Nếu _available là False:
            + Log: warning "Book '{title}' is not available"
            + Return False
    
    TODO 1.3: Viết method return_book():
        - Đặt _available = True
        - Log: "Book '{title}' returned"
        - Return True
    
    TODO 1.4: Viết property getter borrow_count:
        - Return __borrow_count (read-only from outside)
    
    TODO 1.5: Viết __str__():
        - Return: "'{title}' by {author} (ISBN: {isbn}) - {'Available' if _available else 'Borrowed'}"
    
    TODO 1.6: Viết __repr__():
        - Return: "Book(title='{title}', author='{author}', isbn='{isbn}')"
    """
    
    # TODO: Hoàn thành class Book ở đây
    pass


# ============================================================================
# PHẦN 2: Class Library (Aggregation)
# ============================================================================

class Library:
    """
    Quản lý danh sách các Book.
    
    TODO 2.1: Khởi tạo __init__:
        - name: str (public, tên thư viện)
        - _books: List[Book] (protected, empty list)
        - _borrowed_books: dict (protected, key=isbn, value=borrower_name)
    
    TODO 2.2: Viết method add_book(book: Book) -> None:
        - Thêm book vào _books list
        - Log: "Added book: {book.title}"
    
    TODO 2.3: Viết method find_book(isbn: str) -> Optional[Book]:
        - Tìm trong _books có isbn khớp
        - Return book nếu tìm thấy, None nếu không
    
    TODO 2.4: Viết method borrow_book(isbn: str, borrower: str) -> bool:
        - Gọi find_book(isbn) để lấy book
        - Nếu không tìm thấy:
            + Log: error "Book with ISBN {isbn} not found"
            + Return False
        - Nếu tìm thấy, gọi book.borrow():
            + Nếu thành công: thêm vào _borrowed_books[isbn] = borrower
            + Return kết quả từ book.borrow()
    
    TODO 2.5: Viết method return_book(isbn: str) -> bool:
        - Tương tự borrow_book nhưng cho việc trả sách
        - Xóa khỏi _borrowed_books nếu thành công
    
    TODO 2.6: Viết method list_available_books() -> List[Book]:
        - Return list các book có _available = True
    
    TODO 2.7: Viết method get_borrower(isbn: str) -> Optional[str]:
        - Return tên người mượn từ _borrowed_books, None nếu không có
    
    TODO 2.8: Viết __len__():
        - Return số lượng sách trong thư viện (len(_books))
    """
    
    # TODO: Hoàn thành class Library ở đây
    pass


# ============================================================================
# PHẦN 3: Class DigitalLibrary (Inheritance)
# ============================================================================

class DigitalLibrary(Library):
    """
    Thư viện số - kế thừa từ Library, thêm tính năng download.
    
    TODO 3.1: Override __init__:
        - Gọi super().__init__(name) để khởi tạo parent
        - Thêm _download_limit: int (số lượt download tối đa mỗi sách)
        - Thêm _download_count: dict (key=isbn, value=số lần đã download)
    
    TODO 3.2: Viết method download_book(isbn: str, user: str) -> bool:
        - Tìm book bằng find_book(isbn) (dùng self.find_book hoặc super())
        - Nếu không tìm thấy:
            + Log: error "Digital book {isbn} not found"
            + Return False
        - Kiểm tra download count:
            + Nếu >= _download_limit:
                * Log: warning "Download limit reached for {book.title}"
                * Return False
            + Nếu < _download_limit:
                * Tăng count trong _download_count
                * Log: info "{user} downloaded {book.title}"
                * Return True
    
    TODO 3.3: Viết method get_download_count(isbn: str) -> int:
        - Return số lần download, 0 nếu chưa có
    
    TODO 3.4: Override borrow_book(isbn, borrower):
        - Với DigitalLibrary, không cho mượn vật lý
        - Log: warning "Digital books cannot be borrowed physically. Use download instead."
        - Return False
    """
    
    # TODO: Hoàn thành class DigitalLibrary ở đây
    pass


# ============================================================================
# PHẦN 4: Custom Exceptions + Error Handling (Kết hợp Lesson 04)
# ============================================================================

class LibraryError(Exception):
    """Base exception cho thư viện."""
    pass

class BookNotFoundError(LibraryError):
    """TODO: Exception khi không tìm thấy sách."""
    pass

class BookNotAvailableError(LibraryError):
    """TODO: Exception khi sách đã được mượn."""
    pass


# ============================================================================
# PHẦN 5: Hàm main() để test
# ============================================================================

def main():
    """
    TODO 5.1: Hoàn thành hàm main() để test tất cả chức năng:
    
    1. Tạo 3-4 Book objects
    2. Tạo Library và thêm books vào
    3. Test borrow_book, return_book
    4. Tạo DigitalLibrary, thêm book, test download_book
    5. Dùng try/except để bắt lỗi khi:
       - Mượn sách không tồn tại
       - Mượn sách đã hết (đã được mượn)
       - Download quá giới hạn
    6. Print danh sách sách còn available
    7. Print thông tin người đang mượn sách
    
    Gợi ý cấu trúc main():
    ```
    print("=" * 50)
    print("TEST LIBRARY SYSTEM")
    print("=" * 50)
    
    # Tạo books
    book1 = Book(...)
    book2 = Book(...)
    ...
    
    # Tạo library
    lib = Library("My Library")
    lib.add_book(book1)
    ...
    
    # Test borrow
    try:
        success = lib.borrow_book("ISBN1", "Alice")
        ...
    except Exception as e:
        logging.error(f"Error: {e}")
    
    # Test digital library
    digital = DigitalLibrary("E-Library", download_limit=3)
    ...
    
    # Print summary
    print(f"\nTotal books in library: {len(lib)}")
    print(f"Available books: {len(lib.list_available_books())}")
    ```
    """
    
    # TODO: Hoàn thành hàm main() ở đây
    print("Lesson 05 Practice - Library Management System")
    print("Complete all TODOs above and run this file to test.")
    pass


if __name__ == "__main__":
    main()
