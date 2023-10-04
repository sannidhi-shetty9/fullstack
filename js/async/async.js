// asynchronous programming is a programming paradigm that allows certain operations to be executed independently of the main execution flow
let print = (value = "hello") => console.log(value);

if (0) {
  print("start");
  setTimeout(() => print("executing after 5 sec"), 5000);
  print("end");
}

if (0) {
  // callback
  // let inc = ()=> ++x;
  let x = 1;
  let incX = (callBack) => {
    setTimeout(() => {
      x++;
      callBack("new value of x: " + x);
    }, 5000);
  };
  print("start: " + x);
  incX(print);
  print("end: " + x);
}

if (0) {
  // promises
  // a Promise is an object that represents a value that may not be available yet but will be resolved or rejected at some point in the future. It is a powerful tool for handling asynchronous operations in a more structured and manageable way compared to traditional callbacks.

  // A Promise can have three possible states:

  // Pending: The initial state of a Promise. The operation represented by the Promise is still ongoing, and the result is not yet available.
  // Fulfilled: The Promise has successfully resolved with a value. The asynchronous operation completed successfully.
  // Rejected: The Promise has been rejected with a reason (usually an error). The asynchronous operation encountered an error.

  // Using the Promise, we chain .then() and .catch() methods. The .then() method is used to handle the fulfillment of the Promise (when it's resolved), and the .catch() method is used to handle any errors or rejections (when it's rejected).

  // When the Promise is resolved, the then callback is executed, and when an error occurs or the Promise is rejected, the catch callback is executed.

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // throw "test error";
      let x = Math.round(Math.random() * 10);
      console.log(`x: ${x}`);
      x > 5
        ? resolve(`promise resolved: ${x}`)
        : reject(`promise rejected: ${x}`);
    }, 1000);
    // resolve('promise resolved')
    // reject('promise rejected');
  });

  let thenFn = () => {
    promise
      .then((answer) => {
        console.log("Answer: ", answer);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
    thenFn();

  // async/await
  let awaitFn = async () => {
    try {
      let answer = await promise;
      console.log("Answer: ", answer);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

//   awaitFn();
}

if(1) {
    let promise = async() => {
        setTimeout(() => {
          // throw "test error";
          let x = Math.round(Math.random() * 10);
          console.log(`x: ${x}`);
          return x;
        //   x > 5
        //     ? resolve(`promise resolved: ${x}`)
        //     : reject(`promise rejected: ${x}`);
        }, 1000);
    };

    promise()
    .then((answer) => {
      console.log("Answer: ", answer);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}
