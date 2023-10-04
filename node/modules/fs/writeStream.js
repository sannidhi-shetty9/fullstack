/*
createWriteStream: createWriteStream is a method in the fs module that creates a Writable Stream. It allows you to write data to a file incrementally, in chunks or buffers, rather than writing all the data at once.

Events: Writable Streams emit events that you can listen to in order to write data and respond to various conditions:

drain: Emitted when the internal buffer is emptied, indicating that it's safe to continue writing.
finish: Emitted when all data has been written and the stream has ended.
error: Emitted if an error occurs during the writing process.
Methods for Writing Data:

.write(chunk[, encoding][, callback]): Writes data to the stream. The chunk argument is the data to write, and the encoding argument specifies the encoding (e.g., 'utf8'). The optional callback function is called when the data has been written.
.end([chunk][, encoding][, callback]): Ends the stream, optionally writing the last chunk of data. This method is typically used to signal the end of writing.
Buffering: Writable Streams have an internal buffer that holds data until it is flushed to the destination. The write() method returns a Boolean value that indicates whether it's okay to write more data. When the buffer is full, the method returns false, and you should wait for the 'drain' event before writing more.

*/

const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt', 'utf8');

writableStream.write('Hello, ');
writableStream.write('world!');
writableStream.end(); // End the stream

writableStream.on('finish', () => {
  console.log('Data has been written to the file.');
});

writableStream.on('error', (error) => {
  console.error('Error writing to the file:', error);
});

/*
he Writable Stream is created to write data to the "output.txt" file. Data is written to the stream using the write() method, and the stream is ended using the end() method. The 'finish' event is used to determine when the writing process is complete, and the 'error' event handles any errors that may occur during the process.
*/