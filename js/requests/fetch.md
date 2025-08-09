The `fetch()` function in JavaScript is used to make HTTP requests (GET, POST, PUT, DELETE, etc.) from the browser. It returns a **Promise** that resolves to the `Response` object representing the response to the request.

---

### 🔹 Basic Syntax

```js
fetch(url, options)
  .then(response => response.json())  // or response.text(), response.blob(), etc.
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

### 🔸 GET Request (default)

```js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

### 🔸 POST Request

```js
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Sannidhi', age: 25 })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

### 🔸 PUT Request

```js
fetch('https://api.example.com/data/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Updated Name' })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

### 🔸 DELETE Request

```js
fetch('https://api.example.com/data/1', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

### 🔸 Common Response Methods

| Method       | Description                             |
| ------------ | --------------------------------------- |
| `res.json()` | Parse response as JSON                  |
| `res.text()` | Parse response as plain text            |
| `res.blob()` | Use for binary data like images or PDFs |
| `res.status` | Status code (e.g., 200, 404, 500)       |
| `res.ok`     | Boolean: `true` if status is 200–299    |

---

### ⚠️ Notes

* `fetch` does **not** throw on HTTP errors like 404 or 500 — you must manually check `response.ok`.
* It **throws** only on **network errors** (e.g., no internet).


----

Absolutely! Here's a **detailed explanation** of `fetch` in JavaScript, covering how it works, the full structure, and advanced use cases.

---

## 🔹 What is `fetch()`?

`fetch()` is a modern built-in browser function for making **asynchronous HTTP requests**. It's part of the **Fetch API**, replacing older methods like `XMLHttpRequest`.

It returns a **Promise**, making it perfect for working with `async/await`.

---

## 🔹 Basic Flow

```js
fetch(url, options)
  → Promise<Response>
```

1. **You call `fetch()`** with a URL (and optional config).
2. It returns a **Promise**.
3. When the network request completes, the Promise resolves to a `Response` object.
4. You then read the body with `.json()`, `.text()`, etc.

---

## 🔸 Detailed `fetch()` Example (GET)

```js
fetch('https://api.example.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // convert to JavaScript object
  })
  .then(data => {
    console.log('User data:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```

---

## 🔹 The `options` Object

You can configure fetch using an optional second parameter (the `options` object):

```js
fetch('https://api.example.com/data', {
  method: 'POST',               // GET, POST, PUT, DELETE, etc.
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token' // optional
  },
  body: JSON.stringify({
    name: 'Sannidhi',
    age: 25
  })
})
```

---

## 🔸 Using `async/await` (cleaner)

```js
async function loadData() {
  try {
    const response = await fetch('https://api.example.com/info');
    if (!response.ok) throw new Error('Failed to fetch');
    
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}
```

---

## 🔹 Common Use Cases

### ✅ Fetch with Query Params

```js
const name = 'John';
fetch(`https://api.example.com/search?name=${encodeURIComponent(name)}`)
```

---

### ✅ File Upload

```js
const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('https://api.example.com/upload', {
  method: 'POST',
  body: formData
})
```

> Note: No need to set `Content-Type` when using `FormData` — the browser will set it automatically.

---

### ✅ Handling Different Content Types

| Content Type              | Method to read                      |
| ------------------------- | ----------------------------------- |
| JSON (`application/json`) | `res.json()`                        |
| Text (`text/plain`)       | `res.text()`                        |
| HTML (`text/html`)        | `res.text()`                        |
| File (`application/pdf`)  | `res.blob()`                        |
| Image                     | `res.blob()` or `res.arrayBuffer()` |

---

## 🔹 Handling Errors

```js
fetch('https://api.example.com/data')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    return res.json();
  })
  .catch(err => {
    console.error('Network or HTTP error:', err.message);
  });
```

---

## 🔸 Summary Table

| Feature         | `fetch()`                         |
| --------------- | --------------------------------- |
| Returns         | `Promise<Response>`               |
| Default Method  | `GET`                             |
| Can Send Body?  | Yes, for POST/PUT                 |
| Works in Node?  | Not by default (use `node-fetch`) |
| Handles Errors? | Only for network errors (not 404) |

---

Here's a **concise explanation** of the **response object** from a `fetch()` request in JavaScript/TypeScript:

---

## ✅ `fetch()` Response Object

When you make a fetch request:

```ts
const response = await fetch(url);
```

The `response` object has several useful properties and methods:

---

### 🔹 Common Properties

| Property     | Type      | Description                           |
| ------------ | --------- | ------------------------------------- |
| `status`     | `number`  | HTTP status code (e.g., 200, 404)     |
| `ok`         | `boolean` | `true` if status is in 200–299 range  |
| `statusText` | `string`  | Status text (e.g., "OK", "Not Found") |
| `headers`    | `Headers` | Response headers                      |
| `url`        | `string`  | Final URL after redirects             |
| `redirected` | `boolean` | Was the response redirected?          |
| `type`       | `string`  | Response type (e.g., "basic", "cors") |

---

### 🔹 Common Methods (Body Parsers)

| Method              | Returns                | Use For                      |
| ------------------- | ---------------------- | ---------------------------- |
| `res.json()`        | `Promise<any>`         | Parse response as JSON       |
| `res.text()`        | `Promise<string>`      | Get plain text response      |
| `res.blob()`        | `Promise<Blob>`        | Download files (images, PDF) |
| `res.arrayBuffer()` | `Promise<ArrayBuffer>` | Binary data                  |
| `res.formData()`    | `Promise<FormData>`    | Form submission responses    |

---

### ✅ Example

```ts
const response = await fetch('/api/user');

if (response.ok) {
  const data = await response.json(); // parse JSON body
  console.log(data);
} else {
  console.error('Error:', response.status, response.statusText);
}
```

---

### 🧠 Tip: Check `.ok` before parsing

```ts
if (!response.ok) {
  throw new Error(`HTTP ${response.status}: ${response.statusText}`);
}
```

---

Want a reusable `fetch` wrapper that returns `{ data, error, status }`?




----
Sure! Here's the short version of **TypeScript types for `fetch`**:

```ts
// Request config
const config: RequestInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Sannidhi' })
};

// Response data type
interface MyDataType {
  id: number;
  name: string;
}

// Usage
const res = await fetch('/api/data', config);
const data: MyDataType = await res.json();
```

### ✅ Optional reusable typed fetch:

```ts
async function typedFetch<T>(url: string, config?: RequestInit): Promise<T> {
  const res = await fetch(url, config);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
}
```

```ts
const user = await typedFetch<MyDataType>('/api/user');
```

Let me know if you want error typing too.

----

errors:

Here’s a concise breakdown of **all common HTTP error types** you might encounter during HTTP requests (using `fetch` or `axios`), grouped by category:

---

## ✅ 1. **HTTP Status Code Errors (from server)**

These errors mean the server responded, but the response indicates a failure.

| Code | Type                  | Meaning                                      |
| ---- | --------------------- | -------------------------------------------- |
| 400  | Bad Request           | Malformed request syntax or data             |
| 401  | Unauthorized          | Missing/invalid authentication               |
| 403  | Forbidden             | Authenticated but not allowed                |
| 404  | Not Found             | Resource does not exist                      |
| 409  | Conflict              | Resource conflict (e.g., duplicate data)     |
| 422  | Unprocessable Entity  | Validation error                             |
| 429  | Too Many Requests     | Rate limiting                                |
| 500  | Internal Server Error | Generic server crash                         |
| 502  | Bad Gateway           | Server received an invalid upstream response |
| 503  | Service Unavailable   | Server is down or overloaded                 |
| 504  | Gateway Timeout       | Server timed out while acting as proxy       |

In `fetch`:

```ts
if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`);
}
```

In `axios`:

```ts
.catch((err: AxiosError) => {
  console.log(err.response?.status);  // one of the above codes
})
```

---

## ✅ 2. **Network Errors (No Response)**

These happen when the **request never reaches the server**, often due to:

| Type                     | Description                            |
| ------------------------ | -------------------------------------- |
| `TypeError` (fetch)      | Network failure, bad URL, or DNS error |
| `ECONNREFUSED` (axios)   | Server refused connection              |
| `ENOTFOUND` (axios/node) | Domain name not found                  |
| `ETIMEDOUT`              | Server didn’t respond in time          |

Example (fetch):

```ts
try {
  await fetch('http://bad.url');
} catch (err) {
  console.error('Network error:', err.message);
}
```

---

## ✅ 3. **Client-side Errors**

These are errors in your own code or environment.

| Error                  | Meaning                                     |
| ---------------------- | ------------------------------------------- |
| `SyntaxError`          | Malformed JSON (e.g., bad `.json()` parse)  |
| `AbortError`           | Request was cancelled via `AbortController` |
| `CORS error` (browser) | Server didn’t allow cross-origin request    |

---

## ✅ 4. **Axios-Specific Error Types**

Axios classifies errors into 3 categories:

```ts
import { AxiosError } from 'axios';

axios.get('/api')
  .catch((error: AxiosError) => {
    if (error.response) {
      // HTTP error from server (400–599)
    } else if (error.request) {
      // No response received (network failure)
    } else {
      // Setup error (bad config, etc.)
    }
  });
```

---

## ✅ TypeScript Interface (Optional)

```ts
interface HttpError {
  status?: number;
  message: string;
  code?: string; // e.g., 'ECONNABORTED', 'ERR_NETWORK'
  details?: any;
}
```

---

Would you like an enum or a helper utility function to handle these errors more easily in code?
