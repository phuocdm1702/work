class Course:
    def __init__(self, course_code, course_name):
        self._course_code = course_code
        self._course_name = course_name
        self._students = []
    @property
    def course_code(self):
        return self._course_code

    @property
    def course_name(self):
        return self._course_name

    @property
    def students(self):
        return self._students

    @course_name.setter
    def course_name(self, value):
        self._course_name = value

    def add_student(self, student):
        self._students.append(student)

    def remove_student(self, student):
        self._students.remove(student)

    def get_student_by_id(self, id):
        for student in self._students:
            if student.student_id == id:
                return student

    def get_class_average(self):
        if not self._students:
            return 0
        total = 0
        for student in self._students:
            total += student.get_average_score()
        return total / len(self._students)

    def get_top_student(self):
        if not self._students:
            return None
        top_student = self._students[0]
        for student in self._students:
            if student.get_average_score() > top_student.get_average_score():
                top_student = student
        return top_student
