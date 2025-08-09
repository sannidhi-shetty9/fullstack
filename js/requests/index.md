Here’s a clean breakdown of the **structure of a URL (Uniform Resource Locator)**:

---

## ✅ URL Structure

```
scheme://username:password@host:port/path?query#fragment
```

### 🔹 Real Example:

```
https://user:pass@example.com:8080/products/list?id=42&sort=asc#section2
```

---

## 🔹 URL Components Explained

| Part                   | Example           | Description                                                 |
| ---------------------- | ----------------- | ----------------------------------------------------------- |
| **Scheme / Protocol**  | `https`           | Communication protocol (`http`, `https`, `ftp`, etc.)       |
| **Username\:Password** | `user:pass@`      | (Optional) Credentials for authentication                   |
| **Host**               | `example.com`     | Domain name or IP address                                   |
| **Port**               | `:8080`           | (Optional) Server port (default for HTTP = 80, HTTPS = 443) |
| **Path**               | `/products/list`  | The resource location on the server                         |
| **Query**              | `?id=42&sort=asc` | (Optional) Key-value pairs after `?` for filtering/search   |
| **Fragment**           | `#section2`       | (Optional) Jumps to a specific part of the page             |

---

## ✅ Parsed Using JavaScript

```ts
const url = new URL('https://user:pass@example.com:8080/products/list?id=42&sort=asc#section2');

console.log(url.protocol);   // "https:"
console.log(url.username);   // "user"
console.log(url.password);   // "pass"
console.log(url.hostname);   // "example.com"
console.log(url.port);       // "8080"
console.log(url.pathname);   // "/products/list"
console.log(url.search);     // "?id=42&sort=asc"
console.log(url.hash);       // "#section2"
```

---

Would you like a helper function to extract or build URLs?



----
Here’s a complete list of all standard **HTTP status codes** grouped by category — along with their meanings:

---

## ✅ 1xx — Informational

| Code | Meaning             |
| ---- | ------------------- |
| 100  | Continue            |
| 101  | Switching Protocols |
| 102  | Processing (WebDAV) |
| 103  | Early Hints         |

---

## ✅ 2xx — Success

| Code | Meaning                       |
| ---- | ----------------------------- |
| 200  | OK                            |
| 201  | Created                       |
| 202  | Accepted                      |
| 203  | Non-Authoritative Information |
| 204  | No Content                    |
| 205  | Reset Content                 |
| 206  | Partial Content               |
| 207  | Multi-Status (WebDAV)         |
| 208  | Already Reported (WebDAV)     |
| 226  | IM Used (Delta encoding)      |

---

## ✅ 3xx — Redirection

| Code | Meaning                                |
| ---- | -------------------------------------- |
| 300  | Multiple Choices                       |
| 301  | Moved Permanently                      |
| 302  | Found (Previously "Moved Temporarily") |
| 303  | See Other                              |
| 304  | Not Modified                           |
| 305  | Use Proxy (Deprecated)                 |
| 307  | Temporary Redirect                     |
| 308  | Permanent Redirect                     |

---

## ✅ 4xx — Client Errors

| Code | Meaning                         |
| ---- | ------------------------------- |
| 400  | Bad Request                     |
| 401  | Unauthorized                    |
| 402  | Payment Required (experimental) |
| 403  | Forbidden                       |
| 404  | Not Found                       |
| 405  | Method Not Allowed              |
| 406  | Not Acceptable                  |
| 407  | Proxy Authentication Required   |
| 408  | Request Timeout                 |
| 409  | Conflict                        |
| 410  | Gone                            |
| 411  | Length Required                 |
| 412  | Precondition Failed             |
| 413  | Payload Too Large               |
| 414  | URI Too Long                    |
| 415  | Unsupported Media Type          |
| 416  | Range Not Satisfiable           |
| 417  | Expectation Failed              |
| 418  | I'm a Teapot (joke RFC 2324)    |
| 421  | Misdirected Request             |
| 422  | Unprocessable Entity (WebDAV)   |
| 423  | Locked (WebDAV)                 |
| 424  | Failed Dependency (WebDAV)      |
| 425  | Too Early                       |
| 426  | Upgrade Required                |
| 428  | Precondition Required           |
| 429  | Too Many Requests               |
| 431  | Request Header Fields Too Large |
| 451  | Unavailable For Legal Reasons   |

---

## ✅ 5xx — Server Errors

| Code | Meaning                         |
| ---- | ------------------------------- |
| 500  | Internal Server Error           |
| 501  | Not Implemented                 |
| 502  | Bad Gateway                     |
| 503  | Service Unavailable             |
| 504  | Gateway Timeout                 |
| 505  | HTTP Version Not Supported      |
| 506  | Variant Also Negotiates         |
| 507  | Insufficient Storage (WebDAV)   |
| 508  | Loop Detected (WebDAV)          |
| 510  | Not Extended                    |
| 511  | Network Authentication Required |

---


------
