const initialDocs = {
    "01-foundation": {
        "title": "Giai đoạn 1: Python Nền Tảng",
        "sessions": [
            {
                "id": "s01-setup",
                "title": "Buổi 1: Setup & Cú pháp cơ bản",
                "content": {
                    "intro": "Bắt đầu hành trình chinh phục Python bằng cách xây dựng nền tảng vững chắc. Chúng ta sẽ không chỉ học cú pháp mà còn hiểu sâu về cách Python vận hành bên dưới.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Kiến thức Python: TẤT CẢ các kiểu dữ liệu cơ bản",
                            "text": "Trong Python, mọi dữ liệu đều thuộc một 'class' cụ thể. Việc hiểu rõ từng kiểu dữ liệu giúp bạn chọn đúng công cụ để tối ưu bộ nhớ và hiệu năng.\n\n- **Numeric Types (Kiểu số):**\n    *   `int`: Số nguyên có độ dài tùy ý (không lo tràn số như `long` của Java).\n    *   `float`: Số thực (tương đương `double` Java). Chú ý lỗi làm tròn số thập phân.\n    *   `complex`: Số phức (vd: `3 + 5j`), dùng trong toán học chuyên sâu.\n- **Sequence Types (Kiểu tuần tự):**\n    *   `str`: Chuỗi ký tự (Immutable). Hỗ trợ unicode cực mạnh.\n    *   `list`: Mảng động (Mutable). Đa năng nhất, chứa được nhiều kiểu dữ liệu trộn lẫn.\n    *   `tuple`: Danh sách bất biến (Immutable). Dùng làm key cho Dict được.\n    *   `range`: Tạo dãy số (thường dùng trong vòng lặp `for`).\n- **Mapping & Set Types:**\n    *   `dict`: Tập hợp Key-Value (Mutable). Tra cứu O(1).\n    *   `set`: Tập hợp phần tử duy nhất, không thứ tự (Mutable). Loại bỏ trùng lặp cực nhanh.\n    *   `frozenset`: Bản sao bất biến của `set`.\n- **Binary Types (Dữ liệu nhị phân):**\n    *   `bytes`: Chuỗi byte bất biến (vd: `b\"Hello\"`).\n    *   `bytearray`: Mảng byte có thể thay đổi.\n    *   `memoryview`: Cho phép truy cập bộ nhớ của đối tượng nhị phân mà không cần sao chép.\n- **Other Core Types:**\n    *   `bool`: Chỉ có 2 giá trị `True` và `False`.\n    *   `NoneType`: Giá trị `None` (đại diện cho sự vắng mặt của giá trị)."
                        },
                        {
                            "type": "concept",
                            "title": "2. Cách dùng thực tế & Lưu ý (Deep Dive)",
                            "text": "- **Mutable (Có thể đổi)**: `list`, `dict`, `set`, `bytearray`. Khi gán `a = b`, cả 2 cùng trỏ vào 1 vùng nhớ. Thay đổi `a` sẽ làm thay đổi `b`. Luôn dùng `.copy()` khi muốn sao chép thực sự.\n- **Immutable (Bất biến)**: `int`, `float`, `str`, `tuple`, `frozenset`, `bytes`. Khi bạn 'thay đổi' giá trị chuỗi, Python thực chất tạo ra một chuỗi mới ở vùng nhớ mới. Điều này giúp an toàn dữ liệu nhưng tốn RAM nếu thay đổi liên tục trong vòng lặp.\n- **Constructor Functions (Casting):** Bạn có thể ép kiểu dữ liệu bằng các hàm như `int()`, `float()`, `str()`, `list()`, `tuple()`, `dict()`, `set()`. Ví dụ: `int(\"10\")` sẽ chuyển chuỗi thành số.\n- **Kiểm tra kiểu dữ liệu:** Sử dụng hàm `type(obj)` để biết kiểu của đối tượng. Để kiểm tra đối tượng có thuộc một lớp nào đó không, dùng `isinstance(obj, type)` (Khuyên dùng hơn `type()`)."
                        },
                        {
                            "type": "case_study",
                            "title": "3. Ứng dụng thực tế: Tại sao Java Dev hay gặp lỗi 'Side Effect'?",
                            "text": "Trong thực tế, khi bạn truyền một `list` vào hàm và thay đổi nó, danh sách gốc bên ngoài cũng thay đổi. Đây là 'side effect'. Hiểu về Memory Management giúp bạn quyết định khi nào cần `.copy()` để bảo vệ dữ liệu, tương tự như việc clone object trong Java để tránh tham chiếu chồng chéo."
                        },
                        {
                            "type": "compare",
                            "title": "3. So sánh Python vs Java: Cú pháp & Tư duy",
                            "items": [
                                { "label": "Khai báo biến", "python": "x = 5 (Dynamic typing - Linh hoạt)", "java": "int x = 5; (Static typing - Chặt chẽ)" },
                                { "label": "Kiểu dữ liệu", "python": "Mọi thứ là Object (Kể cả int)", "java": "Có kiểu Primitive (int, char) và Object" },
                                { "label": "Định nghĩa Block", "python": "Indentation (Khoảng trắng - Ép buộc)", "java": "Cặp ngoặc nhọn { } (Tự do hơn)" },
                                { "label": "Null/None", "python": "None (Là một object thực sự)", "java": "null (Trạng thái rỗng, không phải object)" }
                            ]
                        },
                        {
                            "type": "note",
                            "title": "💡 Lưu ý cho người từ Java",
                            "text": "Trong Java, bạn quen với việc khai báo kiểu dữ liệu như `String name`. Trong Python, hãy tập trung vào **giá trị** của biến hơn là kiểu của nó. Tuy nhiên, để đảm bảo code sạch, hãy sử dụng **Type Hints**: `name: str = 'Python'`."
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "all_types_demo.py",
                            "language": "python",
                            "code": "# 1. Kiểu số (Numeric)\ni: int = 42\nf: float = 3.14\nc: complex = 1 + 2j\n\n# 2. Chuỗi (String - Immutable)\ns: str = \"Python Pro\"\n# s[0] = \"p\" # LỖI! String không cho phép sửa từng ký tự\n\n# 3. List (Mutable - Linh hoạt nhất)\nL: list = [1, \"hai\", 3.0]\nL.append(4) # Thêm vào cuối\nL[0] = 99   # Sửa trực tiếp được\n\n# 4. Tuple (Immutable - Bản ghi cố định)\nT: tuple = (10, 20)\n# T[0] = 100 # LỖI! Tuple không cho phép sửa sau khi tạo\n\n# 5. Dict (Key-Value - Tra cứu O(1))\nD: dict = {\"id\": 1, \"name\": \"Admin\"}\nprint(D[\"name\"]) # Truy cập qua Key\n\n# 6. Set (Duy nhất, không thứ tự)\nS: set = {1, 2, 2, 3} # Sẽ tự lọc thành {1, 2, 3}\n\n# 7. Kiểm tra thực tế\nprint(f\"Type of i: {type(i)}\")\nprint(f\"Is L mutable? Yes, ID: {id(L)}\")"
                        },
                        {
                            "file": "memory_check.py",
                            "language": "python",
                            "code": "import sys\n\n# 1. Kiểm tra ID (địa chỉ vùng nhớ thực tế)\na = [1, 2, 3]  # Tạo object list mới\nb = a          # Gán tham chiếu: b và a trỏ cùng 1 vùng nhớ\nc = [1, 2, 3]  # Tạo object list mới (nội dung giống nhưng vùng nhớ khác)\n\nprint(f'Địa chỉ a: {id(a)}')\nprint(f'Địa chỉ b: {id(b)}') # Sẽ giống ID của a\nprint(f'Địa chỉ c: {id(c)}') # Sẽ khác ID của a\n\n# 2. Immutable check: String không thể thay đổi sau khi tạo\ns = 'hello'\nprint(f'ID ban đầu: {id(s)}')\n\ns = s + ' world' # Python tạo object mới hoàn toàn, s trỏ vào địa chỉ mới\nprint(f'ID sau khi nối: {id(s)}') # ID thay đổi rõ rệt\n\n# 3. Mutable check: List thay đổi ngay tại chỗ (In-place)\nL = [1, 2]\nprint(f'ID List trước: {id(L)}')\nL.append(3)\nprint(f'ID List sau: {id(L)}')   # ID giữ nguyên, vùng nhớ không đổi"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Khám phá Mutable",
                            "desc": "Tạo một list `L1 = [1, 2, 3]`. Gán `L2 = L1`. Thay đổi phần tử đầu tiên của `L2` thành 99. In `L1` ra và giải thích tại sao `L1` cũng bị thay đổi.",
                            "hint": "Sử dụng kiến thức về tham chiếu vùng nhớ (Reference)."
                        }
                    ]
                }
            },
            {
                "id": "s02-structures",
                "title": "Buổi 2: Cấu trúc dữ liệu nâng cao",
                "content": {
                    "intro": "Đi sâu vào các cấu trúc dữ liệu cốt lõi giúp Python xử lý hàng triệu bản ghi dữ liệu một cách hiệu quả.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Kiến thức Python: Các phương thức String & List quan trọng",
                            "text": "Làm việc với dữ liệu thực tế đòi hỏi bạn thành thạo các hàm xử lý chuỗi và mảng.\n\n- **String Methods (Xử lý chuỗi):**\n    *   `.strip()`: Xóa khoảng trắng thừa (giống `trim()` Java).\n    *   `.split(sep)`: Chia chuỗi thành list (vd: xử lý file CSV).\n    *   `.join(list)`: Nối list thành chuỗi (hiệu năng tốt hơn dùng `+` trong vòng lặp).\n    *   `.replace(old, new)`: Thay thế nội dung.\n    *   `.upper()`, `.lower()`, `.capitalize()`: Chuyển đổi hoa/thường.\n    *   `.startswith()`, `.endswith()`: Kiểm tra tiền tố/hậu tố.\n    *   `.find()`, `.index()`: Tìm kiếm vị trí chuỗi con.\n- **List Methods (Mảng động):**\n    *   `.append(val)`: Thêm vào cuối (O(1)).\n    *   `.extend(iterable)`: Nối thêm một danh sách khác.\n    *   `.insert(index, val)`: Chèn vào vị trí bất kỳ (O(n)).\n    *   `.pop(index)`: Lấy ra và xóa phần tử (mặc định cuối list).\n    *   `.remove(val)`: Xóa phần tử đầu tiên tìm thấy.\n    *   `.sort()`, `.reverse()`: Sắp xếp và đảo ngược danh sách gốc."
                        },
                        {
                            "type": "concept",
                            "title": "2. Kiến thức Python: Dict & Set (Tra cứu & Tập hợp)",
                            "text": "- **Dictionary Methods:**\n    *   `.get(key, default)`: Lấy giá trị an toàn, không lo lỗi `KeyError` nếu key không tồn tại.\n    *   `.keys()`, `.values()`, `.items()`: Duyệt qua các thành phần của dict.\n    *   `.update(other_dict)`: Hợp nhất dữ liệu.\n    *   `.pop(key)`: Xóa và lấy giá trị theo key.\n    *   `.clear()`: Xóa sạch nội dung dict.\n- **Set Operations:**\n    *   `.add(val)`, `.remove(val)`, `.discard(val)`: Thêm/xóa phần tử.\n    *   `union()`, `intersection()`, `difference()`: Các hàm tương đương toán tử `|`, `&`, `-`.\n    *   `.isdisjoint()`, `.issubset()`: Kiểm tra quan hệ tập hợp."
                        },
                        {
                            "type": "concept",
                            "title": "3. Kiến thức Python: Operators (Toán tử)",
                            "text": "- **Arithmetic:** `+`, `-`, `*`, `/`, `%`, `**` (Lũy thừa), `//` (Chia lấy nguyên).\n- **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`,... (Viết tắt giống Java).\n- **Comparison:** `==`, `!=`, `>`, `<`, `>=`, `<=`.\n- **Logical:** `and`, `or`, `not` (Viết bằng chữ thay vì `&&`, `||`, `!` như Java).\n- **Identity & Membership:** `is`, `is not` (So sánh địa chỉ vùng nhớ), `in`, `not in` (Kiểm tra phần tử có trong tập hợp không - Cực kỳ hữu dụng)."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: Xử lý dữ liệu trùng lặp (Deduplication)",
                            "text": "Giả sử bạn có 1 triệu bản ghi từ Database với nhiều ID trùng nhau. Trong Java, bạn có thể dùng `HashSet`. Trong Python, chỉ cần `list(set(large_list))`. Tốc độ xử lý của Set trong Python cực nhanh nhờ cơ chế Hashing được tối ưu ở tầng C, giúp giải quyết bài toán lọc dữ liệu chỉ trong vài mili giây."
                        },
                        {
                            "type": "compare",
                            "title": "3. So sánh Python vs Java: Data Structures",
                            "items": [
                                { "label": "ArrayList vs List", "python": "List (Có sẵn, cực kỳ linh hoạt)", "java": "ArrayList (Cần import, cần generic type)" },
                                { "label": "HashMap vs Dict", "python": "Dict (Cú pháp literal {}, rất nhanh)", "java": "HashMap (Cần import, thao tác put/get)" },
                                { "label": "HashSet vs Set", "python": "Set (Cú pháp literal {1, 2})", "java": "HashSet (Cần import)" },
                                { "label": "Immutable List", "python": "Tuple (Cú pháp (1, 2))", "java": "List.of() (Java 9+)" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "data_methods_pro.py",
                            "language": "python",
                            "code": "# 1. Xử lý chuỗi (String Manipulation)\nraw_data = \"  apple,banana, orange  \"\n# strip() xóa khoảng trắng, split() tách chuỗi thành list\nclean_list = [item.strip() for item in raw_data.split(\",\")]\nprint(f\"List sạch: {clean_list}\") # ['apple', 'banana', 'orange']\n\n# 2. Xử lý List (Dynamic Array)\nproducts = [\"Laptop\", \"Mouse\"]\nproducts.append(\"Keyboard\") # Thêm cuối: O(1)\nproducts.insert(1, \"Webcam\") # Chèn vị trí 1: O(n)\nremoved_item = products.pop() # Lấy phần tử cuối: O(1)\nprint(f\"Sản phẩm: {products}, Đã xóa: {removed_item}\")\n\n# 3. Dictionary (Hash Map)\nuser_db = {\"id\": 101, \"name\": \"Tuấn\"}\n# get() an toàn hơn user_db[\"email\"] vì không gây lỗi KeyError\nemail = user_db.get(\"email\", \"Chưa cung cấp\")\nprint(f\"Email: {email}\")\n\n# 4. Set (Tập hợp - Deduplication)\nids = [1, 2, 2, 3, 4, 4, 4]\nunique_ids = set(ids) # Tự động loại trùng\nprint(f\"IDs duy nhất: {unique_ids}\")\nprint(f\"Check tồn tại (O(1)): {2 in unique_ids}\")"
                        },
                        {
                            "file": "dict_comprehension.py",
                            "language": "python",
                            "code": "# 1. Dict Comprehension: Tạo map cực nhanh từ dữ liệu thô\nusers = [('1', 'Alice'), ('2', 'Bob'), ('3', 'Charlie')]\n# Cú pháp: {key: value for item in iterable}\nuser_map = {uid: name for uid, name in users}\nprint(f'User Map: {user_map}')\n\n# 2. Set operations: Xử lý tập hợp (giống SQL JOIN/UNION)\ns1 = {1, 2, 3, 4}\ns2 = {3, 4, 5, 6}\n\nprint(f'Giao (Intersection): {s1 & s2}') # Phần tử có ở cả 2 bên\nprint(f'Hợp (Union): {s1 | s2}')        # Tất cả phần tử không trùng lặp\nprint(f'Hiệu (Difference): {s1 - s2}')   # Có ở s1 nhưng không có ở s2\n\n# 3. List Slicing: Kỹ thuật 'cắt' mảng chuyên nghiệp\nnums = [0, 1, 2, 3, 4, 5]\nprint(f'Lấy 3 số đầu: {nums[:3]}')\nprint(f'Lấy từ số thứ 2 đến hết: {nums[2:]}')\nprint(f'Đảo ngược mảng: {nums[::-1]}') # Tip cực hữu ích"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Thống kê tần suất",
                            "desc": "Cho một danh sách `words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']`. Hãy dùng Dictionary để đếm số lần xuất hiện của mỗi từ.",
                            "hint": "Duyệt qua list và dùng `dict.get(key, 0) + 1`."
                        }
                    ]
                }
            },
            {
                "id": "s03-functions",
                "title": "Buổi 3: Hàm và Module chuyên sâu",
                "content": {
                    "intro": "Hàm trong Python không chỉ là một khối lệnh, nó là 'First-class citizen'. Điều này có nghĩa là hàm có thể được gán cho biến, truyền vào như tham số hoặc trả về từ một hàm khác.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Kiến thức Python: Hàm (Functions Deep Dive)",
                            "text": "- **Cách sử dụng thực tế:** Chia nhỏ logic thành các hàm nhỏ (Single Responsibility). Sử dụng `*args` khi bạn không biết trước số lượng tham số, `**kwargs` khi cần cấu hình linh hoạt (vd: tham số cho database connection).\n- **Khi nào dùng:** Dùng `lambda` cho các hàm cực ngắn dùng một lần (vd: trong `map`, `filter`). Dùng `Closures` khi muốn tạo ra các hàm có 'trạng thái' riêng mà không cần dùng Class.\n- **Lưu ý quan trọng:** Tránh dùng **Mutable Default Arguments** (vd: `def func(a=[])`). Danh sách `[]` chỉ được tạo một lần duy nhất khi định nghĩa hàm, dẫn đến dữ liệu bị cộng dồn sai lệch giữa các lần gọi."
                        },
                        {
                            "type": "concept",
                            "title": "2. Kiến thức Python: Decorators",
                            "text": "- **Cách sử dụng thực tế:** Dùng để tách biệt logic hệ thống (Logging, Auth, Cache) khỏi logic nghiệp vụ. Giúp code tuân thủ nguyên lý DRY (Don't Repeat Yourself).\n- **Khi nào dùng:** Dùng khi bạn thấy mình đang viết cùng một đoạn code kiểm tra (vd: check login) ở đầu nhiều hàm khác nhau.\n- **Lưu ý quan trọng:** Khi viết Decorator, hãy luôn dùng `@functools.wraps(func)` để giữ lại metadata của hàm gốc (vd: tên hàm, docstring) giúp việc debug dễ dàng hơn."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: Logging & Authentication",
                            "text": "Thay vì viết code kiểm tra quyền truy cập lặp đi lặp lại ở mọi hàm (Boilerplate code), bạn chỉ cần định nghĩa một `@require_auth` decorator. Khi áp dụng vào FastAPI, điều này giúp tách biệt hoàn toàn Logic nghiệp vụ và Logic hệ thống, giống như cách Aspect-Oriented Programming (AOP) hoạt động trong Spring Framework."
                        },
                        {
                            "type": "compare",
                            "title": "3. So sánh Python vs Java: Functions",
                            "items": [
                                { "label": "Khai báo", "python": "def name(): (Linh hoạt)", "java": "public void name() { (Chặt chẽ trong class)" },
                                { "label": "Tham số", "python": "*args, **kwargs (Vô hạn)", "java": "Varargs (Type... args)" },
                                { "label": "Tính chất", "python": "First-class citizen (Object)", "java": "Method (Gắn liền với class/object)" },
                                { "label": "Overloading", "python": "Không hỗ trợ trực tiếp (Dùng tham số mặc định)", "java": "Hỗ trợ mạnh mẽ (Cùng tên khác signature)" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "decorators_demo.py",
                            "language": "python",
                            "code": "import time\nfrom functools import wraps\n\n# 1. Định nghĩa Decorator tính thời gian chạy (giống AOP trong Java)\ndef timer(func):\n    @wraps(func) # Giữ lại metadata (tên hàm, docstring) của hàm gốc\n    def wrapper(*args, **kwargs):\n        start = time.time() # Lấy thời gian hiện tại\n        result = func(*args, **kwargs) # Thực thi hàm chính\n        end = time.time()\n        print(f'Hàm {func.__name__} chạy mất: {end - start:.4f}s')\n        return result # Trả về kết quả cho caller\n    return wrapper\n\n# 2. Sử dụng Decorator với cú pháp @ (Syntactic Sugar)\n@timer\ndef heavy_task(n: int):\n    \"\"\"Giả lập một tác vụ tốn thời gian\"\"\"\n    time.sleep(n)\n    return f'Đã xong task {n}'\n\n# 3. Gọi hàm như bình thường, logic timer tự động được nhúng vào\nprint(heavy_task(1))"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Xây dựng Decorator",
                            "desc": "Viết một decorator `@timer` để tính thời gian thực thi của một hàm bất kỳ.",
                            "hint": "Sử dụng module `time` và tính hiệu `time.time()` trước và sau khi gọi hàm."
                        }
                    ]
                }
            },
            {
                "id": "s04-files",
                "title": "Buổi 4: Xử lý Exception & Resource",
                "content": {
                    "intro": "Lỗi là một phần tất yếu của lập trình. Python cung cấp cơ chế xử lý lỗi tinh tế và cách quản lý tài nguyên (file, connection) an toàn thông qua Context Managers.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Kiến thức Python: Exception Handling",
                            "text": "Cơ chế `try-except-else-finally` giúp quản lý luồng chương trình khi gặp sự cố.\n- **else:** Chạy khi KHÔNG có exception xảy ra.\n- **finally:** Luôn luôn chạy, thường dùng để dọn dẹp tài nguyên."
                        },
                        {
                            "type": "concept",
                            "title": "2. Kiến thức Python: Context Managers (Câu lệnh with)",
                            "text": "Câu lệnh `with` giúp quản lý tài nguyên một cách tự động. Khi kết thúc block `with`, tài nguyên (như file) sẽ tự động được đóng, ngay cả khi có lỗi xảy ra. Đây là best practice thay vì đóng thủ công."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: Chống rò rỉ bộ nhớ (Memory Leak)",
                            "text": "Trong các hệ thống lớn chạy 24/7, việc quên đóng File hay Database Connection là thảm họa. Câu lệnh `with` đảm bảo tài nguyên luôn được giải phóng (Deterministic cleanup), khác với việc chờ Garbage Collector dọn dẹp một cách ngẫu nhiên. Đây là nền tảng để viết code Backend 'Production-ready'."
                        },
                        {
                            "type": "compare",
                            "title": "3. So sánh Python vs Java: Error Handling",
                            "items": [
                                { "label": "Cú pháp", "python": "try-except-else-finally", "java": "try-catch-finally" },
                                { "label": "Quản lý tài nguyên", "python": "Câu lệnh 'with' (Cực gọn)", "java": "Try-with-resources (Java 7+)" },
                                { "label": "Ném lỗi", "python": "raise ValueError('msg')", "java": "throw new ValueError('msg');" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "context_manager_pro.py",
                            "language": "python",
                            "code": "import os\n\n# 1. Cách làm an toàn (Best Practice): Sử dụng 'with' (Context Manager)\ndef read_config(file_path: str):\n    if not os.path.exists(file_path):\n        raise FileNotFoundError(f\"Không tìm thấy file: {file_path}\")\n\n    # 'with' tự động gọi f.close() kể cả khi có lỗi xảy ra bên trong block\n    with open(file_path, 'r', encoding='utf-8') as f:\n        return f.read()\n\n# 2. Luồng xử lý lỗi đầy đủ: try-except-else-finally\ntry:\n    content = read_config('config.json')\nexcept FileNotFoundError as e:\n    print(f\"Lỗi hệ thống: {e}\") # Xử lý lỗi cụ thể\nexcept Exception as e:\n    print(f\"Lỗi không xác định: {e}\") # Xử lý các lỗi khác\nelse:\n    print(\"Đọc file thành công, không có lỗi nào xảy ra.\")\nfinally:\n    print(\"Thao tác kết thúc (Luôn luôn chạy để dọn dẹp).\")"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Đọc file an toàn",
                            "desc": "Viết chương trình yêu cầu nhập tên file, nếu file không tồn tại thì in ra cảnh báo và cho phép nhập lại thay vì dừng chương trình.",
                            "hint": "Dùng vòng lặp while kết hợp try-except."
                        }
                    ]
                }
            }
        ]
    },
    "02-oop": {
        "title": "Giai đoạn 2: OOP Toàn Diện",
        "sessions": [
            {
                "id": "s05-oop-basics",
                "title": "Buổi 5: Class & Object",
                "content": {
                    "intro": "Lập trình hướng đối tượng (OOP) trong Python mang tính linh hoạt cực cao. Nếu Java là ngôn ngữ 'ép buộc' OOP thì Python coi OOP là một lựa chọn mạnh mẽ. Buổi này sẽ giúp bạn hiểu cách Python triển khai các thực thể, thuộc tính và phương thức với tư duy Duck Typing.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Kiến thức Python: Class và Instance",
                            "text": "- **Cách sử dụng thực tế:** Sử dụng `class` để đóng gói dữ liệu và hành vi (vd: `User`, `Order`). Khác với Java, Python cho phép thêm thuộc tính động, nhưng **NÊN TRÁNH** để giữ code ổn định.\n- **Khi nào dùng:** Dùng khi cần quản lý trạng thái phức tạp hoặc xây dựng các mô hình dữ liệu (Models) trong ứng dụng Backend.\n- **Lưu ý quan trọng:** Tham số `self` là bắt buộc ở mọi phương thức instance. Nếu quên `self`, bạn sẽ gặp lỗi `TypeError` vì Python tự động truyền instance vào tham số đầu tiên."
                        },
                        {
                            "type": "concept",
                            "title": "2. Instance vs Class Attributes",
                            "text": "- **Cách sử dụng thực tế:** `Instance attributes` (`self.x`) dùng cho dữ liệu riêng của từng đối tượng. `Class attributes` dùng cho hằng số hoặc dữ liệu dùng chung cho cả lớp (vd: `tax_rate`).\n- **Khi nào dùng:** Dùng `Class attributes` thay cho hằng số global nếu hằng số đó chỉ liên quan mật thiết đến Class đó.\n- **Lưu ý quan trọng:** Cẩn thận khi sửa `Class attribute` thông qua một instance (`obj.class_attr = val`), vì điều này sẽ tạo ra một `instance attribute` trùng tên thay vì sửa giá trị dùng chung."
                        },
                        {
                            "type": "concept",
                            "title": "3. Đóng gói (Encapsulation) & Access Control",
                            "text": "- **Cách sử dụng thực tế:** Dùng dấu gạch dưới đơn (`_variable`) cho các thuộc tính 'protected' (quy ước). Dùng gạch dưới đôi (`__variable`) để kích hoạt `Name Mangling` khi muốn tránh xung đột tên trong kế thừa.\n- **Khi nào dùng:** Luôn dùng `@property` cho getter/setter để đảm bảo tính đóng gói mà vẫn giữ được cú pháp truy cập thuộc tính tự nhiên (`obj.x` thay vì `obj.getX()`).\n- **Lưu ý quan trọng:** Đừng cố gắng tạo ra cơ chế 'Private tuyệt đối' như Java. Trong Python, tính 'tường minh' quan trọng hơn sự 'ngăn cấm'."
                        },
                        {
                            "type": "compare",
                            "title": "4. So sánh Access Control vs Java",
                            "items": [
                                { "label": "Public", "python": "name (Mặc định)", "java": "public String name;" },
                                { "label": "Protected", "python": "_name (Quy ước, không cấm truy cập)", "java": "protected String name;" },
                                { "label": "Private", "python": "__name (Name Mangling - gây khó khăn khi truy cập ngoài)", "java": "private String name;" },
                                { "label": "Getter/Setter", "python": "@property Decorator (Cực kỳ Pythonic)", "java": "Method getX() / setX()" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "oop_pro.py",
                            "language": "python",
                            "code": "class BankAccount:\n    # 1. Constructor: __init__ dùng để khởi tạo trạng thái ban đầu\n    def __init__(self, owner: str, balance: float):\n        self.owner = owner          # Public attribute\n        self.__balance = balance    # Private attribute (Name Mangling)\n\n    # 2. Getter chuyên nghiệp dùng @property\n    # Cách dùng: print(acc.balance) - Trông như truy cập biến nhưng thực tế là gọi hàm\n    @property\n    def balance(self):\n        return self.__balance\n\n    # 3. Setter kèm logic kiểm soát dữ liệu\n    # Cách dùng: acc.balance = 2000\n    @balance.setter\n    def balance(self, value):\n        if value < 0:\n            raise ValueError(\"Số dư không thể âm!\")\n        self.__balance = value\n\n    # 4. Instance method: Luôn phải có 'self' làm tham số đầu tiên\n    def deposit(self, amount: float):\n        self.__balance += amount\n        print(f\"Gửi {amount} thành công. Số dư mới: {self.__balance}\")\n\nacc = BankAccount(\"Tuấn\", 1000)\nprint(acc.balance) # Gọi getter\nacc.balance = 2000 # Gọi setter\n# print(acc.__balance) # Gây lỗi AttributeError vì tên thực tế đã bị biến đổi"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Quản lý sản phẩm",
                            "desc": "Tạo class Product với thuộc tính `price`. Dùng @property để đảm bảo giá bán không bao giờ nhỏ hơn 0. Nếu gán giá < 0, hãy in thông báo cảnh báo.",
                            "hint": "Sử dụng setter để kiểm tra giá trị đầu vào."
                        }
                    ]
                }
            },
            {
                "id": "s06-inheritance",
                "title": "Buổi 6: Kế thừa & Đa hình",
                "content": {
                    "intro": "Kế thừa trong Python cực kỳ mạnh mẽ với khả năng Đa kế thừa (Multiple Inheritance), điều mà Java không cho phép trực tiếp ở cấp độ Class.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Kế thừa Class (Inheritance)",
                            "text": "- **Cách sử dụng thực tế:** Dùng để mở rộng tính năng của class có sẵn mà không cần copy code. Ví dụ: `AdminUser` kế thừa từ `User`.\n- **Khi nào dùng:** Khi có mối quan hệ 'IS-A' (là một). Admin là một User. Đừng lạm dụng kế thừa nếu chỉ muốn dùng chung một vài hàm (hãy dùng Composition hoặc Mixins).\n- **Lưu ý quan trọng:** Luôn dùng `super().__init__(...)` để đảm bảo logic khởi tạo của lớp cha được thực thi hoàn chỉnh."
                        },
                        {
                            "type": "concept",
                            "title": "2. Method Resolution Order (MRO)",
                            "text": "- **Cách sử dụng thực tế:** Hiểu thứ tự ưu tiên khi gọi phương thức trong đa kế thừa. Khi gọi `self.method()`, Python tìm ở chính nó, sau đó đến các lớp cha theo thứ tự từ trái sang phải.\n- **Khi nào dùng:** Quan trọng khi bạn kế thừa từ nhiều Class có phương thức trùng tên.\n- **Lưu ý quan trọng:** Bạn có thể kiểm tra thứ tự này bằng `ClassName.mro()`. Tránh thiết kế hệ thống kế thừa dạng 'Kim cương' (Diamond problem) quá phức tạp."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: Mixin Architecture",
                            "text": "Thay vì kế thừa sâu (Deep Inheritance) gây khó bảo trì, Python khuyến khích dùng Mixins - các class nhỏ cung cấp tính năng cụ thể (vd: `JsonSerializableMixin`, `LoggableMixin`). Bạn có thể 'lắp ghép' các tính năng này vào class chính một cách linh hoạt, giúp code cực kỳ modular mà Java truyền thống rất khó thực hiện nếu không dùng Interface + Default Methods."
                        },
                        {
                            "type": "concept",
                            "title": "3. Đa hình & Duck Typing",
                            "text": "- **Cách sử dụng thực tế:** Cho phép các đối tượng khác nhau phản ứng với cùng một tên hàm theo cách riêng.\n- **Khi nào dùng:** Dùng khi bạn muốn viết một hàm có thể xử lý nhiều loại đối tượng (vd: hàm `save()` nhận vào cả `FileStorage` và `S3Storage`).\n- **Lưu ý quan trọng:** Duck Typing giúp code linh hoạt hơn Interface của Java vì không cần ép kiểu (casting), nhưng cần viết Unit Test kỹ để đảm bảo đối tượng truyền vào thực sự có hàm đó."
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "inheritance_pro.py",
                            "language": "python",
                            "code": "class LoggerMixin:\n    # Mixin: Cung cấp tính năng bổ trợ, không đứng độc lập\n    def log(self, message: str):\n        print(f\"[{self.__class__.__name__}]: {message}\")\n\nclass BaseService:\n    def __init__(self, name: str):\n        self.name = name\n\n# 1. Đa kế thừa: Kết hợp logic nghiệp vụ và tính năng bổ trợ (Mixin)\nclass PaymentService(BaseService, LoggerMixin):\n    def process(self, amount: float):\n        self.log(f\"Đang xử lý thanh toán: {amount}\")\n        # Thực hiện logic...\n\n# 2. Duck Typing: Không cần kế thừa chung, chỉ cần có method trùng tên\nclass PDFExporter:\n    def export(self): print(\"Xuất file PDF\")\n\nclass CSVExporter:\n    def export(self): print(\"Xuất file CSV\")\n\ndef run_export(worker):\n    # Hàm này nhận vào bất kỳ object nào có method export()\n    worker.export()\n\nservice = PaymentService(\"VNPay\")\nservice.process(1000)\n\nrun_export(PDFExporter())\nrun_export(CSVExporter())"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Hệ thống thanh toán",
                            "desc": "Xây dựng lớp cha `Payment` và các lớp con `CreditCard`, `Paypal`. Mỗi lớp con override phương thức `pay(amount)`. Viết một hàm nhận vào danh sách các đối tượng thanh toán khác nhau và thực hiện trả tiền.",
                            "hint": "Vận dụng tính đa hình để duyệt qua danh sách."
                        }
                    ]
                }
            },
            {
                "id": "s07-advanced-oop",
                "title": "Buổi 7: Dunder Methods & Abstraction",
                "content": {
                    "intro": "Dunder (Double Underscore) methods là những phương thức đặc biệt giúp đối tượng của bạn 'hòa nhập' hoàn hảo với hệ sinh thái Python. Kết hợp với Abstraction, bạn sẽ tạo ra những bộ khung (framework) cực kỳ chuyên nghiệp.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Dunder (Magic) Methods",
                            "text": "- **Cách sử dụng thực tế:** Cho phép các object tự định nghĩa cách chúng phản ứng với các hàm built-in (`len()`, `str()`) hoặc toán tử (`+`, `-`, `==`). Giúp object của bạn 'hòa nhập' tự nhiên vào Python.\n- **Khi nào dùng:** Dùng `__str__` để in log thân thiện, `__eq__` để so sánh nội dung object (giống `equals()` Java), và `__len__` nếu class của bạn là một container.\n- **Lưu ý quan trọng:** Đừng tự tạo ra các phương thức có dạng `__my_method__`. Chỉ nên override các dunder methods có sẵn của Python để tránh xung đột trong tương lai."
                        },
                        {
                            "type": "concept",
                            "title": "2. Abstract Base Classes (ABC)",
                            "text": "- **Cách sử dụng thực tế:** Dùng để định nghĩa 'bộ khung' cho các lớp con. Một Abstract Class đảm bảo mọi lớp con đều phải triển khai các phương thức bắt buộc.\n- **Khi nào dùng:** Dùng khi bạn xây dựng Framework hoặc thư viện mà yêu cầu người dùng phải tuân theo một Interface cụ thể (vd: mọi DatabaseDriver phải có hàm `connect()`).\n- **Lưu ý quan trọng:** Bạn không thể tạo instance từ một class kế thừa `ABC` nếu chưa override hết các `@abstractmethod`. Điều này giúp phát hiện lỗi thiếu sót ngay lúc khởi tạo object."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: Xây dựng Plugin System",
                            "text": "Khi bạn xây dựng một hệ thống cho phép bên thứ ba viết thêm tính năng (vd: Payment Gateways), sử dụng `ABC` giúp bạn định nghĩa một 'hợp đồng' (Contract). Bất kỳ ai muốn tích hợp đều phải tuân thủ đúng các hàm bạn đã định nghĩa. Điều này giúp hệ thống của bạn cực kỳ chắc chắn và dễ mở rộng (Scalable)."
                        },
                        {
                            "type": "compare",
                            "title": "3. Magic Methods phổ biến vs Java",
                            "items": [
                                { "label": "Khởi tạo", "python": "__init__", "java": "Constructor" },
                                { "label": "Mô tả chuỗi", "python": "__str__ / __repr__", "java": "toString()" },
                                { "label": "So sánh bằng", "python": "__eq__", "java": "equals()" },
                                { "label": "Độ dài", "python": "__len__", "java": "size() / length()" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "advanced_oop_pro.py",
                            "language": "python",
                            "code": "from abc import ABC, abstractmethod\n\n# 1. Định nghĩa Abstract Class (Hợp đồng)\nclass Shape(ABC):\n    @abstractmethod\n    def area(self) -> float:\n        pass\n\nclass Square(Shape):\n    def __init__(self, side: float):\n        self.side = side\n\n    # Bắt buộc phải override phương thức trừu tượng\n    def area(self) -> float:\n        return self.side ** 2\n\n    # Dunder Method: Giúp print(obj) ra thông tin dễ đọc\n    def __str__(self):\n        return f\"Square(side={self.side})\"\n\n    # Dunder Method: Định nghĩa logic so sánh bằng ==\n    def __eq__(self, other):\n        if not isinstance(other, Square):\n            return False\n        return self.side == other.side\n\ns1 = Square(10)\ns2 = Square(10)\nprint(s1)          # Gọi __str__ -> Square(side=10.0)\nprint(s1 == s2)    # Gọi __eq__ -> True (So sánh giá trị, không phải địa chỉ vùng nhớ)"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Xây dựng Vector",
                            "desc": "Tạo class Vector với 2 thuộc tính x, y. Triển khai dunder method `__add__` để có thể cộng 2 đối tượng Vector bằng toán tử `+`.",
                            "hint": "v1 + v2 sẽ gọi v1.__add__(v2)."
                        }
                    ]
                }
            }
        ]
    },
    "03-advanced": {
        "title": "Giai đoạn 3: Python Nâng Cao",
        "sessions": [
            {
                "id": "s08-advanced-tools",
                "title": "Buổi 8: Decorators & Iterators",
                "content": {
                    "intro": "Chào mừng bạn đến với 'phép thuật' thực sự của Python. Decorators và Iterators là những công cụ giúp bạn viết code ngắn gọn, hiệu quả và tối ưu bộ nhớ ở mức độ chuyên gia.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Decorators - Hàm bọc hàm",
                            "text": "- **Cách sử dụng thực tế:** Dùng để 'tiêm' logic (Dependency Injection nhẹ) vào các hàm có sẵn mà không làm bẩn code nghiệp vụ. Rất phổ biến cho: Ghi log, Kiểm tra quyền, Cache kết quả.\n- **Khi nào dùng:** Khi bạn thấy mình lặp lại cùng một logic 'tiền xử lý' hoặc 'hậu xử lý' ở nhiều hàm khác nhau.\n- **Lưu ý quan trọng:** Luôn sử dụng `@functools.wraps(func)` để bảo toàn danh tính (metadata) của hàm gốc, giúp việc debug và stack trace chính xác hơn."
                        },
                        {
                            "type": "concept",
                            "title": "2. Iterators & Generators",
                            "text": "- **Cách sử dụng thực tế:** `Iterator` giúp duyệt qua tập hợp. `Generator` dùng `yield` để trả về dữ liệu 'lười' (Lazy Evaluation).\n- **Khi nào dùng:** Dùng `Generator` khi xử lý tập dữ liệu lớn (file hàng GB, hàng triệu dòng DB) để tiết kiệm RAM. Chỉ nạp 1 phần tử vào bộ nhớ tại một thời điểm thay vì nạp cả danh sách.\n- **Lưu ý quan trọng:** Một Generator chỉ có thể được duyệt qua **một lần duy nhất**. Nếu muốn duyệt lại, bạn phải khởi tạo lại nó."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: Xử lý Log File hàng GB",
                            "text": "Khi bạn cần đọc một file Log khổng lồ (vd: 10GB) để tìm lỗi, Java truyền thống có thể gây `OutOfMemoryError` nếu không dùng Stream đúng cách. Trong Python, chỉ cần một hàm Generator đơn giản với `yield line`, bạn có thể duyệt qua toàn bộ file mà chỉ tốn vài MB RAM. Đây là bí quyết giúp Python xử lý Big Data cực kỳ hiệu quả."
                        },
                        {
                            "type": "note",
                            "title": "💡 Decorator vs Annotation",
                            "text": "Mặc dù cú pháp `@decorator` trông giống `@Annotation` của Java, nhưng Decorator trong Python thực sự thực thi logic bao quanh hàm, trong khi Annotation của Java thường chỉ là meta-data được xử lý bởi Reflection hoặc Compiler."
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "advanced_tools_pro.py",
                            "language": "python",
                            "code": "import time\nfrom functools import wraps\n\n# 1. Generator: Đọc dữ liệu lớn cực kỳ tiết kiệm RAM\ndef large_file_reader(file_path):\n    # Hàm này không nạp cả file vào RAM, chỉ đọc từng dòng khi cần\n    with open(file_path, 'r') as f:\n        for line in f:\n            yield line.strip()\n\n# 2. Decorator chuyên nghiệp: Kiểm tra kiểu dữ liệu lúc runtime\ndef ensure_string(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        # Kiểm tra tham số đầu tiên có phải string không\n        if args and not isinstance(args[0], str):\n            raise TypeError(f\"Hàm {func.__name__} yêu cầu tham số string!\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@ensure_string\ndef process_name(name: str):\n    return f\"Đang xử lý: {name}\"\n\n# Cách dùng Generator\n# reader = large_file_reader('huge_log.txt')\n# print(next(reader)) # Lấy 1 dòng\n\nprint(process_name(\"Python\"))\n# process_name(123) # Sẽ ném TypeError ngay lập tức"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Decorator xác thực",
                            "desc": "Viết một decorator `require_auth` kiểm tra một biến global `is_logged_in`. Nếu True mới cho chạy hàm, nếu False thì in thông báo 'Access Denied'.",
                            "hint": "Kiểm tra điều kiện bên trong hàm wrapper."
                        }
                    ]
                }
            },
            {
                "id": "s09-concurrency",
                "title": "Buổi 9: Concurrency (Asyncio)",
                "content": {
                    "intro": "Trong kỷ nguyên của các ứng dụng I/O bound (Web, API), khả năng xử lý đồng thời là bắt buộc. Python Asyncio cung cấp cơ chế lập trình bất đồng bộ cực kỳ hiệu quả trên một luồng duy nhất.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Event Loop & Coroutines",
                            "text": "- **Cách sử dụng thực tế:** `Event Loop` là bộ điều phối trung tâm. Thay vì dùng nhiều Thread (tốn tài nguyên), Python dùng một luồng duy nhất để quản lý hàng ngàn tác vụ đang chờ I/O (vd: chờ Database phản hồi).\n- **Khi nào dùng:** Dùng cho các ứng dụng I/O bound (Web server, Crawler, API gateway). Không dùng cho CPU bound (tính toán nặng).\n- **Lưu ý quan trọng:** Đừng bao giờ gọi một hàm block (vd: `time.sleep()`) bên trong code async, vì nó sẽ làm 'đóng băng' toàn bộ Event Loop."
                        },
                        {
                            "type": "concept",
                            "title": "2. Async/Await",
                            "text": "- **Cách sử dụng thực tế:** `async def` tạo ra một coroutine. `await` dùng để nhường quyền kiểm soát cho Event Loop trong khi chờ kết quả.\n- **Khi nào dùng:** Dùng khi gọi API bên thứ 3, truy vấn Database, hoặc đọc/ghi file không đồng bộ.\n- **Lưu ý quan trọng:** Bạn chỉ có thể dùng `await` bên trong một hàm `async`. Nếu muốn chạy code async từ code sync, hãy dùng `asyncio.run()`."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: High-Concurrency Web Scraper",
                            "text": "Giả sử bạn cần tải dữ liệu từ 1000 trang web. Với Threading, bạn tốn rất nhiều tài nguyên để quản lý 1000 threads. Với Asyncio, bạn chỉ cần 1 luồng duy nhất để quản lý tất cả các kết nối đang chờ (waiting). Khi một trang phản hồi, Event Loop sẽ xử lý ngay lập tức. Điều này giúp hệ thống chịu tải gấp hàng chục lần so với mô hình Thread-per-request truyền thống."
                        },
                        {
                            "type": "compare",
                            "title": "3. Concurrency Model",
                            "items": [
                                { "label": "Asyncio", "python": "Single-thread, non-blocking. Tốt cho I/O bound.", "java": "CompletableFuture / WebFlux" },
                                { "label": "Threading", "python": "Bị hạn chế bởi GIL (Global Interpreter Lock).", "java": "Native Threads (nặng hơn)" },
                                { "label": "Multiprocessing", "python": "Chạy trên nhiều CPU core. Tốt cho tính toán nặng.", "java": "ForkJoinPool / Parallel Streams" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "async_pro.py",
                            "language": "python",
                            "code": "import asyncio\nimport time\n\nasync def fetch_api(api_id: int):\n    # async def: Định nghĩa 1 coroutine\n    print(f\"Bắt đầu gọi API {api_id}...\")\n    await asyncio.sleep(1) # NHƯỜNG quyền kiểm soát trong 1s (Non-blocking)\n    return f\"Dữ liệu {api_id}\"\n\nasync def main():\n    start = time.time()\n    \n    # Chạy SONG SONG nhiều task (Concurrency)\n    # asyncio.gather tập hợp các coroutine và chạy chúng đồng thời\n    tasks = [fetch_api(i) for i in range(1, 4)]\n    results = await asyncio.gather(*tasks)\n    \n    print(f\"Kết quả: {results}\")\n    print(f\"Tổng thời gian chạy: {time.time() - start:.2f}s\")\n\n# Khởi chạy Event Loop\nif __name__ == \"__main__\":\n    asyncio.run(main())"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Giả lập Crawler",
                            "desc": "Viết một chương trình async giả lập việc tải dữ liệu từ 5 trang web khác nhau, mỗi trang mất 1 giây. Tổng thời gian chạy phải xấp xỉ 1 giây thay vì 5 giây.",
                            "hint": "Sử dụng asyncio.gather() để chạy các task đồng thời."
                        }
                    ]
                }
            }
        ]
    },

    "04-database": {
        "title": "Giai đoạn 4: Database Chuyên Sâu",
        "sessions": [
            {
                "id": "s10-sqlalchemy",
                "title": "Buổi 10: SQLAlchemy ORM",
                "content": {
                    "intro": "SQLAlchemy là bộ công cụ SQL mạnh mẽ nhất của Python, giúp thu hẹp khoảng cách giữa mô hình lập trình hướng đối tượng và cơ sở dữ liệu quan hệ. Đối với Java Developer, đây là sự thay đổi tư duy từ Hibernate/JPA sang một phong cách linh hoạt hơn nhưng vẫn đảm bảo tính chặt chẽ.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Khái niệm ORM & Core",
                            "text": "- **Cách sử dụng thực tế:** `Core` dùng khi bạn cần viết SQL tối ưu hoặc quản lý connection pool thủ công. `ORM` dùng để làm việc với dữ liệu dưới dạng Object, giúp code sạch và dễ bảo trì.\n- **Khi nào dùng:** Luôn ưu tiên dùng `ORM` cho các bài toán CRUD thông thường. Dùng `Core` cho các truy vấn phức tạp (complex reporting) mà ORM sinh SQL không hiệu quả.\n- **Lưu ý quan trọng:** Luôn định nghĩa `__tablename__` và `primary_key` cho mỗi Model. Python không ép buộc điều này ở mức ngôn ngữ nhưng SQLAlchemy yêu cầu để quản lý thực thể."
                        },
                        {
                            "type": "concept",
                            "title": "2. Data Mapper Pattern (Session & Unit of Work)",
                            "text": "- **Cách sử dụng thực tế:** `Session` là một 'phiên' làm việc với DB. Nó theo dõi mọi thay đổi trên object. Khi gọi `session.commit()`, tất cả thay đổi được đẩy xuống DB trong một transaction duy nhất.\n- **Khi nào dùng:** Dùng `Scoped Session` trong các ứng dụng Web (như FastAPI) để đảm bảo mỗi request có một session riêng biệt, tránh xung đột dữ liệu.\n- **Lưu ý quan trọng:** Luôn đóng session (`session.close()`) sau khi dùng xong để tránh rò rỉ kết nối (Connection Leak)."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: Quản lý Transaction trong E-commerce",
                            "text": "Khi khách đặt hàng, bạn cần trừ tồn kho và tạo hóa đơn đồng thời. Sử dụng SQLAlchemy Session như một Unit of Work giúp đảm bảo tính ACID: hoặc cả hai thành công, hoặc không có gì thay đổi. Việc này cực kỳ quan trọng để giữ dữ liệu luôn chính xác (Data Integrity), tương tự như `@Transactional` trong Spring."
                        },
                        {
                            "type": "compare",
                            "title": "3. SQLAlchemy vs Spring Data JPA",
                            "items": [
                                { "label": "Model", "python": "Base = declarative_base()", "java": "@Entity" },
                                { "label": "Session", "python": "SessionLocal() / Unit of Work", "java": "EntityManager / Persistence Context" },
                                { "label": "Query", "python": "session.query(User).filter(...)", "java": "JPQL / Criteria API / Repository" },
                                { "label": "Migrations", "python": "Alembic (Cực kỳ mạnh mẽ)", "java": "Liquibase / Flyway" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "database_pro.py",
                            "language": "python",
                            "code": "from sqlalchemy import create_engine, Column, Integer, String, Boolean\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy.orm import sessionmaker\n\n# 1. Base class: Điểm bắt đầu cho mọi Model\nBase = declarative_base()\n\n# 2. Engine: Bộ máy quản lý kết nối thực tế tới DB\nengine = create_engine('sqlite:///./test.db', echo=True) # echo=True giúp xem SQL thực tế\nSessionLocal = sessionmaker(bind=engine)\n\nclass User(Base):\n    __tablename__ = 'users'\n    id = Column(Integer, primary_key=True)\n    email = Column(String, unique=True)\n    is_active = Column(Boolean, default=True)\n\n# 3. Thao tác dữ liệu chuyên nghiệp (Context Manager pattern)\ndef create_user(email: str):\n    db = SessionLocal()\n    try:\n        new_user = User(email=email)\n        db.add(new_user) # Đưa vào Unit of Work\n        db.commit()      # Thực thi SQL INSERT thực tế\n        db.refresh(new_user) # Lấy lại ID tự tăng từ DB\n        return new_user\n    except Exception as e:\n        db.rollback()    # Hủy thay đổi nếu có lỗi\n        raise e\n    finally:\n        db.close()       # Luôn giải phóng kết nối"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Xây dựng quan hệ 1-N",
                            "desc": "Mở rộng code trên bằng cách thêm class `Post` có quan hệ ForeignKey với `User`. Một User có thể có nhiều Post.",
                            "hint": "Sử dụng `relationship()` và `ForeignKey()` từ sqlalchemy."
                        }
                    ]
                }
            }
        ]
    },
    "05-backend-api": {
        "title": "Giai đoạn 5: Backend API với FastAPI",
        "sessions": [
            {
                "id": "s12-fastapi-core",
                "title": "Buổi 12: FastAPI Core & Pydantic",
                "content": {
                    "intro": "FastAPI không chỉ là một web framework; nó là một hệ sinh thái hiện đại, kết hợp sức mạnh của Starlette (web) và Pydantic (data validation). Với tư duy từ Spring Boot, bạn sẽ thấy FastAPI cực kỳ nhanh, trực quan và tự động hóa cao.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Pydantic - Data Validation tại Runtime",
                            "text": "- **Cách sử dụng thực tế:** Dùng Pydantic Models để định nghĩa cấu trúc dữ liệu đầu vào (Request Body) và đầu ra (Response). FastAPI sẽ tự động chuyển đổi JSON thành Object và ngược lại.\n- **Khi nào dùng:** Luôn dùng Pydantic cho mọi Endpoint nhận hoặc trả về dữ liệu phức tạp. Nó giúp thay thế các bước kiểm tra thủ công `if field is None` rườm rà.\n- **Lưu ý quan trọng:** Pydantic thực hiện ép kiểu (coercion). Ví dụ: nếu bạn gửi chuỗi '123' cho trường kiểu `int`, nó sẽ tự động chuyển thành số 123. Nếu không thể chuyển đổi, nó sẽ ném lỗi 422 tự động."
                        },
                        {
                            "type": "concept",
                            "title": "2. Dependency Injection (DI) với Depends()",
                            "text": "- **Cách sử dụng thực tế:** Dùng để 'tiêm' các thành phần phụ thuộc như Database Session, Current User, hoặc Config vào các hàm xử lý API.\n- **Khi nào dùng:** Dùng `Depends()` để tái sử dụng logic (vd: lấy user từ Token) ở nhiều endpoint khác nhau mà không cần viết lại code.\n- **Lưu ý quan trọng:** Dependencies có thể lồng nhau (Dependency Trees). FastAPI sẽ tính toán thứ tự thực thi tối ưu và đảm bảo mỗi dependency chỉ chạy một lần duy nhất trong một request nếu cần."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: Xây dựng Hệ thống Phân quyền (RBAC)",
                            "text": "Bạn có thể tạo một dependency `get_current_active_user`. Bất kỳ endpoint nào cần bảo mật chỉ cần thêm nó vào tham số. FastAPI sẽ tự động chạy logic xác thực trước khi vào logic nghiệp vụ. Nếu user không hợp lệ, nó tự trả về lỗi 401. Điều này giúp code của bạn cực kỳ sạch sẽ và dễ bảo trì, vượt xa sự rườm rà của Spring Security."
                        },
                        {
                            "type": "compare",
                            "title": "3. FastAPI vs Spring Boot",
                            "items": [
                                { "label": "API Docs", "python": "Tự động sinh Swagger (/docs) & Redoc", "java": "Cần cấu hình SpringDoc/Swagger" },
                                { "label": "Hiệu năng", "python": "Async/Await mặc định (High Concurrency)", "java": "Thread-per-request (Nặng hơn)" },
                                { "label": "Validation", "python": "Pydantic (Dựa trên Type Hints)", "java": "JSR-303 / Jakarta Bean Validation" },
                                { "label": "DI", "python": "Depends() - Linh hoạt, dễ hiểu", "java": "@Autowired / @Component" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "fastapi_pro.py",
                            "language": "python",
                            "code": "from fastapi import FastAPI, Depends, HTTPException, status\nfrom pydantic import BaseModel, EmailStr\nfrom typing import Annotated\n\napp = FastAPI()\n\n# 1. Pydantic Model: Định nghĩa 'Contract' dữ liệu\nclass UserCreate(BaseModel):\n    username: str\n    email: EmailStr # Tự động validate định dạng email\n    password: str\n\n# 2. Dependency: Logic dùng chung (vd: DB Connection)\ndef get_db():\n    db = \"Database Connection\"\n    try:\n        yield db # Cung cấp tài nguyên cho endpoint\n    finally:\n        print(\"Đóng kết nối DB\") # Luôn chạy sau khi endpoint hoàn tất\n\n# 3. Endpoint: Kết hợp Validation và DI\n@app.post(\"/users/\", status_code=status.HTTP_201_CREATED)\nasync def create_user(\n    user_in: UserCreate, \n    db: Annotated[str, Depends(get_db)]\n):\n    if user_in.username == \"admin\":\n        raise HTTPException(\n            status_code=400, \n            detail=\"Tên đăng nhập đã tồn tại\"\n        )\n    return {\"status\": \"success\", \"username\": user_in.username}"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Xây dựng CRUD",
                            "desc": "Tạo một danh sách `items` trong bộ nhớ. Viết các endpoint GET (lấy list), GET (lấy theo id), POST (thêm mới) và DELETE.",
                            "hint": "Sử dụng List[Item] và Pydantic để validate đầu vào."
                        }
                    ]
                }
            }
        ]
    },
    "06-fullstack": {
        "title": "Giai đoạn 6: Fullstack (FastAPI + React)",
        "sessions": [
            {
                "id": "s09-react-basics",
                "title": "Buổi 9: ReactJS cho Backend Dev",
                "content": {
                    "intro": "Học ReactJS theo tư duy so sánh với VueJS mà bạn đã biết. Buổi này tập trung vào sự khác biệt về triết lý giữa React và Vue, cách React quản lý luồng dữ liệu một chiều (unidirectional data flow) và cách xây dựng ứng dụng hiện đại bằng Functional Components.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Triết lý React: Declarative & Component-Based",
                            "text": "- **Cách sử dụng thực tế:** Chia UI thành các Component nhỏ tái sử dụng được (vd: `Button`, `Navbar`). Khác với Vue dùng template-based, React dùng JSX (JS + XML) giúp bạn có toàn quyền điều khiển logic ngay trong phần hiển thị.\n- **Khi nào dùng:** Dùng cho các ứng dụng SPA (Single Page Application) phức tạp, cần quản lý trạng thái đồng bộ cao.\n- **Lưu ý quan trọng:** Luôn tuân thủ nguyên lý 'Unidirectional Data Flow' (Dữ liệu chảy 1 chiều từ cha xuống con). Đừng cố gắng thay đổi `props` từ bên trong component con."
                        },
                        {
                            "type": "concept",
                            "title": "2. Virtual DOM & Hooks",
                            "text": "- **Cách sử dụng thực tế:** `useState` để quản lý dữ liệu local của component. `useEffect` để xử lý side-effects như gọi API hoặc đăng ký sự kiện.\n- **Khi nào dùng:** Dùng `Hooks` thay vì Class Components (phong cách cũ) để code ngắn gọn và dễ chia sẻ logic (Custom Hooks).\n- **Lưu ý quan trọng:** `useEffect` không có dependency array `[]` sẽ chạy lại sau mỗi lần render, dễ gây ra vòng lặp vô tận khi gọi API. Luôn kiểm tra kỹ mảng dependency."
                        },
                        {
                            "type": "case_study",
                            "title": "4. Ứng dụng thực tế: Xây dựng Dashboard Real-time",
                            "text": "Khi làm các ứng dụng như bảng điều khiển chứng khoán hay hệ thống giám sát server, dữ liệu thay đổi liên tục hàng giây. React cho phép bạn cập nhật hàng ngàn phần tử trên màn hình mà không gây hiện tượng giật lag nhờ cơ chế Virtual DOM, điều này khó đạt được hơn với mô hình Direct DOM manipulation truyền thống."
                        },
                        {
                            "type": "compare",
                            "title": "3. React vs VueJS (Góc nhìn Backend)",
                            "items": [
                                { "label": "Cú pháp", "python": "JSX (HTML trong JS)", "java": "Templates (.vue files)" },
                                { "label": "Data Binding", "python": "One-way (Explicit)", "java": "Two-way (v-model / Implicit)" },
                                { "label": "Logic Reuse", "python": "Hooks (useState, useEffect)", "java": "Composition API / Mixins" },
                                { "label": "Hệ sinh thái", "python": "Lớn, nhiều thư viện bên thứ 3", "java": "Tập trung, chính chủ (Vue Router, Vuex)" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "Counter.jsx",
                            "language": "javascript",
                            "code": "import React, { useState, useEffect } from 'react';\n\nconst UserCounter = ({ initialValue = 0 }) => {\n  // 1. Khai báo state (giống data() trong Vue)\n  const [count, setCount] = useState(initialValue);\n\n  // 2. Side effect: Đồng bộ hóa dữ liệu ra ngoài React (vd: Document Title)\n  useEffect(() => {\n    // Chạy khi component mounted HOẶC khi 'count' thay đổi\n    console.log(`Giá trị hiện tại là: ${count}`);\n    document.title = `Count: ${count}`;\n\n    // Cleanup function: Tương đương unmounted/destroyed\n    return () => console.log('Cleanup trước khi render mới hoặc unmount');\n  }, [count]); // Dependency array: Chỉ chạy lại nếu count thay đổi\n\n  return (\n    <div className=\"p-4 border rounded shadow-sm\">\n      <h2 className=\"text-xl font-bold\">Bộ đếm: {count}</h2>\n      <div className=\"flex gap-2 mt-4\">\n        <button \n          onClick={() => setCount(prev => prev + 1)} \n          className=\"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition\"\n        >\n          Tăng\n        </button>\n        <button \n          onClick={() => setCount(0)} \n          className=\"bg-gray-200 px-4 py-2 rounded\"\n        >\n          Reset\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default UserCounter;"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Chuyển đổi Component",
                            "desc": "Hãy viết lại một component Vue đơn giản có input (v-model) và hiển thị text đó sang React dùng useState.",
                            "hint": "Dùng value={text} và onChange={(e) => setText(e.target.value)}."
                        }
                    ]
                }
            }
        ]
    },
    "07-testing": {
        "title": "Giai đoạn 7: Testing Toàn Diện",
        "sessions": [
            {
                "id": "s10-pytest",
                "title": "Buổi 10: Unit Test & Integration Test",
                "content": {
                    "intro": "Trong môi trường doanh nghiệp, code không có test là code lỗi. Buổi này sẽ giúp bạn tiếp cận Pytest - framework testing mạnh mẽ nhất của Python, hỗ trợ cả unit test đơn giản lẫn test các hệ thống API phức tạp.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Tại sao dùng Pytest thay vì Unittest?",
                            "text": "- **Cách sử dụng thực tế:** Viết các hàm test đơn giản bắt đầu bằng `test_`. Không cần kế thừa từ Class phức tạp. Sử dụng `assert` thuần túy của Python để kiểm tra điều kiện.\n- **Khi nào dùng:** Luôn ưu tiên dùng Pytest cho mọi loại dự án (FastAPI, Flask, Django) vì tính linh hoạt và kho plugin khổng lồ.\n- **Lưu ý quan trọng:** Để Pytest tự động tìm thấy test, hãy đặt tên file dạng `test_*.py` hoặc `*_test.py`."
                        },
                        {
                            "type": "concept",
                            "title": "2. Fixtures - Quản lý Dependency cho Test",
                            "text": "- **Cách sử dụng thực tế:** Dùng `@pytest.fixture` để chuẩn bị dữ liệu mẫu, DB connection hoặc Mock client. Fixture có thể được 'tiêm' vào hàm test qua tham số.\n- **Khi nào dùng:** Khi bạn cần thực hiện logic 'Setup' và 'Teardown' (vd: tạo user mẫu trước khi test và xóa sau khi xong).\n- **Lưu ý quan trọng:** Sử dụng từ khóa `yield` trong fixture để thực hiện logic dọn dẹp sau khi test kết thúc."
                        },
                        {
                            "type": "case_study",
                            "title": "5. Ứng dụng thực tế: Testing với Database sạch",
                            "text": "Trong thực tế, bạn không muốn test này làm bẩn dữ liệu của test khác. Sử dụng Pytest Fixture với `yield`, bạn có thể tạo ra một database temporary, chạy test, và tự động rollback/delete dữ liệu sau khi xong. Điều này đảm bảo môi trường test luôn 'sạch' và kết quả test luôn ổn định (Reliable Tests)."
                        },
                        {
                            "type": "compare",
                            "title": "4. Testing Java vs Python",
                            "items": [
                                { "label": "Framework", "python": "Pytest / Unittest", "java": "JUnit / TestNG" },
                                { "label": "Mocking", "python": "unittest.mock (Cực kỳ linh hoạt)", "java": "Mockito / Powermock" },
                                { "label": "Assertion", "python": "assert a == b", "java": "assertEquals(a, b)" },
                                { "label": "Test Discovery", "python": "Tự động (file test_*.py)", "java": "Dựa trên Package/Annotations" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "test_service.py",
                            "language": "python",
                            "code": "import pytest\nfrom typing import Generator\n\n# 1. Hàm nghiệp vụ cần test\ndef calculate_discount(price: float, discount: float) -> float:\n    if discount < 0 or discount > 1: \n        raise ValueError(\"Discount must be between 0 and 1\")\n    return price * (1 - discount)\n\n# 2. Fixture: Chuẩn bị dữ liệu mẫu (Setup/Teardown logic)\n@pytest.fixture\ndef sample_price() -> float:\n    return 100.0\n\n# 3. Test case thành công: Nhận fixture qua tham số hàm\ndef test_calculate_discount_success(sample_price):\n    result = calculate_discount(sample_price, 0.2)\n    assert result == 80.0  # Assert thuần túy, cực kỳ dễ đọc\n\n# 4. Test case thất bại: Kiểm tra Exception\ndef test_calculate_discount_invalid():\n    # Kiểm tra xem hàm có ném đúng loại lỗi không\n    with pytest.raises(ValueError, match=\"Discount must be between 0 and 1\"):\n        calculate_discount(100, 1.5)\n\n# 5. Parametrize: Chạy 1 test với nhiều bộ data khác nhau\n@pytest.mark.parametrize(\"p, d, expected\", [\n    (100, 0.1, 90.0),\n    (200, 0.5, 100.0),\n    (50, 0, 50.0)\n])\ndef test_discount_multi_cases(p, d, expected):\n    assert calculate_discount(p, d) == expected"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Test API đơn giản",
                            "desc": "Sử dụng thư viện `httpx` hoặc `requests`, viết một test case kiểm tra xem endpoint của FastAPI có trả về status code 200 hay không.",
                            "hint": "Dùng TestClient từ fastapi.testclient."
                        }
                    ]
                }
            }
        ]
    },
    "08-devops": {
        "title": "Giai đoạn 8: DevOps & Containerization",
        "sessions": [
            {
                "id": "s11-docker",
                "title": "Buổi 11: Docker cho Python Backend",
                "content": {
                    "intro": "Docker không chỉ là công cụ đóng gói; nó là tiêu chuẩn để vận hành ứng dụng Backend hiện đại. Buổi học này tập trung vào cách xây dựng Docker image tối ưu cho Python, tránh các lỗi phổ biến về kích thước image và quản lý layer.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Multi-stage Builds",
                            "text": "- **Cách sử dụng thực tế:** Dùng một image 'builder' (nặng) để cài đặt các công cụ build và thư viện, sau đó chỉ copy kết quả cuối cùng (vd: thư mục `site-packages`) sang image 'runtime' (nhẹ).\n- **Khi nào dùng:** Luôn luôn dùng cho môi trường Production. Giúp giảm image size từ 1GB xuống còn <100MB, tăng tốc độ pull/push image.\n- **Lưu ý quan trọng:** Đảm bảo các thư viện hệ thống cần thiết (vd: `libpq` cho Postgres) có mặt ở cả hai stage nếu chúng cần thiết lúc runtime."
                        },
                        {
                            "type": "concept",
                            "title": "2. Quản lý Dependencies & Docker Cache",
                            "text": "- **Cách sử dụng thực tế:** Copy file `requirements.txt` và chạy `pip install` TRƯỚC KHI copy mã nguồn. Docker sẽ cache layer thư viện này.\n- **Khi nào dùng:** Áp dụng cho mọi Dockerfile để tối ưu thời gian build.\n- **Lưu ý quan trọng:** Nếu bạn copy toàn bộ folder `.` trước khi chạy `pip install`, Docker sẽ phải cài lại thư viện từ đầu mỗi khi bạn sửa dù chỉ một dòng code nghiệp vụ."
                        },
                        {
                            "type": "case_study",
                            "title": "3. Ứng dụng thực tế: CI/CD Pipeline Optimization",
                            "text": "Trong môi trường làm việc thực tế, mỗi lần push code là một lần build image. Nếu không tối ưu Dockerfile, mỗi lần build tốn 5-10 phút sẽ làm chậm tốc độ release của cả team. Sử dụng Multi-stage build và Layer caching giúp giảm thời gian build xuống còn dưới 1 phút, giúp team Backend deploy tính năng mới liên tục (Continuous Deployment)."
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "Dockerfile.pro",
                            "language": "dockerfile",
                            "code": "# --- STAGE 1: Build (Image nặng) ---\nFROM python:3.12-slim as builder\nWORKDIR /build\n# Chỉ copy file yêu cầu để tận dụng Docker Cache\nCOPY requirements.txt .\nRUN pip install --user --no-cache-dir -r requirements.txt\n\n# --- STAGE 2: Runtime (Image siêu nhẹ) ---\nFROM python:3.12-slim\nWORKDIR /app\n# Copy kết quả đã build từ stage 1\nCOPY --from=builder /root/.local /root/.local\nCOPY . .\n\n# Thiết lập PATH để Python tìm thấy thư viện\nENV PATH=/root/.local/bin:$PATH\n# Khuyên dùng: Chạy với user non-root để bảo mật\n# RUN useradd -m myuser && chown -R myuser /app\n# USER myuser\n\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Docker Compose",
                            "desc": "Viết file docker-compose.yml để chạy đồng thời ứng dụng FastAPI và một Redis server cho caching.",
                            "hint": "Dùng 'depends_on' để chỉ định thứ tự khởi động."
                        }
                    ]
                }
            }
        ]
    },
    "09-data-processing": {
        "title": "Giai đoạn 9: Data Processing chuyên sâu",
        "sessions": [
            {
                "id": "s12-pandas",
                "title": "Buổi 12: Pandas & Phân tích dữ liệu",
                "content": {
                    "intro": "Python là 'vua' của mảng dữ liệu. Pandas là thư viện cung cấp các cấu trúc dữ liệu hiệu năng cao và các công cụ phân tích dữ liệu dễ sử dụng. Nếu bạn đã làm việc với các hệ thống báo cáo (Reporting) trong Java, bạn sẽ thấy Pandas xử lý dữ liệu nhanh và linh hoạt hơn nhiều.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. DataFrame - Bảng dữ liệu thông minh",
                            "text": "- **Cách sử dụng thực tế:** `DataFrame` là trái tim của Pandas, cho phép bạn thao tác dữ liệu dạng bảng (CSV, Excel, SQL) một cách cực kỳ linh hoạt. Bạn có thể thêm cột, xóa hàng, hay tính toán dựa trên điều kiện chỉ với vài dòng code.\n- **Khi nào dùng:** Dùng cho mọi bài toán liên quan đến phân tích, làm sạch và thống kê dữ liệu.\n- **Lưu ý quan trọng:** Pandas được xây dựng trên **NumPy**, nghĩa là nó sử dụng cơ chế **Vectorization**. Thay vì dùng vòng lặp `for` (rất chậm), hãy sử dụng các hàm có sẵn của Pandas để tính toán đồng thời trên toàn bộ cột (cực nhanh)."
                        },
                        {
                            "type": "concept",
                            "title": "2. Xử lý dữ liệu khuyết thiếu (Missing Data)",
                            "text": "- **Cách sử dụng thực tế:** Dữ liệu thực tế thường chứa `NaN` (Not a Number). Bạn có thể dùng `df.fillna()` để điền giá trị trung bình/mặc định hoặc `df.dropna()` để loại bỏ dữ liệu rác.\n- **Khi nào dùng:** Luôn thực hiện bước 'Clean data' ngay sau khi đọc file để đảm bảo kết quả phân tích không bị sai lệch.\n- **Lưu ý quan trọng:** Phải kiểm tra xem việc xóa dữ liệu có làm mất đi quá nhiều thông tin quan trọng không. Đôi khi điền giá trị `0` hoặc giá trị trung bình là lựa chọn an toàn hơn."
                        },
                        {
                            "type": "case_study",
                            "title": "3. Ứng dụng thực tế: Tự động hóa báo cáo tài chính",
                            "text": "Thay vì dùng Excel thủ công tốn hàng giờ, bạn có thể viết một script Python dùng Pandas để đọc hàng trăm file Excel, tự động làm sạch, tính toán doanh thu, và xuất ra báo cáo PDF chỉ trong vài giây. Đây là cách các doanh nghiệp hiện đại tối ưu hóa quy trình vận hành (Data-driven Automation)."
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "data_analysis_pro.py",
                            "language": "python",
                            "code": "import pandas as pd\nimport numpy as np\n\n# 1. Tạo DataFrame mẫu (Thực tế là đọc từ pd.read_csv)\ndata = {\n    'Name': ['An', 'Bình', 'Chi', 'Dương'],\n    'Score': [85, np.nan, 92, 78], # Chứa dữ liệu thiếu\n    'City': ['HN', 'HCM', 'HN', 'ĐN']\n}\ndf = pd.DataFrame(data)\n\n# 2. Xử lý dữ liệu thiếu chuyên nghiệp\n# fillna: Điền điểm thiếu bằng giá trị trung bình của cả cột\ndf['Score'] = df['Score'].fillna(df['Score'].mean())\n\n# 3. Vectorized Operations: Tạo cột mới không dùng vòng lặp\ndf['Status'] = np.where(df['Score'] >= 80, 'Pass', 'Fail')\n\n# 4. Group by & Aggregate: Thống kê nhanh như SQL\ncity_stats = df.groupby('City')['Score'].agg(['mean', 'count'])\n\nprint(\"Dữ liệu sau khi làm sạch:\")\nprint(df)\nprint(\"\\nThống kê theo thành phố:\")\nprint(city_stats)"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Báo cáo bán hàng",
                            "desc": "Cho file CSV 'sales.csv' chứa các cột: product, price, quantity. Hãy tính tổng doanh thu cho từng sản phẩm.",
                            "hint": "Tạo cột mới revenue = price * quantity, sau đó dùng groupby('product')['revenue'].sum()."
                        }
                    ]
                }
            }
        ]
    },
    "10-deployment": {
        "title": "Giai đoạn 10: Cloud & External Services",
        "sessions": [
            {
                "id": "s13-deployment",
                "title": "Buổi 13: Triển khai lên Cloud (AWS/GCP)",
                "content": {
                    "intro": "Đưa ứng dụng ra thế giới thực đòi hỏi kiến thức về hạ tầng (Infrastructure). Buổi này sẽ giúp bạn hiểu cách vận hành hệ thống Python trên các nền tảng Cloud lớn, cách tối ưu chi phí và bảo mật thông tin nhạy cảm.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Kiến thức Python: Cloud Service Models",
                            "text": "- **Cách sử dụng thực tế:** \n    *   **EC2 (IaaS):** Dùng khi cần toàn quyền kiểm soát server (vd: cài đặt các thư viện hệ thống đặc thù).\n    *   **Elastic Beanstalk (PaaS):** Dùng cho các ứng dụng web tiêu chuẩn, giúp bạn quên đi việc quản lý OS.\n    *   **Lambda (Serverless):** Dùng cho các task nhỏ, chạy không thường xuyên (vd: resize ảnh khi user upload).\n- **Khi nào dùng:** Chọn Serverless cho các task lẻ, PaaS cho team nhỏ muốn ra mắt sản phẩm nhanh, và IaaS khi cần tối ưu hiệu năng/chi phí ở quy mô lớn.\n- **Lưu ý quan trọng:** Luôn theo dõi chi phí (Billing) và thiết lập Alert. Một hàm Lambda bị loop vô tận có thể làm 'bay màu' tài khoản của bạn."
                        },
                        {
                            "type": "concept",
                            "title": "2. Kiến thức Python: Nginx Reverse Proxy",
                            "text": "- **Cách sử dụng thực tế:** Nginx nhận request HTTPS (port 443), giải mã SSL và chuyển request HTTP (port 8000) vào FastAPI. Nó cũng cache các file tĩnh giúp giảm tải cho Python.\n- **Khi nào dùng:** Luôn luôn dùng Nginx (hoặc một Load Balancer) đứng trước ứng dụng Python trong môi trường thực tế.\n- **Lưu ý quan trọng:** Đảm bảo cấu hình đúng `X-Forwarded-For` để FastAPI có thể nhận biết được IP thực của người dùng thay vì IP của Nginx."
                        },
                        {
                            "type": "compare",
                            "title": "3. So sánh Cloud Concepts vs Traditional Java Hosting",
                            "items": [
                                { "label": "Web Server", "python": "Uvicorn / Gunicorn (ASGI/WSGI)", "java": "Tomcat / Jetty / Undertow" },
                                { "label": "Packaging", "python": "Docker Image (Khuyên dùng)", "java": "JAR / WAR Files" },
                                { "label": "Static Content", "python": "Nginx / CloudFront / S3", "java": "Spring Resource Handlers" },
                                { "label": "Bảo mật", "python": "Environment Variables (.env)", "java": "Spring Cloud Config / KeyStore" }
                            ]
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "nginx_pro.conf",
                            "language": "nginx",
                            "code": "# Cấu hình Nginx tối ưu cho FastAPI\nserver {\n    listen 80;\n    server_name api.myapp.com;\n\n    # 1. Chuyển hướng tự động sang HTTPS (Best practice)\n    # return 301 https://$host$request_uri;\n\n    location / {\n        # 2. Proxy request tới Uvicorn đang chạy ở port 8000\n        proxy_pass http://127.0.0.1:8000;\n        \n        # 3. Giữ nguyên thông tin header gốc của người dùng\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n\n    # 4. Serve static files trực tiếp từ disk (Cực nhanh)\n    location /static/ {\n        alias /app/static/;\n        expires 30d; # Cache trình duyệt trong 30 ngày\n        add_header Cache-Control \"public, no-transform\";\n    }\n}"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Bài tập 1: Quản lý biến môi trường",
                            "desc": "Viết code sử dụng thư viện `python-dotenv` để nạp các thông tin nhạy cảm (DB_URL, API_KEY) từ file `.env` và in ra theo định dạng che giấu (vd: api_***_xyz).",
                            "hint": "Dùng `os.getenv()` và kỹ thuật cắt chuỗi string slicing."
                        }
                    ]
                }
            }
        ]
    },
    "11-final-projects": {
        "title": "Giai đoạn 11: Dự Án Thực Chiến",
        "sessions": [
            {
                "id": "sproject-backend",
                "title": "Dự án 1: Hệ thống Thương mại điện tử (E-commerce)",
                "content": {
                    "intro": "Dự án tổng kết yêu cầu bạn vận dụng toàn bộ kiến thức từ Python nâng cao, Database, FastAPI cho đến Docker và Cloud. Mục tiêu là xây dựng một hệ thống có khả năng mở rộng (scalable), bảo mật và dễ bảo trì.",
                    "theory": [
                        {
                            "type": "concept",
                            "title": "1. Kiến thức Python: Kiến trúc Modular Monolith",
                            "text": "- **Cách sử dụng thực tế:** Chia mã nguồn thành các module độc lập theo nghiệp vụ (vd: `auth`, `products`, `orders`). Mỗi module có đầy đủ Model, API, và Logic riêng.\n- **Khi nào dùng:** Dùng cho hầu hết các dự án khởi đầu. Nó mang lại sự đơn giản của Monolith nhưng dễ dàng tách thành Microservices khi cần mở rộng quy mô team hoặc hệ thống.\n- **Lưu ý quan trọng:** Giới hạn việc gọi chéo giữa các module. Nếu module A cần dữ liệu từ module B, hãy cân nhắc dùng một Service chung hoặc Event-driven để tránh phụ thuộc vòng (Circular Dependency)."
                        },
                        {
                            "type": "concept",
                            "title": "2. Kiến thức Python: Bảo mật JWT & RBAC",
                            "text": "- **Cách sử dụng thực tế:** Sử dụng JWT để xác thực người dùng mà không cần lưu session trên server. Kết hợp với RBAC để kiểm soát chi tiết ai được phép gọi API nào (vd: chỉ `admin` mới được xóa sản phẩm).\n- **Khi nào dùng:** Bắt buộc cho các ứng dụng web hiện đại và ứng dụng di động.\n- **Lưu ý quan trọng:** Không lưu thông tin nhạy cảm vào JWT payload vì nó chỉ được mã hóa Base64 (ai cũng có thể đọc được). Luôn sử dụng HTTPS để tránh bị đánh cắp token."
                        },
                        {
                            "type": "concept",
                            "title": "3. Kiến thức Python: Async Background Tasks với Celery",
                            "text": "- **Cách sử dụng thực tế:** Khi user nhấn 'Đặt hàng', API trả về 'Thành công' ngay lập tức. Việc gửi email và trừ kho được đẩy vào Celery để xử lý ngầm.\n- **Khi nào dùng:** Cho các tác vụ tốn thời gian (gửi mail, export báo cáo, xử lý ảnh) để không làm treo giao diện của người dùng.\n- **Lưu ý quan trọng:** Cần một 'Broker' như Redis hoặc RabbitMQ để làm trung gian lưu trữ các task đang chờ xử lý."
                        }
                    ],
                    "code_samples": [
                        {
                            "file": "main_project_structure.py",
                            "language": "python",
                            "code": "# 1. Cấu trúc thư mục khuyến nghị\n# /app\n#   /auth          - Module xác thực\n#   /products      - Module sản phẩm\n#   /orders        - Module đơn hàng\n#   core_config.py - Cấu hình chung\n#   main.py        - Điểm khởi chạy app\n\n# 2. Ví dụ Background Task với Celery\nfrom celery import Celery\n\n# Khởi tạo Celery với Redis làm Broker\ncelery_app = Celery('tasks', broker='redis://localhost:6379/0')\n\n@celery_app.task\ndef send_order_confirmation_email(email: str, order_id: int):\n    # Logic gửi mail tốn thời gian ở đây\n    print(f\"Đã gửi mail xác nhận đơn {order_id} tới {email}\")\n    return True\n\n# 3. Gọi task từ FastAPI\n# send_order_confirmation_email.delay(\"user@example.com\", 12345)"
                        }
                    ],
                    "exercises": [
                        {
                            "title": "Yêu cầu đồ án",
                            "desc": "Thiết kế Database Schema cho module 'Orders'. Phải giải quyết được bài toán: khi giá sản phẩm thay đổi, đơn hàng cũ vẫn phải giữ đúng giá lúc khách mua.",
                            "hint": "Lưu bản sao giá sản phẩm vào bảng OrderItems (Snapshot pattern)."
                        }
                    ]
                }
            }
        ]
    }
};



const initialGitTracker = {
    "username": "PythonDeveloper",
    "repo": "Python-Learn-Advanced",
    "commits": [
        {
            "id": "c1",
            "message": "feat: initialize project structure and dashboard",
            "date": "2024-03-20",
            "type": "feat",
            "impact": "High"
        },
        {
            "id": "c2",
            "message": "docs: add deep dive into python data types",
            "date": "2024-03-21",
            "type": "docs",
            "impact": "Medium"
        },
        {
            "id": "c3",
            "message": "feat: implement advanced oop concepts and decorators",
            "date": "2024-03-22",
            "type": "feat",
            "impact": "High"
        },
        {
            "id": "c4",
            "message": "fix: resolve memory leak in generator session",
            "date": "2024-03-23",
            "type": "fix",
            "impact": "Critical"
        },
        {
            "id": "c5",
            "message": "chore: upgrade dependencies for fastapi and sqlalchemy",
            "date": "2024-03-24",
            "type": "chore",
            "impact": "Low"
        }
    ]
};

const initialProgress = {
    "skills": {
        "Python": 1,
        "FastAPI": 0,
        "React": 0,
        "Database": 2,
        "Testing": 0,
        "DevOps": 0,
        "Data": 0
    },
    "milestones": [
        { "id": 1, "title": "Hoàn thành Giai đoạn 1", "deadline": "2024-04-25", "completed": false }
    ]
};

localStorage.setItem('cms_docs', JSON.stringify(initialDocs));
localStorage.setItem('cms_git', JSON.stringify(initialGitTracker));
localStorage.setItem('cms_progress', JSON.stringify(initialProgress));
localStorage.setItem('cms_settings', JSON.stringify({
    "name": "Developer",
    "avatar": "👨‍💻",
    "startDate": new Date().toISOString().split('T')[0],
    "dailyTarget": 120
}));
