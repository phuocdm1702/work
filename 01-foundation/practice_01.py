# Thử thách 1.1: Khai báo và Thao tác với List
# 1. Khai báo: Tạo một danh sách languages chứa các giá trị: "Java", "C#", "JavaScript", "PHP".
languages = [
    "Java",
    "C#",
    "Javascript",
    "PHP"
]
print(languages)
# 2. Thêm phần tử: Thêm "Python" vào đầu danh sách (Sử dụng phương thức .insert()).
languages.insert(0, "Python")
print(languages)
# 3. Xóa phần tử: Xóa ngôn ngữ "PHP" khỏi danh sách.
languages.remove("PHP")
print(languages)
# 4. Cập nhật: Thay đổi "C#" thành "TypeScript".
inx = languages.index("C#")
languages[inx] = "TypeScript"
print(languages)
# 5. Kiểm tra vùng nhớ (Dành cho Java Dev)
print(id(languages))
print(type(languages))
# Thử thách 1.2: Câu lệnh điều kiện(Logic so sánh)
if "Python" in languages:
 print("Python is in the list! Ready to code.")
else:
    print("Python added to the list.")