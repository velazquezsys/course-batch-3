const fs = require('fs');

console.log('Inicia ejecución');


const readFile = (path) => {
  let file = null;
  try {
    file = fs.readFileSync(path, 'utf8');
  }
  catch(error) {
    if(error.code === 'ENOENT') {
      return '';
    }
  }

  return file;
};

const getHTMLTree = () => {

};

const getStyleTree = () => {

};

module.exports = {readFile, getHTMLTree, getStyleTree};
