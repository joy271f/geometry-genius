let serial = 0;
document.getElementById("btn-circle").addEventListener("click", function () {
  const circleInputOne = getInputValueOne("circle-input-one");
  const circleInputTwo = getInputValueOne("circle-input-two");

  serial += 1;
  const newValue = calcAreaThreeInput(0.5, circleInputOne, circleInputTwo);
  const productName = pName("triangle");

  // display data
  displayDataDinamic(serial, productName, newValue.toFixed(2));
});

document.getElementById("rectangle-btn").addEventListener("click", function () {
  const circleInputOne = getInputValueOne("rectangle-input-one");
  const circleInputTwo = getInputValueOne("rectangle-input-two");

  serial += 1;
  const newValue = calcAreaTwoInput(circleInputOne, circleInputTwo);
  const productName = pName("rectangle");

  // display data
  displayDataDinamic(serial, productName, newValue.toFixed(2));
});

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const circleInputOne = getInputValueOne("parallelogram-input-one");
    const circleInputTwo = getInputValueOne("parallelogram-input-two");

    serial += 1;
    const newValue = calcAreaTwoInput(circleInputOne, circleInputTwo);
    const productName = pName("parallelogram");

    // display data
    displayDataDinamic(serial, productName, newValue.toFixed(2));
  });

document.getElementById("rhombus-btn").addEventListener("click", function () {
  const circleInputOne = getInputValueOne("rhombus-input-one");
  const circleInputTwo = getInputValueOne("rhombus-input-two");

  serial += 1;
  const newValue = calcAreaThreeInput(0.5, circleInputOne, circleInputTwo);
  const productName = pName("rhombus");

  // display data
  displayDataDinamic(serial, productName, newValue.toFixed(2));
});

document.getElementById("pentagon-btn").addEventListener("click", function () {
  const circleInputOne = getInputValueOne("pentagon-input-one");
  const circleInputTwo = getInputValueOne("pentagon-input-two");

  serial += 1;
  const newValue = calcAreaThreeInput(0.5, circleInputOne, circleInputTwo);
  const productName = pName("pentagon");

  // display data
  displayDataDinamic(serial, productName, newValue.toFixed(2));
});

document.getElementById("ellipse-btn").addEventListener("click", function () {
  const circleInputOne = getInputValueOne("ellipse-input-one");
  const circleInputTwo = getInputValueOne("ellipse-input-two");

  serial += 1;
  const newValue = calcAreaThreeInput(3.14, circleInputOne, circleInputTwo);
  const productName = pName("ellipse");

  // display data
  displayDataDinamic(serial, productName, newValue.toFixed(2));
});
