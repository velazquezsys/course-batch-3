const fs = require('fs');

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

const removeBlanks = (string) => {
  const withoutLines = string.replace(/\n/g,'')
  const withoutTabs = withoutLines.replace(/\t/g, '');
  const withoutSpaces = withoutLines.replace(/\s{2,}/g, '');
  return withoutSpaces;
};

const getHTMLTree = () => {

};

const getStyleTree = () => {

};

(() => {
  console.log('Inicia ejecución');
  let htmlContent = readFile('./inputs/example1.html');
  console.log('Archivo sin quitar caracteres especiales');
  console.log('---------------------------------------------------------------------------------------------------------');
  console.log(htmlContent);
  console.log('---------------------------------------------------------------------------------------------------------');
  htmlContent = removeBlanks(htmlContent);
  console.log('Archivo quitando caracteres blancos');
  console.log('---------------------------------------------------------------------------------------------------------');
  console.log(htmlContent);
  console.log('---------------------------------------------------------------------------------------------------------');

})();

module.exports = {readFile, getHTMLTree, getStyleTree};
