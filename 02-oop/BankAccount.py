class BankAccount:
    def __init__(self, account_number, account_holder, balance=0):
        self._account_number = account_number
        self._account_holder = account_holder
        self._balance = balance
        self._transaction_history = []

    @property
    def account_number(self):
        return self._account_number

    @property
    def account_holder(self):
        return self._account_holder

    @property
    def balance(self):
        return self._balance

    @property
    def transaction_history(self):
        return self._transaction_history

    @account_holder.setter
    def account_holder(self, value):
        self._account_holder = value

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            self._transaction_history.append({
                "type": "deposit",
                "amount": amount
            })

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            self._transaction_history.append({
                "type": "withdraw",
                "amount": amount
            })

    def get_balance(self):
        return self._balance

    def get_transaction_history(self):
        return self._transaction_history

    def __str__(self):
        return f"BankAccount({self._account_number}, {self._account_holder}, {self._balance})"


if __name__ == '__main__':
    account = BankAccount("123456789", "Nguyễn Văn A")
    account.deposit(1000000)
    account.deposit(500000)
    account.withdraw(200000)
    print(account.get_balance())  # 1300000
    print(account.get_transaction_history())