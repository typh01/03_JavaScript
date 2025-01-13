const start = document.querySelector("#startBtn");

const score = document.getElementById("#score");

const btn = document.querySelectorAll("user-btn > btn")

start.addEventListener("click", ()=>{
  let count = 0;

  const num = prompt("진행할 판수를 입력하세요");
  if(count < num){
  
  } else{
    alert("게임이 종료 되었습니다. 다시 하시려면 GAME START 버튼을 눌러주세요")
  }
});


btn.addEventListener("click", ()=>{

});