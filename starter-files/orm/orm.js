const fs = require('fs');
const { generateId } = require('./utils');

const createEntry = data => {
  return new Promise((resolve, reject) => {
    const todoId = generateId();
    const fileName = __dirname + '/.db/' + todoId + '.json';

    fs.writeFile(
      fileName,
      JSON.stringify({
        id: todoId,
        text: data.text }),
      (error) => {
        if (error) {
          reject(error)
        }
  
        getEntry(fileName).then(JSON.parse).then(resolve);
      }
    );
  });
};

const getEntry = pathToFile => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(data);
    });
  })
};

const updateEntry = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      __dirname + '/.db/' + data.id + '.json',
      JSON.stringify(data),
      (error) => {
        if (error) {
          reject(error)
        }
  
        getEntry(fileName).then(resolve);
      }
    );
  });
};

const deleteEntry = data => {
  return new Promise((resolve, reject) => {
    fs.unlink(
      __dirname + '/.db/' + data.id + '.json',
      error => {
        if (error) {
          reject(error);
        }

        resolve(data.id);
      }
    )
  });
};

const findAllEntries = () => {
  return fs.promises.opendir(__dirname + '/.db')
    .then(dir => {
      return new Promise(async (resolve, reject) => {        
        try {
          const data = { "items": [] };

          for await (const entry of dir) {
            data.items.push(await getEntry(__dirname + '/.db/' + entry.name))
          }

          resolve(data);
        }

        catch(error) {
          reject(error);
        }
      });
    })
};

if (!fs.existsSync(__dirname + '/.db')){
  fs.mkdirSync(__dirname + '/.db');
}

module.exports = {
  createEntry,
  deleteEntry,
  findAllEntries,
  updateEntry
};