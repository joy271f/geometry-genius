// for 3 input calculation
function calcAreaThreeInput(constantValue, firstInput, secondInput) {
  return constantValue * firstInput * secondInput;
}

// for 2 input calculation
function calcAreaTwoInput(firstInput, secondInput) {
  return firstInput * secondInput;
}

// get input value
function getInputValueOne(id) {
  const InputOneField = document.getElementById(id);
  const InputValueOneString = InputOneField.value;
  const InputValueOne = parseFloat(InputValueOneString);

  return InputValueOne;
}

function getInputValueTwo(id) {
  const InputTwoField = document.getElementById(id);
  const InputValueTwoString = InputTwoField.value;
  const InputValueTwo = parseFloat(InputValueTwoString);

  return InputValueTwo;
}

// product name
function pName(id) {
  const productName = document.getElementById(id).innerText;
  return productName;
}

// show date
function showData(serial, productName, newValue) {
  const tableData = `
    <p>${serial}. ${productName}     ${newValue}</p>
    `;
  return tableData;
}

function displayDataDinamic(serial, productName, newValue) {
  // display data
  const getTable = document.getElementById("table");

  // create element
  const createNewElement = document.createElement("p");
  createNewElement.innerHTML = showData(serial, productName, newValue);
  getTable.appendChild(createNewElement);

  return createNewElement;
}
