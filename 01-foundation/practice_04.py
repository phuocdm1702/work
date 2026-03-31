
from typing import Optional, Any
import logging

# Cấu hình logging để ghi ra file app.log với định dạng chuyên nghiệp
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='app.log',
    filemode='w'
)

def safe_divide(a: Any, b: Any) -> Optional[float]:
    """Thực hiện phép chia an toàn với logging."""
    result = None
    try:
        result = a / b
    except ZeroDivisionError:
        logging.error("Lỗi: Không thể chia cho 0")
    except TypeError:
        logging.error(f"Lỗi: Sai kiểu dữ liệu giữa {type(a)} và {type(b)}")
    else:
        logging.info(f"Phép chia thành công: {a} / {b} = {result}")
    finally:
        logging.info("Hoàn thành một lượt xử lý chia.")
    
    return result

def process_calculations(data: list[tuple]):
    """Duyệt qua danh sách các cặp số và thực hiện chia."""
    logging.info(f"Bắt đầu xử lý danh sách {len(data)} phép tính.")
    for i, pair in enumerate(data, 1):
        logging.info(f"Phép tính #{i}: {pair}")
        a, b = pair
        safe_divide(a, b)
    logging.info("Kết thúc xử lý danh sách.")

def kiem_tra_tuoi(tuoi: int):
    if tuoi < 0 or tuoi > 150:
        raise ValueError("Tuổi không hợp lệ!")
    else:
        print(f"Tuổi của bạn là {tuoi}")

if __name__ == "__main__":
    # Test xử lý danh sách dữ liệu
    data_test = [
        (10, 2), 
        (5, 0), 
        ("abc", 5), 
        (20, 4)
    ]
    
    print("Đang xử lý dữ liệu... Kiểm tra file app.log để xem kết quả chi tiết.")
    process_calculations(data_test)
    
    # Test kiem_tra_tuoi
    print("\nKiểm tra nghiệp vụ tuổi:")
    try:
        kiem_tra_tuoi(-1)
    except ValueError as e:
        logging.error(f"Lỗi nghiệp vụ bắt được: {e}")
        print(f"Bắt được lỗi: {e}")