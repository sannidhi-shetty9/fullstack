/*
createReadStream: createReadStream is a method in the fs module that creates a Readable Stream. It reads data from the file in chunks or buffers, allowing you to process the data as it becomes available. It does not load the entire file into memory at once, making it suitable for large files.

Events: Readable Streams emit events that you can listen to in order to read data and respond to various conditions:

data: Emitted when data is available to be read from the stream.
end: Emitted when there is no more data to read from the stream.
error: Emitted if an error occurs while reading from the stream.
Methods for Reading Data:

.read([size]): Reads a specified number of bytes from the stream, or all available data if no size is provided.
.pipe(destination[, options]): Pipes data from the Readable Stream to a Writable Stream, allowing you to easily transfer data between streams.
Flow Control:

.pause(): Pauses the stream, preventing further data from being emitted.
.resume(): Resumes the stream, allowing data to be emitted again.
.unpipe([destination]): Removes a previously added destination stream from the pipe.
High-Water Mark: It's the threshold value that determines how much data can be stored in the internal buffer of the stream. When the buffer is full, the stream may stop reading data from the source until the buffer has room again.
*/

const fs = require('fs');

const readableStream = fs.createReadStream('test.txt', 'utf8'); // Create a Readable Stream

readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data: ${chunk}`);
});

readableStream.on('end', () => {
  console.log('Finished reading the file.');
});

readableStream.on('error', (error) => {
  console.error('Error reading the file:', error);
});

/*
In this example, the Readable Stream reads data from the "example.txt" file, and the 'data' event is emitted as chunks of data become available. The 'end' event is used to determine when the entire file has been read, and the 'error' event handles any errors that may occur during the process.
*/
