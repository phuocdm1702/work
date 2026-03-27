# 1.Nhóm Immutable (Không thể thay đổi - Giống như String/Wrapper classes trong Java
# Khai báo một Tuple
PROJECT_INFO = (
    "Python-Learn",
    "v1.0",
    2024
);
# thay đổi version và quan sát lỗi
print("Tuple PROJECT_INFO:",PROJECT_INFO);
# inx_ver = PROJECT_INFO.index("v1.0");
# PROJECT_INFO[inx_ver] = "v1.2"; => khong the thay doi khi PROJECT_INFO la Danh sách bất biến
# Khai báo một biến status kiểu NoneType (Tương đương null trong Java).
status = None;
print(type(status));

# 2. Nhóm Mutable
# List (ArrayList):
tech_stach = [
    "Python",
    "FastAPI",
]
print(tech_stach)

# Thêm "PostgreSQL" vào cuối.
tech_stach.append("PostGreSQL")
print("Sau khi them vao cuoi List:",tech_stach)

# Set (HashSet):
# Đúng nghĩa Set: Chỉ chứa các phần tử duy nhất
unique_tags = {"backend", "api", "python"}
unique_tags.add("backend") # Thử thêm trùng
print(f"Set sau khi thêm trùng: {unique_tags} (Kích thước vẫn là 3)")
# Cập nhật port lên 8080
unique_tags.update({
    "port": 8080
})
print("Sau khi update:", unique_tags)

# 3. Thao tác nâng cao & Tư duy Pythonic:
# Slicing: Lấy ra 2 phần tử đầu tiên của tech_stack bằng cú pháp [:].
print("Slicing:",tech_stach[:2])

# Unpacking: Giải nén PROJECT_INFO vào 3 biến name, version, year.
(name, version, year) = PROJECT_INFO
print("Name:", name)
print("Version:", version)
print("Year:", year)

# Type Casting: Chuyển đổi một List có các phần tử trùng lặp sang Set để lọc trùng, sau đó chuyển ngược lại List.
# Tạo một list có phần tử trùng
raw_data = ["Python", "Java", "Python", "C++", "Java"]
# Chuyển List -> Set (để lọc trùng) -> List (để lấy lại thứ tự/index nếu cần)
clean_data = list(set(raw_data))
print("Dữ liệu sau khi lọc trùng:", clean_data)

# Thử thách tiếp theo của Mentor:
db_config = {
    "host": "localhost",
    "port": 5432,
    "user": "admin"
}

# Yêu cầu: Hãy in ra chỉ giá trị của "host" và thử thêm một key mới "password" vào db_config.
print("Host name:", db_config["host"])
db_config["password"] = "123456"
print("Host password:", db_config["password"])

# Thử thách cuối Buổi 1: Hệ thống Quản lý Dự án (Full Data Structures)
project_hub = {
    "name": "Python-Learn Advanced",
    "members": {"Alice", "Bob", "Charlie"},
    "modules": [
        {"name": "Auth", "status": "Done"},
        {"name": "Database", "status": "In Progress"}
    ]
}

# Thao tác logic:
# 1. Thêm thành viên mới vào members (Set)
project_hub["members"].add("David")

# 2. Thêm module mới vào modules (List)
project_hub["modules"].append({"name": "API Gateway", "status": "Pending"})

# 3. Thay đổi trạng thái module đầu tiên
project_hub["modules"][0]["status"] = "Testing"

# 4. In ra thành viên thứ 2 (Convert Set sang List để lấy index)
member_list = list(project_hub["members"])
print(f"Thành viên thứ 2: {member_list[1]}")

# Kiểm tra kết quả tổng thể
print("Project Hub Update:", project_hub)