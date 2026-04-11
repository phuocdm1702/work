"""
Lesson 05 Challenge: Bank Transaction System with OOP + Error Handling
File: 01-foundation/challenge_05.py

Kết hợp Lesson 04 (Error Handling) và Lesson 05 (OOP)
Yêu cầu: Hoàn thành tất cả TODO để xây dựng hệ thống ngân hàng hoàn chỉnh.
"""

from typing import Optional, List, Dict
from datetime import datetime
from decimal import Decimal, InvalidOperation
import logging
import json

# ============================================================================
# PHẦN 1: Custom Exceptions
# ============================================================================

class BankError(Exception):
    """Base exception cho ngân hàng."""
    def __init__(self, message: str, error_code: str = "BANK_ERROR"):
        self.message = message
        self.error_code = error_code
        super().__init__(f"[{error_code}] {message}")

class InsufficientFundsError(BankError):
    """
    TODO 1.1: Exception khi số dư không đủ để rút tiền.
    - Kế thừa từ BankError
    - error_code = "INSUFFICIENT_FUNDS"
    - Thêm attribute balance và requested_amount
    """
    pass

class InvalidAmountError(BankError):
    """
    TODO 1.2: Exception khi số tiền không hợp lệ (<= 0 hoặc sai type).
    - Kế thừa từ BankError
    - error_code = "INVALID_AMOUNT"
    - Thêm attribute invalid_amount
    """
    pass

class AccountNotFoundError(BankError):
    """
    TODO 1.3: Exception khi không tìm thấy tài khoản.
    - Kế thừa từ BankError
    - error_code = "ACCOUNT_NOT_FOUND"
    - Thêm attribute account_number
    """
    pass


# ============================================================================
# PHẦN 2: Transaction Logger (Observer Pattern)
# ============================================================================

class TransactionLogger:
    """
    Ghi log giao dịch vào file và console.
    
    TODO 2.1: Khởi tạo __init__:
        - log_file: str (tên file log, default "bank_transactions.log")
        - _transactions: List[Dict] (lưu tất cả transactions trong memory)
        - Cấu hình logging với format chi tiết
    
    TODO 2.2: Viết method _setup_logging():
        - Cấu hình logging với:
            + filename: log_file
            + level: logging.INFO
            + format: '%(asctime)s - %(levelname)s - %(message)s'
    
    TODO 2.3: Viết method log_transaction(account_number: str, 
                                           transaction_type: str,
                                           amount: Decimal,
                                           balance_after: Decimal,
                                           status: str = "SUCCESS"):
        - Tạo dict chứa thông tin transaction:
            + timestamp: str (ISO format)
            + account: account_number
            + type: transaction_type (DEPOSIT/WITHDRAW/TRANSFER)
            + amount: str (amount chuyển thành string)
            + balance_after: str
            + status: SUCCESS hoặc FAILED
        - Append vào _transactions
        - Ghi log với logging.info() hoặc logging.error()
    
    TODO 2.4: Viết method get_transaction_history(account_number: str) -> List[Dict]:
        - Lọc và return các transaction của account cụ thể
    
    TODO 2.5: Viết method export_to_json(filename: str):
        - Export _transactions ra file JSON
    """
    
    pass


# ============================================================================
# PHẦN 3: BankAccount Class (Encapsulation + Validation)
# ============================================================================

class BankAccount:
    """
    Tài khoản ngân hàng với validation và error handling.
    
    TODO 3.1: Khởi tạo __init__:
        - account_number: str (public, unique ID)
        - owner_name: str (public)
        - __balance: Decimal (private, default Decimal('0.00'))
        - __is_active: bool (private, default True)
        - _transaction_count: int (protected, default 0)
        - _logger: TransactionLogger (injected hoặc tạo mới)
        
        Validation:
        - Nếu owner_name rỗng: raise ValueError
        - Nếu account_number rỗng: raise ValueError
    
    TODO 3.2: Viết property balance (getter only):
        - Return __balance
    
    TODO 3.3: Viết property is_active (getter only):
        - Return __is_active
    
    TODO 3.4: Viết method deposit(amount: Decimal) -> bool:
        Validation:
        - Thử chuyển amount thành Decimal
        - Nếu fail: raise InvalidAmountError
        - Nếu amount <= 0: raise InvalidAmountError
        - Nếu __is_active là False: raise BankError("Account is inactive")
        
        Nếu hợp lệ:
        - __balance += amount
        - _transaction_count += 1
        - Gọi _logger.log_transaction()
        - Return True
        
        Exception Handling:
        - Bắt InvalidOperation từ Decimal (sai format)
        - Bắt InvalidAmountError và re-raise
        - Bắt Exception khác, log lỗi, return False
    
    TODO 3.5: Viết method withdraw(amount: Decimal) -> bool:
        Validation tương tự deposit, thêm:
        - Nếu amount > __balance: raise InsufficientFundsError
        
        Logic:
        - __balance -= amount
        - Ghi log transaction
        - Return True
        
        Exception Handling:
        - Bắt InsufficientFundsError, log warning, re-raise
        - Bắt các lỗi khác tương tự deposit
    
    TODO 3.6: Viết method transfer(amount: Decimal, target_account: 'BankAccount') -> bool:
        - Withdraw từ account này
        - Deposit vào target_account
        - Nếu withdraw thành công nhưng deposit fail:
            + Đây là serious issue - cần log critical error
            + Thử hoàn tiền (self.deposit lại)
            + Nếu hoàn tiền fail: log CRITICAL "DATA INCONSISTENCY"
        - Return True nếu cả 2 thành công
    
    TODO 3.7: Viết method close_account():
        - Chỉ cho phép đóng nếu __balance == 0
        - Nếu có tiền: raise BankError("Cannot close account with remaining balance")
        - Đặt __is_active = False
        - Log: "Account {account_number} closed"
    
    TODO 3.8: Viết __str__():
        - Return: "Account({account_number}, {owner_name}, Balance: {balance}, Active: {is_active})"
    
    TODO 3.9: Viết __repr__():
        - Return: "BankAccount(account_number='{account_number}', owner_name='{owner_name}', balance={balance})"
    
    TODO 3.10: Viết __eq__() để so sánh 2 account:
        - So sánh dựa trên account_number
    
    TODO 3.11: Viết __len__():
        - Return _transaction_count (số giao dịch đã thực hiện)
    """
    
    pass


# ============================================================================
# PHẦN 4: Bank Class (Aggregation + Management)
# ============================================================================

class Bank:
    """
    Quản lý nhiều tài khoản ngân hàng.
    
    TODO 4.1: Khởi tạo __init__:
        - name: str (tên ngân hàng)
        - _accounts: Dict[str, BankAccount] (key=account_number)
        - _logger: TransactionLogger (shared cho tất cả accounts)
    
    TODO 4.2: Viết method create_account(account_number: str, owner_name: str, 
                                        initial_balance: Decimal = Decimal('0.00')) -> BankAccount:
        - Kiểm tra account_number đã tồn tại chưa:
            + Nếu có: raise AccountNotFoundError (hoặc tạo error khác)
        - Tạo BankAccount mới
        - Thêm vào _accounts
        - Log: "Created account {account_number} for {owner_name}"
        - Return account
    
    TODO 4.3: Viết method get_account(account_number: str) -> Optional[BankAccount]:
        - Tìm trong _accounts
        - Nếu không tìm thấy: raise AccountNotFoundError
        - Return account
    
    TODO 4.4: Viết method close_account(account_number: str):
        - Lấy account bằng get_account
        - Gọi account.close_account()
        - Xóa khỏi _accounts
    
    TODO 4.5: Viết method get_total_deposits() -> Decimal:
        - Tính tổng balance của tất cả accounts
    
    TODO 4.6: Viết method get_account_summary() -> Dict:
        - Return dict với thông tin:
            + total_accounts: int
            + total_deposits: Decimal
            + active_accounts: int
            + inactive_accounts: int
    """
    
    pass


# ============================================================================
# PHẦN 5: Test và Demonstration
# ============================================================================

def main():
    """
    TODO 5: Hoàn thành hàm main() với các test case:
    
    1. Khởi tạo Bank và TransactionLogger
    
    2. Test tạo account:
       - Tạo 2-3 accounts với số dư khác nhau
       - Test tạo account trùng số (phải raise error)
    
    3. Test deposit:
       - Deposit hợp lệ
       - Deposit âm (phải raise InvalidAmountError)
       - Deposit sai kiểu dữ liệu (string "abc")
    
    4. Test withdraw:
       - Withdraw hợp lệ
       - Withdraw quá số dư (InsufficientFundsError)
       - Bắt lỗi và hiển thị thông báo thân thiện
    
    5. Test transfer:
       - Transfer thành công giữa 2 accounts
       - Transfer với insufficient funds
    
    6. Test logging:
       - In ra transaction history của một account
       - Export ra JSON file
    
    7. Test account closure:
       - Thử đóng account còn tiền (phải fail)
       - Rút hết tiền rồi đóng (phải success)
    
    8. Print bank summary
    
    Yêu cầu xử lý lỗi:
    - Dùng try/except/else/finally cho mỗi operation
    - Không để chương trình crash
    - Hiển thị message thân thiện cho user
    - Log đầy đủ thông tin (cả success và failure)
    
    Ví dụ cấu trúc:
    ```python
    print("=" * 60)
    print("BANK TRANSACTION SYSTEM")
    print("=" * 60)
    
    bank = Bank("Python Bank")
    logger = TransactionLogger()
    
    # Test 1: Create accounts
    try:
        acc1 = bank.create_account("ACC001", "Alice", Decimal("1000.00"))
        print(f"✓ Created: {acc1}")
    except BankError as e:
        print(f"✗ Error: {e}")
    except Exception as e:
        print(f"✗ Unexpected: {e}")
    finally:
        print("-" * 40)
    
    # Test 2: Deposit
    try:
        acc1.deposit(Decimal("500.50"))
        print(f"✓ Deposit successful. New balance: {acc1.balance}")
    except InvalidAmountError as e:
        print(f"✗ Invalid amount: {e}")
    except Exception as e:
        print(f"✗ Error: {e}")
    
    # ... more tests
    ```
    """
    
    print("Challenge 05 - Bank Transaction System")
    print("Complete all TODOs and run to test.")
    pass


if __name__ == "__main__":
    main()
