function handleOnChangeEvent() {
    var select = document.getElementById("fontSize");
    var page = document.getElementById("page");
    var selectedFontSize = select.value;
    page.style.fontSize = `${selectedFontSize}px`;
}
function boldElement() {
    var page = (document.getElementById("page").style.fontWeight = "bold")
}
function italicFont() {
    var page = (document.getElementById("page").style.fontStyle =" italic")
}
function underElement() {
    var page = (document.getElementById("page").style.textDecoration = "underline")
}
function alignLeft() {
    var page = (document.getElementById("page").style.textAlign = "left")
}
function alignRight() {
    var page = (document.getElementById("page").style.textAlign = "right")
}
function alignCenter() {
    var page = (document.getElementById("page").style.textAlign = "center")
}
function alignJustify() {
    var page = (document.getElementById("page").style.textAlign = "justify")
}