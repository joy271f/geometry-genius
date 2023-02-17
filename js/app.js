let serial = 0;
document.getElementById('btn-circle').addEventListener('click', function(){
    const circleInputOne = getInputValueOne('circle-input-one');
    const circleInputTwo = getInputValueOne('circle-input-two');

    serial += 1;
    const newValue = calcAreaThreeInput(0.5, circleInputOne, circleInputTwo);
    const productName = pName('triangle');

    // display data
    
    

});


document.getElementById('rectangle-btn').addEventListener('click', function(){
    const circleInputOne = getInputValueOne('rectangle-input-one');
    const circleInputTwo = getInputValueOne('rectangle-input-two');

    const newValue = calcAreaTwoInput(circleInputOne, circleInputTwo);
    console.log(newValue);
});