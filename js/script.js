import themeSw from "./themeSw.js";
import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { btnPress, clearBtn, keyboardTyping } from "./keyEvents.js";

{
  document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener("click", btnPress)
  })
  
  document.querySelector("input").addEventListener("keydown", keyboardTyping);  
  document.getElementById("copy").addEventListener("click", copyToClipboard);
  document.getElementById('equal').addEventListener("click", calculate)
  document.getElementById("themeSw").addEventListener('click', themeSw)
  document.getElementById("clear").addEventListener("click", clearBtn);
}
  
  