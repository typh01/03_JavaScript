const container = document.querySelector(".container");
const numbers = document.querySelectorAll(".number")

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
  
  /* 
  // 향상된 for문
  const numbers = document.querySelectorAll(".number")
  const result = document.querySelector("#result")
  
  
  for (let num of numbers){ // 배열의 모든 요소에 대한 순차 접근이 가능하다.
  num.addEventListener("click", (e)=>{
    
    if(result.textContent.length >= 10){
      alert("10자 까지만 입력할 수 있습니다.");
      return;
      }
      
      // e.target : 이벤트가 발생된 요소
      // textContent == innerText
      result.textContent = e.target.textContent; // 버튼 내용 누적
      });
      } 

  const reset = document.querySelector("#reset")

  reset.addEventListener("click", ()=>{
    result.textContent = "";
  });
  */