
var totalValue: string = '';
var targetDisplay = document.getElementById("targetDisplay") as HTMLElement;

function addValue(val: string) {
    totalValue += val;
    targetDisplay.textContent = totalValue;
}

function clearDisplay(val: string) {
    totalValue = val;
    targetDisplay.textContent = totalValue;
}

function calFunc(val: string) {
    totalValue += val;
    targetDisplay.textContent = totalValue;
}

function action() {
    totalValue = eval(totalValue);
    targetDisplay.textContent = totalValue;
}