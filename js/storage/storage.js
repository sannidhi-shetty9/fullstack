if (0) {
  // cookies
  // "cookies" are small pieces of data that are stored on a user's device by a web browser when they visit a website.
  // Cookies are sent from the web server to the user's browser as part of the HTTP response header. The browser then stores the cookies locally on the user's device. On subsequent requests to the same website, the browser sends the cookies back to the server as part of the HTTP request header. This allows the website to recognize the user and provide personalized content or remember their previous interactions.
  // Cookies can be either session cookies or persistent cookies. Session cookies are temporary and are deleted once the user closes the browser. Persistent cookies, on the other hand, have an expiration date and remain on the user's device until that date or until the user manually deletes them.
  // Cookies are associated with a specific domain and path. By default, a cookie is associated with the domain of the website that set it and is sent with requests to that domain and its subdomains. The path attribute allows you to specify a specific path on the website for which the cookie should be sent.

  // document.cookie = "key1" = 2;
  // Set a cookie that expires in 7 days

  function setCookie(name, expiry) {
    document.cookie = `username=${name}; expires= ${new Date(
      //   Date.now() + expiry * 24 * 60 * 60 * 1000
      Date.now() + expiry * 1000
    ).toUTCString()}`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  setCookie("john", 60 * 60);
  const username = getCookie("username");
  console.log(username); // Output: John
  //   deleteCookie("username");
}

if (0) {
  document.cookie = "name=john";
  console.log("cookie: ", document.cookie);
}

if (0) {
  // local storage
  // Local Storage is a web browser feature in JavaScript that allows developers to store key-value pairs locally on a user's web browser. It provides a simple and persistent way to store data that remains available even when the user closes and reopens the browser or navigates to a different page within the same website.
  //   persistent even after complete start
  // Setting a value in Local Storage
  localStorage.setItem("username", "John");
  // Getting a value from Local Storage
  const username = localStorage.getItem("username");
  console.log(username); // Output: John
  // Removing an item from Local Storage
  localStorage.removeItem("username");
  // Clearing all data in Local Storage
  localStorage.clear();
}

if (0) {
  //    session storage
  // Session Storage clears all data when the browser session ends, i.e., when the user closes the browser or navigates to a different website.
  //   persistent even after page refresh
  // Setting a value in Session Storage
  sessionStorage.setItem("username", "Max");
  // Getting a value from Session Storage
  const username = sessionStorage.getItem("username");
  console.log(username); // Output: John
  // Removing an item from Session Storage
  sessionStorage.removeItem("username");
  // Clearing all data in Session Storage
  sessionStorage.clear();
}

