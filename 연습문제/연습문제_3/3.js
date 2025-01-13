const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

const fruitList = document.getElementsByClassName("fruit");

btn.addEventListener("click", () => {

  let sum = 0;
  let str = "";

  for(let fruit of fruitList){
    if(fruit.checked){
      const name = fruit.nextElementSibling.innerText; 
      const price = fruit.nextElementSibling.nextElementSibling.innerText; 
      const input = fruit.nextElementSibling.nextElementSibling.nextElementSibling.value;

      sum += Number(price) * input;

      str += name + " " + input + "개 ";
    }
  }

  str += "총합" + sum + "원"
  result.innerText = str;
});