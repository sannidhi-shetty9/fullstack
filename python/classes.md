classes

In Python, **classes** are used to create user-defined data structures that bundle data and functionality together. Classes are the foundation of **Object-Oriented Programming (OOP)** in Python.

---

### 📘 Basic Class Syntax

```python
class MyClass:
    def __init__(self, name):  # constructor
        self.name = name       # instance variable

    def greet(self):           # method
        print(f"Hello, {self.name}!")
```

```python
# Creating an object
obj = MyClass("Alice")

# Calling a method
obj.greet()  # Output: Hello, Alice!
```

---

### 🧩 Key Concepts
Would you like a **real-world mini project** using classes? Or want me to quiz you on this to test your understanding?


| Concept         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `__init__`      | Constructor method, called when an object is created. |
| `self`          | Refers to the current instance of the class.          |
| Attributes      | Variables that belong to an instance (`self.name`).   |
| Methods         | Functions that operate on class instances.            |
| Class vs Object | Class is the blueprint; object is the instance.       |

---

### 🎯 Example with Multiple Methods

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)
```

```python
r = Rectangle(4, 5)
print(r.area())      # 20
print(r.perimeter()) # 18
```

---

### 🔁 Inheritance Example

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):
        print("Dog barks")
```

```python
d = Dog()
d.speak()  # Dog barks
```

---

### 🧱 Class vs Static vs Instance Methods

```python
class Demo:
    def instance_method(self):
        print("Instance method")

    @classmethod
    def class_method(cls):
        print("Class method")

    @staticmethod
    def static_method():
        print("Static method")
```

```python
obj = Demo()
obj.instance_method()   # Instance method
Demo.class_method()     # Class method
Demo.static_method()    # Static method
```

---


-------
Let’s dive deeper into **Python classes** by exploring the major **Object-Oriented Programming (OOP)** principles with examples:

---

## 🔹 1. **Encapsulation** (Hiding internal details)

Encapsulation means bundling the data and methods that operate on the data within one unit (class). You can **hide** data using private variables.

### Example:

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # private variable

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance
```

```python
acc = BankAccount(1000)
acc.deposit(500)
print(acc.get_balance())  # 1500
print(acc.__balance)      # ❌ AttributeError
```

> `__balance` is private, and can't be accessed directly.

---

## 🔹 2. **Inheritance** (Reusing code)

Inheritance allows one class (child) to inherit the properties and methods of another (parent).

### Example:

```python
class Vehicle:
    def move(self):
        print("Vehicle moves")

class Car(Vehicle):
    def move(self):
        print("Car drives on road")
```

```python
c = Car()
c.move()  # Car drives on road
```

> `Car` inherits from `Vehicle` and overrides the `move()` method.

---

## 🔹 3. **Polymorphism** (Same interface, different behavior)

Different classes can have methods with the same name, and Python can call the correct one based on the object type.

### Example:

```python
class Cat:
    def sound(self):
        print("Meow")

class Dog:
    def sound(self):
        print("Bark")

# Polymorphic function
def make_sound(animal):
    animal.sound()
```

```python
make_sound(Cat())  # Meow
make_sound(Dog())  # Bark
```

---

## 🔹 4. **Abstraction** (Hiding complexity)

Use **abstract classes** when you want to define a template for other classes to follow. Python provides this using `abc` module.

### Example:

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class Cow(Animal):
    def make_sound(self):
        print("Moo")
```

```python
# a = Animal() ❌ can't instantiate abstract class
c = Cow()
c.make_sound()  # Moo
```

---

## 🔹 5. **Class Variables vs Instance Variables**

| Feature             | Instance Variable | Class Variable           |
| ------------------- | ----------------- | ------------------------ |
| Defined in          | `__init__` method | Class level              |
| Specific to object? | Yes               | Shared among all objects |

### Example:

```python
class Dog:
    species = "Canis"  # class variable

    def __init__(self, name):
        self.name = name  # instance variable
```

```python
d1 = Dog("Tommy")
d2 = Dog("Max")
print(d1.species)  # Canis
print(d1.name)     # Tommy
```

---

## 🔹 Special Methods (a.k.a Magic Methods)

These are used to customize class behavior.

| Method                   | Purpose               |
| ------------------------ | --------------------- |
| `__init__`               | Constructor           |
| `__str__`                | String representation |
| `__len__`                | Length                |
| `__eq__`, `__lt__`, etc. | Comparison operators  |

### Example:

```python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"{self.title} ({self.pages} pages)"

    def __len__(self):
        return self.pages
```

```python
b = Book("Python", 300)
print(str(b))   # Python (300 pages)
print(len(b))   # 300
```

---

-------
Great question! Let's break down the **three types of methods in Python classes**:

---

## 🧩 1. **Instance Method**

* Most common type.
* Takes `self` as the **first parameter**.
* Can access and modify **instance attributes** and **call other instance methods**.

### ✅ Use when:

You want to work with **individual object data** (like `self.name`, `self.age`, etc.).

### Example:

```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):  # instance method
        print(f"Hello, I'm {self.name}")
```

```python
p = Person("Alice")
p.greet()  # Hello, I'm Alice
```

---

## 🧩 2. **Class Method**

* Defined using the `@classmethod` decorator.
* Takes `cls` (not `self`) as the **first parameter**.
* Works with the **class itself**, not an instance.
* Can be used to create **alternative constructors** or access class variables.

### ✅ Use when:

You need to affect the class as a whole, not just one instance.

### Example:

```python
class Person:
    count = 0  # class variable

    def __init__(self, name):
        self.name = name
        Person.count += 1

    @classmethod
    def get_count(cls):  # class method
        return cls.count
```

```python
p1 = Person("Alice")
p2 = Person("Bob")
print(Person.get_count())  # 2
```

---

## 🧩 3. **Static Method**

* Defined using the `@staticmethod` decorator.
* **No `self` or `cls`** parameter.
* Behaves like a regular function but lives inside a class for logical grouping.

### ✅ Use when:

The method doesn’t need to access or modify instance or class data, but is still logically related to the class.

### Example:

```python
class MathUtil:
    @staticmethod
    def add(x, y):  # static method
        return x + y
```

```python
print(MathUtil.add(3, 4))  # 7
```

---

## 🧠 Summary Table

| Feature          | Instance Method | Class Method      | Static Method     |
| ---------------- | --------------- | ----------------- | ----------------- |
| First Argument   | `self`          | `cls`             | None              |
| Access Instance? | ✅ Yes           | ❌ No              | ❌ No              |
| Access Class?    | ✅ (indirectly)  | ✅ Yes             | ❌ No              |
| Use Case         | Object behavior | Class-level logic | Utility functions |
| Decorator        | *(none)*        | `@classmethod`    | `@staticmethod`   |

---

In Python, **access modifiers** like `public`, `private`, and `protected` are **not enforced** strictly by the language, but are implemented by **naming conventions**.

---

## 🔓 1. Public Members

* **Default** in Python.
* Accessible **from anywhere** (inside and outside the class).

### Example:

```python
class Car:
    def __init__(self):
        self.brand = "Toyota"  # public

c = Car()
print(c.brand)  # ✅ Accessible: Toyota
```

---

## 🔐 2. Protected Members

* Prefix with a **single underscore**: `_variable`
* Intended to be used **within the class or subclasses**.
* Still accessible from outside (not enforced), but signals: "use with caution".

### Example:

```python
class Car:
    def __init__(self):
        self._engine = "V8"  # protected

c = Car()
print(c._engine)  # ⚠️ Technically accessible: V8
```

> Developers use `_engine` to indicate "internal use only".

---

## 🔒 3. Private Members

* Prefix with **double underscores**: `__variable`
* Python performs **name mangling**: internally renames to `_ClassName__variable`.
* Makes it harder (not impossible) to access from outside.

### Example:

```python
class Car:
    def __init__(self):
        self.__chassis_number = "ABC123"  # private

    def get_chassis(self):
        return self.__chassis_number
```

```python
c = Car()
print(c.get_chassis())         # ✅ ABC123
print(c.__chassis_number)      # ❌ AttributeError
print(c._Car__chassis_number)  # ⚠️ Works, but hacky: ABC123
```

---

## 🧠 Summary Table

| Modifier  | Syntax     | Accessible from outside? | Inheritance access? | Notes                         |
| --------- | ---------- | ------------------------ | ------------------- | ----------------------------- |
| Public    | `self.x`   | ✅ Yes                    | ✅ Yes               | Default                       |
| Protected | `self._x`  | ✅ (but not advised)      | ✅ Yes               | Use in subclasses             |
| Private   | `self.__x` | ❌ (via name mangling)    | ❌ No (without hack) | Use when strict hiding needed |

---

> Python's philosophy is: **"We're all consenting adults here."** So these are **conventions**, not rules.

Would you like a real-world class example using all three modifiers together?


------
------------
Almost — here's the correct understanding:

---

### ✅ **Public Members (`self.var`)**

* **No underscore**
* Fully accessible.
* **No error**, **no warning** — meant to be used freely.

```python
class Test:
    def __init__(self):
        self.value = 42  # public

t = Test()
print(t.value)  # ✅ No error or warning
```

---

### ⚠️ **Protected Members (`self._var`)**

* **One underscore** prefix.

* Still accessible, but by **convention**:

  > "This is internal, don't touch unless you're subclassing."

* Python doesn’t give **any warning or error** by default, but **tools like linters (e.g. Pylint)** may show a warning.

```python
class Test:
    def __init__(self):
        self._hidden = 123  # protected

t = Test()
print(t._hidden)  # ✅ No error, but not recommended
```

* ✅ Accessible
* ⚠️ Warning by convention only (via linters or IDEs)

---

### ❌ **Private Members (`self.__var`)**

* **Double underscore** prefix.
* Triggers **name mangling**, so you can’t access it by the name you gave.

```python
class Test:
    def __init__(self):
        self.__secret = "top secret"

t = Test()
print(t.__secret)        # ❌ AttributeError
print(t._Test__secret)   # ✅ Works via name mangling (hacky)
```

* ❌ **Throws `AttributeError`** if accessed directly.
* ✅ Still technically accessible with `_ClassName__var` due to name mangling (not real protection).

---

### 🔁 Summary

| Access Level | Syntax       | Accessible Outside? | Error? | Linter/IDE Warning? | Notes             |
| ------------ | ------------ | ------------------- | ------ | ------------------- | ----------------- |
| Public       | `self.var`   | ✅ Yes               | ❌ No   | ❌ No                | Normal usage      |
| Protected    | `self._var`  | ✅ Yes               | ❌ No   | ⚠️ Possibly shown   | Use in subclasses |
| Private      | `self.__var` | ❌ No (directly)     | ✅ Yes  | ❌ No                | Name-mangled      |

---

--------

Great! Let's now explore how **public**, **protected**, and **private members** behave in **inheritance**.

---

## 🔁 Inheritance with Access Modifiers

We’ll define a **parent class** with public, protected, and private variables, and access them from a **child class**.

---

### ✅ Example

```python
class Parent:
    def __init__(self):
        self.public_var = "I am public"
        self._protected_var = "I am protected"
        self.__private_var = "I am private"

    def get_private(self):
        return self.__private_var
```

```python
class Child(Parent):
    def __init__(self):
        super().__init__()

    def access_all(self):
        print("Accessing from Child:")
        print("Public:", self.public_var)          # ✅ allowed
        print("Protected:", self._protected_var)    # ✅ allowed (but not advised)
        # print("Private:", self.__private_var)     # ❌ AttributeError
        print("Private via method:", self.get_private())  # ✅ via public method
```

```python
c = Child()
c.access_all()
```

---

### 🔍 Output

```
Accessing from Child:
Public: I am public
Protected: I am protected
Private via method: I am private
```

---

### ❌ What if you try to access `__private_var` directly in child?

```python
class Child(Parent):
    def __init__(self):
        super().__init__()
        print(self.__private_var)  # ❌ AttributeError
```

> You'll get:

```
AttributeError: 'Child' object has no attribute '__private_var'
```

Because of **name mangling**, `__private_var` becomes `_Parent__private_var`.

---

## 🧠 Summary

| Modifier  | Access in Child Class | Notes                                    |
| --------- | --------------------- | ---------------------------------------- |
| Public    | ✅ Yes                 | Freely accessible                        |
| Protected | ✅ Yes (⚠️ Convention) | Intended for subclasses only             |
| Private   | ❌ No (directly)       | Only via parent methods or name mangling |

---

## 💡 Accessing Private via Name Mangling (Not recommended)

```python
class Child(Parent):
    def __init__(self):
        super().__init__()
        print("Private (hacky):", self._Parent__private_var)
```

---

### ✅ Best Practice:

Use:

* **Public** for shared APIs.
* **Protected** for internal use within base/child.
* **Private** when you want to strongly discourage external/child access.

---

-------
Great! Let's explore **magic methods** (also called **dunder methods**, because they begin and end with double underscores, like `__init__`) in Python.

These methods **define the behavior** of objects when used with operators, built-ins, and certain functions.

---

## 🔮 What are Magic Methods?

Magic methods let you override **default behavior** of built-in operations:

```python
__init__        → constructor
__str__         → string representation
__len__         → used by len()
__add__         → used with +
__eq__          → == comparison
__lt__          → < comparison
```

---

## 🔧 Common Magic Methods

| Magic Method  | Purpose / Triggered By           | Default Behavior               |
| ------------- | -------------------------------- | ------------------------------ |
| `__init__`    | Object creation                  | Initializes instance           |
| `__str__`     | `str(obj)` or `print(obj)`       | Returns object type and memory |
| `__repr__`    | `repr(obj)` or interactive shell | Same as default `__str__`      |
| `__len__`     | `len(obj)`                       | ❌ Not implemented by default   |
| `__getitem__` | `obj[key]`                       | ❌ Raises TypeError             |
| `__setitem__` | `obj[key] = val`                 | ❌ Raises TypeError             |
| `__delitem__` | `del obj[key]`                   | ❌ Raises TypeError             |
| `__iter__`    | `for x in obj`                   | ❌ Raises TypeError             |
| `__next__`    | `next(obj)`                      | ❌ Raises TypeError             |
| `__call__`    | `obj()`                          | ❌ Raises TypeError             |
| `__add__`     | `obj1 + obj2`                    | ❌ Raises TypeError             |
| `__eq__`      | `obj1 == obj2`                   | Compares identity (`is`)       |
| `__lt__`      | `obj1 < obj2`                    | ❌ Raises TypeError             |
| `__del__`     | `del obj` or garbage collection  | Finalizer before destruction   |

---

## 🔧 Examples

### 1. `__init__`, `__str__`, `__repr__`

```python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"{self.title} has {self.pages} pages"

    def __repr__(self):
        return f"Book('{self.title}', {self.pages})"
```

```python
b = Book("Python", 300)
print(str(b))    # Python has 300 pages
print(repr(b))   # Book('Python', 300)
```

---

### 2. `__len__`, `__getitem__`, `__iter__`

```python
class MyList:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return len(self.items)

    def __getitem__(self, index):
        return self.items[index]

    def __iter__(self):
        return iter(self.items)
```

```python
ml = MyList([1, 2, 3])
print(len(ml))       # 3
print(ml[1])         # 2
for x in ml: print(x)  # 1 2 3
```

---

### 3. Operator Overloading: `__add__`, `__eq__`, `__lt__`

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __lt__(self, other):
        return (self.x**2 + self.y**2) < (other.x**2 + other.y**2)

    def __repr__(self):
        return f"Point({self.x}, {self.y})"
```

```python
p1 = Point(1, 2)
p2 = Point(3, 4)
print(p1 + p2)     # Point(4, 6)
print(p1 == p2)    # False
print(p1 < p2)     # True
```

---

### ✅ Default Values / Behavior Recap

| Method     | Default Behavior if Not Defined            |
| ---------- | ------------------------------------------ |
| `__init__` | No arguments allowed (default constructor) |
| `__str__`  | `<__main__.ClassName object at 0x...>`     |
| `__repr__` | Same as `__str__`                          |
| `__len__`  | ❌ `TypeError: object has no len()`         |
| `__add__`  | ❌ `TypeError: unsupported operand type(s)` |
| `__eq__`   | Compares identity (`is`)                   |
| `__call__` | ❌ `TypeError: object not callable`         |

---

---------
Sure! Here's what happens when you **do not override** `__str__` in your class.

---

### ❌ Without `__str__`:

```python
class Book:
    def __init__(self, title):
        self.title = title

b = Book("Python Guide")
print(b)
```

### 🖨️ Output:

```
<__main__.Book object at 0x7f3a18cdbcd0>
```

This is the **default** string representation, which includes:

* The class name (`Book`)
* The module (`__main__`)
* The memory address (`0x7f3a...`)

---

### ✅ With `__str__`:

```python
class Book:
    def __init__(self, title):
        self.title = title

    def __str__(self):
        return f"Book: {self.title}"

b = Book("Python Guide")
print(b)
```

### 🖨️ Output:

```
Book: Python Guide
```

So, overriding `__str__` gives your object a **readable, custom output** when printed.


