const lotto = document.querySelector(".lotto");
const container = document.querySelector(".container");

lotto.addEventListener("click", e => {
  e.target.remove();
  
  const btn1 = document.createElement("button");
  btn1.className = "reset";
  btn1.innerText = "초기화";
  
  const btn2 = document.createElement("button");
  btn2.className = "random";
  btn2.innerText = "랜덤 선택";
  
  container.before(btn1, btn2)
  
  for (let i = 45; i > 0; i--){
    const div = document.createElement("div");
    div.className = "number";
    div.innerText = i;
    container.prepend(div);
  }
    const reset = document.querySelector(".reset");
    const random = document.querySelector(".random");
    
    reset.addEventListener("click", ()=>{
      
    });
    
    random.addEventListener("click", () => {

    });
});