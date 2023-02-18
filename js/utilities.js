function calcAreaThreeInput(constantValue, firstInput, secondInput) {
    if(isNaN(firstInput)){
        alert('type first number')
    }else if(isNaN(secondInput)){
        alert('type second number')
    }else{
        return constantValue * firstInput * secondInput;
    }
}

// for 2 input calculation
function calcAreaTwoInput(firstInput, secondInput) {
    if(isNaN(firstInput)){
        alert('type first number')
    }else if(isNaN(secondInput)){
        alert('type second number')
    }else{
        return firstInput * secondInput;
    }
  
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
    <p>${serial}. ${productName}   ${newValue}cm<sup>2</sup></p>
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
