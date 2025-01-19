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
  
  for (let i = 1; i <= 45; i++){
    const div = document.createElement("div");
    div.className = "number";
    div.innerText = i;
    container.append(div);
  }
  
  const reset = document.querySelector(".reset");
  const random = document.querySelector(".random");
  
    reset.addEventListener("click", resetFn);
    
    random.addEventListener("click", () => {
      random.disabled = true;
      
      const interval = setInterval(() => {
        resetFn();
        randomFn();
      }, 50); // 0.05초마다 실행
      
      setTimeout(() => {
        clearInterval(interval);
        random.disabled = false;
      }, 1000); // 1초 후에 반복 중지
    });
    
  container.addEventListener("click", e => {
    if (e.target.classList.contains("number")) {

      const selectedCount = container.querySelectorAll(".number.bg").length;
      
      if (!e.target.classList.contains("bg") && selectedCount >= 6) {
        alert("6개까지만 선택 가능합니다.");
        return;
      }
      
      e.target.classList.toggle("bg");
    }
  });
});


  function resetFn(){
    const numbers = document.querySelectorAll(".number");
    numbers.forEach(number => {
      number.classList.remove("bg");
    });
  }

  function randomFn(){
    const numbers = document.querySelectorAll(".number");
    const selectedNumbers = [];
  
    while (selectedNumbers.length < 6) {
      const randomIndex = Math.floor(Math.random() * 45);
      if (!selectedNumbers.includes(randomIndex)) {
        selectedNumbers.push(randomIndex);
        numbers[randomIndex].classList.add("bg");
      }
    }
  };