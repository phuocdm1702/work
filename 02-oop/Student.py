class Student:
    def __init__(self, student_id, name):
        self._student_id = student_id
        self._name = name
        self._grades = {}

    @property
    def student_id(self):
        return self._student_id
    @property
    def name(self):
        return self._name
    @property
    def grades(self):
        return self._grades
    @name.setter
    def name(self, value):
        self._name = value

    def add_grade(self, subject, grade):
        self._grades[subject] = grade

    def get_average_score(self):
        if not self._grades:
            return 0
        return sum(self._grades.values()) / len(self._grades)

    def __str__(self):
        return f"Student ID: {self._student_id}, Name: {self._name}"