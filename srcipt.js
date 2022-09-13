const btn = document.getElementById("btn");
const Minus = document.getElementById("minus");

let cishu = window.localStorage.getItem("shi") || null;
console.log(cishu);
if (cishu) {
  btn.innerText = cishu;
}
function add() {
  if (btn.innerText < 15) {
    btn.innerText++;
    window.localStorage.setItem("shi", btn.innerText);
    //window.alert("欢迎氯哥！氯哥辛苦");
  }
}

function minus() {
  if (btn.innerText > 0) {
    btn.innerText--;
    window.localStorage.setItem("shi", btn.innerText);
  }
}

window.localStorage.setItem("shi", btn.innerText);
// window.localStorage.getItem("shi");
