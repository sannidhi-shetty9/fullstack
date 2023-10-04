
// Create a watcher for a file or directory
// const watcher = fs.watch(filename[, options]);

// filename: The path to the file or directory you want to watch for changes.
// options (optional): An optional object that can be used to specify options for the watcher, such as the type of events to watch for ('change', 'rename', or both), and whether to watch recursively in subdirectories.

// The 'change' event is emitted when a file or directory within the specified path is modified, renamed, or deleted. The event handler receives two arguments: eventType (a string indicating the type of change) and filename (the name of the file or directory that triggered the event).

const fs = require('fs');

// Create a watcher for a specific file
const watcher = fs.watch('test.txt');

// Listen for 'change' events
watcher.on('change', (eventType, filename) => {
  console.log(`File ${filename} has been ${eventType}.`);
});

// Handle errors
watcher.on('error', (error) => {
  console.error('Watcher error:', error);
});

// Close the watcher when no longer needed
// watcher.close();

// the watcher is set up to monitor changes to the "test.txt" file. When changes occur, the 'change' event is triggered, and the event handler logs information about the change.
