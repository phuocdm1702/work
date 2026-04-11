# Lesson 05: OOP - Hướng Dẫn Từ Cơ Bản Đến Nâng Cao

**Ngày học:** 02/04/2026  
**Chủ đề:** Object-Oriented Programming, Java vs Python  
**Giai đoạn:** 02-oop

---

## 1. Mục tiêu buổi học

- Hiểu 4 tính chất OOP: Encapsulation, Inheritance, Polymorphism, Abstraction
- So sánh cách viết OOP giữa Java và Python
- Nắm vững cách khởi tạo đối tượng trong Python
- Sử dụng `@property` thay cho getter/setter
- Phân biệt `__init__`, `__str__`, `__repr__`

---

## 2. OOP Cơ Bản

### 2.1 Class & Object

```python
# Định nghĩa class
class Student:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
    
    def greet(self) -> str:
        return f"Hello, I'm {self.name}"

# Tạo object
s = Student("Alice", 20)
print(s.greet())  # "Hello, I'm Alice"
```

**So sánh Java:**
```java
// Java
public class Student {
    String name;
    int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String greet() {
        return "Hello, I'm " + name;
    }
}
```

### 2.2 4 Tính Chất OOP

| Tính chất | Giải thích | Python |
|-----------|------------|--------|
| **Encapsulation** | Đóng gói dữ liệu | `_field` + `@property` |
| **Inheritance** | Kế thừa | `class Child(Parent)` |
| **Polymorphism** | Đa hình | Duck typing |
| **Abstraction** | Trừu tượng | Abstract base classes |

---

## 2.3 Chi Tiết 4 Tính Chất OOP

---

### 🔒 1. Encapsulation (Đóng Gói) - "Giấu đồ quý, cho mượn chìa khóa"

**Hiểu đơn giản:**
Tưởng tượng bạn có két sắt đựng tiền. Bạn không để ai tự ý mở két lấy tiền, mà chỉ cho họ giao dịch qua quầy:
- Muốn gửi tiền → Đưa cho nhân viên (có kiểm đếm)
- Muốn rút tiền → Yêu cầu nhân viên (có kiểm tra số dư)
- Muốn xem số dư → Hỏi nhân viên (read-only)

Trong OOP, **data là tiền trong két**, **methods là nhân viên quầy**.

**Ví dụ thực tế - Tài khoản ngân hàng:**

```python
class BankAccount:
    def __init__(self, owner: str, initial_balance: float = 0):
        self._owner = owner              # Protected: ai cũng xem được
        self.__balance = initial_balance # Private: không ai truy cập trực tiếp
    
    # Getter - Chỉ cho xem, không cho sửa
    @property
    def balance(self) -> float:
        return self.__balance
    
    # Method có validation - Giống nhân viên kiểm tra trước giao dịch
    def deposit(self, amount: float) -> None:
        if amount <= 0:
            raise ValueError("Số tiền phải lớn hơn 0")
        if amount > 1000000:
            raise ValueError("Cần báo cáo giao dịch lớn")
        self.__balance += amount
    
    def withdraw(self, amount: float) -> bool:
        if amount > self.__balance:
            print(f"Không đủ tiền! Số dư: {self.__balance}")
            return False
        self.__balance -= amount
        return True

# Sử dụng
acc = BankAccount("Phước", 1000)

# ✓ Cách đúng - qua "nhân viên" (methods)
print(acc.balance)          # Xem số dư
acc.deposit(500)            # Gửi tiền (có kiểm tra)
acc.withdraw(200)           # Rút tiền (có kiểm tra số dư)

# ✗ Cách sai - truy cập trực tiếp
# acc.__balance = 999999    # Lỗi! Không thể truy cập
# acc.__balance = -1000     # Không thể gán giá trị âm
```

**Tại sao cần Encapsulation:**
1. **Bảo vệ data** - Không ai có thể gán `balance = -999` hay `balance = None`
2. **Validation tập trung** - Logic kiểm tra nằm ở một nơi, dễ maintain
3. **Flexible** - Có thể đổi cách lưu data (database thay vì biến) mà không ảnh hưởng code bên ngoài

**Quy ước trong Python:**
- `self.name` → Public: Ai cũng dùng được
- `self._name` → Protected: Không nên dùng từ ngoài class
- `self.__name` → Private: Python tự động đổi thành `_ClassName__name`

---

### 🔄 2. Inheritance (Kế Thừa) - "Cha truyền con nối"

**Hiểu đơn giản:**
Con cái thừa hưởng gen từ bố mẹ: mắt, mũi, màu da... nhưng cũng có thể:
- **Kế thừa nguyên xi**: Dùng y chang đặc điểm bố mẹ
- **Ghi đè (Override)**: Thay đổi một số đặc điểm (ví dụ: mắt xanh thay vì nâu)
- **Mở rộng**: Thêm đặc điểm mới (ví dụ: con học piano, bố không biết)

Trong OOP, **class con kế thừa từ class cha**.

**Ví dụ thực tế - Các loại nhân viên trong công ty:**

```python
class Employee:
    """Lớp cha - Nhân viên cơ bản"""
    def __init__(self, name: str, base_salary: float):
        self.name = name
        self._base_salary = base_salary
        self._work_hours = 0
    
    def work(self, hours: int) -> None:
        """Mọi nhân viên đều làm việc"""
        self._work_hours += hours
        print(f"{self.name} đã làm việc {hours} giờ")
    
    def calculate_salary(self) -> float:
        """Tính lương cơ bản - sẽ bị ghi đè"""
        return self._base_salary
    
    def get_info(self) -> str:
        return f"Nhân viên: {self.name}, Lương cơ bản: {self._base_salary}"

class Developer(Employee):
    """Lập trình viên - kế thừa từ Employee"""
    def __init__(self, name: str, base_salary: float, programming_languages: list):
        super().__init__(name, base_salary)  # Gọi constructor cha
        self.programming_languages = programming_languages
        self.bugs_fixed = 0
    
    # Kế thừa nguyên xi: work(), get_info()
    
    # Override: Tính lương khác (có thưởng bug)
    def calculate_salary(self) -> float:
        bonus = self.bugs_fixed * 50  # Thưởng mỗi bug
        return self._base_salary + bonus
    
    # Mở rộng: Thêm chức năng mới
    def fix_bug(self, bug_count: int) -> None:
        self.bugs_fixed += bug_count
        print(f"{self.name} đã fix {bug_count} bugs")
    
    def code_review(self) -> str:
        return f"{self.name} đang review code"

class Manager(Employee):
    """Quản lý - kế thừa từ Employee"""
    def __init__(self, name: str, base_salary: float, team_size: int):
        super().__init__(name, base_salary)
        self.team_size = team_size
    
    # Override: Tính lương quản lý (có thưởng team)
    def calculate_salary(self) -> float:
        bonus = self.team_size * 200  # Thưởng theo số người quản lý
        return self._base_salary + bonus
    
    # Mở rộng: Chức năng riêng của manager
    def conduct_meeting(self) -> str:
        return f"{self.name} đang họp với team {self.team_size} người"

# Sử dụng
dev = Developer("Phước", 1000, ["Python", "JavaScript"])
manager = Manager("Sếp", 2000, 5)

# Kế thừa: Cả 2 đều có work()
dev.work(8)      # "Phước đã làm việc 8 giờ" - từ Employee
manager.work(8)  # "Sếp đã làm việc 8 giờ" - từ Employee

# Override: Tính lương khác nhau
dev.fix_bug(3)
print(f"Lương dev: {dev.calculate_salary()}")      # 1000 + 150 = 1150
print(f"Lương manager: {manager.calculate_salary()}")  # 2000 + 1000 = 3000

# Mở rộng: Chức năng riêng
print(dev.code_review())      # Chỉ Developer có
print(manager.conduct_meeting())  # Chỉ Manager có
```

**Các loại kế thừa trong Python:**

```python
# 1. Single - Đơn kế thừa (phổ biến nhất)
class Dog(Animal):
    pass

# 2. Multiple - Đa kế thừa (cẩn thận khi dùng)
class FlyingDog(Dog, Bird):  # Vừa là chó, vừa bay được
    pass

# 3. Multilevel - Kế thừa nhiều cấp
class Animal: pass
class Mammal(Animal): pass
class Dog(Mammal): pass

# 4. Hierarchical - Nhiều con kế thừa một cha
class Animal: pass
class Dog(Animal): pass
class Cat(Animal): pass
class Bird(Animal): pass
```

---

### 🎭 3. Polymorphism (Đa Hình) - "Cùng hành động, khác kết quả"

**Hiểu đơn giản:**
Cùng là "nói" nhưng:
- Chó nói: "Woof!"
- Mèo nói: "Meow!"
- Vịt nói: "Quack!"

Trong OOP, **cùng tên method, nhưng mỗi class tự định nghĩa hành vi**.

**Ví dụ thực tế - Hệ thống thanh toán:**

```python
class PaymentMethod:
    """Base class cho mọi phương thức thanh toán"""
    def __init__(self, amount: float):
        self.amount = amount
    
    def pay(self) -> str:
        raise NotImplementedError("Subclass phải implement method này")
    
    def refund(self) -> str:
        return f"Hoàn tiền {self.amount}"

class CreditCard(PaymentMethod):
    def __init__(self, amount: float, card_number: str, cvv: str):
        super().__init__(amount)
        self.card_number = card_number[-4:]  # Chỉ lưu 4 số cuối
        self.cvv = cvv
    
    def pay(self) -> str:
        # Logic riêng của credit card
        return f"Thanh toán ${self.amount} bằng thẻ ****{self.card_number}"
    
    def refund(self) -> str:
        # Refund mất 3-5 ngày
        return f"Hoàn tiền ${self.amount} về thẻ ****{self.card_number} (3-5 ngày)"

class PayPal(PaymentMethod):
    def __init__(self, amount: float, email: str):
        super().__init__(amount)
        self.email = email
    
    def pay(self) -> str:
        # Logic riêng của PayPal
        return f"Thanh toán ${self.amount} qua PayPal ({self.email})"
    
    def refund(self) -> str:
        # Refund ngay lập tức
        return f"Hoàn tiền ${self.amount} về PayPal ({self.email}) - Ngay lập tức"

class Crypto(PaymentMethod):
    def __init__(self, amount: float, wallet_address: str):
        super().__init__(amount)
        self.wallet = wallet_address[:10] + "..."
    
    def pay(self) -> str:
        # Logic riêng của crypto
        return f"Thanh toán ${self.amount} bằng Crypto tới {self.wallet}"

# Sức mạnh của Polymorphism
def process_payment(payment: PaymentMethod) -> str:
    """
    Hàm này không cần biết là loại thanh toán gì!
    Chỉ cần đảm bảo payment có method pay()
    """
    result = payment.pay()
    return result

# Sử dụng - Cùng một hàm, xử lý mọi loại thanh toán
methods = [
    CreditCard(100, "123456789012", "123"),
    PayPal(50, "user@email.com"),
    Crypto(200, "0x1234567890abcdef")
]

for method in methods:
    print(process_payment(method))

# Output:
# Thanh toán $100 bằng thẻ ****9012
# Thanh toán $50 qua PayPal (user@email.com)
# Thanh toán $200 bằng Crypto tới 0x1234567...
```

**Polymorphism với Duck Typing (đặc trưng Python):**

```python
# Python không cần kế thừa cùng class vẫn polymorphic được
class Dog:
    def make_sound(self): return "Woof!"
    def move(self): return "Chạy 4 chân"

class Robot:
    def make_sound(self): return "Beep boop!"
    def move(self): return "Bánh xe lăn"

class Human:
    def make_sound(self): return "Hello!"
    def move(self): return "Đi bằng 2 chân"

# Cùng một hàm xử lý 3 loại object hoàn toàn khác nhau
def interact(entity):
    ""'Không cần biết entity là gì, chỉ cần có make_sound và move"''
    print(f"Âm thanh: {entity.make_sound()}")
    print(f"Di chuyển: {entity.move()}")
    print("---")

# Chạy cùng hàm với các object khác nhau
interact(Dog())
interact(Robot())
interact(Human())
```

---

### 🎯 4. Abstraction (Trừu Tượng) - "Vẽ bản thiết kế trước khi xây nhà"

**Hiểu đơn giản:**
Trước khi xây nhà, kiến trúc sư vẽ **bản thiết kế**:
- Nhà phải có: phòng ngủ, phòng khách, nhà vệ sinh
- Không nói rõ phòng ngủ như thế nào, ai xây thì tự quyết

Trong OOP, **Abstract Class là bản thiết kế**, **Concrete Class là ngôi nhà thực**.

**Ví dụ thực tế - Hệ thống Database:**

```python
from abc import ABC, abstractmethod
from typing import List, Dict

class Database(ABC):
    ""'
    Abstract Class - Bản thiết kế cho mọi database
    Chỉ định nghĩa WHAT (phải làm gì), không nói HOW (làm như nào)
    ''"
    def __init__(self, connection_string: str):
        self.connection_string = connection_string
        self._is_connected = False
        self._query_count = 0
    
    @abstractmethod
    def connect(self) -> bool:
        ""'Mọi database PHẢI implement cách kết nối'"''
        pass
    
    @abstractmethod
    def disconnect(self) -> None:
        ""'Mọi database PHẢI implement cách ngắt kết nối'"''
        pass
    
    @abstractmethod
    def execute(self, query: str) -> List[Dict]:
        ""'Mọi database PHẢI implement cách chạy query'"''
        pass
    
    @abstractmethod
    def backup(self, filename: str) -> bool:
        ""'Mọi database PHẢI có khả năng backup'"''
        pass
    
    # Concrete method - Không cần override
    def is_connected(self) -> bool:
        return self._is_connected
    
    def get_stats(self) -> Dict:
        return {
            "connection": self.connection_string,
            "connected": self._is_connected,
            "queries_executed": self._query_count
        }

class MySQLDatabase(Database):
    ""'MySQL - implement theo cách của MySQL'"''
    def connect(self) -> bool:
        print(f"🔌 Kết nối MySQL: {self.connection_string}")
        # Thư viện mysql-connector-python
        self._is_connected = True
        return True
    
    def disconnect(self) -> None:
        print("🔌 Ngắt kết nối MySQL")
        self._is_connected = False
    
    def execute(self, query: str) -> List[Dict]:
        print(f"📝 MySQL thực thi: {query}")
        self._query_count += 1
        return [{"id": 1, "name": "Test"}]
    
    def backup(self, filename: str) -> bool:
        print(f"💾 MySQL backup ra {filename}.sql")
        return True

class MongoDB(Database):
    ""'MongoDB - implement theo cách của MongoDB'"''
    def connect(self) -> bool:
        print(f"🔌 Kết nối MongoDB: {self.connection_string}")
        # Thư viện pymongo
        self._is_connected = True
        return True
    
    def disconnect(self) -> None:
        print("🔌 Ngắt kết nối MongoDB")
        self._is_connected = False
    
    def execute(self, query: str) -> List[Dict]:
        print(f"📝 MongoDB thực thi: {query}")
        self._query_count += 1
        return [{"_id": "abc123", "data": {}}]
    
    def backup(self, filename: str) -> bool:
        print(f"💾 MongoDB backup ra {filename}.archive")
        return True

# Sử dụng Abstraction
def migrate_data(source: Database, target: Database, table: str) -> bool:
    ""'
    Hàm generic - không cần biết loại database!
    Chỉ cần đảm bảo cả 2 đều là Database (có connect, execute, disconnect)
    ''"
    try:
        source.connect()
        target.connect()
        
        data = source.execute(f"SELECT * FROM {table}")
        print(f"📦 Lấy {len(data)} records từ {type(source).__name__}")
        
        # Insert vào target...
        print(f"📦 Insert vào {type(target).__name__}")
        
        source.disconnect()
        target.disconnect()
        return True
    except Exception as e:
        print(f"❌ Lỗi: {e}")
        return False

# Sử dụng - Dễ dàng switch database
mysql = MySQLDatabase("mysql://localhost:3306/mydb")
mongo = MongoDB("mongodb://localhost:27017/mydb")

# Migrate từ MySQL sang MongoDB
migrate_data(mysql, mongo, "users")

# Hoặc ngược lại
migrate_data(mongo, mysql, "products")
```

**⚠️ Quan trọng về Abstraction:**

```python
# ❌ Sai - Không thể tạo instance của abstract class
db = Database("connection")  # TypeError!

# ✓ Đúng - Phải dùng concrete class
mysql = MySQLDatabase("mysql://...")
```

---

## 2.4 Tóm Tắt 4 Tính Chất

| Tính chất | Đơn giản là | Khi nào dùng | Python Implementation |
|-----------|-------------|--------------|----------------------|
| **Encapsulation** | Giấu data, cho mượn chìa khóa | Luôn luôn | `_var`, `__var`, `@property` |
| **Inheritance** | Cha truyền con nối | IS-A relationship | `class Child(Parent)`, `super()` |
| **Polymorphism** | Cùng hành động, khác kết quả | Xử lý nhiều types | Duck typing, `@abstractmethod` |
| **Abstraction** | Bản thiết kế | Framework/Library | `ABC` module, `@abstractmethod` |

**Ví dụ tổng hợp - 4 tính chất trong 1 bài toán:**

```python
from abc import ABC, abstractmethod

# ABSTRACTION: Bản thiết kế cho mọi loại xe
class Vehicle(ABC):
    def __init__(self, brand: str, model: str):
        self.brand = brand      # Public
        self.model = model      # Public
        self.__mileage = 0      # ENCAPSULATION: Private
    
    @property
    def mileage(self) -> int:
        ""'Read-only từ ngoài'"''
        return self.__mileage
    
    @abstractmethod
    def start_engine(self) -> str:
        pass
    
    @abstractmethod
    def drive(self, distance: int) -> str:
        pass
    
    # ENCAPSULATION: Validation nội bộ
    def _update_mileage(self, distance: int):
        if distance < 0:
            raise ValueError("Khoảng cách không thể âm")
        self.__mileage += distance

# INHERITANCE: Kế thừa từ Vehicle
class Car(Vehicle):
    def __init__(self, brand: str, model: str, seats: int):
        super().__init__(brand, model)
        self.seats = seats
        self.__fuel = 100  # ENCAPSULATION
    
    # POLYMORPHISM: Implement theo cách của Car
    def start_engine(self) -> str:
        return f"🚗 {self.brand} {self.model}: Vroom vroom!"
    
    def drive(self, distance: int) -> str:
        if self.__fuel <= 0:
            return "Hết xăng!"
        self._update_mileage(distance)  # Dùng method cha
        self.__fuel -= distance * 0.1
        return f"🚗 Lái xe {distance}km"

class ElectricCar(Car):
    ""'Kế thừa từ Car, lại kế thừa từ Vehicle'"''
    def __init__(self, brand: str, model: str, seats: int, battery: int):
        super().__init__(brand, model, seats)
        self.battery = battery
    
    # POLYMORPHISM: Override theo cách điện
    def start_engine(self) -> str:
        return f"⚡ {self.brand} {self.model}: *Silent power*"
    
    def drive(self, distance: int) -> str:
        self._update_mileage(distance)
        self.battery -= distance * 0.2
        return f"⚡ Lái xe điện {distance}km (pin còn {self.battery}%)"

# Sử dụng cả 4 tính chất
my_car = Car("Toyota", "Camry", 5)
tesla = ElectricCar("Tesla", "Model 3", 5, 100)

# POLYMORPHISM: Cùng method, khác kết quả
vehicles = [my_car, tesla]
for v in vehicles:
    print(v.start_engine())
    print(v.drive(50))
    print(f"Odometer: {v.mileage}km")  # ENCAPSULATION: Chỉ xem, không sửa
    print("---")
```

---

## 3. So Sánh Java vs Python

### 3.1 Getter/Setter

**Java:**
```java
private String name;

public String getName() { return name; }
public void setName(String n) { name = n; }

// Sử dụng
s.getName();
s.setName("New");
```

**Python (Pythonic):**
```python
@property
def name(self): return self._name

@name.setter  
def name(self, v): self._name = v

# Sử dụng
s.name      # Getter
s.name = "New"  # Setter
```

### 3.2 Constructor & toString

**Java:**
```java
public Student(int id, String name) { ... }

@Override
public String toString() {
    return "Student(" + id + ")";
}
```

**Python:**
```python
def __init__(self, id: int, name: str): ...

def __str__(self): 
    return f"Student({self.id})"
```

### 3.3 Visibility

| Java | Python | Ý nghĩa |
|------|--------|---------|
| `public` | `name` | Public |
| `protected` | `_name` | Protected (convention) |
| `private` | `__name` | Name mangling |
| `final` | `@property` (no setter) | Read-only |

---

## 4. Khởi Tạo Đối Tượng Chi Tiết

### 4.1 Quy Trình Khởi Tạo

```
1. Gọi ClassName() 
   → Python tạo object rỗng
   
2. __new__(cls) 
   → Tạo instance (ít khi override)
   
3. __init__(self, ...) 
   → Khởi tạo thuộc tính
   
4. Object sẵn sàng sử dụng
```

### 4.2 Các Cách Khởi Tạo

```python
class Person:
    # 1. Basic __init__
    def __init__(self, name: str, age: int = 0):
        self.name = name
        self.age = age
    
    # 2. Factory method
    @classmethod
    def from_birth_year(cls, name: str, year: int):
        age = 2024 - year
        return cls(name, age)
    
    # 3. Validation trong __init__
    def __init__(self, name: str, age: int = 0):
        if not name:
            raise ValueError("Name required")
        self.name = name
        self.age = max(0, age)

# Sử dụng
p1 = Person("Alice", 25)           # Basic
p2 = Person.from_birth_year("Bob", 1999)  # Factory
```

### 4.3 Mutable Default Trap

```python
# ❌ SAI - Tất cả objects dùng chung 1 list!
class Student:
    def __init__(self, name: str, grades: list = []):
        self.grades = grades  # DANGER!

# ✅ ĐÚNG - Tạo list mới cho mỗi object
class Student:
    def __init__(self, name: str, grades: list = None):
        self.grades = grades or []
```

---

## 5. Giải Thích Code Chi Tiết

### 5.1 Full Class Example

```python
class Students:
    """
    Class đại diện cho sinh viên.
    Demo: Encapsulation, Property, Validation
    """
    
    # ========== CONSTRUCTOR ==========
    def __init__(self, id: int, name: str, age: int):
        """
        __init__ tự động gọi khi tạo object.
        self = this (Java reference đến object)
        """
        self._id = id       # _ = protected by convention
        self._name = name   # Không phải private thực sự
        self._age = age     # Python tin developer
    
    # ========== GETTERS (@property) ==========
    @property
    def id(self) -> int:
        """
        @property biến method → field ảo.
        Sử dụng: s.id (không cần s.id())
        """
        return self._id
    
    @property
    def name(self) -> str:
        return self._name
    
    @property  
    def age(self) -> int:
        return self._age
    
    # ========== SETTERS (@xxx.setter) ==========
    @name.setter
    def name(self, value: str) -> None:
        """
        @name.setter đi với @property name.
        Validation: kiểm tra trước khi gán.
        """
        if value and isinstance(value, str):
            self._name = value
        else:
            raise ValueError("Name phải là string không rỗng")
    
    @age.setter
    def age(self, value: int) -> None:
        if isinstance(value, int) and value >= 0:
            self._age = value
        else:
            raise ValueError("Age phải >= 0")
    
    # ========== STRING REPRESENTATION ==========
    def __str__(self) -> str:
        """
        __str__ = toString() trong Java.
        Được gọi khi: print(s), str(s), f"{s}"
        """
        return f"Students(id={self._id}, name='{self._name}', age={self._age})"
    
    def __repr__(self) -> str:
        """
        __repr__ cho debug.
        Nên trả về code có thể recreate object.
        """
        return f"Students({self._id}, '{self._name}', {self._age})"
```

### 5.2 Sử Dụng Chi Tiết

```python
# 1. Tạo object
s = Students(1, "Phước", 18)
#    └── __init__(self, 1, "Phước", 18) tự động gọi

# 2. Getter (property)
print(s.id)       # 1      ← Gọi @property id
print(s.name)     # Phước  ← Gọi @property name
print(s.age)      # 18     ← Gọi @property age

# 3. Setter
s.name = "Phước Đặng"    # Gọi @name.setter
s.age = 19               # Gọi @age.setter

# 4. Read-only (không có setter)
# s.id = 2    # ❌ AttributeError!

# 5. Validation
try:
    s.age = -5           # Gọi @age.setter
except ValueError as e:
    print(e)             # "Age phải >= 0"

# 6. String output
print(s)                 # Students(id=1, name='Phước Đặng', age=19)
print(repr(s))           # Students(1, 'Phước Đặng', 19)
```

### 5.3 Quy Trình Gọi Method

```
s = Students(1, "Phước", 18)
    │
    ├── 1. Python tạo object rỗng
    ├── 2. __new__ (ít khi override)
    ├── 3. __init__(self, 1, "Phước", 18)
    │       ├── self._id = 1
    │       ├── self._name = "Phước"
    │       └── self._age = 18
    └── 4. Object sẵn sàng

print(s.name)
    │
    └── @property def name(self) được gọi
        └── return self._name

s.name = "New"
    │
    └── @name.setter def name(self, value) được gọi
        └── self._name = value (sau validation)
```

---

## 6. Tổng Kết

### 6.1 Key Takeaways

| Khái niệm | Java | Python | Best Practice |
|-----------|------|--------|---------------|
| Constructor | `ClassName() {...}` | `def __init__(self):` | Dùng type hints |
| Getter | `getXxx()` | `@property` | Dùng property |
| Setter | `setXxx()` | `@xxx.setter` | Validate trong setter |
| toString | `toString()` | `__str__`, `__repr__` | Cả 2 đều cần |
| Private | `private` | `_xxx`, `__xxx` | Dùng `_` convention |
| self/this | `this` | `self` (parameter) | Luôn là tham số đầu |

### 6.2 Checklist Viết Class

```
[✓] Tên class: PascalCase
[✓] __init__ với type hints
[✓] Attributes: _prefix for "protected"
[✓] @property cho getters
[✓] @xxx.setter cho setters (nếu cần)
[✓] Validation trong setter
[✓] __str__ và __repr__
[✓] Docstrings
```

---

## Bài Tập

### Practice: Library Management
File: `practice_05.py`
- Hoàn thành class `Book`, `Library`
- Thêm encapsulation và validation

### Challenge: Bank System
File: `challenge_05.py`
- Kết hợp OOP + Error Handling
- Custom exceptions, logging

---

*Tài liệu tổng hợp cho Lesson 05 - OOP*
