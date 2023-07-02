let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const spanBtn = document.querySelector('#value');


decrementBtn.addEventListener("click", () => {
    counterValue = counterValue - 1;
    spanBtn.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue = counterValue + 1;
    spanBtn.textContent = counterValue;
});


// function setCounterValue(val) {
//     if (counterValue === val) return;
//     counterValue = val;
//     ref.value.textContent = String(val);
// }

// function handleClickDecrement() {
//     setCounterValue(counterValue - 1);
// }

// function handleClickIncrement() {
//     setCounterValue(counterValue + 1);
// }