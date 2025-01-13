const rNum = document.querySelector("#rNum");
const addBtn = document.querySelector("#add");
const container = document.querySelector(".container");

addBtn.addEventListener("click", () => {
  container.innerHTML = "";
  console.log(Number(rNum.value));

  const div = document.createElement("div");

  for(let i = 0; i < Number(rNum.value); i++){
    const input = document.createElement("input");
    input.className = "input-number";
    input.type = "number";
    div.append(input);
  }
  
  container.append(div);
});

const calc = document.querySelector("#calc");

calc.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".input-number");
  const result = document.querySelector("#result")

  let sum = 0;

  for(let input of inputs){
    sum += Number(input.value);
  }

  result.innerHTML = sum

});
