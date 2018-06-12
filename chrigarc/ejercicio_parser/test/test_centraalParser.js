'use strict';
const assert = require('chai').assert;
const CSSParser = require('../centraalParser');
const JsonFiles = require('../tests_files/expects');

describe('Test IO Files: ', () => {
    it('Invalid File', () => {
        const filename = '';
        const content = CSSParser.openFile(filename);
    });

    it('Valid File', () => {
        const filename = '';
        const content = CSSParser.openFile(filename);
    });

    it('File not exists', () => {
        const filename = '';
        const content = CSSParser.openFile(filename);
    });
});


describe('Test HTML/CSS Parser: ', () => {
    it('Test HTML file without style attributes', () => {
        const filename = '';
        const content = CSSParser.openFile(filename);
    });

    it('Test CSS file', () => {
        const filename = '';
        const content = CSSParser.openFile(filename);
    });

    it('Test HTML file with style attributes', () => {
        const filename = '';
        const content = CSSParser.openFile(filename);
    });
});
