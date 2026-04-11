class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height

    @property
    def width(self):
       return self._width

    @property
    def height(self):
       return self._height

    @width.setter
    def width(self, value):
        if value > 0:
            self._width = value
        else:
            raise ValueError("Width phải > 0")

    @height.setter
    def height(self, value):
        if value > 0:
            self._height = value
        else:
            raise ValueError("Height phải > 0")

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

    def __repr__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

    def area(self):
        return self._width * self._height
    def perimeter(self):
        return 2 * (self._width + self._height)
    def is_square(self):
        return self._width == self._height

if __name__ == '__main__':
    r = Rectangle(5, 10)
    print(r)              # Rectangle(width=5, height=10)
    print(r.area())       # 50
    print(r.perimeter())  # 30
    print(r.is_square())  # False
    r.width = 10
    print(r.is_square())  # True
