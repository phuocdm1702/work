# Lesson 04: Error Handling & Debugging

## 1. Tổng quan nội dung
Buổi học hôm nay tập trung vào cách xử lý các tình huống lỗi trong Python, giúp chương trình hoạt động ổn định và chuyên nghiệp hơn thông qua `try...except` và module `logging`.

## 2. Các kiến thức trọng tâm

### A. Cấu trúc Try...Except...Else...Finally
- **`try`**: Chứa đoạn code có nguy cơ gây lỗi (chia cho 0, sai kiểu dữ liệu, thiếu file...).
- **`except ErrorName as e`**: Bắt lỗi cụ thể. Biến `e` chứa thông báo lỗi chi tiết.
- **`else`**: Chạy khi khối `try` **không** xảy ra lỗi.
- **`finally`**: Luôn luôn chạy dù có lỗi hay không. *Lưu ý: Không nên dùng `return` trong `finally` vì nó sẽ ghi đè các giá trị trả về trước đó.*

### B. Tự ném lỗi với `raise`
- Dùng để chủ động dừng chương trình khi gặp dữ liệu không hợp lệ về mặt logic nghiệp vụ.
- Ví dụ: `if tuoi < 0: raise ValueError("Tuổi không thể âm")`.

### C. Logging thay vì Print
- **`logging`** là công cụ chuyên nghiệp để ghi lại lịch sử hoạt động của phần mềm.
- Các cấp độ (Levels): `DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`.
- Có thể ghi log ra màn hình hoặc ghi vào file (ví dụ `app.log`) để kiểm tra sau này.

## 3. Các bài tập đã thực hiện
1. **Hàm `safe_divide`**: Chia hai số an toàn, bắt lỗi `ZeroDivisionError` và `TypeError`.
2. **Hàm `kiem_tra_tuoi`**: Sử dụng `raise ValueError` để kiểm tra logic tuổi.
3. **Hàm `process_calculations`**: Xử lý một danh sách các phép tính, ghi nhận thành công và lỗi vào file log mà không làm dừng vòng lặp.

## 4. Ghi chú cá nhân
- Luôn ưu tiên bắt các lỗi cụ thể (`ValueError`, `TypeError`) thay vì bắt lỗi chung chung (`Exception`).
- Sử dụng `logging` giúp việc debug dễ dàng hơn nhiều so với dùng `print`, đặc biệt là khi hệ thống lớn dần.
- Khối `else` cực kỳ hữu dụng để tách biệt logic khi code chạy thành công và logic xử lý lỗi.

---
*Ngày học: 31/03/2026*
*Tài liệu thực hành: `01-foundation/practice_04.py`*
*File nhật ký: `app.log`*
