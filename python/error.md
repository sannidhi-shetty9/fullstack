Python error handling is done using **`try`**, **`except`**, **`else`**, and **`finally`** blocks. It allows you to gracefully handle errors (exceptions) that occur during runtime.

---

### 🔹 Basic Syntax

```python
try:
    # Code that might raise an exception
    risky_operation()
except SomeException:
    # Handle the exception
    print("An error occurred")
```

---

### 🔹 Full Structure

```python
try:
    # Code that might raise an exception
    result = 10 / 0
except ZeroDivisionError as e:
    print("Caught ZeroDivisionError:", e)
else:
    # Runs only if no exception occurs
    print("No error occurred, result =", result)
finally:
    # Runs no matter what
    print("This always runs (cleanup, closing files etc.)")
```

---

### 🔹 Catching Multiple Exceptions

```python
try:
    something_risky()
except (ValueError, TypeError) as e:
    print("Caught error:", e)
```

---

### 🔹 Catch All Exceptions (Not Recommended Unless Necessary)

```python
try:
    run_code()
except Exception as e:
    print("Some unexpected error:", e)
```

---

### 🔹 Raising Exceptions

You can manually raise exceptions using `raise`.

```python
def divide(x, y):
    if y == 0:
        raise ValueError("Cannot divide by zero")
    return x / y
```

---

### 🔹 Custom Exceptions

```python
class MyCustomError(Exception):
    pass

try:
    raise MyCustomError("Something went wrong!")
except MyCustomError as e:
    print("Custom error caught:", e)
```

---

Let me know if you'd like examples with file handling, API calls, or threading errors.
