const fs = require('fs').promises;

async function demoFS() {
  try {
    // 1️⃣ Create and write to a file
    await fs.writeFile('example.txt', 'Hello, Node.js File System!');
    console.log('File created and data written successfully.');

    // 2️⃣ Read the file
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('File content:', data);

    // 3️⃣ Append data
    await fs.appendFile('example.txt', '\nAppending more data!');
    console.log('Data appended successfully.');

    // 4️⃣ Rename file
    await fs.rename('example.txt', 'renamed_example.txt');
    console.log('File renamed successfully.');

    // 5️⃣ Delete file
    await fs.unlink('renamed_example.txt');
    console.log('File deleted successfully.');

  } catch (err) {
    console.error('Error:', err.message);
  }
}

demoFS();
