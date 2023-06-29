import calculate from "./calculate.js";

const input = document.querySelector('input');

function btnPress(ev) {
  const value = ev.currentTarget.dataset.value
      input.value += value
  }

function clearBtn() {
    input.value = ''
    input.focus()
  }

function keyboardTyping(event) {
    event.preventDefault();
      const allowedKeys = [
        "(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " ",];
    if (allowedKeys.includes(event.key)) {
      input.value += event.key
      return
    }
    if (event.key === 'Backspace') {
      input.value = input.value.slice(0, -1)
    }
    if (event.key === 'Enter') {
      calculate()
    } 
  }

  export { btnPress, clearBtn, keyboardTyping }; 


  