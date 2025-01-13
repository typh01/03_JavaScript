const container = document.querySelector(".container");
const numbers = document.querySelectorAll("#number")

let count = 0;
let results = "";
container.addEventListener("click", e => {
  if(count < 10){
    results += e.target.innerText
    result.innerText = results;
    count++;
  } else{
    alert("10자 까지만 입력할 수 있습니다.")
    return;
  }
  })

const reset = document.querySelector("#reset")
const result = document.querySelector("#result")
reset.addEventListener("click", e => {
    result.innerText = "";
    count = 0;
    results = "";
});