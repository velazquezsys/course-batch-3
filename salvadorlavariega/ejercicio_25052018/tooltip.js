let element = document.getElementById("tooltip");
element.setAttribute('style', 'visibility: hidden;');

function overTooltip  () {
    element.setAttribute('style', 'visibility: visible; background-color: black; color: #fff;');
}

function overTooltipOff  () {
    element.setAttribute('style', 'visibility: hidden;');
}
