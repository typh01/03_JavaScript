const numbers = document.querySelectorAll(".number");
const tel = document.querySelector(".telnumber");
const reset = document.querySelector(".reset");

for(let num of numbers){
  num.addEventListener("click", (e) => {
    tel.textContent += e.target.textContent;
  });
}

reset.addEventListener("click", ()=>{
  tel.textContent = "";
});

const add = document.querySelector(".add");
const list = document.querySelector(".phone-list")

add.addEventListener("click", () => {

  const div = document.createElement("div");
  div.className = "tel-number";
  div.innerText = tel.textContent;

  const span1 = document.createElement("span");
  span1.className = "boockMark-row";
  span1.innerHTML = "&#9734;";

  const span2 = document.createElement("span");
  span2.className = "remove-row";
  span2.innerHTML = "&times;";

  /* 만들어진 span(☆버튼) 요소에 이벤트 리스너 추가 */
  span1.addEventListener("click", e => {
    if (e.target.innerText === `☆`) {
      e.target.innerText = '★';
      e.target.previousElementSibling.style.color = "red";
    } else {
      e.target.innerText = '☆';
      e.target.previousElementSibling.style.color = "black";
    }
  });

  /* 만들어진 span(X버튼) 요소에 이벤트 리스너 추가 */
  span2.addEventListener("click", e => {
    e.target.previousElementSibling.previousElementSibling.remove();
    e.target.previousElementSibling.remove();
    e.target.remove();
  });

  const row = document.createElement("div");
  row.className = "row"; 
  row.style.display = "flex"; 
  row.style.alignItems = "center";

  row.appendChild(div);
  row.appendChild(span1);
  row.appendChild(span2);

  list.appendChild(row);
});
