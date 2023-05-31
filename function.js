let inputWidth;
let inputHeight;
function area () {
    inputWidth = prompt("Enter the width");
    let width = parseInt(inputWidth);
    inputHeight = prompt("Enter the height");
    let height = parseInt(inputHeight);
    let area = width * height;
    document.write("The area is: " + area);
}
