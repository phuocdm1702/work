class person:
    def __init__(sefl,id: int, name: str, age:int, phone: str, address: str):
        sefl.id = id
        sefl.name = name
        sefl.age = age
        sefl.phone = phone
        sefl.address = address

    @property
    def id(self) -> int:
        return self.id
    @property
    def name(self) -> str:
        return self.name
    @property
    def age(self) -> int:
        return self.age
    @property
    def phone(self) -> str:
        return self.phone
    @property
    def address(self) -> str:
        return self.address

    @id.setter
    def id(self, value):
        self._id = value

    @name.setter
    def name(self, value):
        self._name = value

    @age.setter
    def age(self, value):
        self._age = value

    @phone.setter
    def phone(self, value):
        self._phone = value

    @address.setter
    def address(self, value):
        self._address = value

    def __str__(self):
        return f"Person(id={self._id}, name='{self._name}', age={self._age})"

    def __repr__(self):
        return f"Person({self._id}, '{self._name}', {self._age}, '{self._phone}', '{self._address}')"


p = person(1,"Phước", 21, "0334536700", "HN")
print(repr(p))