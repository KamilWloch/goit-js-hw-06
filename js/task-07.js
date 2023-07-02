const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = "56px";

const changeFontSize = () => {
    text.style.fontSize = input.value + "px";
};

input.addEventListener("input", changeFontSize);

// handleBlurInput();
// ref.input.addEventListener('input', handleInput)

// function handleInput() {
//     ref.text.style.fontSize = `${ref.input.value}px`
// }
