'use strict';

const VALID_TAGS = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1 - h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'
];

const nextHTMLTag = (content) =>{
    let isOpenTag = false;
};

const isValidTag = (content) => {
    let result = false;
    const tag = extractTag(content);
    result = VALID_TAGS.indexOf(tag.to) > -1;
    return result;
};

const extractTag = (content) => {
    let isOpenTag = false;
    let tag = '';
    const onlyLetters = RegExp('[A-Z|a-z]');
    for(let i=0;i<content.length;i++){
        if(!isOpenTag && content[i] === '<'){
            isOpenTag = true;
        }
        if(isOpenTag && tag != '' && content[i] === ''){
            isOpenTag = false;
        }
        if(isOpenTag && onlyLetters.test(content[i])){
            tag+=content[i];
        }
    }
    return tag;
};

module.exports = {nextHTMLTag, isValidTag};
