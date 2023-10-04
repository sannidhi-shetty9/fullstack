const fs = require('fs');


// copying files
if(0) {
fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File has been copied.');
});

}

// renaming files
if(0) {
fs.rename('oldfile.txt', 'newfile.txt', (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File has been renamed or moved.');
});

}

//Deleting a File
if(0) {
fs.unlink('file-to-delete.txt', (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File has been deleted.');
});

}

// checking if file exists
if(0) {
fs.access('file-to-check.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist.');
    return;
  }
  console.log('File exists.');
});

}

// creating a directory
if(0) {
fs.mkdir('new-directory', (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Directory created.');
});

}

// reading contents of a directory
if(0) {
fs.readdir('directory-to-list', (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Files in the directory:', files);
});
}



/*
fs.chmod(path, mode, callback):
This method is used to change the permissions of a file or directory specified by the path.
mode is an octal number representing the new permissions. For example, 0o755 sets read, write, and execute permissions for the owner and read and execute permissions for others.
The callback function is called when the operation is complete, with an error object as the first argument if there was an error.
*/
if(0) {
fs.chmod('example.txt', 0o755, (err) => {
  if (err) {
    console.error('Error changing permissions:', err);
    return;
  }
  console.log('Permissions changed successfully.');
});
}

/*
In programming, 0o755 is a numeric representation of file permissions in octal (base-8) format.
The first digit (7) represents the permissions for the owner of the file.
The second digit (5) represents the permissions for the group associated with the file.
The third digit (5) represents the permissions for others (everyone else).

7 in octal corresponds to 111 in binary, representing read (r), write (w), and execute (x) permissions.
5 in octal corresponds to 101 in binary, representing read (r) and execute (x) permissions.
*/

/*
fs.chown(path, uid, gid, callback):
This method is used to change the ownership of a file or directory specified by the path.
uid is the numeric user ID of the new owner.
gid is the numeric group ID of the new owner's group.
The callback function is called when the operation is complete, with an error object as the first argument if there was an error.
*/
if(0) {
fs.chown('example.txt', 1000, 1000, (err) => {
  if (err) {
    console.error('Error changing ownership:', err);
    return;
  }
  console.log('Ownership changed successfully.');
});
}

/*
fs.stat(path, callback):
This method is used to retrieve information about a file or directory specified by the path.
The callback function is called with a stats object that contains information about the file, including its permissions and ownership.
*/
if(0) {
fs.stat('example.txt', (err, stats) => {
  if (err) {
    console.error('Error retrieving file stats:', err);
    return;
  }
  console.log('File stats:', stats);
  console.log('File permissions:', stats.mode.toString(8)); // Display permissions in octal format
  console.log('File owner UID:', stats.uid);
  console.log('File group GID:', stats.gid);
});
}
