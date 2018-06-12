'use strict';
const assert = require('chai').assert;
const CSSParser = require('../CSSParser');


describe('Attributes extract style from html tag: ', () => {
    it('html tag with style attribute', () => {
        const textLine = '<div data-item="data1" data-value="value1" style="display:initial; color: black"></div>';
        const expect_value = [
            {
                selectors: ['div'],
                attributes: [
                    {key: 'display', value: 'initial'},
                    {key: 'color', value: 'black'},
                ],
                mixin: ''
            }
        ];
        const result_parser = CSSParser.parserFromHTMLTag(textLine);
        assert.deepEqual(result_parser, expect_value);
    });
});

describe('Extract Selectors array style from CSS selector: ', () => {
    it('test Array selector', () => {
        const textLine = '.navbar__title a{ color: white; text-decoration: none;}';
        const expect_value = ['.navbar__title', 'a'];
        const result_parser = CSSParser.getArrayNameSelectors(textLine);
        assert.deepEqual(result_parser, expect_value);
    });
});

describe('Extract Attributtes style from CSS selector: ', () => {
    it('CSS selector with attributes', () => {
        const textLine = '@font-face { font-family: montserrat; src: url("../fonts/Montserrat-Regular.ttf"); font-weight: normal;}';
        const expect_value = [
            {key: 'font-family', value: 'montserrat'},
            {key: 'src', value: 'url("../fonts/Montserrat-Regular.ttf")'},
            {key: 'font-weight', value: 'normal'},
        ];
        const result_parser = CSSParser.getAttributesFromCSSSelector(textLine);
        assert.deepEqual(result_parser, expect_value);
    });
    it('CSS selector without attributes', () => {
        const textLine = '@font-face {}';
        const expect_value = [];
        const result_parser = CSSParser.getAttributesFromCSSSelector(textLine);
        assert.deepEqual(result_parser, expect_value);
    });
});

describe('Extract Mixin from CSS selector: ', () => {
    it('CSS selector with mixin', () => {
        const textLine = '@font-face { @apply --my-component-titles; }';
        const expect_value = '--my-component-titles';
        const result_parser = CSSParser.getMixinFromCSSSelector(textLine);
        assert.equal(result_parser, expect_value);
    });
    it('CSS selector without mixin', () => {
        const textLine = '@font-face {}';
        const expect_value = '';
        const result_parser = CSSParser.getMixinFromCSSSelector(textLine);
        assert.equal(result_parser, expect_value);
    });
});
