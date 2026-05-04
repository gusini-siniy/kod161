//Type Anim

const text = "«КОД 161»";
const typingTextElement = document.getElementById("161");
let i = 0;

function typeAnim() {
  if (i < text.length) {
    typingTextElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeAnim, 100);
  }
}
window.onload = typeAnim;