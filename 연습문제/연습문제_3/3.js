const btn = document.querySelector("#btn");
const result = document.querySelector("#result");


btn.addEventListener("click", () => {
  
  let sum = 0;
  let str = "";
  
  // 방법 1)
  const fruits = document.getElementsByClassName("fruit");
  
  for(let fruit of fruits){
    if(fruit.checked){ // fruit(체크박스)가 체크 되어 있을 경우
      // 체크된 것만 이용하는 코드
      const name = fruit.nextElementSibling.innerText; 
      const price = fruit.nextElementSibling.nextElementSibling.innerText; 
      const input = fruit.nextElementSibling.nextElementSibling.nextElementSibling.value;
      
      sum += Number(price) * input;
      
      str += name + " " + input + "개 ";
    }
  }
  
  str += "총합" + sum + "원"
  result.innerText = str;
  
/*   
// 방법 2) count 클릭 시점에 체크된 .fruit만 얻어오기
const fruitList = document.querySelectorAll(".fruit:checked");

for(let fruit of fruitList){
  let str = "";
  let sum = 0;

  // 체크된 체크박스의 부모 요소를 찾은 후
  // 부모 요소의 모든 자식 요소 중 2번(span), 3번(input) 인덱스 요소 접근
  const parent = fruit.parentElement;
    
    const fruitName = parent.children[1].innerText; // 과일 이름 얻어오기
    const price = parent.children[2].innerText; // 작성된 가격 얻어오기
    const cnt = parent.children[3].value; // 입력된 개수 얻어오기
    
    str += `${fruitName} ${cnt} 개 `;

    sum += Number(price) * Number(cnt); // 선택된 과일의 가격 * 개수
  }
  
  // 결과 출력
  document.querySelector("#result").innerText = `${str} 총합 ${sum}원`;
*/
});