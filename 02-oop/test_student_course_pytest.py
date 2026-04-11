"""
Pytest cho Student và Course
"""
import pytest
from Student import Student
from Course import Course


def test_student_init():
    s = Student("S001", "Phước")
    assert s.student_id == "S001"
    assert s.name == "Phước"
    assert s.grades == {}


def test_student_add_grade():
    s = Student("S001", "Phước")
    s.add_grade("Python", 9.5)
    assert s.grades["Python"] == 9.5


def test_student_get_average_score():
    s = Student("S001", "Phước")
    s.add_grade("Python", 9.0)
    s.add_grade("OOP", 8.0)
    assert s.get_average_score() == 8.5


def test_student_get_average_score_empty():
    s = Student("S001", "Phước")
    assert s.get_average_score() == 0


def test_student_setter_name():
    s = Student("S001", "Phước")
    s.name = "Nam"
    assert s.name == "Nam"


def test_course_init():
    c = Course("PY101", "Python cơ bản")
    assert c.course_code == "PY101"
    assert c.course_name == "Python cơ bản"
    assert c.students == []


def test_course_add_student():
    c = Course("PY101", "Python cơ bản")
    s = Student("S001", "Phước")
    c.add_student(s)
    assert len(c.students) == 1
    assert c.students[0].student_id == "S001"


def test_course_remove_student():
    c = Course("PY101", "Python cơ bản")
    s = Student("S001", "Phước")
    c.add_student(s)
    c.remove_student(s)
    assert len(c.students) == 0


def test_course_get_student_by_id():
    c = Course("PY101", "Python cơ bản")
    s = Student("S001", "Phước")
    c.add_student(s)
    found = c.get_student_by_id("S001")
    assert found == s


def test_course_get_student_by_id_not_found():
    c = Course("PY101", "Python cơ bản")
    found = c.get_student_by_id("S999")
    assert found is None


def test_course_get_class_average():
    c = Course("PY101", "Python cơ bản")
    s1 = Student("S001", "Phước")
    s1.add_grade("Python", 9.0)
    s2 = Student("S002", "Nam")
    s2.add_grade("Python", 7.0)
    c.add_student(s1)
    c.add_student(s2)
    assert c.get_class_average() == 8.0


def test_course_get_class_average_empty():
    c = Course("PY101", "Python cơ bản")
    assert c.get_class_average() == 0


def test_course_get_top_student():
    c = Course("PY101", "Python cơ bản")
    s1 = Student("S001", "Phước")
    s1.add_grade("Python", 9.0)
    s2 = Student("S002", "Nam")
    s2.add_grade("Python", 7.0)
    c.add_student(s1)
    c.add_student(s2)
    top = c.get_top_student()
    assert top.student_id == "S001"


def test_course_get_top_student_empty():
    c = Course("PY101", "Python cơ bản")
    top = c.get_top_student()
    assert top is None
