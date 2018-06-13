'use strict';
const fs = require('fs');
const CSSParser = require('./CSSParser');
const HTMLParser = require('./HTMLParser');

const openFile = (filename) =>{
    let content = '';
    try {
        content = fs.readFileSync(filename, 'utf8');
    }catch(error) {
    }
    return content;
};

module.exports = {openFile};
