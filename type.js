var totalValue = '';
var targetDisplay = document.getElementById("targetDisplay");
function addValue(val) {
    totalValue += val;
    targetDisplay.textContent = totalValue;
}
function clearDisplay(val) {
    totalValue = val;
    targetDisplay.textContent = totalValue;
}
function calFunc(val) {
    totalValue += val;
    targetDisplay.textContent = totalValue;
}
function action() {
    totalValue = eval(totalValue);
    targetDisplay.textContent = totalValue;
}
