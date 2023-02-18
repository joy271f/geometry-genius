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
  const rectangleInputOne = getInputValueOne("rectangle-input-one");
  const rectangleInputTwo = getInputValueOne("rectangle-input-two");

  serial += 1;
  const newValue = calcAreaTwoInput(rectangleInputOne, rectangleInputTwo);
  const productName = pName("rectangle");

  // display data
  displayDataDinamic(serial, productName, newValue.toFixed(2));
});

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const parallelogramInputOne = getInputValueOne("parallelogram-input-one");
    const parallelogramInputTwo = getInputValueOne("parallelogram-input-two");

    serial += 1;
    const newValue = calcAreaTwoInput(parallelogramInputOne, parallelogramInputTwo);
    const productName = pName("parallelogram");

    // display data
    displayDataDinamic(serial, productName, newValue.toFixed(2));
  });

document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusInputOne = getInputValueOne("rhombus-input-one");
  const rhombusInputTwo = getInputValueOne("rhombus-input-two");

  serial += 1;
  const newValue = calcAreaThreeInput(0.5, rhombusInputOne, rhombusInputTwo);
  const productName = pName("rhombus");

  // display data
  displayDataDinamic(serial, productName, newValue.toFixed(2));
});

document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonInputOne = getInputValueOne("pentagon-input-one");
  const pentagonInputTwo = getInputValueOne("pentagon-input-two");

  serial += 1;
  const newValue = calcAreaThreeInput(0.5, pentagonInputOne, pentagonInputTwo);
  const productName = pName("pentagon");

  // display data
  displayDataDinamic(serial, productName, newValue.toFixed(2));
});

document.getElementById("ellipse-btn").addEventListener("click", function () {
  const ellipseInputOne = getInputValueOne("ellipse-input-one");
  const ellipseInputTwo = getInputValueOne("ellipse-input-two");

  serial += 1;
  const newValue = calcAreaThreeInput(3.14, ellipseInputOne, ellipseInputTwo);
  const productName = pName("ellipse");

  // display data
  displayDataDinamic(serial, productName, newValue.toFixed(2));
});
